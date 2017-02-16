/* me-page.es6 */
import React from 'react';
import { Component } from '../../component';
import './me-page.css';

import { Page } from '../page/page';
import { SkillTag } from '../skill-tag/skill-tag';

export class MePage extends Component {
  constructor(props) {
    super(props);

    this.skills = ['Javascript',
      'ES6',
      'Google Polymer',
      'React',
      'HTML5',
      'CSS',
      'Redux',
      'PWA',
      'SPA',
      'Angular',
      'Babel',
      'Rollup',
      'Browserify',
      'Webpack',
      'Electron',
      'NW.js',
      'Koa.js',
      'Express',
      'WebRTC',
      'Kurento',
      'Socket.io',
      'Embedded C',
      'RTOS',
      'MATLAB',
    ];
  }

  // === Template ===
  template() {
    const skillTags = this.skills.map((skill, index) => <SkillTag key={index}><span>{skill}</span></SkillTag>);
    return (
      <Page showing={this.props.selected} styleName="page">
        <img styleName="headshot" src="/assets/images/headshot.png"/>
        <h1>About Me</h1>
        <p>Graduate Mechatronics Engineer (BSc in Engineering in Mechatronics) from the University of Cape Town, South Africa. I am a huge fan of innovative thinking and enjoy mixing this way of seeing the world with creativity in a manner which uplifts others. I rise up to life challenges and practice this in juggling hard work with keeping fit, learning new tricks and skills, freelance graphic design and music. I turn down conventional thinking and substitute it with the will to find a better way!</p>
        <div className="page-divider-wrapper">
          <div className="page-divider"></div>
        </div>

        <h1>Tech Skills</h1>
        <div styleName="skills" className="layout horizontal center-justified wrap">
          { skillTags }
        </div>
        <div className="page-end"></div>
      </Page>
    );
  }
}
