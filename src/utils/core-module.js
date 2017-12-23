import * as systemConsts from '../constants/system';

export class CoreModule {
  constructor(name, boot) {
    this.name = name;
    this.boot = boot || (() => { });

    this._bound = {
      _appIsReadyCb: this._appIsReadyCb.bind(this),
    };
  }

  init() {
    if (!window[systemConsts.APP_IS_READY]) {
      window.addEventListener(systemConsts.APP_IS_READY, this._bound._appIsReadyCb);
    } else {
      this._appIsReadyCb();
    }
  }

  // --- Private ---
  _appIsReadyCb() {
    console.info(`Booting module: ${this.name}`);
    this.boot();
  }
}
