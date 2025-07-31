/*
 * @Author: v_liuqin05
 * @Date: 2025-07-31 14:20:27
 * @LastEditors: v_liuqin05
 * @LastEditTime: 2025-07-31 15:33:15
 * @Description: prettier 配置
 */
module.exports = {
    printWidth: 160, // 一行最多 160 字符
    tabWidth: 4, // 一个 tab 代表 4 个空格
    semi: true, // 行尾需要分号
    singleQuote: true, // 使用单引号
    trailingComma: 'none', // 多个元素分行排列, 最后一个元素后面不需要逗号
    proseWarp: 'never', // Un-wrap each block of prose into one line
    arrowParens: 'avoid', // 箭头函数只有一个参数的时候, 不需要括号
    bracketSpacing: true, // 对象的大括号与内容之间需要空格
    htmlWhitespaceSensitivity: 'ignore' // 忽略标签周围的空格
};
