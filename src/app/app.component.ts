import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isActive = true;

  // acá ya podemos observar la inyección de una dependencia, que permite utilizar metodoso de una clase para navegar a otras pantallas
  constructor(private route: Router) {

  }

  navPage(slug: string) {
    this.isActive = !this.isActive;
    this.route.navigateByUrl(`/${slug}`);
  }
}
