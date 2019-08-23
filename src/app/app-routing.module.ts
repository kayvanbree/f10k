import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {SpotifyGuard} from './guards/spotify.guard';
import {SpotifyRedirectGuard} from './guards/spotify-redirect.guard';
import {ArtistsPageComponent} from './pages/artists/artists-page.component';
import {SearchPageComponent} from './pages/search/search-page.component';
import {ArtistDetailPageComponent} from './pages/artist-detail/artist-detail-page.component';
import {TracksPageComponent} from './pages/tracks/tracks-page.component';
import {ImportPageComponent} from './pages/import/import-page.component';
import {AlbumsPageComponent} from './pages/album-page/albums-page.component';
import {AlbumDetailPageComponent} from './pages/album-detail-page/album-detail-page.component';
import {PlaylistPageComponent} from './pages/playlist-page/playlist-page.component';
import {PlaylistDetailPageComponent} from './pages/playlist-detail-page/playlist-detail-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'artist/:id', component: ArtistDetailPageComponent, canActivate: [SpotifyGuard] },
  { path: 'album/:id', component: AlbumDetailPageComponent, canActivate: [SpotifyGuard] },
  { path: 'artists', component: ArtistsPageComponent, canActivate: [SpotifyGuard] },
  { path: 'albums', component: AlbumsPageComponent, canActivate: [SpotifyGuard] },
  { path: 'playlist/:id', component: PlaylistDetailPageComponent, canActivate: [SpotifyGuard] },
  { path: 'playlists', component: PlaylistPageComponent, canActivate: [SpotifyGuard] },
  { path: 'tracks', component: TracksPageComponent, canActivate: [SpotifyGuard] },
  { path: 'search', component: SearchPageComponent, canActivate: [SpotifyGuard] },
  { path: 'import', component: ImportPageComponent, canActivate: [SpotifyGuard] },
  { path: '**', component: HomePageComponent, canActivate: [SpotifyRedirectGuard, SpotifyGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
