let test1 = async (ctx, next) => {
    await next();
    ctx.body = JSON.stringify({data: "hello"});
};

let test2 = async (ctx, next) => {
    await next();
    console.log(typeof ctx.request.body);
    ctx.body = JSON.stringify({data: "world"});
};

module.exports = {
    test1: test1,
    test2: test2
};
