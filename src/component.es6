/* component.es6 */
import React from 'react';

export class Component extends React.Component {

  render() {
    if (!this.template) {
      throw new TypeError('No `template` found in component');
    }

    return this.template();
  }
}
