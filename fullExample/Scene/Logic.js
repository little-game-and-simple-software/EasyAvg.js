$(function()
{
  var file=new FileSystem()
  alert("请先点击开始按钮来播放背景音乐，由于浏览器安全设置，不能自动播放，点击人物，也能开始播放音乐")
  function initUI()
  {
    $("#end").click(function()
    {
      changeScene("../index.html")
    })
    $("#start").click(function()
    {
      $("#bgm")[0].play()
    })
    $("#loadGame").click(function()
    {
      changeScene("../save.html")

    })
  }
  initUI()
  /*逻辑代码*/
 var Engine=new EasyAvg()
 // NOTE: 需要先创建背景
 var bg=Engine.create_img("../img/bg.jpg","背景")
 var koyomi=Engine.create_img("../img/char.png","小夜美")
 console.warn("#设置bgm音量");
 $("#bgm")[0].volume=0.5
//改变人物动作 参数是第几个段落 index从0开始
//var koyomi_2=Engine.create_img("k18.png","k")
koyomi.css("margin-left","500px")
koyomi.css("margin-top","20px")
koyomi.click(function()
{
  alert("点击了人物，开始播放音乐")
  $("#bgm")[0].play()
})
 var dialog=Engine.create_Dialog()
// NOTE: 旧方法
// var text=['喂！？一爬起来就趴下可不成啊','今天第一节课是小考，所以昨天不是说好了要教我功课的吗','说好的了吧',"真是的，再不快点起来我会很困扰的啊"]
// NOTE: 从文本文件读取剧情
var chapter1=file.load_Plot_Text("../chapter/1.txt")
dialog.setContent(chapter1[0])
dialog.setDebugLog(true)
//定义人物图片变化，定义bgm变化
dialog.changeImgAt(2,koyomi,"../img/k18.png")
dialog.changeBgmAt(2,"../bgm/i72008_momoiro_cherry.ogg")
var action=function MyFinishAction()
{
  console.warn("#游戏结束#，来自逻辑层代码");
  alert("结束")
  changeScene("../index.html")
}
//dialog.setFinishAction(action)
Engine.create_BackroundImg(bg)
//添加ui
$("body").append(bg)
$("body").append(koyomi)
$("body").append(dialog)
// NOTE: 绑定按钮code 存档
function bindingButtonAction(dialog)
{
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
    $("#reload").click(function()
    {
      location.reload()
    })
    $("#saveGame").click(function()
     {
       console.warn("##存档！");
       //在跳转存档页面之前，先暂存游戏运行状态执行到哪一个句子的index
       var index=dialog.getRuntimeIndex()
       console.warn("#运行状态"+index);
       $.cookie('runTimeIndex',index,{path:'/',secure:true})
       //localStorage.setItem("test","test1ad3s1")
       //file.save("runTimeIndex",index)
       changeScene("../save.html")
     })
   }
  bindingButtonAction(dialog)
  //从文本文件读取剧情
})
