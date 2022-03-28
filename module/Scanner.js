//词法扫描器类 用于读取配置文件
function TokenType()
{
    this.Dot = 0 //.
    this.Equals = 1 //=
    this.Show_code_useage = 2 //#
}
function Scanner()
{
    this.start = 0
    this.current = 0
    this.line = 1
    this.addToken = function(type, object)
    {

        tokens.add(new Token)
    } //int 枚举
    //关键扫描办法
    this.scanToken = function()
    {
        var TokenType_obj = new TokenType()
        switch(p_char)
        {
            case ".": 
                this.addToken(TokenType_obj.Dot)
                break
            case "=":
                this.addToken(TokenType_obj.Equals)
                break
            case "#"://遇到注释直接跳过不处理
                break
            case "\n":
                this.line++
                break
        }
    }
}