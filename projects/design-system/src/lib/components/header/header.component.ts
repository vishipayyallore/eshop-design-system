import { Component, Input, AfterViewInit, TemplateRef, ViewChild } from '@angular/core'

import { defaultBrandingVectors } from '../branding/constants'


@Component({
  selector: 'eshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  /** 
  * @internal 
  */
  @Input() brandingVectors = defaultBrandingVectors
  /** 
  * @internal 
  */
  @Input() leadingTemplate!: TemplateRef<any>
  /** 
  * @internal 
  */  
  @Input() medialTemplate!: TemplateRef<any>
  /** 
  * @internal 
  */
  @Input() trailingTemplate!: TemplateRef<any>

  /** 
  * @internal 
  */
  @ViewChild('defaultLeadingTemplate') defaultLeadingTemplateRef!: TemplateRef<HTMLElement>
  /** 
  * @internal 
  */  
  @ViewChild('defaultMedialTemplate') defaultMedialTemplateRef!: TemplateRef<HTMLElement>
  /** 
  * @internal 
  */
  @ViewChild('defaultTrailingTemplate') defaultTrailingTemplateRef!: TemplateRef<HTMLElement>

  /** 
  * @internal 
  */  
  ngAfterViewInit(): void {
    setTimeout(this.configureTemplatesInitialState.bind(this))
  }

  private configureTemplatesInitialState(): void {
    if (!this.leadingTemplate) {
      this.leadingTemplate = this.defaultLeadingTemplateRef
    }
    if (!this.medialTemplate) {
      this.medialTemplate = this.defaultMedialTemplateRef
    }
    if (!this.trailingTemplate) {
      this.trailingTemplate = this.defaultTrailingTemplateRef
    }
  }
}
