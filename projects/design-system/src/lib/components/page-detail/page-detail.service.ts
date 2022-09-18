import { Injectable } from '@angular/core'

import { DEFAULT_COPY, ESHOP_SLOGAN } from './constants'


@Injectable({
  providedIn: 'root'
})
export class PageDetailService {
  title?: string

  get copyTitle(){
    return this.title ?? ESHOP_SLOGAN
  }

  getCopy(detail: string){
    if(detail === 'title')
      return this.copyTitle
    return DEFAULT_COPY
  }
}
