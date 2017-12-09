webpackJsonp([6],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoTarefa; });
var EstadoTarefa;
(function (EstadoTarefa) {
    EstadoTarefa[EstadoTarefa["NOVA"] = 0] = "NOVA";
    EstadoTarefa[EstadoTarefa["EXECUTANDO"] = 1] = "EXECUTANDO";
    EstadoTarefa[EstadoTarefa["FINALIZADA"] = 2] = "FINALIZADA";
})(EstadoTarefa || (EstadoTarefa = {}));
//# sourceMappingURL=EstadoTarefa.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TarefaProvider = (function () {
    function TarefaProvider(http, loginProvider) {
        this.http = http;
        this.loginProvider = loginProvider;
        this.initialize();
    }
    TarefaProvider.prototype.initialize = function () {
        this.reference = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref(this.loginProvider.currentUser.uid + '/tarefas/');
    };
    TarefaProvider.prototype.save = function (tarefa) {
        var refKey;
        // update
        if (tarefa.keyReference != undefined) {
            refKey = tarefa.keyReference;
        }
        else {
            // insert
            refKey = this.reference.push().key;
            tarefa.keyReference = refKey;
        }
        this.reference.child(refKey).update(tarefa);
    };
    TarefaProvider.prototype.deletar = function (tarefa) {
        return this.reference.child(tarefa.keyReference).remove();
    };
    return TarefaProvider;
}());
TarefaProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginProvider */]])
], TarefaProvider);

//# sourceMappingURL=tarefa.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraPage = (function () {
    function CameraPage(navCtrl, camera, alertCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
    }
    CameraPage.prototype.ngOnInit = function () {
        this.photos = [];
    };
    CameraPage.prototype.takePhotos = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photos.push(_this.base64Image);
            _this.photos.reverse();
        }, function (err) {
            // Handle error
        });
    };
    CameraPage.prototype.deletePhoto = function (index) {
        var _this = this;
        //   this.photos.splice(index,1);
        //   }
        // }
        // 
        var confirm = this.alertCtrl.create({
            title: 'Você  quer deletar essa imagem?',
            message: '',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.photos.splice(index, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\camera\camera.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Câmera\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="takePhotos()">\n    <ion-icon name="camera"></ion-icon> &nbsp;&nbsp; Tirar Foto</button>\n   \n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 *ngFor="let photo of photos; let id = index">\n          <ion-card class="block">\n            <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n              <img [src]="photo" *ngIf="photo"/>\n          </ion-card>\n        </ion-col>        \n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\camera\camera.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_feed__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad IntroPage");
    };
    IntroPage.prototype.goToTabsPages = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__feed_feed__["a" /* FeedPage */]);
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: "page-intro",template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\intro\intro.html"*/'<!-- <!--\n\n  Generated template for the IntroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Feed</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-slides pager>\n\n\n\n  <ion-slide class="slide-image">\n\n      <img src="assets/images/slide1.png" alt="camera">\n\n        <h2>Iphone</h2>\n\n       <p> Tudo funcionando perfeitamente, aula fluindo... <!-- <span><a href="https://www.facebook.com/">Clique Aqui</a></span> --></p>\n\n  </ion-slide>\n\n\n\n  <ion-slide class="slide-image">\n\n      <img src="assets/images/slide2.png" alt="camera">\n\n        <h2>Celular</h2>\n\n  </ion-slide>\n\n\n\n  <ion-slide class="slide-image">\n\n      <img src="assets/images/slide3.png" alt="camera">\n\n        <h2>Balão</h2>\n\n       <a (click)="goToTabsPages()"> Continuar</a>\n\n  </ion-slide>\n\n\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\intro\intro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_credencial__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrarPage = (function () {
    function RegistrarPage(navCtrl, LoginProvider) {
        this.navCtrl = navCtrl;
        this.LoginProvider = LoginProvider;
        this.credencial = new __WEBPACK_IMPORTED_MODULE_1__model_credencial__["a" /* Credencial */]();
    }
    RegistrarPage.prototype.doRegister = function () {
        this.LoginProvider.registrarUsuario(this.credencial);
    };
    return RegistrarPage;
}());
RegistrarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-registrar',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\registrar\registrar.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n    <ion-title>Registar-se</ion-title>\n\n\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Registrar-se\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  Email\n\n                </ion-label>\n\n                <ion-input name="email" required [(ngModel)]="credencial.email"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-label floating>\n\n                  Senha\n\n                </ion-label>\n\n                <ion-input name="senha" #senha required type="password" [(ngModel)]="credencial.senha">\n\n                </ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button clear full (click)="doRegister()">Registrar</button>\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\registrar\registrar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_login_login__["a" /* LoginProvider */]])
], RegistrarPage);

