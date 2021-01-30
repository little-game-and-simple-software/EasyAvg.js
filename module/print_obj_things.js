//打印出object对象所有的属性 返回包含object所有属性 的数组
function print_obj_things(obj)
{
  var array=[]
  for (var item in obj)
    {
    //  str +=item+":"+result[item]+"\n";
    //  console.log(item)
    console.log("object属性->"+obj[item]+"\n");
    array.push(obj[item])
    }
    return array
}
