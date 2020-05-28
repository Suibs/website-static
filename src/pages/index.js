import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chromeImage from "../../static/images/chrome.svg";
import featureImage from "../../static/images/mainBackup.jpg";
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
const IndexPage = () => (
    <Layout>
        <SEO title="Manage & Organise Your Tab" />

        <div className={"page-header home"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-5"}>
                        <h1>Manage & Organise Your Tab</h1>
                        <p>Say goodbye to messy tabs - Start browsing the internet the way you want and know where all your tabs are with ease. </p>
                        <div className={"add-to-chrome"}>
                            <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"} rel="noopener noreferrer">
                                <img src={chromeImage} alt="Add to Chrome" /> Add to Chrome
                            </a>
                        </div>

                    </div>
                    <div className="col-7">

                        <video preload="auto" src={"https://treestyletab.s3.eu-west-3.amazonaws.com/main.mp4"} poster={featureImage} className={"hidden-sm"} autoPlay muted loop />

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
                                <p>Hover to the side to open the application.
                                </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload="metadata" autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/openMenu.mp4#t=0.1"} poster={dots} className={"hidden-sm"} />
                                <img src={openMenu} className={"display-sm"} alt={"Open menu"}/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>

                                <video preload="metadata" autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dragDrop.mp4#t=0.1"} poster={dots} className={"hidden-sm"} />
                                <img src={dragDrop} className={"display-sm"} alt={"Drag & Drop"} />


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
                                <video preload="metadata" autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dragPinned.mp4#t=0.1"} poster={dots} className={"hidden-sm"} />
                                <img src={dragPinned} className={"display-sm"} alt={"Drag pinned"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload="metadata" autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/resizeMenu.mp4#t=0.1"} poster={dots} className={"hidden-sm"} />
                                <img src={resizeMenu} className={"display-sm"} alt={"Resize menu"} />

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
                                <video preload="metadata" autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/collapse.mp4#t=0.1"} poster={dots} className={"hidden-sm"} />
                                <img src={collapse} className={"display-sm"} alt={"Collapsable tab"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row highlighted"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload="metadata" autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/contextMenuNormal.mp4#t=0.1"} poster={dots} className={"hidden-sm"} />
                                <img src={contextMenuNormal} className={"display-sm"} alt={"Context menu normal tab"} />
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
                                <video preload="metadata" autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/contextMenuPin.mp4#t=0.1"} poster={dots} className={"hidden-sm"} />
                                <img src={contextMenuPin} className={"display-sm"} alt={"Context menu pinned tab"} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container call-to-action_inner"}>
                <div className={"call-to-action__content"}>
                    <h2>Get Tree Style Tab</h2>
                    <p>Don't hesitate, you deserve the best browsing experience!</p>
                </div>

                <div className={"button"}>
                    <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"} rel="noopener noreferrer">Install</a>
                </div>
            </div>

        </div>
    </Layout>
)

export default IndexPage
