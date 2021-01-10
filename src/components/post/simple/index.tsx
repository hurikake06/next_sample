import React from 'react';
import {NextComponentType, NextPageContext} from 'next';
import styled from 'styled-components';

type Props = {
  className?: string,
  h1: string
}

const Component : NextComponentType<NextPageContext, {}, Props> =
  (props: Props) => (
    <>
      <h1>{props.h1}</h1>
      <div>
        aaaaaaaaaaaaaaaaaaaaaaaaa
        bbbbbbbbbbb
        cccccccccccccccccc
      </div>
    </>
  );

const StyledComponent = styled(Component)`
color: blue;
`;

export default StyledComponent;
