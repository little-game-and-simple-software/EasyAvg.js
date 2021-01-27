// TODO: 分辨率缩放？
function Easy_init()
{
   console.log("初始化")
}
function EasyAvg()
  {
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
   this.init_bgm= function(src,auto_play)
   {
       //创建bgm
       var tmp_bgm= $("<audio></audio>")
       tmp_bgm.attr('src',"running in the rain (feat. Sashenka).mp3")
       tmp_bgm.attr("controls",true)
       sceen_objs.push(tmp_bgm)
      return tmp_bgm
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
        var tmp_img=$("<img>")
      tmp_img.attr("src",src)
      tmp_img.attr("alt",alt)
           //tmp_img.alt=alt
           //tmp_img.src=src
           return tmp_img
           // NOTE:返回图片对象
           // NOTE: 创建npc
    this.create_npc(img)
    {
      $(img).css()
    }
}
//创建avg背景对话框
this.create_TextBackground=function(color)
{
   var dialog=$("<p>这时一段测试对话，你因为挪动了时间，导致了不可预知的问题！</p>")
   dialog.css("background","orange")
   //对话框在最上面
   dialog.css("z-index",-1)
   dialog.css("border","solid","border-width","1px")
   dialog.css("position","absolute")
   // NOTE: 初始化对话框高度宽度 位置
   dialog.css("margin-top","0px")
   dialog.css("height","100px")
   dialog.css("width","100%")

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
this.create_btn=function (t)
    {
   var tmp_btn=$("<button></button>").text(t)
    //tmp_btn.innerHTML=text
   return tmp_btn
}

}
//测试代码
