export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 修改目标域名
  url.host = 'generativelanguage.googleapis.com';
  
  // 构造新的请求
  const modifiedRequest = new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'manual'
  });

  return fetch(modifiedRequest);
}