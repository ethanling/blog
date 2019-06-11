import React from "react"
import ThemeContext from "../context/ThemeContext"

import github from "../images/github.svg"
import Twitter from './icons/twitter'
import Instagram from './icons/instagram'
import Github from "./icons/github"

const Footer = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <footer>
                    <a href="http://github.com/ethanling">
                        <Github
                            fill={theme.dark ? "#FFEB70" : "#120E0E"}
                            viewBox={"0 0 24 24"}
                            height={"34px"}
                            width={"34px"}
                        />
                    </a>
                    <a href="http://twitter.com/ethanling">
                        <Twitter
                            fill={theme.dark ? "#FFEB70" : "#120E0E"}
                            viewBox={"0 0 24 24"}
                            height={"34px"}
                            width={"34px"}
                        />
                    </a>
                    <a href="http://instagram.com/ethanling">
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