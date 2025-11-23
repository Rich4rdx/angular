import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {

  @Output()
  nuevaTarea =new EventEmitter<String>()

  textoInput:String = ""

  agregarTarea(){
    if (this.textoInput !== "") {

      this.nuevaTarea.emit(this.textoInput)

      this.textoInput = ""
    }

  }

 
}
