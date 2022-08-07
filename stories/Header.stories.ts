import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { HeaderComponent } from '../projects/design-system/src/lib/components/header/header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Unauthenticated = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {};