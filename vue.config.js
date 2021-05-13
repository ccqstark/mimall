module.exports = {
  publicPath: "./",
  outputDir: "mimall",
  assetsDir: "static",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://mi.futurefe.com",
        changeOrigin: true
        // pathRewrite: {
        //     '/api': ''
        // }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
};
