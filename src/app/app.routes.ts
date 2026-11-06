import { Routes } from '@angular/router';
import { Addemployee } from './component/addemployee/addemployee';
import { AttributeDirectives } from './component/attribute-directives/attribute-directives';
import { Databinding } from './component/databinding/databinding';
import { Employeelist } from './component/employeelist/employeelist';
import { Structuraldirectives } from './component/structuraldirectives/structuraldirectives';
import { StuTable } from './component/stu-table/stu-table';
import { Home } from './component/home/home';

export const routes: Routes = [
    {
        path : '',
        component : Home
    },
    {
        path : 'add-emp',
        component : Addemployee
    },
    {
        path : 'attri-dir',
        component : AttributeDirectives
    },
    {
        path : 'data-bind',
        component : Databinding
    },
    {
        path : 'emp-list',
        component : Employeelist
    },
    {
        path : 'struct-dir',
        component : Structuraldirectives
    },
    {
        path : 'stu-table',
        component : StuTable
    },
];
