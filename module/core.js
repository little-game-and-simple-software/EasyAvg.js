// NOTE: 核心类
// TODO: 分辨率缩放？
function EasyAvg()
{
//  全局计数器，和dialog计数器同步更新
  //var Global_clicks=0
  //技术信息
  $("body").append("<h6>Powered By <a target='_blank' href='https://github.com/little-game-and-simple-software/EasyAvgFrameWork'>EasyAvgFramework</a></h6>")
    //this.clicks=0
    var sceen_objs=[123456]
    //获得场景树
    this.get_tree=function ()
    {
    return sceen_objs
    }
      //初始化
      this.init=function ()
      {
      this.init_bgm()
      this.create_TextBackground()
      }
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
        img.css("width",scale)
       }
       // NOTE: 创建图片
   this.create_img=function (src,alt)
   {
      console.log("创建图片")
         // NOTE: 原生api
      //   var tmp_img=new Image()
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
  //改变人物，改变bgm 改变背景
  var tmp_actions=["changeImg","changeBgm","changeBg"]
  //事件队列
  var to_do_Actions=[]
  var tmp_action=""
  var tmp_node
  var tmp_change_char_img
  var tmp_change_bgm
  var tmp_change_char_index
  var text_reach_end=false
  var finalAction
  var content=[]
   var debugMode=true
   var clicks=0
   var dialog=$("<p></p>")
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
       console.warn("#不存在零食进度，使用Logic.js定义的值");
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
     //当计数器和用户传入index一致时
     if(clicks==tmp_change_char_index)
     {
       // NOTE: 遍历事件队列，并执行对于的操作
      for(var i=0;i<to_do_Actions.length;i++)
      {
        var currentTask=to_do_Actions[i]
        if(currentTask=="changeImg")
        {
          tmp_node.attr("src",tmp_change_char_img)
        }
        if(currentTask=="changeBgm")
        {
          $("#bgm").attr("src",tmp_change_bgm)
        }
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
   // NOTE: 是否显示调试信息
   dialog.setDebugLog=function(value)
   {
     if(value)
     {
       debugMode=true
       console.warn("调试模式已打开");
     }
     else
     {
       debugMode=false
       console.warn("调试模式已关闭");
     }
   }
   // NOTE: 当没有句子可以播放时，执行
   dialog.setFinishAction=function(func)
   {
     finalAction=func
   }
   // NOTE: 改变人物
   dialog.changeImgAt=function(index,node,newImg)
   {
     tmp_change_char_index=index
     tmp_node=node
     tmp_change_char_img=newImg
     tmp_action="changeImg"
     to_do_Actions.push(tmp_action)
     console.warn("##调试");
     console.log("事件队列")
     console.log(to_do_Actions)
   }
   dialog.changeBgmAt=function(index,newSrc)
   {
      tmp_change_char_index=index
      tmp_change_bgm=newSrc
      tmp_action="changeBgm"
      to_do_Actions.push(tmp_action)
      console.warn("##调试");
      console.log("事件队列");
      console.log(to_do_Actions)
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

   //用户自定义Action 在指定的索引执行自定义代码
   dialog.setCustomActionAt=function(index,func)
   {

   }

   return dialog
}
// BUG: 有问题的代码
/*this.create_btn=function (text,id)
  {
    var btn=$("<button></button")
    btn.getId=function()
    {
      return btn.attr("id")
    }
    btn.setId=function()
    {
      btn.attr("id",id)
    }
   //var btn=$("<button"+" "+"id="+id>"+"</button>").text(text)
   btn.attr("id",id)
   btn.text(text)
   console.warn(btn);
   // NOTE: 默认内置button样式设置
   btn.css("background","orange")
   btn.css("border","solid")
   btn.css("width","100px")
   btn.css("height","50px")

   //调试
   console.warn('以下id从引擎打印');
   console.log('id->'+btn.attr("id"));
   return btn
}*/
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
