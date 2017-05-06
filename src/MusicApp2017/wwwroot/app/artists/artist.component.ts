import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'artist',
    templateUrl: './artist.component.html'
})
export class ArtistComponent {
    public artist: Artist;

    constructor(http: Http, route: ActivatedRoute) {
        var id = route.snapshot.params['id'];
        http.get('/api/artists/' + id).subscribe(result => {
            this.artist = result.json();
        });
    }
}

interface Artist {
    artistID: number;
    name: string;
    bio: string;
}