import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BrandingComponent } from './branding.component'
export * from './branding.component'
export * from './branding.type'
export * from './branding-vectors.enum'
export * from './constants'


@NgModule({
  declarations: [
    BrandingComponent
  ],
  exports: [
    BrandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BrandingModule { }
