import React from "react";
import Colors from "../palette";

const ArticleCard = () => (
    <div
        style={{
            height: "7rem",
            borderLeft: `3px solid ${Colors.purple}`,
            borderRadius: "5px",
            padding: "0.2rem 1rem",
            boxShadow: "0px 0px 6px 0px #ccc",
        }}
    >
        <p
            style={{
                color: Colors.purple,
                fontSize: "0.7rem",
                margin: 0,
            }}
        >
            Future
        </p>
        <h3
            style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: Colors.text,
                marginBottom: "0.7rem",
            }}
        >
            The new thing is coming, this is really the future
        </h3>
        <div
            style={{
                color: Colors.text,
                fontSize: "0.7rem",
                margin: 0,
                fontStyle: "italic",
                fontWeight: "lighter",
                fontFamily: "Open Sans",
                lineHeight: "0.7rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
                maxWidth: "250px",

            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper orci congue venenatis consectetur. Sed imperdiet vehicula libero in lacinia
        </div>
    </div>
);

export default ArticleCard;
