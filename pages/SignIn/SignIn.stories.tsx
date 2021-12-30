import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SignIn from './SignIn'

export default {
  title: 'pages/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
