import React from 'react';
import {Link} from 'react-router';
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  render() {
    return (
    <div>
      <nav className="navbar navbar-default" id="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/home/">StarVestments</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/support/">Support</Link></li>
            </ul>
            <div id='searchbar' className="col-sm-3">
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Theo Proulx <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/myprofile/">Profile</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}
