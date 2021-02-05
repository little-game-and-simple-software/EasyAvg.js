EasyAvg——》核心引擎类 API参考文档
一、创建框架
var Engine=new EasyAvg()
你也可以使用全局变量，方便在自定义js中调用框架里的代码
window.Engine=new EasyAvg()

二、剧情文件 文件名称规范
剧情文件名必须从1.txt开始
1.txt视为开始的章节

注意：如果要继续写新的章节，需要写成
  2.txt 3.txt 4.txt 以此类推 （程序设计思路仿了nscripter)

注意事项：
  1.建议单个剧情文件的大小最大不超过4MB,否则，可能无法存储和读取文件信息
  因为localStorage上限空间为5MB
  2.剧情文件一定要按规范写，如果乱写，有可能导致浏览器卡死

剧情文件语法规范
一、每一行就是一个段落，当玩家点击对话框之后,内部计时器数值+1，然后自动设置对话框句子
  例子：
  1.这是第一个段落，加载完毕，会自动设置文本
  2.这时第二个段落，必须玩家点击对话框之后才会被设置到对话框上面，然后显示出来

二、进入到下一个章节（文件的语法定义）
  很简单就是 > 大于号，这个符号，只需要在剧情文件的最后一行加上这个，就会告诉EasyAvg接下来要读下面一章的剧情

  注意：
    1.由于 > 此符号是跳转到下一章的关键字，所以在剧情文本中，不建议使用此符号，可以用中文 “大于”来代替这个符号。
  也不是说完全不能用，但不能写在剧情文本的每行开头。

  说明：至于为什么设计这个符号，因为我觉得这个符号容易理解，比较的形象，因为 > 这个符号看上去就是一个向右的箭头符号。
  而和这个->符号又不一样>比->简单，按shift次数更少，也是为了程序员考虑

三、游戏结束符号定义
    <end
    1.此符号将告诉EasyAvg，你的游戏完全结束了，并调用框架自带方法，返回初始界面

    注意：
    1.目前，EasyAvg在执行此符号的时候，没有做自动保存功能，所以，你需要在执行到这里之前，告诉没有存档的玩家赶紧存档。
    不然会导致白玩游戏，无存档（如果玩家在游戏结束之前就存档了，那么请忽略这一条）
    2.此问题将会在之后版本更新中解决。

一、剧情文件对于的js代码规范
    说明：
    1.每一行剧情文本对于一行js代码，如果对应的那一行剧情不需要执行代码，请按回车，留一个空行，这样不会执行任何自定义js代码
    2.如果你的代码比较复杂，也是可以实现的，你需要把代码都写在一行里，然后每个代码结尾都得加上;号
    3.如果发现双引号的字符串无效，请使用单引号''
    基本例子:
      剧情                      代码
      第一行                console.log("第一行")
      第二行                alert("我是第二行")
      第三行，我比较复杂     function custom(){alert("这时一行复杂的代码");var x=1};custom();
      >                     //进入下一章，一般不建议在这里写代码，会跳过的
    结束运行例子
        剧情
        第一行
        第二行
        第三行
        <end               //你的游戏在这里结束

如果觉得文本较长，不方便查看，请善用文本编辑器的搜索功能，之后会提供在线API文档的(read the docs)
建议使用专门的代码编辑器打开此文件，因为这样对于代码，会有自动高亮和提示
以下是API参考
class 类参考
一、EasyAvg -在core.js定义 -此框架的核心
  EasyAvg.create_img(src,alt)
  //创建并返回一个jquery图片对象 src是图片相对路径，alt是当图片无法加载时显示的提示信息
  EasyAvg.create_BackroundImg(imgObj)
  //创建一个jquery图片对象，并自动添加到当前网页中，img是一个jquery图片对象
  EasyAvg.create_Dialog()
  //创建并返回一个文本对话框对象，需要手动添加到网页中
  EasyAvg.showBgm()
  //显示audio标签的控件，一般用于调试
  EasyAvg.hideBgm()
  //隐藏audio标签的控件，一般用于调试
  EasyAvg.changeBgm()
  //更改bgm 如果此方法不起作用 请使用$("#bgm").attr("src","新音频文件的相对路径")来代替此方法
二、Dialog -在core.js定义 -此框架比较重要的部分
  Dialog.setContent(data_obj)
  //设置对话框的内容对象，不建议手动调用此方法，建议交给EasyAvg自动设置，代码在Logic.js里面
  Dialog.setLoadContent(data_obj)
  //加载已经存在的游戏进度时使用的方法 同样不建议手动调用
  Dialog.clearClicks()
  //清空对话框内部计数器，一般在调试代码的时候使用
  Dialog.setDebugLog(bool)
  //设置对话框是否显示调试信息 bool是一个布尔值
  Dialog.getClicks()
  //获得对话框内部计数器的点击次数
  Dialog.getRuntimeIndex()
  //获得游戏运行状态 返回一个字符串 例子：返回"1_1" 表示第一章 第一行
  Dialog.setFontSize()
  //设置对话框文字大小
三、FileSystem -在FileSystem.js定义 -文件系统 单个模块
  FileSystem.setDebugLog(bool)
  //设置是否显示调试信息
  FileSystem.load(key)
  //读取单个localStorage文件信息，返回获取到的值
  FileSystem.save(key,value)
  //存入一个localStorage信息
  FileSystem.load_Plot_Text(url)
  //读取剧情文本 url是文本文件路径 此方法为异步get，不建议使用
  FileSystem.set_plot_split_char(string)
  //让用户自定义剧情解析器的换号判断符号 此功能未实现，请不要使用 未来可能废弃
  FileSystem.clearAll()
  //清空所有localStorage信息，调试用途，请勿乱用，否则可能导致玩家丢失存档信息
  //如果要删除单个localStorage信息，请手动localStorage.removeItem(key)
四、方法参考（不需要创建类，直接使用，在已经通过<script>标签引入的情况下
  changeScene(src)
  //跳转到指定网页,src是相对路径 不建议手动调用，会导致未保存进度的玩家丢失进度，直接跳转 可以在游戏外调用
  //此方法跳转，默认在当前页面跳转
  如果此文档存在错误，欢迎指出并修改。
  EasyAvg 目前可能存在隐藏bug，如果在开发和制作游戏的工程中，请反馈bug信息到github

  如果看不懂此文档，请先去学习一下html基础和jquery基础,css最好也要学学，用于制作更美观的界面。
  你不需要学到精通，有点皮毛就可以利用此框架开发游戏了。

  EasyAvg 顾名思义，是简单Avg，暂时没有复杂粒子效果和其他效果。（但有图像滤镜效果）

  这里提供一个网站，菜鸟教程，你可以在这里学习基础
  https://www.runoob.com/

  后言：
  我做了个简单的语法检查器，但没有加入目前的框架中，代码在module文件夹里面。所以请遵循语法规范，否则出了问题别找我。
  Demo展示的图片是noesis游戏里面的，仅用于技术展示，请勿商用。
  使用此框架请遵循README.md中的信息
  Demo必须运行在http服务器环境下，你可以本地使用python -m http.server进行测试
  亦可以使用nginx或者其他第三方服务器
  也可以把做好的游戏发布在自己网站上面，记得注明powered by EasyAvgFrameWork 并留下开源地址链接。
  否则请勿使用，这是对作者的尊重，哪怕你字写小一点我都不介意的
