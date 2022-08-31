import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject, Observable } from 'rxjs'

import { DEFAULT_PROFILE } from './constants'
import type { ProfileIcon } from './profile-icon.interface'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileIcon = new BehaviorSubject<ProfileIcon>(DEFAULT_PROFILE)
  profileIcon$: Observable<ProfileIcon>

  navigateToProfile = new Subject<null>()
  navigateToProfile$: Observable<null>

  constructor() {
    this.profileIcon$ = this.profileIcon.asObservable()
    this.navigateToProfile$ = this.navigateToProfile.asObservable()
  }

}
