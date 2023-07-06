import React from 'react';
import { ComponentBody, ImokaCtx } from '@imoka/imoka-mobweb-reactor';
import { GlobalSpec } from '@/types/GlobalSpec';
import { CouponGrantSpec } from './CouponGrantSpec';
import { LazyImg } from '@imoka/imoka-mobweb-reactor-support';
import { useAlert } from 'react-alert';
import api from '../../api';
import './CouponGrant.less';

export type Props = {
  Imoka: ImokaCtx<CouponGrantSpec, GlobalSpec>,
}

export default ({ Imoka: { spec: { property }, metaInfo, bodyProps }}: Props) => {
  const alert = useAlert()
  const [coupon, setCoupon] = React.useState<any>({});

  React.useEffect(() => {
    api.getCoupon(property.id)
      .then((resp:any) => {
        setCoupon(resp);
      })
      .catch(console.log);
  }, [property.id]);

  const handleGrant = () => {
    alert.show(coupon.text);
  }

  return (
    <ComponentBody metaInfo={metaInfo} styleName="coupon-grant" onClick={handleGrant}{...bodyProps}>
      <LazyImg img={{ src: coupon.pic, width: 0, height: 0}}/>
    </ComponentBody>
  )
};