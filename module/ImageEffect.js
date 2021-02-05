// NOTE: 一次只能设置一个效果！
// TODO: 尝试人物表情交叉淡化的效果
function ImageEffect()
{
  var debug=false
  if(debug)
  {
    console.log("#创建了图像特效模块");
  }
  /*临时效果*/
  var tmp_effect=""
  /*图形效果列表*/ //invert反转颜色
  var Effect_List=['gray','blur','brightness','invert']
  /*灰色效果*/
  this.gray='gray'
  /*模糊效果*/
  this.blur='blur'
  /*亮度 参数百分比 越小越暗，反之越亮 >100%时提高亮度*/
  this.bright='brightness'
  /*反转颜色*/
  this.invert='invert'
  /*设置图像效果 value=合法参数值*/ // NOTE: 改用for遍历，减少代码量 现在必须手动指定value
  this.setImageEffect=function(imgObj,effect,value)
  {
    tmp_effect=effect
    console.log("用户要设置的效果>"+tmp_effect);
    console.warn("#设置图像效果")
    for(var i=0;i<Effect_List.length;i++)
    {
      var definedEffect=Effect_List[i]
      console.log("遍历>"+definedEffect);
      if(effect==definedEffect)
      {
        console.log("判断出的结果>"+definedEffect);
        imgObj.css("filter",definedEffect+"("+value+")")
      }
      //检测用户参数是否合法 不合法警告
      if(value.indexOf("%")==-1 && value.indexOf("px")==-1)
      {
        console.warn("#错误！，传入的参数不合法");
      }
      // console.log("#px>"+value.indexOf("px"));
    }
  }
  /*清除所有图像效果 恢复默认*/
  this.clearAllEffect=function(imgObj)
  {
    imgObj.css("filter","none")
    console.log("#清空图像效果**--");
  }

}
