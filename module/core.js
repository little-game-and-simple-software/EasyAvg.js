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
  /*设置bgm音量，全局 必须是ID为bgm的元素 值0-1之间的float*/
  this.setBgmVolume=function(volume)
  {
    // alert("设置音量")
    $("#bgm")[0].volume=volume
  }
  this.pauseBgm=function()
  {
    $("#bgm")[0].pause()
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
    /* 创建图片 src attr*/
   this.create_img=function (src,alt)
   {
      var img=$("<img>")
      img.attr("src",src)
      img.attr("alt",alt)
      return img
}
//创建avg背景对话框
this.create_Dialog=function(color)
{
  var historyText=[]/*历史文本 用于显示历史记录*/
  var clicks=0   /*内部计数*/
  var content=[]   /*内部内容数组*/
  var debugMode=true /*调试模式*/
  var todoActionIndexArray=[]   /*内部计数*/
  var functionsList=[]   //要执行的函数列表
  var text_reach_end=false /*是否播放到结尾*/
   var dialog=$("<p></p>") /*对话框*/
   var finalAction /*剧情播放到结尾执行的函数*/
   /*为对话框设置内容*/
   dialog.setContent=function(array)
   {
     content=array
     // NOTE: 判断是否存在cookie 跳转保存页面后，自动恢复进度
    var runTimeIndex=$.cookie("runTimeIndex")
    if(runTimeIndex)
     {
       console.warn("#存在cookie，使用临时值")
       alert("#自动恢复进度！")
       console.warn("当前cookie值")
       console.log(runTimeIndex);
       //变量类型转换
       clicks=Number(runTimeIndex)
       // 设置第一段文字
       dialog.text(content[runTimeIndex])
       console.warn("#自动恢复后的click值")
       console.log(clicks);
       //从localStorage恢复

       var dataObj=JSON.parse(localStorage.getItem("todoData"))
       if(dataObj)
       {
         todoActionIndexArray=dataObj.todoActionIndex
         functionsList=dataObj.functions
         console.log("恢复数据");
         console.log(dataObj);
         // console.log("恢复函数列表");
         // console.log(functionsList);
       }
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
   // 默认25px大小
   dialog.css("font-size","25px")
   // NOTE: 默认dialog点击器
   dialog.click(function()
   {
     clicks+=1
  //   Global_clicks=clicks
     dialog.text(content[clicks])
     // historyText.push(content[clicks]) /*历史记录*/
     // if(clicks>content.length&&finalAction==null)
     // {
     //  console.warn("错误，后面没有句子了,你可以设置播放结束要执行的代码");
     //   text_reach_end=true
     // }
     // if(clicks>content.length&&finalAction!=null)
     // {
     //   console.warn("执行用户自定义代码");
     //   finalAction()
     // }
     // localStorage.setItem("historyText",historyText)
     // var 历史文本=localStorage.getItem("historyText")
     // console.log("#保存的历史文本");
     // console.log(历史文本);
     //自定义Action和内置事件的执行 @androids7 暂时没有想到检测到cookie时自动恢复进度和函数数组的方法
     //因为保存页面不在游戏界面上面，跳转会丢失变量，用的cookie暂存index
     //而且localStorage里面是存不了function的，cookie和json也是存不了函数的
     //因为要读档啊，读的只有index没有自定义函数，
     //那就是只是剧情继续播放，人物图像什么的全部无法同步了，就少了setCustomActionAt()这个逻辑了
     //可能我得重新思考一下存档json格式，不能光存index和日期,这样少了funciton
     for(var i=0;i<todoActionIndexArray.length;i++)
     {
       if(clicks==todoActionIndexArray[i])
       {
         // console.warn("#遍历");
         // console.log("#此时遍历索引>"+i);
         var Myfunc=functionsList[i]
         console.log(Myfunc);
         Myfunc()
       }

     }
     //给历史记录添加文本
      var tmp_li=$("<li class='historyView'>"+content[clicks]+"</li>")
      $("#HistoryPanel").append(tmp_li)
     if(debugMode)
     {
       console.warn("#点击次数")
       console.log(clicks);
       console.log("要执行的函数列表>")
       console.log(functionsList);
       console.log("函数索引表");
       console.log(todoActionIndexArray);
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
     var changeImage=function()
     {
       // alert("内置功能 改变图像")
       node.attr("src",newImg)
     }
     todoActionIndexArray.push(index)
     functionsList.push(changeImage)
     //JSON不能存函数 怎么忘了
     /*要把这个存入localStorage*/
     var todoObj=JSON.stringify({"todoActionIndex":todoActionIndexArray,"functions":functionsList})
     localStorage.setItem("todoData",todoObj)
     console.log("存入数据");
     console.log(todoObj);
   }
   dialog.changeBgmAt=function(index,newSrc)
   {
     todoActionIndexArray.push(index)
     var changeBgm=function()
     {
       $("#bgm").attr("src",newSrc)
       $("#bgm")[0].play()
     }
     functionsList.push(changeBgm)
   }
   dialog.setCustomActionAt=function(index,func)
   {
     //压入事件Index列表
     todoActionIndexArray.push(index)
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
   /*设置Dialog文字大小*/
   dialog.setFontSize=function(size)
   {
     dialog.css("font-size",size)
   }
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
