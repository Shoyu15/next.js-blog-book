import Link from "next/link";
import styles from "../styles/posts.module.css";
import Image from "next/image";

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug ,eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure className={styles.image}>
              <Image
                src={eyecatch.url }
                alt=""
                layout="responsive"
                width={eyecatch.width}
                height={eyecatch.height}
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const posts of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
  }
  return {
    props: {
      posts: posts,
    },
  }
}