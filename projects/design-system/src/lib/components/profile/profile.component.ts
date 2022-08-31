import { Component, Input } from '@angular/core'

import { ProfileService } from './profile.service'
import { DEFAULT_PROFILE_HEADER } from './copy'


@Component({
  selector: 'eshop-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() isShowingIconView?: boolean
  @Input() isShowingPageView?: boolean
  profileIcon$ = this.profileService.profileIcon$

  copy = { header: DEFAULT_PROFILE_HEADER }

  constructor(private profileService: ProfileService) { }

  onClickProfileIcon() {
    this.profileService.navigateToProfile.next(null)
  }

}
