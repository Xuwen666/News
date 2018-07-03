# Muke

html结构:header> nav >li>a 
				 ul>li>a
		在屏幕处于超小屏幕的时候隐藏
		div>img
			ul




在处理移动端首屏banner的时候第一个主推banner下边出现一条下边框线
解决方案： 当前的高度太高 背景图平铺不完整的
代码 less文件 354行

在移动端下nav导航条位置滚着滚动条的变化而变化
解决方案:nav导航条通过position:fixed 定位到顶部并且设置宽度为100% 最后要提升他的层级 以免下滑的时候被后面的内容遮盖
代码.index.less文件 350行-359行


使用js来判断客户端是移动端还是pc端
参考简书
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "https://www.baidu.com/";
} else {
    window.location.href = "http://news.baidu.com/";
}


链接：https://www.jianshu.com/p/15c40daa0048

移动端编辑推荐
由pc端的一行四列变换成一行列
col-md-3  col-sm-6 col-xs-6 (在中等屏幕以上的显示器一行显示四个,在平板分辨率的屏幕下显示两个,在收集下显示两个)

最新资讯
在移动端下bs媒体对象 img隐藏
解决方案给media-left 加上 hidden-xs hidden-sm

在处理最新资讯的时候为最后一个media清除border的时候 用last-of-type方法不行
出现这个问题的情况是在在最后一个meida一下还有div的时候,至于为什么会出现目前还没的到解决方案,唯一能避免的方法就是这之后添加div
解决方案：如果在后面加上近期活动的话,我们可以清楚倒数第二个来实现这个效果
nth-last-of-type(2)

近期活动 在中等屏幕以及大屏幕下隐藏在平板 手机设备下显示
需求做成移动端的轮播样式 左右滑动屏幕可切换上一张或下一张


移动端实现左右滑屏
思路一 找插件

hammer.js手势库

https://blog.csdn.net/diligentkong/article/details/74990040 参考

针对不同pc手机 调整不同的图片大小,在手机下可以优化


实现在moblie滑动轮播图  
解决思路 获取到手指按下 以及离开的位置,用他们的值算出移动的距离,判断 当距离大于一定值时认为是有方向的变化,还需要判断是往哪个方向移动,如果离开的时候大于手指初始按下去的时候那么就是往上移动图片,反之则往下移动图片



回到顶部需求
解决思路:回到顶部默认opacity,当滚轮距离大于等于首屏的的宽度在显示, 显示的过程中有透明度过渡的效果，显示的位置距离body底部100px左右(这个定位要用js动态的去获取 位置计算为滚动距离+可视区距离-30-自己的高度)
判断当 滚动距离+可视区高度>=整体文档的高度-底部版权自身高度


点击返回顶部按钮的时候,获取到当前的scrolltop减去固定值,开一个定时器一直跑,当scrolltop减去固定值小于等于0的时候停止定时器
<<<<<<< HEAD
如果我想让速度由快变慢呢
思路：获取当前滚动条的距离/一个固定值
为了防止用户在回弹的过程中滚动滚轮,设置一个开关由于控制
=======

>>>>>>> b83ce15e773b90fe07573fa75668dbbe3d0e2e31
注意:JQ写$(window)不双引号

cs解决固定位置思路设置position:fixed

判断当侧边栏靠近底部版权的时候
侧边栏当前自身的高度+距离文档的距离$( "元素选择器" ).offset().top>=$bodtH-($('.footer').height()+430)

固定top位置:文档高度-版权高度-30-自身高度

当他返回的时候他会触发两个判断条件

换个判断条件

文档高度$(document.body).height()-($('.footer').height()+30)

还有页面一刷新进来的时候判断当前的位置





//登录页

文档高度

