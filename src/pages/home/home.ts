import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Aluno } from '../../model/aluno/aluno.model';
import { AlunoListService } from '../../services/aluno-list.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alunoList: Observable<Aluno[]>

  constructor(public navCtrl: NavController, private alunoListService: AlunoListService) {
    this.alunoList = this.alunoListService.getAlunoList()
      .snapshotChanges()
      .pipe(map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
  }
}
