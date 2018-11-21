import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input()
   buttonclass: string;

   @Input()
   text: string;

   @Input()
   buttonstyle: string;

  private innerclass: string;

  private classes: any = {
    'primary': 'btn-primary',
    'secondary': 'btn-secondary',
    'cancel': 'btn-cancel',
    'authorize': 'btn-authorize',
    'deny': 'btn-deny',
    'disabled': 'disabled',
    'small': 'btn-sm',
    'large': 'btn-lg'
  };


  constructor() {

   }

  ngOnInit() {
    this.innerclass = 'btn';
    for(let item of this.buttonclass.split(' ')){
      this.innerclass += ' ' + this.classes[item];
    }

  }

}

