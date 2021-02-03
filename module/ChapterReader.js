
// NOTE: 可能需要一个新的线程
//关键字> 下一章 <结束判断符号
var fileLoader=new FileSystem()
function check_line(line) //语法检查器 实现了 以后需要移动位置
{//true为正确 false为错误
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
function ChapterReader()//章节加载器
{
  /*用户定义函数*/
  var tmp_func
  var debug=true //debug模式
  /*剧情文本测试*/
  this.txt1="第一句话\n第二句话\n第三句话,改变了人物\n>"
  this.txt2="第二章开始\n第二句话\n第三句话\n第四句话\n<end"
  //剧情代码测试
  /*第一章对应代码*/ //弹出两次对话框，第三个是更换人物
  this.func1="console.warn('#第一章代码1')\nconsole.warn('#第一章代码2')\n$('img').attr('src','../fullExample/img/c03.png')"
  this.func2="console.warn('#第二章代码1')\nconsole.warn('#第二章代码2')"
  this.Iload=function(path)
  {
    var 剧情分词=fileLoader.load_Plot_Text(path)
    console.log(">剧情分词数组");
    console.log(剧情分词);
    for(var i=0;i<剧情分词.length;i++)
    {
      var line=剧情分词[i]
      // console.log("每一行:"+line);
      if(line.indexOf(">")==0)
      {
        console.log("检测到剧情下一章符号");
        this.Iload("../fullExample/chapter/2.txt")
      }
      if(line.indexOf("<")==0)
      {
        console.log("停止游戏");
        return
      }
    }
  }
  this.testLoad=function(str,func)
    {//把剧情分词和函数分词存储一个数组 此时为二维数组，一次性return
      var current_result=[]//剧情数组元素在前，函数数组元素在后
      var 剧情分词=str.split("\n")
      var 函数分词=func.split("\n")
      console.log("剧情分词");
      console.log(剧情分词)
      console.log("#函数分词");
      console.log(函数分词)
      // NOTE: for循环存在递归
      console.warn("#开始读取");
      current_result.push(剧情分词)
      current_result.push(函数分词)
      return current_result
    }
  // this.test=function(str,func) 保存一下
  // {
  //   var 剧情分词=str.split("\n")
  //   var 函数分词=func.split("\n")
  //   console.log("剧情分词");
  //   console.log(剧情分词)
  //   console.log("#函数分词");
  //   console.log(函数分词)
  //   // NOTE: for循环存在递归
  //   console.warn("#开始读取");
  //   for(var i=0;i<剧情分词.length;i++)
  //   {
  //     var line=剧情分词[i]
  //     /*每行代码*/
  //     var line_code=函数分词[i]
  //     console.log("每行句子:"+line)
  //     console.log("每行对应函数"+line_code);
  //     var 语法=check_line(line) //语法检查
  //     if(语法==true)
  //     {
  //       if(line==">")
  //       {
  //         console.warn("#正式进入下一章");
  //         this.test(this.txt2,this.func2)
  //       }
  //       console.warn("#eval执行！↓");
  //       eval(line_code)
  //       console.warn("#eval单行结束，继续循环");
  //       if(line.indexOf("<")==0)
  //       {
  //         if(line.split("<")[1]=="end")
  //         {
  //           console.warn("系统结束方式");
  //           // NOTE: 跳转之前先存档
  //           window.open("../fullExample/Splash.html","_self")
  //         }
  //         if(line.split("<")[1]=="custom_end")
  //         {
  //           console.warn("自定义结束方式");
  //           tmp_func()
  //         }
  //       }
  //     }
  //     else
  //     {
  //       console.warn("#你的代码存在错误语法，程序停止运行");
  //       break
  //     }
  //   }
  // }
  this.setDebugLog=function(bool)
  {
    debug=bool
  }
  /*自定义结束函数*/
  this.setFinishFunc=function(func)
  {
    tmp_func=func
  }
}
