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
var router_1 = require("@angular/router");
var AlbumComponent = (function () {
    function AlbumComponent(http, route) {
        var _this = this;
        var id = route.snapshot.params['id'];
        http.get('/api/albums/' + id).subscribe(function (result) {
            _this.album = result.json();
        });
    }
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    core_1.Component({
        selector: 'album',
        templateUrl: './album.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], AlbumComponent);
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map