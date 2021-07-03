<p align="center"><img src="https://raw.githubusercontent.com/joon610/react-card-component/main/logo.svg"></p>

<p align="center">
  <a href="https://github.com/joon610/react-card-component"><img src="https://github.com/joon610/react-card-component/workflows/React%20Card%20Component%20CI/badge.svg" alt="Build Status"></a>
  <a href="https://github.com/joon610/react-card-component"><img src="https://cdn.jsdelivr.net/gh/nikku/works-on-my-machine@v0.2.0/badge.svg" alt="myPc"></a>
  <a href="https://github.com/joon610/react-card-component"><img src="https://img.shields.io/badge/license-MIT-lightgrey.svg" alt="license"></a>
</p>

<h1 align="center">react-card-component</h1>

## Don't Use It It's not finished

## License

- MIT License

## Install

```
  npm i react-card-component
```

## Demo & Examples

[Demo](https://joon610.github.io/react-card-storybook/)

## `Props`

### glass, glassOption

```js
  import { Card } from 'react-card-component';

  // default blur:4, transparency:0.2
  const NewCard = () => <Card glass><div>HelloWorld</div></Card>);

  const NewCard = () => <Card glass glassOption={{blur:5,transparency: 0.1}}><div>HelloWorld</div></Card>);
```

### style

```js
  import Card from 'react-card-component';
  const NewCard = () => <Card style={{"color":"red"}}><div>HelloWorld</div></Card>);
```

### background

```js
  import Card from 'react-card-component';
  const NewCard = () => <Card background={"red"}><div>HelloWorld</div></Card>);
```

### hoverType

```js
  type hoverMoveType = 'up' | 'left' | `right` | `down` | 'zoom'

  import Card from 'react-card-component';
  const NewCard = () => <Card hoverType={"zoom"}><div>HelloWorld</div></Card>);
```

### bordered

```js

  import Card from 'react-card-component';
  const NewCard = () => <Card bordered><div>HelloWorld</div></Card>);
```

### outlined

```js

  import Card from 'react-card-component';
  const NewCard = () => <Card outlined><div>HelloWorld</div></Card>);
```
