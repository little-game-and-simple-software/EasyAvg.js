// NOTE: 核心类
// TODO: 分辨率缩放？
function EasyAvg()
{
  /*框架全局变量，cookie http模式*/
  /*参数"http"和https*/
  var cookieMode=""
  /*设置cookie是http模式还是https模式*/
  this.setCookieMode=function(httpMode)
  {
    if(httpMode!="http" || httpMode!="https")
    {
      alert("错误，非法参数")
    }
    cookieMode=httpMode
  }
//  全局计数器，和dialog计数器同步更新
  //var Global_clicks=0
  /*设置bgm音量，全局 必须是ID为bgm的元素 值0-1之间的float*/
  this.setBgmVolume=function(volume)
  {
    // alert("设置音量")
    $("#bgm")[0].volume=volume
  }
  /*绑定按钮音效 src*/
  this.setButtonSound=function(inSrc)
  {
    //$("#btn_sound").attr("src",inSrc)
  }
  $("body").append("<h6>Powered By <a target='_blank' href='https://github.com/little-game-and-simple-software/EasyAvgFrameWork'>EasyAvgFramework</a></h6>")
      // NOTE: 创建背景图片
      this.create_BackroundImg=function(img)
      {
        $("body").append(img)
        img.css("z-index","-2")
        img.css("position","absolute")
        img.css("margin-left","200px")
      }

       // NOTE: 修改图片大小
       this.scale_img=function(img,scale)
       {
        // img.css("width",scale)
       }
       // NOTE: 创建图片
   this.create_img=function (src,alt)
   {
      // console.log("创建图片")
        // NOTE: jquery
      var img=$("<img>")
      img.attr("src",src)
      img.attr("alt",alt)
      // NOTE:返回图片对象
      return img
}
//创建avg背景对话框
this.create_Dialog=function(color)
{

  /*临时action，将会被push入事件队列*/
  var tmp_action=""
  /*改变人物，改变bgm 改变背景*/
  var tmp_actions=["changeImg","changeBgm","changeBg","custom"]
  //事件队列
  var to_do_Actions=[]
  /*传入对象*/
  var tmp_node
  /*临时变量，用于更换新的图像*/
  var tmp_change_char_img
  /*临时变量，用于更换bgm*/
  var tmp_change_bgm
  /*绑定index，就是在哪一个index执行对应的代码或自定义代码 int类型*/
  /*废弃改用json对象*/
  var tmp_doActionAt
  var todoActionIndexArray=[]
  /*把JSON对象存入数组*/
  var func
  var functionsList=[]
  var JsonAcionObjectsList=[]
  // Json对象不能存储function
  // var toDoActionObject={"doActionAt":tmp_doActionAt,"func":func}
  //var tmp_change_char_index
/*是否播放到结尾*/
  var text_reach_end=false
  var finalAction
/*内部内容数组*/
   var content=[]
   var debugMode=true
/*内部点击次数*/
   var clicks=0
   var dialog=$("<p></p>")
   /*自定义函数*/
   var customAction
   // NOTE: 对于每一个Dialog的内容的数组 初始化
   // NOTE: 设置内容 string array
   dialog.setContent=function(array)
   {
     content=array
     console.log("#content")
     console.log(content)
     // WARNING: 存在bug
     // NOTE: 判断是否存在cookie 跳转保存页面后，自动恢复进度
     var runTimeIndex=$.cookie("runTimeIndex")
    if(runTimeIndex)
     {
       console.warn("#存在cookie，使用临时值")
       alert("#自动恢复进度！")
       console.warn("当前cookie值")
       console.log(runTimeIndex);
       //由于cookie取出来是字符串，所以必须进行变量类型转换
       clicks=Number(runTimeIndex)
       //alert("clicks类型"+typeof(clicks))
       dialog.text(content[runTimeIndex])
       console.warn("#自动恢复后的click值")
       console.log(clicks);
     }
     else{
       console.warn("#不存在cookie进度，使用Logic.js定义的值");
     dialog.text(content[0])
    }
    //dialog.text(content[0])
    // console.log("对话框"+dialog.content);
   }
   dialog.css("background","orange")
   //对话框在最上面
   dialog.css("z-index",-1)
   dialog.css("border","solid","border-width","1px")
   dialog.css("position","absolute")
   // NOTE: 初始化对话框高度宽度 位置
   dialog.css("margin-top","0px")
   dialog.css("height","100px")
   dialog.css("width","100%")
  // 设置第一段文字
   // NOTE: 默认dialog点击器
   dialog.click(function()
   {
     clicks+=1
  //   Global_clicks=clicks
     dialog.text(content[clicks])
     if(clicks>content.length&&finalAction==null)
     {
      console.warn("错误，后面没有句子了,你可以设置播放结束要执行的代码");
       text_reach_end=true
     }
     if(clicks>content.length&&finalAction!=null)
     {
       console.warn("执行用户自定义代码");
       finalAction()
     }
     // BUG: 旧方法不适用了 有bug 改新方法
     //每次点击，进行一次遍历，查找在计数器索引是否等于传入索引
     //当计数器和用户传入index一致时
     for(var i=0;i<todoActionIndexArray.length;i++)
     {
       // alert("遍历")
       if(clicks==todoActionIndexArray[i])
       {
         console.warn("#遍历");
         console.log("#此时遍历索引>"+i);
         var Myfunc=functionsList[i]
         console.log(Myfunc);
         Myfunc()
       }
     }
     if(debugMode)
     {
       console.warn("#点击次数")
       console.log(clicks);
     }
     //alert("点击了对话框")
   })
   // NOTE: 清除计数器
   dialog.clearClicks=function()
   {
     console.warn("#计数器清空")
     clicks=0
     console.warn("#计数器次数")
     console.log(clicks)
   }
   /* 是否显示调试信息*/
   dialog.setDebugLog=function(value)
   {
     if(value)
     {
       debugMode=true
       console.warn("Dialog调试模式已打开");
     }
     else
     {
       debugMode=false
       console.warn("Dialog调试模式已关闭");
     }
   }
   // NOTE: 当没有句子可以播放时，执行
   dialog.setFinishAction=function(func)
   {
     finalAction=func
   }
   // NOTE: 下面是两个内置事件
   dialog.changeImgAt=function(index,node,newImg)
   {
    // tmp_change_char_img=
     todoActionIndexArray.push(index)
     console.log("要运行代码的index数组");
     console.log(todoActionIndexArray);
     var changeImage=function()
     {
       // alert("内置功能 改变图像")
       node.attr("src",newImg)
     }
     functionsList.push(changeImage)
   }
   dialog.changeBgmAt=function(index,newSrc)
   {
     todoActionIndexArray.push(index)
     var changeBgm=function()
     {
       $("#bgm").attr("src",newSrc)
       $("#bgm")[0].play()
     }
     console.log("要运行代码的index数组");
     console.log(todoActionIndexArray);
     functionsList.push(changeBgm)
   }
   dialog.setCustomActionAt=function(index,func)
   {
     //压入事件Index列表
     todoActionIndexArray.push(index)
     console.log("要运行代码的index数组");
     console.log(todoActionIndexArray);
     //压入自定义函数列表
     functionsList.push(func)
    }
   // NOTE: 清除事件队列
   dialog.clearActions=function()
   {
     to_do_Actions=[]
   }
   //获得运行时，index，跳转存档页面会丢失数据，用于暂存
   dialog.getRuntimeIndex=function()
   {
     return clicks
   }
// BUG: 已修复，用新方法
   //用户自定义Action 在指定的索引执行自定义代码

   return dialog
}

this.showBgm=function()
{
  $("#bgm").css("display","block")
}
this.hideBgm=function()
{
  $("#bgm").hide()
}
this.changeBgm=function(src)
{
  $("#bgm").attr("src",src)
}
}
//测试代码
