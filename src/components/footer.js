import React from "react"
import ThemeContext from "../context/ThemeContext"

import Twitter from './icons/twitter'
import Instagram from './icons/instagram'
import Github from "./icons/github"

const svgOptions = {
    viewBox: '0 0 24 24',
    height: '34px',
    width: '34px',
}

const Footer = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <footer>
                    <div className="icon-container">
                        <a
                            href="http://github.com/ethanling"
                            className="footer-icon"
                        >
                            <Github
                                fill={theme.dark ? "#FFEB70" : "#120E0E"}
                                viewBox={svgOptions.viewBox}
                                height={svgOptions.height}
                                width={svgOptions.width}
                            />
                        </a>
                        <a
                            href="http://twitter.com/ethanling"
                            className="footer-icon"
                        >
                            <Twitter
                                fill={theme.dark ? "#FFEB70" : "#120E0E"}
                                viewBox={svgOptions.viewBox}
                                height={svgOptions.height}
                                width={svgOptions.width}
                            />
                        </a>
                        <a
                            href="http://instagram.com/ethanling"
                            className="footer-icon"
                        >
                            <Instagram
                                fill={theme.dark ? "#FFEB70" : "#120E0E"}
                                viewBox={svgOptions.viewBox}
                                height={svgOptions.height}
                                width={svgOptions.width}
                            />
                        </a>
                    </div>
                    <p className="copyright-text">
                        &copy; Copyright 2019 Ethan Ling. All Rights
                        Reserved.
                    </p>
                </footer>
            )}
        </ThemeContext.Consumer>
    )
}

export default Footer
