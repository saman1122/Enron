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

module.exports = " \r\n  <div class=\"reglist\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Date</th>\r\n        <th>From</th>\r\n        <th>To</th>\r\n        <th>Subject</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let email of emails; let i = index\">\r\n        <th scope=\"row\">{{ i + 1 }}</th>\r\n        <td>{{ email.date }}</td>\r\n        <td>{{ email.from }}</td>\r\n        <td>{{ email.to }}</td>\r\n        <td>{{ email.subject }}</td>\r\n        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"afficher(email.messageId)\">Afficher</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n <!--\r\n<div class=\"pagination\" *ngIf=\"count > 0\">\r\n   <span>{{ getMin() }} of {{ getMax() }} of {{ count }}</span>\r\n    <span>{{ totalPages() }} pages</span>\r\n    <button (click)=\"onPrev()\" [disabled]=\"page === 1 || loading\">Previous</button>\r\n    <button *ngFor=\"let pageNum of getPages()\" (click)=\"onPage(pageNum)\"></button>\r\n    <button (click)=\"onNext()\" [disabled]=\"lastPage() || loading\">Next</button>\r\n  </div>\r\n-->\r\n  \r\n\r\n<nav aria-label=\"Page navigation example\">\r\n    <ul class=\"pagination justify-content-end\">\r\n      <li class=\"page-item disabled\">\r\n        <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n      </li>\r\n      <li class=\"page-item\"><a class=\"page-link\" (click)=\"gopage(1)\">1</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" (click)=\"gopage(2)\">2</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" (click)=\"gopage(3)\">3</a></li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\">Next</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pageable_class__ = __webpack_require__("./src/app/app.pageable.class.ts");
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




var AllComponent = /** @class */ (function () {
    function AllComponent(service, route) {
        this.service = service;
        this.route = route;
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 0;
    }
    AllComponent.prototype.ngOnInit = function () {
        this.pages = new __WEBPACK_IMPORTED_MODULE_2__app_pageable_class__["a" /* Pageable */](0, 0, 20);
        this.refresh();
    };
    AllComponent.prototype.gopage = function (page) {
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
        });
    };
    AllComponent.prototype.afficher = function (emailId) {
        this.route.navigate(['/emaildetail'], { queryParams: { id: emailId } });
    };
    AllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all',
            providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */]],
            template: __webpack_require__("./src/app/all/all.component.html"),
            styles: [__webpack_require__("./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
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
        path: 'emaildetail',
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
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
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
        this.offset = offset;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    }
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
    function EmaildetailComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.dataLoaded = false;
    }
    EmaildetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.service.getEmailById(params['id'])
                .subscribe(function (data) {
                _this.email = data;
                _this.dataLoaded = true;
            });
        });
    };
    EmaildetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emaildetail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]],
            template: __webpack_require__("./src/app/emaildetail/emaildetail.component.html"),
            styles: [__webpack_require__("./src/app/emaildetail/emaildetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]])
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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"nav-link\" routerLink=\"table\">Result</a>\r\n      </li>\r\n      <li>\r\n          <a class=\"nav-link\" routerLink=\"all\">All</a>\r\n      </li>  \r\n    </ul>\r\n    <span class=\"navbar-text\">\r\n        <h4>Easy Search</h4>\r\n      </span>\r\n  </div>\r\n</nav>"

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
    NavbarComponent.prototype.ngOnInit = function () {
    };
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

/***/ "./src/app/table/table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-md-9\"></div>\r\n  <div class=\"col-6 col-md-3\">\r\n    <input #searchBox class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)='searchClick(searchBox.value)'>Search</button>\r\n    <br>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"reglist\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Date</th>\r\n        <th>From</th>\r\n        <th>To</th>\r\n        <th>Subject</th>\r\n        <th>Score</th>\r\n        <th>Occurrence Numbers</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let search of searchresults; let i = index\">\r\n        <th scope=\"row\">{{ i + 1 }}</th>\r\n        <td>{{ search.email.date }}</td>\r\n        <td>{{ search.email.from }}</td>\r\n        <td>{{ search.email.to }}</td>\r\n        <td>{{ search.email.subject }}</td>\r\n        <td>{{ search.score }}</td>\r\n        <td>{{ search.occurencesNumber }}</td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"afficher(search.email.messageId)\">Afficher</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n<nav aria-label=\"Page navigation example\">\r\n  <ul class=\"pagination justify-content-end\">\r\n    <li class=\"page-item disabled\">\r\n      <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n    </li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" (click)=\"gopage(1)\">1</a>\r\n    </li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" (click)=\"gopage(2)\">2</a>\r\n    </li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" (click)=\"gopage(3)\">3</a>\r\n    </li>\r\n    <li class=\"page-item\">\r\n      <a class=\"page-link\" href=\"#\">Next</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pageable_class__ = __webpack_require__("./src/app/app.pageable.class.ts");
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
    function TableComponent(service, route) {
        this.service = service;
        this.route = route;
        this.searchresults = [];
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 0;
        this.search = '';
    }
    TableComponent.prototype.ngOnInit = function () {
        this.pages = new __WEBPACK_IMPORTED_MODULE_3__app_pageable_class__["a" /* Pageable */](0, 0, 20);
    };
    TableComponent.prototype.searchClick = function (value) {
        this.search = value;
        this.refresh();
    };
    TableComponent.prototype.afficher = function (emailId) {
        this.route.navigate(['/emaildetail'], { queryParams: { id: emailId } });
    };
    TableComponent.prototype.gopage = function (page) {
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
        });
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table',
            providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */]],
            template: __webpack_require__("./src/app/table/table.component.html"),
            styles: [__webpack_require__("./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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