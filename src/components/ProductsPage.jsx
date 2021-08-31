import React from "react";
import { useSelector } from "react-redux";

import "./css/ProductsPage.css";
import Product from "./Product";

function ProductsPage() {
	const allProducts = useSelector((state) => state.products);

	let key = Math.random() * 100;
	return (
		<>
			<h1 className="products__header">СИБИРСКИЕ КЕДРЫ</h1>
			<hr/>
			<section className="products__wrapper">
				{allProducts.map((product) => (
					<Product key={key++} product={product} />
				))}
			</section>
		</>
	);
}

export default ProductsPage;
