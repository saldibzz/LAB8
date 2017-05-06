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
var AddGenreComponent = (function () {
    function AddGenreComponent(http) {
        this.http = http;
        this.model = new Genre();
        this.showForm = false;
    }
    AddGenreComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/genres', JSON.stringify(this.model), { headers: headers }).subscribe(function (res) { return _this.postResponse = res.json(); });
        form.reset();
        this.showForm = !this.showForm;
    };
    AddGenreComponent.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
    };
    return AddGenreComponent;
}());
AddGenreComponent = __decorate([
    core_1.Component({
        selector: 'addgenre',
        templateUrl: './addgenre.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AddGenreComponent);
exports.AddGenreComponent = AddGenreComponent;
var Genre = (function () {
    function Genre(genreID, name) {
        if (genreID === void 0) { genreID = 0; }
        if (name === void 0) { name = null; }
        this.genreID = genreID;
        this.name = name;
    }
    return Genre;
}());
//# sourceMappingURL=addgenre.component.js.map