import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InversionOfControlComponent } from './inversion-of-control.component';

const routes: Routes = [{ path: '', component: InversionOfControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionOfControlRoutingModule { }
