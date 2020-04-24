import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.gif";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import addImage from "../../static/images/add.svg";
import eventImage from "../../static/images/Event-managment.svg";
import serverImage from "../../static/images/server.svg";
import inlineImage from "../../static/images/inline.svg";


const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy" />

        <div className={"page-header home"}>
            <div className={"container"}>
                <div className="row">
                    <div className="col-4">
                        <h1>Manage & Organise Your Tab</h1>
                        <p>The wait is finally over. TST is now on Chrome! </p>

                    </div>
                    <div className="col-8">
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
                            <h3>Realtime update</h3>
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
                                <h2>Create and Join Events</h2>
                                <p>Save your time and energy by letting HiStaff to manage your events (handle the colleague’s birthday, gathering, etc.)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Public Board</h2>
                                <p>Let the staff write down on the board freely,<br />Joking with each other and writing cool content can make the workplace more diverse and attractive for employees. </p>
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
                    <h2>Sign up for free</h2>
                    <p>Sign up and start increasing the productivity of your business with HiStaff.</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
