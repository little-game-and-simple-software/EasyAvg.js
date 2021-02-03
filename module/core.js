// NOTE: 核心类
// TODO: 分辨率缩放？
// NOTE: 大面积重写代码！！
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
    // var runTimeIndex=$.cookie("runTimeIndex")
    // if(runTimeIndex)
    //  {
    //    console.warn("#存在cookie，使用临时值")
    //    alert("#自动恢复进度！")
    //    console.warn("当前cookie值")
    //    console.log(runTimeIndex);
    //    //变量类型转换
    //    clicks=Number(runTimeIndex)
    //    // 设置第一段文字
    //    dialog.text(content[runTimeIndex])
    //    console.warn("#自动恢复后的click值")
    //    console.log(clicks);
    //    //从localStorage恢复
    //
    //    var dataObj=JSON.parse(localStorage.getItem("todoData"))
    //    if(dataObj)
    //    {
    //      todoActionIndexArray=dataObj.todoActionIndex
    //      functionsList=dataObj.functions
    //      console.log("恢复数据");
    //      console.log(dataObj);
    //      // console.log("恢复函数列表");
    //      // console.log(functionsList);
    //    }
    //  }
    //  else{
    //    console.warn("#不存在cookie进度，使用Logic.js定义的值");
    //  dialog.text(content[0])
    // }
    dialog.text(content)
    console.log("对话框数据_"+content);
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
     // dialog.text("测试历史框")
     dialog.text(content[clicks])
     historyText.push(content[clicks]) /*历史记录*/ //下面代码同时废弃重写
     // localStorage.setItem("historyText",historyText)
     // var 历史文本=localStorage.getItem("historyText")
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
      // var tmp_li=$("<li class='historyView'>"+content[clicks]+"</li>")
      var tmp_li=$("<li class='historyView'>测试历史框</li>")
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
   // NOTE: 清除计数器 把不是重要代码缩成一行
   dialog.clearClicks=function(){
    console.warn("#计数器清空")
     clicks=0
     console.warn("#计数器次数")
     console.log(clicks)
   }
   /* 是否显示调试信息*/
   dialog.setDebugLog=function(bool)
   {
     debugMode=bool
     if(bool){console.warn("Dialog调试模式已打开")}
     else{console.warn("Dialog调试模式已关闭"); }
   }
   // NOTE: 当没有句子可以播放时，执行 废弃

   // NOTE: 下面是两个内置事件 废弃，如果遇到代码问题，从backup代码恢复
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
