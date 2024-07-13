import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { PageHeader } from '@/components/page-header';
import { TabLabel } from '@/components/tab-label';
import t from '@/config/text.json';
import "./Contact.css";

const Contact = () => {

	return (
		<HelmetProvider>
			<Container>
				<TabLabel label={t.contact.title} />
				<PageHeader label={t.contact.title} />
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