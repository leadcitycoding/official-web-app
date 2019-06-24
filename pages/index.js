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
  backgroundColor: '#cc5490',
  cursor: 'pointer'
}

const logoSize = {
  width: "25%",
  height: "auto"
}

const info = {
  padding: "2em"
}

const Index = () => (
  <Layout>
    
    <div className="main-content">

      <h1 style={space}>Lead City Coding Academy</h1>

      <div>
        <img style={logoSize} src="/static/logo.png" alt="logo" />
        <p>Software Development, is the future of the African workplace, and economy.</p>
        <p style={info}>Software training and outsourcing companies like Andela and Lambda School
          <br /> also allow local developers access global opportunities through training and outsourcing. 
          <br /> Beyond seeking higher-paying opportunities elsewhere, local developers
          <br /> who look to move abroad also cite the possibility of skill advancement and professional growth.</p>
      </div>
    
      <Link href="/page">
        <span style={button}>Next Page</span>
      </Link>
    
      <Info />

    </div>
    
  </Layout>
)

export default Index
