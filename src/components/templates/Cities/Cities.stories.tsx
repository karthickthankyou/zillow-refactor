import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Cities from './Cities'

export default {
  title: 'src/components/templates/Cities',
  component: Cities,
} as ComponentMeta<typeof Cities>

const Template: ComponentStory<typeof Cities> = (args) => <Cities {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
