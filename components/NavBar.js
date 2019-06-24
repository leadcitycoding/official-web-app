import Link from 'next/link'

const bar = {
  display: 'inline-block',
  backgroundColor : '#cc5490',
  width: "100%",
  fixed: 'top',
}

const leftBar = {
  display: 'flex',
  justifyContent: 'flex-start'
}

const main = {
  color: '#f0f0f0',
  backgroundColor: '#e0117c',
  padding: '1em'
}

const home = {
  color: '#f0f0f0',
  padding: '1em'
}

const links = {
  color: '#f0f0f0'
}

const NavBar = () => (
  <div style={bar}>
    <span style={leftBar}>
      <span style={main}>
        <Link href="/">
          <a style={links}>Lead City Coding Academy</a>
        </Link>
      </span>
      {/* <span style={home}>
        <Link href="/">
          <a style={links}>Home</a>
        </Link>
      </span> */}
    </span>
  </div>
)

export default NavBar
