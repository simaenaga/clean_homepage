import { graphql } from "gatsby"


import { WorkTemplate } from "./WorkTemplate"

export default WorkTemplate

export const pageQuery = graphql`
  query WorkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "YYYY年MM月")
        title
        description
        no
        timeItTook
        level
      }
    }
  }
`
