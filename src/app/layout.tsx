import Link from "next/link"

export default function Layout({
  children,
  team,
}: {
  children: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home (renders)
            </Link>
          </li>
          <li>
            <Link href="/analytics">
              Analytics (renders)
            </Link>
          </li>
          <li>
            <Link href="test">
              Test (flashes page then 404)
            </Link>
          </li>
        </ul>
      </nav>
      {children}
      {team}
    </>
  )
}