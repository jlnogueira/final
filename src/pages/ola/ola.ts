import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoListService } from '../../services/aluno-list.service';
import { Observable } from 'rxjs';
import { Aluno } from '../../model/aluno/aluno.model';
import { map } from 'rxjs/operators';

/**
 * Generated class for the OlaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ola',
  templateUrl: 'ola.html',
})
export class OlaPage {

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


