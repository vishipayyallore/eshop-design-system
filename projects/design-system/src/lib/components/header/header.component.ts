import { Component, Input, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { defaultBrandingVectors } from '../branding/constants';

@Component({
  selector: 'eshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @Input() brandingVectors = defaultBrandingVectors

  @Input() leadingTemplate!: TemplateRef<any>;
  @Input() medialTemplate!: TemplateRef<any>;
  @Input() trailingTemplate!: TemplateRef<any>;

  @ViewChild('defaultLeadingTemplate') defaultLeadingTemplateRef!: TemplateRef<HTMLElement>;
  @ViewChild('defaultMedialTemplate') defaultMedialTemplateRef!: TemplateRef<HTMLElement>;
  @ViewChild('defaultTrailingTemplate') defaultTrailingTemplateRef!: TemplateRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.configureTemplatesInitialState()
  }

  private configureTemplatesInitialState(): void {
    if (!this.leadingTemplate) {
      this.leadingTemplate = this.defaultLeadingTemplateRef;
    }
    if (!this.medialTemplate) {
      this.medialTemplate = this.defaultMedialTemplateRef;
    }
    if (!this.trailingTemplate) {
      this.trailingTemplate = this.defaultTrailingTemplateRef;
    }
  }
}
