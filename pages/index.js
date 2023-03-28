import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Task Manager JWT</title>
        <meta name="description" content="Task Manager JWT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Home Page</h1>
        <p><Link href="/signup">Sign Up</Link></p>
        <p><Link href="/signin">Sign In</Link></p>
      </Layout>
    </div>
  )
}
