//封装
function FileSystem()
{
  this.load=function(key)
  {
    var value=localStorage.getItem(key)
    if(value)
    {
      return value
    }
    else
    {
      console.warn("错误，值不存在")
    }
  }
  this.save=function(key,value)
  {
    //console.log("存入了值"+value)
    localStorage.setItem(key,value);
  }
}
// NOTE: 实现代码
/*function load(key)
{
  var value=localStorage.getItem(key)
  return value
}
function save(key,value)
{
  //console.log("存入了值"+value)
  localStorage.setItem(key,value);
}*/
