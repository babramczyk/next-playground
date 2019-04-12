import Link from "next/link"

export default function Sidenav() {
  return (
    <aside
      style={{
        borderRight: "4px solid black",
        color: "white",
        paddingRight: "16px",
        marginRight: "16px"
      }}
    >
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <br />
        <br />
        <Link href="/helloworld">
          <a>Hello World</a>
        </Link>
      </nav>
    </aside>
  )
}
