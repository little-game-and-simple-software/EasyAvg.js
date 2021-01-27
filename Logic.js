$(function()
{
 var Engine=new EasyAvg()
 // NOTE: 需要先创建背景
 var bg=Engine.create_img("bg.jpg","背景")
 //console.log(bg)
 var 小夜美=Engine.create_img("char.png","小夜美")
console.log(小夜美);
小夜美.css("margin-left","500px")
小夜美.css("margin-top","20px")
 var dialog=Engine.create_TextBackground()

 var clicks=0

 dialog.click(function()
 {
   clicks+=1
   //alert("点击了对话框")
   if(clicks==2)
   {
     dialog.text("是第二句话")
   }
   if(clicks==3)
   {
     dialog.text("后面没有话了！")
   }
 })
 dialog.css("position","200px","200px")
Engine.create_BackroundImg(bg)
 $("body").append(bg)
$("body").append(小夜美)
 $("body").append(dialog)

}
)
