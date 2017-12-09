import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { CameraOptions } from '@ionic-native/camera';
import { Camera } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  public photos: any;
  public base64Image: string;
  
    constructor(public navCtrl: NavController, private camera: Camera, private alertCtrl: AlertController) {
  
    }
   ngOnInit(){
     this.photos = [];
   }
   takePhotos(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    this.photos.push(this.base64Image) ;
    this.photos.reverse();
  }, (err) => {
     // Handle error
    });
   }
   deletePhoto(index){
  //   this.photos.splice(index,1);
  //   }
  // }
    // 
    let confirm = this.alertCtrl.create({
      title: 'Você  quer deletar essa imagem?',
      message: '',
      buttons: [
        {
          text: 'Não',
          handler: () => {
           
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.photos.splice(index,1);
          }
        }
      ]
    });
    confirm.present();
  }
  
  }
   
  