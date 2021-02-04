// NOTE: 游戏主逻辑文本
// NOTE: 用于底层data和设计逻辑大概，此Deomo暂时无法正常运行，请下载0.2.3版本的Demo
$(function()
{
  var Engine=new EasyAvg()
  // var ChapterLoader=new ChapterReader()
  var PlotLoader=new IPlotLoader()
  var file=new FileSystem()
  var historyText=[]
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
      changeScene("../save.html")
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
  /*逻辑代码*/
  // Engine.showBgm()
 Engine.setBgmVolume(0.5)
 window.bg=Engine.create_img("../img/bg.jpg","背景")
 var dialog=Engine.create_Dialog()
 //改用全局变量 测试
 window.koyomi=Engine.create_img("../img/char.png","小夜美")
 koyomi.css("margin-left","500px")
 koyomi.css("margin-top","20px")
koyomi.css("position","relative")
koyomi.click(function()
{
  alert("点我干涉么，溜了..")
  koyomi.animate({right:'250px',opacity:'0.5'})
})
// NOTE: 从文本文件读取剧情 此步骤由剧情加载器完成，不应该人为干涉
// var dataArray=ChapterLoader.testLoad(ChapterLoader.txt1,ChapterLoader.func1)

//初始化剧情
function initPlot()
{
  // var tmp_cookie=$.cookie("tmp_plot_array")
  // var data_obj=JSON.parse(tmp_cookie)
  var data_obj=PlotLoader.load("../chapter/1.txt","../chapterScript/func1.js.txt")
  console.warn("#加载器返回值");
  console.log("type:"+typeof(data_obj));
  console.log(data_obj);
  // dialog.text(data_obj[0])
  dialog.setContent(data_obj)
  // dialog.text(data_obj.plot[0])
}
initPlot()
// dialog.setContent(dataArray)
dialog.setDebugLog(true)
Engine.create_BackroundImg(bg)

//添加ui
$("body").append(bg)
$("body").append(koyomi)
$("body").append(dialog)

// 存档
$("#saveGame").click(function()
 {
   console.warn("##存档！");
   //在跳转存档页面之前，先暂存游戏运行状态执行到哪一个句子的index
   var index=dialog.getRuntimeIndex()
   console.warn("#运行状态"+index);
   $.cookie('runTimeIndex',index,{path:'/',secure:true})
   // var todoObj=JSON.stringify({"todoActionIndex":todoActionIndexArray,"functions":functionsList})
   // changeScene("../save.html")
 })

  // bindingButtonAction(dialog)
})
