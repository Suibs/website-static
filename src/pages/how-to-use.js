import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/logo.svg"
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-gtag';


const HowToUse = () => (
    <Layout>
        <SEO title="How to use" />
        <header className={"main-header"}>
            <div className={"container"}>
                <div className={"top-menu"}>
                    <div className={"logo"}>
                        <Link to="/" title={"TST"}>
                            <img alt={"Logo"} src={logo} />
                        </Link>
                    </div>


                </div>
            </div>
        </header>


        <div className={"page-header-how-to home"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h1>How to use</h1>

                    </div>
                </div>
            </div>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2 className={"featured_heading"}>


                                    Inline Mode
                                </h2>

                                <ul className={"featured_list"}>
                                    <li className={"featured_item"}>Go to settings on the top right hand corner of the application </li>
                                    <li className={"featured_item"}>Toggle pop-up mode off</li>
                                    <li className={"featured_item"}>Navigate to any webpage that doesn't start with the prefix: settings,
                                    or isn't a new tab.</li>
                                    <li className={"featured_item"}>Hover to the left to open the application. <br />(You can change in the settings which side of the
                                        screen you'd like to open from also!)</li>
                                </ul>
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


                                    Drag & Drop (Pinned)
                                </h2>
                                <p>Tabs with children tabs attached can be collapsed or expanded.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img className={"shadow"} src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dragPinned.gif"} alt={"Drag pinned"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/resizeMenu.gif"} alt={"Resize menu"} />

                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>

                                <h2 className={"headingRight highlightedText featured_heading"}>
                                    <span className={"headingText"}>Resize menu</span>

                                </h2>
                                <p className={"pRight"}>Hover on the edge of the menu until the resize cursor shows, and then drag left or right until the desired size is reached.</p>
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
                                <p>Tabs with children tabs attached can be collapsed or expanded.</p>
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
                                <p className={"pRight"}>Right click on any tab to add, duplicate, mute/unmute or pin a tab.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2 className={"featured_heading"}>

                                    <span>Context Menu (Pinned)</span>

                                </h2>
                                <p>Right click on any pinned tab to add, mute/unmute, or unpin a pinned tab.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img className={"shadow"} src={"https://treestyletab.s3.eu-west-3.amazonaws.com/contextMenuPin.gif"} alt={"Context menu pinned tab"} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </Layout>
)

export default HowToUse;
