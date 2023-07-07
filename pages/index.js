import Container from "@/components/container";
import Meta from "@/components/meta";
import Hero from "components/hero";

export default function Home() {
  return (
    <>
      <Meta />
      <Container>
        <Hero title="CUBE" subtitle="作って学ぶアウトプットブログ" imageOn />
      </Container>
    </>
  );
}
