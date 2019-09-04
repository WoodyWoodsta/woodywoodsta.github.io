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
        title: 'Senior React Native and Full-stack Developer | Oliver Wyman',
        imgUrl: 'assets/images/de-iphone-xs.jpg',
        description: 'Contract position leading the development of a React Native application for a large German energy provider. The app has thousands of daily users and was placed in the top 8 consumer apps in Germany.\n\nI was trusted with core feature development, feature maintenance, analytics and a complete conversion of the application codebase from Flow annotations to Typescript. The rewrite drew on understanding complex type-space relationships between components and state, through higher order component interfaces, and between the application and third-party projects/services. On top of that, I designed and implemented the iOS and Android store deployment and rollout flows.\n\nThe role also included architectural guidance and continued development of two responsive Angular front-end solutions, Express.js modular marketing website and a Node.js integration backend layer interfacing with external services. I played a pivotal role in re-designing workflows and processes across the stack, from the start of design to development and thereafter, which included a custom-built flavour of Git Flow to facilitate a multi-stage, multi-environment release process molded around the project management workflow.',
        techs: ['React', 'React Native', 'Android', 'iOS', 'Jest', 'Redux', 'Redux Saga', 'Teamcity', 'Docker', 'Angular 4+', 'SASS', 'RxJs', 'Webpack', 'Bootstrap', 'Handlebars', 'JQuery', 'Contentful', 'Node.js', 'IBM Loopback', 'Zendesk', 'Google Maps', 'Typescript', 'Yarn', 'NPM', 'Express', 'Azure Devops'],
      },
      {
        title: 'Full Stack Developer | Draw Group Ltd',
        imgUrl: 'assets/images/loopback.jpg',
        description: 'Developer and owner of a Node.js service integration layer servicing multiple applications, abstracting backend nodes in a distributed network for a large energy supplier in Germany. Work included the development of an administrative and customer support frontend for the same service, and significant architectural design and implementation work on both marketing and customer frontends.',
        techs: ['Angular 2 + 4', 'SASS', 'RxJs', 'Webpack', 'Bootstrap', 'Handlebars', 'JQuery', 'Contentful', 'Node.js', 'IBM Loopback', 'Zendesk', 'Google Maps', 'Typescript', 'Yarn', 'NPM', 'Express'],
      },
      {
        title: 'Lead Frontend/UX Developer | Advanced Apps',
        imgUrl: 'assets/images/biz-project-mug.jpg',
        description: 'Part-time (July-November) and full-time (November-February) management of the development of front-end components in business applications. Design and development included cross-platform, cross-form-factor web applications involving in-browser and in-shell platforms. The work involved large portions of the back-end Node.js components which drew on technologies such as GraphQL, ArangoDB and Koa.js. Front end architecture embraced leading edge web specifications via the use of Google Polymer (2.0), wide range of supporting technologies and tooling, and modern, progressive design principles such as Google\'s Material Design.',
        techs: ['Node.js', 'GraphQL', 'ArangoDB', 'Koa.js', 'Socket.io', 'Google Polymer', 'Browserify', 'Rollup', 'Babel', 'CustomElements v1', 'CSS3', 'Electron', 'ServiceWorker'],
      },
      {
        title: 'Mars Curiosity Rover Simulator (Model)',
        imgUrl: 'assets/images/mars-rover.jpg',
        description: 'Developed as a university thesis project, the model of the Mars Curiosity Rover (JPL - NASA) aimed to generate awareness around the exciting branch of science that is planetary exploration as well as allow users to experience a simulated control environment of the vehicles involved. The Rover model was a 3D printed, scaled-down representation of the real Curiosity which leveraged IoT-level computation and communication hardware, servos and a webcam to allow interactive control from a web application accesible to any user on the internet.',
        techs: ['Google Polymer', 'Rollup', 'Babel', 'HTML5', 'CSS', 'ES6', 'Socket.io', 'WebRTC', 'Kurento', 'Johnny-Five', 'Koa'],
      },
      {
        title: 'Semi-autonomous Walking Robot',
        imgUrl: 'assets/images/blu-v2.jpg',
        description: 'The challenge was to develop a walker robot (that is, legs only) with a limited set of materials and electrical hardware to navigate an obstacle course. Further to the specification, I added wireless communication to the robot for transmission of telementry and some controllability. The frontfacing component of the wireless communication system was a simple Angular 1 mobile application utilising Ionic for Android and iOS support.',
        techs: ['Ionic', 'Angular', 'Socket.io', 'FreeRTOS', 'C'],
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
