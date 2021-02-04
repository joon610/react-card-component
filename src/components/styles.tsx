import { css } from '@emotion/react'

export const css_root = css`
  width: 100%;
  height:100%;
  border-radius: 5px;
  background:white;
  color:dimgray;
  border: 1px solid #00000010;
  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
`

export const css_child = css`
  height:100%;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
`

export const css_elevation =[
  css`box-shadow: none;`,
  css`box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);`,
  css`box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);`,
]

export const css_border_radius = [
  css`border-radius: 0px;`,
  css`border-radius: 5px;`,
  css`border-radius: 10px;`,
  css`border-radius: 15px;`,
  css`border-radius: 20px;`
]


export const css_cursor = css`
  cursor:pointer;
`

export const css_hover_option = {
  up: css`
    :hover{
      border-color: #1EA7FD50;
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
      transform: translate3d(0, -4px, 0);
    }
  `,
  down: css`
    :hover{
      border-color: #1EA7FD50;
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
      transform: translate3d(0, 4px, 0);
    }
  `,
  left: css`
    :hover{
      border-color: #1EA7FD50;
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
      transform: translate3d(-4px, 0, 0);
    }
  `,
  right: css`
    :hover{
      border-color: #1EA7FD50;
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
      transform: translate3d(4px, 0, 0);
    }
  `,
  zoom: css`
    :hover{
      z-index:10;
      border-color: #1EA7FD50;
      transform: scale(1.1);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }
  `,
  none:{}
}