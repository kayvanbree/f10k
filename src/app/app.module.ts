import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { RedirectPageComponent } from './pages/redirect/redirect-page.component';
import {SpotifyAuthorizationInterceptor} from './interceptors/spotify-authorization-interceptor';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {NgxsModule} from '@ngxs/store';
import {FolderState} from './store/states/folder.state';
import { ArtistsPageComponent } from './pages/artists/artists-page.component';
import {ArtistState} from './store/states/artist.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {FormsModule} from '@angular/forms';
import {ArtistDetailPageComponent} from './pages/artist-detail/artist-detail-page.component';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArtistSaveButtonComponent } from './components/artist-save-button/artist-save-button.component';
import {PlaylistSpotifyService} from './store/providers/playlist-spotify.service';
import {ProfileSpotifyService} from './store/providers/profile-spotify.service';
import {SearchSpotifyService} from './store/providers/search-spotify.service';
import {TrackSpotifyService} from './store/providers/track-spotify.service';
import { TrackSaveButtonComponent } from './components/track-save-button/track-save-button.component';
import {TrackState} from './store/states/track.state';
import { TracksPageComponent } from './pages/tracks/tracks-page.component';
import {PlayerState} from './store/states/player.state';
import { PlayerComponent } from './components/player/player.component';
import { ImportPageComponent } from './pages/import/import-page.component';
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
import { AlbumsPageComponent } from './pages/album-page/albums-page.component';
import {AlbumState} from './store/states/album.state';
import { AlbumSaveButtonComponent } from './components/album-save-button/album-save-button.component';
import { AlbumDetailPageComponent } from './pages/album-detail-page/album-detail-page.component';
import { ArtistNamesComponent } from './components/artist-names/artist-names.component';
import { VirtualScrollListComponent } from './components/virtual-scroll-list/virtual-scroll-list.component';

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

export function serialize(value: any) {
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
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RedirectPageComponent,
    PlaylistsComponent,
    NavigationComponent,
    ArtistsPageComponent,
    SearchPageComponent,
    ArtistDetailPageComponent,
    ArtistSaveButtonComponent,
    TrackSaveButtonComponent,
    TracksPageComponent,
    PlayerComponent,
    ImportPageComponent,
    SearchComponent,
    PositionSliderComponent,
    PlaybackControlsComponent,
    MinutesSecondsPipe,
    VolumeControlComponent,
    PlayerTrackInfoComponent,
    AlbumsPageComponent,
    AlbumSaveButtonComponent,
    AlbumDetailPageComponent,
    ArtistNamesComponent,
    VirtualScrollListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      FolderState,
      ArtistState,
      TrackState,
      PlayerState,
      AuthenticationState,
      AlbumState,
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
    PlaylistSpotifyService,
    ProfileSpotifyService,
    SearchSpotifyService,
    TrackSpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
