// NOTE: 存档读档功能初步完成，现在只做了个单个存档存储和读取的功能，之后做多个存档的存储和读取
$(function() {
  $("#bgm").css("display","block")
  // $("#bgm")[0].play()
  //滑动音效
  $("li").mouseenter(function()
  {
    // $("#se")[0].play()
  })
  /*用于存文件*/
  var id
  /*存档列表*/
  var toSaveDataArray = []
  /*获得今日日期*/
  var date = new Date()
  var today = date.toDateString() + " " + "NEW!"
  /*用于给读档按钮的json数据*/
  var data_list=[]
  //初始化文件系统
  var fileManager = new FileSystem()
  function init()
  {
  /*数据列表*/
    var list=[]
    /*遍历 获得数据*/
    for (var i = 0; i < 10; i++)
    {
      var d=fileManager.load("saveData"+i)
      if(d)
       {
         list.push(d)
       }
      // console.log("循环中的索引"+i);
    }
    /*更新界面*/
    console.log(list);
    console.log(list[0]);
    /*解析json*/
    for(var i=0;i<list.length;i++)
    {
      var obj=JSON.parse(list[i])
      console.log(obj);
      data_list.push(obj)
      $("#saveList li:eq("+i+")").text("你的存档数据："+obj.data+" 存档日期："+obj.date)
    }
  }
  init()
  /*存档功能*/
  $("#saveList li").click(function()
  {
    var saveState = confirm("存档吗?")
  //  console.log($(this));
    if (saveState) {
      var a = $("<span>" + today + "</span>")
      $(this).html(a)
      id = $(this).attr("value")
      //获得点击index
      console.warn("#存档index>" + id);
      //搞什么社区团购 烦死了，我只想做电脑，赚钱什么 全部都是自私的陋习
      //var toSaveData=$.cookie("runTimeIndex")
      console.log("新存档！");
      //截屏对象
      var shot_img=""
      var toSaveData=localStorage.getItem("RunTimeIndex")
      alert("缓存传入>"+toSaveData)
      var dataObject = {
        "data": toSaveData,
        "date": today,
        "screenShot":"src",
      }
      var save_data_object = JSON.stringify(dataObject)
      alert(save_data_object)
      fileManager.save("saveData" + id, save_data_object)
      // 自动刷新页面
      location.reload()
    }
  })
  $("#back").click(function() {
    changeScene("Scene/Game.html")
  })
  //清空存档
  $("#reset").click(function()
  {
    alert("清空存档没有退路！>>>")
    fileManager.clearAll()
    location.reload()
  })
  //读档
  $("#loadGame").click(function()
  {
    var state=confirm("读档吗")
    var loadId=$("#loadId").val()
    /*读档*/
    if(state)
    {
      console.log("开始读档");
      console.log("存档数据列表");
      console.log(data_list);
      /*错误数值*/
      if(loadId>10)
      {
        alert("错误，id越界")
      }
      if(loadId<1)
      {
        alert("错误，id越界")
      }
      /*正确读档行为*/
      else{
        //加载的数据
      var loaded_data=data_list[loadId-1].data
      console.log("读取后正确数据>"+loaded_data)
      //处理值
      if(loaded_data!=null)
      {
        //取得存档后，把信息分离 告诉加载器的逻辑应该写在哪里
        //更新缓存
        localStorage.setItem("RunTimeIndex",loaded_data)
        var t=localStorage.getItem("RunTimeIndex")
        if(t!=null)
        {
          changeScene("Scene/Game.html")
        }
       }
      }
    }
    else
    {
      console.log("取消了读档行为");
    }
  })
})
