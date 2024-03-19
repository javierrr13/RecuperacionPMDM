import { Component } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {
  imgroute:string = ""  
  listaDeImagenes:Imagen[]=[
    new Imagen('src\assets\img\bomba.png'),
    new Imagen('src\assets\img\caja.png'),
    new Imagen('src\assets\img\iman.png'),
    new Imagen('src\assets\img\calabaza.png'),
    new Imagen('src\assets\img\martillo.png'),
    new Imagen('src\assets\img\plano.png')
  ]
  inputimg(img:string){
    this.imgroute=img
  }
}
class Imagen{
  imagensrc: string;

  constructor(i:string){
    this.imagensrc=i
  }
}
