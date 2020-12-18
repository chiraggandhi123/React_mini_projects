function add(a,b)
{
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
}

function sub(a,b)
{
    a = parseInt(a);
    b = parseInt(b);
    return a-b;
}

function mul(a,b)
{
    a = parseInt(a);
    b = parseInt(b);
    return a*b;
}

function div(a,b)
{
    a = parseInt(a);
    b = parseInt(b);
    return a/b;
}

module.exports = {add, sub, mul, div}