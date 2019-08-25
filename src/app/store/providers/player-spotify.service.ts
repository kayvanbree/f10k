import {Inject, Injectable} from '@angular/core';
import {SpotifyConfig} from '../../definitions/spotify-config';
import {HttpClient} from '@angular/common/http';
import {SpotifyAuthenticationService} from './spotify-authentication.service';
import {RegisterPlayer, UpdateDeviceStatus, UpdatePlayerStatus, UpdateVolume} from '../actions/player.actions';
import {Store} from '@ngxs/store';
import {AuthenticationState} from '../states/authentication.state';

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
        callback(this.store.selectSnapshot(AuthenticationState.token));
      },
      volume: 0.2
    });

    this.player.connect().then((success) => {
      if (success) {
        console.log('The Web Playback SDK successfully connected to Spotify!');
      }
    });

    this.player.addListener('ready', (data) => {
      // console.log('The Web Playback SDK is ready to play music!');
    });

    this.player.addListener('not_ready', ({device_id}) => {
      // console.log('The Web Playback SDK is not ready to play music!');
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
      // console.log('Connected with Device ID', device_id);
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

    setInterval(() => {
      this.getDeviceChanges();
      // this.getStateChanges();
      this.getTrackChanges();
    }, 1000);

    this.initialized = true;
  }

  private getStateChanges() {
    this.player.getCurrentState().then((playbackState) => {
      if (playbackState) {
        this.store.dispatch(new UpdatePlayerStatus(
          playbackState.track_window ? playbackState.track_window.current_track : null,
          playbackState.duration,
          playbackState.position,
          playbackState.paused,
        ));
      }
    });
  }

  private getTrackChanges() {
    this.http.get(`${this.config.apiBase}/me/player/currently-playing`).subscribe((value: any) => {
      if (value) {
        this.store.dispatch(new UpdatePlayerStatus(
          value.item,
          value.item.duration_ms,
          value.progress_ms,
          !value.is_playing,
        ));
      }
    });
  }

  private getDeviceChanges() {
    this.http.get(`${this.config.apiBase}/me/player`).subscribe((value: any) => {
      if (value && value.device) {
        this.store.dispatch(new UpdateDeviceStatus(
          value.device,
        ));
      }
    });
  }

  playTrack(
    deviceId: string,
    contextUri?: string,
    uris?: string[],
    offset?: { position_ms?: number, uri?: string },
  ) {
    const url = `${this.config.apiBase}/me/player/play?device_id=${deviceId}`;

    const body: any = {};
    if (contextUri) {
      body.context_uri = contextUri;
    } else if (uris) {
      body.uris = uris;
    }
    if (offset) {
      body.offset = offset;
    }

    return this.http.put(url, body);
  }

  togglePlay() {
    this.player.togglePlay();
  }

  next(device: string) {
    return this.http.post(`${this.config.apiBase}/me/player/next`, {});
  }

  previous(device: string) {
    return this.http.post(`${this.config.apiBase}/me/player/previous`, {});
  }

  setVolume(device: string, volume: number) {
    return this.http.put(` ${this.config.apiBase}/me/player/volume?device_id=${device}&volume_percent=${volume}`, {});
  }

  seek(device: string, position: number) {
    return this.http.put(` ${this.config.apiBase}/me/player/seek?device_id=${device}&position_ms=${position}`, {});
  }

  disconnect() {
    this.player.disconnect();
  }
}
