import Contact from "@/components/contact";
import Container from "@/components/container";
import Hero from "@/components/hero";
import PostBody from "@/components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";
import Image from "next/image";
import eyecatch from "../images/about.jpg";
import Meta from "@/components/meta";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="アバウトページです"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          property
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインな
              まざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けてい
            </p>
            <h2> モノづくりで目指していること </h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを
              れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くあり
              特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをます。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうこと
              の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3> 新しいことへのチャレンジ </h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいい
              取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモ
              くりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