//# sourceMappingURL=registrar.js.map

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camera/camera.module": [
		440,
		5
	],
	"../pages/feed/feed.module": [
		441,
		4
	],
	"../pages/intro/intro.module": [
		442,
		3
	],
	"../pages/registrar/registrar.module": [
		443,
		2
	],
	"../pages/tarefas-add/tarefas-add.module": [
		444,
		1
	],
	"../pages/tarefas-list/tarefas-list.module": [
		445,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credencial; });
var Credencial = (function () {
    function Credencial() {
    }
    return Credencial;
}());

//# sourceMappingURL=credencial.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LovProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_tarefas__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_EstadoTarefa__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LovProvider = (function () {
    function LovProvider() {
    }
    LovProvider.prototype.getTarefaStates = function () {
        return [__WEBPACK_IMPORTED_MODULE_3__model_EstadoTarefa__["a" /* EstadoTarefa */].NOVA, __WEBPACK_IMPORTED_MODULE_3__model_EstadoTarefa__["a" /* EstadoTarefa */].EXECUTANDO, __WEBPACK_IMPORTED_MODULE_3__model_EstadoTarefa__["a" /* EstadoTarefa */].FINALIZADA];
    };
    LovProvider.prototype.getTarefas = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__model_tarefas__["a" /* Tarefa */]();
    };
    return LovProvider;
}());
LovProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])()
], LovProvider);

//# sourceMappingURL=lov.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_camera__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tarefas_add_tarefas_add__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tarefas_list_tarefas_list__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__intro_intro__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__intro_intro__["a" /* IntroPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__feed_feed__["a" /* FeedPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_2__tarefas_list_tarefas_list__["a" /* TarefasListPage */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_1__tarefas_add_tarefas_add__["a" /* TarefasAddPage */];
        this.tab9Root = __WEBPACK_IMPORTED_MODULE_0__camera_camera__["a" /* CameraPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n\n\n  <ion-tab [root]="tab1Root" tabTitle="Intro" tabIcon="ios-aperture"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Feed" tabIcon="ios-images"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Login" tabIcon="ios-images"></ion-tab>\n\n     <ion-tab [root]="tab5Root" tabTitle="Home" tabIcon="ios-images"></ion-tab>\n\n      <ion-tab [root]="tab7Root" tabTitle="TarefaListPage" tabIcon="ios-images"></ion-tab>\n\n    <ion-tab [root]="tab8Root" tabTitle="TarefasAddPage" tabIcon="ios-images"></ion-tab>\n\n    <ion-tab [root]="tab9Root" tabTitle="Camera" tabIcon="ios-images"></ion-tab>\n\n\n\n    \n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Feed</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides pager>\n\n\n\n      <ion-slide style="background-color: green">\n\n        <h2>Slide 1</h2>\n\n      </ion-slide>\n\n\n\n      <ion-slide style="background-color: blue">\n\n        <h2>Slide 2</h2>\n\n      </ion-slide>\n\n\n\n      <ion-slide style="background-color: red">\n\n        <h2>Slide 3</h2>\n\n      </ion-slide>\n\n\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(308);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_camera_camera__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_tarefas_list_tarefas_list__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tarefas_add_tarefas_add__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tarefa_list_item_tarefa_list_item__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registrar_registrar__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_tarefa_tarefa__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_lov_lov__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var firebaseConfig = {
    apiKey: "AIzaSyAvNmUeN22C-hUqMhByZABsSnnxvtrP7Mo",
    authDomain: "teste2-1ac20.firebaseapp.com",
    databaseURL: "https://teste2-1ac20.firebaseio.com",
    projectId: "teste2-1ac20",
    storageBucket: "teste2-1ac20.appspot.com",
    messagingSenderId: "93788253873"
};
var AppModule = (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_18_firebase___default.a.initializeApp(firebaseConfig);
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_registrar_registrar__["a" /* RegistrarPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_tarefa_list_item_tarefa_list_item__["a" /* TarefaListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pages_tarefas_add_tarefas_add__["a" /* TarefasAddPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_tarefas_list_tarefas_list__["a" /* TarefasListPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_camera_camera__["a" /* CameraPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registrar/registrar.module#RegistrarPageModule', name: 'RegistrarPage', segment: 'registrar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tarefas-add/tarefas-add.module#TarefasAddPageModule', name: 'TarefasAddPage', segment: 'tarefas-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tarefas-list/tarefas-list.module#TarefasListPageModule', name: 'TarefasListPage', segment: 'tarefas-list', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_registrar_registrar__["a" /* RegistrarPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_tarefa_list_item_tarefa_list_item__["a" /* TarefaListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pages_tarefas_add_tarefas_add__["a" /* TarefasAddPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_tarefas_list_tarefas_list__["a" /* TarefasListPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_camera_camera__["a" /* CameraPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_tarefa_tarefa__["a" /* TarefaProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_lov_lov__["a" /* LovProvider */]
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_tarefas__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TarefaListItemComponent = (function () {
    function TarefaListItemComponent() {
    }
    return TarefaListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_tarefas__["a" /* Tarefa */])
], TarefaListItemComponent.prototype, "tarefa", void 0);
TarefaListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tarefa-list-item',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\components\tarefa-list-item\tarefa-list-item.html"*/'{{tarefa.descricao}}\n\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\components\tarefa-list-item\tarefa-list-item.html"*/
    })
], TarefaListItemComponent);

