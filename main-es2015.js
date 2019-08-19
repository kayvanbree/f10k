(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"header\">\n    <span><a [routerLink]=\"['/home']\">{{title}}</a></span>\n    <span class=\"flex-stuff\"></span>\n    <app-search class=\"search\"></app-search>\n  </header>\n  <div class=\"body\">\n    <aside class=\"sidebar column\">\n      <app-navigation class=\"navigation\"></app-navigation>\n    </aside>\n    <main class=\"content column\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n  <footer class=\"footer\">\n    <app-player></app-player>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-list/artist-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-list/artist-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container disable-select\" *ngIf=\"artists\">\n  <table mat-table [dataSource]=\"artists\" class=\"table\" *ngIf=\"!loading\">\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\"><img *ngIf=\"element.images[2]\" src=\"{{element.images[2].url}}\"/></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"popularity\">\n      <th mat-header-cell *matHeaderCellDef> Popularity</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-progress-bar class=\"progress-bar\" [value]=\"element.popularity\"></mat-progress-bar>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"saved\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <app-artist-save-button [id]=\"element.id\"></app-artist-save-button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"openArtist(row.id)\"></tr>\n  </table>\n</div>\n<mat-paginator [pageSize]=\"pageSize\" [length]=\"total\" (page)=\"openPage($event)\" showFirstLastButtons></mat-paginator>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/artist-save-button/artist-save-button.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/artist-save-button/artist-save-button.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isSaved; else notsaved\">\n  <button mat-button (click)=\"remove($event)\" class=\"saved\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</ng-container>\n\n<ng-template #notsaved>\n  <button mat-button (click)=\"save($event)\" class=\"not-saved\">\n    <mat-icon>favorite_border</mat-icon>\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"menu\">\n  <mat-list-item *ngFor=\"let item of menuItems\" class=\"menu-item\">\n    <button\n      mat-mini-fab\n      color=\"secondary\"\n      class=\"nav-button\"\n      [routerLink]=\"item.routerLink\"\n      [matTooltip]=\"item.tooltip\"\n      [matTooltipPosition]=\"'right'\"\n    >\n      <mat-icon>{{item.icon}}</mat-icon>\n    </button>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/playback-controls/playback-controls.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/playback-controls/playback-controls.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"side-button\" mat-mini-fab (click)=\"previous()\">\n  <mat-icon>skip_previous</mat-icon>\n</button>\n<ng-container *ngIf=\"player?.paused; else playButton\">\n  <button class=\"center-button\" mat-mini-fab (click)=\"togglePlay()\">\n    <mat-icon>play_arrow</mat-icon>\n  </button>\n</ng-container>\n<button class=\"side-button\" mat-mini-fab (click)=\"next()\">\n  <mat-icon>skip_next</mat-icon>\n</button>\n\n<ng-template #playButton>\n  <button class=\"center-button\" mat-mini-fab (click)=\"togglePlay()\">\n    <mat-icon>pause</mat-icon>\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/player/player.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/player/player.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"column\">\n    <div *ngIf=\"player?.current_track\" class=\"info vertical-align\">\n      <div class=\"image\">\n        <img src=\"{{player.current_track.album.images[2].url}}\"/>\n      </div>\n      <div class=\"artist-text vertical-align\">\n        <div class=\"track\">\n          {{player.current_track.name}}\n        </div>\n        <div class=\"artist\">\n          <ng-container *ngFor=\"let artist of player.current_track.artists; let last = last\">\n            <a [routerLink]=\"['/artist', artist.id]\">{{artist.name}}</a>\n            <ng-container *ngIf=\"!last\">,</ng-container>\n          </ng-container>\n        </div>\n        <div class=\"album\">\n          {{player.current_track.album.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"playback-controls vertical-align\">\n      <app-playback-controls></app-playback-controls>\n      <app-position-slider></app-position-slider>\n    </div>\n  </div>\n\n  <div class=\"column\">\n    <div class=\"volume-controls vertical-align\">\n      <app-volume-control></app-volume-control>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/playlists/playlists.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/playlists/playlists.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let folder of folders | async\">\n  {{folder.name}}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/position-slider/position-slider.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/position-slider/position-slider.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-container\">\n  <div class=\"column side\">\n    {{player.position | minutesSeconds}}\n  </div>\n  <div class=\"column\">\n    <mat-slider\n      class=\"slider\"\n      min=\"0\"\n      [max]=\"player.duration\"\n      [value]=\"player.position\"\n      (change)=\"seekPosition($event)\"\n      (input)=\"onInput($event)\"\n    ></mat-slider>\n  </div>\n  <div class=\"column side\">\n    {{player.duration | minutesSeconds}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"search-form\">\n  <mat-form-field>\n    <input\n      matInput\n      [(ngModel)]=\"searchQuery\"\n      (keydown.enter)=\"search()\"\n      name=\"search-query\"\n    />\n  </mat-form-field>\n  <button mat-raised-button routerLink=\"/search\" [queryParams]=\"{query: searchQuery}\">Search</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/track-list/track-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/track-list/track-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container disable-select\" *ngIf=\"tracks\">\n  <table mat-table [dataSource]=\"tracks\" class=\"table\" *ngIf=\"!loading\">\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\"><img *ngIf=\"element.album.images[2]\" src=\"{{element.album.images[2].url}}\"/></td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"album\">\n      <th mat-header-cell *matHeaderCellDef> Album </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <a [routerLink]=\"['/album', element.album.id]\">{{element.album.name}}</a>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"artist\">\n      <th mat-header-cell *matHeaderCellDef> Artist </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <ng-container *ngFor=\"let artist of element.artists; let last = last\">\n          <a [routerLink]=\"['/artist', artist.id]\">{{artist.name}}</a>\n          <ng-container *ngIf=\"!last\">, </ng-container>\n        </ng-container>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"popularity\">\n      <th mat-header-cell *matHeaderCellDef><mat-icon>thumb_up</mat-icon></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-progress-bar class=\"progress-bar\" [value]=\"element.popularity\"></mat-progress-bar>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"saved\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <app-track-save-button [id]=\"element.id\"></app-track-save-button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"duration\">\n      <th mat-header-cell *matHeaderCellDef><mat-icon>timer</mat-icon></th>\n      <td mat-cell *matCellDef=\"let element\">{{element.duration_ms | minutesSeconds}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"playTrack(row.id)\" [ngClass]=\"{'playing': row.id === currentSongId}\"></tr>\n  </table>\n</div>\n<mat-paginator [pageSize]=\"pageSize\" [length]=\"total\" (page)=\"openPage($event)\" showFirstLastButtons></mat-paginator>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/track-save-button/track-save-button.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/track-save-button/track-save-button.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isSaved; else notsaved\">\n  <button mat-button (click)=\"remove($event)\" class=\"saved\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</ng-container>\n\n<ng-template #notsaved>\n  <button mat-button (click)=\"save($event)\" class=\"not-saved\">\n    <mat-icon>favorite_border</mat-icon>\n  </button>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/volume-control/volume-control.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/volume-control/volume-control.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slider\n  min=\"0\"\n  max=\"100\"\n  [(ngModel)]=\"volume\"\n  [thumbLabel]=\"false\"\n  (ngModelChange)=\" onNgModelChange($event)\"\n></mat-slider>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/artist-detail/artist-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/artist-detail/artist-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"artist\">\n  <img src=\"{{artist.images[0].url}}\" />\n  <h1>{{artist.name}}</h1>\n\n  <app-artist-save-button [id]=\"artist.id\"></app-artist-save-button>\n\n  <div>Genres: <ng-container *ngFor=\"let genre of artist.genres\">{{genre}}, </ng-container></div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/artists/artists.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/artists/artists.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-artist-list\n  class=\"item-list\"\n  [ids]=\"ids\"\n  [pageSize]=\"50\"\n  [total]=\"ids.length\"\n  (pageChange)=onPageChange($event)\n></app-artist-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"profile\">\n  <div>{{profile.display_name}}</div>\n  <div>{{profile.email}}</div>\n  <div>{{profile.country}}</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/import/import.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/import/import.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <mat-card class=\"card mat-elevation-z8\">\n    <mat-card-header>\n      <h1>Import songs</h1>\n    </mat-card-header>\n    <mat-card-content>\n      <span>\n        Save the songs you saved on Spotify here on f10k.\n        This is way quicker than importing your playlists,\n        but you'll have to add songs manually to f10k if\n        you hit the 10k limit before coming here.\n      </span>\n    </mat-card-content>\n    <mat-card-actions class=\"actions\">\n      <button mat-raised-button color=\"primary\" (click)=\"startImport()\">Import tracks</button>\n    </mat-card-actions>\n  </mat-card>\n\n  <mat-card class=\"card card mat-elevation-z8\">\n    <mat-card-header>\n      <h1>Import playlists</h1>\n    </mat-card-header>\n    <mat-card-content>\n      <span>\n        Traverse your playlists from Spotify and save all songs to f10k.\n        This may take a while, as we have to wait in between playlists to prevent\n        making too many requests to the Spotify Web API.\n      </span>\n    </mat-card-content>\n    <mat-card-actions class=\"actions\">\n      <button mat-raised-button color=\"primary\" (click)=\"startImportFromPlaylists()\">Import playllists</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login-page/login-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login-page/login-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"login()\">Log in</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/redirect/redirect.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/redirect/redirect.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>redirect works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search-page.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Tracks ({{trackTotal}})</h1>\n<app-track-list\n  class=\"item-list\"\n  *ngIf=\"trackIds\"\n  [ids]=\"trackIds\"\n  [pageSize]=\"10\"\n  [total]=\"trackTotal\"\n  (pageChange)=\"onPageChange($event, 'track')\"\n  [loading]=\"searching\"\n></app-track-list>\n\n<h1>Artists ({{artistTotal}})</h1>\n<app-artist-list\n  class=\"item-list\"\n  *ngIf=\"artistIds\"\n  [ids]=\"artistIds\"\n  [pageSize]=\"10\"\n  [total]=\"artistTotal\"\n  (pageChange)=\"onPageChange($event, 'artist')\"\n  [loading]=\"searching\"\n></app-artist-list>\n\n<h1>Albums (0)</h1>\n\n<h1>Playlists (0)</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tracks/tracks.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tracks/tracks.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-track-list\n  class=\"item-list\"\n  [ids]=\"ids\"\n  [pageSize]=\"50\"\n  [total]=\"ids.length\"\n  (pageChange)=onPageChange($event)\n></app-track-list>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _guards_spotify_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/spotify.guard */ "./src/app/guards/spotify.guard.ts");
/* harmony import */ var _pages_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/redirect/redirect.component */ "./src/app/pages/redirect/redirect.component.ts");
/* harmony import */ var _guards_spotify_redirect_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/spotify-redirect.guard */ "./src/app/guards/spotify-redirect.guard.ts");
/* harmony import */ var _pages_artists_artists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/artists/artists.component */ "./src/app/pages/artists/artists.component.ts");
/* harmony import */ var _pages_search_search_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/search/search-page.component */ "./src/app/pages/search/search-page.component.ts");
/* harmony import */ var _pages_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/artist-detail/artist-detail.component */ "./src/app/pages/artist-detail/artist-detail.component.ts");
/* harmony import */ var _pages_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/tracks/tracks.component */ "./src/app/pages/tracks/tracks.component.ts");
/* harmony import */ var _pages_import_import_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/import/import.component */ "./src/app/pages/import/import.component.ts");













