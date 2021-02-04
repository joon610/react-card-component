import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Card,BasicCardProps}  from '../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
  args:{
    elevation: 0,
    radius: 0,
    style:{width:"300px",height:"200px",background:"whitesmoke" },
    onClick: undefined
  }
} as Meta;

const Template: Story<BasicCardProps> = (args) =>(<Card {...args} ></Card>);

export const Elevation0 = Template.bind({});
Elevation0.args = {
  elevation: 0,
};

export const Elevation1 = Template.bind({});
Elevation1.args = {
  elevation: 1,
};

export const Elevation2 = Template.bind({});
Elevation2.args = {
  elevation: 2,
};

export const BorderRadius0 = Template.bind({});
BorderRadius0.args = {
  radius: 0,
};

export const BorderRadius1 = Template.bind({});
BorderRadius1.args = {
  radius: 1,
};

export const BorderRadius2 = Template.bind({});
BorderRadius2.args = {
  radius: 2,
};

export const HoverTypeZoom= Template.bind({});
HoverTypeZoom.args = {
  hoverType: "zoom",
};

export const HoverTypeUp= Template.bind({});
HoverTypeUp.args = {
  hoverType: "up",
};

export const HoverTypeDown= Template.bind({});
HoverTypeDown.args = {
  hoverType: "down",
};

export const HoverTypeLeft= Template.bind({});
HoverTypeLeft.args = {
  hoverType: "left",
};

export const HoverTypeRight= Template.bind({});
HoverTypeRight.args = {
  hoverType: "right",
};


export const OnClick= Template.bind({});
OnClick.args = {
  hoverType: "zoom",
  onClick:(e)=>{console.log(e)}
};