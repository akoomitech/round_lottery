
import { ISpec } from '@imoka/imoka-mobweb-reactor';
import { String } from '@imoka/imoka-mobweb-tss';

export type CouponGrantSpecProperty = {
  
     /**
  * 优惠券ID 
  */
 id: String
  
}

export type CouponGrantSpecAppearance = {
  
}

export type CouponGrantSpecTheme = {
  
}

export type CouponGrantSpec = ISpec<CouponGrantSpecProperty, CouponGrantSpecAppearance, CouponGrantSpecTheme>;
