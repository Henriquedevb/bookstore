import Link from 'next/link'
import styles from './navbar.module.scss'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1>BookStore<span>.</span> </h1>
      </Link>
      <ul className={styles.ulStyle}>
        <Link href="/books">
          <li>Books</li>
        </Link>
      </ul>
    </div>
  )
}