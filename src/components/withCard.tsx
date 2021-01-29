/** @jsx jsx */
import { css,jsx } from '@emotion/react'
import React from 'react'
import {css_elevation, css_hover_option} from './styles';
interface BasicCardProps {
  children: JSX.Element
  className?: string
  elevation?: elevationType
  radius?: string;
  hoverOption?: hoverMoveType | undefined;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined;
}

type elevationType =  0 | 1 | 2
type hoverMoveType = 'up' | 'left' | `right` | `down`


const css_root = css`
  width: 100%;
  height:100%;
  border-radius: 5px;
`

const css_child = css`
  height:100%;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
`


const BasicCard = (Component:React.FC<{ children?:JSX.Element}>) => (props:BasicCardProps) => {
  const elevationValue:elevationType =  props?.elevation || 0;
  const css_hover = props?.hoverOption && css_hover_option[props?.hoverOption];
  return (
  <div css={[css_root,css_elevation[elevationValue],css_hover]} className={props?.className} onClick={props.onClick}>
    <div css={css_child}>
      <Component { ...props}/>
    </div>
  </div>
  )
}

export default BasicCard;