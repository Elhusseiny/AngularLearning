import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  // remember ! is for strict class checking
   showOnlyEven = true;
   evenNumbers: number[] ;
  oddNumbers: number[];
  @ViewChild('btnElement', {static: true}) btnElement! : ElementRef;
  constructor()
  {
    this.evenNumbers = [2,4,6] ;
    this.oddNumbers = [1,3,5] ;
  }

  toggle()
  {

    let name = (this.showOnlyEven? 'show Even' : 'show Odd') ;
    this.showOnlyEven = ! this.showOnlyEven ;
    console.log(name);
    this.btnElement.nativeElement.textContent = name ;
  }
  
  

}
