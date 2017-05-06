import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavMenuComponent } from './navmenu/navmenu.component';

import { GenresComponent } from './genres/genres.component';
import { GenreComponent } from './genres/genre.component';
import { GenreListComponent } from './genres/genrelist.component';
import { AddGenreComponent } from './genres/addgenre.component';

import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist.component';
import { ArtistListComponent } from './artists/artistlist.component';
import { AddArtistComponent } from './artists/addartist.component';

import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album.component';
import { AlbumListComponent } from './albums/albumlist.component';
import { AddAlbumComponent } from './albums/addalbums.component';


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', component: WelcomeComponent },
            { path: 'albums', component: AlbumsComponent },
            { path: 'albums/:id', component: AlbumComponent },
            { path: 'artists', component: ArtistsComponent },
            { path: 'artists/:id', component: ArtistComponent },
            { path: 'genres', component: GenresComponent },
            { path: 'genres/:id', component: GenreComponent },//,
            //{ path: 'genrelist', component: GenreListComponent }
            { path: '**', redirectTo: 'welcome' }
        ])],
    declarations: [AppComponent, WelcomeComponent, NavMenuComponent, AlbumsComponent, AlbumComponent, AlbumListComponent, AddAlbumComponent, ArtistsComponent, ArtistListComponent, ArtistComponent, AddArtistComponent, GenresComponent, GenreListComponent, GenreComponent, AddGenreComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
