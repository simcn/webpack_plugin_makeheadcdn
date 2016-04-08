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
## 源代码
```
var datax = 'http://www.baidu.com/b.js?v=__time__';
var data = '/open.js?t=__time__';
_loadJS('/dist/fed.v2.0.js?v=__md5__');
_loadJS('/dist/task.v2.0.js?v=__md5__');
```

## 转化后代码

```
/*! 2016-04-08T09:38:00.791Z _^0^_ sim_cn@qq.com */

var datax = 'http://www.baidu.com/b.js?v=2016-04-08T09:38:01.342Z';
var data = '/open.js?t=2016-04-08T09:38:01.342Z';

_loadJS('/dist/fed.v2.0.js?v=59c4b3981a8af7fc5751f935c8911340');
_loadJS('/dist/task.v2.0.js?v=5f19626307f66ffea4fbce66c392a965');
```