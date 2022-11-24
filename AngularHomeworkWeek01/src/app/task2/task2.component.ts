import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  clickMessage(){
    var x = document.querySelector('.createServer');
    var y = document.querySelector('.btn');
    if(x?.innerHTML === "No server was created" && y?.innerHTML === "Add Server"){
      x.innerHTML = "Server was created"
      y.innerHTML = "Delete Server"
    }
    else if (x?.innerHTML === "Server was created" && y?.innerHTML === "Delete Server"){
      x.innerHTML = "Server was deleted"
      y.innerHTML = "Deleted"
    }
    if(y?.innerHTML==="Deleted" && x?.innerHTML === "Server was deleted"){
      setTimeout(() => {y?.remove()}, 2000);
      x.innerHTML = "Server was deleted, refresh this page to create server"
    }
}}