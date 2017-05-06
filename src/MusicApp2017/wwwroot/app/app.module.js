"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome/welcome.component");
var navmenu_component_1 = require("./navmenu/navmenu.component");
var genres_component_1 = require("./genres/genres.component");
var genre_component_1 = require("./genres/genre.component");
var genrelist_component_1 = require("./genres/genrelist.component");
var addgenre_component_1 = require("./genres/addgenre.component");
var artists_component_1 = require("./artists/artists.component");
var artist_component_1 = require("./artists/artist.component");
var artistlist_component_1 = require("./artists/artistlist.component");
var addartist_component_1 = require("./artists/addartist.component");
var albums_component_1 = require("./albums/albums.component");
var album_component_1 = require("./albums/album.component");
var albumlist_component_1 = require("./albums/albumlist.component");
var addalbums_component_1 = require("./albums/addalbums.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'albums', component: albums_component_1.AlbumsComponent },
                { path: 'albums/:id', component: album_component_1.AlbumComponent },
                { path: 'artists', component: artists_component_1.ArtistsComponent },
                { path: 'artists/:id', component: artist_component_1.ArtistComponent },
                { path: 'genres', component: genres_component_1.GenresComponent },
                { path: 'genres/:id', component: genre_component_1.GenreComponent },
                //{ path: 'genrelist', component: GenreListComponent }
                { path: '**', redirectTo: 'welcome' }
            ])],
        declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, navmenu_component_1.NavMenuComponent, albums_component_1.AlbumsComponent, album_component_1.AlbumComponent, albumlist_component_1.AlbumListComponent, addalbums_component_1.AddAlbumComponent, artists_component_1.ArtistsComponent, artistlist_component_1.ArtistListComponent, artist_component_1.ArtistComponent, addartist_component_1.AddArtistComponent, genres_component_1.GenresComponent, genrelist_component_1.GenreListComponent, genre_component_1.GenreComponent, addgenre_component_1.AddGenreComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map