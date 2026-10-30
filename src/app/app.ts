import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Addemployee } from './component/addemployee/addemployee';
import { Employeelist } from './component/employeelist/employeelist';
import { Databinding } from './component/databinding/databinding';
import { Structuraldirectives } from './component/structuraldirectives/structuraldirectives';
import { StuTable } from './component/stu-table/stu-table';

@Component({
  imports: [RouterOutlet , Addemployee , Employeelist , Databinding , Structuraldirectives , StuTable],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('myapp');
}
