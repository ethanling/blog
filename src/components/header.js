import { StaticQuery, graphql } from "gatsby"
import React from "react"
import img from '../images/headshot-small.png'

const Header = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => (
				<header>
					<h1 className="header-title">{data.site.siteMetadata.title}</h1>
					<div className="header-description">
						<img className="headshot" src={img} alt="Ethan Ling" />
						<p>A personal blog by <a href="http://ethanling.com">Ethan Ling</a>.
						</p>
					</div>
				</header>
			)}
		/>
	)
}


export default Header
