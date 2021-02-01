$(function()
{
  var file=new FileSystem()
  /*初始化图像特效模块*/
  var Effect=new ImageEffect()
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
    /*历史记录*/
    $("#history").click(function()
    {
      // alert("历史记录！")
      $("div").toggle()
    })
  }
  initUI()
  /*逻辑代码*/
 var Engine=new EasyAvg()
 // NOTE: 需要先创建背景
 var bg=Engine.create_img("../img/bg.jpg","背景")
 var koyomi=Engine.create_img("../img/char.png","小夜美")
 // Engine.showBgm()
 Engine.setBgmVolume(0.5)

koyomi.css("margin-left","500px")
koyomi.css("margin-top","20px")
koyomi.click(function()
{
  alert("点击了人物，开始播放音乐")
  $("#bgm")[0].play()
  // Effect.setImageEffect(bg,Effect.blur)
  // Effect.setImageEffectValue(koyomi,"60px")
  // Effect.clearAllEffect(koyomi)
})
 var dialog=Engine.create_Dialog()
// NOTE: 从文本文件读取剧情
var chapter1=file.load_Plot_Text("../chapter/1.txt")
dialog.setContent(chapter1[0])
dialog.setDebugLog(true)
//定义人物图片变化，定义bgm变化
// BUG: 这个地方有小bug 顺序问题，
// dialog.setCustomActionAt(0,b)
Engine.create_BackroundImg(bg)
 // dialog.changeImgAt(3,koyomi,"../img/k18.png")
 $("#hideDialog").click(function()
 {
   dialog.toggle()
 })
 var effect=function()
 {
   // alert("自定义事件1 背景模糊！")
   Effect.setImageEffect(bg,Effect.blur)
 }
 var effect2=function()
 {
   Effect.setImageEffect(bg,Effect.invert)
 }
 var bright=function()
 {
   Effect.setImageEffect(koyomi,Effect.bright)
 }
 var gray=function()
 {
   // Effect.clearAllEffect(koyomi)
   Effect.setImageEffect(koyomi,Effect.gray)
 }
 var clear=function()
 {
   Effect.clearAllEffect(bg)
   Effect.clearAllEffect(koyomi)
 }
 //事件 bug了 修好了 core.js计数器判断和执行方式推倒 重写
  // dialog.changeBgmAt(1,"../bgm/i72008_momoiro_cherry.ogg")
  dialog.changeImgAt(1,koyomi,"../img/k18.png")
  dialog.changeImgAt(2,koyomi,"../img/char.png")
  /*更换角色*/
  // NOTE: 更换角色没有过度效果 过于突然 以后优化图像效果
  dialog.changeImgAt(5,koyomi,"../img/c03.png")
  dialog.setCustomActionAt(14,effect)
  //反色
  dialog.changeImgAt(15,koyomi,"../img/k20.png")
  dialog.setCustomActionAt(15,effect2)
  dialog.changeBgmAt(15,"../bgm/i71009_asia.ogg")
  dialog.setCustomActionAt(17,bright)
  dialog.setCustomActionAt(18,gray)
  dialog.setCustomActionAt(19,clear)
  /*恢复原图*/
  dialog.changeImgAt(20,koyomi,"../img/char.png")
  dialog.changeBgmAt(20,"../bgm/i71004_fresh.ogg")
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
