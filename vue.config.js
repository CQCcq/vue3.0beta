var webpack = require("webpack");
module.exports = {
  configureWebpack: {
    //     plugins: [new MyAwesomeWebpackPlugin()],
    //optimization与entry/plugins同级
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: "common",
            chunks: "initial",
            minChunks: 2,
          },
        },
      },
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin("common.js"),
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
      }),
    ],
  },
};
