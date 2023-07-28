import Navbar from "../navbar/Navbar";
import "./Header.scss" ;
import logo from "./logo.png"






const Header = () => {
  return (
    <div className="Header">
        <img  id="logo" src={logo} alt="logo" />        
        <Navbar/>
    </div>
  )
}

export default Header