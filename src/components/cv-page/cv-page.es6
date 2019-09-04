/* cv-page.es6 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Component } from '../../component';
import './cv-page.css';

import { Page } from '../page/page';

export class CVPage extends Component {
  constructor(props) {
    super(props);

    this.md = `
# Tech Experience

- *FRAMEWORKS:* React Native • React • Vue • Angular (2+) • Google Polymer • Handlebars • Electron • Express.js • IBM Loopback
- *LANGUAGES:* Javascript (ES5/6/7/next) • Typescript • CSS • SASS • Stylus • HTML5 • Markdown • Ruby • Java • Objective-C
- *STATE MANAGEMENT:* Redux • Redux Saga • RxJs • Vuex
- *RUNTIMES:* Node.js
- *SUPPORTING MODULES/SERVICES:* Jest • Mocha • Chai • Google Maps • Contentful • JOI • Chalk • date-fns • Moment.js • Lottie • lodash • Supertest • Commander • Socket.io • Koa • GraphQL • Sentry • Axios • Firebase • and many more!
- *DEVELOPMENT TOOLING/SERVICES:* Docker • Teamcity • Gitlab • Gitea • Github • Bitbucket • DroneCI • Firebase • Webpack • Metro • ESLint • TSLint • Babel • Fastlane • Azure Devops • AppCenter
- *MISC TOOLING:* NPM • Yarn • Nodemon • NDB
- *TEAM MANAGEMENT:* Jira • Trello • Glo Boards • Agile
- *BEFORE 9AM + AFTER 6PM:* C++ • C • Matlab • Python • Embedded Systems • RTOS • Most of the Adobe Suite • Photography (both land and aerial, still and motion)

---

# Work Experience

- **Senior React Native and Full Stack Developer | Oliver Wyman, London, UK**

  _January 2018 – September 2019_

  Contract position leading the development of a React Native application for a large German energy provider. The app has thousands of daily users and was placed in the top 8 consumer apps in Germany.

  I was trusted with core feature development, feature maintenance, analytics and a complete conversion of the application codebase from Flow annotations to Typescript. The rewrite drew on understanding complex type-space relationships between components and state, through higher order component interfaces, and between the application and third-party projects/services. On top of that, I designed and implemented the iOS and Android store deployment and rollout flows.

  The role also included architectural guidance and continued development of two responsive Angular front-end solutions, Express.js modular marketing website and a Node.js integration backend layer interfacing with external services. I played a pivotal role in re-designing workflows and processes across the stack, from the start of design to development and thereafter, which included a custom-built flavour of Git Flow to facilitate a multi-stage, multi-environment release process molded around the project management workflow.

- **Full Stack Developer | Draw Group, London, UK**

  _March 2017 – January 2018_

  Developer and owner of a Node.js service integration layer servicing multiple applications, abstracting backend nodes in a distributed network for a large energy supplier in Germany. Work included the development of an administrative and customer support frontend for the same service, and significant architectural design and implementation work on both marketing and customer frontends.

- **Lead Front End/UX Software Engineer | Advanced Apps PTY LTD.**

  _July 2016 – February 2017_

  Part-time (July-November) and full-time (November-February) management of the development of front-end components in business applications. Design and development included cross-platform, cross-form-factor web applications involving in-browser and in-shell platforms. The work involved large portions of the back-end Node.js components which drew on technologies such as GraphQL, ArangoDB and Koa.js. Front end architecture embraced leading edge web specifications via the use of Google Polymer (2.0), wide range of supporting technologies and tooling, and modern, progressive design principles such as Google's Material Design.

- **Front End Designer | Advanced Apps PTY Ltd.**

  _November 2015 – July 2016_

  Part time involvement in the design and development of UI/UX for business applications.

- **Microcontrollers Tutor | University of cape town**

  _July 2015 – November 2015_

  Tutor for the 2nd year Introduction to Microcontrollers (EEE2039D) Course involving the STM32F051C6 device with reference to the STM32 product range and ARM Cortex architectures.

- **Embedded Firmware Designer and Electronic Engineer | PFK Electronics (Durban, South Africa)**

  _December 2014_

  Work experience in the field of wireless microprocessors (GPS and GSM comms) applicable to car security, tracking and fleet management

---

# Education
- **University of Cape Town | Western Cape, South Africa**

  _Degree - BSc Eng in Mechatronics_

  2013 – 2016
`;
  }

  // === Template ===
  template() {
    return (
      <Page showing={ this.props.selected }>
        <div styleName="cv-wrapper">
          <ReactMarkdown source={ this.md }/>
        </div>
        <div className="page-end"></div>
      </Page>
    );
  }
}
