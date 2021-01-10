/* eslint-disable require-jsdoc */
import React from 'react';
import Head from 'next/head';
import TopPost from '../components/post/top/index';

type Props = {
  title: string
}

class App extends React.Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return {title: 'Next.js Sample'};
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <TopPost/>
      </>
    );
  }
}

export default App;
