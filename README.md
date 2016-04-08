# webpack_plugin_makeheadcdn
webpack插 用于生成资源头部节点与CDN时间戳的

## 安装
```
npm i webpack_plugin_makeheadcdn --save-dev
```

## 使用 (webpack.config.js)
```
var webpack_fed_build = require('webpack_plugin_makeheadcdn');

var config = {
	... //省略
	plugins: [
		new webpack_fed_build({
			time:timechuo,
			author:'chenwp@chenwp'
		})
	]
};

module.exports = config;

```


