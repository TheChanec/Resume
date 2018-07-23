(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container-fluid p-0\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_databases_databases_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/databases/databases.component */ "./src/app/components/databases/databases.component.ts");
/* harmony import */ var _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/languages/languages.component */ "./src/app/components/languages/languages.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Pages








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"],
                _components_databases_databases_component__WEBPACK_IMPORTED_MODULE_8__["DatabasesComponent"],
                _components_languages_languages_component__WEBPACK_IMPORTED_MODULE_9__["LanguagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index.pages */ "./src/app/components/index.pages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_index_pages__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'about',
        component: _components_index_pages__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'databases',
        component: _components_index_pages__WEBPACK_IMPORTED_MODULE_2__["DatabasesComponent"]
    },
    {
        path: 'experience',
        component: _components_index_pages__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]
    },
    {
        path: 'education',
        component: _components_index_pages__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]
    },
    {
        path: 'languages',
        component: _components_index_pages__WEBPACK_IMPORTED_MODULE_2__["LanguagesComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex d-column\" id=\"about\">\n    <div class=\"my-auto\">\n        <h1 class=\"mb-0\">Clarence\n            <span class=\"text-primary\">Taylor</span>\n        </h1>\n        <div class=\"subheading mb-5\">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·\n            <a href=\"mailto:name@email.com\">name@email.com</a>\n        </div>\n        <p class=\"mb-5\">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>\n        <ul class=\"list-inline list-social-icons mb-0\">\n            <li class=\"list-inline-item\">\n                <a href=\"#\">\n                    <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n          </span>\n                </a>\n            </li>\n            <li class=\"list-inline-item\">\n                <a href=\"#\">\n                    <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\n          </span>\n                </a>\n            </li>\n            <li class=\"list-inline-item\">\n                <a href=\"#\">\n                    <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i>\n          </span>\n                </a>\n            </li>\n            <li class=\"list-inline-item\">\n                <a href=\"#\">\n                    <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n          </span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/databases/databases.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/databases/databases.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"databases\">\n    <div class=\"my-auto\">\n        <h2 class=\"mb-5\">Skills</h2>\n\n        <div class=\"subheading mb-3\">Programming Languages &amp; Tools</div>\n        <ul class=\"list-inline list-icons\">\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-html5\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-css3\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-javascript\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-jquery\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-sass\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-less\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-bootstrap\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-wordpress\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-grunt\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-gulp\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-npm\"></i>\n            </li>\n        </ul>\n\n        <div class=\"subheading mb-3\">Workflow</div>\n        <ul class=\"fa-ul mb-0\">\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Mobile-First, Responsive Design</li>\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Cross Browser Testing &amp; Debugging</li>\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Cross Functional Teams</li>\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Agile Development &amp; Scrum</li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/databases/databases.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/databases/databases.component.ts ***!
  \*************************************************************/
/*! exports provided: DatabasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabasesComponent", function() { return DatabasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatabasesComponent = /** @class */ (function () {
    function DatabasesComponent() {
    }
    DatabasesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-databases',
            template: __webpack_require__(/*! ./databases.component.html */ "./src/app/components/databases/databases.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DatabasesComponent);
    return DatabasesComponent;
}());



/***/ }),

/***/ "./src/app/components/education/education.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"education\">\n    <div class=\"my-auto\">\n        <h2 class=\"mb-5\">Education</h2>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">University of Colorado Boulder</h3>\n                <div class=\"subheading mb-3\">Bachelor of Science</div>\n                <div>Computer Science - Web Development Track</div>\n                <p>GPA: 3.23</p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">August 2006 - May 2010</span>\n            </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">James Buchanan High School</h3>\n                <div class=\"subheading mb-3\">Technology Magnet Program</div>\n                <p>GPA: 3.56</p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">August 2002 - May 2006</span>\n            </div>\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/education/education.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"experience\">\n    <div class=\"my-auto\">\n        <h2 class=\"mb-5\">Experience</h2>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">Senior Web Developer</h3>\n                <div class=\"subheading mb-3\">Intelitec Solutions</div>\n                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated\n                    content in real-time will have multiple touchpoints for offshoring.</p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">March 2013 - Present</span>\n            </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">Web Developer</h3>\n                <div class=\"subheading mb-3\">Intelitec Solutions</div>\n                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop\n                    on focusing solely on the bottom line.</p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">December 2011 - March 2013</span>\n            </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row mb-5\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">Junior Web Designer</h3>\n                <div class=\"subheading mb-3\">Shout! Media Productions</div>\n                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up\n                    mentality to derive convergence on cross-platform integration.</p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">July 2010 - December 2011</span>\n            </div>\n        </div>\n\n        <div class=\"resume-item d-flex flex-column flex-md-row\">\n            <div class=\"resume-content mr-auto\">\n                <h3 class=\"mb-0\">Web Design Intern</h3>\n                <div class=\"subheading mb-3\">Shout! Media Productions</div>\n                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\n            </div>\n            <div class=\"resume-date text-md-right\">\n                <span class=\"text-primary\">September 2008 - June 2010</span>\n            </div>\n        </div>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/components/experience/experience.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/index.pages.ts":
/*!*******************************************!*\
  !*** ./src/app/components/index.pages.ts ***!
  \*******************************************/
/*! exports provided: EducationComponent, AboutComponent, DatabasesComponent, ExperienceComponent, LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return _education_education_component__WEBPACK_IMPORTED_MODULE_0__["EducationComponent"]; });

/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]; });

/* harmony import */ var _databases_databases_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./databases/databases.component */ "./src/app/components/databases/databases.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatabasesComponent", function() { return _databases_databases_component__WEBPACK_IMPORTED_MODULE_2__["DatabasesComponent"]; });

