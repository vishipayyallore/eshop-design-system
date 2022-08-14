import { CommonModule } from "@angular/common"
import { Component, ElementRef, Input, QueryList, TemplateRef, ViewChildren } from "@angular/core"
import { AccordionItem } from "projects/design-system/src/lib/components/accordion/accordion-item.interface"

import { MainMenuService } from "projects/design-system/src/lib/components/main-menu/main-menu.service"


@Component({
  standalone: true,
  imports: [ CommonModule ],
  template: `
  <ng-template *ngFor="let content of contents" #templates>
    <span class="item content">{{ content }}</span>
  </ng-template>`,
  selector: 'menu-loader'
})
export class MenuLoader { 
  @ViewChildren('templates') templates!: QueryList<TemplateRef<any>>

  @Input() set items (items: any[]) {
    this.contents = (items ?? []).map(String)
    const self = this
    setTimeout(function(){
      self.mainMenuService.items
        .next(self.contents.map(self.preprocessItem.bind(self)))
    },20)
  }
  contents: string[] = []
  constructor(private mainMenuService: MainMenuService, private elR: ElementRef) {}

  private preprocessItem(_item: any, index: number) {
    if (index > this.templates.length - 1) return {} as AccordionItem
    const template = this.templates.find((_template: TemplateRef<any>, i) => index == i)!
    return { collapsedTemplate: template }
  }
}
