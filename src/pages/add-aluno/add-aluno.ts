import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../model/aluno/aluno.model';
import { AlunoListService } from '../../services/aluno-list.service';

@IonicPage()
@Component({
  selector: 'page-add-aluno',
  templateUrl: 'add-aluno.html',
})
export class AddAlunoPage {

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
    console.log('ionViewDidLoad AddAlunoPage');
  }

  addAluno(aluno: Aluno) {
    this.alunoListService.addAluno(aluno).then(ref => {
      this.navCtrl.setRoot('HomePage');
    })
  }

}
