import { css } from '@emotion/react'


export const css_elevation =[
  css`box-shadow: none;`,
  css`box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);`,
  css`box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);`,
]


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
`
}