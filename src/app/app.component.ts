import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 public columns;
 public rows;
 public isStartGame = false;
public treasureMatrix:string[][]=[];


initializeMatrix(){
  for(let i: number = 0; i < this.rows; i++) {
            this.treasureMatrix[i]=[]
  for(let j: number = 0; j<this.columns; j++) {
          this.treasureMatrix[i][j]=''
            }
        }
}


 getValue(i,j) { 
   if(!(this.treasureMatrix[i][j]==='X')){
      this.treasureMatrix[i][j]='X'
   } else {
          this.treasureMatrix[i][j]=''
   }
}

 startGame() {
   this.isStartGame = true;
  
 }
getAnswer(i:any,j:any):string{
let count=0;
for(let x:number=i-1>=0?i-1:0;x<=(i+1<this.rows?i+1:this.rows-1);x++){
for(let y:number=j-1>=0?j-1:0;y<=(j+1<this.columns?j+1:this.columns-1);y++){
if(this.treasureMatrix[x][y]==='X'){
count++
}
}
}
  return count.toString()
}

 getDimension(){
  for(let i=0;i<this.rows;i++){
  for(let j=0;j<this.columns;j++){
  if(!(this.treasureMatrix[i][j]==='X'))
  this.treasureMatrix[i][j]=this.getAnswer(i,j)  
    
  }  
  }
 }
 
 
}
