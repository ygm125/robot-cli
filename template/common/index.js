'use strict'

global.ROOT_PATH = __dirname

const robot = require( 'robot-frame' )

robot.beforeAppLoad(() => {
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
})

robot.run()

process.on( 'uncaughtException', function ( err ) {
    Logger.error( err )
})




