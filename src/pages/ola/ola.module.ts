import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OlaPage } from './ola';

@NgModule({
  declarations: [
    OlaPage,
  ],
  imports: [
    IonicPageModule.forChild(OlaPage),
  ],
})
export class OlaPageModule {}
