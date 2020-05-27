import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMousePointer, faCompressAlt, faCaretSquareDown, faArrowsAltH,  faCaretSquareUp, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
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
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/openMenu.mp4"} poster={"https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif?vid=1"} className={""} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dragDrop.mp4"} poster={"https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif?vid=1"} className={""} />

                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2 style={{ textAlign: "end" }}>
                                    Drag & Drop (Normal Tab)
                                    <FontAwesomeIcon
                                        className={"fontIconRight"}
                                        icon={faMousePointer}
                                    />
                                </h2>
                                <p style={{ textAlign: "right" }}>Manipulate your tab in a tree-like hierarchy. Group the most important tabs together and have access to them quickly.</p>
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
                                    Drag & Drop (Pinned Tab)
                                </h2>
                                <p>Tabs with children tabs attached can be collapsed or expanded.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/dragPinned.mp4"} poster={"https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif?vid=1"} className={""} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/resizeMenu.mp4"}  poster={"https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif?vid=1"} className={""} />

                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2 style={{ textAlign: "end" }}>
                                    Resize menu
                                    <FontAwesomeIcon
                                        className={"fontIconRight"}
                                        icon={faArrowsAltH}
                                    />
                                </h2>
                                <p style={{ textAlign: "right" }}>Hover on the edge of the menu until the resize cursor shows, and then drag left or right until the desired size is reached.</p>
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
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/collapse.mp4"}  poster={"https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif?vid=1"} className={""} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/contextMenuNormal.mp4"} poster={"https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif?vid=1"}  className={""} />

                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2 style={{ textAlign: "end" }}>
                                    Context Menu (Normal Tab)
                                    <FontAwesomeIcon
                                        className={"fontIconRight"}
                                        icon={faCaretSquareDown}
                                    />
                                </h2>
                                <p style={{ textAlign: "right" }}>Right click on any tab to add, duplicate, mute/unmute or pin a tab.</p>
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
                                    Context Menu (Pinned tab)
                                </h2>
                                <p>Right click on any pinned tab to add, mute/unmute, or unpin a pinned tab.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <video preload='auto' autoPlay muted loop src={"https://treestyletab.s3.eu-west-3.amazonaws.com/contextMenuPin.mp4"} poster={"https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif?vid=1"}  className={""} />
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
