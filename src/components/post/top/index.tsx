import React from "react"
import { NextComponentType, NextPageContext } from "next"
import Link from 'next/link'
import styled from "styled-components"

type Props = {
  className?: string
}

const Component : NextComponentType<NextPageContext, {}, Props> = props => (
  <>
    <h1>Learn</h1>
    <Link href="/posts/1"><a>post 01</a></Link>
    <div className={props.className}>Welcome to next.js!</div>
  </>
)

const StyledComponent = styled(Component)`
color: #f00;
`

export default StyledComponent