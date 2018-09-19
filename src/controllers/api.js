const webCapture = require('webpage-capture');

const Index = async (ctx) =>{
    const {link} = ctx.request.body

    if(!link){
        ctx.body = {
            errorMsg:'链接不能为空',
            success:false,
        }
        return
    }
    const result = await capture(link)
    ctx.body = {
        data:{
            url:result,
        },
        success:true,
    }
}

const capture = (link)=>{
    return new Promise(resolve=>{
        webCapture(link, {
            whiteBackground:false,
        }, (err, path) => {
            resolve(path[0])
        });
    })
}

module.exports = {
    Index,
}
