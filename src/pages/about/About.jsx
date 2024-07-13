import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import { Container, Col, Table } from "react-bootstrap";
import { PageHeader } from '@/components/page-header';
import { TabLabel } from '@/components/tab-label';
import t from '@/config/text.json';
import "./About.css";

const About = () => {
	return (
		<HelmetProvider>
			<Container>
				<TabLabel label={t.about.title} />
				<PageHeader label={t.about.title} />
				<Col className="sec_sp">
					<h3 className="color_sec py-4">{t.about.personal_summary.title}</h3>
					<p className="word_preserve">{t.about.personal_summary.description}</p>
				</Col>
				<Col className="sec_sp">
					<h3 className="color_sec py-4">{t.about.education.title}</h3>
					<Col className="d-flex align-items-center">
						<div>
							<h3 className="skills">{t.about.education.university}</h3>
							<h3 className="skills">{t.about.education.degree}</h3>
							<h3 className="skills">{t.about.education.graduation_year}</h3>
						</div>
					</Col>
				</Col>
				<Col className=" sec_sp">
					<Col>
						<h3 className="color_sec py-4">{t.about.professional_experience.title}</h3>
					</Col>
					<Col>
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
				</Col>
				<Col className="sec_sp">
					<Col>
						<h3 className="color_sec py-4">{t.about.technical_skills.title}</h3>
					</Col>
					<Col>
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
				</Col>
				<Col className="sec_sp">
					<Col lang="5">
						<h3 className="color_sec py-4">{t.about.my_services.title}</h3>
					</Col>
					<Col>
						{t.about.my_services.list.map((data, i) => {
							return (
								<div className="service_ py-4" key={i}>
									<h5 className="service__title">{data.title}</h5>
									<p className="service_desc">{data.description}</p>
								</div>
							);
						})}
					</Col>
				</Col>
			</Container>
		</HelmetProvider>
	);
};

export default About;