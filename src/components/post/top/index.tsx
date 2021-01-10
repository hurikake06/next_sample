import React from 'react';
import {NextComponentType, NextPageContext} from 'next';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  className?: string
}

const Component : NextComponentType<NextPageContext, {}, Props> =
  (props: Props) => (
    <>
      <h1>Learn</h1>
      <div className={props.className}>Welcome to next.js!</div>
      <div>
        <ul>
          <li><Link href="/posts/1"><a>記事01</a></Link></li>
          <li><Link href="/api/hello"><a>hello API</a></Link></li>
        </ul>
      </div>
    </>
  );

const StyledComponent = styled(Component)`
color: #f00;
`;

export default StyledComponent;
