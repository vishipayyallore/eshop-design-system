import { NgModule } from "@angular/core"

import { HeaderModule } from "./components/header/header.module"
import { ProfileModule } from "./components/profile/profile.module"
import { MainMenuModule } from "./components/main-menu/main-menu.module"
import { PageDetailModule } from "./components/page-detail/page-detail.module"
import { BrandingModule } from "./components/branding/branding.module"
import { AccordionModule } from "./components/accordion/accordion.module"
import { FooterModule } from "./components/footer/footer.module"

@NgModule({
  imports: [
    HeaderModule, ProfileModule, MainMenuModule,
    PageDetailModule, BrandingModule, AccordionModule,
    FooterModule
  ],
})
export class DesignSystemModule { }
