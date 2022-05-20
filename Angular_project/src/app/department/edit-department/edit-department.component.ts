import {Component, Input, OnInit} from '@angular/core';
import {DepartmentService} from "../../services/department.service";
import {Department} from "../../_models/department";
import {Student} from "../../_models/student";

@Component({
  selector: 'Lab6-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  editedRecord = new Department();
  public displayEditModal: boolean = false;
  public validEdit: boolean = false;

  @Input() id: number = 0;

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  locations = [
    {name: 'Alexandria', code: 'AX'},
    {name: 'smart', code: 'SM'},
    {name: 'Mansoura', code: 'MN'},
    {name: 'Ismailia', code: 'IS'}
  ];

  selectedLocation: any = this.locations[0];

  edit() {
    this.displayEditModal = true;
    let department = this.departmentService.getDepartmentByID(this.id);
    this.editedRecord = (department === undefined) ? this.error() : this.valid(department);
  }

  valid(department: Department): Department {
    this.validEdit = true;
    return new Department(department._id, department.name, department.location);
  }

  error(): Department {
    this.validEdit = false;
    alert('something wrong happened, please try again');
    return new Department();
  }

  save() {
    this.editedRecord.location = this.selectedLocation.name;
    this.departmentService.update(this.editedRecord);
    this.displayEditModal = false;
  }
}
