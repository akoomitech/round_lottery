const devtools = require('@imoka/imoka-mobweb-devtools')
const { requireImkComp, TypesValue, Comp } = devtools;

const ProductCardList = requireImkComp('ProductCardList').build();

const CouponGrant = requireImkComp('CouponGrant').build();


module.exports = [
  Comp(ProductCardList).label('商品列表').snapshot('@/product_card_list.png'),
  Comp(CouponGrant).label('优惠券').snapshot('@/coupon_grant.png')
]