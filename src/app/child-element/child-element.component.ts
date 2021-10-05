import { Component, ElementRef, Input, OnInit, Output, ViewChild , EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.css'] , 
  encapsulation : ViewEncapsulation.Emulated //Default
})
export class ChildElementComponent implements OnInit {

  @Input('element') element! : {name: String, hour: number}; //! is to prevent static checking, otherwise you will need to initialize the property in the constructor.
  @Input('name') name! : string ;
  @Output('someChildEvent') childEventEmitter =  new EventEmitter<{name: string , age: number}>();
  @Input('liked') liked : boolean = false ;
  buttonName: string = 'like';
  @ViewChild('heading', {static: true}) header! : ElementRef;
  @ViewChild('likeButton', {static: true}) likeButton! : ElementRef;
  constructor() { }
  ngOnInit(): void {

    this.header.nativeElement.textContent = 'child element' ;

  }

  public onLikeClick()
  {
    this.liked = !this.liked;
    this.buttonName = (this.liked? 'dislike' : 'like')  ;
    this.likeButton.nativeElement.textContent = this.buttonName ;
    console.log(this.buttonName);
  }
  public raiseEventToParent(nameInput: HTMLInputElement)
  {
    this.childEventEmitter.emit({
      name: nameInput.value,
      age: 15 // some value
    });
  }

}
