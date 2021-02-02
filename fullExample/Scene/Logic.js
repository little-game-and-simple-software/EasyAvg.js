// NOTE: 游戏主逻辑文本
$(function()
{
  var Engine=new EasyAvg()
  var file=new FileSystem()
  //动画
  var Anim=new AnimateEffect()

  var historyText=[]
  /*初始化图像特效模块*/
  var Effect=new ImageEffect()
  alert("请先点击开始按钮来播放背景音乐，由于浏览器安全设置，不能自动播放，点击人物，也能开始播放音乐")
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
      var h=localStorage.getItem("historyText")
      console.log("#读取历史文本");
      // console.log(h.split("\n"))
      var 文本=h.split("\n")
      var len=h.split("\n").length

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
 var bg=Engine.create_img("../img/bg.jpg","背景")
 var dialog=Engine.create_Dialog()
 var koyomi=Engine.create_img("../img/char.png","小夜美")
koyomi.css("margin-left","500px")
koyomi.css("margin-top","20px")
koyomi.css("position","relative")
koyomi.click(function()
{
  // alert("点击了人物，开始播放音乐")
  // $("#bgm")[0].play()
  //此方法不能放入函数列表，会被自动执行
  koyomi.animate({right:'250px',opacity:'0.5'})
  // koyomi.animate({opacity:'1'})
  // Anim.setAnimate(koyomi,Anim.move_to_left)
  // Anim.setAnimate(koyomi,Anim.move_to_right)
    // koyomi.animate({right:'250px'})
})
// NOTE: 从文本文件读取剧情
var chapter1=file.load_Plot_Text("../chapter/1.txt")
dialog.setContent(chapter1[0])
dialog.setDebugLog(true)
Engine.create_BackroundImg(bg)
/*-----自定义函数------*/
 var effect=function()
 {
   Effect.setImageEffect(bg,Effect.blur,"20px")
 }
 var effect2=function()
 {
   Effect.setImageEffect(bg,Effect.invert,"100%")
 }
 var bright=function()
 {
   Effect.setImageEffect(koyomi,Effect.bright,"20%")
 }
 var gray=function()
 {
   Effect.setImageEffect(koyomi,Effect.gray,"100%")
 }
 var clear=function()
 {
   Effect.clearAllEffect(bg)
   Effect.clearAllEffect(koyomi)
 }
 /*-------自定义函数----*/
 // 设置文字大小
// dialog.setFontSize()
 // NOTE: 更换角色没有过度效果 过于突然 以后优化图像效果
 /*--自定义函数绑定---*/
 var s=function()
 {
     Anim.setAnimate(koyomi,Anim.move_to_left)
 }
  dialog.changeImgAt(1,koyomi,"../img/k18.png")
  // dialog.setCustomActionAt(2,koyomi,koyomi.animate({right:'250px',opacity:'0.5'}))
  dialog.changeImgAt(2,koyomi,"../img/char.png")
  dialog.changeImgAt(5,koyomi,"../img/c03.png")
  dialog.setCustomActionAt(14,effect)
  // //反色
  dialog.changeImgAt(15,koyomi,"../img/k20.png")
  dialog.setCustomActionAt(15,effect2)
  dialog.changeBgmAt(15,"../bgm/i71009_asia.ogg")
  dialog.setCustomActionAt(17,bright)
  dialog.setCustomActionAt(18,gray)
  dialog.setCustomActionAt(19,clear)

  /*恢复原图*/
  dialog.changeImgAt(20,koyomi,"../img/char.png")
  dialog.changeBgmAt(20,"../bgm/i71004_fresh.ogg")
  /*--自定义函数绑定---*/

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
   // localStorage.setItem("todoData",todoObj)
   // changeScene("../save.html")
 })

  // bindingButtonAction(dialog)
})
