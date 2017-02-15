/* project-section.es6 */
import React from 'react';
import { Component } from '../../component';
import './project-section.css';

import { SkillTag } from '../skill-tag/skill-tag';

export class ProjectSection extends Component {

  // === Template ===
  template() {
    const skillTags = this.props.techs.map((skill, index) => <SkillTag key={index}><span>{skill}</span></SkillTag>);

    return (
      <div styleName="wrapper" className={`
        ${this.props.className}
        ${this.props.alternate ? 'reverse' : ''}
      `}>
        <div styleName="image"
          style={{ backgroundImage: `url(${this.props.imgUrl})` }}>
        </div>
        <h1>{ this.props.title }</h1>
        <p styleName="description">{ this.props.description }</p>
        <div styleName="skill-wrapper" className={`layout horizontal wrap ${this.props.alternate ? 'end-justified' : 'start-justified'}`}>
          { skillTags }
        </div>
      </div>
    );
  }
}
