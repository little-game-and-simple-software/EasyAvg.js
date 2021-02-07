// NOTE: 核心类
// TODO: 分辨率缩放？
function EasyAvg()
{
  // TODO: 以后单独设置剧情和脚本路径 便于用户自定义 ，默认路径不动 名称也不动
  var chapterPath="../chapter/"
  var chapterScriptPath="../chapterScript/"
  // NOTE: 运行时变量
  var chapterIndex=1
  var lineIndex=0
  var cookieMode=""
  /*框架全局变量，cookie http模式*/
  /*参数"http"和https*/
  /*设置cookie是http模式还是https模式*/
  // NOTE: 暂时未使用的方法
  this.setCookieMode=function(httpMode)
  {
    if(httpMode!="http" || httpMode!="https")
    {
      alert("错误，非法参数")
    }
    cookieMode=httpMode
  }

  this.pauseBgm=function()
  {
    console.warn("#暂停音乐");
    $("#bgm")[0].pause()
  }
  /*绑定按钮音效 src*/
  this.setButtonSound=function(inSrc)
  {
    // TODO: 这个方法可能需要修一修
    //$("#btn_sound").attr("src",inSrc)
  }
  //Powered by 信息
  $("body").append("<h6>Powered By <a target='_blank' href='https://github.com/little-game-and-simple-software/EasyAvgFrameWork'>EasyAvgFramework</a></h6>")
      // NOTE: 创建背景图片
      this.create_BackroundImg=function(img)
      {
        // NOTE: 此方法的可能需要改一改
        img.css("z-index","-2")
        img.css("position","absolute")
        img.css("margin-left","200px")
        $("body").append(img)
      }
       // NOTE: 修改图片大小 暂时未使用
       this.scale_img=function(img,scale)
       {
        // img.css("width",scale)
       }
    /* 创建图片 src：图片路径 alt：无法显示时描述信息*/
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
  var PlotLoader=new IPlotLoader()
  var historyText=[]/*历史文本 用于显示历史记录*/
  var clicks=0   /*内部计数*/
   /*对象*/
  var dataObj={}
  var debugMode=true /*调试模式*/
  var functionsList=[]   //要执行的函数列表
  var dialog=$("<p style='overflow:scroll;'></p>") /*对话框*/
  var finalAction /*剧情播放到结尾执行的函数*/
  //初始化Dialog样式
  function InitDialogStyle()
  {
    dialog.css("background","orange")
    //对话框在最上面
    dialog.css("z-index",-1)
    dialog.css("border","solid","border-width","1px")
    dialog.css("position","absolute")
    // NOTE: 初始化对话框高度宽度 位置
    dialog.css("margin-top","0px")
    dialog.css("margin-left","200px")
    dialog.css("height","100px")
    dialog.css("width","58%")
    // 默认25px大小
    dialog.css("font-size","25px")
  }
  // NOTE: 是否使用默认界面样式
  dialog.useDefaultStyle=function(bool)
  {
    // useDefaultStyle=bool
    console.log("是否使用默认样式:"+bool)
    if(bool==true)
    {
      console.warn("--启用默认样式")
      InitDialogStyle()
    }
    else
    {
      console.warn("--取消使用默认样式")
      console.warn("#你取消了默认样式，所以你需要自定义css样式")
    }
  }
   /*为对话框设置初始化内容*/
   dialog.setContent=function(data_obj)
   {
     dataObj=data_obj
     dialog.text(data_obj.plot_array[0])
     console.log("对话数据")
     console.log(dataObj.plot_array);
    var tmp_li=$("<li class='historyView'>"+dataObj.plot_array[0]+"</li>")
    $("#HistoryPanel").append(tmp_li)
    if(data_obj.has_func==false)
    {
      // console.clear()
      console.warn("#此章节不存在用于脚本，不执行脚本,测试信息，请忽略")
      alert("不存在js文件，跳过运算js代码")
    }
    if(data_obj.has_func==true)
    {
      console.warn("#存在js脚本，运算它");
      eval(dataObj.func_array[0])
    }
  }
  //加载已经存在的游戏进度时使用的方法
   dialog.setLoadContent=function(data_obj)
   {
     //更新索引
     dataObj=data_obj
     chapterIndex=Number(data_obj.chapterIndex)
     lineIndex=Number(data_obj.lineIndex)
     clicks=data_obj.lineIndex
     dialog.text(dataObj.plot_array[lineIndex])
     var tmp_li=$("<li class='historyView'>"+dataObj.plot_array[lineIndex]+"</li>")
     $("#HistoryPanel").append(tmp_li)
     eval(dataObj.func_array[lineIndex])
   }
   // NOTE: 默认dialog点击器
   dialog.click(function()
   {
     clicks+=1
     var line=dataObj.plot_array[clicks]
     var lineCode=dataObj.func_array[clicks]
     dialog.text(line)
     if(line==">") //下一章
     {// NOTE: 进入下一章索引归零 并且章节索引+1
       clicks=0
       chapterIndex+=1 //组合成通用方法
       dataObj=PlotLoader.load("../chapter/"+chapterIndex+".txt","../chapterScript/func"+chapterIndex+".js.txt")
       console.warn("#下一章文本");
       console.log(dataObj.plot_array[0]);
       dialog.text(dataObj.plot_array[0])
       eval(dataObj.func_array[0])
       if(debugMode)
       {
         console.log("当前章节_"+chapterIndex);
       }
     }
     if(line.indexOf("<")==0) //结尾
     {
       dialog.text("") //当有<时，不显示文字，因为是指令信息，不能显示出来！
       if(line.split("<")[1]=="end")
       {
         alert("默认结束方法")
         window.open("../index.html","_self")
       }
       if(line.split("<")[1]=="custom_end")
       {
         dialog.text("")
         alert("自定义结束方法")
         window.open("../index.html","_self")
       }
     }
     console.log("#当前句子_"+line);
     console.log("#当前代码_"+lineCode);
     eval(lineCode)
     //给历史记录添加文本
      var tmp_li=$("<li class='historyView'>"+line+"</li>")
      $("#HistoryPanel").append(tmp_li)
     if(debugMode)
     {
       console.warn("#点击次数_"+clicks)
     }
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
   //获得点击次数
   dialog.getClicks=function()
   {
     return clicks
   }
   dialog.getRuntimeIndex=function()
   {
     return chapterIndex+"_"+clicks
   }
   /*设置Dialog文字大小*/
   dialog.setFontSize=function(size)
   {
     dialog.css("font-size",size)
   }
   return dialog
}
/*音频相关*/
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
/*设置bgm音量，全局 必须是ID为bgm的元素 值0-1之间的float*/
this.setBgmVolume=function(volume)
{
  // console.warn("#设置音量！");
  $("#bgm")[0].volume=volume
}
/*音频相关结束*/
}
