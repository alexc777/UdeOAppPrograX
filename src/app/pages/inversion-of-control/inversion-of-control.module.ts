import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InversionOfControlRoutingModule } from './inversion-of-control-routing.module';
import { InversionOfControlComponent } from './inversion-of-control.component';


@NgModule({
  declarations: [
    InversionOfControlComponent
  ],
  imports: [
    CommonModule,
    InversionOfControlRoutingModule
  ]
})
export class InversionOfControlModule { }
