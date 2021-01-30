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
      $("#bgm").volume=0.5
      $("#bgm")[0].play()
    })
  }
  function initUI()
  {
    $("#newGame").click(function()
    {
      alert("新游戏")
      changeScene("Scene/Game.html")
    })
    $("#loadGame").click(function()
    {
      alert("加载游戏")
      changeScene("save.html")
    })
    $("#dev").click(function()
    {
      alert("开发室")
    })
    $("#free").click(function()
    {
      alert("感谢您走进Noesis的世界 \n 这款游戏是由我们的同好会--classic_chocolat所制作")
    })

  }
  initBg()
  initBgm()
  initUI()
  $("#exit").click(function()
  {
    alert("感谢游玩此游戏！")
    $("#bgm")[0].pause()
    $("#bgm")[0].load()
  })
})
