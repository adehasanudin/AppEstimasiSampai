import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsimodalPage } from './isimodal.page';

const routes: Routes = [
  {
    path: '',
    component: IsimodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsimodalPageRoutingModule {}
