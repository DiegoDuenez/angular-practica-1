import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { AppRoutingModule } from './app-routing.module';
import { EvaluacionComponent } from './views/evaluacion/evaluacion.component';
import { FormularioEvaluacionComponent } from './components/formulario-evaluacion/formulario-evaluacion.component';
import { BotonEvaluacionComponent } from './components/boton-evaluacion/boton-evaluacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    EvaluacionComponent,
    FormularioEvaluacionComponent,
    BotonEvaluacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