const routes = [
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
    { path: 'spotify-redirect', component: _pages_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_6__["RedirectComponent"], canActivate: [_guards_spotify_redirect_guard__WEBPACK_IMPORTED_MODULE_7__["SpotifyRedirectGuard"]] },
    { path: 'artist/:id', component: _pages_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_10__["ArtistDetailComponent"], canActivate: [_guards_spotify_guard__WEBPACK_IMPORTED_MODULE_5__["SpotifyGuard"]] },
    { path: 'artists', component: _pages_artists_artists_component__WEBPACK_IMPORTED_MODULE_8__["ArtistsComponent"], canActivate: [_guards_spotify_guard__WEBPACK_IMPORTED_MODULE_5__["SpotifyGuard"]] },
    { path: 'tracks', component: _pages_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_11__["TracksComponent"], canActivate: [_guards_spotify_guard__WEBPACK_IMPORTED_MODULE_5__["SpotifyGuard"]] },
    { path: 'search', component: _pages_search_search_page_component__WEBPACK_IMPORTED_MODULE_9__["SearchPageComponent"], canActivate: [_guards_spotify_guard__WEBPACK_IMPORTED_MODULE_5__["SpotifyGuard"]] },
    { path: 'import', component: _pages_import_import_component__WEBPACK_IMPORTED_MODULE_12__["ImportComponent"], canActivate: [_guards_spotify_guard__WEBPACK_IMPORTED_MODULE_5__["SpotifyGuard"]] },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_guards_spotify_guard__WEBPACK_IMPORTED_MODULE_5__["SpotifyGuard"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  height: 100vh;\n  background: grey;\n  flex-direction: column;\n}\n\n.header {\n  background: #141414;\n  display: flex;\n  padding: 6px 10px;\n  height: 36px;\n}\n\n.header .flex-stuff {\n  flex: 1;\n}\n\n.header a {\n  color: #1db954;\n  text-decoration: none;\n  font-size: 1.5em;\n  font-weight: bold;\n  display: block;\n  padding: 3px 7px;\n  float: left;\n}\n\n.header span {\n  float: left;\n}\n\n.header .search {\n  display: block;\n  color: #fff;\n}\n\n.header .search ::ng-deep .mat-form-field-infix {\n  margin-top: 0;\n  border-top: 0;\n}\n\n.footer {\n  background: #141414;\n}\n\n.body {\n  display: flex;\n  flex: 1 0 0;\n  min-height: 0;\n}\n\n.column {\n  height: 100%;\n  overflow: auto;\n  flex: 1;\n}\n\n.sidebar {\n  background: #515151;\n  flex: 0 0 40px;\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\n.navigation {\n  flex: 1;\n}\n\n.player {\n  flex: 0 0 100px;\n  background: #141414;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0UsT0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7QUNESjs7QURJRTtFQUNFLGNBQUE7RUFPQSxXQUFBO0FDUko7O0FER0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ0ROOztBRFFBO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxPQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGhlaWdodDogMzZweDtcblxuICAuZmxleC1zdHVmZiB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiByZ2IoMjksIDE4NSwgODQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICBzcGFuIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICB9XG5cbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgMDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLmNvbHVtbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZsZXg6IDE7XG59XG5cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogIzUxNTE1MTtcbiAgZmxleDogMCAwIDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBmbGV4OiAxO1xufVxuXG4ucGxheWVyIHtcbiAgZmxleDogMCAwIDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xufVxuXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uaGVhZGVyIC5mbGV4LXN0dWZmIHtcbiAgZmxleDogMTtcbn1cbi5oZWFkZXIgYSB7XG4gIGNvbG9yOiAjMWRiOTU0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaGVhZGVyIHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbn1cbi5oZWFkZXIgLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXIgLnNlYXJjaCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcDogMDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG59XG5cbi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5jb2x1bW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBmbGV4OiAxO1xufVxuXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6ICM1MTUxNTE7XG4gIGZsZXg6IDAgMCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgZmxleDogMTtcbn1cblxuLnBsYXllciB7XG4gIGZsZXg6IDAgMCAxMDBweDtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_spotify_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/spotify-authentication.service */ "./src/app/providers/spotify-authentication.service.ts");



let AppComponent = class AppComponent {
    constructor(spotifyAuthentication) {
        this.spotifyAuthentication = spotifyAuthentication;
        this.title = 'f10k';
    }
    ngOnInit() {
        this.loggedIn = this.spotifyAuthentication.isLoggedIn();
    }
};
AppComponent.ctorParameters = () => [
    { type: _providers_spotify_authentication_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyAuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/redirect/redirect.component */ "./src/app/pages/redirect/redirect.component.ts");
/* harmony import */ var _interceptors_spotify_authorization_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/spotify-authorization-interceptor */ "./src/app/interceptors/spotify-authorization-interceptor.ts");
/* harmony import */ var _components_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/playlists/playlists.component */ "./src/app/components/playlists/playlists.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_states_folder_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/states/folder.state */ "./src/app/store/states/folder.state.ts");
/* harmony import */ var _pages_artists_artists_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/artists/artists.component */ "./src/app/pages/artists/artists.component.ts");
/* harmony import */ var _store_states_artist_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/states/artist.state */ "./src/app/store/states/artist.state.ts");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm2015/ngxs-devtools-plugin.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _store_states_search_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/states/search.state */ "./src/app/store/states/search.state.ts");
/* harmony import */ var _components_artist_list_artist_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/artist-list/artist-list.component */ "./src/app/components/artist-list/artist-list.component.ts");
/* harmony import */ var _pages_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/artist-detail/artist-detail.component */ "./src/app/pages/artist-detail/artist-detail.component.ts");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm2015/ngxs-storage-plugin.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_artist_save_button_artist_save_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/artist-save-button/artist-save-button.component */ "./src/app/components/artist-save-button/artist-save-button.component.ts");
/* harmony import */ var _components_track_list_track_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/track-list/track-list.component */ "./src/app/components/track-list/track-list.component.ts");
/* harmony import */ var _store_providers_album_spotify_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/providers/album-spotify.service */ "./src/app/store/providers/album-spotify.service.ts");
/* harmony import */ var _store_providers_artist_spotify_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store/providers/artist-spotify.service */ "./src/app/store/providers/artist-spotify.service.ts");
/* harmony import */ var _store_providers_playlist_spotify_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store/providers/playlist-spotify.service */ "./src/app/store/providers/playlist-spotify.service.ts");
/* harmony import */ var _store_providers_profile_spotify_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./store/providers/profile-spotify.service */ "./src/app/store/providers/profile-spotify.service.ts");
/* harmony import */ var _store_providers_search_spotify_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./store/providers/search-spotify.service */ "./src/app/store/providers/search-spotify.service.ts");
/* harmony import */ var _store_providers_track_spotify_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./store/providers/track-spotify.service */ "./src/app/store/providers/track-spotify.service.ts");
/* harmony import */ var _components_track_save_button_track_save_button_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/track-save-button/track-save-button.component */ "./src/app/components/track-save-button/track-save-button.component.ts");
/* harmony import */ var _store_states_track_state__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./store/states/track.state */ "./src/app/store/states/track.state.ts");
/* harmony import */ var _pages_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/tracks/tracks.component */ "./src/app/pages/tracks/tracks.component.ts");
/* harmony import */ var _store_states_player_state__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./store/states/player.state */ "./src/app/store/states/player.state.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _pages_import_import_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/import/import.component */ "./src/app/pages/import/import.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_material_import_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/material-import.module */ "./src/app/modules/material-import.module.ts");
/* harmony import */ var _pages_search_search_page_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/search/search-page.component */ "./src/app/pages/search/search-page.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_position_slider_position_slider_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/position-slider/position-slider.component */ "./src/app/components/position-slider/position-slider.component.ts");
/* harmony import */ var _components_playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/playback-controls/playback-controls.component */ "./src/app/components/playback-controls/playback-controls.component.ts");
/* harmony import */ var _pipes_minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pipes/minutes-seconds.pipe */ "./src/app/pipes/minutes-seconds.pipe.ts");
/* harmony import */ var _components_volume_control_volume_control_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/volume-control/volume-control.component */ "./src/app/components/volume-control/volume-control.component.ts");













































const spotifyConfig = {
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_37__["environment"].clientId,
    redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_37__["environment"].redirectUri,
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
    apiBase: _environments_environment__WEBPACK_IMPORTED_MODULE_37__["environment"].apiBase,
    authorizationUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_37__["environment"].authorizationUrl,
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _pages_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_8__["RedirectComponent"],
            _components_playlists_playlists_component__WEBPACK_IMPORTED_MODULE_10__["PlaylistsComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
            _pages_artists_artists_component__WEBPACK_IMPORTED_MODULE_14__["ArtistsComponent"],
            _pages_search_search_page_component__WEBPACK_IMPORTED_MODULE_39__["SearchPageComponent"],
            _components_artist_list_artist_list_component__WEBPACK_IMPORTED_MODULE_19__["ArtistListComponent"],
            _pages_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_20__["ArtistDetailComponent"],
            _components_artist_save_button_artist_save_button_component__WEBPACK_IMPORTED_MODULE_23__["ArtistSaveButtonComponent"],
            _components_track_list_track_list_component__WEBPACK_IMPORTED_MODULE_24__["TrackListComponent"],
            _components_track_save_button_track_save_button_component__WEBPACK_IMPORTED_MODULE_31__["TrackSaveButtonComponent"],
            _pages_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_33__["TracksComponent"],
            _components_player_player_component__WEBPACK_IMPORTED_MODULE_35__["PlayerComponent"],
            _pages_import_import_component__WEBPACK_IMPORTED_MODULE_36__["ImportComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_40__["SearchComponent"],
            _components_position_slider_position_slider_component__WEBPACK_IMPORTED_MODULE_41__["PositionSliderComponent"],
            _components_playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_42__["PlaybackControlsComponent"],
            _pipes_minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_43__["MinutesSecondsPipe"],
            _components_volume_control_volume_control_component__WEBPACK_IMPORTED_MODULE_44__["VolumeControlComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_12__["NgxsModule"].forRoot([
                _store_states_folder_state__WEBPACK_IMPORTED_MODULE_13__["FolderState"],
                _store_states_artist_state__WEBPACK_IMPORTED_MODULE_15__["ArtistState"],
                _store_states_search_state__WEBPACK_IMPORTED_MODULE_18__["SearchState"],
                _store_states_track_state__WEBPACK_IMPORTED_MODULE_32__["TrackState"],
                _store_states_player_state__WEBPACK_IMPORTED_MODULE_34__["PlayerState"],
            ], { developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_37__["environment"].production }),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_16__["NgxsReduxDevtoolsPluginModule"].forRoot(),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_21__["NgxsStoragePluginModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _modules_material_import_module__WEBPACK_IMPORTED_MODULE_38__["MaterialImportModule"],
        ],
        providers: [
            { provide: 'SpotifyConfig', useValue: spotifyConfig },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_spotify_authorization_interceptor__WEBPACK_IMPORTED_MODULE_9__["SpotifyAuthorizationInterceptor"],
                multi: true
            },
            _store_providers_album_spotify_service__WEBPACK_IMPORTED_MODULE_25__["AlbumSpotifyService"],
            _store_providers_artist_spotify_service__WEBPACK_IMPORTED_MODULE_26__["ArtistSpotifyService"],
            _store_providers_playlist_spotify_service__WEBPACK_IMPORTED_MODULE_27__["PlaylistSpotifyService"],
            _store_providers_profile_spotify_service__WEBPACK_IMPORTED_MODULE_28__["ProfileSpotifyService"],
            _store_providers_search_spotify_service__WEBPACK_IMPORTED_MODULE_29__["SearchSpotifyService"],
            _store_providers_track_spotify_service__WEBPACK_IMPORTED_MODULE_30__["TrackSpotifyService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/artist-list/artist-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/artist-list/artist-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.list-container {\n  color: #f1f1f1;\n  flex: 1;\n  overflow: auto;\n  background: #424242;\n  border-bottom: 1px rgba(255, 255, 255, 0.12) solid;\n  box-sizing: content-box;\n}\n\n.table {\n  width: 100%;\n}\n\n.table tr {\n  height: 32px;\n}\n\n.table td.mat-column-image {\n  width: 32px;\n}\n\n.table td.mat-column-popularity {\n  width: 20px;\n}\n\n.table td.mat-column-popularity .progress-bar {\n  width: 100%;\n}\n\n.table td.mat-column-popularity .progress-bar ::ng-deep .mat-progress-bar-background {\n  fill: grey;\n}\n\n.table td.mat-column-saved {\n  width: 40px;\n}\n\n.table img {\n  height: 32px;\n  width: auto;\n  display: block;\n}\n\n.table a {\n  color: white;\n  text-decoration: none;\n}\n\n.table a:hover {\n  color: #c3c3c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy9hcnRpc3QtbGlzdC9hcnRpc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcnRpc3QtbGlzdC9hcnRpc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsa0RBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREVFO0VBQ0UsWUFBQTtBQ0FKOztBRElJO0VBQ0UsV0FBQTtBQ0ZOOztBRElJO0VBQ0UsV0FBQTtBQ0ZOOztBRElNO0VBQ0UsV0FBQTtBQ0ZSOztBRElRO0VBQ0UsVUFBQTtBQ0ZWOztBRE1JO0VBQ0UsV0FBQTtBQ0pOOztBRFFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNQSjs7QURTSTtFQUNFLGNBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LWxpc3QvYXJ0aXN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xMikgc29saWQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcblxuICB0ciB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgdGQge1xuICAgICYubWF0LWNvbHVtbi1pbWFnZSB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICB9XG4gICAgJi5tYXQtY29sdW1uLXBvcHVsYXJpdHkge1xuICAgICAgd2lkdGg6IDIwcHg7XG5cbiAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICAgICAgZmlsbDogZ3JleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLm1hdC1jb2x1bW4tc2F2ZWQge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2MzYzNjMztcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGlzdC1jb250YWluZXIge1xuICBjb2xvcjogI2YxZjFmMTtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpIHNvbGlkO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFibGUgdHIge1xuICBoZWlnaHQ6IDMycHg7XG59XG4udGFibGUgdGQubWF0LWNvbHVtbi1pbWFnZSB7XG4gIHdpZHRoOiAzMnB4O1xufVxuLnRhYmxlIHRkLm1hdC1jb2x1bW4tcG9wdWxhcml0eSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnRhYmxlIHRkLm1hdC1jb2x1bW4tcG9wdWxhcml0eSAucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFibGUgdGQubWF0LWNvbHVtbi1wb3B1bGFyaXR5IC5wcm9ncmVzcy1iYXIgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiBncmV5O1xufVxuLnRhYmxlIHRkLm1hdC1jb2x1bW4tc2F2ZWQge1xuICB3aWR0aDogNDBweDtcbn1cbi50YWJsZSBpbWcge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50YWJsZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udGFibGUgYTpob3ZlciB7XG4gIGNvbG9yOiAjYzNjM2MzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/artist-list/artist-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/artist-list/artist-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArtistListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistListComponent", function() { return ArtistListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/artist.actions */ "./src/app/store/actions/artist.actions.ts");





let ArtistListComponent = class ArtistListComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.displayedColumns = ['image', 'name', 'popularity', 'saved'];
        this.loading = false;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPage = 0;
    }
    ngOnInit() {
        this.updateItems();
        this.store.select(state => state.artists.artists).subscribe((value) => {
            this.artists = value;
            this.loading = false;
        });
    }
    ngOnChanges() {
        this.updateItems();
    }
    openArtist(id) {
        this.router.navigate(['/artist', id]);
    }
    openPage(event) {
        this.pageChange.emit(event.pageIndex);
    }
    updateItems() {
        const start = this.pageSize * this.currentPage;
        const end = start + this.pageSize;
        const pageItems = this.ids.slice(start, end);
        this.store.dispatch(new _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__["GetArtists"](pageItems, this.pageSize));
    }
};
ArtistListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistListComponent.prototype, "ids", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistListComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistListComponent.prototype, "displayedColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistListComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistListComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ArtistListComponent.prototype, "pageChange", void 0);
ArtistListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artist-list',
        template: __webpack_require__(/*! raw-loader!./artist-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-list/artist-list.component.html"),
        styles: [__webpack_require__(/*! ./artist-list.component.scss */ "./src/app/components/artist-list/artist-list.component.scss")]
    })
], ArtistListComponent);



/***/ }),

/***/ "./src/app/components/artist-save-button/artist-save-button.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/artist-save-button/artist-save-button.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 24px;\n  font-size: 24px;\n  min-width: 30px;\n  color: #1db954;\n}\nbutton::ng-deep .mat-button-wrapper {\n  line-height: 24px;\n  padding: 0;\n}\nbutton::ng-deep .mat-button-wrapper .mat-icon {\n  font-size: 24px;\n  padding-right: 0px;\n  padding-top: 0px;\n}\nbutton.not-saved:not(:hover), button.saved:hover {\n  color: rgba(255, 255, 255, 0.11);\n}\nbutton:hover ::ng-deep .mat-button-focus-overlay {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy9hcnRpc3Qtc2F2ZS1idXR0b24vYXJ0aXN0LXNhdmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FydGlzdC1zYXZlLWJ1dHRvbi9hcnRpc3Qtc2F2ZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxVQUFBO0VBQ0EsV0FMWTtFQU1aLFlBTlk7RUFPWixpQkFOVTtFQU9WLGVBUFU7RUFRVixlQVRZO0VBVVosY0FBQTtBQ0ZGO0FESUU7RUFDRSxpQkFaUTtFQWFSLFVBQUE7QUNGSjtBRElJO0VBQ0UsZUFoQk07RUFpQk4sa0JBQUE7RUFDQSxnQkFBQTtBQ0ZOO0FETUU7RUFFRSxnQ0FBQTtBQ0xKO0FEUUU7RUFDRSx1QkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpc3Qtc2F2ZS1idXR0b24vYXJ0aXN0LXNhdmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ1dHRvbi1zaXplOiAzMHB4O1xuJGljb24tc2l6ZTogMjRweDtcblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6ICRidXR0b24tc2l6ZTtcbiAgaGVpZ2h0OiAkYnV0dG9uLXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkaWNvbi1zaXplO1xuICBmb250LXNpemU6ICRpY29uLXNpemU7XG4gIG1pbi13aWR0aDogJGJ1dHRvbi1zaXplO1xuICBjb2xvcjogIzFkYjk1NDtcblxuICAmOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XG4gICAgbGluZS1oZWlnaHQ6ICRpY29uLXNpemU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRpY29uLXNpemU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIH1cbiAgfVxuXG4gICYubm90LXNhdmVkOm5vdCg6aG92ZXIpLFxuICAmLnNhdmVkOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjExKTtcbiAgfVxuXG4gICY6aG92ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbiIsImJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgY29sb3I6ICMxZGI5NTQ7XG59XG5idXR0b246Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuYnV0dG9uOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5idXR0b24ubm90LXNhdmVkOm5vdCg6aG92ZXIpLCBidXR0b24uc2F2ZWQ6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjExKTtcbn1cbmJ1dHRvbjpob3ZlciA6Om5nLWRlZXAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/artist-save-button/artist-save-button.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/artist-save-button/artist-save-button.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ArtistSaveButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSaveButtonComponent", function() { return ArtistSaveButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_states_artist_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/states/artist.state */ "./src/app/store/states/artist.state.ts");
/* harmony import */ var _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/artist.actions */ "./src/app/store/actions/artist.actions.ts");





let ArtistSaveButtonComponent = class ArtistSaveButtonComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnChanges() {
        this.store.select(_store_states_artist_state__WEBPACK_IMPORTED_MODULE_3__["ArtistState"].isSaved(this.id)).subscribe((value) => {
            this.isSaved = value;
        });
    }
    save(event) {
        event.stopPropagation();
        this.store.dispatch(new _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__["SaveArtist"](this.id));
    }
    remove(event) {
        event.stopPropagation();
        this.store.dispatch(new _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveArtist"](this.id));
    }
};
ArtistSaveButtonComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistSaveButtonComponent.prototype, "id", void 0);
ArtistSaveButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artist-save-button',
        template: __webpack_require__(/*! raw-loader!./artist-save-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/artist-save-button/artist-save-button.component.html"),
        styles: [__webpack_require__(/*! ./artist-save-button.component.scss */ "./src/app/components/artist-save-button/artist-save-button.component.scss")]
    })
], ArtistSaveButtonComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  padding-top: 0;\n}\n\n.menu ::ng-deep .mat-list-item {\n  height: 40px;\n  margin-bottom: 5px;\n}\n\n::ng-deep .menu .menu-item .mat-list-item-content {\n  padding: 0 !important;\n}\n\n.nav-button {\n  color: #1db954;\n  background: none;\n  box-shadow: none;\n}\n\n.nav-button:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tZW51IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG46Om5nLWRlZXAgLm1lbnUgLm1lbnUtaXRlbSAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gIGNvbG9yOiAjMWRiOTU0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubmF2LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbiIsIi5tZW51IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5tZW51IDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG46Om5nLWRlZXAgLm1lbnUgLm1lbnUtaXRlbSAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gIGNvbG9yOiAjMWRiOTU0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubmF2LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() {
        this.menuItems = [
            { routerLink: '/home', tooltip: 'Home', icon: 'home' },
            { routerLink: '/artists', tooltip: 'Artists', icon: 'people' },
            { routerLink: '/tracks', tooltip: 'Tracks', icon: 'audiotrack' },
            { routerLink: '/import', tooltip: 'Import', icon: 'import_export' },
        ];
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/playback-controls/playback-controls.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/playback-controls/playback-controls.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host button {\n  color: #1db954;\n  background: transparent;\n  box-shadow: none;\n  margin: 5px;\n  border: 1px rgba(255, 255, 255, 0.05) solid;\n  box-sizing: content-box;\n}\n:host button:hover {\n  border: 1px #1db954 solid;\n}\n:host button ::ng-deep .mat-button-wrapper {\n  margin-top: -1px;\n}\n:host button.side-button {\n  width: 30px;\n  height: 30px;\n  line-height: 22px;\n  font-size: 22px;\n}\n:host button.side-button::ng-deep .mat-button-wrapper {\n  line-height: 22px;\n  padding: 0;\n}\n:host button.side-button::ng-deep .mat-button-wrapper .mat-icon {\n  font-size: 22px;\n  padding-top: 1px;\n  padding-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5YmFjay1jb250cm9scy9wbGF5YmFjay1jb250cm9scy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wbGF5YmFjay1jb250cm9scy9wbGF5YmFjay1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsdUJBQUE7QUNBSjtBREVJO0VBQ0UseUJBQUE7QUNBTjtBREdJO0VBQ0UsZ0JBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGTjtBRElNO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FDRlI7QURJUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRlYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXliYWNrLWNvbnRyb2xzL3BsYXliYWNrLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBidXR0b24ge1xuICAgIGNvbG9yOiAjMWRiOTU0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSBzb2xpZDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiAxcHggIzFkYjk1NCBzb2xpZDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIH1cblxuICAgICYuc2lkZS1idXR0b24ge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcblxuICAgICAgJjo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVye1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBidXR0b24ge1xuICBjb2xvcjogIzFkYjk1NDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIHNvbGlkO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbjpob3N0IGJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogMXB4ICMxZGI5NTQgc29saWQ7XG59XG46aG9zdCBidXR0b24gOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuOmhvc3QgYnV0dG9uLnNpZGUtYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbjpob3N0IGJ1dHRvbi5zaWRlLWJ1dHRvbjo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCBidXR0b24uc2lkZS1idXR0b246Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/playback-controls/playback-controls.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/playback-controls/playback-controls.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PlaybackControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaybackControlsComponent", function() { return PlaybackControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/player.actions */ "./src/app/store/actions/player.actions.ts");




let PlaybackControlsComponent = class PlaybackControlsComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.select(state => state.player).subscribe((value) => {
            this.player = value;
        });
    }
    togglePlay() {
        this.store.dispatch(new _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["TogglePlay"]());
    }
    next() {
        this.store.dispatch(new _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["NextTrack"]());
    }
    previous() {
        this.store.dispatch(new _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["PreviousTrack"]());
    }
};
PlaybackControlsComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
PlaybackControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playback-controls',
        template: __webpack_require__(/*! raw-loader!./playback-controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/playback-controls/playback-controls.component.html"),
        styles: [__webpack_require__(/*! ./playback-controls.component.scss */ "./src/app/components/playback-controls/playback-controls.component.scss")]
    })
], PlaybackControlsComponent);



