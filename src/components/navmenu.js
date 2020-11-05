import { Link } from "gatsby";
import React from "react";
import Colors from "./palette";

const NavMenu = () => (
    <nav
        style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.45rem",
        }}
    >
        <ul
            style={{
                color: Colors.text,
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                columnGap: "1rem",
                fontFamily: "Signika",
                maxWidth: "80%",
                flexWrap: "wrap",
                margin: 0,
                justifyContent: "center",
            }}
        >
            <li
                style={{
                    width: "10rem",
                    textAlign: "center",
                    padding: "0.2rem 0",
                    borderBottom: `3px solid ${Colors.red}`,
                }}
            >
                <Link
                    to="/history"
                    style={{
                        display: "block",
                        fontFamily: "inherit",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    History
                </Link>

            </li>
            <li
                style={{
                    width: "10rem",
                    textAlign: "center",
                    padding: "0.2rem 0",
                    borderBottom: `3px solid ${Colors.blue}`,
                }}
            >
                <Link
                    to="/practices"
                    style={{
                        display: "block",
                        fontFamily: "inherit",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Practices
                </Link>

            </li>
            <li
                style={{
                    width: "10rem",
                    textAlign: "center",
                    padding: "0.2rem 0",
                    borderBottom: `3px solid ${Colors.orange}`,
                }}
            >
                <Link
                    to="/popular"
                    style={{
                        display: "block",
                        fontFamily: "inherit",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Popular Methods
                </Link>

            </li>
            <li
                style={{
                    width: "10rem",
                    textAlign: "center",
                    padding: "0.2rem 0",
                    borderBottom: `3px solid ${Colors.yellow}`,
                }}
            >
                <Link
                    to="/scaling"
                    style={{
                        display: "block",
                        fontFamily: "inherit",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Scaling
                </Link>

            </li>
            <li
                style={{
                    width: "10rem",
                    textAlign: "center",
                    padding: "0.2rem 0",
                    borderBottom: `3px solid ${Colors.purple}`,
                }}
            >
                <Link
                    to="/future"
                    style={{
                        display: "block",
                        fontFamily: "inherit",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Future
                </Link>

            </li>
            <li
                style={{
                    width: "10rem",
                    textAlign: "center",
                    padding: "0.2rem 0",
                    borderBottom: `3px solid ${Colors.pink}`,
                }}
            >
                <Link
                    to="/other"
                    style={{
                        display: "block",
                        fontFamily: "inherit",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Other Methods
                </Link>

            </li>
        </ul>
    </nav>
);


export default NavMenu;
