import React from "react";
import "./CollectionsOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Preview from "../preview/Preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<Preview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
