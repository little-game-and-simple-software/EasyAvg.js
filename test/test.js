$(function()
{
  // var Engine=new EasyAvg()
  // var img=Engine.create_img("../fullExample/img/k18.png","koyomi")
  // img.css("width","50px")
  // $("body").append(img)
  console.log("jquery检测");
  $("#fileTest").click(function()
  {
    // NOTE: 初始化
    var fileSystem=new FileSystem()
    console.log("##自动化测试开始##")
    console.log("存档和读档正确代码测试")
    fileSystem.save("hello","hello")
    var data=fileSystem.load("hello")
    if(data=="hello")
    {
      console.warn("正确逻辑代码的测试成功")
    }
    console.log("##错误代码测试##")
    fileSystem.save("hello","hello")
    var data=fileSystem.load("hell")
    if(data!="hello")
    {
      console.warn("错误逻辑代码的测试成功")
    }
    console.warn("#FileSystem单元测试完毕");
  })
  //cookie测试的时候必须带上本地服务器环境
  //cookie单元测试 必须在http服务器环境测试 ，你可以使用python -m http.server 开启服务器，也可以用别的第三方服务器
  $("#cookieTest").click(function()
  {
    console.clear()
    console.warn("#存档代码");
  /*  document.cookie="x=1"
    console.log(document.cookie);*/
    // NOTE: 如果secure值为true 那么需要HTTPS协议来传输
    $.cookie("test","aaaa",{secure: true})
    var tmp=$.cookie("test")
    console.log(tmp);
    if(tmp!=null)
    {
      console.warn("#cookie单元测试通过");
    }
    console.warn("#cookie单元测试完毕");
  })
  $("#localStorage").click(function()
  {
    console.warn("loacalStorage测试");
    //存数组
    localStorage.setItem("a",[1,2,3,14,5])
    var a=localStorage.getItem("a")
    var b=Array(a)
    console.log(typeof(a));
    console.log("b>")
    console.log(b);
    console.log(typeof(b));
  })
  //ImageEffect
  $("#im").click(function()
  {
    var Effect=new ImageEffect()
    Effect.setImageEffect(img,Effect.blur,"20px")
  })
  //json存入函数测试
  $("#json").click(function()
  {
    // var code_str="var a=1 \n console.log(a);"
    // var code_func="function a(){console.log(2);} \n a()"
    // var 匿名="console.log(3)"
    // eval(匿名)
    var f=function(){console.log(4)}
    $.cookie("a",f)
    console.log($.cookie("a"));
  })
})
