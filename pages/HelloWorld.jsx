import Head from "next/head";

export default function HelloWorld() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
    
      <style jsx>{`
        img {
          max-width: 400px;
        }
      `}</style>
      <img src="/static/hello-world.png" alt="Hello World" />
    </>
  );
}
