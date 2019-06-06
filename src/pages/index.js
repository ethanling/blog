import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = ({ data }) => {
    const { edges } = data.allMarkdownRemark

    function formatDate(d) {
		let formattedDate = new Date(d).toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })
        return formattedDate
    }

    return (
        <Layout
            children={edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <div key={frontmatter.title} className="post-item">
						<div
							key={frontmatter.date}
							className="post-item-date"
						>
							{formatDate(frontmatter.date)}
						</div>
                        <div
                            key={frontmatter.path}
                            className="post-title-container"
                        >
                            <Link to={frontmatter.path} className="post-title">
                                {frontmatter.title}
                            </Link>
                        </div>
                        <div key={frontmatter.excerpt} className="post-excerpt">
                            {frontmatter.excerpt}
                        </div>
                    </div>
                )
            })}
        />
    )
}

export const query = graphql`
    query HomepageQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                        excerpt
                    }
                }
            }
        }
    }
`

export default IndexPage
