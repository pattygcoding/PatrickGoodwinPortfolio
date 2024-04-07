import React, { useState, useEffect } from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  languages,
  frameworks,
  other_skills,
  services,
} from "../../content_option";




export const About = () => {
  // State to track which row's description is expanded
  const [expandedRow, setExpandedRow] = useState(null);

  // Function to toggle description visibility for a specific row
  const toggleDescription = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // Effect to handle dropdown behavior
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Close description if clicked outside the table
      if (!event.target.closest('.description-row')) {
        setExpandedRow(null);
      }
    };

    // Attach event listener for document click
    document.addEventListener('click', handleDocumentClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); // Run effect only once on component mount

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Professional Experience</h3>
          </Col>
          <Col lg="7">
             <table className="table caption-top">
                                      <tbody>
                                        {worktimeline.map((data, i) => {
                                          return (
                                            <tr key={i}>
                                              <th scope="row">{data.jobtitle}</th>
                                              <td>{data.where}</td>
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
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7">
            <h3 className="color_sec py-4">Coding Languages</h3>
            <div className="skill-col">
              <div className="skills-container">
                {languages.map((data, i) => (
                  <div key={i} className="skill-item">
                    <h3 className="skills">{data.name}</h3>
                  </div>
                ))}
              </div>
              <div className="skills-container">
                {languages.map((data, i) => (
                  <div key={i} className="skill-item">
                    <a className="skills link" href={data.link} target="_blank" rel="noopener noreferrer">
                      Connect Four Example ({data.name})
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="color_sec py-4">Frameworks & Formats</h3>
            <div className="skill-col">
              <div className="skills-container">
                {frameworks.map((data, i) => (
                  <div key={i} className="skill-item">
                    <h3 className="skills">{data.name}</h3>
                  </div>
                ))}
              </div>
              <div className="skills-container">
                {frameworks.map((data, i) => (
                  <div key={i} className="skill-item">
                    <a className="skills link framework" href={data.link} target="_blank" rel="noopener noreferrer">
                      {data.name === "React" ? "React Portfolio Website" : `Connect Four Example (${data.name})`}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="color_sec py-4">Other Technologies</h3>
            <div className="skill-col">
              <div className="skills-container">
                {other_skills.map((data, i) => (
                  <div key={i} className="skill-item">
                    <h3 className="skills">{data.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">My Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
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