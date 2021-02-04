/** @jsx jsx */
import { css,jsx } from '@emotion/react'
import React from 'react'
import {css_elevation,css_root,css_child, css_hover_option, css_cursor} from './styles';
export interface BasicCardProps {
  children?: JSX.Element
  className?: string
  style?: object
  elevation?: 0 | 1 | 2
  radius?: string;
  hoverType?: 'up' | 'left' | `right` | `down` | 'zoom' | undefined;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined;
}

const withCard = (Component:React.FC<{ children?:JSX.Element | undefined}>) => (props:BasicCardProps) => {
  const elevationValue =  props?.elevation || 0;
  const css_hover = props?.hoverType && css_hover_option[props?.hoverType];
  const css_radius = props?.radius && css`border-radius:${props?.radius};`
  const css_pointer = props?.onClick && css_cursor;
  return (
  <div style={props?.style} css={[css_root,css_elevation[elevationValue],css_hover,css_radius, css_pointer]} className={props?.className} onClick={props.onClick}>
    <div css={css_child}>
      <Component { ...props}/>
    </div>
  </div>
  )
}

export default withCard;