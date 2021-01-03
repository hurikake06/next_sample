import React from "react"
import Head from "next/head"
import SimplePost from "../../../components/post/simple/index";
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter();
  let { pid } = router.query

  return (
    <>
      <Head><title>{`記事${pid}`}</title></Head>
      <SimplePost h1={`記事${pid}`}/>
    </>
  )
}

export default Post