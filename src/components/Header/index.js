// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="row-apart">
    <div className="row-nor">
      <img
        className="main-logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p>Wave</p>
    </div>
    <div className="row-nor">
      <div>
        <Link className="nav-link" to="/">
          <p>Home</p>
        </Link>
      </div>
      <div>
        <Link className="nav-link" to="/about">
          <p>About</p>
        </Link>
      </div>
      <div>
        <Link className="nav-link" to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
