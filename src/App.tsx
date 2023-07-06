import React from 'react';
import { inject } from 'mobx-react';
import { PageBody, Region, ImokaContextProvider, useImokaOnReady } from '@imoka/imoka-mobweb-reactor';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { IStore } from '@/store';
import RunLottery from './component/RunLottery/RunLottery';
import './App.less';
import './imk-component';

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 500000,
  offset: '30px',
  type: 'success',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    zIndex:100,
    backgroundColor: 'rgba(21,21,21,0)',
    fontSize: '.14rem',
  }
}


export default inject('imoka')(({ imoka }: Partial<IStore>) => {
  const ready = useImokaOnReady(imoka);


  return (
    <div styleName="app">
      {
        ready && (
          <ImokaContextProvider imoka={imoka}>
            <PageBody>
              <AlertProvider template={AlertTemplate} {...options}>
                <RunLottery />
                <Region regionId="regionId" />
              </AlertProvider>
            </PageBody>
          </ImokaContextProvider>
        )
      }
    </div>
  )
});