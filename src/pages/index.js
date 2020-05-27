import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import thumbnailEvent from "../../static/images/feature-event.jpg"
import addImage from "../../static/images/add.svg";
import serverImage from "../../static/images/server.svg";
import inlineImage from "../../static/images/inline.svg";
import chromeImage from "../../static/images/chrome.svg";
import colourImage from "../../static/images/colour.svg";
import featureImage from "../../static/images/videoBackup.jpg";
import ddPicture from "../../static/images/ddPicture.jpg";
import ddBackup from "../../static/images/DDBackup.jpg";
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

                        <video className={"hidden-sm"} autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/hero.mp4#t=0.1"} />

                    </div>
                </div>
            </div>
        </div>
        <div className={"features"}>
            <div className={"special-container"}>
                <div className={"targets"}>
                    <div className={"row"}>
                        <div className={"col-item space"}>
                            <div className={"item"}>
                                <img alt={"Information"} src={addImage} />
                                <h3>Tab managment</h3>
                                <p>Add and delete tabs on the fly.</p>
                            </div>
                        </div>

                        <div className={"col-item space"}>
                            <div className={"item"}>
                                <img alt={"Event"} src={serverImage} />
                                <h3>Real-time update</h3>
                                <p>Tab updates tracked using Chrome API.</p>
                            </div>
                        </div>

                        <div className={"col-item space"}>
                            <div className={"item"}>
                                <img alt={"Event"} src={inlineImage} />
                                <h3>Inline menu</h3>
                                <p>Hover on the side or use your chosen hotkeys.</p>
                            </div>
                        </div>
                        <div className={"col-item space"}>
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
                                <p>It's simple. Rearrange your tab by dragging and dropping the tab onto another tab. Created using React.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dd.mp4#t=0.1"} className={"hidden-sm"} />
                                <img alt={"Drag and Drop"} src={ddPicture} className={"display-sm border-sm"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent} className={"border-sm"} />
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
                    <p>We're now on the Google Chrome extension store.</p>
                </div>

                <div className={"button"}>
                    <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"} rel="noopener noreferrer">Get Started</a>
                </div>
            </div>

        </div>
    </Layout>
)

export default IndexPage
