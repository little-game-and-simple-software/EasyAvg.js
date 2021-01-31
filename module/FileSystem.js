//// NOTE: 游戏存档/读档封装类  API是localStorage
function FileSystem()
{
  var plot_text=[]
  /*读取localStorage*/
  this.load=function(key)
  {
    var value=localStorage.getItem(key)
    if(value)
    {
      return value
    }
    else
    {
    //  console.warn("错误，值不存在")
    }
  }
  this.save=function(key,value)
  {
    //console.log("存入了值"+value)
    localStorage.setItem(key,value);
  }
  /*读取剧情文本 url是文本文件路径*/
  this.load_Plot_Text=function(url)
  {
  // BUG: Jquery实现方式存在问题，使用localStorage作为全局变量用
    //jquery
    $.get(url,function(data,status)
    {
      //对文本处理，变成数组
      localStorage.setItem("tmp_chapter",data)
      //使用中文句号判断一行，所以在文中除了句子段落末尾，别的地方不能出现句号
      //技术不行，还得看看比人开源引擎是怎么写的

      //$.cookie("tmp_chapter",data,{path:'/'})
      //解决办法？转用cookie存储
    })
    var tmp=localStorage.getItem("tmp_chapter")
    //console.log("此时,tmp的值"+tmp);
    var t1=tmp.split("。")
    //console.warn("#字符串分割")
    //console.log(t1);
   return Array(t1)

  }
  /*清空所欲存档*/
  this.clearAll=function()
  {
    localStorage.clear()
  }
}
