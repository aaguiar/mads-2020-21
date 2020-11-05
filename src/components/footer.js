import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Colors from "./palette";

const Footer = () => (
    <>
        <footer
            style={{
                marginTop: "2rem",
                backgroundColor: Colors.background,
            }}
        >
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: "80%",
                    padding: "2.45rem 1.0875rem",
                    textAlign: "center",
                }}
            >
                <h6 style={{ margin: 0 }}>
                    {`© ${new Date().getFullYear()}, Built with `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </h6>
            </div>
        </footer>

    </>
);


export default Footer;
