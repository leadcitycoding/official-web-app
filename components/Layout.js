import IndexHead from './Head'
import NavBar from './NavBar'
import Copyr from './Copyr'

const Layout = props => (
  <div>
    <IndexHead />
    <NavBar />
    {props.children}
    <style global jsx>{`
      /* Font */
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,700i');

      /* Main Styles */
      body {
        margin: 0;
        background-color: #fff;
        font-family: 'Open Sans', sans-serif;
      }

      .main-content {
        margin: 4em 2em;
        text-align: center;
      }
    `}</style>
    <Copyr />
  </div>
)

export default Layout
