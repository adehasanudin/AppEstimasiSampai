
import { Component, } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController} from '@ionic/angular';
import { IsimodalPage } from '../isimodal/isimodal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jamInput='';
  jarakInput=null;
  kecInput=null;

  jamInputX = new FormControl('', Validators.required);
  jarakInputX = new FormControl(null, Validators.required);
  kecInputX = new FormControl(null, Validators.required);

  constructor(
    private modalController: ModalController){
  }
  
  ngOnInit() {
    
  }
  async openModal(){
    const modal = await this.modalController.create({
      component: IsimodalPage,
      componentProps:{
        custom_id0: this.jamInput,
        custom_id1: this.jarakInput,
        custem_id2: this.kecInput
      }
    });
    await modal.present();
  }
}
