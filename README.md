Pure render decorator
=====================

NOTE: Special thanks for all the work by Félix Girault.  I forked this as I wanted to exclude functions from being checked in the props.

An ES7 decorator to make React components "pure".

Usage
-----

```jsx
import {Component} from 'react';
import pureRender from 'pure-render-exclude-functions';

@pureRender
export default class Test extends Component {
  render() {
    return <div />;
  }
}
```

The above example is the same as using `PureRenderMixin`:

```jsx
var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var Test = React.createClass({
  mixins: [
    PureRenderMixin
  ],

  render: function() {
    return <div></div>;
  }
});
```

As decorators are simply functions, you can also use `pureRender()` without the decorator syntax:

```jsx
import {Component} from 'react';
import pureRender from 'pure-render-exclude-functions';

class Test extends Component {
  render() {
    return <div />;
  }
}

export default pureRender(Test);
```
