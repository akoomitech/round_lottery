const devtools = require('@imoka/imoka-mobweb-devtools')
const { Types: { String, Enum, Number, ColorSet }, TypesValue } = devtools;

module.exports = {
  component: 'imk.component.view.tpl.akoomi_round_lottery.ProductCardList',

  label: '商品列表',

  kind: 'Component',

  metadata: {
    prefix: 'product-card-list',

    labels: {},

    editable: {
      property: {
        enable: true,
      },
      style: {
        enable: true,
      },
      theme: {
        enable: true,
      }
    },
  },

  spec: {
    property: {
      platform: Enum.label('平台').option({
        seq: 1,
        enums: [
          { label: '全部', value: 'all'},
          { label: '京东', value: 'jd'},
          { label: '淘宝', value: 'tb'},
          { label: '天猫', value: 'tm'},
        ]
      }).default('all'),

      cat: Enum.label('品类').option({
        seq: 2,
        enums: [
          { label: '全部', value: 'all' },
          { label: '健身补剂', value: 'fitness' },
          { label: '零食坚果', value: 'snack' },
          { label: '护肤化妆', value: 'makeup' },
          { label: '书籍笔记', value: 'book' },
        ]
      }).default('all'),

      limit: Enum.label('最大数量').option({
        seq: 3,
        enums: [
          { label: '10', value: 10},
          { label: '20', value: 20},
        ]
      }).default(10),
    },

    theme: {
      colors: ColorSet.label('颜色')
        .color({ label: '标题色', default: '#333333' })
        .color({ label: '价格色', default: '#ff5500'})
        .fill({ label: '背景色', default: { type: 'solid', value: { color: '#FFFFFF'}}})
        .defaultColors(),
    },
  },
}