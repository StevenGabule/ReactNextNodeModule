import Document, {Head, Main, NextScript} from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang={"en"}>
            <Head crossOrigin={"anonymous"} nonce={"EDNnf03nceIOfn39fn3e9h3sdfa"}>
                <meta name={"description"} content={"A site for my programming portfolio"}/>
                <meta charSet={"utf-8"}/>
                <meta name={"viewport"} content={"noindex, nofollow"}/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                      integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <body>
            <Main/>
            <NextScript />
            </body>
            <style global jsx>{`
                body {
                    font-family: 'Roboto', sans-serif;
                }
            `}
            </style>
            </html>
        )
    }
}