import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { HeaderComponent } from 'projects/design-system/src/lib/components/header/header.component';
import { HeaderModule } from 'projects/design-system/src/lib/components/header/header.module';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderModule, CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HeaderComponent> = () => ({
  component: HeaderComponent,
  template: `<eshop-header></eshop-header>`,
});

export const Unauthenticated = Template.bind({});

export const Authenticated = Template.bind({});
Authenticated.args = {

}
