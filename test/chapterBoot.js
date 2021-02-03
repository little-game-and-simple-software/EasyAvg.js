$(function()
{
  var test_clicks=0
  $("#chapterLoader").click(function()
  {
    // evalTest("")
    ChapterLoaderTest()
    // ChapterLoader.Iload("../fullExample/chapter/1.txt")
  })
  $("#clickDialog").click(function()
  {
    console.clear()
    test_clicks+=1
    console.warn("#点击次数_"+test_clicks);
  })
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
