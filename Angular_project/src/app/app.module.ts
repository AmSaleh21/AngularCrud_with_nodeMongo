import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentModule} from "./student/student.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmationService} from "primeng/api";

import {DepartmentModule} from "./department/department.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    DepartmentModule,
    CoreModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
