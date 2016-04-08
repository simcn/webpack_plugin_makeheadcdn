//build相关代码
var webpack_plugin_makeheadcdn = require('./index.js');


//后期改进一下
var timechuo = new Date().toISOString();

var config = {
	entry: {
		fed: "./src/fed/index.js",
		task: "./src/task/index.js"
	},
	output: {
		path: './dist',
		filename: "[name].v2.0.js"
	},
	module: {
		loaders: [{
			test: /\.less$/,
			loader: 'style!less-loader'
		}, {
			test: /\.css$/,
			loader: 'style!url-loader'
		}]
	},
	plugins: [
		new webpack_plugin_makeheadcdn({
			time:timechuo,
			author:'chenwp@chenwp'
		})
	]
};



module.exports = config;