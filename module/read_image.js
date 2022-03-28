//用http get获取到图片素材之后使用二进制方式缓存在内存中 方便快速读取
/**
 * 
 * @param {String} file 完整图片文件路径
 */
function read_data_from_image(file)
{
    var image_data //二进制图片缓存数据
    //TODO：复制已有代码 修改这个
    $.ajax("",success:function(data,status)
    {
        image_data = read_bin_from(data)
    })
    return image_data
}