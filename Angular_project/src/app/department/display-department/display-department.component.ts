import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute} from "@angular/router";
import {Department} from "../../_models/department";

@Component({
  selector: 'Lab6-display-department',
  templateUrl: './display-department.component.html',
  styleUrls: ['./display-department.component.css']
})
export class DisplayDepartmentComponent implements OnInit {

  constructor(public departmentService: DepartmentService, public activatedRoute: ActivatedRoute) {
  }

  departments:Department[] = []

  ngOnInit(): void {

    // new Promise<Department[]>(()=> {
    //   this.departmentService.callApi()
    //   console.log('called')
    // }).then(
    //   this.departments = this.departmentService.getAllDepartments()
    // )

    this.departmentService.callApi()

    setTimeout(() => {
      this.departments = this.departmentService.getAllDepartments();
    }, 500)

  }

}
