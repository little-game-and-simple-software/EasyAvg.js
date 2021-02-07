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
      changeScene("Load_and_Save.html")
    })
    $("#dev").click(function()
    {
      alert("小沙盒工作室\n 这是我在2018年随手写的剧本，当前我们在研究基础技术")
    })
    $("#free").click(function()
    {
      alert("感谢您走进LitteSandBox的世界 \n 这款游戏是由我自己-128hh制作的")
    })

  }
  initBg()
  initBgm()
  initUI()
  /*绑定按钮音效*/
  $("button").click(function()
  {
  //  alert("#绑定！")
    // $("#btn_sound")[0].load()
    // $("#btn_sound")[0].play()
  })
  $("#exit").click(function()
  {
    alert("感谢游玩此游戏！")
    // $("#bgm")[0].pause()
    // $("#bgm")[0].load()
    changeScene("index.html")
  })
  $("#ModuleTest").click(function()
  {
    changeScene("test/test.html")
  })
})
