import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Addemployee } from './component/addemployee/addemployee';
import { Employeelist } from './component/employeelist/employeelist';

@Component({
  imports: [RouterOutlet , Addemployee , Employeelist],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
}
