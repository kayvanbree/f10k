import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';
import {SpotifyAuthenticationService} from '../../providers/spotify-authentication.service';
import {RegisterPlayer, UpdatePlayerStatus} from '../actions/player.actions';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class PlayerSpotifyService {
  private player;
  private playerRegistered = false;
  private initialized = false;

  constructor(
    @Inject('SpotifyConfig') private config: SpotifyConfig,
    private http: HttpClient,
    private spotifyAuthenticationService: SpotifyAuthenticationService,
    private store: Store,
  ) {
  }

  public isInitialized(): boolean {
    return this.initialized;
  }

  public initialize(): void {
    console.log('Spotify Web Playback SDK is ready');

    this.player = new (window as any).Spotify.Player({
      name: 'f10k',
      getOAuthToken: (callback: (t: string) => void) => {
        callback(this.spotifyAuthenticationService.getToken());
      },
      volume: 0.2
    });

    this.player.connect().then((success) => {
      if (success) {
        console.log('The Web Playback SDK successfully connected to Spotify!');
      }
    });

    this.player.addListener('ready', (data) => {
      console.log('The Web Playback SDK is ready to play music!');
    });

    this.player.addListener('not_ready', ({device_id}) => {
      console.log('The Web Playback SDK is not ready to play music!');
    });

    this.player.on('ready', (data) => {
      const {device_id} = data;
      if (!this.playerRegistered) {
        this.store.dispatch(new RegisterPlayer(device_id));
        this.playerRegistered = true;
      }
    });

    this.player.on('not_ready', (data) => {
      const {device_id} = data;
      console.log('Connected with Device ID', device_id);
    });

    this.player.addListener('initialization_error', (e) => {
      console.error('Failed to initialize', e.message);
    });

    this.player.addListener('authentication_error', (e) => {
      console.error('Failed to authenticate', e.message);
    });

    this.player.addListener('account_error', (e) => {
      console.error('Failed to validate Spotify account', e.message);
    });

    this.player.addListener('playback_error', (e) => {
      console.error('Failed to perform playback', e.message);
    });

    this.player.on('player_state_changed', (playbackState) => {
      this.store.dispatch(new UpdatePlayerStatus(
        playbackState.track_window.current_track,
        playbackState.duration,
        playbackState.position,
        playbackState.paused,
      ));
    });
    this.initialized = true;

    setInterval(() => {
      this.player.getCurrentState().then((playbackState) => {
        if (playbackState) {
          this.store.dispatch(new UpdatePlayerStatus(
            playbackState.track_window.current_track,
            playbackState.duration,
            playbackState.position,
            playbackState.paused,
          ));
        }
      });
    }, 1000);
  }

  playTrack(ids: string[], id: string, deviceId: string, current: boolean) {
    let url = `${this.config.apiBase}/me/player/play`;
    // url += current ? '' : '?device_id=' + deviceId;
    url += '?device_id=' + deviceId;
    const index = ids.findIndex(x => x === id);
    const queue = ids.slice(index, Math.min(index + 50, ids.length)).map(x => `spotify:track:${x}`);
    return this.http.put(url, {
      uris: queue,
    });
  }

  togglePlay() {
    this.player.togglePlay();
  }

  next() {
    return this.http.post(`${this.config.apiBase}/me/player/next`, {});
  }

  previous() {
    return this.http.post(`${this.config.apiBase}/me/player/previous`, {});
  }

  disconnect() {
    this.player.disconnect();
  }
}
