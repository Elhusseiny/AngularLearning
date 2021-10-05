import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
OnInit

{
  title = 'AngularLearning';
  childElements = [{name: 'element1' , hour: 11}] ;
  constructor()
  {

  }
  ngOnInit(){
    this.childElements.push({name: 'element2' , hour: 3});
  }

  doSomething(emittedData: {name: string , age: number})
  {
    console.log(emittedData.name);
    console.log(emittedData.age);
  }

}
