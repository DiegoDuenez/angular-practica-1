import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluacionComponent } from './views/evaluacion/evaluacion.component';


const routes: Routes = [
  {
    path: 'evaluacion',
    component: EvaluacionComponent,
    
  },
  
  {
    path: "",
    redirectTo: '/evaluacion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }