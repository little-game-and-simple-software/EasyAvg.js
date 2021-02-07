// NOTE: 从ChapterReader单独拆分出的功能
// NOTE: 语法检查器 如果语法正确返回true 如果语法不正确，返回false
//防止用户编写错误代码可能导致的浏览器卡死问题
function check_line(line)
{
  //true为正确 false为错误
  var 语法正确吗=false
  if(line.indexOf(">")==0) //检测是否进入下一章
  {
    // console.log("#检测到游戏下一章符号");
    语法正确吗=true
  }
  if(line.indexOf("<")==0) //结束语法
  {
    // console.log("#检测到游戏结束符号");
    if(line.split("<")[1]=="end")
    {
      语法正确吗=true
    }
    if(line.split("<")[1]=="custom_end")
    {
      语法正确吗=true
    }
  }
  else
  {
    语法正确吗=true
  }
  return 语法正确吗
}
