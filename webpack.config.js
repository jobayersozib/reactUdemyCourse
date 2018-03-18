const path=require("path");

module.exports={
    entry: "./src/playground/redux.js",
    output:{
        path:path.join(__dirname,"public"),
        filename:"bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env','react'],
                plugins:["transform-class-properties"]
              }
            }
          },
          {
            test: /\.s?css$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            },{
              loader:"sass-loader"
            }]
        }
        ]
      },
      devtool:'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        historyApiFallback:true,
        port: 9000
      }
      

}