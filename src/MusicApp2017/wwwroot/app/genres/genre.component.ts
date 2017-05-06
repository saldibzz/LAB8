import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'genre',
    templateUrl: './genre.component.html'
})
export class GenreComponent {
    public genre: Genre;

    constructor(http: Http, route: ActivatedRoute) {
        var id = route.snapshot.params['id'];
        http.get('/api/genres/' + id).subscribe(result => {
            this.genre = result.json();
        });
    }
}

interface Genre {
    genreID: number;
    name: string
}