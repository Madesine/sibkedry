import React from "react";
import { Link } from "react-router-dom";

import "./css/Footer.css";

function Footer() {
	return (
		<>
			<div className="footer__wrapper">
				<section className="footer__contacts">
					<h3>Обратная связь</h3>
					<ul>
						<li>+375295480202</li>
						<li>alex-bitner@yandex.ru</li>
					
					</ul>
				</section>
				<section>
					<h3>Информация</h3>
					<ul>
						<li>
							<Link to="/products" className="footer__navigation">Каталог продуктов</Link>
						</li>
						<li>
							<Link to="/about" className="footer__navigation">О компании</Link>
						</li>
						<li>
							<Link to="/contacts" className="footer__navigation">Контактная информация</Link>
						</li>
					</ul>
				</section>
			</div>
			<section className="footer__socials--wrapper">
				<h3 className="visually-hidden">Ссылки на нас</h3>
			</section>
		</>
	);
}

export default Footer;
