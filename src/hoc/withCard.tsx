/** @jsx jsx */
import { css,jsx } from '@emotion/react'
import React from 'react'
import {css_elevation,css_root,css_child, css_hover_option} from './styles';

interface BasicCardProps {
  children: JSX.Element
  className?: string
  elevation?: elevationType
  radius?: string;
  hoverType?: hoverMoveType | undefined;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined;
}

type elevationType =  0 | 1 | 2
type hoverMoveType = 'up' | 'left' | `right` | `down` | 'zoom'

const withCard = (Component:React.FC<{ children?:JSX.Element}>) => (props:BasicCardProps) => {
  const elevationValue:elevationType =  props?.elevation || 0;
  const css_hover = props?.hoverType && css_hover_option[props?.hoverType];
  const css_radius = props?.radius && css`border-radius:${props?.radius};`
  return (
  <div css={[css_root,css_elevation[elevationValue],css_hover,css_radius]} className={props?.className} onClick={props.onClick}>
    <div css={css_child}>
      <Component { ...props}/>
    </div>
  </div>
  )
}

export default withCard;