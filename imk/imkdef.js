const pkg = require('../package.json');
const devtools = require('@imoka/imoka-mobweb-devtools')
const components = require('./components');

const { Types: { Boolean } } = devtools;

module.exports = {
  template: pkg.name,

  kind: 'Template',

  version: pkg.version,

  label: '转盘抽奖',

  metadata: {
    lang: 'reactor',

    scope: 'mobweb',

    labels: {},
  },

  spec: {
    modules: [
      require('./modules/RunLottery'),
    ],

    defaultRegionId: 'regionId',

    components,

    // 页面属性
    pageProps: {
      pendWidget: Boolean.label('开启浮标').default(false),
    },

    // 编辑控制选项
    pageEditOptions: {
      showPendWidget: Boolean.label('显示浮标').default(true),
    },
  },
}