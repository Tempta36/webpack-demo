var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode:"development",

    //项目的入口文件，webpack会从main.js开始，把所有依赖的Js都加载打包
    entry:"./src/main.js",
    output:{
        //项目的打包文件路径
        path: path.resolve(__dirname,'./dist'),
        //通过devServer访问路径
        publicPath:"/dist/",
        //打包后的文件名
        filename:"build.js"
    },

    devServer:{
        historyApiFallback:true,
        overlay:true
    },

    resolve:{
        alias:{
            'vue$':"vue/dist/vue.esm.js"
        }
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                //解析器的执行顺序为从下往上
                use:[
                    //将引入的css插入到html页面的style标签里
                    'vue-style-loader',
                    //可用模块化的写法引入css
                    'css-loader'
                ]
            },{
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },{
                test:/\.js$/,
                loader:'babel-loader',
                //忽略node_modules文件夹下的文件，不用转码
                exclude:/node_modules/
            }
        ]
    }
};