import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  // remember ! is for strict class checking
  numbers: number[];
  
  constructor()
  {
    this.numbers = [1,2,3,4, 6] ;
  }


  

}
