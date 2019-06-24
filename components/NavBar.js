import Link from 'next/link'

const bar = {
  display: 'inline-block',
  backgroundColor : '#212121',
  width: "100%",
  fixed: 'top',
}

const leftBar = {
  display: 'flex',
  justifyContent: 'flex-start'
}

const main = {
  color: '#f0f0f0',
  backgroundColor: '#3cb271',
  padding: '1em'
}

const home = {
  color: '#f0f0f0',
  padding: '1em'
}

const links = {
  color: '#3a9fe5'
}

const NavBar = () => (
  <div style={bar}>
    <span style={leftBar}>
      <span style={main}>Starter</span>
      <span style={home}>
        <Link href="/">
          <a style={links}>Home</a>
        </Link>
      </span>
    </span>
  </div>
)

export default NavBar
