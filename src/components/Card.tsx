/** @jsx jsx */
import { css,jsx } from '@emotion/react'
import React from 'react'
import {css_elevation,css_root,css_child, css_hover_option, css_cursor, css_border_radius} from './styles';
export interface BasicCardProps {
  children?: JSX.Element;
  className?: string;
  style?: object;
  elevation?: 0 | 1 | 2;
  radius?: 0 | 1 | 2 | 3 | 4;
  hoverType?: 'up' | 'left' | `right` | `down` | 'zoom' | 'none' ;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Card:React.FC<BasicCardProps> = ({children, elevation=0, radius=1, hoverType='none',...props}) => {
  const css_pointer = props?.onClick && css_cursor;
  const css_merge = [css_root,css_border_radius[radius], css_elevation[elevation],css_hover_option[hoverType], css_pointer];
  return (
  <div  css={css_merge} {...props} >
    <div css={css_child}>
      {children}
    </div>
  </div>
  )
}