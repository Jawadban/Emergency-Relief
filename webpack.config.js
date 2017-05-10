
module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname +'/public',
		filename: 'bundle.js'
	},
	devServer: {
		inline:true,
		port:3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders:'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	watch: true
}
