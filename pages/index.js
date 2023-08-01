import Container from "@/components/container";
import Meta from "@/components/meta";
import Pagination from "@/components/pagination";
import Posts from "@/components/posts";
import Hero from "components/hero";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";

export default function Home({ posts }) {
  return (
    <>
      <Meta />
      <Container>
        <Hero title="CUBE" subtitle="作って学ぶアウトプットブログ" imageOn />

        <Posts posts={posts} />
        <Pagination nextUrl="/blog" nextText="More Posts" />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
}
