import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Aluno } from '../../model/aluno/aluno.model';
import { AlunoListService } from '../../services/aluno-list.service';

@IonicPage()
@Component({
  selector: 'page-edit-aluno',
  templateUrl: 'edit-aluno.html',
})
export class EditAlunoPage {

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
    this.aluno = this.navParams.get('aluno');
  }

  updateAluno(aluno: Aluno) {
    this.alunoListService.updateAluno(aluno).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeAluno(aluno: Aluno) {
    this.alunoListService.removeAluno(aluno).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }
}
