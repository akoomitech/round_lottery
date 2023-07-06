const devtools = require('@imoka/imoka-mobweb-devtools')
const component = require('./component');
const { requireImkModule, TypesValue } = devtools;

const RunLottery = requireImkModule('RunLottery').build();


module.exports = {
  ...RunLottery.Data,
}