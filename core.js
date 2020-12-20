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
   this.init_bgm= function(src,auto_play)
   {
       //创建bgm
       var tmp_bgm= $("<audio></audio>")  
       tmp_bgm.attr('src',"running in the rain (feat. Sashenka).mp3")
       tmp_bgm.attr("controls",true)
       sceen_objs.push(tmp_bgm)
      return tmp_bgm
       }
   this.create_img=function (src,alt)
       { 
           console.log("创建图片")
           var tmp_img=new Image()
          /* tmp_img.alt=alt*/
           tmp_img.src=src
          
         /*  tmp_img.width=width
           tmp_img.height=height*/
           return tmp_img
}
//创建avg背景图片
this.create_TextBackground=function()
{
   var tmp_p=$("<p>dfvb</p>")
   tmp_p.css("background","red")
   
   return tmp_p
}
//存档读档
this.save=function (mode)
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
   return tmp_btn;
}
}
/*var x=new EasyAvg()
var img=x.create_img("src","测试")
//console.log(img.alt)
x.init()
var b=x.create_btn()
console.log(b)*/