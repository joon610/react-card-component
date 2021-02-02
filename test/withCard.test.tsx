import React from 'react'
import { fireEvent, render } from "@testing-library/react";
import { matchers } from '@emotion/jest'
import '@testing-library/jest-dom'
import withCard from '../src/components/withCard'
expect.extend(matchers)

describe('HOC writchCard',()=>{
  const ChildComponent = (props:any) => (<div>{props.children}</div>);
  const Component = withCard(ChildComponent);

  it('empty snapshot', () => {
    const {container} = render(<Component><div>good</div></Component>);
    expect(container).toMatchSnapshot();
  });

  it('Rendering Test', ()=>{
    const {getByText} = render(<Component><div>good</div></Component>);
    const childText = getByText('good');
    expect(childText).toBeInTheDocument();
  })

  it('click Card', ()=>{
    const handleClick = jest.fn();
    const { container } =render(<Component  onClick={handleClick}><div>good</div></Component>);
    const firstChild = container.getElementsByTagName('div')[0];
    fireEvent.click(firstChild);
    expect(firstChild).toHaveStyle('cursor:pointer')
    expect(handleClick).toHaveBeenCalledTimes(1);
  })

  it('radius',()=>{
    const { container } =render(<Component radius={"20px"}><div>good</div></Component>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle({borderRadius:'20px'})
    expect(container).toMatchSnapshot();
  })

  it('elevationType 0',()=>{
    const { container } =render(<Component elevation={0}><div>good</div></Component>);
    expect(container).toMatchSnapshot();
  })

  it('elevationType 1',()=>{
    const { container } =render(<Component elevation={1}><div>good</div></Component>);
    expect(container).toMatchSnapshot();
  })

  it('elevationType 2',()=>{
    const { container } =render(<Component elevation={2}><div>good</div></Component>);
    expect(container).toMatchSnapshot();
  })

  it('hover zoom', async ()=>{
    const { container } =render(<Component hoverType={"zoom"}><div>good</div></Component>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("z-index", "10", { target: ":hover" });
    expect(firstChild).toHaveStyleRule("transform", "scale(1.2)", { target: ":hover" });
  })

  it('hover up', async ()=>{
    const { container } =render(<Component hoverType={"up"}><div>good</div></Component>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(0px, -4px)", { target: ":hover" });
  })

  it('hover down', async ()=>{
    const { container } =render(<Component hoverType={"down"}><div>good</div></Component>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(0px, 4px)", { target: ":hover" });
  })

  it('hover left', async ()=>{
    const { container } =render(<Component hoverType={"left"}><div>good</div></Component>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(-4px, 0px)", { target: ":hover" });
  })

  it('hover right', async ()=>{
    const { container } =render(<Component hoverType={"right"}><div>good</div></Component>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(4px, 0px)", { target: ":hover" });
  })
})
