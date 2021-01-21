import React, { useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
		});
	}

	render() {
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverview}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={Collection}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
