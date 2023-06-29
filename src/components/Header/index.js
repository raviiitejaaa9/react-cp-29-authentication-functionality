// Write your JS code here
import {Link} from 'react-router-dom'
// import Cookies from 'js-cookie'

import './index.css'

const Header = () => (
  <ul className="header-sec ">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
