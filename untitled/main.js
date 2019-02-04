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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Commandy/clear-command.ts":
/*!*******************************************!*\
  !*** ./src/app/Commandy/clear-command.ts ***!
  \*******************************************/
/*! exports provided: ClearCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCommand", function() { return ClearCommand; });
var ClearCommand = /** @class */ (function () {
    function ClearCommand(c, n) {
        this.canvas = c;
        this.staryPocet = n;
    }
    ClearCommand.prototype.execute = function () {
        this.objekty = this.canvas.getObjects();
        this.canvas.clear();
        return 0;
    };
    ClearCommand.prototype.unexecute = function () {
        while (this.objekty.length > 0) {
            this.canvas.add(this.objekty.pop());
        }
        return this.staryPocet;
    };
    return ClearCommand;
}());



/***/ }),

/***/ "./src/app/Commandy/vrchol-command.ts":
/*!********************************************!*\
  !*** ./src/app/Commandy/vrchol-command.ts ***!
  \********************************************/
/*! exports provided: VrcholCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrcholCommand", function() { return VrcholCommand; });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);

var VrcholCommand = /** @class */ (function () {
    function VrcholCommand(c, n) {
        this.canvas = c;
        this.kruh = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Circle({ radius: 30,
            fill: '#f55',
            top: Math.floor(Math.random() * 740),
            left: Math.floor(Math.random() * 1540)
        });
        this.staryPocet = n;
    }
    VrcholCommand.prototype.execute = function () {
        this.canvas.add(this.kruh);
        return this.staryPocet + 1;
    };
    VrcholCommand.prototype.unexecute = function () {
        this.canvas.remove(this.kruh);
        return this.staryPocet;
    };
    return VrcholCommand;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#flex{\n  display: flex;\n}\ncanvas{\n  border:2px solid black;\n}\nh1{\n  background-color:dodgerblue;\n  padding:20px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 35px;\n}\nbutton {\n  background-color: dodgerblue;\n  margin-right: 15px;\n  padding: 10px;\n  font-weight: bold;\n  width:150px;\n  font-size: 20px;\n  font-family: 'Roboto', sans-serif;\n}\nbutton:hover{\n  color:white;\n  padding:15px;\n  width:160px;\n  background-color: blue;\n\n}\nul{\n  list-style-type: none;\n  padding:0;\n  width:180px;\n}\nh1:hover{\n  color:white;\n}\nbutton:disabled{\n  background-color:lightblue;\n  color:white;\n}\nbutton:disabled:hover{\n  padding: 10px;\n  width: 150px;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7O0FBRXhCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5jYW52YXN7XG4gIGJvcmRlcjoycHggc29saWQgYmxhY2s7XG59XG5oMXtcbiAgYmFja2dyb3VuZC1jb2xvcjpkb2RnZXJibHVlO1xuICBwYWRkaW5nOjIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6MTUwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuYnV0dG9uOmhvdmVye1xuICBjb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzoxNXB4O1xuICB3aWR0aDoxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcblxufVxudWx7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzowO1xuICB3aWR0aDoxODBweDtcbn1cblxuaDE6aG92ZXJ7XG4gIGNvbG9yOndoaXRlO1xufVxuYnV0dG9uOmRpc2FibGVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcbiAgY29sb3I6d2hpdGU7XG59XG5idXR0b246ZGlzYWJsZWQ6aG92ZXJ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxNTBweDtcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Grafovy editor</h1>\n\n<div id=\"flex\">\n  <ul>\n    <li><button (click)=\"addKruh()\">VRCHOL</button></li>\n    <li><button>HRANA</button></li>\n    <li><button (click)=\"start()\" [disabled]=disableStart>START</button></li>\n    <li><button (click)=\"stop()\" [disabled]=disableStop>STOP</button></li>\n    <li><button (click)=\"clear()\">CLEAR</button></li>\n    <li><app-pocet pocet={{pocetVrcholov}}></app-pocet></li>\n    <li><button (click)=\"undoMetoda()\" [disabled]=\"disableUndo\">UNDO</button></li>\n    <li><button (click)=\"redoMetoda()\" [disabled]=\"disableRedo\">REDO</button></li>\n  </ul>\n  <canvas width=\"1600\" height=\"800\" id=\"myCanvas\"></canvas>\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Commandy_vrchol_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Commandy/vrchol-command */ "./src/app/Commandy/vrchol-command.ts");
/* harmony import */ var _Commandy_clear_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Commandy/clear-command */ "./src/app/Commandy/clear-command.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.commands = [];
        /*clear2():void{
          this.canvas.clear();
          this.pocetVrcholov=0;
          new fabric.Circle({radius: 30,
            fill: '#f55',
            top: Math.floor(Math.random()*770),
            left: Math.floor(Math.random()*1570)});
        }
      */
        /* addKruh2(): void{
           this.disableUndo = false;
           this.disableRedo = true;
           while(this.redo.length!=0){
             this.redo.pop();
           }
           const kruh = new fabric.Circle({radius: 30,
             fill: '#f55',
             top: Math.floor(Math.random()*770),
             left: Math.floor(Math.random()*1570)});
           this.canvas.add(kruh);
           this.undo.push(kruh);
           this.current.push(kruh);
           this.pocetVrcholov++;
         }
       
       
       
         undoMetoda2(): void{
           const odstranujem = this.undo.pop();
           this.redo.push(odstranujem);
           this.current.pop();
           this.canvas.remove(odstranujem);
           this.pocetVrcholov--;
           if(this.undo.length==0){
             this.disableUndo=true;
           }
           this.disableRedo=false;
       
         }
       
         redoMetoda2():void{
           const pridavam = this.redo.pop();
           this.undo.push(pridavam);
           this.current.push(pridavam);
           this.canvas.add(pridavam);
           this.pocetVrcholov++;
           if(this.redo.length==0){
             this.disableRedo=true;
           }
           this.disableUndo=false;
         }
       
       */
    }
    ;
    // undo: Array<fabric.Circle> = [];
    // redo: Array<fabric.Circle> = [];
    // current: Array<fabric.Circle> = [];
    AppComponent.prototype.ngOnInit = function () {
        this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Canvas('myCanvas');
        this.disableStart = false;
        this.disableStop = true;
        this.disableUndo = true;
        this.disableRedo = true;
        this.pocetVrcholov = 0;
        this.momentalnyStav = 0;
    };
    AppComponent.prototype.start = function () {
        this.canvas.on('mouse:down', function (options) {
            var modryKruh = new fabric__WEBPACK_IMPORTED_MODULE_2__["fabric"].Circle(({ radius: 30,
                fill: '#1E90FF',
                top: options.e.pageY - 30 - 125,
                left: options.e.pageX - 30 - 190 }));
            this.add(modryKruh);
        });
        this.disableStart = true;
        this.disableStop = false;
    };
    AppComponent.prototype.stop = function () {
        this.canvas.off('mouse:down');
        this.disableStart = false;
        this.disableStop = true;
    };
    AppComponent.prototype.addKruh = function () {
        this.disableUndo = false;
        this.disableRedo = true;
        var command = new _Commandy_vrchol_command__WEBPACK_IMPORTED_MODULE_3__["VrcholCommand"](this.canvas, this.pocetVrcholov);
        while (this.commands.length > this.momentalnyStav) {
            this.commands.pop();
        }
        this.commands.push(command);
        this.pocetVrcholov = command.execute();
        this.momentalnyStav = this.commands.length;
    };
    AppComponent.prototype.undoMetoda = function () {
        this.pocetVrcholov = this.commands[this.momentalnyStav - 1].unexecute();
        this.momentalnyStav--;
        this.disableRedo = false;
        if (this.momentalnyStav == 0) {
            this.disableUndo = true;
        }
    };
    AppComponent.prototype.redoMetoda = function () {
        this.disableUndo = false;
        this.pocetVrcholov = this.commands[this.momentalnyStav].execute();
        this.momentalnyStav++;
        if (this.momentalnyStav == this.commands.length) {
            this.disableRedo = true;
        }
    };
    AppComponent.prototype.clear = function () {
        var clearCommand = new _Commandy_clear_command__WEBPACK_IMPORTED_MODULE_4__["ClearCommand"](this.canvas, this.pocetVrcholov);
        this.disableRedo = true;
        this.disableUndo = false;
        while (this.commands.length > this.momentalnyStav) {
            this.commands.pop();
        }
        this.commands.push(clearCommand);
        this.pocetVrcholov = clearCommand.execute();
        this.momentalnyStav++;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pocet_pocet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pocet/pocet.component */ "./src/app/pocet/pocet.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pocet_pocet_component__WEBPACK_IMPORTED_MODULE_4__["PocetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pocet/pocet.component.css":
/*!*******************************************!*\
  !*** ./src/app/pocet/pocet.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n  padding:15px;\n  width:100px;\n  border: 3px solid dodgerblue;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9jZXQvcG9jZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BvY2V0L3BvY2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgcGFkZGluZzoxNXB4O1xuICB3aWR0aDoxMDBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgZG9kZ2VyYmx1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pocet/pocet.component.html":
/*!********************************************!*\
  !*** ./src/app/pocet/pocet.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Cervene vrcholy: {{pocet}}</h2>\n"

/***/ }),

/***/ "./src/app/pocet/pocet.component.ts":
/*!******************************************!*\
  !*** ./src/app/pocet/pocet.component.ts ***!
  \******************************************/
/*! exports provided: PocetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocetComponent", function() { return PocetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PocetComponent = /** @class */ (function () {
    function PocetComponent() {
    }
    PocetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PocetComponent.prototype, "pocet", void 0);
    PocetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pocet',
            template: __webpack_require__(/*! ./pocet.component.html */ "./src/app/pocet/pocet.component.html"),
            styles: [__webpack_require__(/*! ./pocet.component.css */ "./src/app/pocet/pocet.component.css")]
        })
    ], PocetComponent);
    return PocetComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rado/WebstormProjects/untitled/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map