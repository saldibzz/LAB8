import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'genrelist',
    templateUrl: './genrelist.component.html'
})
export class GenreListComponent {
    public genres: Genre[];

    constructor(http: Http) {
        http.get('/api/genres').subscribe(result => {
            this.genres = result.json();
        });
    }
}

interface Genre {
    genreID: number;
    name: string
}