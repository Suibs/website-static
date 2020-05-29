import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMousePointer, faCompressAlt, faCaretSquareDown, faArrowsAltH, faCaretSquareUp, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const HowToUse = () => (
    <Layout>
        <SEO title="How to use" />

        <div className={"page-header-how-to home"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h1>How to use <img alt={"Logo"} src={logo} /></h1>

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
                                    <span>
                                        <FontAwesomeIcon
                                            className={"fontIconLeft"}
                                            icon={faPlay}
                                        />
                                    </span>

                                    Open application
                                </h2>
                                <p>Navigate to any webpage that doesn't start with the prefix: settings,
                                or isn't a new tab. <br /> Hover to the left to open the application. <br />(You can change in the settings which side of the
                                    screen you'd like to open from also!)
                                </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/openMenu.gif"} alt={"Open menu"} />

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
                                    <span>
                                        <FontAwesomeIcon
                                            className={"fontIconRight"}
                                            icon={faMousePointer}
                                        />
                                    </span>


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
                                    <span>
                                        <FontAwesomeIcon
                                            className={"fontIconLeft"}
                                            icon={faProjectDiagram}
                                        />
                                    </span>

                                    Drag & Drop (Pinned Tab)
                                </h2>
                                <p>Tabs with children tabs attached can be collapsed or expanded.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dragPinned.gif"} alt={"Drag pinned"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted highlightedBlack"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/resizeMenu.gif"} alt={"Resize menu"} />

                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>

                                <h2 className={"headingRight highlightedText highlightedTextBlack featured_heading"}>
                                    <span className={"headingText"}>Resize menu</span>
                                    <span>
                                        <FontAwesomeIcon
                                            className={"fontIconRight"}
                                            icon={faArrowsAltH}
                                        />
                                    </span>


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
                                    <span>
                                        <FontAwesomeIcon
                                            className={"fontIconLeft"}
                                            icon={faCompressAlt}
                                        />
                                    </span>

                                    Collapsable Tab
                                </h2>
                                <p>Tabs with children tabs attached can be collapsed or expanded.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/collapse.gif"} alt={"Collapsable tab"} />
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
                                    <span>
                                        <FontAwesomeIcon
                                            className={"fontIconRight"}
                                            icon={faCaretSquareDown}

                                        />
                                    </span>


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
                                    <span>
                                        <FontAwesomeIcon
                                            className={"fontIconLeft"}
                                            icon={faCaretSquareUp}
                                        />
                                    </span>
                                    <span>Context Menu (Pinned Tab)</span>

                                </h2>
                                <p>Right click on any pinned tab to add, mute/unmute, or unpin a pinned tab.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={"https://treestyletab.s3.eu-west-3.amazonaws.com/contextMenuPin.gif"} alt={"Context menu pinned tab"} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </Layout >
)

export default HowToUse;
