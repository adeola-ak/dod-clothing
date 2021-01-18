import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySelector } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ title, imageUrl, id, size, linkUrl }) => (
				<MenuItem
					key={id}
					title={title}
					imageUrl={imageUrl}
					size={size}
					linkUrl={linkUrl}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySelector,
});

export default connect(mapStateToProps)(Directory);
