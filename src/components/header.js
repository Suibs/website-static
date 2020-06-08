import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.svg"
import { OutboundLink } from 'gatsby-plugin-gtag';


const Header = ({ siteTitle }) => (
    <div></div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
