import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAlunoPage } from './edit-aluno';

@NgModule({
  declarations: [
    EditAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAlunoPage),
  ],
})
export class EditAlunoPageModule {}
