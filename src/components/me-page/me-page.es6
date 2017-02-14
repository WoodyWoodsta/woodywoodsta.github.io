/* me-page.es6 */
import React from 'react';
import { Component } from '../../component';
import './me-page.css';

import { Page } from '../page/page';

export class MePage extends Component {

  // === Template ===
  template() {
    return (
      <Page showing={this.props.selected}>
        <h1>About Me</h1>
        <p>Graduate Mechatronics Engineer (BSc in Engineering in Mechatronics) from the University of Cape Town, South Africa. I am a huge fan of innovative thinking and enjoy mixing this way of seeing the world with creativity in a manner which uplifts others. I rise up to life challenges and practice this in juggling hard work with keeping fit, learning new tricks and skills, freelance graphic design and music. I turn down conventional thinking and substitute it with the will to find a better way!</p>
      </Page>
    );
  }
}
