import Container from "@/components/container";
import Meta from "@/components/meta";
import Posts from "@/components/posts";
import Hero from "components/hero";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";

export default function Blog({ posts }) {
  return (
    <>
      <Meta pageTitle="ブログ" pageDesc="ブログページのディスクリプション" />
      <Container>
        <Hero title="Blog" subtitle="ブログページだよー" />
        <Posts posts={posts} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for(const post of posts) {
    if(!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
  }

  return {
    props: {
      posts: posts,
    },
  };
}
