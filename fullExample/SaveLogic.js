// NOTE: 存档读档功能初步完成，现在只做了个单个存档存储和读取的功能，之后做多个存档的存储和读取
$(function() {
  $("#bgm").css("display","block")
  // $("#bgm")[0].play()
  //滑动音效
  $("li").mouseenter(function()
  {
    $("#se")[0].play()
    // $("#se")[0].load()
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
  // var list=[]
  //初始化文件系统
  var fileManager = new FileSystem()
  function init()
  { // NOTE: 弃用代码
    //var a = $("<img width='5%' src='img/k18.png' alt='存档截屏快照'>" + "<span>这是已经存在的存档</span>")
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
      var a = $("<img width='5%' src='img/k18.png' alt='存档截屏快照'>" + "<span>" + today + "</span>")
      $(this).html(a)
      id = $(this).attr("value")
      //获得点击index
      console.warn("#存档index>" + id);
      //var toSaveData=$.cookie("runTimeIndex")
      console.log("新存档！");
      //测试用
      // var toSaveData = 1
      var toSaveData=$.cookie("runTimeIndex")
      alert("cookie传入>"+toSaveData)
      var dataObject = {
        "data": toSaveData,
        "date": today
      }
      var save_data_object = JSON.stringify(dataObject)
      alert(save_data_object)
      fileManager.save("saveData" + id, save_data_object)
      // 自动刷新页面
      location.reload()
      //  console.log("cookieIndex#>"+toSaveData)
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
      var loaded_data=data_list[loadId-1].data
      console.log("读取后正确数据>"+loaded_data);
      /*更新cookie数据*/
      $.cookie("runTimeIndex",loaded_data,{path:'/'})
      console.log("cookie值>"+$.cookie("runTimeIndex"));
      /*正确读取后自动返回*/
      if(loaded_data!=null)
      {
        changeScene("Scene/Game.html")
      }
      }
    }
    else
    {
      console.log("取消了读档行为");
    }
  })
})
