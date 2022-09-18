import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ProfileComponent } from './profile.component'
export * from './profile.component'
export * from './profile.service'
export * from './profile-icon.interface'
export * from './copy'
export * from './constants'


@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
