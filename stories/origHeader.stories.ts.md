import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { 
  Component, Input, OnChanges, 
  TemplateRef, ViewChildren 
} from '@angular/core';
import { MainMenuService } from 'projects/design-system/src/lib/components/main-menu/main-menu.service';
import { HeaderModule } from 'projects/design-system/src/lib/components/header/header.module';
import { HeaderComponent } from 'projects/design-system/src/lib/components/header/header.component';

@Component({
  template: `<ng-content></ng-content>
  <span class="item content" *ngFor="let content of contents">{{ content }}</span>`,
  selector: 'mount'
})
class MountComponent implements OnChanges { 
  @ViewChildren('.item.content') cards!: TemplateRef<any>[]

  @Input() set props (props: {items?:any[]}) {
    console.log({props})
    this.contents = (props?.items ?? []).map(String)
  }
  contents: string[] = []
  constructor(private mainMenuService: MainMenuService) {}

  ngOnChanges() {
    this.mainMenuService.items.next(this.contents.map(this.preprocessItem))
    console.log(this.contents)
  }

  private preprocessItem(_item: any, index: number) {
    return { expandedTemplate: this.cards[index], collapsedTemplate: this.cards[index] }
  }
}

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [MountComponent],
      imports: [CommonModule, HeaderModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<MountComponent> = function(args: any = {}) {
  return {
    component: HeaderComponent,
    template: 
    `<mount [items]="showMenuItems && args.items">
      <eshop-header></eshop-header>
    </mount>`,
    props: args,
    argTypes: {
      showMenuItems: {
        control: {type: 'boolean'},
        description: 'show menu items in header',
      },
    }, 
  }
}

export const Typical: Story = (args) => ({ props: args });
Typical.parameters = {
  component: HeaderComponent,
  template: 
  `<mount [props]="headerSetup">
    <eshop-header></eshop-header>
  </mount>`,
};
Typical.args = {
  items: [1,2]
}

/*export const Unauthenticated = Template.bind({});

export const Authenticated = Template.bind({});
Authenticated.args = {
  props: {items: [1,2] }
}
*/