const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 每次成功构建之后，清空dist目录，因为有时候避免缓存会在文件会面加上hash，这样在多次构建后会产生额外无用文件

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}