/***/ }),

/***/ "./src/app/components/player/player.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/player/player.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  color: rgba(255, 255, 255, 0.5);\n}\n:host a {\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n}\n.container {\n  display: flex;\n  height: 100%;\n}\n.column {\n  flex: 1;\n}\n.vertical-align {\n  margin: auto 0;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.info {\n  color: white;\n  display: flex;\n  flex-direction: row;\n}\n.info .image {\n  padding: 10px;\n  height: 64px;\n  width: 64px;\n}\n.info .image img {\n  height: 64px;\n  width: 64px;\n}\n.info .artist-text {\n  height: 35px;\n}\n.playback-controls,\n.volume-controls {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDQ0Y7QURDRTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7QUNDSjtBREdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNBRjtBREdBO0VBQ0UsT0FBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBR0EsMkJBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBTjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FETUE7O0VBRUUsa0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblxuICBhIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29sdW1uIHtcbiAgZmxleDogMTtcbn1cblxuLnZlcnRpY2FsLWFsaWduIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIC5pbWFnZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgd2lkdGg6IDY0cHg7XG4gICAgfVxuICB9XG5cbiAgLmFydGlzdC10ZXh0IHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuLnBsYXliYWNrLWNvbnRyb2xzLFxuLnZvbHVtZS1jb250cm9scyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbjpob3N0IGEge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4OiAxO1xufVxuXG4udmVydGljYWwtYWxpZ24ge1xuICBtYXJnaW46IGF1dG8gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaW5mbyAuaW1hZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiA2NHB4O1xufVxuLmluZm8gLmltYWdlIGltZyB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG59XG4uaW5mbyAuYXJ0aXN0LXRleHQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5wbGF5YmFjay1jb250cm9scyxcbi52b2x1bWUtY29udHJvbHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");



let PlayerComponent = class PlayerComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.select(state => state.player).subscribe((value) => {
            this.player = value;
        });
    }
};
PlayerComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: __webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/player/player.component.html"),
        styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/components/player/player.component.scss")]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/components/playlists/playlists.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/playlists/playlists.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWxpc3RzL3BsYXlsaXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/playlists/playlists.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/playlists/playlists.component.ts ***!
  \*************************************************************/
/*! exports provided: PlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function() { return PlaylistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_states_folder_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/states/folder.state */ "./src/app/store/states/folder.state.ts");




let PlaylistsComponent = class PlaylistsComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_states_folder_state__WEBPACK_IMPORTED_MODULE_3__["FolderState"].folders)
], PlaylistsComponent.prototype, "folders", void 0);
PlaylistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlists',
        template: __webpack_require__(/*! raw-loader!./playlists.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/playlists/playlists.component.html"),
        styles: [__webpack_require__(/*! ./playlists.component.scss */ "./src/app/components/playlists/playlists.component.scss")]
    })
], PlaylistsComponent);



/***/ }),

/***/ "./src/app/components/position-slider/position-slider.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/position-slider/position-slider.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n\n.slider-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.slider-container .column {\n  flex: 1;\n}\n\n.slider-container .side {\n  flex: 0 0 25px;\n}\n\n.slider-container ::ng-deep .mat-slider-horizontal {\n  height: 10px;\n  padding: 0;\n  width: 100%;\n}\n\n.slider-container ::ng-deep .mat-slider-horizontal .mat-slider-wrapper {\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy9wb3NpdGlvbi1zbGlkZXIvcG9zaXRpb24tc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bvc2l0aW9uLXNsaWRlci9wb3NpdGlvbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxPQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNESjs7QURJRTtFQUNFLFFBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zaXRpb24tc2xpZGVyL3Bvc2l0aW9uLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgLmNvbHVtbiB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5zaWRlIHtcbiAgICBmbGV4OiAwIDAgMjVweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXdyYXBwZXIge1xuICAgIHRvcDogNHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnNsaWRlci1jb250YWluZXIgLmNvbHVtbiB7XG4gIGZsZXg6IDE7XG59XG4uc2xpZGVyLWNvbnRhaW5lciAuc2lkZSB7XG4gIGZsZXg6IDAgMCAyNXB4O1xufVxuLnNsaWRlci1jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsaWRlci1jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItd3JhcHBlciB7XG4gIHRvcDogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/position-slider/position-slider.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/position-slider/position-slider.component.ts ***!
  \*************************************************************************/
/*! exports provided: PositionSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionSliderComponent", function() { return PositionSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/player.actions */ "./src/app/store/actions/player.actions.ts");




let PositionSliderComponent = class PositionSliderComponent {
    constructor(store) {
        this.store = store;
        this.sliding = false;
    }
    ngOnInit() {
        this.store.select(state => state.player).subscribe((value) => {
            if (!this.sliding) {
                this.player = value;
            }
        });
    }
    seekPosition(event) {
        if (this.sliding) {
            this.store.dispatch(new _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["Seek"](event.value));
            this.sliding = false;
        }
    }
    onInput(event) {
        this.sliding = true;
    }
};
PositionSliderComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
PositionSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-position-slider',
        template: __webpack_require__(/*! raw-loader!./position-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/position-slider/position-slider.component.html"),
        styles: [__webpack_require__(/*! ./position-slider.component.scss */ "./src/app/components/position-slider/position-slider.component.scss")]
    })
], PositionSliderComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SearchComponent = class SearchComponent {
    constructor(router) {
        this.router = router;
    }
    search() {
        this.router.navigate(['/search'], {
            queryParams: {
                query: this.searchQuery
            },
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/track-list/track-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/track-list/track-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.playing {\n  background: rgba(255, 255, 255, 0.13);\n}\n\n.list-container {\n  color: #f1f1f1;\n  flex: 1;\n  overflow: auto;\n  background: #424242;\n  border-bottom: 1px rgba(255, 255, 255, 0.12) solid;\n  box-sizing: content-box;\n}\n\n.table {\n  width: 100%;\n}\n\n.table tr {\n  height: 32px;\n}\n\n.table td.mat-column-image {\n  width: 32px;\n}\n\n.table td.mat-column-popularity {\n  width: 20px;\n}\n\n.table td.mat-column-popularity .progress-bar {\n  width: 100%;\n}\n\n.table td.mat-column-popularity .progress-bar ::ng-deep .mat-progress-bar-background {\n  fill: grey;\n}\n\n.table td.mat-column-saved {\n  width: 40px;\n}\n\n.table td.mat-column-duration {\n  width: 40px;\n}\n\n.table img {\n  height: 32px;\n  width: auto;\n  display: block;\n}\n\n.table a {\n  color: white;\n  text-decoration: none;\n}\n\n.table a:hover {\n  color: #c3c3c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy90cmFjay1saXN0L3RyYWNrLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2stbGlzdC90cmFjay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsa0RBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREVFO0VBQ0UsWUFBQTtBQ0FKOztBRElJO0VBQ0UsV0FBQTtBQ0ZOOztBREtJO0VBQ0UsV0FBQTtBQ0hOOztBREtNO0VBQ0UsV0FBQTtBQ0hSOztBREtRO0VBQ0UsVUFBQTtBQ0hWOztBRFFJO0VBQ0UsV0FBQTtBQ05OOztBRFNJO0VBQ0UsV0FBQTtBQ1BOOztBRFdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDVEo7O0FEWUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNWSjs7QURZSTtFQUNFLGNBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2stbGlzdC90cmFjay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wbGF5aW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xMikgc29saWQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcblxuICB0ciB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgdGQge1xuICAgICYubWF0LWNvbHVtbi1pbWFnZSB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICB9XG5cbiAgICAmLm1hdC1jb2x1bW4tcG9wdWxhcml0eSB7XG4gICAgICB3aWR0aDogMjBweDtcblxuICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBmaWxsOiBncmV5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY29sdW1uLXNhdmVkIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cblxuICAgICYubWF0LWNvbHVtbi1kdXJhdGlvbiB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjYzNjM2MzO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wbGF5aW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSBzb2xpZDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYmxlIHRyIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLnRhYmxlIHRkLm1hdC1jb2x1bW4taW1hZ2Uge1xuICB3aWR0aDogMzJweDtcbn1cbi50YWJsZSB0ZC5tYXQtY29sdW1uLXBvcHVsYXJpdHkge1xuICB3aWR0aDogMjBweDtcbn1cbi50YWJsZSB0ZC5tYXQtY29sdW1uLXBvcHVsYXJpdHkgLnByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYmxlIHRkLm1hdC1jb2x1bW4tcG9wdWxhcml0eSAucHJvZ3Jlc3MtYmFyIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgZmlsbDogZ3JleTtcbn1cbi50YWJsZSB0ZC5tYXQtY29sdW1uLXNhdmVkIHtcbiAgd2lkdGg6IDQwcHg7XG59XG4udGFibGUgdGQubWF0LWNvbHVtbi1kdXJhdGlvbiB7XG4gIHdpZHRoOiA0MHB4O1xufVxuLnRhYmxlIGltZyB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhYmxlIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50YWJsZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNjM2MzYzM7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/track-list/track-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/track-list/track-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TrackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackListComponent", function() { return TrackListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/player.actions */ "./src/app/store/actions/player.actions.ts");
/* harmony import */ var _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/track.actions */ "./src/app/store/actions/track.actions.ts");





let TrackListComponent = class TrackListComponent {
    constructor(store) {
        this.store = store;
        this.displayedColumns = [
            'image',
            'artist',
            'name',
            'album',
            'popularity',
            'duration',
            'saved'
        ];
        this.loading = false;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPage = 0;
    }
    ngOnInit() {
        this.updateItems();
        this.store.select(state => state.tracks.tracks).subscribe((value) => {
            this.tracks = value;
            this.loading = false;
        });
        this.store.select(state => state.player.current_track.id).subscribe((value) => {
            this.currentSongId = value;
        });
    }
    ngOnChanges() {
        this.updateItems();
    }
    playTrack(id) {
        this.store.dispatch(new _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["PlayTrack"](this.ids, id));
    }
    openPage(event) {
        this.pageChange.emit(event.pageIndex);
    }
    updateItems() {
        const start = this.pageSize * this.currentPage;
        const end = start + this.pageSize;
        const pageItems = this.ids.slice(start, end);
        if (pageItems.length > 0) {
            this.store.dispatch(new _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["GetTracks"](pageItems, this.pageSize));
        }
    }
};
TrackListComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrackListComponent.prototype, "ids", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrackListComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrackListComponent.prototype, "displayedColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrackListComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrackListComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TrackListComponent.prototype, "pageChange", void 0);
TrackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-list',
        template: __webpack_require__(/*! raw-loader!./track-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/track-list/track-list.component.html"),
        styles: [__webpack_require__(/*! ./track-list.component.scss */ "./src/app/components/track-list/track-list.component.scss")]
    })
], TrackListComponent);



