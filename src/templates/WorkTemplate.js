import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import Image from "../components/Image.js";

export function WorkTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={`${post.frontmatter.title} - Works`}
        description={post.frontmatter.description || post.excerpt} />
      <article className="contents">
        <header
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: rhythm(1 / 2),
            textAlign: "center",
            backgroundColor: "#3a5ce4",
            borderRadius: "10px",
            padding: "8px",
            color: "#d6dbec",
            minHeight: "80px"
          }}
        >
          <div style={{ margin: "auto 0" }}>
            <h1
              style={{
                marginBottom: 0,
                color: "#d6dbec"
              }}
              className="ja"
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`
              }}
            >
              {post.frontmatter.date}
              <FontAwesomeIcon
                style={{ margin: "0 2px 0 5px" }}
                icon={faHammer} />
              {post.frontmatter.timeItTook}
            </p>
          </div>


          <nav style={{ margin: "auto 0" }}>
            <ul
              className="work-link"
            >
              {previous && (
                <li style={{ backgroundColor: "#3a5ce4" }}>

                  <Link
                    to={`works/${previous.frontmatter.title}`}
                    rel="prev"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      marginRight: "16px"
                    }}
                  >
                    {`<`}<span className="title">{previous.frontmatter.title}</span>
                    <span className="pn">prev</span>
                  </Link>
                </li>
              )}
              {next && (
                <li style={{ backgroundColor: "#3a5ce4" }}>
                  <Link
                    to={`works/${next.frontmatter.title}`}
                    rel="next"
                    style={{
                      color: "inherit",
                      textDecoration: "none"
                    }}
                  >
                    <span className="title">{next.frontmatter.title}</span>
                    <span className="pn">next</span>{`>`}

                  </Link>
                </li>
              )}
            </ul>
          </nav>

        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} className="work-item" />
        <footer>

        </footer>
      </article>

      <nav style={{ borderTop: "dashed 4px rgba(129, 152, 236, .5)" }}>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            flexWrap: `wrap`,
            padding: 0,
            marginTop: "32px"
          }}
        >
          <div className={previous ? "work-prev" : null}>
            {previous && (
              <Link
                style={{
                  color: `inherit`,
                  textDecoration: `none`
                }}
                to={`works/${previous.frontmatter.title}`}
              >
                <article key={previous.fields.slug} style={{ paddingBottom: "32px" }}>
                  <span>{`<Prev`}</span>
                  <header>
                    <Image
                      filename={previous.frontmatter.img.relativePath}
                      alt={previous.frontmatter.title}
                      style={{
                        height: "189px"
                      }}
                      imgStyle={{
                        objectFit: "cover",
                      }} />
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                        margin: "16px 0 0",
                        display: "inline-block"
                      }}
                      className="ja"
                    >
                      {previous.frontmatter.title}
                    </span><br />
                    <small>{previous.frontmatter.date}</small>
                    <small>
                      <FontAwesomeIcon
                        style={{ margin: "0 2px 0 10px" }}
                        icon={faHammer} />
                      {previous.frontmatter.timeItTook}
                    </small>
                  </header>
                </article>
              </Link>
            )}
          </div>

          <div className={next ? "work" : null}>
            {next && (
              <Link
                style={{
                  color: `inherit`,
                  textDecoration: `none`
                }}
                to={`works/${next.frontmatter.title}`}
              >
                <article key={next.fields.slug} style={{ paddingBottom: "32px" }}>
                  <span>{`Next>`}</span>
                  <header>
                    <Image
                      filename={next.frontmatter.img.relativePath}
                      alt={next.frontmatter.title}
                      style={{
                        height: "189px",
                        width: "100%"
                      }}
                      imgStyle={{
                        objectFit: "cover"
                      }} />
                    <span
                      style={{
                        textAlign: "center",
                        fontSize: "20px"
                      }}
                      className="ja"
                    >
                      {next.frontmatter.title}
                    </span><br />
                    <small>{next.frontmatter.date}</small>
                    <small>
                      <FontAwesomeIcon
                        style={{ margin: "0 2px 0 10px" }}
                        icon={faHammer} />
                      {next.frontmatter.timeItTook}
                    </small>
                  </header>
                </article>
              </Link>
            )}

          </div>

        </div>
      </nav>

    </Layout>
  );
}
