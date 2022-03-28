function read_conf()
{
    $.get("chapterScript/conf/config.txt",function(data,status)
    {
        var lines = data.split("\n")
        //伪代码，逐字符读取
        for(var i = 0;i < data.length;i++)
        {
            if(data[i] == "#")
            {
                break
            }
            else if(data[i] != ".")
            {
                
            }
        }
        
    })
    //return true
}