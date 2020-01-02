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

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"about\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body vertical-center\">\r\n        <h2 class=\"subtitle\">Sobre</h2>\r\n        <p>\r\n          Eu sou Larissa Mourullo, desenvolvedora e designer, estudante de Engenharia da Computação (com ênfase em Software)\r\n          pelo Instituto Infnet. Possuo uma experiência maior com front-end, mas possuo conhecimentos de back-end e mobile.\r\n          Em 2017 criei o projeto open source  <span class=\"font-weight-bold\">DEVTRANSLATE</span> (para mais informações\r\n          acesse a sessão  projetos pessoais).\r\n        </p>\r\n        <a class=\"nav-link hvr-rectangle-out\" href=\"https://drive.google.com/uc?id=1uYP05bRnFmMF5VU4FlDSSBESyyQ4GdTF&export=download\">\r\n          Download Currículo\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lm-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"vertical-center\">\r\n  <h1>\r\n    <img src=\"https://image.ibb.co/hsDz37/Logo.png\" alt=\"Logo\" class=\"logo\" />\r\n  </h1>\r\n  <ul class=\"nav justify-content-center\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#about\">Sobre</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#skills\">Habilidades</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#works\">Trabalhos</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#projects\">Projetos Pessoais</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link hvr-rectangle-out\" data-toggle=\"modal\" data-target=\"#contact\">Contatos</a>\r\n    </li>\r\n  </ul>\r\n</header>\r\n\r\n<lm-about></lm-about>\r\n<lm-skills></lm-skills>\r\n<lm-works></lm-works>\r\n<lm-projects></lm-projects>\r\n<lm-contact></lm-contact>\r\n\r\n<footer class=\"footer\">\r\n  <small>LarisMourullo © 2018 - Todos os Direitos Reservados</small>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/********************* Logo ********************/\n@media (max-width: 576px) {\n  .logo {\n    width: 330px; } }\n/******************** Footer *******************/\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin-bottom: 15px;\n  text-align: center; }\n"

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
        this.title = 'lm';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lm-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__works_works_component__ = __webpack_require__("./src/app/works/works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__works_works_component__["a" /* WorksComponent */],
                __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"contact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body vertical-center\">\r\n        <h2 class=\"subtitle\">\r\n          Contatos\r\n        </h2>\r\n        <nav>\r\n          <a href=\"https://www.facebook.com/LarissaMourullo\" class=\"nav-link-social hvr-rectangle-out1\">\r\n            <i class=\"fab fa-facebook-f\"></i>\r\n          </a>\r\n          <a href=\"https://www.linkedin.com/in/larissa-mourullo-040073b9\" class=\"nav-link-social hvr-rectangle-out1\">\r\n            <i class=\"fab fa-linkedin-in\"></i>\r\n          </a>\r\n          <a href=\"https://github.com/larismourullo\" class=\"nav-link-social hvr-rectangle-out1\">\r\n            <i class=\"fab fa-github-alt\"></i>\r\n          </a>\r\n          <a href=\"https://medium.com/@larismourullo\" class=\"nav-link-social hvr-rectangle-out1\">\r\n            <i class=\"fab fa-medium-m\"></i>\r\n          </a>\r\n          <a href=\"https://twitter.com/larismourullo\" class=\"nav-link-social hvr-rectangle-out1\">\r\n            <i class=\"fab fa-twitter\"></i>\r\n          </a>\r\n          <a href=\"https://t.me/LarisMourullo\" class=\"nav-link-social hvr-rectangle-out1\">\r\n            <i class=\"fab fa-telegram-plane\"></i>\r\n          </a>\r\n        </nav>\r\n        <p>\r\n          <span class=\"font-weight-bold\">@:</span> larismourullo@live.com\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**************** Redes Sociais ****************/\n.nav-link-social {\n  margin: 0px .5rem 5px .5rem; }\n.svg-inline--fa {\n  font-size: 3rem;\n  width: 48px;\n  padding: 10px; }\n/***************** Efeito Botão ****************/\n.hvr-rectangle-out1 {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  -webkit-box-shadow: 0 0 1px transparent;\n  box-shadow: 0 0 1px transparent;\n  position: relative;\n  background: #341648;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s; }\n.hvr-rectangle-out1:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #cb2847;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out; }\n.hvr-rectangle-out1:hover,\n.hvr-rectangle-out1:focus,\n.hvr-rectangle-out1:active {\n  color: white; }\n.hvr-rectangle-out1:hover:before,\n.hvr-rectangle-out1:focus:before,\n.hvr-rectangle-out1:active:before {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n/***************** Media Query *****************/\n@media (max-width: 576px) {\n  .nav-link-social {\n    margin: 0px .2rem 5px .2rem; }\n  .svg-inline--fa {\n    font-size: 2.5rem;\n    width: 40px;\n    padding: 10px; } }\n@media (min-width: 576px) and (max-width: 768px) {\n  .svg-inline--fa {\n    font-size: 2.75rem;\n    width: 44px;\n    padding: 10px; } }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lm-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"projects\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body vertical-center\">\r\n        <h2 class=\"subtitle\">Projetos</h2>\r\n        <h4 class=\"section-title\">DEVTRANSLATE</h4>\r\n        <p>\r\n          Criado em Março de 2017, o projeto tem como objetivo a organização, localização e tradução de documentos técnicos\r\n          referentes à área de TI traduzidos para outras línguas. Desta forma evitando excluir uma parte da comunidade de \r\n          adquirir conhecimento ou começar na área de tecnologia.\r\n        </p>\r\n        <a class=\"nav-link hvr-rectangle-out\" href=\"https://devtranslate.github.io/#!/\">Acesse o Site</a>\r\n        <a class=\"nav-link hvr-rectangle-out\" href=\"https://github.com/devtranslate\">Github</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lm-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"skills\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body vertical-center\">\r\n        <h2 class=\"subtitle\">Habilidades</h2>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-4\">\r\n            <h4 class=\"section-title\">Back-End</h4>\r\n            <p>C# (Entity, ADO.NET, ASP.NET) e Java (Spring MVC, JPA, JEE, JSF, Hibernate).</p>\r\n          </div>\r\n          <div class=\"col-12 col-sm-4\"><h4 class=\"section-title\">Front-End</h4>\r\n            <p>HTML5, CSS3, JavaScript (EcmaScript), TypeScript, Grunt, Bower, Bootstrap, Bulma, Materialize, UIKit, \r\n              Angular/JS, JQuery, Node.\r\n            </p>\r\n          </div>\r\n          <div class=\"col-12 col-sm-4\">\r\n            <h4 class=\"section-title\">Mobile</h4>\r\n            <p>\r\n              <span class=\"font-weight-bold\">HÍBRIDO:</span> Ionic<br>\r\n              <span class=\"font-weight-bold\">NATIVO:</span> Java (Android), Swift, Objective-C.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/***/ (function(module, exports) {

module.exports = "/******************** Bold *********************/\n.font-weight-bold {\n  color: #ffffff; }\n/***************** Media Query *****************/\n@media (max-width: 576px) {\n  .subtitle {\n    font-size: 2.5rem; } }\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lm-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/works/works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"works\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body vertical-center\">\r\n        <h2 class=\"subtitle\">Trabalhos</h2>\r\n        <div class=\"row\">\r\n          <div class=\"col-6 col-sm-4\">\r\n            <a href=\"https://www.facebook.com/gdgduquedecaxias/\">\r\n              <img class=\"img-fluid img-thumbnail\" src=\"https://image.ibb.co/i0V1J7/dfgdgdgdgfd.png\" alt=\"Logo do GDG Duque de Caxias\">\r\n            </a>\r\n            <p>\r\n              <span class=\"font-weight-bold\">(Site e Design da Marca)</span>\r\n              <br>GDG Duque de Caxias\r\n            </p>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <a href=\"https://www.facebook.com/grupycaxias/\">\r\n              <img class=\"img-fluid img-thumbnail\" src=\"https://image.ibb.co/fe7gJ7/dgfgdggdggf.png\" alt=\"Logo do Grupy Caxias\">\r\n            </a>\r\n            <p>\r\n              <span class=\"font-weight-bold\">(Site & Design da Marca)</span>\r\n              <br>Grupy Caxias</p>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <a href=\"https://devtranslate.github.io\">\r\n              <img class=\"img-fluid img-thumbnail\" src=\"https://image.ibb.co/ix6NrS/sdfdsfsfd.png\" alt=\"Logo do Devtranslate\">\r\n            </a>\r\n            <p>\r\n              <span class=\"font-weight-bold\">(Site & Design da Marca)</span>\r\n              <br>Devtranslate\r\n            </p>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <a href=\"https://www.meetup.com/pt-BR/frontendrj/members/\">\r\n              <img class=\"img-fluid img-thumbnail\" src=\"https://image.ibb.co/fMngJ7/hfghghfhf.png\" alt=\"Logo do FrontEndRJ\">\r\n            </a> \r\n            <p>\r\n              <span class=\"font-weight-bold\">(Design da Marca)</span>\r\n              <br>FrontEndRJ\r\n            </p>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <a href=\"https://www.facebook.com/ionicrio/\">\r\n              <img class=\"img-fluid img-thumbnail\" src=\"https://image.ibb.co/gkYoy7/sdffdsfdfsfsdf.png\" alt=\"Logo do Ionic Rio\">\r\n            </a>\r\n            <p>\r\n              <span class=\"font-weight-bold\">(Design da Marca)</span>\r\n              <br>Ionic Rio\r\n            </p>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <a href=\"https://larismourullo.github.io/todo-list/\">\r\n              <img class=\"img-fluid img-thumbnail\" src=\"https://image.ibb.co/ni3rkn/fhfhfhgh.png\" alt=\"Site da TodoList\">\r\n            </a>\r\n            <p>\r\n              <span class=\"font-weight-bold\">(Site & Design da Marca)</span>\r\n              <br>TodoList\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/works/works.component.scss":
/***/ (function(module, exports) {

module.exports = "/******************** Navbar *******************/\n.nav-item {\n  margin-top: 5px; }\n.img-thumbnail {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  border-radius: 0; }\np {\n  line-height: 1rem;\n  margin-top: 5px; }\n/***************** Media Query *****************/\n@media (max-width: 576px) {\n  p {\n    line-height: 0.8rem;\n    font-size: 0.7rem; }\n  .nav-item {\n    margin-top: 0px; }\n  .subtitle {\n    font-size: 2.5rem; } }\n"

/***/ }),

/***/ "./src/app/works/works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksComponent; });
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

var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lm-works',
            template: __webpack_require__("./src/app/works/works.component.html"),
            styles: [__webpack_require__("./src/app/works/works.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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