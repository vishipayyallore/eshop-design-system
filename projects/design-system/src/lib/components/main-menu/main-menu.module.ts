import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AccordionModule } from '../accordion/accordion.module'
import { MainMenuComponent } from './main-menu.component'
export * from './main-menu.component'
export * from './main-menu.service'


@NgModule({
  declarations: [
    MainMenuComponent
  ],
  exports: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ]
})
export class MainMenuModule { }
