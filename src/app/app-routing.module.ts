import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HomeComponent} from './pages/home/home.component';
import {SpotifyGuard} from './guards/spotify.guard';
import {RedirectComponent} from './pages/redirect/redirect.component';
import {SpotifyRedirectGuard} from './guards/spotify-redirect.guard';
import {ArtistsComponent} from './pages/artists/artists.component';
import {SearchPageComponent} from './pages/search/search-page.component';
import {ArtistDetailComponent} from './pages/artist-detail/artist-detail.component';
import {TracksComponent} from './pages/tracks/tracks.component';
import {ImportComponent} from './pages/import/import.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'spotify-redirect', component: RedirectComponent, canActivate: [SpotifyRedirectGuard]},
  { path: 'artist/:id', component: ArtistDetailComponent, canActivate: [SpotifyGuard] },
  { path: 'artists', component: ArtistsComponent, canActivate: [SpotifyGuard] },
  { path: 'tracks', component: TracksComponent, canActivate: [SpotifyGuard] },
  { path: 'search', component: SearchPageComponent, canActivate: [SpotifyGuard] },
  { path: 'import', component: ImportComponent, canActivate: [SpotifyGuard] },
  { path: '**', component: HomeComponent, canActivate: [SpotifyGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
