const RenderMode = {
  development: 'development',
  editor: 'editor',
  running: 'running',
  production: 'production'
}

module.exports = {
  renderMode: RenderMode.development,

  htmlConfig: {
    title: '转盘抽奖',
    keywords: '',
  },

  devServer: {
    proxy: {
    },
  },

  hotReload: {
    debug: false,
    delay: 1500,
    extraExts: [],
    exclusions: [],
  }
}