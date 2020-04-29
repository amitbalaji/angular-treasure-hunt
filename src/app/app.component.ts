import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 public colArray = [];
 public rowArray = [];
 public treasure = [];
 public colums;
 public rows;
 public treasureInput: string;
 public isStartGame = false;

 getValue(event:any) { 
   if (!event.target.innerHTML) {
      event.target.innerHTML = this.treasure || '';
   } else {
     event.target.innerHTML ='';
   }
}

 startGame() {
   this.isStartGame = true;
 }
 
 setDimension(){

    this.colArray = [];
    this.rowArray = [];
    let treasureItems = (this.treasure || '').toString().split(',');
    for(let i = 0; i<this.colums; i++){
      this.colArray.push(i);
    }
    for(let i = 0; i<this.rows; i++){
      this.rowArray.push(i);
    }



  }
}
