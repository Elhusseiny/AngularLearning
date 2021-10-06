import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  // remember ! is for strict class checking
  employees: any[] ;
  numbers: number[];
  numbers2: number[];
  
  constructor()
  {
    this.employees = [{name: 'mohamed' , age : 15} , {name: 'ali' , age : 25} , {name: 'omar' , age : 20}]
    this.numbers = [1,2,3,4, 6] ;
    this.numbers2 = [7,8,9,10, 11] ;
  }

  refreshAll()
  {
    this.employees = [{name: 'mohamed' , age : 15} , {name: 'ali' , age : 25} , {name: 'omar' , age : 20} , {name: 'Samy' , age : 30}];
    this.numbers2 = [7,8,9,10, 11] ;
  }
  
  trackEmployees (index: number , element: {name: string , age: number})
  {
    console.log('track index is called') ;

    console.log('number is:' + element.name + '----' + 'index is ' + index );
  }
  

}
