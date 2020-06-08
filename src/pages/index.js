import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chromeImage from "../../static/images/chrome.svg";
import featureImage from "../../static/images/mainBackup.jpg";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactCompareImage from 'react-compare-image';
import inlineImage from "../../static/images/inlineImage.png";
import popupImage from "../../static/images/popupImage.png";
import { OutboundLink } from 'gatsby-plugin-gtag';
import logo from "../../static/images/logo.svg";
import { Link } from "gatsby";

const IndexPage = () => (
    <Layout>
        <SEO title="Manage & Organise Your Tab" />
        <header className={"main-header"}>
            <div className={"container"}>
                <div className={"top-menu"}>
                    <div className={"logo"}>
                        <Link to="/" title={"TST"}>
                            <img alt={"Logo"} src={logo} />
                        </Link>
                    </div>


                    <div className={"get-started"}>
                        <OutboundLink
                            href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj"
                        >
                            Get Started
                    </OutboundLink>
                    </div>
                </div>
            </div>
        </header>

        <div className={"page-header home"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-5"}>
                        <h1>Say goodbye to messy tabs</h1>
                        <p>Start browsing the internet the way you want and know where all your tabs are with ease. </p>
                        <div className={"add-to-chrome"}>
                            <OutboundLink
                                href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj"
                            >
                                <img src={chromeImage} alt="Add to Chrome" /> Download And Try for Free

                            </OutboundLink>
                        </div>
                        <small
                            className={"header-small-text"}
                            style={{
                            color: "#8f96a8",
                            fontWight: "500",
                            marginTop: "25px",
                            fontSize: "12px"
                            }}
                        >
                            for macOS + Windows
                        </small>

                    </div>
                    <div className="col-7">

                        <video preload="auto" src={"https://treestyletab.s3.eu-west-3.amazonaws.com/main.mp4"} poster={featureImage} className={"hidden-sm"} autoPlay muted loop />

                    </div>
                </div>
            </div>
        </div>
        <svg style={{ background: "black" }} fill="#FFFFFF" className="hidden-sm" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C40 0 60 0 100 100 Z"></path>
        </svg>


        <div className={"page-preview hidden-sm"}>
            <h1>Display in any way you want</h1>
            <p>Whether you just want quick access or would like a more persistent view of your tabs, we have you all covered</p>
            <div style={{ width: "50%", textAlign: "center", margin: "60px auto 0 auto" }}>
                <ReactCompareImage aspectRatio={'wider'} leftImage={inlineImage} rightImage={popupImage} />
            </div>

        </div>
        <div>
            <div className={"container"}>
                <div className={"features"}>
                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2 className={"featured_heading"}>


                                        Inline Mode
                                </h2>
                                    <p>Hover to the side to open the application.
                                </p>
                                </div>
                            </div>

                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img className={"shadow"} src={"https://treestyletab.s3.eu-west-3.amazonaws.com/openMenu.gif"} alt={"Open menu"} />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"feature__item"}>
                        <div className={"row highlighted"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dragDrop.gif"} alt={"Drag & Drop"} />


                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2 className={"headingRight highlightedText featured_heading"}>
                                        <span className={"headingText"}>Drag & Drop</span>



                                    </h2>
                                    <p className={"pRight"}>Manipulate your tab in a tree-like hierarchy. Group the most important tabs together and have access to them quickly.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2 className={"featured_heading"}>


                                        Collapsable Tab
                                </h2>
                                    <p>Expand or collapse tabs to keep a plain view of what you're browsing in the moment.</p>
                                </div>
                            </div>

                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img className={"shadow"} src={"https://treestyletab.s3.eu-west-3.amazonaws.com/collapse.gif"} alt={"Collapsable tab"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"feature__item"}>
                        <div className={"row highlighted"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/contextMenuNormal.gif"} alt={"Context menu normal tab"} />
                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2 className={"headingRight highlightedText featured_heading"}>
                                        <span className={"headingText"}>Context Menu</span>



                                    </h2>
                                    <p className={"pRight"}>All the functionalities you need are one right click away.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div style={{
            background: "black",
            textAlign: "center",
            padding: "100px 0"
        }}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2 style={{
                            color: "white",
                            marginBottom: "60px",
                            fontSize: "2rem"
                        }}>
                            Ready to get the browsing experience you deserve?
                        </h2>
                        <div className={"installButton"}>
                            <OutboundLink
                                href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj"
                            >
                                Install For Free
                            </OutboundLink>
                        </div>
                        <small style={{
                            display: "block",
                            textAlign: "center",
                            color: "#8f96a8",
                            fontWight: "500",
                            marginTop: "25px",
                            fontSize: "12px"
                        }}>
                            for macOS + Windows
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
