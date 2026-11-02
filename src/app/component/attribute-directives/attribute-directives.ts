
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css'
})

export class AttributeDirectives {

  div1BgColor: string = "bg-primary";

  makeBlue(): void {
    this.div1BgColor = "bg-primary";
  }

  makeRed(): void {
    this.div1BgColor = "bg-danger";
  }

  toggleColor(): void {

    if (this.div1BgColor === "bg-primary") {
      this.div1BgColor = "bg-danger";
    }
    else {
      this.div1BgColor = "bg-primary";
    }

  }

}
