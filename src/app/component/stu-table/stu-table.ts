
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  city: string;
  isactive: boolean;
  percentage: number;
}

@Component({
  selector: 'app-stu-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stu-table.html',
  styleUrl: './stu-table.css'
})

export class StuTable {

  studentList: Student[] = [

    {
      id: 1,
      name: 'Abdul Wasay',
      city: 'Karachi',
      isactive: true,
      percentage: 90
    },

    {
      id: 2,
      name: 'Zain',
      city: 'Lahore',
      isactive: false,
      percentage: 65
    },

    {
      id: 3,
      name: 'Fakhar',
      city: 'Islamabad',
      isactive: true,
      percentage: 45
    },

    {
      id: 4,
      name: 'Ayesha',
      city: 'Multan',
      isactive: true,
      percentage: 85
    }

  ];

}
