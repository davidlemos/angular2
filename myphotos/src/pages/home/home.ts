import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { PhotoService } from '../../services/photos.service'
import { ToastController} from 'ionic-angular'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  captureDataUrl: string

  constructor(public navCtrl: NavController,
             private camera:Camera,
             private photoService: PhotoService,
            private toastController: ToastController) {
  }

  takePicture(){

    const cameraOptions: CameraOptions = {
      quality:50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOptions).then(
      (image) => {
          this.captureDataUrl = 'data:image/jpeg;base64,' + image
          this.uploadFirebase()
      },
      (err) => {
          console.log(err)
      }
    )
  }

  uploadFirebase(){
    let fileName = "myphotos/" + Math.floor(Date.now()/1000) + ".jpg"
    let resourceRef = this.photoService.getFirebaseReferenceFromChild(fileName)
    resourceRef.putString(this.captureDataUrl, this.photoService.DATA_URL).then(
      (snapshot) => {
        
          let toast = this.toastController.create({
              message: 'Upload para o firebase feito com sucesso',
              duration: 5000,
              position: 'top'
          })
          toast.present()
      }
    )
  }

}
