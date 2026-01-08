export async function onRequest({ request }) {
  const url = new URL(request.url);
  url.host = 'generativelanguage.googleapis.com';
  return fetch(new Request(url.toString(), request));
}
