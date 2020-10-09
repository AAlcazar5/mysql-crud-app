"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoteService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var NoteService = /** @class */ (function () {
    function NoteService(http, errorHandlerService) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.url = "http://localhost:3000/note";
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ "Content-Type": "application/json" })
        };
    }
    NoteService.prototype.fetchAll = function () {
        return this.http
            .get(this.url, { responseType: "json" })
            .pipe(operators_1.catchError(this.errorHandlerService.handleError("fetchAll", [])));
    };
    NoteService.prototype.createNote = function (formData, userId) {
        return this.http
            .post(this.url, { title: formData.title, body: formData.body, user: userId }, this.httpOptions)
            .pipe(operators_1.catchError(this.errorHandlerService.handleError("createNote")));
    };
    NoteService.prototype.deleteNote = function (noteId) {
        return this.http["delete"](this.url + "/" + noteId, this.httpOptions)
            .pipe(operators_1.first(), operators_1.catchError(this.errorHandlerService.handleError("deleteNote")));
    };
    NoteService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
