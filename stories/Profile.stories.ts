import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import type { Meta, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { ProfileModule } from 'projects/design-system/src/lib/components/profile/profile.module';
import { ProfileComponent } from "projects/design-system/src/lib/components/profile/profile.component";

export default {
  title: 'ProfileComponent',
  component: ProfileComponent,
  decorators: [componentWrapperDecorator(ProfileComponent)],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<ProfileComponent> = function(args:any) {
  return {
    moduleMetadata: {
      imports: [CommonModule, ProfileModule],
    },
    template: `<eshop-profile [isShowingIconView]="isShowingIconView"></eshop-profile>`,
    props: { ...args }
  }
}

export const Typical = Template.bind({});

export const Icon = Template.bind({});
Icon.args = {
  isShowingIconView: true,
};
