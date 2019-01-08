const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      })
    }

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    return config
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/tacos': { page: '/', query: { category: 'tacos' } },
      '/pizza': { page: '/', query: { category: 'pizza' } },
      '/burger': { page: '/', query: { category: 'burger' } },
      '/sushi': { page: '/', query: { category: 'sushi' } },
      '/mariscos': { page: '/', query: { category: 'mariscos' } },
      '/cafe': { page: '/', query: { category: 'cafe' } },
      '/restaurant': { page: '/', query: { category: 'restaurant' } },
      '/bar': { page: '/', query: { category: 'bar' } },
    }
  }
}
