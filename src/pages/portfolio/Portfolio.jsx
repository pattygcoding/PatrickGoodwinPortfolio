import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import t from '../../config/text.json';
import "./Portfolio.css";

const Portfolio = () => {
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title>{t.portfolio.title} | {t.meta.title}</title>
					<meta name="description" content={t.meta.description} />
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">{t.portfolio.title}</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<div className="mb-5 po_items_ho">
					{t.portfolio.list.map((data, i) => {
						return (
							<div key={i} className="po_item">
								<img src={data.img} alt="" />
								<div className="content">
									<p>{data.description}</p>
									{data.suprememc_website && <a href={data.suprememc_website}>SupremeMC Website</a>}
									{data.suprememc_linkedin && <a href={data.suprememc_linkedin}>SupremeMC LinkedIn</a>}
									{data.suprememc_github && <a href={data.suprememc_github}>GitHub Repository</a>}
									{data.suprememc_github_legacy && <a href={data.suprememc_github_legacy}>GitHub Repository</a>}
									{data.website_github && <a href={data.website_github}>GitHub Repository</a>}
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</HelmetProvider>
	);
};

export default Portfolio;
