//@bg命令的实现 用于放置背景中的人物
//@bg c 12345.png 0.5
function bg_command(x, y, width, height)
{
    
}
//@ch命令的初始化
function init(position, file, fade_time)
{
    if(fade_time == null)
    {
        $("#bg").attr("src", file)
    }
    else
    {
        //alpha淡入 计算公式：100/总淡入秒数
        var calculated_alpha = 100/fade_time
        $("#bg").attr("src", file)
        $("#bg").css("alpha",calculated_alpha)  //css动画
        //喝个水
    }
}
function draw()
{

}
//position伪代码
/*struct position
{
    x;
    y;
}*/