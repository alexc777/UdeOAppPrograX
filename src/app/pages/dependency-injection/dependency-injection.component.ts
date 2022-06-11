import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  //inyectaremos la clase Studens para mostrar los estudiantes y manipularlos
  constructor(public studentsService : StudentsService) { }

  ngOnInit(): void {
  }

  spliceStudent(idx: number) {
    console.log(`Estudiando eliminado`);
    this.studentsService.deleteUser(idx);
  }

}
