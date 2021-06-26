import React from 'react';

export const LoadingSpinner = ({ ...rest }) => (
	<div {...rest} className="wait-for-loading">
		<i className="fa fa-5x fa-spin fa-spinner" />
	</div>
);
