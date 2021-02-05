import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Card,BasicCardProps}  from '../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
  args:{
    bordered: false,
    outlined: false,
    style:{width:"300px",height:"200px"},
    onClick: undefined
  }
} as Meta;

const Template: Story<BasicCardProps> = (args) =>(<Card {...args} />);


export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const Outlined = Template.bind({});
Bordered.args = {
  outlined: true,
};

export const HoverTypeZoom= Template.bind({});
HoverTypeZoom.args = {
  bordered: true,
  outlined: true,
  hoverType: "zoom",
};

export const HoverTypeUp= Template.bind({});
HoverTypeUp.args = {
  bordered: true,
  outlined: true,
  hoverType: "up",
};

export const HoverTypeDown= Template.bind({});
HoverTypeDown.args = {
  bordered: true,
  outlined: true,
  hoverType: "down",
};

export const HoverTypeLeft= Template.bind({});
HoverTypeLeft.args = {
  bordered: true,
  outlined: true,
  hoverType: "left",
};

export const HoverTypeRight= Template.bind({});
HoverTypeRight.args = {
  bordered: true,
  outlined: true,
  hoverType: "right",
};


export const OnClick= Template.bind({});
OnClick.args = {
  hoverType: "zoom",
  onClick:(e)=>{console.log(e)}
};