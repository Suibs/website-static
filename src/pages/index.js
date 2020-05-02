import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.gif";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import addImage from "../../static/images/add.svg";
import serverImage from "../../static/images/server.svg";
import inlineImage from "../../static/images/inline.svg";
import chromeImage from "../../static/images/chrome.svg";


const IndexPage = () => (
    <Layout>
        <SEO title="Manage & Organise Your Tab" />

        <div className={"page-header home"}>
            <div className={"container"}>
                <div className="row">
                    <div className="col-5">
                        <h1>Manage & Organise Your Tab</h1>
                        <p>The wait is finally over. TST is now on Google Chrome! </p>
                        <div className={"add-to-chrome"}>
                            <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"}>
                                <img src={chromeImage} /> Add to Chrome
                            </a>
                        </div>

                    </div>
                    <div className="col-7">
                        <img alt={"Dashboard"} src={featureImage} />

                    </div>
                </div>
            </div>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Features</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-4"}>
                        <div className={"item"}>
                            <img alt={"Information"} src={addImage} />
                            <h3>Tab managment</h3>
                            <p>Add and delete tabs on the fly.</p>
                        </div>
                    </div>

                    <div className={"col-4"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={serverImage} />
                            <h3>Real-time update</h3>
                            <p>Tab updates tracked using Chrome API.</p>
                        </div>
                    </div>

                    <div className={"col-4"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={inlineImage} />
                            <h3>Inline menu</h3>
                            <p>Hover on the side or use your chosen hotkeys.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent} />
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Structure your tab in a tree-like hierarchy</h2>
                                <p>Increase your productivity. Group the most important tabs together and access them quickly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Night Mode</h2>
                                <p>Themes to keep your experience refreshing,<br />whether you're working in the day or at night, we've got you covered! </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Check it out!</h2>
                    <p>We're now on the Google Chrome AppStore.</p>
                </div>

                <div className={"button"}>
                    <a href="https://chrome.google.com/webstore/detail/tree-style-tab-for-chrome/hbledhepdppepjnbnohiepcpcnphimdj" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
