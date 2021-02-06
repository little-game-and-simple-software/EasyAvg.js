var a
$(function()
{
  var Engine=new EasyAvg()
  var file=new FileSystem()
  var dialog=Engine.create_Dialog()
  $("body").append(dialog)
  var a=  file.load_Plot_Text("../chapter/1.txt")
  console.log(typeof(a));
  //由于return之后，在这里a变成了object 是二维数组 而文字数据在第一个所以 所以是a[0]
  dialog.setContent(a[0])
var end=function()
{
  alert("代码运行到了结尾")
}
dialog.setFinishAction(end)
})
