NOTE jqueryGetTest.js 暂存代码
$.get(url,function(data,status)
{
  if(data)
  {
    var 剧情分词=data.split("\n")
    // var 函数分词=
    for(var i=0;i<data.length;i++)
    {
      var line=dataArray[i]
      //判断剧情文本是否null （比如说多打了一个回车的问题）
      if(line!=null)
      {//不敢嵌套递归，怕卡死，浏览器卡住会很慢，不好关
        if(line==">")
        {
          di_gui_text("../fullExample/chapter/2.txt")
          di_gui_script("../fullExample/chapterScript/func2.js.txt")
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
          break
        }
        // WARNING: Bug隐患（直觉）TAT
        // console.log("当前句子_"+dataArray[i]);
      }
    }
  }
})
//----------递归获取脚本
function di_gui_script(url)
{
  $.get(url,function(data,status)
  {
    if(data)
    {
      var dataArray=data.split("\n")
      for(var i=0;i<data.length;i++)
      {
        var line=dataArray[i]
        if(line!=null)
        {
          eval(line)
          console.log("当前代码_"+line);
        }
      }
    }
  })
}
//--------递归获取文本
