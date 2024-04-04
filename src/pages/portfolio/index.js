import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  {i === 0 ?
                    (
                      <>
                        <a href={data.suprememc_website}>SupremeMC Website</a>
                        <a href={data.suprememc_linkedin}>SupremeMC LinkedIn</a>
                        <a href={data.suprememc_github}>GitHub Repository</a>
                      </>
                    ) :
                    (i === 1 ?
                      (
                        <>
                          <a href={data.suprememc_website}>SupremeMC Website</a>
                          <a href={data.suprememc_github_legacy}>GitHub Repository</a>
                        </>
                      ) :
                      (
                        <>
                          <a href={data.website_github}>GitHub Repository</a>
                        </>
                      )
                    )
                  }
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
