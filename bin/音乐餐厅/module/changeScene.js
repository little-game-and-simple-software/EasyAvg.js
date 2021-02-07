// NOTE: 改变游戏场景 封装的快捷方法
function changeScene(scene)
{
  window.open(scene,"_self")
}
// NOTE: 展示广告
function showAd(sceneid,src,link)
{
  var ad=$("<img>")
  ad.src=src
  $("body").append(ad)
  // NOTE: 设置广告跳转链接
  ad.click(function()
  {
    window.open(link,"_blank")
  })
}
