webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database_deprecated__ = __webpack_require__("./node_modules/angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_clients_clients_component__ = __webpack_require__("./src/app/components/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_client_details_client_details_component__ = __webpack_require__("./src/app/components/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_client_add_client_component__ = __webpack_require__("./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_edit_client_edit_client_component__ = __webpack_require__("./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_setting_setting_component__ = __webpack_require__("./src/app/components/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_client_service__ = __webpack_require__("./src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_register_guard__ = __webpack_require__("./src/app/guards/register.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_register_guard__["a" /* RegisterGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'add-client', component: __WEBPACK_IMPORTED_MODULE_12__components_add_client_add_client_component__["a" /* AddClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_client_details_client_details_component__["a" /* ClientDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-client/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_edit_client_edit_client_component__["a" /* EditClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_18__components_setting_setting_component__["a" /* SettingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_19__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var firebaseConfig = {
    apiKey: "AIzaSyAvakjkwRKnYh-Rjtry_wsF2NAPUyxFsRM",
    authDomain: "clientpanel-da808.firebaseapp.com",
    databaseURL: "https://clientpanel-da808.firebaseio.com",
    storageBucket: "clientpanel-da808.appspot.com",
    messagingSenderId: "47232689691"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_client_details_client_details_component__["a" /* ClientDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_add_client_add_client_component__["a" /* AddClientComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_edit_client_edit_client_component__["a" /* EditClientComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_20__services_client_service__["a" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_24__guards_register_guard__["a" /* RegisterGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-client/add-client.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard</a>\n  </div>\n  <div class=\"col-md-6\">\n    \n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Add Client\n  </div>\n  <div class=\"card-block\">\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input \n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"client.firstName\"\n          name=\"firstName\"\n          #clientFirstName=\"ngModel\"\n          minlength=\"2\"\n          required\n        >\n        <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\" class=\"alert alert-danger\">\n          First name is required\n        </div>\n        <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\" class=\"alert alert-danger\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input \n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"client.lastName\"\n          name=\"lastName\"\n          #clientLastName=\"ngModel\"\n          minlength=\"2\"\n          required\n        >\n        <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\" class=\"alert alert-danger\">\n          Last name is required\n        </div>\n        <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\" class=\"alert alert-danger\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input \n          type=\"email\"\n          class=\"form-control\"\n          [(ngModel)]=\"client.email\"\n          name=\"email\"\n          #clientEmail=\"ngModel\"\n          minlength=\"2\"\n          required\n        >\n        <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\" class=\"alert alert-danger\">\n          Email required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input \n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"client.phone\"\n          name=\"phone\"\n          #clientPhone=\"ngModel\"\n          minlength=\"10\"\n          required\n        >\n        <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"alert alert-danger\">\n          Add a valid phone number\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"balance\">Balance</label>\n        <input \n          type=\"number\"\n          class=\"form-control\"\n          [(ngModel)]=\"client.balance\"\n          name=\"balance\"\n          #clientBalance=\"ngModel\"\n          [disabled]=\"disableBalanceOnAdd\"\n        >    \n      </div>\n\n      <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("./src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Router } from '@angular/router';



var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(flashMessagesService, router, clientService, settingsService) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.clientService = clientService;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disableBalanceOnAdd = false;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    };
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.disableBalanceOnAdd) {
            value.balance = 0;
        }
        // console.log(value, valid);
        if (!valid) {
            // console.log('not valid');
            this.flashMessagesService.show('please fill in all fields', {
                cssClass: 'alert-danger', timeout: 4000
            });
            this.router.navigate(['add-client']);
        }
        else {
            // console.log('valid');
            this.clientService.newClient(value);
            this.flashMessagesService.show('New client added', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    AddClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__("./src/app/components/add-client/add-client.component.html"),
            styles: [__webpack_require__("./src/app/components/add-client/add-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client-details/client-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard</a>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"btn-group pull-right\">\n        <a [routerLink]=\"['/edit-client/'+id]\" class=\"btn btn-secondary\">Edit</a>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteClick()\">Delete</button>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div *ngIf=\"client\" class=\"card\">\n    <h3 class=\"card-header\">{{client.firstName}} {{client.lastName}}</h3>\n    <div class=\"card-block\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <h4>Client ID: {{id}}</h4>\n        </div>\n        <div class=\"col-md-4\">\n          <h3 class=\"pull-right\">\n            Balance:\n            <span\n              [class.text-danger]=\"hasBalance\"\n              [class.text-success]=\"!hasBalance\"\n            >\n              {{ client.balance | currency:\"THB\":1}}\n            </span>\n            <small>\n              <a (click)=\"showBalanceUpdateInput = !showBalanceUpdateInput\"><i class=\"fa fa-pencil\"></i></a>\n            </small>\n          </h3>\n          <div class=\"clearfix\">\n            <form *ngIf=\"showBalanceUpdateInput\" (submit)=\"updateBalance(id)\" class=\"form-inline pull-right\">\n<div class=\"form-group\">\n  <input type=\"text\" [(ngModel)]=\"client.balance\" name=\"balance\" class=\"form-control\">\n</div>\n<button type=\"submit\" class=\"btn btn-primary\">Update</button>\n            </form>\n            <br>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Contact Email: {{client.email}}</li>\n        <li class=\"list-group-item\">Contact Phone: {{client.phone}}</li>\n      </ul>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("./src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, router, route, flashMessagesService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        // console.log(this.id);
        this.clientService.getClient(this.id).subscribe(function (client) {
            if (client.balance > 0) {
                _this.hasBalance = true;
            }
            _this.client = client;
            console.log(_this.client);
        });
    };
    ClientDetailsComponent.prototype.updateBalance = function (id) {
        this.clientService.updateClient(this.id, this.client);
        this.flashMessagesService.show('Balance Updated', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/client/' + this.id]);
    };
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm('Are you sure to delete?')) {
            this.clientService.deleteClient(this.id);
            this.flashMessagesService.show('Client Deleted', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    ClientDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__("./src/app/components/client-details/client-details.component.html"),
            styles: [__webpack_require__("./src/app/components/client-details/client-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2><i class=\"fa fa-users\"></i> Clients</h2>\n  </div>\n  <div class=\"col-md-6\">\n    <h5 class=\"pull-right text-muted\">Total Owed: {{totalOwed | currency:\"THB\":1}}</h5>\n  </div>\n</div>\n\n<table *ngIf=\"clients?.length > 0;else noClients \" class=\"table table-striped\">\n\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Balance</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let client of clients\">\n      <td>{{client.$key}}</td>\n      <td>{{client.firstName}} {{client.lastName}}</td>\n      <td>{{client.email}}</td>\n      <td>{{client.balance | currency:\"THB\":1}}</td>\n      <td><a [routerLink]=\"['/client/'+client.$key]\" href=\"\" class=\"btn btn-secondary btn-sm\"> <i class=\"fa fa-arrow-circle-o-right\"></i> Details</a></td>\n    </tr>\n  </tbody>\n</table>\n\n<ng-template #noClients>\n  <hr>\n  <h5>there are no clients in the system</h5>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("./src/app/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) {
            _this.clients = clients;
            //console.log(this.clients);
            _this.getTotalOwed();
        });
    };
    ClientsComponent.prototype.getTotalOwed = function () {
        var total = 0;
        for (var i = 0; i < this.clients.length; i++) {
            total += parseFloat(this.clients[i].balance);
        }
        this.totalOwed = total;
        // console.log(this.totalOwed);
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__("./src/app/components/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n      <app-clients></app-clients>\n  </div>\n  <div class=\"col-md-2\">\n    <app-sidebar></app-sidebar>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a [routerLink]=\"['/client/'+id]\" href=\"#\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i> Back To Details</a>\n    </div>\n    <div class=\"col-md-6\">\n      \n    </div>\n  </div>\n  \n  <div class=\"card\">\n    <div class=\"card-header\">\n      Edit Client\n    </div>\n    <div class=\"card-block\">\n      <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"client.firstName\"\n            name=\"firstName\"\n            #clientFirstName=\"ngModel\"\n            minlength=\"2\"\n            required\n          >\n          <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\" class=\"alert alert-danger\">\n            First name is required\n          </div>\n          <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\" class=\"alert alert-danger\">\n            Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"client.lastName\"\n            name=\"lastName\"\n            #clientLastName=\"ngModel\"\n            minlength=\"2\"\n            required\n          >\n          <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\" class=\"alert alert-danger\">\n            Last name is required\n          </div>\n          <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\" class=\"alert alert-danger\">\n            Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input \n            type=\"email\"\n            class=\"form-control\"\n            [(ngModel)]=\"client.email\"\n            name=\"email\"\n            #clientEmail=\"ngModel\"\n            minlength=\"2\"\n            required\n          >\n          <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\" class=\"alert alert-danger\">\n            Email required\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"phone\">Phone</label>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"client.phone\"\n            name=\"phone\"\n            #clientPhone=\"ngModel\"\n            minlength=\"10\"\n            required\n          >\n          <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"alert alert-danger\">\n            Add a valid phone number\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"balance\">Balance</label>\n          <input \n            type=\"number\"\n            class=\"form-control\"\n            [(ngModel)]=\"client.balance\"\n            name=\"balance\"\n            #clientBalance=\"ngModel\"\n            [disabled]=\"disableBalanceOnEdit\"\n          >    \n        </div>\n  \n        <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("./src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(clientService, router, route, flashMessagesService, settingsService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disableBalanceOnEdit = true;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
        this.id = this.route.snapshot.params['id'];
        // console.log(this.id);
        this.clientService.getClient(this.id).subscribe(function (client) {
            _this.client = client;
            // console.log(this.client);
        });
    };
    EditClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        // console.log(value, valid);
        if (!valid) {
            // console.log('not valid');
            this.flashMessagesService.show('please fill in all fields', {
                cssClass: 'alert-danger', timeout: 4000
            });
            this.router.navigate(['edit-client/' + this.id]);
        }
        else {
            // console.log('valid');
            this.clientService.updateClient(this.id, value);
            this.flashMessagesService.show('client Updated', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['client/' + this.id]);
        }
    };
    EditClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__("./src/app/components/edit-client/edit-client.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-client/edit-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <img class=\"mx-auto d-block\" src=\"/assets/img/logo.png\" alt=\"\">\n        <h1 class=\"text-center\">Login</h1>\n        <form (submit)=\"onSubmit()\" >\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n            </div>\n            <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, _flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this._flashMessagesService.show('You are logged in', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this._flashMessagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
            _this.router.navigate(['/login']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <div class=\"container\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">ClientPanel</a>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/\">Dashboard</a>\n          </li> \n        </ul>    \n\n        <ul class=\"navbar-nav ml-auto\">\n          <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/register\">Register</a>\n          </li> \n          <li *ngIf=\"!isLoggedIn  && showRegister\" class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n          </li> \n          <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" >{{loggedInUser}}</a>\n            </li> \n            <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" routerLink=\"/settings\">Settings</a>\n              </li> \n          <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\" >Logout</a>\n            </li> \n        </ul>   \n      </div>\n      </div>\n    </nav>\n    <br><br>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessagesService, settingsService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.settingsService = settingsService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showRegister = this.settingsService.getSettings().allowRegistration;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_settings_service__["a" /* SettingsService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>PAGE NOT FOUND!!</h1>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <img class=\"mx-auto d-block\" src=\"/assets/img/logo.png\" alt=\"\">\n          <h1 class=\"text-center\">Register</h1>\n          <form (submit)=\"onSubmit()\" >\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n            </div>\n  \n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n              </div>\n              <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"submit\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, _flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password).then(function (res) {
            _this._flashMessagesService.show('New user registed', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this._flashMessagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\">Back to Dashboard</i></a>\n  </div>\n  <div class=\"col-md-6\">\n    \n  </div>\n</div>\n\n<div class=\"card\">\n  <h3 class=\"card-header\">\n    Edit Settings\n  </h3>\n  <div class=\"card-block\">\n    <form (submit)=\"onSubmit()\" >\n      <div class=\"form-group\">\n        <label>Allow Registration</label>\n        <input type=\"checkbox\" [checked]=\"settings.allowRegistration\" (change)=\"settings.allowRegistration = !settings.allowRegistration\" name=\"allowRegistration\">\n      </div>\n\n      <div class=\"form-group\">\n          <label>Disable Balance On Add</label>\n          <input type=\"checkbox\" [checked]=\"settings.disableBalanceOnAdd\" (change)=\"settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd\" name=\"disableBalanceOnAdd\">\n        </div>\n\n        <div class=\"form-group\">\n            <label>Disable Balance On Edit</label>\n            <input type=\"checkbox\" [checked]=\"settings.disableBalanceOnEdit\" (change)=\"settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit\" name=\"disableBalanceOnEdit\">\n          </div>\n      <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingComponent = /** @class */ (function () {
    function SettingComponent(flashMessagesService, router, settingsService) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.settingsService = settingsService;
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.settings = this.settingsService.getSettings();
    };
    SettingComponent.prototype.onSubmit = function () {
        this.settingsService.changeSettings(this.settings);
        this.flashMessagesService.show('Settings saved', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/settings']);
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__("./src/app/components/setting/setting.component.html"),
            styles: [__webpack_require__("./src/app/components/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/add-client\" href=\"#\" class=\"btn btn-success btn-block\" > <i class=\"fa fa-plus\">Add new client</i></a>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/register.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterGuard = /** @class */ (function () {
    function RegisterGuard(router, settingsService) {
        this.router = router;
        this.settingsService = settingsService;
    }
    RegisterGuard.prototype.canActivate = function () {
        if (this.settingsService.getSettings().allowRegistration) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    RegisterGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], RegisterGuard);
    return RegisterGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (userDate) { return resolve(userDate); }).catch(function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (userDate) { return resolve(userDate); }, function (err) { return reject(err); });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("./node_modules/angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService(af) {
        this.af = af;
        this.clients = this.af.list('/clients');
    }
    ClientService.prototype.getClients = function () {
        return this.clients;
    };
    ClientService.prototype.newClient = function (client) {
        this.clients.push(client);
    };
    ClientService.prototype.getClient = function (id) {
        this.client = this.af.object('/clients/' + id);
        return this.client;
    };
    ClientService.prototype.updateClient = function (id, client) {
        return this.clients.update(id, client);
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.clients.remove(id);
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = {
            allowRegistration: true,
            disableBalanceOnAdd: true,
            disableBalanceOnEdit: true
        };
        if (localStorage.getItem('setting') != null) {
            this.settings = JSON.parse(localStorage.getItem('setting'));
        }
        else {
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        localStorage.setItem('setting', JSON.stringify(settings));
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map