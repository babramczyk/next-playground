import Head from "next/head"
import Sidenav from "../components/Sidenav"

export default function HelloWorld() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>

      <style jsx>{`
        img {
          max-width: 400px;
          align-self: center;
        }
      `}</style>

      <div style={{ display: "flex" }}>
        <Sidenav />
        <img src="/static/hello-world.png" alt="Hello World" />
      </div>
    </>
  )
}
