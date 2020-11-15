const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const workTemplate = path.resolve(`./src/templates/work.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date],
            order: DESC
          }, 
          filter: { fileAbsolutePath: {regex: "/works/"} } 
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
  )

  if (result.errors) {
    throw result.errors
  }

  // Create works pages.
  const works = result.data.allMarkdownRemark.edges

  // Templetesはpages以下にないので新たに作らねばならない
  // 独自のものでない情報が変わる物だけをcreatePageすればよい
  works.forEach((work, index) => {
    const previous = index === works.length - 1 ? null : works[index + 1].node
    const next = index === 0 ? null : works[index - 1].node
    
    createPage({
      path: `works/${work.node.frontmatter.title}`,
      component: workTemplate,
      context: {
        slug: work.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
