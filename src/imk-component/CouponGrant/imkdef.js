const devtools = require('@imoka/imoka-mobweb-devtools')
const { Types: { String }, TypesValue } = devtools;

module.exports = {
  component: 'imk.component.view.tpl.akoomi_round_lottery.CouponGrant',

  label: '优惠券',

  kind: 'Component',

  metadata: {
    prefix: 'coupon-grant',

    labels: {},

    editable: {
      property: {
        enable: true,
      },
      style: {
        enable: true,
      }
    },
  },

  spec: {
    property: {
      id: String.label('优惠券ID').default('QiHvY26Nd5'),
    },
  },
}