/* eslint-disable require-jsdoc */
import React from 'react';
import App, {AppContext} from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default class extends App {
  static async getInitialProps({Component, ctx}: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps};
  }

  render(): JSX.Element {
    const {Component, pageProps} = this.props;
    return (
      <Layout>
        <Head>
          <link rel="icon" href="/icons/panda.jpg"></link>
        </Head>
        <Link href="/">
          <a><img src="/icons/panda.jpg" width='100px' /></a>
        </Link>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
