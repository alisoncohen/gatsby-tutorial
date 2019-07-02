import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/contact"
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="blog"
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
