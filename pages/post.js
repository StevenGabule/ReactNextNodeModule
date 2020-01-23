import Layout from "../components/Layout";
import React from "react";
import {withRouter} from "next/router";


const Post = ({router}) => (
     <Layout title={router.query.title}>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto ducimus, eius excepturi explicabo nesciunt nostrum quasi rerum? Dolorem fugit laborum quae quis voluptate voluptatum. Corporis earum esse perferendis perspiciatis!</p>
     </Layout>
 );

export default withRouter(Post);