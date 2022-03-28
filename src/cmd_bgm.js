//@bgm xxx.ogg true/false:loop mode
function cmd_bgm(file, loop)
{
    $("#bgm")[0].attr("src",file)
    $("#bgm")[0].play()
}