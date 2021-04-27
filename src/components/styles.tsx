import { css } from '@emotion/react'
import {objectToCssStyle} from './utils'

export const css_root = css`
  width: 100%;
  height:100%;
  background:white;
  color:dimgray;
`

export const css_child = css`
  height:100%;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
`

export const css_border = (hasFlg:boolean|undefined) => hasFlg && css`border-radius: 10px;`

export const css_outline = (hasFlg:boolean|undefined) => hasFlg && css`border: 1px solid #00000010;`

export const css_pointer = (hasFlg:boolean|undefined) => hasFlg && css`cursor:pointer;`

export const css_background = (color:string|undefined) => css`background:${color||`#f5f5f5`};`

export const css_user_style = (style:object|undefined) => css`${objectToCssStyle(style)}`

export const css_hover_option =(type:string|undefined)=> {
  switch (type) {
    case 'up':
      return css_hover_up;
    case 'down':
      return css_hover_down;
    case 'left':
      return css_hover_left;
    case 'right':
      return css_hover_right;
    case 'zoom':
      return css_hover_zoom;
    default:
      break;
  }
}

export const css_glass_option =  (hasFlg:boolean|undefined) => hasFlg && css_glass;

const css_glass = css`
	position: relative;
	z-index: 1;
	background: inherit;
	overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(10px);
    margin: -20px;
  }

`


const css_transition = css`transition: background 150ms ease-out, transform 150ms ease-out;`

const css_hover_up = css`
  ${css_transition}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, -4px, 0);
  }
`
const css_hover_down = css`
  ${css_transition}

  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, 4px, 0);
  }
`
const css_hover_left = css`
  ${css_transition}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(-4px, 0, 0);
  }
`
const css_hover_right = css`
  ${css_transition}
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(4px, 0, 0);
  }
`
const css_hover_zoom = css`
  ${css_transition}
  :hover{
    z-index:10;
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: scale(1.1);
  }
`

