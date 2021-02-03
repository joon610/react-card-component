import React from 'react'
import withCard from './withCard'

const Card: React.FC<{ children?:JSX.Element }> = withCard(({children}) =>{
  return <>{children}</>
})

export default Card;