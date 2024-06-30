import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import t from '../../config/text.json';
import "./Home.css";

const Home = () => {
	return (
		<HelmetProvider>
			<section id="home" className="home">
				<Helmet>
					<meta charSet="utf-8" />
					<title>{t.home.title} | {t.meta.title}</title>
					<meta name="description" content={t.meta.description} />
				</Helmet>
				<div className="intro_sec d-block d-lg-flex align-items-center ">
					<div
						className="h_bg-image order-1 order-lg-2 h-100 home_img"
					></div>
					<div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
						<div className="align-self-center ">
							<div className="intro mx-auto">
								<h2 className="mb-1x">{t.home.name}</h2>
								<h1 className="fluidz-48 mb-1x">
									<Typewriter
										options={{
											strings: [
												t.home.animated.first,
												t.home.animated.second,
												t.home.animated.third,
												t.home.animated.fourth,
											],
											autoStart: true,
											loop: true,
											deleteSpeed: 10,
										}}
									/>
								</h1>
								<p className="mb-1x">{t.home.descriptionA}</p>
								<p className="mb-1x">{t.home.descriptionB}</p>
								<div className="intro_btn-action pb-5">
									<Link to="/portfolio" className="text_2">
										<div id="button_p" className="ac_btn btn ">
											My Portfolio
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
									<Link to="/about" className="text_2">
										<div id="button_h" className="ac_btn btn ">
											About Me
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
									<Link to="/contact">
										<div id="button_h" className="ac_btn btn">
											Contact Me
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</HelmetProvider>
	);
};

export default Home;