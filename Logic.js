$(function()
{
  alert("请先点击开始按钮来播放背景音乐，由于浏览器安全设置，不能自动播放")
  function initUI()
  {
    $("#end").click(function()
    {
      changeScene("fullExample/Title.html")
    })
  }
  initUI()
  for(var i=0;i<2;i++)
  {
    $("button").css("background","orange")
    $("button").css("border","solid")
    $("button").css("width","100px")
    $("button").css("height","50px")
  }
 var Engine=new EasyAvg()
 // NOTE: 需要先创建背景
 var bg=Engine.create_img("bg.jpg","背景")
 //console.log(bg)
 var btn= Engine.create_btn("按钮")
 $("body").append(btn)
 var koyomi=Engine.create_img("char.png","小夜美")
//改变人物动作 参数是第几个段落 index从0开始
//var koyomi_2=Engine.create_img("k18.png","k")
console.warn(koyomi);
// BUG: 没有变动图片
//koyomi.changeImgAt(2,koyomi,"k18.png")
koyomi.css("margin-left","500px")
koyomi.css("margin-top","20px")
 var dialog=Engine.create_Dialog()
 var text=['喂！？一爬起来就趴下可不成啊','今天第一节课是小考，所以昨天不是说好了要教我功课的吗','说好的了吧',"真是的，再不快点起来我会很困扰的啊"]
dialog.setContent(text)
dialog.setDebugLog(true)
dialog.changeImgAt(2,koyomi,"k18.png")
var action=function MyFinishAction()
{
  console.warn("#游戏结束#，来自逻辑层代码");
}
dialog.setFinishAction(action)
//console.log(dialog.clicks)
 //var clicks=0

Engine.create_BackroundImg(bg)
 $("body").append(bg)
$("body").append(koyomi)
 $("body").append(dialog)

}
)
