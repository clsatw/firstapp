var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import { AlertService } from "../shared/alert";
/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CameraPage = (function () {
    function CameraPage(alert, camera, navCtrl, navParams) {
        this.alert = alert;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    /*
    ngOnInit() {
      // this.photos = [];
    }
    */
    CameraPage.prototype.ionViewDidLoad = function () {
        this.photos = [];
        console.log('ionViewDidLoad CameraPage');
    };
    CameraPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            // reduced from 100 to 50
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
        this.alert.alert('Are you sure?', this.photos.splice(index, 1));
    };
    CameraPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-camera',
            templateUrl: 'camera.html',
        }),
        __metadata("design:paramtypes", [AlertService, Camera, NavController, NavParams])
    ], CameraPage);
    return CameraPage;
}());
export { CameraPage };
//# sourceMappingURL=camera.js.map