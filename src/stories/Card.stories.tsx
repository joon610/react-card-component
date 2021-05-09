import React from 'react';
import { css } from '@emotion/react'
import { Story, Meta } from '@storybook/react/types-6-0';
import {Card,BasicCardProps}  from '../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
  args:{
    bordered: false,
    outlined: true,
    style:{width:"300px",height:"200px"},
    onClick: undefined
  }
} as Meta;

const Template: Story<BasicCardProps> = (args) =>{
  document.body.style.background = ""
  return (<Card {...args} />)
};
const GlassTemplate: Story<BasicCardProps> = (args) =>{
  return (
    <div style={{padding:"200px", background: " url(https://images.unsplash.com/photo-1544306094-e2dcf9479da3) no-repeat"}}>
      <Card {...args} />
    </div>
    )
};


export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const HoverTypeZoom= Template.bind({});
HoverTypeZoom.args = {
  bordered: true,
  outlined: true,
  hoverType: "zoom"
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


export const Glass= GlassTemplate.bind({});
Glass.args = {
  glass: true,
};

export const GlassOption= GlassTemplate.bind({});
GlassOption.args = {
  glass: true,
  glassOption: {blur:5,transparency: 0.1}
};