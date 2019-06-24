import IndexHead from './Head'
import NavBar from './NavBar'

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
        background-color: #f7f7f7;
        font-family: 'Open Sans', sans-serif;
      }

      .main-content {
        margin-top: 4em;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Layout
