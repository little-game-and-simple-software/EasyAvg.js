EasyAvg——》核心引擎类
 EasyAvg.create_img 创建图片对象 参数src：图片文件地址 alt=当图片无法加载时的描述
返回Image对象
EasyAvg.create_TextBackground 创建背景对话框
参数 color颜色值
EasyAvg.scale_img 修改图片大小 参数img scale

EasyAvg.create_BackroundImg创建背景图片 参数img对象

文件系统API cookie fileSystem NOTE没有开发
FileSystem类
Array FileSystem.load_Plot_Text(url)
参数URL是文本所在的地址 这里必须在Http服务器环境下面才能运行
返回一个数据变量，使用
Dialog.setContent(array[0])来设置文本剧情
至于为什么必须是array[0]的原因
在源码chapterTest/test.js 和module/FileSystem.js可以看见原因 



使用jQuery cookie插件保存进度
EasyAvg.save(mode,value) 参数 mode使用的存档api value值

基于jquery +html5 js 没有用canvas
凡是用EasyAvg框架创建的对象，一般都可以使用jquery方法，比较灵活，不会封装死了

jquery常用对象方法 NOTE一下用$表示Jquery对象 是伪代码

NOTE 为对象创建click事件，并执行function内部代码
$.click(function()
{

})
NOTE 修改对象文字，仅对文字对象有效
$.text("值")

NOTE 获取/设置'$'对象属性值
$.attr()

NOTE Dialog类
方法：
create_Dialog() //创建Dialog对象 实际是<p></p>的jquery对象
clearClicks() //清除内置计数器
setDebugLog(boolean) //设置是否显示调试信息
setFinishAction(function) //没有句子可以播放时，执行的代码
示例代码：
var Engine=new EasyAvg()
var dialog=Engine.create_Dialog()
var text=['这是一段测试对话，你因为挪动了时间，导致了不可预知的问题！','第二段','第三段']
Dialog类
dialog.setContent(text)
dialog.setDebugLog(true)



// NOTE: 后面这段代码是设置没有句子可以播放时，执行的代码
var action=function MyFinishAction()
{
 console.warn("#游戏结束#，来自逻辑层代码");
}

dialog.setFinishAction(action)
//根据索引改变bgm
dialog.changeBgmAt(index,src)
NOTE Engine ->core.js内
// WARNING: 以下代码只在你在html里写了
//<audio id="bgm"  controls autoplay="true" loop="true"></audio>
//的时候生效
var Engine=new EasyAvg()
//是否显示audio控件 默认为不显示 bgm.css
Engine.showBgm()
Engine.hideBgm()
Engine.changeBgm(src) //改变bgm
