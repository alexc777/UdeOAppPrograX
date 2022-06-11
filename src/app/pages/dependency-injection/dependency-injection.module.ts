import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { DependencyInjectionComponent } from './dependency-injection.component';


@NgModule({
  declarations: [
    DependencyInjectionComponent
  ],
  imports: [
    CommonModule,
    DependencyInjectionRoutingModule
  ]
})
export class DependencyInjectionModule { }
