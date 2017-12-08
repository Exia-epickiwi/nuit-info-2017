webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Socket-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ws_url);
        this.socket.emit("RequestConnection");
    };
    WebsocketService.prototype.getIo = function () {
        return this.socket;
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n\n  background-color: rgba(236, 44, 0, 0.14);\n}\n\nheader {\n  background-color: rgb(218, 43, 0);\n  padding: 10px 0 10px 0;\n  text-align: center;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.3);\n  color: rgba(255, 255, 255, 0.8);\n}\n\nheader h1 {\n  font-weight: lighter;\n}\n\n.main-panel {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.main-section {\n  width: 100%;\n  padding: 0px 10px 0 10px;\n  overflow-y: auto;\n}\n\n.options {\n  overflow-x: auto;\n  white-space: nowrap;\n  margin: 0 -10px 0 -10px;\n  padding-left: 10px;\n  text-align: center;\n}\n\n.big-button {\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  width: 70px;\n  height: 70px;\n  border-radius: 70px;\n  border: solid 5px #da2b00;\n  background-color: #ea5d48;\n  box-shadow: 0 5px 10px rgba(0,0,0,0.6);\n  text-align: center;\n  line-height: 60px;\n  font-size: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n\n  <div class=\"main-panel\">\n    <header><h1>{{appTitle}}</h1></header>\n\n    <section class=\"main-section\" (resize)=\"onMessagesResize()\">\n      <div class=\"message-wrapper\">\n        <app-message *ngFor=\"let message of messages\" [message]=\"message\" [other]=\"message.other\"></app-message>\n      </div>\n      <div class=\"options\">\n        <app-option\n          *ngFor=\"let option of options\"\n          [option]=\"option\" (click)=\"onOptionClick(option)\"></app-option>\n      </div>\n    </section>\n  </div>\n  <footer>\n    <div class=\"big-button\">A</div>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Socket_service__ = __webpack_require__("../../../../../src/app/Socket-service.ts");
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
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.appTitle = "Nuit de l'info 2017";
        this.messages = [];
        this.options = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.connect();
        this.socketService.getIo().on("ReceivedMessage", function (msg) {
            _this.messages.push(msg);
            _this.options = msg.options;
        });
    };
    AppComponent.prototype.onOptionClick = function (option) {
        this.options = [];
        this.socketService.getIo().emit("ReceivedOption", option);
        this.messages.push({ type: "text", other: true, text: option.userText });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Socket_service__["a" /* WebsocketService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__option_option_component__ = __webpack_require__("../../../../../src/app/option/option.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Socket_service__ = __webpack_require__("../../../../../src/app/Socket-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__option_option_component__["a" /* OptionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__Socket_service__["a" /* WebsocketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\n  margin: 10px 5px;\n  background-color: #da2b00;\n  width: 80%;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.message.other {\n  background-color: rgba(0, 0, 0, 0.15);\n  margin-left: auto;\n}\n\n.text-content {\n  padding: 5px;\n  color: #f6d0c7;\n}\n\n.other .text-content {\n  color: #212426;\n  text-align: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message\" [ngClass]=\"{'other':other}\">\n\n  <p class=\"text-content\"\n     *ngIf=\"message.type == 'text'\">\n    {{message.text}}\n  </p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = (function () {
    function MessageComponent() {
        this.other = false;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "other", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/option/option.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".option {\n  width: 100px;\n  height: 120px;\n  border-radius: 5px;\n  background-color: rgb(218, 43, 0);\n  margin: 10px 5px 5px 5px;\n  display: inline-block;\n  padding: 5px;\n}\n\n.content-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n  height: 100%;\n}\n\n.icon-wrapper {\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.icon img {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  white-space: normal;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/option/option.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"option\">\n  <div class=\"content-wrapper\">\n    <div class=\"icon-wrapper\" *ngIf=\"option.iconUrl && option.iconUrl != ''\">\n      <div class=\"icon\">\n        <img src=\"{{option.iconUrl}}\" alt=\"{{option.text}}\">\n      </div>\n    </div>\n    <div class=\"title\">\n      {{option.text}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/option/option.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionComponent = (function () {
    function OptionComponent() {
    }
    OptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], OptionComponent.prototype, "option", void 0);
    OptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-option',
            template: __webpack_require__("../../../../../src/app/option/option.component.html"),
            styles: [__webpack_require__("../../../../../src/app/option/option.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OptionComponent);
    return OptionComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ws_url: 'http://localhost:80'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map