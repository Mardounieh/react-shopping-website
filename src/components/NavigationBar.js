import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const NavigationBar = () => {
  return(
    <header className="w-100 navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a href="#" className="navbar-brand">Shop Kadeh</a>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Shop</Link></li>
          <li className="nav-item"><Link to="/cart" className="nav-link"><FontAwesomeIcon icon={faShoppingCart}/></Link></li>
        </ul>
      </div>
    </header>
  )
}

export default NavigationBar