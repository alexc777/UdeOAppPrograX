import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: any[] = [
    { id: 1, fistName: 'Juan',     lastName: 'Valencia', code: '18040002005' },
    { id: 2, fistName: 'Pepe',     lastName: 'Cadena',   code: '18040002005' },
    { id: 3, fistName: 'Alex',     lastName: 'Suares',   code: '18040002005' },
    { id: 4, fistName: 'Jhon',     lastName: 'Méndez',   code: '18040002005' },
    { id: 5, fistName: 'Estuardo', lastName: 'García',   code: '18040002005' },
    { id: 6, fistName: 'Carlos',   lastName: 'Estrada',  code: '18040002005' },
  ]

  constructor() { }

  deleteUser(index: number) {
    this.students.splice(index, 1);
  }
}
