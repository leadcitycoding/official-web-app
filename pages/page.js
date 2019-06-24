import Layout from '../components/Layout'
import Info from '../components/Info'

import Link from 'next/link'

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
      
      <h1 style={space}>New Page</h1>

      <Link href="/">
        <span style={button}>Home Page</span>
      </Link>
    
      <Info />

    </div>

  </Layout>
)

export default Page
