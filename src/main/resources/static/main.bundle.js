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

/***/ "./src/app/all/all.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reglist\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Date</th>\r\n        <th>From</th>\r\n        <th>To</th>\r\n        <th>Subject</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let email of emails; let i = index\">\r\n        <th scope=\"row\">{{ i + 1 }}</th>\r\n        <td>{{ email.date }}</td>\r\n        <td>{{ email.from }}</td>\r\n        <td>{{ email.to }}</td>\r\n        <td>{{ email.subject }}</td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/emaildetail/{{email.messageId}}\">Afficher</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div>\r\n  <span>Total elements: {{totalElements}}</span>\r\n  <span>Total pages: {{totalPages}}</span>\r\n  <span>Size: {{size}}</span>\r\n</div>\r\n\r\n<!-- pager -->\r\n<nav>\r\n  <ul class=\"pagination justify-content-end\" *ngIf=\"pagesToShow && pagesToShow.length\">\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(1)\">First</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber)\">Previous</a>\r\n    </li>\r\n    <li class=\"page-item\" *ngFor=\"let page of pagesToShow\" [ngClass]=\"{active:pages.pageNumber + 1 === page}\">\r\n      <a class=\"page-link\" (click)=\"gopage(page)\">{{page}}</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber + 2)\">Next</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(totalPages)\">Last</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pageable_class__ = __webpack_require__("./src/app/app.pageable.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginer_service__ = __webpack_require__("./src/app/paginer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllComponent = /** @class */ (function () {
    function AllComponent(service, servicePage) {
        this.service = service;
        this.servicePage = servicePage;
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 0;
        this.pages = new __WEBPACK_IMPORTED_MODULE_2__app_pageable_class__["a" /* Pageable */]();
    }
    AllComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AllComponent.prototype.gopage = function (page) {
        if (page < 1 || page > this.totalPages) {
            return;
        }
        this.pages.pageNumber = page - 1;
        this.pages.offset = this.pages.pageNumber * this.pages.pageSize;
        this.refresh();
    };
    AllComponent.prototype.refresh = function () {
        var _this = this;
        this.service.getAllEmailsPage(this.pages)
            .subscribe(function (data) {
            _this.emails = data.content;
            _this.pages = data.pageable;
            _this.totalPages = data.totalPages;
            _this.totalElements = data.totalElements;
            _this.size = data.size;
            _this.pagesToShow = _this.servicePage.getPager(_this.totalElements, _this.totalPages, (_this.pages.pageNumber + 1), _this.pages.pageSize);
        });
    };
    AllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all',
            providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_3__paginer_service__["a" /* PaginerService */]],
            template: __webpack_require__("./src/app/all/all.component.html"),
            styles: [__webpack_require__("./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_3__paginer_service__["a" /* PaginerService */]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_table_component__ = __webpack_require__("./src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_all_component__ = __webpack_require__("./src/app/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emaildetail_emaildetail_component__ = __webpack_require__("./src/app/emaildetail/emaildetail.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'table',
        component: __WEBPACK_IMPORTED_MODULE_1__table_table_component__["a" /* TableComponent */]
    },
    {
        path: 'emaildetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__emaildetail_emaildetail_component__["a" /* EmaildetailComponent */]
    },
    {
        path: 'all',
        component: __WEBPACK_IMPORTED_MODULE_2__all_all_component__["a" /* AllComponent */]
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__table_table_component__ = __webpack_require__("./src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__emaildetail_emaildetail_component__ = __webpack_require__("./src/app/emaildetail/emaildetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__all_all_component__ = __webpack_require__("./src/app/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_11__emaildetail_emaildetail_component__["a" /* EmaildetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__all_all_component__["a" /* AllComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__emaildetail_emaildetail_component__["a" /* EmaildetailComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pageable.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pageable; });
var Pageable = /** @class */ (function () {
    function Pageable(offset, pageNumber, pageSize) {
        if (offset === void 0) { offset = 0; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        this.init(offset, pageNumber, pageSize);
    }
    Pageable.prototype.init = function (offset, pageNumber, pageSize) {
        if (offset === void 0) { offset = 0; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        this.offset = offset;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    };
    return Pageable;
}());



/***/ }),

/***/ "./src/app/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.urlApi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    EmailService.prototype.getAllEmails = function () {
        return this.http.get(this.urlApi + '/all');
    };
    EmailService.prototype.getAllEmailsPage = function (page) {
        return this.http.get(this.urlApi + '/all?page=' + page.pageNumber + '&size=' + page.pageSize);
    };
    EmailService.prototype.getEmails = function (term) {
        return this.http.get(this.urlApi + '/search?term=' + term);
    };
    EmailService.prototype.getEmailsPage = function (page, term) {
        return this.http.get(this.urlApi + '/search?term=' + term + '&page=' + page.pageNumber + '&size=' + page.pageSize);
    };
    EmailService.prototype.getEmailById = function (idEmail) {
        return this.http.get(this.urlApi + '/email/' + idEmail);
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/emaildetail/emaildetail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emaildetail/emaildetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reglist\">\r\n    <div class=\"container\" *ngIf=\"dataLoaded\">\r\n        <h2>Message n° {{ email.messageId }} </h2>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6 col-sm-12\">\r\n                        <p>\r\n                            <b>Date : </b> {{ email.date }}</p>\r\n                        <p>\r\n                            <b>From : </b> {{ email.from }}</p>\r\n                        <p>\r\n                            <b>To : </b>{{ email.to }}</p>\r\n                        <p>\r\n                            <b>Subject : </b>{{ email.subject }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">{{ email.content }}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/emaildetail/emaildetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmaildetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmaildetailComponent = /** @class */ (function () {
    function EmaildetailComponent(route, location, service) {
        this.route = route;
        this.location = location;
        this.service = service;
        this.dataLoaded = false;
    }
    EmaildetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.service.getEmailById(id)
            .subscribe(function (data) {
            _this.email = data;
            _this.dataLoaded = true;
        });
    };
    EmaildetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emaildetail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]],
            template: __webpack_require__("./src/app/emaildetail/emaildetail.component.html"),
            styles: [__webpack_require__("./src/app/emaildetail/emaildetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]])
    ], EmaildetailComponent);
    return EmaildetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=”container”>\r\n  <div>\r\n    <h1>School project</h1>\r\n    <br>\r\n    <div>\r\n      <div>Technologies:</div>\r\n      <div>\r\n        <li>Spring boot</li>\r\n        <li>JPA</li>\r\n        <li>MongoDb</li>\r\n        <li>Angular 5</li>\r\n      </div>\r\n      <br>\r\n      <div>Realised by Kevin, Lila, Zineb and Saman</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"nav-link\" routerLink=\"all\">All</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" placeholder=\"Search\" class=\"form-control mr-sm-2\" [(ngModel)]=\"search\" #ctrl=\"ngModel\" required>\r\n        <span class=\"input-group-btn\">\r\n          <button *ngIf=\"ctrl.valid\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" [routerLink]=\"['/table']\" [queryParams]=\"{ term: ctrl.value }\" queryParamsHandling=\"merge\">Search</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/paginer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginerService = /** @class */ (function () {
    function PaginerService() {
    }
    PaginerService.prototype.getPager = function (totalItems, totalPages, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        return __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
    };
    PaginerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PaginerService);
    return PaginerService;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reglist\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Date</th>\r\n        <th>From</th>\r\n        <th>To</th>\r\n        <th>Subject</th>\r\n        <th>Score</th>\r\n        <th>Occurrence Numbers</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let search of searchresults; let i = index\">\r\n        <th scope=\"row\">{{ i + 1 }}</th>\r\n        <td>{{ search.email.date }}</td>\r\n        <td>{{ search.email.from }}</td>\r\n        <td>{{ search.email.to }}</td>\r\n        <td>{{ search.email.subject }}</td>\r\n        <td>{{ search.score }}</td>\r\n        <td>{{ search.occurencesNumber }}</td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/emaildetail/{{search.email.messageId}}\">Afficher</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div>\r\n  <span>Total elements: {{totalElements}}</span>\r\n  <span>Total pages: {{totalPages}}</span>\r\n  <span>Size: {{size}}</span>\r\n</div>\r\n\r\n<!-- pager -->\r\n<nav>\r\n  <ul class=\"pagination justify-content-end\" *ngIf=\"pagesToShow && pagesToShow.length\">\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(1)\">First</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber)\">Previous</a>\r\n    </li>\r\n    <li class=\"page-item\" *ngFor=\"let page of pagesToShow\" [ngClass]=\"{active:pages.pageNumber + 1 === page}\">\r\n      <a class=\"page-link\" (click)=\"gopage(page)\">{{page}}</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber + 2)\">Next</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(totalPages)\">Last</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pageable_class__ = __webpack_require__("./src/app/app.pageable.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paginer_service__ = __webpack_require__("./src/app/paginer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableComponent = /** @class */ (function () {
    function TableComponent(service, route, servicePage) {
        this.service = service;
        this.route = route;
        this.servicePage = servicePage;
        this.searchresults = [];
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 0;
        this.search = '';
        this.possibleSize = [10, 20, 50, 100, 200];
        this.pages = new __WEBPACK_IMPORTED_MODULE_3__app_pageable_class__["a" /* Pageable */]();
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.search = params.term;
            _this.pages.init();
            _this.refresh();
        });
    };
    TableComponent.prototype.gopage = function (page) {
        if (page < 1 || page > this.totalPages) {
            return;
        }
        this.pages.pageNumber = page - 1;
        this.pages.offset = this.pages.pageNumber * this.pages.pageSize;
        this.refresh();
    };
    TableComponent.prototype.refresh = function () {
        var _this = this;
        this.service.getEmailsPage(this.pages, this.search)
            .subscribe(function (data) {
            _this.searchresults = data.content;
            _this.pages = data.pageable;
            _this.totalPages = data.totalPages;
            _this.totalElements = data.totalElements;
            _this.size = data.size;
            _this.pagesToShow = _this.servicePage.getPager(_this.totalElements, _this.totalPages, (_this.pages.pageNumber + 1), _this.pages.pageSize);
        });
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table',
            providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_4__paginer_service__["a" /* PaginerService */]],
            template: __webpack_require__("./src/app/table/table.component.html"),
            styles: [__webpack_require__("./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__paginer_service__["a" /* PaginerService */]])
    ], TableComponent);
    return TableComponent;
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
    production: false,
    apiUrl: "http://localhost:8080/api"
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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