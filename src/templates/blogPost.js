import React from 'react'
import { Link, graphql } from 'gatsby'

const Template = ({data, pageContext }) => {
    const {next, prev} = pageContext

    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const date = markdownRemark.frontmatter.date
    const html = markdownRemark.html

    function formatDate(d) {
        let formattedDate = new Date(d).toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })
        return formattedDate
    }

    return (
        <div className='post-page-container'>
            <nav className="expanded">
                <div className="logo">
                    <Link to="/">
                        <h1 className="logo-text">MoodBored</h1>
                    </Link>
                </div>
            </nav>
            <section>
                <h1 className="post-page-title">{title}</h1>
                <p className="post-page-date">
                    {formatDate(date)}
                </p>
                <div 
                    className="post-page-content"
                    dangerouslySetInnerHTML={{__html: html}}
                >
                </div>
                {prev &&
                    <span className="post-nav-toggle">
                        <Link to={prev.frontmatter.path}>
                            ← Previous
                        </Link>
                    </span>
                }
                {next && 
                    <span className="post-nav-toggle">
                        <Link to={next.frontmatter.path}>
                            Next →
                        </Link>
                    </span>
                }
            </section>
            <footer className="post-page-footer">
                <div className="footer-content">
                    <p>Footer Content</p>
                </div>
            </footer>
        </div>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`

export default Template