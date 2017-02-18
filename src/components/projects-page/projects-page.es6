/* projects-page.es6 */
import React from 'react';
import { Component } from '../../component';
import './projects-page.css';

import { Page } from '../page/page';
import { ProjectSection } from '../project-section/project-section';

export class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.projects = [
      {
        title: 'Government Business Management Web Applications',
        imgUrl: 'assets/images/biz-project-mug.jpg',
        description: 'Developing business applications for a government contracting company provided the opportunity to put modern web component technologies through rigorous testing within a production environment. The modular web proved to be a powerful way to engineer complex projects without reaching the limitations of a single DOM as would a typical web project.',
        techs: ['Google Polymer', 'Rollup', 'Babel', 'GraphQL', 'HTML5', 'CSS', 'ES6'],
      },
      {
        title: 'Mars Curiosity Rover Simulator (Model)',
        imgUrl: 'assets/images/mars-rover.jpg',
        description: 'Developed as a university thesis project, the model of the Mars Curiosity Rover (JPL - NASA) aimed to generate awareness around the exciting branch of science that is planetary exploration as well as allow users to experience a simulated control environment of the vehicles involved. The Rover model was a 3D printed, scaled-down representation of the real Curiosity which leveraged IoT-level computation and communication hardware, servos and a webcam to allow interactive control from a web application accesible to any user on the internet.',
        techs: ['Google Polymer', 'Rollup', 'Babel', 'HTML5', 'CSS', 'ES6', 'Socket.io', 'WebRTC', 'Kurento', 'Johnny-Five', 'Koa'],
      },
    ];
  }

  // === Template ===
  template() {
    const sections = this.projects.map((project, index) => {
      let pageDivider = null;
      if (index !== this.projects.length - 1) {
        pageDivider = <div className="page-divider"></div>;
      }

      return (
        <div key={ index }>
          <ProjectSection alternate={ Math.abs(index % 2) } {...project} styleName="project-section"></ProjectSection>
          <div styleName="page-divider-wrapper">
            { pageDivider }
          </div>
        </div>
      );
    });

    return (
      <Page showing={this.props.selected}>
        { sections }

        <div className="page-end"></div>
      </Page>
    );
  }
}
