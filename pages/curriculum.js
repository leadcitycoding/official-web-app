import Layout from '../components/Layout'

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

const titleUnderline = {
  textDecoration: 'underline',
  textDecorationColor: '#1e93dd',
  marginBottom: '2em'
}

const Page = () => (
  <Layout>

    <div className="main-content">
      
      <h1 style={space}>Curriculum</h1>

      <h3 style={titleUnderline}>2019 Summer Bootcamp</h3>

      <div>
        <h4>Week One</h4>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <blockquote></blockquote>
      </div>

      <div>
        <h4>Week Two</h4>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <blockquote></blockquote>
      </div>

      <Link href="/focus">
        <span style={button}>Focus Tools</span>
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