/***/ }),

/***/ "./src/app/components/track-save-button/track-save-button.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/track-save-button/track-save-button.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 24px;\n  font-size: 24px;\n  min-width: 30px;\n  color: #1db954;\n}\nbutton::ng-deep .mat-button-wrapper {\n  line-height: 24px;\n  padding: 0;\n}\nbutton::ng-deep .mat-button-wrapper .mat-icon {\n  font-size: 24px;\n  padding-right: 0px;\n  padding-top: 0px;\n}\nbutton.not-saved:not(:hover), button.saved:hover {\n  color: rgba(255, 255, 255, 0.11);\n}\nbutton:hover ::ng-deep .mat-button-focus-overlay {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY29tcG9uZW50cy90cmFjay1zYXZlLWJ1dHRvbi90cmFjay1zYXZlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmFjay1zYXZlLWJ1dHRvbi90cmFjay1zYXZlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFVBQUE7RUFDQSxXQUxZO0VBTVosWUFOWTtFQU9aLGlCQU5VO0VBT1YsZUFQVTtFQVFWLGVBVFk7RUFVWixjQUFBO0FDRkY7QURJRTtFQUNFLGlCQVpRO0VBYVIsVUFBQTtBQ0ZKO0FESUk7RUFDRSxlQWhCTTtFQWlCTixrQkFBQTtFQUNBLGdCQUFBO0FDRk47QURNRTtFQUVFLGdDQUFBO0FDTEo7QURRRTtFQUNFLHVCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYWNrLXNhdmUtYnV0dG9uL3RyYWNrLXNhdmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ1dHRvbi1zaXplOiAzMHB4O1xuJGljb24tc2l6ZTogMjRweDtcblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6ICRidXR0b24tc2l6ZTtcbiAgaGVpZ2h0OiAkYnV0dG9uLXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkaWNvbi1zaXplO1xuICBmb250LXNpemU6ICRpY29uLXNpemU7XG4gIG1pbi13aWR0aDogJGJ1dHRvbi1zaXplO1xuICBjb2xvcjogIzFkYjk1NDtcblxuICAmOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XG4gICAgbGluZS1oZWlnaHQ6ICRpY29uLXNpemU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRpY29uLXNpemU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIH1cbiAgfVxuXG4gICYubm90LXNhdmVkOm5vdCg6aG92ZXIpLFxuICAmLnNhdmVkOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjExKTtcbiAgfVxuXG4gICY6aG92ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG4iLCJidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIGNvbG9yOiAjMWRiOTU0O1xufVxuYnV0dG9uOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMDtcbn1cbmJ1dHRvbjo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuYnV0dG9uLm5vdC1zYXZlZDpub3QoOmhvdmVyKSwgYnV0dG9uLnNhdmVkOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSk7XG59XG5idXR0b246aG92ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/track-save-button/track-save-button.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/track-save-button/track-save-button.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TrackSaveButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackSaveButtonComponent", function() { return TrackSaveButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_states_track_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/states/track.state */ "./src/app/store/states/track.state.ts");
/* harmony import */ var _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/track.actions */ "./src/app/store/actions/track.actions.ts");





let TrackSaveButtonComponent = class TrackSaveButtonComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnChanges() {
        this.store.select(_store_states_track_state__WEBPACK_IMPORTED_MODULE_3__["TrackState"].isSaved(this.id)).subscribe((value) => {
            this.isSaved = value;
        });
    }
    save(event) {
        event.stopPropagation();
        this.store.dispatch(new _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["SaveTrack"](this.id));
    }
    remove(event) {
        event.stopPropagation();
        this.store.dispatch(new _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveTrack"](this.id));
    }
};
TrackSaveButtonComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrackSaveButtonComponent.prototype, "id", void 0);
TrackSaveButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-save-button',
        template: __webpack_require__(/*! raw-loader!./track-save-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/track-save-button/track-save-button.component.html"),
        styles: [__webpack_require__(/*! ./track-save-button.component.scss */ "./src/app/components/track-save-button/track-save-button.component.scss")]
    })
], TrackSaveButtonComponent);



/***/ }),

/***/ "./src/app/components/volume-control/volume-control.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/volume-control/volume-control.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdm9sdW1lLWNvbnRyb2wvdm9sdW1lLWNvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/volume-control/volume-control.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/volume-control/volume-control.component.ts ***!
  \***********************************************************************/
/*! exports provided: VolumeControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeControlComponent", function() { return VolumeControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/player.actions */ "./src/app/store/actions/player.actions.ts");




let VolumeControlComponent = class VolumeControlComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.select(state => state.player.device.volume_percent).subscribe((value) => {
            this.volume = value;
        });
    }
    onNgModelChange(volume) {
        this.store.dispatch(new _store_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["SetVolume"](volume));
    }
};
VolumeControlComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
VolumeControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-volume-control',
        template: __webpack_require__(/*! raw-loader!./volume-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/volume-control/volume-control.component.html"),
        styles: [__webpack_require__(/*! ./volume-control.component.scss */ "./src/app/components/volume-control/volume-control.component.scss")]
    })
], VolumeControlComponent);



/***/ }),

/***/ "./src/app/guards/spotify-redirect.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/guards/spotify-redirect.guard.ts ***!
  \**************************************************/
/*! exports provided: SpotifyRedirectGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyRedirectGuard", function() { return SpotifyRedirectGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SpotifyRedirectGuard = class SpotifyRedirectGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        let accessToken;
        let tokenType;
        let expiresIn;
        for (const fragment of route.fragment.split('&')) {
            const frags = fragment.split('=');
            if (frags[0] === 'access_token') {
                accessToken = frags[1];
            }
            if (frags[0] === 'token_type') {
                tokenType = frags[1];
            }
            if (frags[0] === 'expires_in') {
                expiresIn = frags[1];
            }
        }
        localStorage.setItem('ngx-spotify-token', accessToken);
        localStorage.setItem('ngx-spotify-token-type', tokenType);
        localStorage.setItem('ngx-spotify-token-expires', expiresIn);
        this.router.navigate(['']);
        return true;
    }
};
SpotifyRedirectGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SpotifyRedirectGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpotifyRedirectGuard);



/***/ }),

/***/ "./src/app/guards/spotify.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/spotify.guard.ts ***!
  \*****************************************/
/*! exports provided: SpotifyGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyGuard", function() { return SpotifyGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_providers_player_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/providers/player-spotify.service */ "./src/app/store/providers/player-spotify.service.ts");




let SpotifyGuard = class SpotifyGuard {
    constructor(router, player) {
        this.router = router;
        this.player = player;
    }
    canActivate(route, state) {
        if (localStorage.getItem('ngx-spotify-token')) {
            window.waitForSpotify.then(() => {
                if (!this.player.isInitialized()) {
                    this.player.initialize();
                }
            });
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
};
SpotifyGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _store_providers_player_spotify_service__WEBPACK_IMPORTED_MODULE_3__["PlayerSpotifyService"] }
];
SpotifyGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpotifyGuard);



/***/ }),

/***/ "./src/app/interceptors/spotify-authorization-interceptor.ts":
/*!*******************************************************************!*\
  !*** ./src/app/interceptors/spotify-authorization-interceptor.ts ***!
  \*******************************************************************/
/*! exports provided: SpotifyAuthorizationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyAuthorizationInterceptor", function() { return SpotifyAuthorizationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpotifyAuthorizationInterceptor = class SpotifyAuthorizationInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('ngx-spotify-token')}`
            }
        });
        return next.handle(request);
    }
};
SpotifyAuthorizationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SpotifyAuthorizationInterceptor);



/***/ }),

/***/ "./src/app/modules/material-import.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/material-import.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialImportModule", function() { return MaterialImportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





const modules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
];
let MaterialImportModule = class MaterialImportModule {
};
MaterialImportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: modules,
        exports: modules,
    })
], MaterialImportModule);



/***/ }),

/***/ "./src/app/pages/artist-detail/artist-detail.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/artist-detail/artist-detail.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGlzdC1kZXRhaWwvYXJ0aXN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/artist-detail/artist-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/artist-detail/artist-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: ArtistDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDetailComponent", function() { return ArtistDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/artist.actions */ "./src/app/store/actions/artist.actions.ts");





let ArtistDetailComponent = class ArtistDetailComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((value) => {
            this.store.dispatch(new _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_4__["GetArtist"](value.id));
        });
        this.store.select(state => state.artists.currentArtist).subscribe((value) => {
            this.artist = value;
        });
    }
};
ArtistDetailComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ArtistDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artist-detail',
        template: __webpack_require__(/*! raw-loader!./artist-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/artist-detail/artist-detail.component.html"),
        styles: [__webpack_require__(/*! ./artist-detail.component.scss */ "./src/app/pages/artist-detail/artist-detail.component.scss")]
    })
], ArtistDetailComponent);



/***/ }),

/***/ "./src/app/pages/artists/artists.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/artists/artists.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  display: block;\n}\n\n.item-list {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvYXJ0aXN0cy9hcnRpc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcnRpc3RzL2FydGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXJ0aXN0cy9hcnRpc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/artists/artists.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/artists/artists.component.ts ***!
  \****************************************************/
/*! exports provided: ArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function() { return ArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/artist.actions */ "./src/app/store/actions/artist.actions.ts");




let ArtistsComponent = class ArtistsComponent {
    constructor(store) {
        this.store = store;
        this.pageSize = 50;
    }
    ngOnInit() {
        this.store.select(state => state.artists.ids).subscribe((value) => {
            this.ids = value;
        });
    }
    onPageChange(offset) {
        const start = offset * this.pageSize;
        const end = start + this.pageSize;
        const pageIds = this.ids.slice(start, end);
        this.store.dispatch(new _store_actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__["GetArtists"](pageIds, this.pageSize));
    }
};
ArtistsComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artists',
        template: __webpack_require__(/*! raw-loader!./artists.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/artists/artists.component.html"),
        styles: [__webpack_require__(/*! ./artists.component.scss */ "./src/app/pages/artists/artists.component.scss")]
    })
], ArtistsComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_providers_profile_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/providers/profile-spotify.service */ "./src/app/store/providers/profile-spotify.service.ts");



