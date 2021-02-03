import React from 'react'
import { fireEvent, render } from "@testing-library/react";
import { matchers } from '@emotion/jest'
import '@testing-library/jest-dom'
import Card from '../src/components/Card'
expect.extend(matchers)

describe('Card',()=>{
  // const Component = () => <Card><div>good</div></Card>;

  it('empty snapshot', () => {
    const {container} = render(<Card/>);
    expect(container).toMatchSnapshot();
  });

  it('Rendering Test', ()=>{
    const {getByText} = render(<Card><div>good</div></Card>);
    const childText = getByText('good');
    expect(childText).toBeInTheDocument();
  })

  it('css Object style',()=>{
    const { container } =render(<Card style={{"width":"300px","background":"red"}}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle('width:300px');
    expect(firstChild).toHaveStyle('background:red');
  })

  it('click Card', ()=>{
    const handleClick = jest.fn();
    const { container } =render(<Card  onClick={handleClick}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    fireEvent.click(firstChild);
    expect(firstChild).toHaveStyle('cursor:pointer')
    expect(handleClick).toHaveBeenCalledTimes(1);
  })

  it('radius',()=>{
    const { container } =render(<Card radius={"20px"}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle({borderRadius:'20px'})
    expect(container).toMatchSnapshot();
  })

  it('elevationType 0',()=>{
    const { container } =render(<Card elevation={0}/>);
    expect(container).toMatchSnapshot();
  })

  it('elevationType 1',()=>{
    const { container } =render(<Card elevation={1}/>);
    expect(container).toMatchSnapshot();
  })

  it('elevationType 2',()=>{
    const { container } =render(<Card elevation={2}/>);
    expect(container).toMatchSnapshot();
  })

  it('hover zoom', async ()=>{
    const { container } =render(<Card hoverType={"zoom"}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("z-index", "10", { target: ":hover" });
    expect(firstChild).toHaveStyleRule("transform", "scale(1.2)", { target: ":hover" });
  })

  it('hover up', async ()=>{
    const { container } =render(<Card hoverType={"up"}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(0px, -4px)", { target: ":hover" });
  })

  it('hover down', async ()=>{
    const { container } =render(<Card hoverType={"down"}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(0px, 4px)", { target: ":hover" });
  })

  it('hover left', async ()=>{
    const { container } =render(<Card hoverType={"left"}><div>good</div></Card>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(-4px, 0px)", { target: ":hover" });
  })

  it('hover right', async ()=>{
    const { container } =render(<Card hoverType={"right"}><div>good</div></Card>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate(4px, 0px)", { target: ":hover" });
  })
})
