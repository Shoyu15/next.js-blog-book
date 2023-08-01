import Container from "@/components/container";
import Meta from "@/components/meta";
import PostHeader from "@/components/post-header";
import Posts from "@/components/posts";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import { eyecatchLocal } from "lib/constants";

export default function Category( {name, posts} ) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category サブ" />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({slug})=> `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug
  const allCats = await getAllCategories()
  const cat = allCats.find(({slug}) => slug === catSlug)

  const posts = await getAllPostsByCategory(cat.id)

  for(const post of posts) {
    if(!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
  }

  return {
    props: {
      name: cat.name,
      posts: posts
    }
  }
}