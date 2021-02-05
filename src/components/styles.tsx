import { css } from '@emotion/react'

export const css_root = css`
  width: 100%;
  height:100%;
  background:white;
  color:dimgray;
  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
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

export const css_user_style = (style:object|undefined) => (css`${objectToCssStyle(style)}`);

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


const css_hover_up = css`
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, -3px, 0);
  }
`
const css_hover_down = css`
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(0, 3px, 0);
  }
`
const css_hover_left = css`
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(-3px, 0, 0);
  }
`
const css_hover_right = css`
  :hover{
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: translate3d(3px, 0, 0);
  }
`
const css_hover_zoom = css`
  :hover{
    z-index:10;
    border-color: #1EA7FD50;
    box-shadow: rgba(0, 0, 0, 0.06) 0 3px 10px 0;
    transform: scale(1.1);
  }
`

const objectToCssStyle = (object:object|undefined) => (JSON.stringify(object).replace(/"/g,'').replace(/((:{))/g,'{').replace(/,/g,';').slice(1,-1))
