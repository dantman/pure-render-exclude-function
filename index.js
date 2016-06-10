/**
 * @author David Dolheguy <david.dolheguy@flexitechsolutions.co.uk>
 * @license MIT
 */
'use strict';

var shallowEqual = require('fbjs/lib/shallowEqual');

/**
 * *
 * @param obj takes the object which we want to exclued the props from
 */
function excludeFunctions(obj) {
  var result = {};

  for (var prop in obj) {
    if (typeof obj[prop] !== "function") {
      result[prop] = obj[prop];
    }
  }

  return result;
}

/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual(excludeFunctions(this.props), excludeFunctions(nextProps)) || !shallowEqual(this.state, nextState);
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;
}



module.exports = pureRenderDecorator;
