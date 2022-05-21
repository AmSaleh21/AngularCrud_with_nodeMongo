import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../_models/student";

@Component({
  selector: 'Lab6-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editedRecord = new Student();
  public displayEditModal: boolean = false;
  public validEdit: boolean = false;

  @Input() id: number = 0;

  constructor(public studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  edit() {
    this.displayEditModal = true;
    let student = this.studentService.getStudentByID(this.id);
    this.editedRecord = (student === undefined) ? this.error() : this.valid(student);
  }

  valid(student: Student): Student {
    this.validEdit = true;
    return new Student(student._id, student.name, student.age, student.department)
  }

  error(): Student {
    this.validEdit = false;
    return new Student()
  }

  save() {
    this.studentService.update(this.editedRecord)
    this.displayEditModal = false;
  }

}
