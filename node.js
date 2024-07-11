var url= require('url')
http.createserver(function(req,res){

    var q=url.parse(req.url,true)
    console.log(q.server)
    console.log(q.pathname)
    console.log(q.search)
    console.log(q)
})
