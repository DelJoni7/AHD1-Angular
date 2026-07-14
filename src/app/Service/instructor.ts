import { Injectable } from '@angular/core';
import { InstructorModel } from '../models/instructor.model';
import { INSTRUCTOTRES } from '../data/instructores.data';

@Injectable({
  providedIn: 'root',
})
export class Instructor {
  ObtenerInstructores(): InstructorModel[]{
    return INSTRUCTOTRES;
  }
}