//# sourceMappingURL=tarefa-list-item.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginProvider = (function () {
    function LoginProvider(http, NgZone) {
        var _this = this;
        this.http = http;
        this.NgZone = NgZone;
        this.loginSucessoEventEmitter = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
        this.loginFalhaEventEmitter = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
        this.loginoutEventEmitter = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (usuario) {
            _this.callbackStateChange(usuario);
        });
    }
    LoginProvider.prototype.callbackStateChange = function (usuario) {
        var _this = this;
        this.NgZone.run(function () {
            if (usuario == null) {
                _this.currentUser = null;
                _this.autenticado = false;
            }
            else {
                _this.currentUser = usuario;
                _this.autenticado = true;
            }
        });
    };
    LoginProvider.prototype.loginComFacebook = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.FacebookAuthProvider();
        return __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithPopup(provider)
            .then(function (resultado) { return _this.callbackSucessoLogin(resultado); })
            .catch(function (error) { return _this.callbackFalhaLogin(error); });
    };
    LoginProvider.prototype.loginComCredencial = function (credencial) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
            .then(function (resultado) { return _this.callbackSucessoLogin(resultado); })
            .catch(function (error) { return _this.callbackFalhaLogin(error); });
    };
    LoginProvider.prototype.loginComGoogle = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signInWithPopup(provider)
            .then(function (resultado) { return _this.callbackSucessoLogin(resultado); })
            .catch(function (error) { return _this.callbackFalhaLogin(error); });
    };
    LoginProvider.prototype.registrarUsuario = function (credencial) {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
            .then(function (result) { return console.log(result); })
            .catch(function (error) { return console.log(error); });
    };
    LoginProvider.prototype.sair = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut()
            .then(function () { return _this.loginoutEventEmitter.emit(true); })
            .catch(function (error) { return _this.callbackFalhaLogin(error); });
    };
    LoginProvider.prototype.callbackSucessoLogin = function (response) {
        this.loginSucessoEventEmitter.emit(response.user);
    };
    LoginProvider.prototype.callbackFalhaLogin = function (error) {
        this.loginFalhaEventEmitter.emit({ code: error.code, message: error.message, email: error.email, credencial: error.credencial });
    };
    return LoginProvider;
}());
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* NgZone */]])
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarefa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EstadoTarefa__ = __webpack_require__(125);

var Tarefa = (function () {
    function Tarefa(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.state = __WEBPACK_IMPORTED_MODULE_0__EstadoTarefa__["a" /* EstadoTarefa */].NOVA;
    }
    return Tarefa;
}());