let HomeComponent = class HomeComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.profileService.getProfile().subscribe((value) => {
            this.profile = value;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _store_providers_profile_spotify_service__WEBPACK_IMPORTED_MODULE_2__["ProfileSpotifyService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/import/import.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/import/import.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n}\n\n.card {\n  float: left;\n  margin: 20px;\n  padding: 50px;\n  width: 50%;\n}\n\n.card ::ng-deep .mat-card-header-text {\n  margin: 0;\n}\n\n.card h1 {\n  margin-top: 0;\n}\n\n.actions {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNDRjs7QURDRTtFQUNFLFNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNBSjs7QURJQTtFQUNFLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcG9ydC9pbXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogNTBweDtcbiAgd2lkdGg6IDUwJTtcblxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG4uYWN0aW9ucyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiIsIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcmQge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiA1MHB4O1xuICB3aWR0aDogNTAlO1xufVxuLmNhcmQgOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkIGgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmFjdGlvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/import/import.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/import/import.component.ts ***!
  \**************************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/track.actions */ "./src/app/store/actions/track.actions.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");




let ImportComponent = class ImportComponent {
    constructor(store) {
        this.store = store;
    }
    startImport() {
        this.store.dispatch(new _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_2__["ImportTracks"](0));
    }
    startImportFromPlaylists() {
        this.store.dispatch(new _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_2__["ImportPlaylists"](0));
    }
};
ImportComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
ImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-import',
        template: __webpack_require__(/*! raw-loader!./import.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/import/import.component.html"),
        styles: [__webpack_require__(/*! ./import.component.scss */ "./src/app/pages/import/import.component.scss")]
    })
], ImportComponent);



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_spotify_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/spotify-authentication.service */ "./src/app/providers/spotify-authentication.service.ts");



let LoginPageComponent = class LoginPageComponent {
    constructor(spotifyAuthentication) {
        this.spotifyAuthentication = spotifyAuthentication;
    }
    login() {
        this.spotifyAuthentication.login();
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _providers_spotify_authentication_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyAuthenticationService"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login-page/login-page.component.html"),
        styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/redirect/redirect.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/redirect/redirect.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGlyZWN0L3JlZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/redirect/redirect.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/redirect/redirect.component.ts ***!
  \******************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RedirectComponent = class RedirectComponent {
    constructor() { }
    ngOnInit() {
    }
};
RedirectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redirect',
        template: __webpack_require__(/*! raw-loader!./redirect.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/redirect/redirect.component.html"),
        styles: [__webpack_require__(/*! ./redirect.component.scss */ "./src/app/pages/redirect/redirect.component.scss")]
    })
], RedirectComponent);



/***/ }),

/***/ "./src/app/pages/search/search-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/search/search-page.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-list {\n  height: 418px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1saXN0IHtcbiAgaGVpZ2h0OiA0MThweDtcbn1cbiIsIi5pdGVtLWxpc3Qge1xuICBoZWlnaHQ6IDQxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/search/search-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-page.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/search.actions */ "./src/app/store/actions/search.actions.ts");





let SearchPageComponent = class SearchPageComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
        this.pageSize = 10;
        this.searching = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((value) => {
            this.query = value.query;
            this.store.dispatch(new _store_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["Search"](this.query, this.pageSize, 0, [
                'album',
                'artist',
                'track',
                'playlist',
            ]));
            this.searching = true;
        });
        this.store.select(state => state.search.results).subscribe((value) => {
            if (value) {
                if (value.tracks) {
                    this.trackResults = value.tracks;
                    this.trackIds = value.tracks.items.map(x => x.id);
                    this.trackTotal = value.tracks.total;
                }
                if (value.artists) {
                    this.artistResults = value.artists;
                    this.artistIds = value.artists.items.map(x => x.id);
                    this.artistTotal = value.artists.total;
                }
            }
        });
    }
    onPageChange(offset, type) {
        this.store.dispatch(new _store_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["Search"](this.query, this.pageSize, offset, [type]));
    }
};
SearchPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-page',
        template: __webpack_require__(/*! raw-loader!./search-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search/search-page.component.html"),
        styles: [__webpack_require__(/*! ./search-page.component.scss */ "./src/app/pages/search/search-page.component.scss")]
    })
], SearchPageComponent);



/***/ }),

/***/ "./src/app/pages/tracks/tracks.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tracks/tracks.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  display: block;\n}\n\n.item-list {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvdHJhY2tzL3RyYWNrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHJhY2tzL3RyYWNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFja3MvdHJhY2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tracks/tracks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tracks/tracks.component.ts ***!
  \**************************************************/
/*! exports provided: TracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksComponent", function() { return TracksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/track.actions */ "./src/app/store/actions/track.actions.ts");




let TracksComponent = class TracksComponent {
    constructor(store) {
        this.store = store;
        this.pageSize = 50;
    }
    ngOnInit() {
        this.store.select(state => state.tracks.ids).subscribe((value) => {
            this.ids = value;
        });
    }
    onPageChange(offset) {
        const start = offset * this.pageSize;
        const end = start + this.pageSize;
        const pageIds = this.ids.slice(start, end);
        this.store.dispatch(new _store_actions_track_actions__WEBPACK_IMPORTED_MODULE_3__["GetTracks"](pageIds, this.pageSize));
    }
};
TracksComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
TracksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracks',
        template: __webpack_require__(/*! raw-loader!./tracks.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tracks/tracks.component.html"),
        styles: [__webpack_require__(/*! ./tracks.component.scss */ "./src/app/pages/tracks/tracks.component.scss")]
    })
], TracksComponent);



/***/ }),

/***/ "./src/app/pipes/minutes-seconds.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/minutes-seconds.pipe.ts ***!
  \***********************************************/
/*! exports provided: MinutesSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinutesSecondsPipe", function() { return MinutesSecondsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MinutesSecondsPipe = class MinutesSecondsPipe {
    transform(value) {
        const seconds = value / 1000;
        const minutes = Math.floor(seconds / 60);
        return minutes + ':' + this.pad(Math.floor(seconds - minutes * 60), 2);
    }
    pad(num, size) {
        let s = num + '';
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    }
};
MinutesSecondsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'minutesSeconds'
    })
], MinutesSecondsPipe);



/***/ }),

/***/ "./src/app/providers/spotify-authentication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/providers/spotify-authentication.service.ts ***!
  \*************************************************************/
/*! exports provided: SpotifyAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyAuthenticationService", function() { return SpotifyAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var SpotifyAuthenticationService_1;


let SpotifyAuthenticationService = SpotifyAuthenticationService_1 = class SpotifyAuthenticationService {
    constructor(config) {
        this.config = config;
    }
    getToken() {
        return localStorage.getItem(SpotifyAuthenticationService_1.tokenKey);
    }
    isLoggedIn() {
        return !!localStorage.getItem(SpotifyAuthenticationService_1.tokenKey);
    }
    login() {
        const params = {
            client_id: this.config.clientId,
            redirect_uri: this.config.redirectUri,
            scope: this.config.scope || '',
            response_type: 'token'
        };
        window.location.href = `${this.config.authorizationUrl}?${this.toQueryString(params)}`;
    }
    toQueryString(obj) {
        const parts = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return parts.join('&');
    }
};
SpotifyAuthenticationService.tokenKey = 'ngx-spotify-token';
SpotifyAuthenticationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] }
];
SpotifyAuthenticationService = SpotifyAuthenticationService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], SpotifyAuthenticationService);



/***/ }),

/***/ "./src/app/store/actions/artist.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/artist.actions.ts ***!
  \*************************************************/
/*! exports provided: GetArtists, GetArtistsSuccess, GetArtist, GetArtistSuccess, SaveArtist, RemoveArtist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArtists", function() { return GetArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArtistsSuccess", function() { return GetArtistsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArtist", function() { return GetArtist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArtistSuccess", function() { return GetArtistSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveArtist", function() { return SaveArtist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveArtist", function() { return RemoveArtist; });
class GetArtists {
    constructor(ids, pageSize) {
        this.ids = ids;
        this.pageSize = pageSize;
    }
}
GetArtists.type = '[Artist] GetArtists';
GetArtists.ctorParameters = () => [
    { type: Array },
    { type: Number }
];
class GetArtistsSuccess {
    constructor(artists) {
        this.artists = artists;
    }
}
GetArtistsSuccess.type = '[Artist] GetArtistsSuccess';
GetArtistsSuccess.ctorParameters = () => [
    { type: Array }
];
class GetArtist {
    constructor(id) {
        this.id = id;
    }
}
GetArtist.type = '[Artist] GetArtist';
GetArtist.ctorParameters = () => [
    { type: String }
];
class GetArtistSuccess {
    constructor(artist) {
        this.artist = artist;
    }
}
GetArtistSuccess.type = '[Artist] GetArtistSuccess';
GetArtistSuccess.ctorParameters = () => [
    { type: undefined }
];
class SaveArtist {
    constructor(id) {
        this.id = id;
    }
}
SaveArtist.type = '[Artist] SaveArtist';
SaveArtist.ctorParameters = () => [
    { type: String }
];
class RemoveArtist {
    constructor(id) {
        this.id = id;
    }
}
RemoveArtist.type = '[Artist] RemoveArtist';
RemoveArtist.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/store/actions/player.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/player.actions.ts ***!
  \*************************************************/
/*! exports provided: PlayTrack, UpdatePlayerStatus, RegisterPlayer, TogglePlay, NextTrack, PreviousTrack, UpdateVolume, SetVolume, UpdateDeviceStatus, Seek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayTrack", function() { return PlayTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePlayerStatus", function() { return UpdatePlayerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPlayer", function() { return RegisterPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglePlay", function() { return TogglePlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTrack", function() { return NextTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousTrack", function() { return PreviousTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVolume", function() { return UpdateVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetVolume", function() { return SetVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDeviceStatus", function() { return UpdateDeviceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seek", function() { return Seek; });
class PlayTrack {
    constructor(ids, id) {
        this.ids = ids;
        this.id = id;
    }
}
PlayTrack.type = '[Player] PlayTrack';
PlayTrack.ctorParameters = () => [
    { type: Array },
    { type: String }
];
class UpdatePlayerStatus {
    constructor(currentTrack, duration, position, paused) {
        this.currentTrack = currentTrack;
        this.duration = duration;
        this.position = position;
        this.paused = paused;
    }
}
UpdatePlayerStatus.type = '[Player] UpdatePlayerStatus';
UpdatePlayerStatus.ctorParameters = () => [
    { type: undefined },
    { type: Number },
    { type: Number },
    { type: Boolean }
];
class RegisterPlayer {
    constructor(deviceId) {
        this.deviceId = deviceId;
    }
}
RegisterPlayer.type = '[Player] RegisterPlayer';
RegisterPlayer.ctorParameters = () => [
    { type: String }
];
class TogglePlay {
}
TogglePlay.type = '[Player] TogglePlay';
class NextTrack {
}
NextTrack.type = '[Player] NextTrack';
class PreviousTrack {
}
PreviousTrack.type = '[Player] PreviousTrack';
class UpdateVolume {
    constructor(volume) {
        this.volume = volume;
    }
}
UpdateVolume.type = '[Player] UpdateVolume';
UpdateVolume.ctorParameters = () => [
    { type: Number }
];
class SetVolume {
    constructor(volume) {
        this.volume = volume;
    }
}
SetVolume.type = '[Player] SetVolume';
SetVolume.ctorParameters = () => [
    { type: Number }
];
class UpdateDeviceStatus {
    constructor(device) {
        this.device = device;
    }
}
UpdateDeviceStatus.type = '[Player] UpdateDeviceStatus';
UpdateDeviceStatus.ctorParameters = () => [
    { type: undefined }
];
class Seek {
    constructor(position) {
        this.position = position;
    }
}
Seek.type = '[Player] Seek';
Seek.ctorParameters = () => [
    { type: Number }
];


/***/ }),

