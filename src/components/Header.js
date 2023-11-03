import * as React from 'react';

const Header = () => {
    return (
        <nav className="navbar is-dark-transparency">
            {/* <div className="navbar-brand">
        <a className="navbar-item" href="/">
          My Portfolio
        </a>
        <div className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item has-text-white" href="#about">
                        About
                    </a>
                    <a className="navbar-item has-text-white" href="#projects">
                        Projects
                    </a>
                    <a className="navbar-item has-text-white" href="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
