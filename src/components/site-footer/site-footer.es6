/* site-footer.es6 */
import React from 'react';
import ReactSVG from 'react-svg';
import { Component } from '../../component';
import './site-footer.css';

export class SiteFooter extends Component {
  // === Template ===
  template() {
    return (
      <div styleName="wrapper" className={`layout center center-justified
        ${window._isMobile ? 'mobile vertical' : 'horizontal'}`}>
        <div styleName="about-label-wrapper" className="layout horizontal center">
          <ReactSVG
            styleName="about-icon"
            src="assets/icons/about-circle.svg"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'height: 16px; margin-right: var(--margin-thin)');
            }}/>
          <span styleName="about-leader"><b>About</b></span>
        </div>
        <span className="about-text">{`${window._isMobile ? '' : ': '}Created using React, Redux and CSS Modules. Responsive, progressive and light.`}</span>
      </div>
    );
  }
}
