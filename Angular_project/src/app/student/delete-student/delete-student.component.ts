import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'Lab6-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  @Input() id=0;

  constructor(public studentService: StudentService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  delete(event: Event) {
    this.confirmationService.confirm({
      target: event.target ?? undefined,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentService.remove(this.id);
      },
      reject: () => { }
    });
  }
}
