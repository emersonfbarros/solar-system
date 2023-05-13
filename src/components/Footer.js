import { Component } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>2023 Ⓒ Developed by Emerson Barros.</p>
        <nav className="nav-footer">
          <a href="https://github.com/emersonfbarros" target="_blank" rel="noreferrer">
            <BsGithub className="footer-icons" />
          </a>
          <a href="https://www.linkedin.com/in/emersonfbarros/" target="_blank" rel="noreferrer">
            <BsLinkedin className="footer-icons" />
          </a>
        </nav>
      </footer>
    );
  }
}

export default Footer;
