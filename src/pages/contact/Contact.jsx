import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import t from '../../config/text.json';
import "./Contact.css";

const Contact = () => {



	return (
		<HelmetProvider>
			<Container>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{t.contact.title} | {t.meta.title}</title>
					<meta name="description" content={t.meta.description} />
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">{t.contact.title}</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5" className="mb-5">
						<h3 className="color_sec py-4">{t.contact.subtitle}n</h3>
						<address>
							<strong>Email:</strong>{" "}
							<a href={`mailto:${t.contact.email}`}>
								{t.contact.email}
							</a>
							<br />
							<br />
						</address>
						<p>{t.contact.description}</p>
					</Col>
				</Row>
			</Container>
		</HelmetProvider>
	);
};

export default Contact;