import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[styleMe]'
})
export class CustomDirective implements OnInit {
  constructor(private elementRef: ElementRef , private renderer :  Renderer2 ) {
  }

  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'green');
  }
}