/* site-footer.es6 */
import React from 'react';
import ReactSVG from 'react-svg';
import { Component } from '../../component';
import './site-footer.css';

export class SiteFooter extends Component {
  // === Template ===
  template() {
    return (
      <div styleName="wrapper" className={`layout horizontal center center-justified
        ${window._isMobile ? 'mobile' : ''}`}>
        <ReactSVG styleName="about-icon" path="assets/icons/about-circle.svg" />
        <span><b>About</b></span>
        <span styleName="about-text">: Created using React, Redux and CSS Modules. Responsive, progressive and light.</span>
      </div>
    );
  }
}
