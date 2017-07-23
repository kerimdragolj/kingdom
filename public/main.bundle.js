webpackJsonp([1,4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validatePasswords = function (pass, confPass) {
        if (pass != confPass) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateName = function (name) {
        var re = /^[a-zA-Z -]+$/;
        return re.test(name);
    };
    ValidateService.prototype.validateUsername = function (username) {
        var re = /^[a-zA-Z0-9]+$/;
        return re.test(username);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/validate.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(683),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'user/profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(684),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(685),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/footer.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(686),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/home.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, flashMessages, router) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (res) {
            if (res.success) {
                _this.authService.storeData(res.token, res.user);
                _this.flashMessages.show('Successfully logged in!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessages.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(687),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/login.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessages, router) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show('You logged out!', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(688),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(689),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/profile.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessages, authService, router) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confPassword: this.confPassword
        };
        if (!this.validateService.validateName(user.name)) {
            this.flashMessages.show('Please use a-zA-z characters', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateUsername(user.username)) {
            this.flashMessages.show('Invalid username, please use only alphanumeric characters', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessages.show('Invalid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validatePasswords(user.password, user.confPassword)) {
            this.flashMessages.show('Passwords doesnt match', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Submit user to backend and register it
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show('You successfully registered', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessages.show('Something went wrong, try again later', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    //red input field warning on password
    RegisterComponent.prototype.onPasswordInput = function (password, confPassword) {
        if (password === confPassword) {
            document.getElementById("confPassword").className = "form-control";
        }
        else {
            document.getElementById("confPassword").className = "form-control danger";
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(690),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/register.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/environment.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "footer {\r\n  margin-top: 8%;\r\n  width: 100%;\r\n  text-align: center;\r\n\r\n}\r\n\r\nfooter p {\r\n  font-size: 10px;\r\n  font-family: Georgia;\r\n}\r\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "#centerize {\r\n  text-align: center;\r\n  background-color: #eff4ff;\r\n}\r\n\r\n#logo {\r\n  width: 40%;\r\n  height: 30%;\r\n}\r\n\r\n.btn {\r\n  width: 40%;\r\n  border: none;\r\n  color: white;\r\n  padding: 14px 28px;\r\n  cursor: pointer;\r\n  border-radius: 0px;\r\n  margin: 0px auto 5px auto;\r\n  transition: all .2s ease-in-out\r\n}\r\n\r\n.btn:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.spacer {\r\n  height: 10%;\r\n}\r\n\r\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  width: 100%;\r\n  height:100%;\r\n  background-color: #eff4ff;\r\n}\r\n\r\n.log-headline {\r\n  font-size: 40px;\r\n  margin-bottom: 40px;\r\n  margin-top: 5%;\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  color: white;\r\n  padding: 14px 28px;\r\n  cursor: pointer;\r\n  border-radius: 0px;\r\n  transition: all .2s ease-in-out\r\n}\r\n\r\n.btn:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ".navbar-default .navbar-nav > li > a {\r\n  color: #000;\r\n}\r\n\r\n.navbar-nav > .active > a, .navbar-nav > .active > a:hover {\r\n  border-color:darkgray;\r\n  background-color: #eff4ff;\r\n}\r\n\r\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\r\n  margin-top: 4px;\r\n}\r\n\r\n.navbar-form {\r\n padding-top: 10px;\r\n}\r\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ".profile {\r\n  margin: 20px 0;\r\n}\r\n\r\n/* Profile sidebar */\r\n.profile-sidebar {\r\n  padding: 20px 0 10px 0;\r\n  background: #fff;\r\n}\r\n\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  height: 50%;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.profile-userbuttons {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.profile-userbuttons .btn {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  padding: 6px 15px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.profile-userbuttons .btn:last-child {\r\n  margin-right: 0px;\r\n}\r\n\r\n.profile-usermenu {\r\n  margin-top: 30px;\r\n}\r\n\r\n.profile-usermenu ul li {\r\n  border-bottom: 1px solid #f0f4f7;\r\n}\r\n\r\n.profile-usermenu ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li a {\r\n  color: #93a3b5;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.profile-usermenu ul li a i {\r\n  margin-right: 8px;\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-usermenu ul li a:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1;\r\n}\r\n\r\n.profile-usermenu ul li.active {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li.active a {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px;\r\n}\r\n\r\n/* Profile Content */\r\n.profile-content {\r\n  padding: 20px;\r\n  background: #fff;\r\n  min-height: 460px;\r\n}\r\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ".reg-form {\r\n  text-align: center;\r\n  background-color: #e1e3e8;\r\n  border: 1px solid #c4d7ff;\r\n  padding: 0px 30px 20px 30px;\r\n  border-radius: 7px;\r\n  box-shadow: 10px 10px 50px #888888\r\n}\r\n\r\n.reg-headline {\r\n  font-size: 40px;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.btn {\r\n  width: 40%;\r\n  border: none;\r\n  color: white;\r\n  padding: 14px 28px;\r\n  cursor: pointer;\r\n  border-radius: 0px;\r\n  margin: 20px auto 5px auto;\r\n  transition: all .2s ease-in-out\r\n}\r\n\r\n.btn:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.form-group {\r\n  text-align: left;\r\n}\r\n\r\nlabel {\r\n  margin-top: 20px;\r\n}\r\n\r\n.danger {\r\n  border-color: red;\r\n}\r\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <p>Kerim Dragolj, Copyright &copy; 2017</p>\n</footer>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"centerize\">\n  <img src=\"images/kingdom-logo.png\" id=\"logo\">\n  <div class=\"spacer\"></div>\n  <a class=\"btn btn-primary btn-lg btn-block\" [routerLink]=\"['/login']\" role=\"button\">Login</a>\n  <a class=\"btn btn-primary btn-lg btn-block\" [routerLink]=\"['/register']\" role=\"button\">Register</a>\n</div>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <label class=\"log-headline col-lg-offset-3\"> Login: </label>\n  <form (submit)=\"onLoginSubmit()\">\n    <div class=\"login-form form-group col-lg-6 col-lg-offset-3\">\n      <div class=\"form-group\" (submit)=\"onLoginSubmit()\">\n        <label> Username: </label>\n        <input type=\"text\" placeholder=\"Username..\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      </div>\n      <div class=\"form-group\">\n        <label> Password: </label>\n        <input type=\"password\" placeholder=\"Password..\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" value=\"\">Remember me</label>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Log in</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n              aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"/\" class=\"navbar-brand\" ><img src=\"images/kingdom-k.png\" style=\"height: 100%;\"></a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/user/profile']\">Profile</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\" role=\"button\">Register</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\" role=\"button\">Login</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a href='#' (click)=\"onLogoutClick()\">Logout</a></li>\n      </ul>\n      <form class=\"navbar-form navbar-right\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"container\">\n    <div class=\"row profile\">\n      <div class=\"col-md-3\">\n        <div class=\"profile-sidebar\">\n          <!-- SIDEBAR USERPIC -->\n          <div class=\"profile-userpic\">\n            <img src=\"http://placehold.it/300x400\" class=\"img-responsive\" alt=\"\">\n          </div>\n          <!-- END SIDEBAR USERPIC -->\n          <!-- SIDEBAR USER TITLE -->\n          <div class=\"profile-usertitle\">\n            <div class=\"profile-usertitle-name\">\n            </div>\n            <div class=\"profile-usertitle-job\">\n              Developer\n            </div>\n          </div>\n          <!-- END SIDEBAR USER TITLE -->\n          <!-- SIDEBAR BUTTONS -->\n          <div class=\"profile-userbuttons\">\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Follow</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Message</button>\n          </div>\n          <!-- END SIDEBAR BUTTONS -->\n          <!-- SIDEBAR MENU -->\n          <div class=\"profile-usermenu\">\n            <ul class=\"nav\">\n              <li class=\"active\">\n                <a href=\"#\">\n                  <i class=\"glyphicon glyphicon-home\"></i>\n                  Overview </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"glyphicon glyphicon-user\"></i>\n                  Account Settings </a>\n              </li>\n              <li>\n                <a href=\"#\" target=\"_blank\">\n                  <i class=\"glyphicon glyphicon-ok\"></i>\n                  Tasks </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"glyphicon glyphicon-flag\"></i>\n                  Help </a>\n              </li>\n            </ul>\n          </div>\n          <!-- END MENU -->\n        </div>\n      </div>\n      <div class=\"col-md-9\">\n        <div class=\"profile-content\">\n          Some user related content goes here...\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n</div>\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<label class=\"col-lg-offset-3 col-xs-offset-1 reg-headline\">Register:</label>\n<div class=\"container input-group col-lg-offset-3 col-lg-6 reg-form\">\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label>Full name:</label>\n      <input pattern=\".{5,}\" title=\"5 characters minimum\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Username:</label>\n      <input class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Email:</label>\n      <input class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n    </div>\n      <div class=\"form-group\">\n        <label>Password:</label>\n        <input type=\"password\" pattern=\".{5,}\" required title=\"5 characters minimum\"  class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" #passwordval>\n      </div>\n      <div class=\"form-group\" >\n        <label>Confirm password:</label>\n        <input type=\"password\" pattern=\".{5,}\" required title=\"5 characters minimum\" (keyup)=\"onPasswordInput(passwordval.value, confPasswordval.value)\" class=\"form-control\" [(ngModel)]=\"confPassword\" name=\"confPassword\" id=\"confPassword\" #confPasswordval>\n      </div>\n    <button class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        alert(this.authToken);
        return this.http.get('http://localhost:3000/user/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
        ;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/kerim/IdeaProjects/KingDom/angular-src/src/auth.service.js.map

/***/ })

},[714]);
//# sourceMappingURL=main.bundle.map