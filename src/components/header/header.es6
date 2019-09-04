/* header.es6 */
import React from 'react';
import Immutable from 'seamless-immutable';
import { Component } from '../../component';
import './header.css';

import { THEMES } from '../../constants/config';

import { Title } from '../title/title';
import { Menu } from '../menu/menu';

const INTRO_INTERVAL = 50;
const INTRO_STATES = {
  INIT: 'INIT',
  START: 'START',
  TYPE_INITIALISING: 'TYPE_INITIALISING',
  TYPE_PAUSE: 'TYPE_PAUSE',
  TYPE_HEADING: 'TYPE_HEADING',
  PRE_COMPLETE: 'PRE_COMPLETE',
  COMPLETE: 'COMPLETE',
};

const INITIALISING_TEXT_SEQ = [
  '',
  '',
  '',
  'I',
  'In',
  'Ini',
  'Ini',
  'Init',
  'Init',
  'Init',
  'Init',
  'Initi',
  'Initi',
  'Initia',
  'Initial',
  'Initial',
  'Initiali',
  'Initialis',
  'Initialis',
  'Initialis',
  'Initialisi',
  'Initialisin',
  'Initialisin',
  'Initialising',
];

const HEADING_TEXT_SEQ = [
  's',
  'se',
  'sea',
  'sean',
  'sean',
  'sean',
  'sean-',
  'sean-',
  'sean-',
  'sean-',
  'sean-',
  'sean-w',
  'sean-w',
  'sean-wo',
  'sean-wo',
  'sean-woo',
  'sean-wood',
];

let initialisingTextCounter = 0;
let headingTextCounter = 0;
let pauseCounter = 0;

export class Header extends Component {
  constructor(props) {
    super(props);

    this._onIntroIterateStateSet = this._onIntroIterateStateSet.bind(this);
    this._iterateIntro = this._iterateIntro.bind(this);

    this.scrollThreshold = 70;
    this.state = Immutable({
      intro: INTRO_STATES.INIT,
      titleText: '',
      cursorIsBlinking: true,
      menuIsHidden: true,
    });
  }

  componentDidMount() {
    this._iterateIntro();
  }

  // === Template ===
  template() {
    return (
      <div className={`layout vertical center center-justified
        ${this.props.config.theme === THEMES.LIGHT ? 'light' : ''}
        ${this.props.config.isPagesShowing ? 'pages-showing' : ''}
        ${this.props.className}
        ${this.props.scroll.pos.y >= this.scrollThreshold ? 'fixed' : ''}
        ${this.state.menuIsHidden ? 'menu-hidden' : ''}`}
        styleName="wrapper"
        style={{ marginTop: Math.max(-this.scrollThreshold, -this.props.scroll.pos.y) }}>
        <Title styleName="title" style={{ opacity: Math.max(0, 1 - (this.props.scroll.pos.y / 50)) }}
          title={this.state.titleText}
          blinkCursor={this.state.cursorIsBlinking}/>
        <Menu
          styleName="menu"
          navigateToPage={this.props.navigateToPage}
          updateScroll={pos => this.props.updateScroll(pos, this.props.scroll)}
          page={this.props.nav.page}>
        </Menu>
      </div>
    );
  }

  // === Private ===
  _iterateIntro() {
    let newState = Immutable(this.state);

    switch (this.state.intro) {
      case INTRO_STATES.INIT:
        newState = newState.set('intro', INTRO_STATES.START);
        break;

      case INTRO_STATES.START:
        newState = newState.set('intro', INTRO_STATES.TYPE_INITIALISING);
        newState = newState.set('cursorIsBlinking', false);
        break;

      case INTRO_STATES.TYPE_INITIALISING:
        newState = newState.set('titleText', INITIALISING_TEXT_SEQ[initialisingTextCounter++]);

        if (initialisingTextCounter >= INITIALISING_TEXT_SEQ.length) {
          newState = newState.set('intro', INTRO_STATES.TYPE_PAUSE);
        }
        break;

      case INTRO_STATES.TYPE_PAUSE:
        if (pauseCounter++ >= 30) {
          newState = newState.set('cursorIsBlinking', false);
          newState = newState.set('intro', INTRO_STATES.TYPE_HEADING);
          pauseCounter = 0;
        } else if (!this.state.cursorIsBlinking) {
          newState = newState.set('cursorIsBlinking', true);
        }
        break;

      case INTRO_STATES.TYPE_HEADING:
        newState = newState.set('titleText', HEADING_TEXT_SEQ[headingTextCounter++]);

        if (headingTextCounter >= HEADING_TEXT_SEQ.length) {
          newState = newState.set('intro', INTRO_STATES.PRE_COMPLETE);
        }
        break;

      case INTRO_STATES.PRE_COMPLETE:
        if (pauseCounter++ >= 10) {
          newState = newState.set('intro', INTRO_STATES.COMPLETE);
        }
        break;

      case INTRO_STATES.COMPLETE:
        if ((!this.state.cursorIsBlinking || this.state.menuIsHidden)) {
          newState = newState.set('menuIsHidden', false);
          newState = newState.set('cursorIsBlinking', true);
        } else {
          return;
        }
        break;

      default:
        return;
    }

    this.setState(newState, this._onIntroIterateStateSet);
  }

  _onIntroIterateStateSet() {
    setTimeout(this._iterateIntro, INTRO_INTERVAL);
  }
}
