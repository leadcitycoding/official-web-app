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

const imgSize = {
  width: "80%",
  height: "auto",
  maxWidth: "15em",
  marginBottom: '2em'
}

const block = {
  paddingBottom: '1.4em'
}

const titleUnderline = {
  textDecoration: 'underline',
  textDecorationColor: '#1e93dd',
  marginBottom: '2em'
}

const rose = {
  color: '#cc5490'
}

const ahref ={
  color: "#1e93dd"
}

const ahref2 ={
  color: "#1e93dd",
  width: "5em"
}

const Page = () => (
  <Layout>

    <div className="main-content">
      
      <h1 style={seaNspace}>Focus Tools</h1>

      <div style={block}>
        <img style={imgSize} src="/static/advert.png" title="2019 | Summer Bootcamp" alt="logo" />

        <div style={block}>
          <h3 style={titleUnderline}>Contact the Instructor</h3>
          <p>Ninte Dangana</p>
          <p><a href="tel:+2349032551187" style={ahref}
                alt="+2349032551187">+2349032551187</a></p>
          <hr />
        </div>

        <div style={block}>
          <h3 style={rose}>React.js</h3>
          <p>React (also known as React.js or ReactJS) is a JavaScript library 
            <br /> for building user interfaces. It is maintained by Facebook 
            <br /> and a community of individual developers and companies. React 
            <br /> can be used as a base in the development of single-page or mobile applications, 
            <br /> as it's optimal only for its intended use of being the quickest 
            <br /> method to fetch rapidly changing data that needs to be recorded.</p>
        </div>

        <div style={block}>
          <h3 style={rose}>Next.js</h3>
          <p>This is the React framework for production-grade web applications. 
            <br /> It has in-built automatic code splitting, filesystem based routing, 
            <br /> hot code reloading and universal rendering. With Next.js, 
            <br /> server rendering React applications is much more efficient, 
            <br /> regardless of the sources of one’s data.</p>
        </div>

        <div style={block}>
          <h3 style={rose}>Git Version Control</h3>
          <p>Git is a distributed version-control system for tracking changes 
            <br /> in source code during software development. It is designed 
            <br /> for coordinating work among programmers, but it can be used 
            <br /> to track changes in any set of files. Its goals include speed, 
            <br /> data integrity, and support for distributed, non-linear workflows.</p>
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
      
      <br />
      <br />
      <br />
      <br />

      <a href="https://forms.gle/sKtnTR6CuofYg25f9" 
         alt="Registration Form" target="_blank"
         style={ahref2}>
            <span style={button}>Register</span>
      </a>

    </div>

  </Layout>
)

export default Page
