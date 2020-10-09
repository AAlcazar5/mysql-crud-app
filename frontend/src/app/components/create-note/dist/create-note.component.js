"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateNoteComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var CreateNoteComponent = /** @class */ (function () {
    function CreateNoteComponent(authService, noteService) {
        this.authService = authService;
        this.noteService = noteService;
        this.create = new core_1.EventEmitter();
        this.isOpen = false;
    }
    CreateNoteComponent.prototype.ngOnInit = function () {
        this.form = this.createFormGroup();
    };
    CreateNoteComponent.prototype.createFormGroup = function () {
        return new forms_1.FormGroup({
            title: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.minLength(5),
            ]),
            body: new forms_1.FormControl("", [
                forms_1.Validators.required,
                forms_1.Validators.minLength(10),
            ])
        });
    };
    CreateNoteComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.noteService
            .createNote(formData, this.authService.userId)
            .pipe(operators_1.first())
            .subscribe(function () {
            _this.create.emit(null);
        });
        this.form.reset();
        this.formDirective.resetForm();
    };
    __decorate([
        core_1.ViewChild("formDirective")
    ], CreateNoteComponent.prototype, "formDirective");
    __decorate([
        core_1.Output()
    ], CreateNoteComponent.prototype, "create");
    CreateNoteComponent = __decorate([
        core_1.Component({
            selector: "app-create-note",
            templateUrl: "./create-note.component.html",
            styleUrls: ["./create-note.component.scss"]
        })
    ], CreateNoteComponent);
    return CreateNoteComponent;
}());
exports.CreateNoteComponent = CreateNoteComponent;
