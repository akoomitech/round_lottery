import { Imoka } from '@imoka/imoka-react';
import { MobwebReactorBundle } from '@imoka/imoka-mobweb-reactor';

class Store {

  imoka: Imoka<MobwebReactorBundle>

  constructor() {
    this.imoka = new Imoka<MobwebReactorBundle>({
      bundle: this._createMobwebBundle(),
    });
  }

  private _createMobwebBundle() {
    const mobwebBundle = new MobwebReactorBundle();
    return mobwebBundle;
  }
}

export interface IStore {
  imoka: Imoka<MobwebReactorBundle>
}

export default () => {
  return new Store()
}