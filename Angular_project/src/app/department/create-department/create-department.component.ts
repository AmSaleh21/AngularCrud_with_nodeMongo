import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../../services/department.service";

@Component({
  selector: 'Lab6-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  displayCreateModel: boolean = false;

  locations = [
    {name: 'Alexandria', code: 'AX'},
    {name: 'smart', code: 'SM'},
    {name: 'Mansoura', code: 'MN'},
    {name: 'Ismailia', code: 'IS'}
  ];

  selectedLocation: any = this.locations[0];

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  showCreateDialog(){
    this.displayCreateModel = true;
  }

  add(name: string){
    this.displayCreateModel = false;
    this.departmentService.addNew(name, this.selectedLocation.name);
  }

}