/***/ "./src/app/store/actions/search.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/search.actions.ts ***!
  \*************************************************/
/*! exports provided: Search, SearchSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSuccess", function() { return SearchSuccess; });
class Search {
    constructor(query, pageSize, offset, type) {
        this.query = query;
        this.pageSize = pageSize;
        this.offset = offset;
        this.type = type;
    }
}
Search.type = '[Search] Search';
Search.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: Number },
    { type: Array }
];
class SearchSuccess {
    constructor(results) {
        this.results = results;
    }
}
SearchSuccess.type = '[Search] SearchSuccess';
SearchSuccess.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/actions/track.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/track.actions.ts ***!
  \************************************************/
/*! exports provided: GetTracks, GetTracksSuccess, SaveTrack, RemoveTrack, ImportTracks, ImportTracksSuccess, ImportPlaylists, ImportPlaylistsSuccess, ImportTracksFromPlaylist, ImportTracksFromPlaylistSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTracks", function() { return GetTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTracksSuccess", function() { return GetTracksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveTrack", function() { return SaveTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTrack", function() { return RemoveTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTracks", function() { return ImportTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTracksSuccess", function() { return ImportTracksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPlaylists", function() { return ImportPlaylists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPlaylistsSuccess", function() { return ImportPlaylistsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTracksFromPlaylist", function() { return ImportTracksFromPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTracksFromPlaylistSuccess", function() { return ImportTracksFromPlaylistSuccess; });
class GetTracks {
    constructor(ids, pageSize) {
        this.ids = ids;
        this.pageSize = pageSize;
    }
}
GetTracks.type = '[Track] GetTracks';
GetTracks.ctorParameters = () => [
    { type: Array },
    { type: Number }
];
class GetTracksSuccess {
    constructor(tracks) {
        this.tracks = tracks;
    }
}
GetTracksSuccess.type = '[Track] GetTracksSuccess';
GetTracksSuccess.ctorParameters = () => [
    { type: Array }
];
class SaveTrack {
    constructor(id) {
        this.id = id;
    }
}
SaveTrack.type = '[Track] SaveTrack';
SaveTrack.ctorParameters = () => [
    { type: String }
];
class RemoveTrack {
    constructor(id) {
        this.id = id;
    }
}
RemoveTrack.type = '[Track] RemoveTrack';
RemoveTrack.ctorParameters = () => [
    { type: String }
];
class ImportTracks {
    constructor(offset) {
        this.offset = offset;
    }
}
ImportTracks.type = '[Track] ImportTracks';
ImportTracks.ctorParameters = () => [
    { type: Number }
];
class ImportTracksSuccess {
    constructor(importObject) {
        this.importObject = importObject;
    }
}
ImportTracksSuccess.type = '[Track] ImportTracksSuccess';
ImportTracksSuccess.ctorParameters = () => [
    { type: undefined }
];
class ImportPlaylists {
    constructor(offset) {
        this.offset = offset;
    }
}
ImportPlaylists.type = '[Track] ImportPlaylists';
ImportPlaylists.ctorParameters = () => [
    { type: Number }
];
class ImportPlaylistsSuccess {
    constructor(importObject) {
        this.importObject = importObject;
    }
}
ImportPlaylistsSuccess.type = '[Track] ImportPlaylistsSuccess';
ImportPlaylistsSuccess.ctorParameters = () => [
    { type: undefined }
];
class ImportTracksFromPlaylist {
    constructor(id, offset) {
        this.id = id;
        this.offset = offset;
    }
}
ImportTracksFromPlaylist.type = '[Track] ImportTracksFromPlaylist';
ImportTracksFromPlaylist.ctorParameters = () => [
    { type: Number },
    { type: Number }
];
class ImportTracksFromPlaylistSuccess {
    constructor(id, importObject) {
        this.id = id;
        this.importObject = importObject;
    }
}
ImportTracksFromPlaylistSuccess.type = '[Track] ImportTracksFromPlaylistSuccess';
ImportTracksFromPlaylistSuccess.ctorParameters = () => [
    { type: Number },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/providers/album-spotify.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/providers/album-spotify.service.ts ***!
  \**********************************************************/
/*! exports provided: AlbumSpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumSpotifyService", function() { return AlbumSpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AlbumSpotifyService = class AlbumSpotifyService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    getAlbums() {
        return this.http.get(`${this.config.apiBase}/albums`);
    }
    getAlbum(album) {
        return this.http.get(`${this.config.apiBase}/albums/${album}`);
    }
};
AlbumSpotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AlbumSpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], AlbumSpotifyService);



/***/ }),

/***/ "./src/app/store/providers/artist-spotify.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/store/providers/artist-spotify.service.ts ***!
  \***********************************************************/
/*! exports provided: ArtistSpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSpotifyService", function() { return ArtistSpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ArtistSpotifyService = class ArtistSpotifyService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    getArtist(id) {
        return this.http.get(`${this.config.apiBase}/artists/${id}`);
    }
    getArtists(ids, pageSize) {
        const artists = ids.slice(0, Math.min(pageSize, ids.length)).join();
        return this.http.get(`${this.config.apiBase}/artists?ids=${artists}`);
    }
};
ArtistSpotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ArtistSpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], ArtistSpotifyService);



/***/ }),

/***/ "./src/app/store/providers/player-spotify.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/store/providers/player-spotify.service.ts ***!
  \***********************************************************/
/*! exports provided: PlayerSpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSpotifyService", function() { return PlayerSpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _providers_spotify_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/spotify-authentication.service */ "./src/app/providers/spotify-authentication.service.ts");
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/player.actions */ "./src/app/store/actions/player.actions.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");






let PlayerSpotifyService = class PlayerSpotifyService {
    constructor(config, http, spotifyAuthenticationService, store) {
        this.config = config;
        this.http = http;
        this.spotifyAuthenticationService = spotifyAuthenticationService;
        this.store = store;
        this.playerRegistered = false;
        this.initialized = false;
    }
    isInitialized() {
        return this.initialized;
    }
    initialize() {
        console.log('Spotify Web Playback SDK is ready');
        this.player = new window.Spotify.Player({
            name: 'f10k',
            getOAuthToken: (callback) => {
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
        this.player.addListener('not_ready', ({ device_id }) => {
            console.log('The Web Playback SDK is not ready to play music!');
        });
        this.player.on('ready', (data) => {
            const { device_id } = data;
            if (!this.playerRegistered) {
                this.store.dispatch(new _actions_player_actions__WEBPACK_IMPORTED_MODULE_4__["RegisterPlayer"](device_id));
                this.playerRegistered = true;
            }
        });
        this.player.on('not_ready', (data) => {
            const { device_id } = data;
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
            this.store.dispatch(new _actions_player_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePlayerStatus"](playbackState.track_window.current_track, playbackState.duration, playbackState.position, playbackState.paused));
        });
        setInterval(() => {
            this.getDeviceChanges();
            // this.getStateChanges();
            this.getTrackChanges();
        }, 1000);
        this.initialized = true;
    }
    getStateChanges() {
        this.player.getCurrentState().then((playbackState) => {
            if (playbackState) {
                this.store.dispatch(new _actions_player_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePlayerStatus"](playbackState.track_window ? playbackState.track_window.current_track : null, playbackState.duration, playbackState.position, playbackState.paused));
            }
        });
    }
    getTrackChanges() {
        this.http.get(`${this.config.apiBase}/me/player/currently-playing`).subscribe((value) => {
            if (value) {
                this.store.dispatch(new _actions_player_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePlayerStatus"](value.item, value.item.duration_ms, value.progress_ms, !value.is_playing));
            }
        });
    }
    getDeviceChanges() {
        this.http.get(`${this.config.apiBase}/me/player`).subscribe((value) => {
            if (value && value.device) {
                this.store.dispatch(new _actions_player_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateDeviceStatus"](value.device));
            }
        });
    }
    playTrack(ids, id, deviceId, current) {
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
    next(device) {
        return this.http.post(`${this.config.apiBase}/me/player/next`, {});
    }
    previous(device) {
        return this.http.post(`${this.config.apiBase}/me/player/previous`, {});
    }
    setVolume(device, volume) {
        return this.http.put(` ${this.config.apiBase}/me/player/volume?device_id=${device}&volume_percent=${volume}`, {});
    }
    seek(device, position) {
        return this.http.put(` ${this.config.apiBase}/me/player/seek?device_id=${device}&position_ms=${position}`, {});
    }
    disconnect() {
        this.player.disconnect();
    }
};
PlayerSpotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _providers_spotify_authentication_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyAuthenticationService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
PlayerSpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], PlayerSpotifyService);



/***/ }),

/***/ "./src/app/store/providers/playlist-spotify.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/store/providers/playlist-spotify.service.ts ***!
  \*************************************************************/
/*! exports provided: PlaylistSpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistSpotifyService", function() { return PlaylistSpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PlaylistSpotifyService = class PlaylistSpotifyService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    getPlaylists() {
        return this.http.get(`${this.config.apiBase}/me/playlists`);
    }
};
PlaylistSpotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlaylistSpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], PlaylistSpotifyService);



/***/ }),

/***/ "./src/app/store/providers/profile-spotify.service.ts":
/*!************************************************************!*\
  !*** ./src/app/store/providers/profile-spotify.service.ts ***!
  \************************************************************/
/*! exports provided: ProfileSpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSpotifyService", function() { return ProfileSpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProfileSpotifyService = class ProfileSpotifyService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    getProfile() {
        return this.http.get(`${this.config.apiBase}/me`);
    }
};
ProfileSpotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileSpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], ProfileSpotifyService);



/***/ }),

/***/ "./src/app/store/providers/search-spotify.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/store/providers/search-spotify.service.ts ***!
  \***********************************************************/
/*! exports provided: SearchSpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSpotifyService", function() { return SearchSpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SearchSpotifyService = class SearchSpotifyService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    search(query, limit, offset, type) {
        return this.http.get(`${this.config.apiBase}/search?q=${query}&type=${type}&market=from_token&limit=${limit}&offset=${offset}`);
    }
};
SearchSpotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchSpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], SearchSpotifyService);



/***/ }),

/***/ "./src/app/store/providers/track-spotify.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/providers/track-spotify.service.ts ***!
  \**********************************************************/
/*! exports provided: TrackSpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackSpotifyService", function() { return TrackSpotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TrackSpotifyService = class TrackSpotifyService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    getTrack(id) {
        return this.http.get(`${this.config.apiBase}/track/${id}`);
    }
    getTracks(ids, pageSize) {
        const tracks = ids.slice(0, Math.min(pageSize, ids.length)).join();
        return this.http.get(`${this.config.apiBase}/tracks?ids=${tracks}`);
    }
    importTracks(offset) {
        let url = `${this.config.apiBase}/me/tracks?limit=50`;
        if (offset > 0) {
            url += `&offset=${offset}`;
        }
        return this.http.get(url);
    }
    importPlaylists(offset) {
        let url = `${this.config.apiBase}/me/playlists?limit=50`;
        if (offset > 0) {
            url += `&offset=${offset}`;
        }
        return this.http.get(url);
    }
    importTracksFromPlaylists(id, offset) {
        let url = `${this.config.apiBase}/playlists/${id}/tracks?limit=50`;
        if (offset > 0) {
            url += `&offset=${offset}`;
        }
        return this.http.get(url);
    }
};
TrackSpotifyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['SpotifyConfig',] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TrackSpotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('SpotifyConfig'))
], TrackSpotifyService);



/***/ }),

