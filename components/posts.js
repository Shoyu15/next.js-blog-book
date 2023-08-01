import Image from "next/legacy/image";
import Link from "next/link";
import styles from "styles/posts.module.css";

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.eachPost} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image 
                src={eyecatch.url}
                alt=""
                layout="fill"
                objectFit="cover"
                sizes="(min-width: 1152px) 576px, 50vw"
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
