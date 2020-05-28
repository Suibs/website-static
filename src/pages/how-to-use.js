import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dots from "../../static/images/dots.gif";
import { faPlay, faMousePointer, faCompressAlt, faCaretSquareDown, faArrowsAltH, faCaretSquareUp, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import openMenu from "../../static/images/openMenu.gif";
import dragPinned from "../../static/images/dragPinned.gif";
import resizeMenu from "../../static/images/resizeMenu.gif";
import contextMenuPin from "../../static/images/contextMenuPin.gif";
import contextMenuNormal from "../../static/images/contextMenuNormal.gif";
import collapse from "../../static/images/collapse.gif";
import dragDrop from "../../static/images/dragDrop.gif";
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
                                <h2>
                                    <FontAwesomeIcon
                                        className={"fontIconLeft"}
                                        icon={faPlay}
                                    />
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
                                <img src={openMenu} alt={"Open menu"}/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={dragDrop} alt={"Drag & Drop"} />


                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2 className={"headingRight highlightedText"}>
                                    <span className={"headingText"}>Drag & Drop</span>
                                    <FontAwesomeIcon
                                        className={"fontIconRight"}
                                        icon={faMousePointer}
                                    />

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
                                <h2>
                                    <FontAwesomeIcon
                                        className={"fontIconLeft"}
                                        icon={faProjectDiagram}
                                    />
                                    Drag & Drop (Pinned)
                                </h2>
                                <p>Tabs with children tabs attached can be collapsed or expanded.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={dragPinned} alt={"Drag pinned"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={resizeMenu} alt={"Resize menu"} />

                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>

                                <h2 className={"headingRight highlightedText"}>
                                    <span className={"headingText"}>Resize menu</span>
                                    <FontAwesomeIcon
                                        className={"fontIconRight"}
                                        icon={faArrowsAltH}
                                    />

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
                                <h2>
                                    <FontAwesomeIcon
                                        className={"fontIconLeft"}
                                        icon={faCompressAlt}
                                    />
                                    Collapsable Tab
                                </h2>
                                <p>Tabs with children tabs attached can be collapsed or expanded.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={collapse}  alt={"Collapsable tab"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={contextMenuNormal} alt={"Context menu normal tab"} />
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2 className={"headingRight highlightedText"}>
                                    <span className={"headingText"}>Context Menu</span>
                                    <FontAwesomeIcon
                                        className={"fontIconRight"}
                                        icon={faCaretSquareDown}

                                    />

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
                                <h2>
                                    <FontAwesomeIcon
                                        className={"fontIconLeft"}
                                        icon={faCaretSquareUp}
                                    />
                                    Context Menu (Pinned)
                                </h2>
                                <p>Right click on any pinned tab to add, mute/unmute, or unpin a pinned tab.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img src={contextMenuPin} alt={"Context menu pinned tab"} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


        <div className={"call-to-action"}>
            <div className={"container call-to-action_inner"}>
                <div className={"call-to-action__content"}>
                    <h2>Check it out!</h2>
                    <p>We're now on the Google Chrome extension store.</p>
                </div>

                <div className={"button"}>
                    <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"} rel="noopener noreferrer">Get Started</a>
                </div>
            </div>

        </div>
    </Layout >
)

export default HowToUse;
