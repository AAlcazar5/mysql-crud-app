"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotesComponent = void 0;
var core_1 = require("@angular/core");
var NotesComponent = /** @class */ (function () {
    function NotesComponent(noteService, authService) {
        this.noteService = noteService;
        this.authService = authService;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.notes$ = this.fetchAll();
        this.userId = this.authService.userId;
    };
    NotesComponent.prototype.fetchAll = function () {
        return this.noteService.fetchAll();
    };
    NotesComponent.prototype.createNote = function () {
        this.notes$ = this.fetchAll();
    };
    NotesComponent.prototype["delete"] = function (noteId) {
        var _this = this;
        this.noteService
            .deleteNote(noteId)
            .subscribe(function () { return (_this.notes$ = _this.fetchAll()); });
    };
    NotesComponent = __decorate([
        core_1.Component({
            selector: "app-notes",
            templateUrl: "./notes.component.html",
            styleUrls: ["./notes.component.scss"]
        })
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
