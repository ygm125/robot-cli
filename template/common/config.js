let publicPath = '/dist/'
let manifest = {}
try {
	manifest = require( `${ROOT_PATH}/static${publicPath}manifest.json` )
} catch ( err ) { manifest = {} }

module.exports = {
	view: {
		opt: {
			globals: {
				useJs( file ) {
					if ( file ) {
						if ( !/\.js$/.test( file ) ) {
							file += '.js'
						}
						let filepath = `${publicPath}page/${file}`
						if ( !DEBUG ) {
							filepath = `${publicPath}${manifest[ file ]}`
						}
						return `<script src="${filepath}"></script>`
					}
				},
				useCss( file ) {
					if ( !/\.css$/.test( file ) ) {
						file += '.css'
					}
					if ( !DEBUG ) {
						return `<link href="${publicPath}${manifest[ file ]}" rel="stylesheet" type="text/css" />`
					}
				}
			}
		}
	}
}