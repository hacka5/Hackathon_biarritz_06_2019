import React from 'react';
import { Navbar, Nav, NavLink } from 'reactstrap';

import styles from './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div style={{ bottom: 0, position: 'fixed', width: '100%' }}>
        <Navbar className="footerNavbar" lg-auto mx-auto sm-auto>
          <NavLink href="https://github.com/hacka5/Hackathon_biarritz_06_2019">
            <img
              src="https://www.yupiik.com/wp-content/uploads/2019/05/GitHub-Mark-250x250.png"
              width="30px"
              height="30px"
            />
          </NavLink>
          <Nav>
            <p className={`${styles.p} d-inline my-auto text-white`}>
              Hyver Baptiste | Salvador Ibanez Vanessa | Boléa Laura | Slama
              Nizar | Gagnant Nicolas
            </p>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
