import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsimodalPageRoutingModule } from './isimodal-routing.module';

import { IsimodalPage } from './isimodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsimodalPageRoutingModule
  ],
  declarations: [IsimodalPage]
})
export class IsimodalPageModule {}
