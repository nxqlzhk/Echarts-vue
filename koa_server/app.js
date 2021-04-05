// 服务器入口文件
const Koa = require("koa");
const app = new Koa();

const respDurationMiddleware = require("./middleware/koa_response_duration");
app.use(respDurationMiddleware);

const respHeaderMiddleware = require("./middleware/koa_response_header");
app.use(respHeaderMiddleware);

const respDataMiddleware = require("./middleware/koa_response_data");
app.use(respDataMiddleware);

// 绑定端口号
app.listen(8888);
