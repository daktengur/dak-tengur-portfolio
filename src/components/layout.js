import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default({children}) => {
  const data = useStaticQuery(graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <svg
            width="24"
            height="24"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M20 60H28L36 52H20V36H28V28H20L12 36V52L20 60Z" fill="var(--accent)"/>
            <path d="M44 60V36H52L44 28V4L36 12V28H28L36 36V52L44 60Z" fill="var(--accent)"/>
          </svg>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation/>
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
