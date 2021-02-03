function AnimateEffect()
{
  var debug=false
  if(debug)
  {
    console.log("#创建了动画模块");
  }
  var effects=["shake","move_to_left","move_to_right"]
  this.shake="shake"
  this.move_to_left="move_to_left"
  this.move_to_right="move_to_right"
  this.setAnimate=function(obj,effect)
  {
    if(effect=="move_to_left")
    {
      obj.animate({right:'250px'})
    }
    if(effect=="move_to_right")
    {
      obj.animate({left:'250px'})
    }
    // obj.animate({right:'250px'})
  }

}
