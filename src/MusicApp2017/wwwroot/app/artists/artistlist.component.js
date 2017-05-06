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
var ArtistListComponent = (function () {
    function ArtistListComponent(http) {
        var _this = this;
        http.get('/api/artists').subscribe(function (result) {
            _this.artists = result.json();
        });
    }
    return ArtistListComponent;
}());
ArtistListComponent = __decorate([
    core_1.Component({
        selector: 'artistlist',
        templateUrl: './artistlist.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ArtistListComponent);
exports.ArtistListComponent = ArtistListComponent;
//# sourceMappingURL=artistlist.component.js.map