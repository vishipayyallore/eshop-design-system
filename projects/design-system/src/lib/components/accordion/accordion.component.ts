import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Observable } from 'rxjs'

import { AccordionItem } from './accordion-item.interface'


@Component({
  selector: 'eshop-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input() isReactiveSurface = true
  @Input() items$!:  Observable<AccordionItem[]>

  toggleItem(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded
  }

}
