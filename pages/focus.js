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

const imgSize = {
  width: '25%',
  height: 'auto',
  marginBottom: '2em'
}

const block = {
  padding: '1.4em'
}

const Page = () => (
  <Layout>

    <div className="main-content">
      
      <h1 style={seaNspace}>Focus Tools</h1>

      <div style={block}>
        <img style={imgSize} src="/static/advert.png" title="2019 | Summer Bootcamp" alt="logo" />

        <div style={block}>
          <h3>React.js</h3>
          <p>React (also known as React.js or ReactJS) is a JavaScript library 
            <br /> for building user interfaces. It is maintained by Facebook 
            <br /> and a community of individual developers and companies. React 
            <br /> can be used as a base in the development of single-page or mobile applications, 
            <br /> as it's optimal only for its intended use of being the quickest 
            <br /> method to fetch rapidly changing data that needs to be recorded.</p>
        </div>

        <div style={block}>
          <h3></h3>
          <p></p>
        </div>

        <div style={block}>
          <h3></h3>
          <p></p>
        </div>
      </div>

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
