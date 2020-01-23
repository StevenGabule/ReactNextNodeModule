import Layout from "../components/Layout";
import React from "react";

export default ({statusCode}) => (
    <Layout title={"Error!!!"}>
        {statusCode ? `Could not load user data: Status Code ${statusCode}` : `Couldn't not take that page, sorry`}
        <p>Couldn't get the page, sorry</p>
    </Layout>
)