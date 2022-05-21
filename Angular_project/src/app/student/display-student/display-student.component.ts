import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'Lab6-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  students:Student[] = [];
  isConnected = false;

  ngOnInit(): void {

    // new Promise<Student[]>(()=> {
    //   this.studentService.callApi()
    //   this.isConnected = false;
    // }).then({
    //   this.departments = this.departmentService.getAllDepartments()
    //   this.isConnected = true;
    // })

    try {
      this.studentService.callApi();
      this.isConnected = false;
      setTimeout(() => {
        this.students = this.studentService.getAllStudents();
      }, 500)
    }catch (e){
      this.isConnected = true;
    }
  }

}
