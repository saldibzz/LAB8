import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'artistlist',
    templateUrl: './artistlist.component.html'
})
export class ArtistListComponent {
    public artists: Artist[];

    constructor(http: Http) {
        http.get('/api/artists').subscribe(result => {
            this.artists = result.json();
        });
    }
}

interface Artist {
    artistID: number;
    name: string;
    bio: string;
}