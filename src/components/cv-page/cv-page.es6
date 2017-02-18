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

##### Material Design

- Understanding and use of Material Design UI patterns and principles.
- Designed, built and implemented expressive, functional, intuitive web application controls and elements like desktop and mobile drawer panels, headers, buttons, form elements, modals etc.

##### Responsive, Cross-platform Ethos

- Business applications usable on mobile and desktop, in the browser, Electron or NW.js containers and native mobile webviews.
- Designed responsive architectures maintaining platform and form-factor agnosticism.

##### Modern Modular Web architectures

- Built context-aware document elements and templates.
- Built reusable components with styling and data-flow APIs.
- Built plug-in Javascript DOM libraries and helper modules.

##### Progressive Web Applications

- Developed against W3C CustomElements v1 and ServiceWorker specifications.
- Supporter of web 1st class mobile citizen applications.
- Implemented ServiceWorker providing intelligent module and resource caching.

##### Accessibility
- Built polyfill loader for above modern web features.

##### React
- Built global application theming and UA aware hooks for React.
- Portfolio built with React: [**https://woodywoodsta.github.io/**](https://woodywoodsta.github.io/)

##### Flux and Redux
- Implemented Flux principles using Redux. Configurations include multi-store and single-store architectures, state selection, custom middleware, reducer combinations and more.

##### Google Polymer
- Built complete client-facing business application.
- Designed and built responsive and modular application shell architecture with lazy loaded plugin interop including ShadowDOM friendly theming and style module architecture leveraging brand-new CSS features (Custom Properties, Mixins).
- Developed front end web application for a University thesis project found at: [**https://github.com/WoodyWoodsta/mars-rover-rsvp-client**](https://github.com/WoodyWoodsta/mars-rover-rsvp-client)

##### Angular
- University robotics project. Developed a mobile application for an IoT enabled robot.

##### Koa and Express
- Built around web application server processes.

##### Electron and NW.js
- Implemented business applications in Electron and Node Webkit using transparent and frameless windows.
- Packaged applications for cross-platform installation.

##### Babel, Rollup, Browserify and Webpack
- Implemented real-time multimedia broadcast for University robotics thesis found at: [**https://github.com/WoodyWoodsta/mars-rover**](https://github.com/WoodyWoodsta/mars-rover).
- Built synchronised, remote data stores for IoT devices and robotics.

##### Javascript (ES5/6/7)
- Node.js and web applications.
- Written CLI applications with node, including user input, project management and build.
- Built Rete data validation system leveraging inferencing algorithms.

##### HTML5 and CSS3
- Web application front ends.
- Native CustomElements and vanilla JS DOM solutions.

##### Embedded C (Including RTOS)
- Multiple robotics projects.
- Wrote driver for UART-USB, two-way, structured data communication including WiFi module support (SPI).

##### MATLAB
- Statistical analysis projects as well as computational intelligence work (neural networks, regression).


---

# Work Experience

- **Lead Front End/UX Software Engineer | Advanced Apps PTY LTD.**

  _July 2016 – february 2017_

  Part-time (July-November, during studies) and full-time (November-February) management of the development of front end components in business applications. Design and development included cross-platform, cross-form-factor web applications involving in-browser and in-shell platforms. The work involved large portions of the back-end Node.js components which drew on technologies such as GraphQL, ArangoDB and Koa. Front end architecture embraced leading edge web specifications via the use of Google Polymer (2.0), wide range of supporting technologies and tooling and modern, progressive design principles such as Google's Material Design.

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

- **Port Shepstone High School | Port Shepstone, KZN, South Africa**

  _High School (National Senior Certificate)_

  2008 – 2012
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
