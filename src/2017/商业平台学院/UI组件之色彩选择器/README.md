# UI组件之色彩选择器
[任务首页](http://ife.baidu.com/course/detail/id/16)

## 实现思路
在知道了颜色的生成逻辑后（右侧色带的颜色的值，点色带的某个点后，生成的颜色矩形的值），和RGB和HSL的转换逻辑后，实现比较简单难度。

有一位数组保存右侧色带的值，点击某个颜色，用二位数组保存颜色矩形的值。用Canvas 或背景图来画，根据点击的位置，去数组拿对应的值。以 RGB 和 HSL 的值来显示。


## 颜色相关链接
* [三原色光模式](https://zh.wikipedia.org/wiki/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F)
* [HSL和HSV色彩空间](https://zh.wikipedia.org/zh/HSL%E5%92%8CHSV%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4)

上面的链接都需翻墙。

## 可参考插件
* [React Color](http://casesandberg.github.io/react-color/)
* [jquery-minicolors](https://github.com/claviska/jquery-minicolors)