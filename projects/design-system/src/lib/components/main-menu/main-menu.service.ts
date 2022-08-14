import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { AccordionItem } from '../accordion/accordion-item.interface'


@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  readonly items = new BehaviorSubject<AccordionItem[]>([])
  readonly items$ = this.items.asObservable()
}
