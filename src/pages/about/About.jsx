import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Table } from "react-bootstrap";
import t from '../../config/text.json';
import "./About.css";

const About = () => {
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title>{t.about.title} | {t.meta.title}</title>
					<meta name="description" content={t.meta.description} />
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">{t.about.title}</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<h3 className="color_sec py-4">{t.about.personal_summary.title}</h3>
					</Col>
					<Col lg="7" className="d-flex align-items-center">
						<div>
							<p>{t.about.personal_summary.description}</p>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<h3 className="color_sec py-4">{t.about.education.title}</h3>
					</Col>
					<Col lg="7" className="d-flex align-items-center">
						<div>
							<h3 className="skills">{t.about.education.university}</h3>
							<h3 className="skills">{t.about.education.degree}</h3>
							<h3 className="skills">{t.about.education.graduation_year}</h3>
						</div>
					</Col>
				</Row>
				<Row className=" sec_sp">
					<Col lg="5">
						<h3 className="color_sec py-4">{t.about.professional_experience.title}</h3>
					</Col>
					<Col lg="7">
						<table className="table caption-top">
							<tbody>
								{t.about.professional_experience.history.map((data, i) => {
									return (
										<tr key={i}>
											<th scope="row">{data.position}</th>
											<td>{data.company}</td>
											<td>{data.date}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<h3 className="color_sec py-4">{t.about.technical_skills.title}</h3>
					</Col>
					<Col lg="7">
						<h3 className="color_sec py-4">{t.about.technical_skills.programming_languages.title}</h3>
						<Table hover>
							<thead>
								<tr>
									<th>Programming Language</th>
									<th>Link</th>
								</tr>
							</thead>
							<tbody>
								{t.about.technical_skills.programming_languages.list.map((data, i) => (
									<tr key={i}>
										<td>{data.name}</td>
										<td>
											<a className="skills link framework" href={data.link} target="_blank" rel="noopener noreferrer">
												{t.about.technical_skills.example_link} - {data.name}
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<h3 className="color_sec py-4">{t.about.technical_skills.frameworks.title}</h3>
						<Table hover>
							<thead>
								<tr>
									<th>Framework</th>
									<th>Link</th>
								</tr>
							</thead>
							<tbody>
								{t.about.technical_skills.frameworks.list.map((data, i) => (
									<tr key={i}>
										<td>{data.name}</td>
										<td>
											<a className="skills link framework" href={data.link} target="_blank" rel="noopener noreferrer">
												{data.name === "React" ? t.about.technical_skills.react_link : `${t.about.technical_skills.example_link} - ${data.name}`}
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						<h3 className="color_sec py-4">{t.about.technical_skills.other_technologies.title}</h3>
						<Table hover>
							<tbody>
								{t.about.technical_skills.other_technologies.list.map((data, i) => (
									<tr key={i}>
										<td>{data}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lang="5">
						<h3 className="color_sec py-4">{t.about.my_services.title}</h3>
					</Col>
					<Col lg="7">
						{t.about.my_services.list.map((data, i) => {
							return (
								<div className="service_ py-4" key={i}>
									<h5 className="service__title">{data.title}</h5>
									<p className="service_desc">{data.description}</p>
								</div>
							);
						})}
					</Col>
				</Row>
			</Container>
		</HelmetProvider>
	);
};

export default About;