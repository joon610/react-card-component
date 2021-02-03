import React from 'react'
import withCard from './withCard'

const Card: React.FC<{ children?:JSX.Element }> = ({children}) =>{
  return <>{children}</>
}

export default withCard(Card);