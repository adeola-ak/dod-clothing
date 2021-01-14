import React from "react";
import PreviewCard from "../preview-card/PreviewCard";
import "./Preview.scss";

const Preview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<PreviewCard key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default Preview;
