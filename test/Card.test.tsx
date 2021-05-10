import React from 'react'
import { fireEvent, render } from "@testing-library/react";
import { matchers } from '@emotion/jest'
import '@testing-library/jest-dom'
import {Card} from '../src/components/Card'
import { objectToCssStyle } from '../src/components/utils';
expect.extend(matchers)

describe('<Card>',()=>{
  it('empty snapshot', () => {
    const {container} = render(<Card/>);
    expect(container).toMatchSnapshot();
  });

  it('Rendering Test', ()=>{
    const {getByText} = render(<Card><div>good</div></Card>);
    const childText = getByText('good');
    expect(childText).toBeInTheDocument();
  })

  it('Background', ()=>{
    const {container} = render(<Card background={"red"}><div>good</div></Card>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle('background:red');
    expect(container).toMatchSnapshot();
  })

  it('css Object style',()=>{
    const { container } =render(<Card style={{"width":"300px","background":"red",":hover":{"background":"blue"}}}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle('width:300px');
    expect(firstChild).toHaveStyle('background:red');
    expect(firstChild).toHaveStyleRule("background", "blue", { target: ":hover" });
    expect(container).toMatchSnapshot();
  })

  it('click Card', ()=>{
    const handleClick = jest.fn();
    const { container } =render(<Card  onClick={handleClick}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    fireEvent.click(firstChild);
    expect(firstChild).toHaveStyle('cursor:pointer')
    expect(handleClick).toHaveBeenCalledTimes(1);
  })

  it('bordered ',()=>{
    const { container } =render(<Card bordered/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle({'border-radius':'10px'})
    expect(container).toMatchSnapshot();
  })

  it('outlined ',()=>{
    const { container } =render(<Card outlined/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle({'border':'1px solid #00000010'})
    expect(container).toMatchSnapshot();
  })

  it('outlined && bordered',()=>{
    const { container } =render(<Card outlined bordered/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyle({'border':'1px solid #00000010','border-radius':'10px'});
    expect(container).toMatchSnapshot();
  })

  it('hover zoom', ()=>{
    const { container } =render(<Card hoverType={"zoom"}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("z-index", "10", { target: ":hover" });
    expect(firstChild).toHaveStyleRule("transform", "scale(1.1)", { target: ":hover" });
  })

  it('hover up', ()=>{
    const { container } =render(<Card hoverType={"up"}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate3d(0, -4px, 0)", { target: ":hover" });
  })

  it('hover down', ()=>{
    const { container } =render(<Card hoverType={"down"}/>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate3d(0, 4px, 0)", { target: ":hover" });
  })

  it('hover left', ()=>{
    const { container } =render(<Card hoverType={"left"}><div>good</div></Card>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate3d(-4px, 0, 0)", { target: ":hover" });
  })

  it('hover right',  ()=>{
    const { container } =render(<Card hoverType={"right"}><div>good</div></Card>);
    const firstChild = container.getElementsByTagName('div')[0];
    expect(firstChild).toHaveStyleRule("transform", "translate3d(4px, 0, 0)", { target: ":hover" });
  })

  it('glass', ()=>{
    const { container } =render(<Card glass><div>good</div></Card>);
    expect(container).toMatchSnapshot();
  })

  it('glassOption', async ()=>{
    const { container } = render(<Card glass glassOption={{blur:10,transparency:0.2}}><div>good</div></Card>);
    expect(container).toMatchSnapshot();
  })
})
describe('utils',()=>{
  it('objectToCssStyle',()=>{
    const styleObject = {
      width:"300px",
      height:"200px",
      ":hover":{
        background:"red"
      }
    }

    expect((objectToCssStyle(styleObject))).toEqual('width:300px;height:200px;:hover{background:red}')
  })
})