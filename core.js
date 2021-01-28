// NOTE: 核心类
// TODO: 分辨率缩放？
function EasyAvg()
{
//  全局计数器，和dialog计数器同步更新
  var Global_clicks=0
    // NOTE: 初始化计数器
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
      return img
      // NOTE:返回图片对象
      // NOTE: 创建npc
    this.create_npc(img)
    {
      $(img).css()
    }
}
//创建avg背景对话框
this.create_Dialog=function(color)
{
  var tmp_node
  var tmp_change_char_img
  var tmp_change_char_index
  var text_reach_end=false
  var finalAction
  var content=[]
   var debugMode=true
   var clicks=0
   var dialog=$("<p></p>")
   // NOTE: 对于每一个Dialog的内容的数组 初始化
   //dialog.content=[]
   // NOTE: 设置内容 string array
   dialog.setContent=function(array)
   {
     content=array
     console.log("#content")
     console.log(content);
     dialog.text(content[0])
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
     Global_clicks=clicks
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
     //改变人物
     if(clicks==tmp_change_char_index)
     {
       tmp_node.attr("src",tmp_change_char_img)
     }
     if(debugMode)
     {
       console.log("点击次数"+clicks);
     }
     //alert("点击了对话框")
   })
   // NOTE: 清除计数器
   dialog.clearClicks=function()
   {
     console.log("计数器清空")
     clicks=0
     console.log("计数器次数."+clicks)
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
   }
   return dialog
}
//存档读档 模式 值 存档类型 本地（cookie或者文件）还是网络（数据库）
this.save=function (mode,key,value,save_to_where)
    {
    if(mode=="cookie")
    {

      }
        if(mode=="local")
        {
        //  $.cookie('key','value',{'其他参数'})
        }
        //网络
        if(mode=="internet")
        {
            //post参数 小沙盒账号 小沙盒密码 存档 php
            }
}
this.load=function ()
    {
     if(mode=="cookie")
    {
        }

        if(mode=="local")
        {
        }
        //网络
        if(mode=="internet")
        {
            //post参数 小沙盒账号 小沙盒密码 存档 php
            }
}
this.create_btn=function (text,id)
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
}
}
//测试代码
