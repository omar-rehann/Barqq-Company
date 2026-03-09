import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from "../../../src/img/logo.webp"
import "./header.css"
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
function Header() {
  const hometop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }


  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home" className='img'>
            <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className='nav-link' onClick={hometop}>
  Home
</Link>
<HashLink smooth to="/home#about" className="nav-link">
  About Us
</HashLink>        <Link to="/service" className='nav-link' onClick={hometop}>
  Services
</Link>  
<HashLink smooth to="/home#branches" className="nav-link">
  Our Branches
</HashLink>  
<HashLink smooth to="/home#features" className="nav-link">
  Features
</HashLink>           <Link to="/article" className='nav-link' onClick={hometop}>
Articles</Link>
<Link to="/request" onClick={hometop}>
<Button variant="success">Request Service</Button>
</Link>
        

</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;