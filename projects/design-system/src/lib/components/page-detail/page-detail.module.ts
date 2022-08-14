import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDetailComponent } from './page-detail.component';



@NgModule({
  declarations: [
    PageDetailComponent
  ],
  exports: [
    PageDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageDetailModule { }
