import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'Lab6-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  displayCreateModal: boolean = false;
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

  showCreateDialog(){
    this.displayCreateModal = true;
  }

  add(name: string, age: string, department_number: string){
    this.displayCreateModal = false;
    this.studentService.addNew(name, Number(age), Number(department_number))
  }
}
