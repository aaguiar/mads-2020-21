import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import MainPageGrid from "../components/home/MainPageGrid";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <MainPageGrid/>
        <Link to="/page-2/">Go to page 2</Link>
        {" "}
        <br />
    </Layout>
);

export default IndexPage;
