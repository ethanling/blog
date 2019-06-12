import React from "react"
import ThemeContext from "../context/ThemeContext"

import Twitter from './icons/twitter'
import Instagram from './icons/instagram'
import Github from "./icons/github"

const Footer = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <footer>
                    <a href="http://github.com/ethanling" className="footer-icon">
                        <Github
                            fill={theme.dark ? "#FFEB70" : "#120E0E"}
                            viewBox={"0 0 24 24"}
                            height={"34px"}
                            width={"34px"}
                        />
                    </a>
                    <a href="http://twitter.com/ethanling" className="footer-icon">
                        <Twitter
                            fill={theme.dark ? "#FFEB70" : "#120E0E"}
                            viewBox={"0 0 24 24"}
                            height={"34px"}
                            width={"34px"}
                        />
                    </a>
                    <a href="http://instagram.com/ethanling" className="footer-icon">
                        <Instagram
                            fill={theme.dark ? "#FFEB70" : "#120E0E"}
                            viewBox={"0 0 24 24"}
                            height={"34px"}
                            width={"34px"}
                        />
                    </a>
                </footer>
            )}
        </ThemeContext.Consumer>
    )
}

export default Footer