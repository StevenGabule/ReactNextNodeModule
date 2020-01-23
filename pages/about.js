import Layout from "../components/Layout";
import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Error from "./_error";

export default class About extends Component {
    state = {
        user: null
    };

    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/stevengabule");
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
        return {user: data, statusCode}
    }

    render() {
        const {user, statusCode} = this.props;

        if (statusCode) {
            return
        }

        return (
            <Layout title={"About"}>
                <h2>{user.name}</h2>
                <p>A JavaScript Developer</p>
                <img src={user.avatar_url}
                     alt="Reed" height="200"/>
            </Layout>
        )
    }
}