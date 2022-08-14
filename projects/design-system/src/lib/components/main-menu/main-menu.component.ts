import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { AccordionItem } from '../accordion/accordion-item.interface'
import { MainMenuService } from './main-menu.service'


@Component({
  selector: 'eshop-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Input() isExpandable = false;
  
  items$!: Observable<AccordionItem[]>

  constructor(private mainMenuService: MainMenuService) { }

  ngOnInit(): void {
    this.items$ = this.mainMenuService.items$
  }

}