//# sourceMappingURL=tarefas.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarefas_list_tarefas_list__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_credencial__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrar_registrar__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, LoginProvider) {
        this.navCtrl = navCtrl;
        this.LoginProvider = LoginProvider;
        this.credencial = new __WEBPACK_IMPORTED_MODULE_2__model_credencial__["a" /* Credencial */]();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.credencial = new __WEBPACK_IMPORTED_MODULE_2__model_credencial__["a" /* Credencial */]();
        this.LoginProvider.loginSucessoEventEmitter.subscribe(function (user) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tarefas_list_tarefas_list__["a" /* TarefasListPage */]); });
        this.LoginProvider.loginFalhaEventEmitter.subscribe(function (error) {
            return console.log(error);
        });
    };
    LoginPage.prototype.loginComFacebook = function () {
        this.LoginProvider.loginComFacebook();
    };
    LoginPage.prototype.loginComCredencial = function () {
        this.LoginProvider.loginComCredencial(this.credencial);
    };
    LoginPage.prototype.loginComGoogle = function () {
        this.LoginProvider.loginComGoogle();
    };
    LoginPage.prototype.doRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registrar_registrar__["a" /* RegistrarPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: "page-login",template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\login\login.html"*/' <ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label floating>\n\n                Email\n\n              </ion-label>\n\n              <ion-input name="email" [(ngModel)]="credencial.email"></ion-input>\n\n\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label floating>\n\n                Senha\n\n              </ion-label>\n\n              <ion-input type="password" name="senha" [(ngModel)]="credencial.senha">\n\n              </ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button full color="primary" (click)="loginComCredencial()" >\n\n                  Logar\n\n                </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col width-50>\n\n            <button ion-button full class="btnLogin" (click)=" loginComFacebook()">\n\n                  Login Facebook\n\n                </button>\n\n          </ion-col>\n\n          <ion-col width-50>\n\n            <button ion-button full class="btnLogin" (click)="loginComGoogle()">\n\n                  Login Google\n\n                </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <a (click)="doRegister()"> Registrar-se</a>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_login_login__["a" /* LoginProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedPage = (function () {
    function FeedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.objeto_feed = {
            titulo: "Juliana Maçaneiro",
            data: "09/10/2017",
            descricao: "Aula de ionic 3 da Udemy, muito bom. Recomendo",
            qtd_likes: 12,
            qtd_comments: 4,
            time_coment: "11h ago"
        };
        this.nome_usuario = "Juliana Maçaneiro";
    }
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\feed\feed.html"*/'<!--\n\n  Generated template for the FeedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Aqui</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="assets/images/yoda.png">\n\n    </ion-avatar>\n\n    <h2 class="feed_title">{{nome_usuario}}</h2>\n\n    <p >{{ objeto_feed.titulo }}</p>\n\n    <p >{{ objeto_feed.data }}</p>\n\n    <p >{{objeto_feed.descricao }}</p>\n\n\n\n  </ion-item>\n\n\n\n  <img src="assets/images/yoda2.png">\n\n\n\n  <ion-card-content>\n\n    <p>Curso Ionic 3, aprendendo a colocar imagens e fazer pastas...</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-left clear small>\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n        <div>12 Likes</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button icon-left clear small>\n\n        <ion-icon name="text"></ion-icon>\n\n        <div>4 Comments</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col center text-center>\n\n      <ion-note>\n\n        11h ago\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\feed\feed.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefasAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lov_lov__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tarefa_tarefa__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_tarefas__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_EstadoTarefa__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TarefasAddPage = (function () {
    function TarefasAddPage(navCtrl, navParams, tarefasProvider, viewCtrl, fb, lovProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarefasProvider = tarefasProvider;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.lovProvider = lovProvider;
        this.toastCtrl = toastCtrl;
        this.initialize();
    }
    TarefasAddPage.prototype.initialize = function () {
        this.tarefa = this.navParams.get('tarefa');
        if (!this.tarefa) {
            this.tarefa = new __WEBPACK_IMPORTED_MODULE_6__model_tarefas__["a" /* Tarefa */]();
        }
        this.tarefaForm = this.fb.group({
            'titulo': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)])],
            'descricao': [''],
            'estadoTarefa': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    TarefasAddPage.prototype.getEstadoValue = function (estadoTarefa) {
        return __WEBPACK_IMPORTED_MODULE_7__model_EstadoTarefa__["a" /* EstadoTarefa */][estadoTarefa];
    };
    TarefasAddPage.prototype.salvarTarefa = function () {
        this.tarefasProvider.save(this.tarefa);
        this.toastCtrl.create({
            message: 'Tarefa ' + this.tarefa.titulo + ' adicionada com sucesso!',
            duration: 3000
        }).present();
        this.viewCtrl.dismiss();
    };
    TarefasAddPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    return TarefasAddPage;
}());
TarefasAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tarefas-add',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\tarefas-add\tarefas-add.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n\n    <ion-title>{{tarefa.titulo != undefined ? tarefa.titulo : \'Minha tarefa\'}}</ion-title>\n\n    <ion-buttons end>\n\n     <button ion-button icon-right (click)="logout()">Sair<ion-icon name="ios-log-out"></ion-icon></button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-content padding>\n\n  <form [formGroup]="tarefaForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Titulo</ion-label>\n\n            <ion-input formControlName="titulo" name="titulo" [(ngModel)]="tarefa.titulo"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Descrição</ion-label>\n\n            <ion-input formControlName="descricao" name="descricao" [(ngModel)]="tarefa.descricao"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Status</ion-label>\n\n            <ion-select formControlName="estadoTarefa" name="state" [(ngModel)]="tarefa.state">\n\n              <ion-option *ngFor="let state of lovProvider.getTarefaStates()" [value]="state">\n\n                {{getEstadoValue(state)}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <!--><ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating>Teste</ion-label>\n\n            <ion-select [(ngModel)]="tarefa.descricao">\n\n              <ion-option  [value]="tarefa">{{tarefa.descricao}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>-->\n\n      \n\n      <ion-row>\n\n        <ion-col>\n\n          <button id=\'botao\' ion-button full clear (click)="salvarTarefa()" [disabled]="tarefaForm.invalid">\n\n            Salvar tarefa\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n</ion-content>'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\tarefas-add\tarefas-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_tarefa_tarefa__["a" /* TarefaProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_lov_lov__["a" /* LovProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
], TarefasAddPage);

//# sourceMappingURL=tarefas-add.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefasListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_tarefas__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tarefa_tarefa__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tarefas_add_tarefas_add__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TarefasListPage = (function () {
    function TarefasListPage(navCtrl, navParams, tarefaProvider, toastCtrl, ngZone, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarefaProvider = tarefaProvider;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.alertCtrl = alertCtrl;
    }
    TarefasListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        /*
         * value - Escuta todas as alterações da referencia
         * child_added - Ouvinte para quando um filtlo for adicionado
         * child_changed - Ouvinte para quando algum filtlo for alterado
         * child_removed - Ouvinte para quando algum filho for deletado
         * child_moved - Ouvinte para ouvir as mudanças na prioridade de um filho
         */
        this.tarefaProvider.reference.on('child_removed', function (snapshot) {
            var tarefaRemovida = snapshot.val();
            _this.toastCtrl.create({
                message: 'Tarefa ' + tarefaRemovida.titulo + ' foi removida!',
                duration: 3000
            }).present();
        });
        this.tarefaProvider.reference.on('value', function (snapshot) {
            _this.ngZone.run(function () {
                var innerArray = new Array();
                snapshot.forEach(function (elemento) {
                    var el = elemento.val();
                    innerArray.push(el);
                });
                _this.tarefas = innerArray;
            });
        });
    };
    TarefasListPage.prototype.atualizarTarefa = function (tarefa) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tarefas_add_tarefas_add__["a" /* TarefasAddPage */], { 'tarefa': tarefa });
    };
    TarefasListPage.prototype.adicionarTarefa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tarefas_add_tarefas_add__["a" /* TarefasAddPage */], { 'tarefa': new __WEBPACK_IMPORTED_MODULE_0__model_tarefas__["a" /* Tarefa */]() });
    };
    TarefasListPage.prototype.deletarTarefa = function (tarefa) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Deseja realmente excluir a tarefa?',
            message: '',
            buttons: [
                { text: 'Sim',
                    handler: function () {
                        _this.tarefaProvider.deletar(tarefa);
                    }
                },
                { text: 'Não',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    TarefasListPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    return TarefasListPage;
}());
TarefasListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-tarefas-list',template:/*ion-inline-start:"D:\code\ju\projetoMobile\src\pages\tarefas-list\tarefas-list.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Minhas Tarefas</ion-title>\n\n    <ion-buttons end>\n\n     <button ion-button icon-right (click)="logout()">Sair<ion-icon name="ios-log-out"></ion-icon></button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<ion-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let tarefa of tarefas">\n\n        {{tarefa.titulo}}\n\n        <button ion-item (click)="atualizarTarefa(tarefa)">\n\n          <tarefa-list-item [tarefa]="tarefa"></tarefa-list-item>\n\n        </button>\n\n\n\n        <ion-thumbnail item-right>\n\n            <button ion-button clear icon-only (click)="deletarTarefa(tarefa)">\n\n              <ion-icon name="trash"></ion-icon>Excluir\n\n            </button>\n\n        </ion-thumbnail>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n</ion-content>\n\n\n\n\n\n<ion-fab id=\'botao\' bottom right>\n\n    <button ion-fab color=\'primary\' (click)="adicionarTarefa()">\n\n        <ion-icon name=\'add\'></ion-icon>\n\n    </button>\n\n</ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\code\ju\projetoMobile\src\pages\tarefas-list\tarefas-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_tarefa_tarefa__["a" /* TarefaProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], TarefasListPage);

//# sourceMappingURL=tarefas-list.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map