import React from "react";
import ArticleCard from "./ArticleCard";
import MainArticleCard from "./MainArticleCard";

const MainPageGrid = () => (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: "1rem",
        }}
    >
        <div
            style={{
                backgroundColor: "blue",
                gridColumnStart: "1",
            }}
        >
            <MainArticleCard/>
        </div>
        <div
            style={{
                gridColumnStart: "2",
            }}
        >
            <ArticleCard/>
        </div>
    </div>
);

export default MainPageGrid;
