import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BrandingModule } from '../branding/branding.module';
import { MainMenuModule } from '../main-menu/main-menu.module';
import { PageDetailModule } from '../page-detail/page-detail.module';



@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    BrandingModule,
    MainMenuModule,
    PageDetailModule
  ]
})
export class HeaderModule { }
