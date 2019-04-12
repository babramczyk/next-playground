import Head from "next/head"
import Sidenav from "../components/Sidenav"

function Index({ userAgent }) {
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
      <div style={{ display: "flex" }}>
        <Sidenav />
        <main>
          <h1>Home page</h1>
          <h2>Information</h2>

          <dl>
            <dt>User Agent</dt>
            <dd>{userAgent}</dd>
          </dl>
        </main>
      </div>
    </>
  )
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent
  return { userAgent }
}

export default Index
