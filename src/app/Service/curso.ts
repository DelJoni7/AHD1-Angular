import { Injectable } from '@angular/core';
import { CursoModel } from '../models/curso.model';
import { CURSOS } from '../data/cursos.data';

@Injectable({
  providedIn: 'root',
})
export class Curso {
  obtenerCursos(): CursoModel[]{
    return CURSOS;
  }
}
