import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
