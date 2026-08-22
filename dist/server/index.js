export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) return assetResponse;

    const url = new URL(request.url);
    if (!url.pathname.includes('.')) {
      const htmlUrl = new URL(request.url);
      htmlUrl.pathname = url.pathname.replace(/\/$/, '') + '.html';
      const htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl, request));
      if (htmlResponse.status !== 404) return htmlResponse;
    }

    const notFoundUrl = new URL(request.url);
    notFoundUrl.pathname = '/404.html';
    return env.ASSETS.fetch(new Request(notFoundUrl, request));
  }
};
