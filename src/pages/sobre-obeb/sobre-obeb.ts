import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComoTrocarFraldaPage } from '../como-trocar-fralda/como-trocar-fralda';
import { HigienePage } from '../higiene/higiene';
import { CorteDoCabeloPage } from '../corte-do-cabelo/corte-do-cabelo';
import { PrimeiroBanhoPage } from '../primeiro-banho/primeiro-banho';
import { ChoroDoBebPage } from '../choro-do-beb/choro-do-beb';

@Component({
  selector: 'page-sobre-obeb',
  templateUrl: 'sobre-obeb.html'
})
export class SobreOBebPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToComoTrocarFralda(params){
    if (!params) params = {};
    this.navCtrl.push(ComoTrocarFraldaPage);
  }goToHigiene(params){
    if (!params) params = {};
    this.navCtrl.push(HigienePage);
  }goToCorteDoCabelo(params){
    if (!params) params = {};
    this.navCtrl.push(CorteDoCabeloPage);
  }goToPrimeiroBanho(params){
    if (!params) params = {};
    this.navCtrl.push(PrimeiroBanhoPage);
  }goToChoroDoBeb(params){
    if (!params) params = {};
    this.navCtrl.push(ChoroDoBebPage);
  }
}
