import { TemplateRef } from "@angular/core"


export interface AccordionItem {
  collapsedTemplate: TemplateRef<any>
  expandedTemplate?: TemplateRef<any>
  isExpanded?: boolean
}
