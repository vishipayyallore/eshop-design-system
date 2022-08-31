import { NgModule } from "@angular/core"

import { HeaderModule } from "./components/header/header.module"
import { FooterComponent } from './components/footer/footer.component'
import { ProfileModule } from "./components/profile/profile.module"
import { MainMenuModule } from "./components/main-menu/main-menu.module"
import { PageDetailModule } from "./components/page-detail/page-detail.module"
import { BrandingModule } from "./components/branding/branding.module"
import { AccordionModule } from "./components/accordion/accordion.module"

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    HeaderModule, ProfileModule, MainMenuModule, 
    PageDetailModule, BrandingModule, AccordionModule
  ],
})
export class DesignSystemModule {}
