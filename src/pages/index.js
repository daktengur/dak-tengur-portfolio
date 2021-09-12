import React from "react"
import Helmet from 'react-helmet';
import {graphql, Link} from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import CompaniesWorkedWith from "../components/companies";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: {
      edges
    }
  }
}) => {

  const Posts = edges.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)

  return (
    <Layout>
      <Helmet>
        <h1>
          {site.siteMetadata.title}
        </h1>
        <h2><meta name="description" content={site.siteMetadata.description}/></h2>
      </Helmet>
      <HeroHeader/>
      <CompaniesWorkedWith/>
      <div className="caseStudies-header">
        <div class="caseStudies-list">
          <h2>Case Studies</h2>
          {Posts}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql `
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
