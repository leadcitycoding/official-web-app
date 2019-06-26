import Layout from '../components/Layout'

import Link from 'next/link'

const seaNspace = {
  margin: '2em',
  color: '#1e93dd'
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

const rose = {
  color: '#cc5490'
}

const modules = {
  display: 'inline-block'
}

const Page = () => (
  <Layout>

    <div className="main-content">
      
      <h1 style={seaNspace}>Curriculum</h1>

      <h5>Classes will be held from Monday to Thursday
        <br /> for 2 hours and handle one module at a time,
        <br /> as a topic of practise during the set time
        <br /> each day - being 10AM to 12PM.</h5>

      <h3 style={titleUnderline}>2019 Summer Bootcamp</h3>
      
      <hr />
      
      <div style={modules}>
        <h4 style={rose}>Week One</h4>
        <p>Introduction to HTML & CSS</p>
        <p>Introduction to Git Version Control</p>
        <p>Deploying websites with Cloud Hosting</p>
        <p>Introduction to React.js Web Application Development</p>
        <p><em><b>Assignment: Build a Website about yourself.</b></em></p>
      </div>

      <hr />
      
      <div style={modules}>
        <h4 style={rose}>Week Two</h4>
        <p>Styling React.js components with CSS-in-JS</p>
        <p>Deploying React.js Web Applications</p>
        <p>Build production-grade React web applications with Next.js</p>
        <p>Round-Up & Student feedback</p>
        <p><em><b>Assignment: Built a React.js Web Application about 
          <br /> something you are passionate about.</b></em></p>
      </div>

      <hr />
      <br />
      <br />

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
