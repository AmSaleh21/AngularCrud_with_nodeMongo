import {Component, Input, OnInit} from '@angular/core';
import {DepartmentService} from "../../services/department.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'Lab6-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit {

  @Input() id=0;

  constructor(public departmentService: DepartmentService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  delete(event: Event){
    this.confirmationService.confirm({
      target: event.target ?? undefined,
      message: 'Are you sure that you want to delete this department',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.departmentService.remove(this.id);
      },
      reject: () => { }
    });
  }
}
