/* me-page.es6 */
import React from 'react';
import ReactSVG from 'react-svg';
import { Component } from '../../component';
import './me-page.css';

import { Page } from '../page/page';
import { SkillTag } from '../skill-tag/skill-tag';
import { FloatingButton } from '../floating-button/floating-button';

export class MePage extends Component {
  constructor(props) {
    super(props);

    this.skills = [
      'React Native',
      'React',
      'Vue',
      'Angular',
      'Handlebars',
      'Electron',
      'IBM Loopback',
      'Javascript',
      'TypeScript',
      'Google Polymer',
      'HTML5',
      'Markdown',
      'Ruby',
      'Java',
      'Objective-C',
      'CSS',
      'SASS',
      'Stylus',
      'Redux',
      'Redux Saga',
      'RxJs',
      'Vuex',
      'Node',
      'Jest',
      'Mocha',
      'Chai',
      'Google Maps',
      'Contentful',
      'JOI',
      'Chalk',
      'date-fns',
      'Moment.js',
      'Lottie',
      'lodash',
      'Supertest',
      'Commander',
      'Socket.io',
      'Koa',
      'GraphQL',
      'Sentry',
      'Axios',
      'Firebase',
      'PWA',
      'SPA',
      'Babel',
      'Rollup',
      'Browserify',
      'Webpack',
      'NW.js',
      'Koa.js',
      'Express',
      'NPM',
      'Yarn',
      'Nodemon',
      'NDB',
      'Jira',
      'Trello',
      'Glo Boards',
      'Agile',
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
        <p>Innovative thinker and problem solver. Well-exercised (hardened) in the world of Javascript. I work hard, communicate effectively and take pride in producing quality solutions and products from concepts whilst maintaining a focus on business objectives and team dynamic. My engineering background gives me the fundamentals of problem rationalisation and solution design, while my digital art and photography hobbies develop upon my eye for aesthetics. The two work well together across the stack, and I often borrow principles from all disciplines when developing.</p>

        <div className="page-divider-wrapper">
          <div className="page-divider"></div>
        </div>

        <h1>Tech Skills</h1>
        <div styleName="skills" className="layout horizontal center-justified wrap">
          { skillTags }
        </div>
        <div className="page-divider-wrapper">
          <div className="page-divider"></div>
        </div>
        <div styleName="social-buttons-wrapper" className="layout horizontal center center-justified wrap">
          <a href="https://www.linkedin.com/in/woodywoodsta/" target="noopener">
            <FloatingButton>
              <ReactSVG src="assets/icons/linkedin.svg" styleName="social-svg"></ReactSVG>
            </FloatingButton>
          </a>
          <a href="https://github.com/WoodyWoodsta" target="noopener">
            <FloatingButton>
              <ReactSVG src="assets/icons/github.svg" styleName="social-svg"></ReactSVG>
            </FloatingButton>
          </a>
        </div>

        <div className="page-end"></div>
      </Page>
    );
  }
}
