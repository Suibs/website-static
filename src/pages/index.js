import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chromeImage from "../../static/images/chrome.svg";
import featureImage from "../../static/images/mainBackup.jpg";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactCompareImage from 'react-compare-image';
import inlineImage from "../../static/images/inlineImage.png";
import popupImage from "../../static/images/popupImage.png";

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

        <div className={"page-preview hidden-sm"}>
            <h1>Display in any way you want</h1>
            <p>Whether you want quick access or a persistent view of your tabs, we have you all covered</p>
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
