import React from "react"
import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"

const Footer = () => {
    return (
        <footer>
            <a href="http://github.com/ethanling">
                <img
                    src={github}
                    alt="Ethan's Github"
                />
            </a>
            <a href="http://twitter.com/ethanling">
                <img
                    src={twitter}
                    alt="Ethan's Twitter"
                />
            </a>
            <a href="http://instagram.com/ethanling">
                <img
                    src={instagram}
                    alt="Ethan's Instagram"
                />
            </a>
        </footer>
    )
}

export default Footer