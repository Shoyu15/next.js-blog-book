import { createClient } from "microcms-js-sdk";

export const client = createClient({
  // nodejsでは環境変数はprocess.env.環境変数名でとりだせる
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filter: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug~~");
    console.log(err);
  }
}
