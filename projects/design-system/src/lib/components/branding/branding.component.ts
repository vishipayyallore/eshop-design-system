import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core'

import { BrandingVectors } from './branding-vectors.enum'
import { BrandingType } from './branding.type'
import { defaultBrandingVectors } from './constants'


@Component({
  selector: 'eshop-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandingComponent implements OnInit {
  static readonly DEFAULT_BRANDING_VECTORS = defaultBrandingVectors

  private svgRegistry = new Map<BrandingVectors, any>()

  mediaSize: keyof BrandingType = 'mobile'

  @Input() vectors: BrandingType = 
    BrandingComponent.DEFAULT_BRANDING_VECTORS
  get vector () {
    return this.svgRegistry.get(this.vectors[this.mediaSize])
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize() {
    this.mediaSize = window.innerWidth < 768 
      ? 'mobile' 
      : window.innerWidth > 1024 
        ? 'desktop' 
        : 'tablet'
  }

  ngOnInit(): void {
    this.svgRegistry.set(BrandingVectors.default, '/assets/branding/default.svg')
    this.svgRegistry.set(BrandingVectors.defaultMonochrome, '/assets/branding/default-monochrome.svg')
    this.svgRegistry.set(BrandingVectors.defaultMonochromeBlack, '/assets/branding/default-monochrome-black.svg')
    this.svgRegistry.set(BrandingVectors.defaultMonochromeWhite, '/assets/branding/default-monochrome-white.svg')
    this.svgRegistry.set(BrandingVectors.isolatedLayout, '/assets/branding/isolated-layout.svg')
    this.svgRegistry.set(BrandingVectors.isolatedMonochromeBlack, '/assets/branding/isolated-monochrome-black.svg')
    this.svgRegistry.set(BrandingVectors.isolatedMonochromeWhite, '/assets/branding/isolated-monochrome-white.svg')

    this.onWindowResize()
  }

}
