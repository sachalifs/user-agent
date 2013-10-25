
# user-agent

  User agent parser.
  Parse client's browser version.

## Installation

  Install with [component(1)](http://component.io):

    $ component install slifszyc/user-agent

## API

### ua#ie

Used to know which browser version the client is using

```js
ua.ie().is(9)   // returns true when browser is IE9, false otherwise
ua.ie().lt(9)   // returns true when browser is lower than IE9, false otherwise
ua.ie().lte(9)  // returns true when browser is lower than equals IE9, false otherwise
ua.ie().gt(9)   // returns true when browser is greater than IE9, false otherwise
ua.ie().gte(9)  // returns true when browser is greater than equals IE9, false otherwise
```

You can call these methods alternatively with
```js
ua.ff()
ua.chrome()
ua.safari()
```

## License

  MIT
