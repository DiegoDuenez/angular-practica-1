import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-evaluacion',
  templateUrl: './boton-evaluacion.component.html',
  styleUrls: ['./boton-evaluacion.component.css']
})
export class BotonEvaluacionComponent {

  @Input() face: string = 'smile';
  @Input() color: string = 'green';

}
