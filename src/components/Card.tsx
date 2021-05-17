/** @jsx jsx */
import { css,jsx } from '@emotion/react'
import React from 'react'
import {css_root,css_child, css_user_style ,css_hover_option, css_pointer, css_border,css_outline, css_background, css_glass_option} from './styles';


export interface glassType  {
  blur?: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;
  transparency?: 0|0.1|0.2|0.3|0.4|0.5|0.6|0.7|0.8|0.9|1;
}
export interface BasicCardProps {
  children?: JSX.Element;
  className?: string;
  style?: object;
  bordered?: boolean;
  outlined?: boolean;
  glass?: boolean;
  glassOption?: glassType;
  background?: string;
  hoverType?: 'up' | 'left' | `right` | `down` | 'zoom' | undefined ;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}



export const Card:React.FC<BasicCardProps> = ({children,background, outlined=true, bordered=false, style={}, hoverType, glass=false, glassOption={}, ...props}) => {

  const css_combine = [
    css_root,
    css_outline(outlined),
    css_border(bordered),
    css_background(background),
    css_pointer(!!props?.onClick),
    css_hover_option(hoverType),
    css_user_style(style),
    css_glass_option(glass,glassOption),
  ];

  return (
  <div css={css_combine} {...props}>
    <div css={[css_child]}>
      {children}
    </div>
  </div>
  )
}