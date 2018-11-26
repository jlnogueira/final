import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../model/aluno/aluno.model';
import { AlunoListService } from '../../services/aluno-list.service';
import { DiarioPage } from '../diario/diario';

@Component({
  selector: 'page-escreva-algo',
  templateUrl: 'escreva-algo.html'
})
export class EscrevaAlgoPage {
  aluno: Aluno = {
    nome: '',
    email: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alunoListService: AlunoListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscrevaAlgoPage');
  }

  addAluno(aluno: Aluno) {
    this.alunoListService.addAluno(aluno).then(ref => {
      this.navCtrl.setRoot(DiarioPage);
    })
  }

}
  

