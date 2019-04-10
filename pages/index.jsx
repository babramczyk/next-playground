export default function Index() {
  return (
    <>
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
