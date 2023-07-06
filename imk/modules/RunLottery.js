const devtools = require('@imoka/imoka-mobweb-devtools')
const { Types: { String }, TypesValue } = devtools;

module.exports = {
  module: 'RunLottery',

  kind: 'Module',

  label: '转盘抽奖',

  metadata: {
    editable: {
      property: {
        enable: true,
      },
      style: {
        enable: true,
      }
    }
  },

  spec: {
    property: {
      id: String.label('抽奖ID').default('KjbvY26Nd3'),
    }
  }
}