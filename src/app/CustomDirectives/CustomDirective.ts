import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[styleMe]'
})
export class CustomDirective implements OnInit {

  @Input('highlightColor') highlightColor! : string  ;
  @Input('basicColor') basicColor! : string  ;

  @HostBinding('style.backgroundColor') myChosenBackGroundColor : string = this.basicColor;

   constructor(private elementRef : ElementRef , private renderer: Renderer2)
  {
    this.myChosenBackGroundColor = 'yellow';
  }
  
  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'green');
  }

  @HostListener('mouseover') mouseover(eventData: Event) //@HostListener('enter the event name')
  {
    //this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'red');
    //this.myChosenBackGroundColor = 'red' ;
    this.myChosenBackGroundColor = this.highlightColor ;
  } 
  @HostListener('mouseleave') mouseleave(eventData: Event) //@HostListener('enter the event name')
  {
    this.myChosenBackGroundColor = this.basicColor ;

  } 
  
}