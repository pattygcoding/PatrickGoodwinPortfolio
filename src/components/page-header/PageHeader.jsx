import React from "react";
import { Row, Col } from "react-bootstrap";

const PageHeader = ({ label }) => {
	return (
		<Row className="mb-5 mt-3 pt-md-3">
			<Col>
				<h1 className="display-4 mb-4">{label}</h1>
				<hr className="t_border my-4 ml-0 text-left" />
			</Col>
		</Row>

	);
};

export default PageHeader;
