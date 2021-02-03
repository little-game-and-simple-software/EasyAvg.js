// evalTest("")
// ChapterLoader.Iload("../fullExample/chapter/1.txt")
//章节测试
$(function()
{
  var objArray=[]
  var clicks=0
  var Engine=new EasyAvg()
  var dialog=Engine.create_Dialog()
  var PlotLoader=new TxtLoader()
  // var ChapterLoader=new ChapterReader() //初始化
  $("body").append(dialog)
  //加载剧情的按钮 初始化加载器 应该第一个运行
  $("#chapterLoader").click(function()
  {
    objArray=PlotLoader.load("../fullExample/chapter/1.txt","../fullExample/chapterScript/func1.js.txt")
    console.log("#获取到的二维数组");
    console.log(objArray); //加载完立刻显示句子和执行函数表的函数
    console.log("#句子数组");
    console.log(objArray[0][0]);
    // dialog.text(objArray[0])
    // eval(数据数组[1][0])
  })
  //模拟点击Dialog的按钮
  $("#clickDialog").click(function()
  {
    // console.clear()
    clicks+=1
    console.warn("#点击次数_"+clicks);
    var line=数据数组[0][clicks]
    if(line==">")
    {
      // NOTE: 进入下一章索引归零
      clicks=0
      数据数组=ChapterLoader.testLoad(ChapterLoader.txt2,ChapterLoader.func2)
      dialog.text(数据数组[0][0])
    }
    if(line.indexOf("<")==0)
    {
      dialog.text("") //当有<时，不显示文字，因为是指令信息，不能显示出来！
      if(line.split("<")[1]=="end")
      {
        alert("默认结束方法")
        window.open("../fullExample/Splash.html","_self")
      }
      if(line.split("<")[1]=="custom_end")
      {
        dialog.text("")
        alert("自定义结束方法")
        window.open("../fullExample/Splash.html","_self")
      }
    }
    //设置句子和执行函数
    dialog.text(数据数组[0][clicks])
    eval(数据数组[1][clicks])
    console.log("句子_"+line)
  })
})
