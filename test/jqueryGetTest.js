// NOTE: jQuery递归获取文本测试
$(function()
{
  var dataArray=[]
  var scriptArray=[]
  var 剧情分词=[]
  var 函数分词=[]
  var 同步指针索引 //index
  var ChapterLoader=new ChapterReader()
  //将文本加载器和脚本加载器拆分成两个对象
  var PlotLoader=new TxtLoader()
  var ScriptLoader=new IScriptLoader()
  //Mix混合处理
  // 暂时废弃的方法
  function di_gui_text(str_url,func_url)
   {
    var 剧情文本数据
    var 函数文本数据
    // 分两个get 第一个去获取剧情文本文件 第二个去获取js文本文件
     /*获取剧情文件*/
    $.get(str_url,function(data,status) //get 套get
    {
      if(data)
      {
        剧情分词=data.split("\n")
        for(var i=0;i<剧情分词.length;i++)
        {
          同步指针索引=i
          var line=剧情分词[i]
          var code=函数分词[i]
          if(line!==null)
          {
            console.log("#当前句子_"+line);
            console.log("#当前代码_"+code);
            eval(code)
          }
          if(line==">")
          {
          di_gui_text("../fullExample/chapter/2.txt","../fullExample/chapterScript/func2.js.txt")
         }
         if(line.indexOf("<")==0)
        {
           if(line.split("<")[1]=="end")
          {
            console.warn("#默认结束")
            break
          }
          if(line.split("<")[1]=="custom_end")
          {
            alert("自定义结束")
            break
           }
        }
      }
    }
    })
}

  $("#jqueryGetTest").click(function()
  {
    // di_gui_text("../fullExample/chapter/1.txt","../fullExample/chapterScript/func1.js.txt")
  })
})
