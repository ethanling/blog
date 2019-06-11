import { StaticQuery, graphql } from "gatsby"
import React from 'react'

import ThemeContext from "../context/ThemeContext"
import img from '../images/headshot-small.png'

const Header = () => {
	return (
        <ThemeContext.Consumer>
            {theme => (
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
                            <h1 className="header-title">
                                {data.site.siteMetadata.title}
                            </h1>
                            <div className="header-description">
                                <img
                                    className="headshot"
                                    src={img}
                                    alt="Ethan Ling"
                                />
                                <p>
                                    A personal blog by{" "}
                                    <a href="http://ethanling.com">
                                        Ethan Ling
                                    </a>
                                    .
                                </p>
                            </div>
                            <button
                                className="dark-switcher"
                                onClick={theme.toggleDark}
                            >
                                <div className="theme-button-box">
                                    <span
                                        className={`theme-button theme-button-light ${
                                            theme.dark ? "" : "highlight"
                                        }`}
                                    >
                                        ☀
                                    </span>
                                    <span
                                        className={`theme-button theme-button-dark ${
                                            theme.dark ? "highlight" : ""
                                        }`}
                                    >
                                        ☾
                                    </span>
                                </div>
                            </button>
                        </header>
                    )}
                />
            )}
        </ThemeContext.Consumer>
    )
}


export default Header
