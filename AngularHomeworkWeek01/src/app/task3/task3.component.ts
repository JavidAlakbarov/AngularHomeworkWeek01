import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  enableButton(){
    var enable = document.querySelector('.button');
    if(enable?.innerHTML === "Click"){
      setTimeout(() => {
        enable?.remove()
      }, 5000);
    }
  }
}
