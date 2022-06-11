import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inversion-of-control',
  templateUrl: './inversion-of-control.component.html',
  styleUrls: ['./inversion-of-control.component.css']
})
export class InversionOfControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('1. Se ejecuto en incio del component');
  }

  ngOnChanges(){
    console.log("2. OnChanges: Cuando la data de propiedades relacionadas cambian o información que esta en el componente.");
  }

  ngDoCheck(){
    console.log("3. DoCheck: Durante la revisión de detección de cambios en un ciclo, ósea que se ejecuta si hay un cambio en alguna propiedad o pantalla.");
  }

  ngAfterContentInit(){
    console.log("4. AfterContentInit: Después de insertar algún tipo de contenido ejemplo la etiqueta de un componente ");
  }

  ngAfterContentChecked(){
    console.log("5. AfterContentChecked: Después de la revisión del contenido insertado");
  }

  ngAfterViewInit(){
    console.log("6. AfterViewInit: Después de la inicialización del componente / componentes hijos");
  }

  ngAfterViewChecked(){
    console.log("7. AfterViewChecked: Después de cada revisión de los componentes / componentes hijos");
  }

  ngOnDestroy(){
    console.log("8. OnDestroy: Justo antes que se destruya el componente o directiva,(cuando cambiamos de vista o incluso con un ngIf en un elemento)");
  }


}
