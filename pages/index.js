import Layout from '../components/Layout'

import Link from 'next/link'

const titleUnderline = {
  textDecoration: 'underline',
  textDecorationColor: '#1e93dd',
  marginBottom: '2em'
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

const logoSize = {
  width: "80%",
  height: "auto",
  maxWidth: "15em"
}

const picSize = {
  width: "60%"
}

const info = {
  padding: "2em"
}

const ahref ={
  color: "#1e93dd"
}

const cost = {
  display: 'block',
  marginBottom: '2em'
}

const rose = {
  color: '#cc5490'
}

const ahref2 ={
  color: "#1e93dd"
}

const Index = () => (
  <Layout>
    
    <div className="main-content">
      <img style={logoSize} src="/static/logo.png" title="Lead City Coding Academy" alt="logo" />

      <h1 style={titleUnderline}>Lead City Coding Academy</h1>

      <div>
        <p>Software Development, is the future of the African workplace, and economy.
          <br /> For this reason, Lead City Coding Academy will be offering a two week, intensive Software Engineering Bootcamp, at Lead City University - Ibadan. This innovative learning programme, will start in the second week of July, and application is open to all students and the general population.</p>
        <img style={picSize} src="https://images.unsplash.com/photo-1527600478564-488952effedb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <p style={info}>Software training and outsourcing companies like Andela and Lambda School
          <br /> also allow local developers access global opportunities through training and outsourcing. 
          <br /> Beyond seeking higher-paying opportunities elsewhere, local developers
          <br /> who look to move abroad also cite the possibility of skill advancement and professional growth.
          <span style={info}><em>Source: 
          (<a href="https://qz.com/africa/1618874/microsoft-opens-africa-development-centre-in-kenya-and-nigeria/" 
              alt="(Quartz Africa)" style={ahref} target="_blank">Quartz Africa</a>)</em></span></p>
      </div>

      <hr />

      <div style={cost}>
        <h5 style={rose}>Cost of Tuition</h5>
        <h4>N25,000</h4>
      </div>
    
      <Link href="/curriculum">
        <span style={button}>Curriculum</span>
      </Link>
      
      <br />
      <br />
      <br />
      <br />
      
      <Link href="/focus">
        <span style={button}>Focus Tools</span>
      </Link>
      
      <br />
      <br />
      <br />
      <br />

      <a href="https://forms.gle/sKtnTR6CuofYg25f9" 
         alt="Registration Form" target="_blank"
         style={ahref2}>
            <span style={button}>Registration Form</span>
      </a>

    </div>
    
  </Layout>
)

export default Index
