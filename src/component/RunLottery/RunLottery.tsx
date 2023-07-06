import React from 'react';
import { withImkModule, ComponentBody, ImokaCtx } from '@imoka/imoka-mobweb-reactor';
import { GlobalSpec } from '@/types/GlobalSpec';
import { RunLotterySpec } from './RunLotterySpec';
import { LuckyWheel } from '@lucky-canvas/react';
import { useAlert } from 'react-alert';
import api from '../../api';
import './RunLottery.less';

export type Props = {
  Imoka: ImokaCtx<RunLotterySpec, GlobalSpec>,
}

const backgrounds = ['#e9e8fe', '#b8c5f2']

export default withImkModule(({ Imoka: { spec: { property }, metaInfo, bodyProps  }}: Props) => {
  const alert = useAlert()
  const [blocks] = React.useState([
    { padding: '10px', background: '#869cfa' }
  ])
  const [prizes, setPrizes] = React.useState([
    { background: '#e9e8fe', fonts: [{ text: '咖啡' }] },
    { background: '#b8c5f2', fonts: [{ text: '饼干' }] },
    { background: '#e9e8fe', fonts: [{ text: '蛋白粉' }] },
    { background: '#b8c5f2', fonts: [{ text: '巧克力' }] },
    { background: '#e9e8fe', fonts: [{ text: '糖果' }] },
    { background: '#b8c5f2', fonts: [{ text: '牛奶' }] },
  ])
  const [buttons] = React.useState([
    { radius: '40%', background: '#617df2' },
    { radius: '35%', background: '#afc8ff' },
    {
      radius: '30%', background: '#869cfa',
      pointer: true,
      fonts: [{ text: '开始', top: '-10px' }]
    }
  ])
  const myLucky = React.useRef<any>()

  React.useEffect(() => {
    api.getLottery(property.id)
      .then((resp:any) => {
        setPrizes(resp.prizes.map((prize, idx) => ({ background: backgrounds[idx % 2], fonts: [ { text: prize.text }] })))
      })
      .catch(console.log)
  }, [property.id])
  return (
    <ComponentBody metaInfo={metaInfo} styleName="run-lottery" {...bodyProps}>
      <LuckyWheel 
        ref={myLucky}
        width="3rem" 
        height="3rem"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={() => { // 点击抽奖按钮会触发star回调
          myLucky.current.play()
          setTimeout(() => {
            const index = Math.random() * 6 >> 0
            myLucky.current.stop(index)
          }, 2500)
        }}
        onEnd={prize => { // 抽奖结束会触发end回调
          alert.show('恭喜你抽到 ' + prize.fonts[0].text + ' 号奖品')
        }}
      ></LuckyWheel>
    </ComponentBody>
  )
}, 'RunLottery');
