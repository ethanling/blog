import React from "react"
import Header from "./header"
import Footer from "./footer"

import ThemeContext from '../context/ThemeContext'
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={`page ${theme.dark ? "dark" : "light"}`}>
                    <div className="wrapper">
                        <section>
                            <Header />
                            <main>{children}</main>
                        </section>
                        <Footer />
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default Layout