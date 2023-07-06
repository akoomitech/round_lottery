const devtools = require('@imoka/imoka-mobweb-devtools')
const { requireImkComp, TypesValue } = devtools;

const ProductCardList = requireImkComp('ProductCardList').build();

const CouponGrant = requireImkComp('CouponGrant').build();

module.exports = {
  CouponGrant,
  ProductCardList,
}