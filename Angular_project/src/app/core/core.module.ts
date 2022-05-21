import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {AboutComponent} from "./about/about.component";



@NgModule({
  declarations: [
    NavBarComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    NavBarComponent,
    AboutComponent
  ]
})
export class CoreModule { }
