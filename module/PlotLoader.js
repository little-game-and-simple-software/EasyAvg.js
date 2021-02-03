//整合一下
function TxtLoader()
{ // NOTE: 剧情加载器和脚本加载器应该由Dialog的clicks 驱动，只要返回数据到Dialog
  //根据click来设置和运行下一段文字和脚本
  var 剧情分词
  var 函数分词
  this.load=function(str_url,func_url)
  {
    //把剧情分词和函数分词存储一个数组 此时为二维数组，一次性return
    var current_result=[]//剧情数组元素在前，函数数组元素在后
    $.get(str_url,function(data,status)
    {
      if(data)
      {
        剧情分词=data.split("\n")
        current_result.push(剧情分词)
      }
    })
    //脚本
    $.get(func_url,function(data,status)
    {
      if(data)
      {
        函数分词=data.split("\n")
        current_result.push(函数分词)
      }
    })
    //最后返回数据数组
    console.log("type_"+typeof(current_result));
    localStorage.setItem("剧情")
    return Array(current_result)
   }
}
