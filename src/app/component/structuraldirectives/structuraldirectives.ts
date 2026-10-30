import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule , FormsModule],
  selector: 'app-structuraldirectives',
  styleUrl: './structuraldirectives.css',
  templateUrl: './structuraldirectives.html',
})
export class Structuraldirectives {
  isdiv1Visible : boolean = true ;
  num1 : number = 15
  num2 : number = 10

  cities: string[] = [
    'Karachi',
    'Lahore',
    'Islamabad',
    'Peshawar',
    'Quetta'
];



  showdiv1() : void {
    this.isdiv1Visible = true
  }
  hidediv1() : void {
    this.isdiv1Visible = false
  }

}
