import {Action, State, StateContext} from '@ngxs/store';
import {PlayerStateModel} from '../models/player-state.model';
import {PlayerSpotifyService} from '../providers/player-spotify.service';
import {
  NextTrack,
  PlayTrack,
  PreviousTrack,
  RegisterPlayer,
  SetVolume,
  TogglePlay, UpdateDeviceStatus,
  UpdatePlayerStatus,
} from '../actions/player.actions';

@State<PlayerStateModel>({
  name: 'player',
  defaults: {
    current_track: null,
    initialized: false,
    duration: 0,
    position: 0,
    device_id: null,
    paused: true,
    track_list: [],
    current_track_id: null,
    volume: 50,
    device: null,
  }
})
export class PlayerState {
  constructor(private playerService: PlayerSpotifyService) {
  }

  @Action(PlayTrack)
  public playTrack(ctx: StateContext<PlayerStateModel>, action: PlayTrack) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      track_list: action.ids,
      current_track_id: action.id,
    });
    this.playerService.playTrack(action.ids, action.id, state.device.id, !!state.initialized).subscribe();
  }

  @Action(TogglePlay)
  public togglePlay(ctx: StateContext<PlayerStateModel>, action: PlayTrack) {
    this.playerService.togglePlay();
  }

  @Action(UpdatePlayerStatus)
  public updatePlayerStatus(ctx: StateContext<PlayerStateModel>, action: UpdatePlayerStatus) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      current_track: action.currentTrack,
      duration: action.duration,
      position: action.position,
      paused: action.paused,
    });
  }

  @Action(RegisterPlayer)
  public registerPlayer(ctx: StateContext<PlayerStateModel>, action: RegisterPlayer) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      device: {
        ...state.device,
        id: action.deviceId,
      }
    });
  }

  @Action(NextTrack)
  public nextTrack(ctx: StateContext<PlayerStateModel>, action: NextTrack) {
    const state = ctx.getState();
    this.playerService.next(state.device.id).subscribe();
  }

  @Action(PreviousTrack)
  public previousTrack(ctx: StateContext<PlayerStateModel>, action: PreviousTrack) {
    const state = ctx.getState();
    this.playerService.previous(state.device.id).subscribe();
  }

  @Action(SetVolume)
  public setVolume(ctx: StateContext<PlayerStateModel>, action: SetVolume) {
    const state = ctx.getState();
    this.playerService.setVolume(state.device.id, action.volume).subscribe();
  }

  @Action(UpdateDeviceStatus)
  public updateDeviceStatus(ctx: StateContext<PlayerStateModel>, action: UpdateDeviceStatus) {
    ctx.patchState({
      device: action.device,
    });
  }
}
