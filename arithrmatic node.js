function sum(a,b)
{
    console.log(a+b)
}
function sub(a,b)
{
    console.log(a-b)
}
function mul(a,b)
{
    console.log(a*b)
}
function div(a,b)
{
    console.log(a/b)
}
experts=modules ()
    sum,sub,mul,div
  


var imported=require('./arithmetic')
console.log(imported)
imported.sum(9+12)
imported.sum(12-6)
imported.sum(12*1)
imported.sum(4/2)
