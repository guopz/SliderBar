module.exports = {
  proxy: {
    '/admin/index.php': {
      target: 'http://ioms.csiautos.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/': ''
      }
    }
  }
}
