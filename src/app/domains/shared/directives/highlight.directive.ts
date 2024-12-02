import { style } from '@angular/animations';
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective {

  element =inject(ElementRef);



  constructor() { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor="red";
    this.element.nativeElement.style.color="white";
  }

}
