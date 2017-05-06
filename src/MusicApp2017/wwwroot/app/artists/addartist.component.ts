import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'addartist',
    templateUrl: './addartist.component.html'

})

export class AddArtistComponent {

    model: Artist = new Artist();
    postResponse: Object;
    showForm = false;

    constructor(private http: Http) {

    }

    onSubmit(form: NgForm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/artists', JSON.stringify(this.model), { headers: headers }).subscribe(res => this.postResponse = res.json());
        form.reset();
        this.showForm = !this.showForm;
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }

}

class Artist {
    constructor(private artistID: number = 0,
        public name: string = null,
        public bio: string = null,
    ) { }
}