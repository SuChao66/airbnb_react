const path = require('path')
const CracoLessPlugin = require('craco-less')

export const resolve = (pathname: string) => path.resolve(__dirname, pathname)

module.exports = {
  // Whether or not TypeScript type checking is enabled.
  typescript: {
    enableTypeChecking: true
  },
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
      ]
    ]
  },
  // webpack中的配置项
  webpack: {
    // 配置别名
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    }
  }
}
