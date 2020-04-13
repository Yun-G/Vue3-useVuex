const path = require('path')
module.exports = {
	// webpack配置
	chainWebpack: () => {},
	configureWebpack: {
		//排除第三方库 减少打包体积
		externals: {
			// 'element-ui': 'ELEMENT',
			// 'vue': 'Vue',
			// 'axios': 'axios',
			// 'vuex': 'Vuex',
			// 'qrcodejs2': 'QRCode',
			// 'vue-router': 'VueRouter',
		}
	},
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: false,
	// webpack-dev-server 相关配置
	// devServer: {
	// 	open: true, //是否打开游览器
	// 	host: 'localhost',
	// 	port: 88, // 端口号
	// 	https: false,
	// 	hotOnly: false, // https:{type:Boolean} 
	// 	proxy: { // 配置跨域
	// 		'/api': {
	// 			target: '', //源地址
	// 			changeOrigin: true, //改变源
	// 			ws: true, //是否代理websockets
	// 			pathRewrite: {
	// 				'^/api': ''
	// 			}
	// 		}
	// 	}, // 配置跨域处理,只有一个代理
	// 	before: app => {}
	// },
	// 第三方插件配置
	pluginOptions: {}
}
