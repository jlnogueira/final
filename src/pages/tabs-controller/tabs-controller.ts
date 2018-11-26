import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SobreOBebPage } from '../sobre-obeb/sobre-obeb';
import { LocalizaOPage } from '../localiza-o/localiza-o';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SobreOBebPage;
  tab2Root: any = 'OlaPage';
  tab3Root: any = LocalizaOPage;
  constructor(public navCtrl: NavController) {
  }
  
}
