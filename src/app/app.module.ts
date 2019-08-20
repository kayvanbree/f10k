import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import {SpotifyAuthorizationInterceptor} from './interceptors/spotify-authorization-interceptor';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {NgxsModule} from '@ngxs/store';
import {FolderState} from './store/states/folder.state';
import { ArtistsComponent } from './pages/artists/artists.component';
import {ArtistState} from './store/states/artist.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {FormsModule} from '@angular/forms';
import {SearchState} from './store/states/search.state';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import {ArtistDetailComponent} from './pages/artist-detail/artist-detail.component';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArtistSaveButtonComponent } from './components/artist-save-button/artist-save-button.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import {AlbumSpotifyService} from './store/providers/album-spotify.service';
import {ArtistSpotifyService} from './store/providers/artist-spotify.service';
import {PlaylistSpotifyService} from './store/providers/playlist-spotify.service';
import {ProfileSpotifyService} from './store/providers/profile-spotify.service';
import {SearchSpotifyService} from './store/providers/search-spotify.service';
import {TrackSpotifyService} from './store/providers/track-spotify.service';
import { TrackSaveButtonComponent } from './components/track-save-button/track-save-button.component';
import {TrackState} from './store/states/track.state';
import { TracksComponent } from './pages/tracks/tracks.component';
import {PlayerState} from './store/states/player.state';
import { PlayerComponent } from './components/player/player.component';
import { ImportComponent } from './pages/import/import.component';
import {environment} from '../environments/environment';
import {MaterialImportModule} from './modules/material-import.module';
import {SearchPageComponent} from './pages/search/search-page.component';
import {SearchComponent} from './components/search/search.component';
import { PositionSliderComponent } from './components/position-slider/position-slider.component';
import { PlaybackControlsComponent } from './components/playback-controls/playback-controls.component';
import {MinutesSecondsPipe} from './pipes/minutes-seconds.pipe';
import { VolumeControlComponent } from './components/volume-control/volume-control.component';
import { PlayerTrackInfoComponent } from './components/player-track-info/player-track-info.component';
import {AuthenticationState} from './store/states/authentication.state';

const spotifyConfig = {
  clientId: environment.clientId,
  redirectUri: environment.redirectUri,
  scope: [
    'user-read-private',
    'user-read-email',
    'user-library-read',
    'user-library-modify',
    'playlist-read-collaborative',
    'playlist-modify-private',
    'playlist-modify-public',
    'playlist-read-private',
    'user-modify-playback-state',
    'streaming',
    ' user-read-playback-state'
  ],
  authToken: localStorage.getItem('angular2-spotify-token'),
  apiBase: environment.apiBase,
  authorizationUrl: environment.authorizationUrl,
};

const serialize = (value: any) => {
  const newValue = {
    ...value,
    tracks: {
      ...value.tracks,
      tracks: [],
    },
    artists: {
      ...value.artists,
      artists: [],
      currentArtist: null,
      currentArtistId: null
    }
  };
  return JSON.stringify(newValue);
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    RedirectComponent,
    PlaylistsComponent,
    NavigationComponent,
    ArtistsComponent,
    SearchPageComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    ArtistSaveButtonComponent,
    TrackListComponent,
    TrackSaveButtonComponent,
    TracksComponent,
    PlayerComponent,
    ImportComponent,
    SearchComponent,
    PositionSliderComponent,
    PlaybackControlsComponent,
    MinutesSecondsPipe,
    VolumeControlComponent,
    PlayerTrackInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      FolderState,
      ArtistState,
      SearchState,
      TrackState,
      PlayerState,
      AuthenticationState,
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      serialize
    }),
    FormsModule,
    BrowserAnimationsModule,
    MaterialImportModule,
  ],
  providers: [
    { provide: 'SpotifyConfig', useValue: spotifyConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyAuthorizationInterceptor,
      multi: true
    },
    AlbumSpotifyService,
    ArtistSpotifyService,
    PlaylistSpotifyService,
    ProfileSpotifyService,
    SearchSpotifyService,
    TrackSpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
