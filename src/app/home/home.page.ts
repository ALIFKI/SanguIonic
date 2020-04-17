import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data : any;
sliderOne : any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: false,
    // centeredSlides: true
  };
  slideOptsSkill = {
    initialSlide: 0,
    slidesPerView: 3,
    autoplay: false,
    // centeredSlides: true
  };
  constructor(
    public alertCtrl : AlertController,
    private br : BarcodeScanner,
    private http : HttpClient,
    private router : Router,
    ) {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(code=>{
        this.data = code
      });
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/images/1.png'
          },
          {
            id: 2,
            image: '../../assets/images/2.jpg'
          },
          {
            id: 3,
            image: '../../assets/images/3.jpg'
          },
        ]
      };
    }



  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Top Up',
      inputs: [
        {
          name: 'kode',
          type: 'text',
          placeholder: 'Metode bayar'
        },
        {
          name: 'name2',
          type: 'number',
          id: 'name2-id',
          placeholder: 'Masukan Nominal'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertTransfer() {
    const alert = await this.alertCtrl.create({
      header: 'Transfer',
      inputs: [
        {
          name: 'kode',
          type: 'text',
          placeholder: 'ID Penerima'
        },
        {
          name: 'name2',
          type: 'number',
          id: 'name2-id',
          placeholder: 'Masukan Nominal'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  scanCode(){
    this.br.scan().then(barcode=>{
      console.log(barcode)
    }).catch(err=>{
      console.log(err);
    });
  }
  buy(){
    this.router.navigateByUrl('listbarang');
    console.log('this Login');
  }
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  
}
