import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imagenhijo',
  templateUrl: './imagenhijo.component.html',
  styleUrls: ['./imagenhijo.component.css']
})
export class ImagenhijoComponent {
  @Input()imagen!: string; 
  @Output() datosEnviados = new EventEmitter<string>();

  enviarDatos(){
    this.datosEnviados.emit(this.imagen)
  }
}
