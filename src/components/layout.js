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
    <div>
      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-title">
            <a href="/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="/">
                <path
                  d="M20 60H28L36 52H20V36H28V28H20L12 36V52L20 60Z"
                  fill="var(--secondary-color)"/>
                <path
                  d="M44 60V36H52L44 28V4L36 12V28H28L36 36V52L44 60Z"
                  fill="var(--primary-color)"/>
              </svg>
            </a>
            {/* <Link to="/">{data.site.siteMetadata.title}</Link> */}
          </div>
          <Navigation/>
        </header>
        {children}
      </div>
      <footer className="site-footer">
        <div className="footer-social">
          <ul className="footer-social-links">
            <li className="footer-social-link-tem">
              <a href="https://twitter.com/daktengur">Twitter</a>
            </li>
            <li className="footer-social-link-tem">
              <a href="https://uk.linkedin.com/in/daktengur">LinkedIn</a>
            </li>
            <li className="footer-social-link-tem">
              <a href="mailto:dak@daktengur.co.uk">Email</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
