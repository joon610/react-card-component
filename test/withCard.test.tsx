import React from 'react'
import { render } from "@testing-library/react";
import { matchers } from '@emotion/jest'
import '@testing-library/jest-dom'

import withCard from '../src/components/withCard'
expect.extend(matchers)

describe('Test writchCard',()=>{
  const ChildComponent = (props:any) => (<div>{props.children}</div>);
  const Component = withCard(ChildComponent);
  it('Rendering Test', ()=>{
    const {getByText} = render(<Component ><div>good</div></Component>);
    const childText = getByText('good');
    expect(childText).toBeInTheDocument();
  })

})