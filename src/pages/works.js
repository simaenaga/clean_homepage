import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw, faHammer } from "@fortawesome/free-solid-svg-icons"

import Image from "../components/Image.js"

import sleepingCatGif from "../../content/assets/sleepingCat.gif"
import sleepingCat from "../../content/assets/sleepingCat.png"

let GifPlayer

if (typeof window !== `undefined`) {
  GifPlayer = require("react-gif-player")
}

// トップページ表示用コンポーネント
export function EasyWorks({ data }) {
  const posts = data.works.edges
  
  return (
    <div className="contents">
      <header>
          <h1
              style={{
                marginBottom: rhythm(1 / 2),
                textAlign: "center",
                backgroundColor: "#3a5ce4",
                borderRadius: "10px",
                padding: "8px",
                color: "#d6dbec",
                height: "80px"
              }}
              className="en"
          >
              <div style={{margin: "18px 0"}}>
                  <FontAwesomeIcon
                      style={{marginRight: "5px"}}
                      icon={faPaw}
                  />
                  Works
                  <FontAwesomeIcon
                      style={{marginLeft: "5px"}}
                      icon={faPaw}
                  />
              </div>
          </h1>
      </header>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center"}}>
          <div className="neko" >
              <span
                  style={{
                      fontSize: "13px",
                      width: "100%",
                      display:"inline-block",
                      textAlign: "center",
                      padding: "24px 0"
                  }}
              >
              ※画像をクリックorタップすると動くよ。<br/>
              もう一度クリックorタップすると止まる。
              </span>
              {typeof window !== `undefined` && <GifPlayer gif={sleepingCatGif} still={sleepingCat} />}
          </div>
          {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link
                  style={{
                      color: `inherit`,
                      textDecoration: `none`
                  }}
                  className="work"
                  to={`/works/${title}`}
                >
                  <article key={node.fields.slug} style={{paddingBottom: "32px"}}>
                      <span>Check</span>
                    <header>
                      <Image
                        filename={node.frontmatter.img.relativePath}
                        alt={title}
                        style={{
                          height: "189px",
                          width: "100%"}}
                        imgStyle={{
                          objectFit: "cover"
                        }}
                      />                           
                      <span
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          margin: "16px 0 0",
                          display: "inline-block"
                        }}
                      >
                          {title}
                      </span><br/>
                      <small>{node.frontmatter.date}</small>
                      <small>
                        <FontAwesomeIcon
                          style={{margin: "0 2px 0 10px"}}
                          icon={faHammer}
                        />
                        {node.frontmatter.timeItTook}
                      </small>
                    </header>
                  </article>
                
                </Link>
              )
          })}
      </div>
    </div>
  )
}

function Works({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Works" />
      <EasyWorks data={data} />
    </Layout>
  )
}

export default Works


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
