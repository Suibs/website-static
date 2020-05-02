/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconYoutube from "../../static/images/icon-youtube.svg"
import iconGithub from "../../static/images/icon-github.svg"

const Layout = ({ children }) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
                <footer>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"widget__item"}>
                                    <div className={"logo"}>
                                        <Link to="/" title={"Tree Style Tab"}>
                                            <img alt={"Logo"} src={logo} />
                                        </Link>
                                    </div>

                                    <div className={"about"}>
                                        <p>A google extension that utilises the concept of tree-like hireachy structure for tab management.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"col-2"}>
                                <div className={"widget__item"}>
                                    <div className={"links"}>
                                        <h4>Support</h4>
                                        <ul>
                                            <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                            <li><a href="https://feedback.treestyletab.com/" title={"FAQ"}>FAQ</a></li>
                                            <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li>
                                            <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={"col-4"}>
                                <div className={"widget__item"}>
                                    <div className={"social"}>
                                        <a href="https://twitter.com/treestyletab" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter} /></a>
                                        <a href="https://www.youtube.com/channel/UCncC2IuvgAsYZD3e7hX0irQ" target={"_blank"} title={"Youtube"}><img alt={"Youtube"} src={iconYoutube} /></a>
                                        <a href="https://github.com/Suibs/Tree-Style-Tab-For-Chrome" target={"_blank"} title={"Github"}><img alt={"Github"} src={iconGithub} /></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"copyright"}>
                            <p>Copyright {new Date().getFullYear()}, {` `} <a href="/" title={"Tree Style Tab"}>Tree Style Tab</a>. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </>
        )} />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
