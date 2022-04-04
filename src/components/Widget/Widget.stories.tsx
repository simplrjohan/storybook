import React from 'react';
import { Story, Meta } from '@storybook/react';

import Widget  from './Widget';
import {WidgetProps} from "./Widget.types"
import { storiesOf } from '@storybook/react';

export default {
  title: 'Dashboard/Widget',
  component: Widget,
 
  argTypes: {
    // themify:{
    //   options: themeNames,
    //   control: { type: 'radio' },
    //   mapping: themes
    // }
  },
 
} as Meta

const Template: Story<WidgetProps> = (args) => <Widget {...args} />;
storiesOf('Widget', module)


export const HappyWidget = Template.bind({});
HappyWidget.args = {
  currentNumber: 1,
  title: 'Widget Title',
  label: 'Here goes the Label',
  previousNumber:3,
  previousLabel: 'Previous Number',
  currentDirection:true
};

export const SadWidget = Template.bind({});
SadWidget.args = {
  currentNumber: 1,
  title: 'Widget Title',
  label: 'Here goes the Label',
  previousNumber:3,
  previousLabel: 'Previous Number',
  currentDirection:false

};



[HappyWidget,SadWidget].map(story=>{ return story.decorators = [(Story) => <div style={{ width: 500, height: 350 }}><Story /></div>]})