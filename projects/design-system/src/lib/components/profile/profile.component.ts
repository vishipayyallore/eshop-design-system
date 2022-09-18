import { Component, Input } from '@angular/core'
import { ChangeDetectionStrategy } from '@angular/core'

import { ProfileService } from './profile.service'


@Component({
  selector: 'eshop-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @Input() isShowingIconView?: boolean

  get isShowingPageView() {
    return !this.isShowingIconView
  }

  constructor(/** @internal */ public profileService: ProfileService) {  }

  /** 
  * @internal 
  */
  onClickProfileIcon() {
    this.profileService.navigateToProfile.next(null)
  }

}
