import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import "./css/ProductDetailPage.css";

function Product() {
	const { id } = useParams();
	const { displayName, img, description, composition, usage } = useSelector(
		(state) => state.products.find((pr) => pr.id === id)
	);

	const [currentDetail, setCurrentDetail] = useState(description);
	const [detail, setDetail] = useState("description");
	const onDetailClick = useCallback(
		(e) => {
			switch (e.target.value) {
				case "composition":
					setCurrentDetail(composition);
					setDetail("composition");
					break;
				case "usage":
					setCurrentDetail(usage);
					setDetail("usage");
					break;
				default:
					setCurrentDetail(description);
					setDetail("description");
					break;
			}
		},
		[description, usage, composition]
	);

	return (
		<>
			<Link to="/products" className="pdp__back">
				Назад
			</Link>
			<div className="pdp__wrapper">
				<section className="pdp__product pdp__wrapper__item">
					<h3>{displayName}</h3>
					<img
						src={`/assets/images/${img}`}
						alt={displayName}
						width="250"
						height="250"
					/>
				</section>
				<section className="pdp__details pdp__wrapper__item">
					<nav className="pdp__navigation">
						<button
							onClick={onDetailClick}
							value="description"
							className={detail === "description" ? "active" : "disable"}
						>
							Описание
						</button>
						<button
							onClick={onDetailClick}
							value="composition"
							className={detail === "composition" ? "active" : "disable"}
						>
							Состав
						</button>
						<button
							onClick={onDetailClick}
							value="usage"
							className={detail === "usage" ? "active" : "disable"}
						>
							Применение
						</button>
					</nav>
					<p>{currentDetail}</p>
				</section>
			</div>
		</>
	);
}

export default Product;
