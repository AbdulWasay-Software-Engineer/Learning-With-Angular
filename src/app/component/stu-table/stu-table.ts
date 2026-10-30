
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Student {
  id: number;
  name: string;
  city: string;
  isactive: boolean;
}

@Component({
  selector: 'app-stu-table',
  imports: [CommonModule],
  templateUrl: './stu-table.html',
  styleUrl: './stu-table.css'
})

export class StuTable {

  studentList: Student[] = [
    { id: 1, name: 'Abdul Wasay', city: 'Karachi', isactive: true },
    { id: 2, name: 'Zain Ansari', city: 'Lahore', isactive: true },
    { id: 3, name: 'Fakhar Humayun', city: 'Peshawar', isactive: false }
  ];

}
