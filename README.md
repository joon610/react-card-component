# react-card-component

![React Card Component CI](https://github.com/joon610/react-card-component/workflows/React%20Card%20Component%20CI/badge.svg)

## License

- MIT License

## Install

```
  npm i react-card-componet
```

## Example Page

[React Card Story book!](https://joon610.github.io/react-card-storybook/)

## Usage (Parameta)

<!-- - [`style`](#style)
- [`elevation`](#elevation)
- [`hoverType`](#hoverType) -->

### `Component` Card

```js
  import { Card } from 'react-card-component';
  const NewCard = () =><Card><div>HelloWorld</div></Card>);
```

### `Common Props` style

```js
  import { Card } from 'react-card-component';
  const NewCard = () =><Card style={{"color":"red"}}><div>HelloWorld</div></Card>);
```

### `Common Props` background

```js
  import { Card } from 'react-card-component';
  const NewCard = () =><Card background={"red"}><div>HelloWorld</div></Card>);
```

### `Common Props` hoverType

```js
  type hoverMoveType = 'up' | 'left' | `right` | `down` | 'zoom'

  import { Card } from 'react-card-component';
  const NewCard = () =><Card hoverType={"zoom"}><div>HelloWorld</div></Card>);
```

### `Common Props` bordered

```js

  import { Card } from 'react-card-component';
  const NewCard = () =><Card bordered><div>HelloWorld</div></Card>);
```

### `Common Props` outlined

```js

  import { Card } from 'react-card-component';
  const NewCard = () =><Card outlined><div>HelloWorld</div></Card>);
```
