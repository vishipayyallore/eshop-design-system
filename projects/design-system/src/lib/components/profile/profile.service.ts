import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject, Observable, ReplaySubject } from 'rxjs'

import { DEFAULT_PROFILE } from './constants'
import { DEFAULT_PROFILE_HEADER } from './copy'
import type { ProfileIcon } from './profile-icon.interface'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userData = new ReplaySubject<any>(1)
  userData$ = this.userData.asObservable()
  
  profileIcon = new BehaviorSubject<ProfileIcon>(DEFAULT_PROFILE)
  profileIcon$ = this.profileIcon.asObservable()

  copyHeader = new BehaviorSubject<string>(DEFAULT_PROFILE_HEADER)
  copyHeader$ = this.copyHeader.asObservable()

  navigateToProfile = new Subject<null>()
  navigateToProfile$ = this.navigateToProfile.asObservable()

}
