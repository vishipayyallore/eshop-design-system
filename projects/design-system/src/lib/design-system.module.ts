import { NgModule } from "@angular/core"

import { HeaderModule } from "./components/header/header.module"
export * from "./components/header/header.module"
import { ProfileModule } from "./components/profile/profile.module"
export * from "./components/profile/profile.module"
import { MainMenuModule } from "./components/main-menu/main-menu.module"
export * from "./components/main-menu/main-menu.module"
import { PageDetailModule } from "./components/page-detail/page-detail.module"
export * from "./components/page-detail/page-detail.module"
import { BrandingModule } from "./components/branding/branding.module"
export * from "./components/branding/branding.module"
import { AccordionModule } from "./components/accordion/accordion.module"
export * from "./components/accordion/accordion.module"
import { FooterModule } from "./components/footer/footer.module"
export *from "./components/footer/footer.module"

@NgModule({
  imports: [
    HeaderModule, ProfileModule, MainMenuModule,
    PageDetailModule, BrandingModule, AccordionModule,
    FooterModule
  ],
  exports: [
    HeaderModule, ProfileModule, MainMenuModule,
    PageDetailModule, BrandingModule, AccordionModule,
    FooterModule
  ],
})
export class DesignSystemModule { }