/***/ "./src/app/store/states/artist.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/states/artist.state.ts ***!
  \**********************************************/
/*! exports provided: ArtistState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistState", function() { return ArtistState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/artist.actions */ "./src/app/store/actions/artist.actions.ts");
/* harmony import */ var _ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store/operators */ "./node_modules/@ngxs/store/fesm2015/ngxs-store-operators.js");
/* harmony import */ var _providers_artist_spotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/artist-spotify.service */ "./src/app/store/providers/artist-spotify.service.ts");
var ArtistState_1;





let ArtistState = ArtistState_1 = class ArtistState {
    constructor(artistService) {
        this.artistService = artistService;
    }
    static isSaved(id) {
        return Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ArtistState_1], (state) => {
            return state.ids.filter(s => s === id).length > 0;
        });
    }
    getArtists(ctx, action) {
        this.artistService.getArtists(action.ids, action.pageSize).subscribe((value) => {
            ctx.dispatch(new _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["GetArtistsSuccess"](value.artists));
        });
    }
    getArtistsSuccess(ctx, action) {
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            artists: action.artists,
        }));
    }
    getArtist(ctx, action) {
        const state = ctx.getState();
        ctx.patchState(Object.assign({}, state, { currentArtistId: action.id }));
        this.artistService.getArtist(action.id).subscribe((value) => {
            ctx.dispatch(new _actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["GetArtistSuccess"](value));
        });
    }
    getArtistSuccess(ctx, action) {
        const state = ctx.getState();
        ctx.patchState(Object.assign({}, state, { currentArtist: action.artist }));
    }
    saveArtist(ctx, action) {
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            ids: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["append"])([action.id]),
        }));
    }
    removeArtist(ctx, action) {
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            ids: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["removeItem"])(name => name === action.id),
        }));
    }
};
ArtistState.ctorParameters = () => [
    { type: _providers_artist_spotify_service__WEBPACK_IMPORTED_MODULE_4__["ArtistSpotifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["GetArtists"])
], ArtistState.prototype, "getArtists", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["GetArtistsSuccess"])
], ArtistState.prototype, "getArtistsSuccess", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["GetArtist"])
], ArtistState.prototype, "getArtist", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["GetArtistSuccess"])
], ArtistState.prototype, "getArtistSuccess", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["SaveArtist"])
], ArtistState.prototype, "saveArtist", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveArtist"])
], ArtistState.prototype, "removeArtist", null);
ArtistState = ArtistState_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'artists',
        defaults: {
            ids: [
                '0fHBsOHvZ9LDBZ2GaLuxxm',
                '1UsiNk3VkfrQDLuCDMxitB',
                '3ZMO6No33TsxKjkqLYgEu9',
            ],
            artists: [],
        }
    })
], ArtistState);



/***/ }),

/***/ "./src/app/store/states/folder.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/states/folder.state.ts ***!
  \**********************************************/
/*! exports provided: FolderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderState", function() { return FolderState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");


let FolderState = class FolderState {
    static folders(state) {
        return state.folders;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], FolderState, "folders", null);
FolderState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'folders',
        defaults: {
            folderList: [
                '1',
                '2',
            ],
            folders: [
                { name: 'Henk', id: '1' },
                { name: 'Piet', id: '2' },
                { name: 'Klaas', id: '3' },
                { name: 'Gerard', id: '4' },
            ],
        },
    })
], FolderState);



/***/ }),

/***/ "./src/app/store/states/player.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/states/player.state.ts ***!
  \**********************************************/
/*! exports provided: PlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _providers_player_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/player-spotify.service */ "./src/app/store/providers/player-spotify.service.ts");
/* harmony import */ var _actions_player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/player.actions */ "./src/app/store/actions/player.actions.ts");




let PlayerState = class PlayerState {
    constructor(playerService) {
        this.playerService = playerService;
    }
    playTrack(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign({}, state, { track_list: action.ids, current_track_id: action.id }));
        this.playerService.playTrack(action.ids, action.id, state.device.id, !!state.initialized).subscribe();
    }
    togglePlay(ctx, action) {
        this.playerService.togglePlay();
    }
    updatePlayerStatus(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign({}, state, { current_track: action.currentTrack, duration: action.duration, position: action.position, paused: action.paused }));
    }
    registerPlayer(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign({}, state, { device: Object.assign({}, state.device, { id: action.deviceId }) }));
    }
    nextTrack(ctx, action) {
        const state = ctx.getState();
        this.playerService.next(state.device.id).subscribe();
    }
    previousTrack(ctx, action) {
        const state = ctx.getState();
        this.playerService.previous(state.device.id).subscribe();
    }
    setVolume(ctx, action) {
        const state = ctx.getState();
        this.playerService.setVolume(state.device.id, action.volume).subscribe();
    }
    updateDeviceStatus(ctx, action) {
        ctx.patchState({
            device: action.device,
        });
    }
    skipToPosition(ctx, action) {
        const state = ctx.getState();
        this.playerService.seek(state.device.id, action.position).subscribe();
    }
};
PlayerState.ctorParameters = () => [
    { type: _providers_player_spotify_service__WEBPACK_IMPORTED_MODULE_2__["PlayerSpotifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["PlayTrack"])
], PlayerState.prototype, "playTrack", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["TogglePlay"])
], PlayerState.prototype, "togglePlay", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["UpdatePlayerStatus"])
], PlayerState.prototype, "updatePlayerStatus", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["RegisterPlayer"])
], PlayerState.prototype, "registerPlayer", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["NextTrack"])
], PlayerState.prototype, "nextTrack", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["PreviousTrack"])
], PlayerState.prototype, "previousTrack", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["SetVolume"])
], PlayerState.prototype, "setVolume", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateDeviceStatus"])
], PlayerState.prototype, "updateDeviceStatus", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_player_actions__WEBPACK_IMPORTED_MODULE_3__["Seek"])
], PlayerState.prototype, "skipToPosition", null);
PlayerState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
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
], PlayerState);



/***/ }),

/***/ "./src/app/store/states/search.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/states/search.state.ts ***!
  \**********************************************/
/*! exports provided: SearchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchState", function() { return SearchState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/search.actions */ "./src/app/store/actions/search.actions.ts");
/* harmony import */ var _providers_search_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/search-spotify.service */ "./src/app/store/providers/search-spotify.service.ts");




let SearchState = class SearchState {
    constructor(searchService) {
        this.searchService = searchService;
    }
    search(ctx, action) {
        const state = ctx.getState();
        ctx.patchState(Object.assign({}, state, { query: action.query }));
        this.searchService.search(action.query, action.pageSize, action.offset, action.type).subscribe((value) => {
            ctx.dispatch(new _actions_search_actions__WEBPACK_IMPORTED_MODULE_2__["SearchSuccess"](value));
        });
    }
    searchSuccess(ctx, action) {
        const state = ctx.getState();
        ctx.patchState(Object.assign({}, state, { results: action.results }));
    }
};
SearchState.ctorParameters = () => [
    { type: _providers_search_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SearchSpotifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_2__["Search"])
], SearchState.prototype, "search", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_2__["SearchSuccess"])
], SearchState.prototype, "searchSuccess", null);
SearchState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'search',
        defaults: {
            query: '',
            results: null,
        }
    })
], SearchState);



/***/ }),

/***/ "./src/app/store/states/track.state.ts":
/*!*********************************************!*\
  !*** ./src/app/store/states/track.state.ts ***!
  \*********************************************/
/*! exports provided: TrackState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackState", function() { return TrackState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _providers_track_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/track-spotify.service */ "./src/app/store/providers/track-spotify.service.ts");
/* harmony import */ var _ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store/operators */ "./node_modules/@ngxs/store/fesm2015/ngxs-store-operators.js");
/* harmony import */ var _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/track.actions */ "./src/app/store/actions/track.actions.ts");
var TrackState_1;





let TrackState = TrackState_1 = class TrackState {
    constructor(trackService) {
        this.trackService = trackService;
    }
    static isSaved(id) {
        return Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([TrackState_1], (state) => {
            return state.ids.filter(s => s === id).length > 0;
        });
    }
    getTracks(ctx, action) {
        this.trackService.getTracks(action.ids, action.pageSize).subscribe((value) => {
            ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["GetTracksSuccess"](value.tracks));
        });
    }
    getTracksSuccess(ctx, action) {
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            tracks: action.tracks,
        }));
    }
    saveTrack(ctx, action) {
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            ids: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["append"])([action.id]),
        }));
    }
    removeTrack(ctx, action) {
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            ids: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["removeItem"])(name => name === action.id),
        }));
    }
    importTracks(ctx, action) {
        this.trackService.importTracks(action.offset).subscribe((value) => {
            console.log(value);
            ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracksSuccess"](value));
        });
    }
    importTracksSuccess(ctx, action) {
        const ids = action.importObject.items.map(x => x.track.id);
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            ids: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["append"])(ids),
        }));
        if (action.importObject.next) {
            ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracks"](action.importObject.offset + 50));
        }
    }
    importPlaylists(ctx, action) {
        this.trackService.importPlaylists(action.offset).subscribe((value) => {
            ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportPlaylistsSuccess"](value));
        });
    }
    importPlaylistsSuccess(ctx, action) {
        const ids = action.importObject.items;
        ids.forEach((value) => {
            ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracksFromPlaylist"](value.id, 0));
        });
        if (action.importObject.next) {
            setTimeout(() => {
                ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportPlaylists"](action.importObject.offset + 50));
            }, 60000);
        }
    }
    importFromPlaylistsTracks(ctx, action) {
        this.trackService.importTracksFromPlaylists(action.id, action.offset).subscribe((value) => {
            ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracksFromPlaylistSuccess"](action.id, value));
        });
    }
    importTracksFromPlaylistsSuccess(ctx, action) {
        const ids = action.importObject.items.map(x => x.track.id);
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["patch"])({
            ids: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_3__["append"])(ids),
        }));
        if (action.importObject.next) {
            ctx.dispatch(new _actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracksFromPlaylist"](action.id, action.importObject.offset + 50));
        }
    }
};
TrackState.ctorParameters = () => [
    { type: _providers_track_spotify_service__WEBPACK_IMPORTED_MODULE_2__["TrackSpotifyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["GetTracks"])
], TrackState.prototype, "getTracks", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["GetTracksSuccess"])
], TrackState.prototype, "getTracksSuccess", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["SaveTrack"])
], TrackState.prototype, "saveTrack", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveTrack"])
], TrackState.prototype, "removeTrack", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracks"])
], TrackState.prototype, "importTracks", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracksSuccess"])
], TrackState.prototype, "importTracksSuccess", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportPlaylists"])
], TrackState.prototype, "importPlaylists", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportPlaylistsSuccess"])
], TrackState.prototype, "importPlaylistsSuccess", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracksFromPlaylist"])
], TrackState.prototype, "importFromPlaylistsTracks", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_track_actions__WEBPACK_IMPORTED_MODULE_4__["ImportTracksFromPlaylistSuccess"])
], TrackState.prototype, "importTracksFromPlaylistsSuccess", null);
TrackState = TrackState_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'tracks',
        defaults: {
            ids: [
                '7lT3Y2QlPs792zEfOj4b0K'
            ],
            tracks: [],
        }
    })
], TrackState);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBase: 'https://api.spotify.com/v1',
    authorizationUrl: 'https://accounts.spotify.com/authorize',
    clientId: '3a6db42ee8c14d4797f65342c9a8b67d',
    redirectUri: 'http://localhost:4200/spotify-redirect'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /github/workspace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map