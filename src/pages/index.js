import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import addImage from "../../static/images/add.svg";
import serverImage from "../../static/images/server.svg";
import inlineImage from "../../static/images/inline.svg";
import chromeImage from "../../static/images/chrome.svg";
import featureVideo from "../../static/images/hero.mp4";
import DDVideo from "../../static/images/dd.mp4";
import colourImage from "../../static/images/colour.svg";
import featureImage from "../../static/images/videoBackup.png";
import featureGif from "../../static/images/hero.gif";
import DDVideoBackup from "../../static/images/DDBackup.png";
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
                            <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"}>
                                <img src={chromeImage} /> Add to Chrome
                            </a>
                        </div>

                    </div>
                    <div className="col-7">

                        <video className={"hidden-sm"} preload='auto' autoPlay muted loop src={featureVideo} poster={featureImage}>
                            <source src={featureVideo} type="video/mp4" />
                        </video>

                    </div>
                </div>
            </div>
        </div>
        <div className={"features"}>
            <div className={"container"}>
                <div className={"targets"}>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            <div className={"item"}>
                                <img alt={"Information"} src={addImage} />
                                <h3>Tab managment</h3>
                                <p>Add and delete tabs on the fly.</p>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"item"}>
                                <img alt={"Event"} src={serverImage} />
                                <h3>Real-time update</h3>
                                <p>Tab updates tracked using Chrome API.</p>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"item"}>
                                <img alt={"Event"} src={inlineImage} />
                                <h3>Inline menu</h3>
                                <p>Hover on the side or use your chosen hotkeys.</p>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"item"}>
                                <img alt={"Event"} src={colourImage} />
                                <h3>Themes</h3>
                                <p>Toggle to refresh your experience.</p>
                            </div>
                        </div>
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
                                <h2>Drag & Drop</h2>
                                <p>It's simple. Rearrange your tab by dragging and dropping the tab onto another tab, designed and created built on react.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload='auto' autoPlay muted loop src={DDVideo} poster={DDVideoBackup}>
                                    <source src={DDVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent} />
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Tree-like structure</h2>
                                <p>Manipulate your tab in a tree-like hierarchy. Increase your productivity and group the most important tabs together and access them quickly.</p>
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
                    <p>We're now on the Google Chrome Extension Store.</p>
                </div>

                <div className={"button"}>
                    <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"}>Get Started</a>
                </div>
            </div>

        </div>
    </Layout>
)

export default IndexPage
