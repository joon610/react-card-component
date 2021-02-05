# react-card-component

![React Card Component CI](https://github.com/joon610/react-card-component/workflows/React%20Card%20Component%20CI/badge.svg)

## License

- MIT License

## Install

```
 npm i react-card-componet
```

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

### `Common Props` elevation

elevation default = 1;

```js
  type elevationType =  0 | 1 | 2

  import { Card } from 'react-card-component';
  const NewCard = () =><Card elevation={1}><div>HelloWorld</div></Card>);
```

### `Common Props` hoverType

```js
  type hoverMoveType = 'up' | 'left' | `right` | `down` | 'zoom'

  import { Card } from 'react-card-component';
  const NewCard = () =><Card hoverType={"zoom"}><div>HelloWorld</div></Card>);
```

### `Common Props` radius

```js

  import { Card } from 'react-card-component';
  const NewCard = () =><Card raidus={"10px"}><div>HelloWorld</div></Card>);
```
