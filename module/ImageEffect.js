// NOTE: 一次只能设置一个效果！
function ImageEffect()
{
  console.log("#创建了图像特效模块");
  /*临时效果*/
  var tmp_effect=""
  /*图形效果列表*/ //invert反转颜色
  var Effect_List=['gray','blur','bright','invert']
  /*灰色效果*/
  this.gray='gray'
  /*模糊效果*/
  this.blur='blur'
  /*亮度 参数百分比 越小越暗，反之越亮 >100%时提高亮度*/
  this.bright='bright'
  /*反转颜色*/
  this.invert='invert'
  /*设置图像效果*/
  this.setImageEffect=function(imgObj,effect)
  {
    tmp_effect=effect
    console.log("tmp_effect>"+tmp_effect);
    console.warn("#设置图像效果");
    if(effect==this.gray)
    {
      imgObj.css("filter","grayscale(100%)")
    }
    if(effect==this.blur)
    {//10px
      imgObj.css("filter","blur(10px)")
    }
    /*默认为提高亮度，可以使用set方法手动设置参数*/
    if(effect==this.bright)
    {
       imgObj.css("filter","brightness(160%)")
    }
    if(effect==this.invert)
    {
      imgObj.css("filter","invert(100%)")
    }
  }
  /*清除所有图像效果 恢复默认*/
  this.clearAllEffect=function(imgObj)
  {
    imgObj.css("filter","none")
    console.log("#清空图像效果**--");
  }
  /*设置图像效果的值*/
  this.setImageEffectValue=function(imgObj,val)
  {
    /*可用的值 写法：200% 百分数或者 10px 像素*/
    if(tmp_effect==this.gray)
    {//20px
      imgObj.css("filter","grayscale("+val+")")
    }
    if(tmp_effect==this.blur)
    {//20px
      imgObj.css("filter","blur("+val+")")
    }
    if(tmp_effect==this.bright)
    {
       imgObj.css("filter","brightness("+val+")")
    }
    if(tmp_effect==this.invert)
    {
      imgObj.css("filter","invert("+val+")")
    }
  }
}
