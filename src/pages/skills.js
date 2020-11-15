import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import sleepingCatGif from "../../content/assets/sleepingCat.gif"
import sleepingCat from "../../content/assets/sleepingCat.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw, faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as reFaStar } from "@fortawesome/free-regular-svg-icons"

let GifPlayer

if (typeof window !== `undefined`) {
  GifPlayer = require("react-gif-player")
}

export const EasySkills = ({ data }) => {
    const skills = data.skills.edges

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
                        Skills
                        <FontAwesomeIcon
                            style={{marginLeft: "5px"}}
                            icon={faPaw}
                        />
                    </div>
                </h1>
            </header>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center"}}>
                <div className="skill" >
                    <span
                        style={{
                            fontSize: "13px",
                            width: "100%",
                            display:"inline-block",
                            textAlign: "center"
                        }}
                    >
                        ※画像をクリックorタップすると動くよ。<br/>
                        もう一度クリックorタップすると止まる。
                    </span>
                    {typeof window !== `undefined` && <GifPlayer gif={sleepingCatGif} still={sleepingCat}/>}
                </div>
 
                {skills.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    const level = node.frontmatter.level
                    let star = []
                    
                    star.push(
                        <FontAwesomeIcon
                            style={{margin: "0 5px", color: "#FEE7BC"}}
                            icon={faStar}
                        />
                    )

                    for(let i=0; i<level-1; i++){
                        star.push(
                            <FontAwesomeIcon
                                style={{marginRight: "5px", color: "#FEE7BC"}}
                                icon={faStar}
                            />
                        )
                    }
                
                    for(let i=0; i<(5-level); i++){
                        star.push(
                            <FontAwesomeIcon
                                style={{marginRight: "5px", color: "#FEE7BC"}}
                                icon={reFaStar}
                            />
                        )
                    }
                    
                    
                    return (
                    <article key={node.fields.slug} className="skill">
                        <header>
                        <h2
                            style={{
                                marginBottom: rhythm(1 / 4),
                                textAlign: "center",
                                fontSize: "24px"
                            }}
                            className="en"
                        >
                            <span className="marker" >{title}</span>
                        </h2>
                        <small style={{fontSize: "14px"}}>{node.frontmatter.timeItTook}</small><br/>
                        {star}
                        </header>
                        <section>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                            }}
                            style={{fontSize: "16px"}}
                        />
                        </section>
                    </article>
                    )
                })}
            </div>
      </div>
    )
}

const Skills = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Skills" /> 
      <EasySkills data={data}/>  
    </Layout>
  )
}

export default Skills

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
  }
`