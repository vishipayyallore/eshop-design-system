import type { Meta, Story } from '@storybook/angular'
import { CommonModule } from '@angular/common'

import { ProfileModule } from 'projects/design-system/src/lib/components/profile/profile.module'
import { ProfileComponent } from "projects/design-system/src/lib/components/profile/profile.component"
import { ProfileLoader } from './profile-loader.component'
import { DEFAULT_PROFILE_HEADER } from 'projects/design-system/src/lib/components/profile/copy'


export default {
  title: 'ProfileComponent',
  component: ProfileComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta

const Template: Story<ProfileComponent & Partial<ProfileLoader>> = function(args:any) {
  return {
    moduleMetadata: {
      imports: [CommonModule, ProfileModule, ProfileLoader],
    },
    template: `<div class=with-profile>
    <profile-loader [copyHeader]="copyHeader"></profile-loader>
    <eshop-profile [isShowingIconView]="isShowingIconView"></eshop-profile>
  </div>`,
    props: { ...args }
  }
}

export const Typical = Template.bind({})
Typical.args = {
  copyHeader: DEFAULT_PROFILE_HEADER
}

export const Icon = Template.bind({})
Icon.args = {
  isShowingIconView: true,
  copyHeader: DEFAULT_PROFILE_HEADER
}
