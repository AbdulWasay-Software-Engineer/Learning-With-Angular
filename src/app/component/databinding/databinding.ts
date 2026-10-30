import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ FormsModule],
  selector: 'app-databinding',
  styleUrl: './databinding.css',
  templateUrl: './databinding.html',
})
export class Databinding {
   courseName : string = 'React'
   imgUrl : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxhqivSoOELq-SZ847qUH19BIGUviUzO1-PKk4oPzig&s=10'
  inputType : string = 'Radio'

  sayHello(name: string): void {
  alert("Hello " + name);
}

changeCourse(course: string): void {
  this.courseName = course;
}
}
