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
					.map(({ id, ...otherItemProps }) => (
						<PreviewCard key={id} {...otherItemProps} />
					))}
			</div>
		</div>
	);
};

export default Preview;
