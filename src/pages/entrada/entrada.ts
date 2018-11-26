import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html'
})
export class EntradaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  chamar(){
    this.navCtrl.setRoot(TabsControllerPage);
  }
  
}
