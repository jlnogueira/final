import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Aluno } from '../model/aluno/aluno.model';

@Injectable()
export class AlunoListService {

    private alunoListRef = this.db.list<Aluno>('/alunos');

    constructor(private db: AngularFireDatabase) { }

    getAlunoList() {
        return this.alunoListRef;
    }

    addAluno(aluno: Aluno) {
        return this.alunoListRef.push(aluno);
    }

    updateAluno(aluno: Aluno) {
        return this.alunoListRef.update(aluno.key, aluno);
    }

    removeAluno(aluno: Aluno) {
        return this.alunoListRef.remove(aluno.key);
    }
}
