import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent} from "./department/department/department.component";
import {StudentComponent} from "./student/student/student.component";


const routes: Routes = [
  {path:"departments",component:DepartmentComponent},
  {path:"students",component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
