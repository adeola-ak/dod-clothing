import React from "react";
import SHOP_DATA from "./SHOP_DATA.js";
import Preview from "../../components/preview/Preview";

const ShopPage = () => {
	const collections = SHOP_DATA;
	console.log(collections);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<Preview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;
