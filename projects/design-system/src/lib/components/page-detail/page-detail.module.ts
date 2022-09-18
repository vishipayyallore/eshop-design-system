import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PageDetailComponent } from './page-detail.component'
export * from './page-detail.component'
export * from './page-detail.service'
export * from './constants'


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
