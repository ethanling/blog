import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <section>
                <Header />
                <main>{children}</main>
            </section>
            <Footer />
        </div>
    )
}

export default Layout