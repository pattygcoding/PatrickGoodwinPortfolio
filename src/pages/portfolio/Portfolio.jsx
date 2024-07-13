import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { PageHeader } from '@/components/page-header';
import { TabLabel } from '@/components/tab-label';
import t from '@/config/text.json';
import "./Portfolio.css";

const Portfolio = () => {
	return (
		<HelmetProvider>
			<Container className="About-header">
				<TabLabel label={t.portfolio.title} />
				<PageHeader label={t.portfolio.title} />
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
