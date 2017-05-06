import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'addgenre',
    templateUrl: './addgenre.component.html'

})

export class AddGenreComponent {

    model: Genre = new Genre();
    postResponse: Object;
    showForm = false;

    constructor(private http: Http) {

    }

    onSubmit(form: NgForm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/genres', JSON.stringify(this.model), { headers: headers }).subscribe(res => this.postResponse = res.json());
        form.reset();
        this.showForm = !this.showForm;
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }

}

class Genre {
    constructor(private genreID: number = 0,
        public name: string = null
    ) { }
}