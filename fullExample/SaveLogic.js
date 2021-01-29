$(function()
{
  $("li").click(function()
  {
    var UserSaveConfirmed=confirm("是否保存要进度")
    if(UserSaveConfirmed)
    {
      var myFile=new FileSystem()
      myFile.save("key","value")
      var date=new Date()
      $("li").text(date.toUTCString()+" "+"NEW!")
    }
  })
  $("#back").click(function()
  {
    changeScene("Scene/Game.html")
  })
})
