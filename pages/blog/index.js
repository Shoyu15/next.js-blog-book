import Container from "@/components/container";
import Meta from "@/components/meta";
import Hero from "components/hero";

export default function Blog() {
  return (
    <>
      <Meta
        pageTitle="ブログ"
        pageDesc="ブログページのディスクリプション"
      />
      <Container>
        <Hero title="Blog" subtitle="ブログページだよー" />
      </Container>
    </>
  );
}
