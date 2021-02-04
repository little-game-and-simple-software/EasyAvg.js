//章节测试
$(function()
{
  // NOTE:   // var obj={"text_array":plot_array,"func_array":func_array}
  var data_obj={}
  var clicks=0
  var chapter_index=0 //第几章
  var Engine=new EasyAvg()
  var dialog=Engine.create_Dialog()
  var PlotLoader=new TxtLoader()
  // var ChapterLoader=new ChapterReader() //初始化
  $("body").append(dialog)
  //加载剧情的按钮 初始化加载器 应该第一个运行
  $("#chapterLoader").click(function()
  {
    data_obj=PlotLoader.load("../fullExample/chapter/1.txt","../fullExample/chapterScript/func1.js.txt")
    dialog.text(data_obj.plot[0])
    console.warn("#加载剧情后，返回的JSON对象");
    console.log(data_obj); //加载完立刻显示句子和执行函数表的函数
    // eval(数据数组[1][0])
  })
  //模拟点击Dialog的按钮
  $("#clickDialog").click(function()
  {
    // console.clear()
    clicks+=1
    console.warn("#点击次数_"+clicks);
    var line=data_obj.plot[clicks]
    if(line==">")
    {
      // NOTE: 进入下一章索引归零
      console.warn("#进入下一章");
      clicks=0
      // localStorage.removeItem("plot")
      data_obj=PlotLoader.load("../fullExample/chapter/2.txt","../fullExample/chapterScript/func2.js.txt")
      dialog.text(data_obj.plot[0])
    }
    // if(line.indexOf("<")==0)
    // {
    //   dialog.text("") //当有<时，不显示文字，因为是指令信息，不能显示出来！
    //   if(line.split("<")[1]=="end")
    //   {
    //     alert("默认结束方法")
    //     window.open("../fullExample/Splash.html","_self")
    //   }
    //   if(line.split("<")[1]=="custom_end")
    //   {
    //     dialog.text("")
    //     alert("自定义结束方法")
    //     window.open("../fullExample/Splash.html","_self")
    //   }
    // }
    //设置句子和执行函数
    dialog.text(line)
    // eval(数据数组[1][clicks])
    console.log("句子_"+data_obj.plot[clicks])
  })
})
