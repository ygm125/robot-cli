'use strict'

const robot = require( 'robot' )

robot.setRootPath( __dirname )

if ( DEBUG ) {
    // 静态资源热更新
    require( 'babel-polyfill/node_modules/regenerator-runtime/runtime' )
    let webpack = require( 'webpack' ),
        webpackMiddleware = require( 'koa-webpack-middleware' ),
        devMiddleware = webpackMiddleware.devMiddleware,
        hotMiddleware = webpackMiddleware.hotMiddleware,
        webpackConf = require( './webpack.config' ),
        compiler = webpack( webpackConf )

    robot.use( devMiddleware( compiler, {
        noInfo: false,
        publicPath: webpackConf.output.publicPath,
        stats: {
            colors: true,
            chunks: false
        }
    }) )

    robot.use( hotMiddleware( compiler ) )
}

robot.run()



