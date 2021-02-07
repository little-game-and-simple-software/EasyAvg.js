//整合一下 这个将会是新的剧情加载器
// NOTE: 这里细节需要修改一下 如果当前章节不需要对应的脚本，则不去获取脚本
function IPlotLoader()
{ // NOTE: 剧情加载器和脚本加载器应该由Dialog的clicks 驱动，只要返回数据到Dialog
  //默认章节位置 默认句子位置 增加I防止混淆变量名称
  this.IchapterIndex=0
  this.IlineIndex=0
  var chapterPath="../chapter/"
  var scriptPath="../chapterScript/"
  // NOTE: 初始化的加载方法，用于开启新的游戏，从头开始读文件
  this.load=function(str_url,func_url)
  {
    //把剧情分词和函数分词存储为Json对象
    var final_obj={"plot_array":[],"func_array":[],"has_func":true}//剧情数组元素在前，函数数组元素在后
    //改用ajax同步方法 //async：false为同步 获取文本
    $.ajax({url:str_url,async:false,success:function(result)
        {
          // alert(result)
          final_obj.plot_array=result.split("\n")
        }})
    $.ajax({url:func_url,async:false,success:function(result)
    {
      final_obj.func_array=result.split("\n")
      final_obj.has_func=true
    },error:function(xhr,status,error)
    {
      alert("此章节没有自定义js，不执行,执行has_func=false")
      final_obj.has_func=false
    }})
    //最后返回数据数组
        return final_obj
   }
   // NOTE: 读取已经存在的存档 需要一个章节变量 一个index变量
  this.load_from=function(chapterIndex,lineIndex)
  {//暂存
    // NOTE: 逻辑是，在游戏的Init.js中（在玩家js之前，初始化的js）
    //1.如果获取到游戏数据，然后调用此方法，返回数据对象给Init.js,
   //2.Init.js再根据此对象，调用Dialog的setLoadContent方法，设置文本，同时同步更新Dialog内部计数器索引
   //3.Dialog每次点击，就自动是新的数据
    this.IchapterIndex=chapterIndex
    this.IlineIndex=lineIndex
    // NOTE: 新增两个参数，用于给Dialog设置指定位置的文本
    var final_obj={
      "plot_array":[],
      "func_array":[],
      "chapterIndex":chapterIndex,
      "lineIndex":lineIndex,
    }
    $.ajax({url:chapterPath+chapterIndex+".txt",async:false,success:function(result)
        {
          final_obj.plot_array=result.split("\n")
          final_obj.chapterIndex=Number(chapterIndex)
          final_obj.lineIndex=Number(lineIndex)
        }})
    $.ajax({url:scriptPath+"func"+chapterIndex+".js.txt",async:false,success:function(result)
    {
      final_obj.func_array=result.split("\n")
    }})
    return final_obj
  }

}
