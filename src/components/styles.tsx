import { css } from '@emotion/react'

export const css_root = css`
  width: 100%;
  height:100%;
  border-radius: 5px;
  background:white;
  color:dimgray;
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


export const css_cursor = css`
  cursor:pointer;
`

export const css_hover_option = {
  up: css`
    transition:  transform 0.25s;
    :hover{
      transform: translate(0px, -4px)
    }
  `,
  down: css`
    transition:  transform 0.25s;
    :hover{
      transform: translate(0px, 4px)
    }
  `,
  left: css`
    transition:  transform 0.25s;
    :hover{
      transform: translate(-4px, 0px)
    }
  `,
  right: css`
    transition:  transform 0.25s;
    :hover{
      transform: translate(4px, 0px)
    }
  `,
  zoom: css`
    transition: transform 0.25s;
    :hover{
      z-index:10;
      transform: scale(1.2);
    }
  `
}