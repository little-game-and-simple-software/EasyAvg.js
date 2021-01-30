// NOTE: 存档读档功能初步完成，现在只做了个单个存档存储和读取的功能，之后做多个存档的存储和读取
$(function()
{
  //初始化存档和读档index
  var saveData_index=0
  var loadData_index=0
  //初始化文件系统
  var fileManager=new FileSystem()
  var gameDataManager=function(){}
    var date=new Date()
    var today=date.toDateString()+" "+"NEW!"
  $("#loadList li").click(function()
  {
    var saveState=confirm("读档吗?")
    if(saveState)
    {
      alert("！技术问题，搁置，请在下面手动输入来读档")
    }
  })
  $("#saveList li").click(function()
  {
    //先询问是否存档
    var saveState=confirm("存档吗?")
    console.log($(this));
    if(saveState)
    {
   var a=$("<li><img width='5%' src='img/k18.png' alt='存档截屏快照'>存档了"+" "+today+"NEW!"+"</li>")
   //var i=$(this)[0].value
  // console.log("i>"+i);
    $(this).html(a)
    //获得点击index
    //读档界面同步更新
    //$("#loadList li:eq("+i+")").html(a)
    console.log("新存档！");
    //存档index，从cookie临时缓存中取出来
   var toSaveData=$.cookie("runTimeIndex")
   console.log("cookieIndex#>"+toSaveData)
   //更新saveIndex
    fileManager.save("saveDataIndex",saveData_index)
    fileManager.save("saveData",toSaveData)
    saveData_index+=1
  }
  })
  $("#back").click(function()
  {
    changeScene("Scene/Game.html")
  })
  //读档按钮
  $("#loadGame").click(function()
  {
    var id=$("#loadId").val()
    console.log("ID>"+id);
    //取最大索引
    var maxId=fileManager.load("saveDataIndex")
    if(id>maxId)
    {
      alert("!错误，序号越界！")
    }
    //读存档到cookie
    if(id<=maxId)
    {
      var index=fileManager.load("saveData")
      //更新cookie
      $.cookie("runTimeIndex",index,{path:'/'})
      console.log("读取后数据为>"+index);
      changeScene("Scene/Game.html")
      //更新完毕cookie后，自动回到主界面，然后框架获取到cookie之后，自动恢复进度
      //存档顺序cookie->localStorage
      //读档顺序localStorage->cookie
      /*      实际上是绕了一遍，但还是必须要绕一遍，因为cookie存储空间只有4kb,没有localStorage大，
      且cookie是临时存储的，关闭浏览器就没有数据了，需要转持久化存储*/

    }
  })
})
/* $("li").click(function()
  {
    var UserSaveConfirmed=confirm("是否保存要进度")
    if(UserSaveConfirmed)
    {
      var myFile=new FileSystem()
      myFile.save("key","value")
      var date=new Date()
      $("li").text(date.toUTCString()+" "+"NEW!")
    }
  })*/
