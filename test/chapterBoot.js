// evalTest("")
// ChapterLoaderTest()
// ChapterLoader.Iload("../fullExample/chapter/1.txt")
//章节测试
$(function()
{
  var 数据数组
  var clicks=0
  var Engine=new EasyAvg()
  var dialog=Engine.create_Dialog()
  var ChapterLoader=new ChapterReader() //初始化
  $("body").append(dialog)
  //加载剧情的按钮 初始化加载器 应该第一个运行
  $("#chapterLoader").click(function()
  {
    // var custom=function(){alert("这时用户定义的结束函数")}
    // ChapterLoader.setFinishFunc(custom)
    数据数组=ChapterLoader.testLoad(ChapterLoader.txt1,ChapterLoader.func1)
    console.log("#获取到的二维数组");
    console.log(数据数组); //加载完立刻显示句子和执行函数表的函数
    dialog.text(数据数组[0][0])
    eval(数据数组[1][0])
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
  //以前实现的，之后删除
  function ChapterLoaderTest() //剧情加载器单元测试
  {
    var ChapterLoader=new ChapterReader()
    var custom=function(){alert("这时用户定义的结束函数")}
    ChapterLoader.setFinishFunc(custom) // NOTE: 这个方法需要在加载正式开始之前调用
    ChapterLoader.test(ChapterLoader.txt1,ChapterLoader.func1)
  }
  // 执行函数测试 eval测试
  function evalTest(code)
  {
    var 返回值=eval(code)
    console.log("eval返回值:"+返回值);
    return 返回值
  }
})
