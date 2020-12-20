function Easy_init()
{
   console.log("初始化")
}
var EasyAvg=function E()
  {
      //初始化
   this.init= function(src,auto_play)
   {
       //创建bgm
       var tmp_bgm=new Audio()
       tmp_bgm.src="running in the rain (feat. Sashenka).mp3"
       tmp_bgm.loop=false
      return tmp_bgm
       }
   this.create_img=function (src,alt,width,height)
       { 
           console.log("创建图片")
           var tmp_img=new Image()
           tmp_img.alt=alt
           tmp_img.src=src
           tmp_img.width=width
           tmp_img.height=height
           return tmp_img
}
//创建avg背景图片
this.create_TextBackground=function()
{
   
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
this.create_btn=function (text)
    {
   var tmp_btn= document.createElement('button')
  tmp_btn.setOnclik=function (custom_click)
       {
           tmp_btn.onclick=custom_click
}
    tmp_btn.value=text
   return tmp_btn
}
}
var x=new EasyAvg()
var img=x.create_img("src","测试")
//console.log(img.alt)
x.init()
var b=x.create_btn()
console.log(b)