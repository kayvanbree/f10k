import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { RedirectPageComponent } from './pages/redirect/redirect-page.component';
import {SpotifyAuthorizationInterceptor} from './interceptors/spotify-authorization-interceptor';
import { NavigationComponent } from './components/navigation/navigation.component';
import {NgxsModule} from '@ngxs/store';
import { ArtistsPageComponent } from './pages/artists/artists-page.component';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {FormsModule} from '@angular/forms';
import {ArtistDetailPageComponent} from './pages/artist-detail/artist-detail-page.component';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileSpotifyService} from './store/providers/profile-spotify.service';
import {SearchSpotifyService} from './store/providers/search-spotify.service';
import {TrackSpotifyService} from './store/providers/track-spotify.service';
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
import { AlbumDetailPageComponent } from './pages/album-detail-page/album-detail-page.component';
import { ArtistNamesComponent } from './components/artist-names/artist-names.component';
import { VirtualScrollListComponent } from './components/virtual-scroll-list/virtual-scroll-list.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { PlaylistDetailPageComponent } from './pages/playlist-detail-page/playlist-detail-page.component';
import {CollectionState} from './store/states/collection.state';
import { SaveButtonComponent } from './components/save-button/save-button.component';

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
    'user-read-playback-state'
  ],
  authToken: localStorage.getItem('angular2-spotify-token'),
  apiBase: environment.apiBase,
  authorizationUrl: environment.authorizationUrl,
  f10kApiBase: environment.f10kApiBase,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RedirectPageComponent,
    NavigationComponent,
    ArtistsPageComponent,
    SearchPageComponent,
    ArtistDetailPageComponent,
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
    AlbumDetailPageComponent,
    ArtistNamesComponent,
    VirtualScrollListComponent,
    PlaylistPageComponent,
    PlaylistDetailPageComponent,
    SaveButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      PlayerState,
      AuthenticationState,
      CollectionState,
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
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
    ProfileSpotifyService,
    SearchSpotifyService,
    TrackSpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
