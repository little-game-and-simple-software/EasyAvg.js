// NOTE: 游戏主逻辑文本 此脚本不应该被随意更改，除非懂得技术 用于游戏初始化，
// NOTE: 用于底层data和设计逻辑大概，此Deomo暂时无法正常运行，请下载0.2.3版本的Demo
$(function()
{
  var Engine=new EasyAvg()
  var PlotLoader=new IPlotLoader()
  var file=new FileSystem()
  var historyText=[]
  // 定义人物路径变量
  window.mainChar="../img/char.png"
  window.friend="../img/friend.png"
  window.friends="../img/friends.png"
  window.strange="../img/strange.png"
  /*初始化图像特效模块*/
  window.ImageEffect=new ImageEffect()
  // alert("请先点击开始按钮来播放背景音乐，由于浏览器安全设置，不能自动播放，点击人物，也能开始播放音乐")
  function initUI()
  {
    $("#start").click(function()
    {
      $("#bgm")[0].play()
    })
    $("#end").click(function()
    {
      changeScene("../index.html")
    })
    $("#loadGame").click(function()
    {
      changeScene("../Load_and_Save.html")
    })
    $("#clearCookie").click(function()
    {
      $.removeCookie('runTimeIndex',{path:'/'})
    })
    $("#clearClicks").click(function()
    {
      console.clear()
      console.warn("#清空计数器");
      dialog.clearClicks()
    })
    $("#history").click(function()
    {
      $("#HistoryPanel").toggle()
      console.log("#显示历史文本");
    })
    $("#reload").click(function()
    {
      location.reload()
    })
    $("#hideDialog").click(function()
    {
      dialog.toggle()
    })
    $("#clearAll").click(function()
    {
      file.clearAll()
    })
  }
  initUI()
  //显示bgm
  Engine.showBgm()
  /*逻辑代码*/
 Engine.setBgmVolume(0.5)
 //背景全局变量，可以自由更改参数和变量名
 window.bg=Engine.create_img("../img/streetNight.jpg","背景图片")
 //对话框
 var dialog=Engine.create_Dialog()
 //全局人物对象 可以自由更改参数和变量名
 window.koyomi=Engine.create_img("../img/char.png","人物图片")
 //设置人物位置 参数可更改
 koyomi.css("margin-left","500px")
 koyomi.css("margin-top","20px")
 koyomi.css("position","relative")
//开启调试信息
dialog.setDebugLog(false)
dialog.useDefaultStyle(true) //是否使用默认样式
dialog.setFontSize("15px")
//创建背景图片
Engine.create_BackroundImg(bg)
//添加ui
$("body").append(bg)
$("body").append(koyomi)
$("body").append(dialog)
//初始化剧情
// NOTE: 从文本文件读取剧情 此步骤由剧情加载器完成，不应该人为干涉
/*如果存在存档优先加载*/
function initPlot()
{
  var data_obj=PlotLoader.load("../chapter/1.txt","../chapterScript/func1.js.txt")
  console.warn("#加载器返回值");
  console.log(data_obj);
  dialog.setContent(data_obj)
  if(data_obj==null) //修正变量名编写错误
  {
    dialog.text("错误，无法获取到数据")
  }
}
var t_data=localStorage.getItem("RunTimeIndex")
if(t_data)
{ //信息分离  //章节 和句子进度
  var chapterIndex=t_data.split("_")[0]
  var lineIndex=t_data.split("_")[1]
  console.warn("存在进度，自动恢复")
  console.log("#游戏进度_>_"+t_data)
  // NOTE: 从指定的位置加载剧情
  var dataObj=PlotLoader.load_from(chapterIndex,lineIndex)
  console.warn("#返回的加载后的数据");
  console.log(dataObj);
  dialog.setLoadContent(dataObj)
}//新建游戏
else
{
  console.clear()
  console.log("#不存在进度，从头开始读文件")
  initPlot()
}
// 存档按钮
$("#saveGame").click(function()
 {
   console.warn("##存档！");
   //在跳转存档页面之前，先暂存游戏运行状态执行到哪一个句子的index
   var RunTimeIndex=dialog.getRuntimeIndex()
   console.warn("#运行到哪个章节哪句话");
   console.log(RunTimeIndex);
   file.save("RunTimeIndex",RunTimeIndex)
   //当缓存完成之后跳转
   if(file.load("RunTimeIndex")!=null)
   {
     changeScene("../Load_and_Save.html")
   }
 })
})
