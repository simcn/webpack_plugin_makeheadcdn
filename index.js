/**
 * semBuild
 * @description webpack插件主要是加页头时间戳与 amd加载的时间戳
 */
var ConcatSource = require("webpack/lib/ConcatSource");

function webpack_plugin_makeheadcdn(options) {
    this.opts = options;
    this.opts.fileHead = '/*! ' + options.time + ' _^0^_ ' + options.author + ' */';
    this.md5lists = [];
}

/**
 * 扩展应用
 * @param  {[type]} compiler [description]
 * @return {[type]}          [description]
 */
webpack_plugin_makeheadcdn.prototype.apply = function(compiler) {

    var self = this;

    //即将生成文件
    compiler.plugin("emit", function(compilation, callback) {

        compilation.chunks.forEach(function(item, key) {
            self.md5lists.push({
                files: item.files,
                hash: item.hash
            });
        });

        //替换相关内容
        self.md5lists.forEach(function(element, index) {
            var assetsname = element.files[0];
            // console.log(assetsname)
            var html = compilation.assets[assetsname].source();

            compilation.assets[assetsname].source = function() {

                // 替换md5时间戳 目前只支持下列格式
                // `/dist/task.v2.0.js?v=__md5__`;
                // @todo 待优化
                html = html.replace(/dist\/(.*?.js)\?v=__md5__/g, function($0, $1) {
                    var filekey = self.options.time; //保底的key
                    self.md5lists.forEach(function(element) {
                        if (element.files[0] == $1) {
                            filekey = element.hash;
                            return;
                        }
                    });
                    return $0.replace('__md5__', filekey);
                });

                //替换时间key, 主要用于站外的CDN过期，也可以用于图片
                //支持使用 __time__ 的地方当用时间戳
                html = html.replace(/__time__/g, self.options.time);

                //文件件部;
                return self.opts.fileHead + "\n" + html;
            };
        });
        callback();
    });
};

module.exports = webpack_plugin_makeheadcdn;