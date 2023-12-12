module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 75,
            // 根字体大小是 37.5
            propList: ['*'],
            selectorBlackList: ['.no_rem']
            // 过滤掉.no__rem-开头的class，不进行rem转换处理
        }
    }
}