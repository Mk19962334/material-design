import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';



@NgModule({
  declarations: [
    StaffLoginComponent,
    StaffdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StaffLoginComponent,
    StaffdetailsComponent
  ]

})
export class StaffModule { }
