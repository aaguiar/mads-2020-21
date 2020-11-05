import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Colors from "./palette";
import NavMenu from "./navmenu";

const Header = ({ siteTitle }) => (
    <>
        <header
            style={{
                background: Colors.background,
                marginBottom: "1.45rem",
            }}
        >
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "2.45rem 1.0875rem",
                    textAlign: "center",
                }}
            >
                <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
            </div>
        </header>
        <NavMenu />
    </>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "",
};

export default Header;