const statusCode = (ctx, next) => {
  return next().catch((err) => {
    switch (err.status) {
    case 400:
      ctx.status = 400
      ctx.body = {err: '（错误请求） 服务器无法处理你的请求'}
      break
    case 401:
      ctx.status = 401
      ctx.body = {err: '（身份验证错误） 请求此页要求授权'}
      break
    case 403:
      ctx.status = 403
      ctx.body = {err: '（禁止） 服务器拒绝请求'}
      break
    case 404:
      ctx.status = 404
      ctx.body = {err: '（未找到） 服务器找不到请求的网页'}
      break
    case 405:
      ctx.status = 405
      ctx.body = {err: '（方法禁用） 禁用请求中指定的方法'}
      break
    case 406:
      ctx.status = 406
      ctx.body = {err: '（不接受） 无法使用请求的内容特性响应请求的网页'}
      break
    case 407:
      ctx.status = 407
      ctx.body = {err: '（需要代理授权） 此状态码与 401 类似，但指定请求者必须授权使用代理。如果服务器返回此响应，还表示请求者应当使用代理'}
      break
    case 408:
      ctx.status = 408
      ctx.body = {err: '（请求超时） 服务器等候请求时发生超时'}
      break
    case 409:
      ctx.status = 409
      ctx.body = {err: '（冲突） 服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息。服务器在响应与前一个请求相冲突的 PUT 请求时可能会返回此代码，以及两个请求的差异列表'}
      break
    case 410:
      ctx.status = 410
      ctx.body = {err: '（已删除） 请求的资源永久删除后，服务器返回此响应。该代码与 404（未找到）代码相似，但在资源以前存在而现在不存在的情况下，有时会用来替代 404 代码。如果资源已永久删除，您应当使用 301 指定资源的新位置'}
      break
    case 411:
      ctx.status = 411
      ctx.body = {err: '（需要有效长度） 服务器不接受不含有效内容长度标头字段的请求'}
      break
    case 412:
      ctx.status = 412
      ctx.body = {err: '（未满足前提条件） 服务器未满足请求者在请求中设置的其中一个前提条件'}
      break
    case 413:
      ctx.status = 413
      ctx.body = {err: '（请求实体过大） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力'}
      break
    case 414:
      ctx.status = 414
      ctx.body = {err: '（请求的 URI 过长） 请求的 URI（通常为网址）过长，服务器无法处理'}
      break
    case 415:
      ctx.status = 415
      ctx.body = {err: '（不支持的媒体类型） 请求的格式不受请求页面的支持'}
      break
    case 416:
      ctx.status = 416
      ctx.body = {err: '（请求范围不符合要求） 页面无法提供请求的范围'}
      break
    case 417:
      ctx.status = 417
      ctx.body = {err: '（未满足期望值） 服务器未满足"期望"请求标头字段的要求'}
      break
    case 500:
      ctx.status = 500
      ctx.body = {err: '（服务器内部错误）  服务器遇到错误，无法完成请求'}
      break
    case 501:
      ctx.status = 501
      ctx.body = {err: '（尚未实施） 服务器不具备完成请求的功能。例如，当服务器无法识别请求方法时，服务器可能会返回此代码'}
      break
    case 502:
      ctx.status = 502
      ctx.body = {err: '（错误网关） 服务器作为网关或代理，从上游服务器收到了无效的响应'}
      break
    case 503:
      ctx.status = 503
      ctx.body = {err: '（服务不可用） 目前无法使用服务器（由于超载或进行停机维护）。通常，这只是一种暂时的状态'}
      break
    case 504:
      ctx.status = 504
      ctx.body = {err: '（网关超时）  服务器作为网关或代理，未及时从上游服务器接收请求'}
      break
    case 505:
      ctx.status = 505
      ctx.body = {err: '（HTTP 版本不受支持） 服务器不支持请求中所使用的 HTTP 协议版本'}
      break
    default:
      break
    }
  })
}
module.exports = statusCode