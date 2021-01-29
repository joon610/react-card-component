import React from 'react'

import withCard from '../src/components/withCard'
import { render } from "@testing-library/react";

describe('Test writchCard',()=>{
  it('success rendering', ()=>{
    const mockComponent = jest.fn(()=>null);
    const Component = withCard(mockComponent);
    const ChildComponent = () => (<div>child</div>);
    render(<Component ><ChildComponent/></Component>);
  })
})