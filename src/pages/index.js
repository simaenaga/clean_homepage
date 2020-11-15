import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { EasyAboutMe } from "./about_me"
import { EasySkills } from "./skills"
import { EasyWorks } from "./works"


function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Top" />

      <EasyAboutMe data={data} />
      {seeMoreButton()}<br />
      <EasyWorks data={data} />
      <EasySkills data={data} />

    </Layout>
  )

  function seeMoreButton() {
    return <Link
      style={{
        textDecoration: `none`,
        color: `inherit`,
        textAlign: `center`,
        display: `block`,
        margin: `16px`,
        border: `solid 2px`,
        borderRadius: `10px`
      }}
      to={`/about_me/#my_dream`}
    >
      詳しく見る＞＞
    </Link>
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    skills: allMarkdownRemark(
      sort: {
      fields: [frontmatter___no],
      order: ASC
    }, filter: {
      fileAbsolutePath: {regex: "/skills/"}
    }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            timeItTook
            level
          }
        }
      }
    }

    works: allMarkdownRemark( 
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }, 
      filter:{
        fileAbsolutePath: {regex: "/works/"}
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月")
            title
            description
            timeItTook
            img {
              relativePath
            }
          }
        }
      }
    }
  }
`
