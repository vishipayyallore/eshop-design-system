import { Component, Input } from '@angular/core'
import { ChangeDetectionStrategy } from '@angular/core'

import { ProfileService } from './profile.service'
import { DEFAULT_PROFILE_HEADER } from './copy'


@Component({
  selector: 'eshop-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @Input() isShowingIconView?: boolean

  get isShowingPageView() {
    return !this.isShowingIconView;
  }

  get profileIcon$ () {
    return this.profileService.profileIcon$
  }

  copy = { header: DEFAULT_PROFILE_HEADER }

  constructor(private profileService: ProfileService) { 
    (window as any).component = this
  }

  onClickProfileIcon() {
    this.profileService.navigateToProfile.next(null)
  }

}
