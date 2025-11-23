import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {


 listaTareas:String[] = [] 

 recibirTarea(nuevaTarea:String){

  this.listaTareas.push(nuevaTarea)
 }

  
eliminarTarea(indice:number){
  this.listaTareas.splice(indice,1)
}

}
