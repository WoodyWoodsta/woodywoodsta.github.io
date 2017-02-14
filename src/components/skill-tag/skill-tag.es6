/* skill-bubble.es6 */
import React from 'react';
import { Component } from '../../component';
import './skill-tag.css';

export class SkillTag extends Component {

  // === Template ===
  template() {
    return (
      <div styleName="wrapper">
        <div styleName="parallelogram"></div>
        { this.props.children }
      </div>
    );
  }
}
