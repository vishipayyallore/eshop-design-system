import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

import { ProfileService } from "projects/design-system/src/lib/components/profile/profile.service"


@Component({
  standalone: true,
  imports: [ CommonModule ],
  template: `<span class="item content" *ngIf=debug>[PROFILE LOADER]</span>`,
  selector: 'profile-loader'
})
export class ProfileLoader { 
  @Input() debug = false
  @Input() set copyHeader (header: string) {
    if(header) {
      this.profileService.copyHeader.next(header)
    }
  }
  constructor(private profileService: ProfileService) {}
}
