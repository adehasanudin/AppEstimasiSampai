import { Component, OnInit} from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-isimodal',
  templateUrl: './isimodal.page.html',
  styleUrls: ['./isimodal.page.scss'],
})
export class IsimodalPage implements OnInit{

  nJam='';
  nJarak = 0;
  nKec= 0;
  nilaiJam= 0;
  getDurasi = null;
  data = null;
  data2 = null;
  waktuHasil =null;
  sampaiJam = null;
  sampaiJamAkhir = null;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit(){
    this.nJam = this.navParams.get('custom_id0'); 
    this.nJarak = this.navParams.get('custom_id1');
    this.nKec = this.navParams.get('custem_id2');
    this.nilaiJam = this.nJarak / this.nKec;
    this.getDurasi = moment.duration(this.nilaiJam, 'hours');
    this.data = this.getDurasi._data 
    this.waktuHasil = this.data.hours + " jam " + this.data.minutes + " menit " //hasil akhir durasi

    //get nilai Jam
    this.data2 = this.getDurasi._data.hours

    //hitung Estimasi jam sampai
    //this.sampaiJam = moment(this.nJam).format('HH:mm');
    this.sampaiJamAkhir = moment(this.nJam).add(this.data2, 'hours').format('HH:mm'); //menambahkan 2 waktu
    //console.log(this.sampaiJamAkhir); 
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
