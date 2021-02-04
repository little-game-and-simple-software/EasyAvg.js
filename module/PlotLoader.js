//整合一下 这个将会是新的剧情加载器
function IPlotLoader()
{ // NOTE: 剧情加载器和脚本加载器应该由Dialog的clicks 驱动，只要返回数据到Dialog
  //根据click来设置和运行下一段文字和脚本
  var t
  // var obj={"plot_array":plot_array,"func_array":func_array}
  this.load=function(str_url,func_url)
  {
    //把剧情分词和函数分词存储一个数组 此时为二维数组，一次性return
    var final_obj={"plot_array":[],"func_array":[]}//剧情数组元素在前，函数数组元素在后
    //改用ajax同步方法 //async：false为同步 获取文本
    $.ajax({url:str_url,async:false,success:function(result)
        {
          // alert(result)
          final_obj.plot_array=result.split("\n")
        }})
    $.ajax({url:func_url,async:false,success:function(result)
    {
      final_obj.func_array=result.split("\n")
    }})
    //最后返回数据数组
        return final_obj
   }
}
