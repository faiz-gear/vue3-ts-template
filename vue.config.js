const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { resolve, join } = require('path')

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'css'
          })
        ]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          pinia: {
            test: /[\\/]src[\\/]store[\\/]/,
            name: 'pinia',
            chunks: 'all'
          }
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(join(__dirname, 'src/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(join(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    extract: {
      ignoreOrder: true
    }
  }
}
