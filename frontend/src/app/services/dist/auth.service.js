"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(http, errorHandlerService, router) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.router = router;
        this.url = "http://localhost:3000/auth";
        this.isUserLoggedIn$ = new rxjs_1.BehaviorSubject(false);
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ "Content-Type": "application/json" })
        };
    }
    AuthService.prototype.signup = function (user) {
        return this.http
            .post(this.url + "/signup", user, this.httpOptions)
            .pipe(operators_1.first(), operators_1.catchError(this.errorHandlerService.handleError("signup")));
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .post(this.url + "/login", { email: email, password: password }, this.httpOptions)
            .pipe(operators_1.first(), operators_1.tap(function (tokenObject) {
            _this.userId = tokenObject.userId;
            localStorage.setItem("token", tokenObject.token);
            _this.isUserLoggedIn$.next(true);
            _this.router.navigate(["notes"]);
        }), operators_1.catchError(this.errorHandlerService.handleError("login")));
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
