import React from "react";
import { Link } from "react-router-dom";

import "./css/Navbar.css";

function Navbar() {
	return (
		<nav className="header__navigation">
			<ul>
				<li>
					<Link to="/products" className="header__link">Продукты</Link>
				</li>
				<li>
					<Link to="/about" className="header__link">О нас</Link>
				</li>
				<li>
					<Link to="/contacts" className="header__link">Контакты</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
