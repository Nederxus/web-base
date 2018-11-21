import { Directive, ElementRef, HostListener, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class AppClassDirective implements OnInit {
  @Input()
  appClass: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }
  ngOnInit(){
    console.log('class: ' + this.appClass);
    this.renderer.setElementClass(this.elementRef, this.appClass, true);

  }


}
