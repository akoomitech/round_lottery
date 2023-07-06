const devtools = require('@imoka/imoka-mobweb-devtools')
const component = require('./component');
const { requireImkModule, TypesValue } = devtools;

const RunLottery = requireImkModule('RunLottery').build();


module.exports = {
  ...component.CouponGrant.Data,
  ...component.ProductCardList.Data,
  ...RunLottery.Data,
}