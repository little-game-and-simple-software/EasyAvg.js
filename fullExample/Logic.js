$(function()
{
  window.Engine=new EasyAvg()
  var fileManager=new FileSystem()
  function initBg()
  {
    var bg=$("#bg")
    bg.css("position","absolute")
    bg.css("z-index","-3")
  }
  function initBgm()
  {
    $("#bg").click(function()
    {
      $("#bgm").volume=0.5
      $("#bgm")[0].play()
    })
  }
  function initUI()
  {
    $("#newGame").click(function()
    {
      alert("新游戏")
      //点击后，自动清除缓存
      localStorage.removeItem("RunTimeIndex")
      changeScene("Scene/Game.html")
    })
    $("#loadGame").click(function()
    {
      alert("加载游戏")
      changeScene("save.html")
    })
    $("#dev").click(function()
    {
      alert("Classic_Chocolat\n 这时基于NOeSis旧作上小作重置的版本，当前我们在制作《Q-bit》等面向智能手机的独立开发adv")
    })
    $("#free").click(function()
    {
      alert("感谢您走进Noesis的世界 \n 这款游戏是由我们的同好会--classic_chocolat所制作")
    })

  }
  initBg()
  initBgm()
  initUI()
  /*绑定按钮音效*/
  $("button").click(function()
  {
  //  alert("#绑定！")
    $("#btn_sound")[0].load()
    $("#btn_sound")[0].play()
  })
  $("#exit").click(function()
  {
    alert("感谢游玩此游戏！")
    $("#bgm")[0].pause()
    $("#bgm")[0].load()
    changeScene("splash.html")
  })
  $("#ModuleTest").click(function()
  {
    changeScene("../test/test.html")
  })
})
