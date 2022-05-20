import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { DisplayDepartmentComponent } from './display-department/display-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DepartmentComponent } from './department/department.component';

import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {RippleModule} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    CreateDepartmentComponent,
    DeleteDepartmentComponent,
    DisplayDepartmentComponent,
    EditDepartmentComponent,
    DepartmentComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        ConfirmPopupModule,
        RippleModule,
        FormsModule,
        DropdownModule,
        HttpClientModule
    ],
  exports: [
    DepartmentComponent
  ]
})
export class DepartmentModule { }
