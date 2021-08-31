import React from "react";
import { Link } from "react-router-dom";

import "./css/Product.css";

function Product({ product }) {
	const { id, displayName, img } = product;

	return (
		<article className="product">
			<Link to={`/products/${id}`}>
				<img
					src={`/assets/images/${img}`}
					alt={displayName}
					width="200"
					height="200"
				/>
				<h3>{displayName}</h3>
			</Link>
		</article>
	);
}

export default Product;
