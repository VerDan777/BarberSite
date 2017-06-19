const webpack =require('webpack');
const path=require('path');

const PATHS = {
    dist:path.join(__dirname,'dist'),
    src: path.join(__dirname,'src')
}
module.exports= {
    entry:PATHS.src + '/js/app.js',
    output: {
        path:PATHS.dist,
        filename:'[name].js'
    },
    module:{
      loaders:[{
          loader:'babel-loader',
          query: {
              presets:['es2015']
          },
          test:/\.js$/,
          exclude:/node_modules/
      }],
    
    },
    plugins: [
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
    })]
}