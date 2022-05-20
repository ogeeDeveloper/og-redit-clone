import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>OG-Redit-Clone</title>
      </Head>
      {/* PostBox Component */}
      <PostBox />
    </div>
  )
}

export default Home
