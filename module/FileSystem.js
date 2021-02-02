// NOTE: 游戏存档/读档封装类  API是localStorage
// WARNING: 注意，必须要设置finishAction行为,不然会导致内部计数器一直累加，然后存档索引数据和剧情索引对不上去，就无法显示文本了
function FileSystem()
{
  var custom_split_char=""
  var debugMode=true
  this.setDebugLog=function(bool)
  {
    if(bool)
    {
      debugMode=true
    }
    else
    {
      debugMode=false
    }
  }
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
      if(debugMode==true){  console.warn("错误，值不存在")}
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
    $.get(url,function(data,status)
    {// WARNING: 这里可能存在小问题，隐患，如果没能及时获取到内容，就bug了
      console.warn("#剧情文本获取状态码>"+status);
      //对文本处理，变成数组
      // if(status!="success"){console.warn("#错误http状态>"+status+"请查阅jquery $.get方法返回值以及http教程");}
      localStorage.setItem("tmp_chapter",data)
      if(data==null){console.warn("#错误，没有获取到文本数据");}
      //使用中文句号判断一行，所以在文中除了句子段落末尾，别的地方不能出现句号
      //技术不行，还得看看别人开源引擎是怎么写的
    })
    var tmp=localStorage.getItem("tmp_chapter")
    var t1=tmp.split("。")
    return Array(t1)

  }
  /*让用户自定义剧情解析器的换号判断符号*/
  this.set_plot_split_char=function(str)
  {
    custom_split_char=str
  }
  /*清空所欲存档*/
  this.clearAll=function()
  {
    localStorage.clear()
    if(debugMode)
    {
      console.warn("#清空了所有localStorage")
    }
  }
}
