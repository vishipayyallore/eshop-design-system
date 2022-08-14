import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { AccordionModule } from '../accordion/accordion.module';



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
