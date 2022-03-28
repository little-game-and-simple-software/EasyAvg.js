/**
 * 基于纹理的九宫格 StyleBox，类似于 NinePatchRect。这个样式盒会对纹理执行 3×3 缩放，其中只有中心单元会被完全拉伸。这使得无论样式盒的大小如何，都可以设计有边框的样式。
*/
function StyleBoxTexture()
{
    this.texture = null
    this.margin_left = 0
    this.margin_right = 0
    this.margin_top = 0
    this.region_rect = Rect2(0,0,0,0) //矩形纹理区域
}