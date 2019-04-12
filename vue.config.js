const webpack = require('webpack')
module.exports = {
  // 基本路径
  publicPath: './',

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery",
        Popper: ['popper.js', 'default']
      })
    ]
  },

  lintOnSave: undefined
}
