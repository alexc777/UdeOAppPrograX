import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dependency', pathMatch: 'full' },
  { path: 'dependency', loadChildren: () => import('./pages/dependency-injection/dependency-injection.module').then(m => m.DependencyInjectionModule) },
  { path: 'inversion', loadChildren: () => import('./pages/inversion-of-control/inversion-of-control.module').then(m => m.InversionOfControlModule) },

  { path: '**', redirectTo: 'dependency' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
