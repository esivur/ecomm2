import {Link} from 'react-router-dom';
import logo from '../Images/newlogo.png'

const NavBar = () => {
return(
  
    <navbar class="navbar_main">
      <figure>
        <img class="navbar_visual navbar_items" src={logo} alt="Logo" /> 
      </figure>
      <Link class="navbar_options navbar_items" to="/"> Home </Link>
      <Link class="navbar_options navbar_items" to="/ProductsPage"> Products </Link>
      <Link class="navbar_options navbar_items" to="/ContactPage"> Contact  </Link>
</navbar>
);
}

export default NavBar;