/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]; });

/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languages/languages.component */ "./src/app/components/languages/languages.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return _languages_languages_component__WEBPACK_IMPORTED_MODULE_4__["LanguagesComponent"]; });








/***/ }),

/***/ "./src/app/components/languages/languages.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/languages/languages.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"resume-section p-3 p-lg-5 d-flex flex-column\" id=\"languages\">\n    <div class=\"my-auto\">\n        <h2 class=\"mb-5\">Skills</h2>\n\n        <div class=\"subheading mb-3\">Programming Languages &amp; Tools</div>\n        <ul class=\"list-inline list-icons\">\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-html5\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-css3\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-javascript\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-jquery\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-sass\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-less\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-bootstrap\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-wordpress\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-grunt\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-gulp\"></i>\n            </li>\n            <li class=\"list-inline-item\">\n                <i class=\"devicons devicons-npm\"></i>\n            </li>\n        </ul>\n\n        <div class=\"subheading mb-3\">Workflow</div>\n        <ul class=\"fa-ul mb-0\">\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Mobile-First, Responsive Design</li>\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Cross Browser Testing &amp; Debugging</li>\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Cross Functional Teams</li>\n            <li>\n                <i class=\"fa-li fa fa-check\"></i> Agile Development &amp; Scrum</li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/languages/languages.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/languages/languages.component.ts ***!
  \*************************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent() {
    }
    LanguagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-languages',
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/components/languages/languages.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\" id=\"sideNav\">\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\">\n        <span class=\"d-block d-lg-none\">Start Bootstrap</span>\n        <span class=\"d-none d-lg-block\">\n      <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"../../../assets/img/profile.jpg\" alt=\"\">\n    </span>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link js-scroll-trigger\" routerLink=\"about\">About</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link js-scroll-trigger\" routerLink=\"education\">Education</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link js-scroll-trigger\" routerLink=\"languages\">Languages</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link js-scroll-trigger\" routerLink=\"databases\">Data Bases</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link js-scroll-trigger\" routerLink=\"experience\">Experience</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mario.chan\Documents\GitHub\Resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map