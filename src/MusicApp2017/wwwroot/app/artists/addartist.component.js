"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AddArtistComponent = (function () {
    function AddArtistComponent(http) {
        this.http = http;
        this.model = new Artist();
        this.showForm = false;
    }
    AddArtistComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/artists', JSON.stringify(this.model), { headers: headers }).subscribe(function (res) { return _this.postResponse = res.json(); });
        form.reset();
        this.showForm = !this.showForm;
    };
    AddArtistComponent.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
    };
    return AddArtistComponent;
}());
AddArtistComponent = __decorate([
    core_1.Component({
        selector: 'addartist',
        templateUrl: './addartist.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AddArtistComponent);
exports.AddArtistComponent = AddArtistComponent;
var Artist = (function () {
    function Artist(artistID, name, bio) {
        if (artistID === void 0) { artistID = 0; }
        if (name === void 0) { name = null; }
        if (bio === void 0) { bio = null; }
        this.artistID = artistID;
        this.name = name;
        this.bio = bio;
    }
    return Artist;
}());
//# sourceMappingURL=addartist.component.js.map