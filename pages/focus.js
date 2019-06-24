import Layout from '../components/Layout'

import Link from 'next/link'

const seaNspace = {
  margin: '2em',
  color: '#1e93dd'
}

const space = {
  margin: '2em'
}

const button = {
  color: '#f0f0f0',
  fontSize: '1.4em',
  border: '1px solid',
  padding: '0.7em 2em',
  boxShadow: '5px 10px #5d5d5d',
  backgroundColor: '#1e93dd',
  cursor: 'pointer'
}

const Page = () => (
  <Layout>

    <div className="main-content">
      
      <h1 style={seaNspace}>Focus Tools</h1>

      <Link href="/curriculum">
        <span style={button}>Curriculum</span>
      </Link>
      
      <br />
      <br />
      <br />
      <br />

      <Link href="/">
        <span style={button}>Home Page</span>
      </Link>

    </div>

  </Layout>
)

export default Page
