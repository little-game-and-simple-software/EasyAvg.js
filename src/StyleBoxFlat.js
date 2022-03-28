/**
 * 这个 StyleBox 可以用来实现各种外观，无需纹理。以下属性是可定制的：

颜色

边框宽度（每个边框的单独宽度）

圆角（每个角的单独半径）

阴影（带有模糊和偏移）
*/
//参考自Godot游戏引擎的设计
function StyleBoxFlat()
{
    this.bg_color = rgba(1,1,1,225)
    this.border_color = rgba()
    //边框
    this.border_width_bottom = 0
    this.border_width_left = 0
    this.border_width_right = 0
    this.border_width_up = 0
}