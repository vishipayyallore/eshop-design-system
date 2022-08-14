import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { HeaderModule } from 'projects/design-system/src/lib/components/header/header.module';
import { HeaderComponent } from 'projects/design-system/src/lib/components/header/header.component';
import { MenuLoader } from './menu-loader.component';
import { defaultBrandingVectors } from 'projects/design-system/src/lib/components/branding/constants';


export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [componentWrapperDecorator(HeaderComponent)],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HeaderComponent & MenuLoader> = function(args:any) {
  return {
    moduleMetadata: {
      imports: [CommonModule, HeaderModule, MenuLoader],
    },
    template: `<div class=with-menu>
      <menu-loader [items]="items"></menu-loader>
      <eshop-header></eshop-header>
    </div>`,
    props: { ...args }
  }
}

export const Typical: Story = () => ({ });
Typical.parameters = Object.assign({}, Template);

export const WithMenu = Template.bind({});
WithMenu.args = {
  items: [1,2],
  brandingVectors: defaultBrandingVectors,
};
