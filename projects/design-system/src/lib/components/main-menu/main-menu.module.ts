import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  exports: [
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainMenuModule { }
