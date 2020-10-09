"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var create_note_component_1 = require("./components/create-note/create-note.component");
var notes_component_1 = require("./components/notes/notes.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var toolbar_1 = require("@angular/material/toolbar");
var navigation_component_1 = require("./components/navigation/navigation.component");
var signup_component_1 = require("./components/signup/signup.component");
var login_component_1 = require("./components/login/login.component");
var auth_interceptor_service_1 = require("./services/auth-interceptor.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                signup_component_1.SignupComponent,
                login_component_1.LoginComponent,
                notes_component_1.NotesComponent,
                create_note_component_1.CreateNoteComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.NoopAnimationsModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                toolbar_1.MatToolbarModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_service_1.AuthInterceptorService,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
