module.exports = {
	// 输出文件目录
	// outputDir: 'a',
	// webpack配置
	chainWebpack: () => {},
	configureWebpack: config  => {
		console.log(config)
	},
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: true,
	pwa: {},
	// webpack-dev-server 相关配置
	devServer: {
		open: true, //是否打开游览器
		host: 'localhost',
		port: 8080, // 端口号
		https: false,
		hotOnly: false, // https:{type:Boolean}
		proxy: { // 配置跨域
			'/api':{
			    target:'http://paytest.vipgz2.idcfengye.com/', //源地址
			    changeOrigin:true,                  //改变源
			    ws:true,                            //是否代理websockets
			    pathRewrite:{
			        '^/api':''
			    }
			}
		}, // 配置跨域处理,只有一个代理
		before: app => {}
	},
	// 第三方插件配置
	pluginOptions: {}
}
