import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <style jsx>{`
        h1 {
          color: green;
        }
        h2 {
          color: blue;
        }
      `}</style>
      <style jsx global>
        {`
          body {
            font-family: Arial;
          }
        `}
      </style>
      <h1>Home page</h1>
      <h2>Information</h2>
    </>
  );
}
