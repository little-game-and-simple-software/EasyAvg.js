$(function()
{
  var Engine=new EasyAvg()
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
      $("#bgm")[0].play()
    })
  }
  initBg()
  initBgm()
  function initUI()
  {
    $("#newGame").click(function()
    {
      alert("新游戏")
      changeScene("../index.html")
    })
    $("#loadGame").click(function()
    {
      alert("加载游戏")
      changeScene("Load.html")
    })
    $("#dev").click(function()
    {
      alert("开发室")
    })
    $("#free").click(function()
    {
      alert("感谢您走进Noesis的世界 \n 这款游戏是由我们的同好会--classic_chocolat所制作")
    })
    for(var i=0;i<5;i++)
    {
      $("button").css("background","orange")
      $("button").css("border","solid")
      $("button").css("width","100px")
      $("button").css("height","50px")
    }
  }
  initUI()
})
