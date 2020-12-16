import React from 'react';
import M from 'materialize-css'
import './NavBar.css';
import { Link, NavLink, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }

  render() {
    return (
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a href="#" className="brand-logo">Poke'Times</a>
          <a href="#" class="sidenav-trigger" data-target="mobile-menu">
             <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="sidenav-close"><Link to="/">Home</Link></li>
            <li className="sidenav-close"><Link to="/about">About</Link></li>
            <li className="sidenav-close"><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="left sidenav grey lighten-2"
            ref={(sidenav) => { this.sidenav = sidenav }}
            id="mobile-menu">
            <li className="sidenav-close"><Link to="/">Home</Link></li>
            <li className="sidenav-close"><Link to="/about">About</Link></li>
            <li className="sidenav-close"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar);
