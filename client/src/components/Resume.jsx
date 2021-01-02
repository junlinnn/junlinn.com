import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class C extends Component {
	render() {
		const code = {
			fontFamily:
				"source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace",
		};

		return (
			<Container className="text-white">
				<Container>
					<h2 style={code}>01 EXPERIENCE</h2>
					<hr className="my-4" style={{ borderColor: "white" }}></hr>
					{/* WorldQuant */}
					<Container className="resume-experience">
						<Row>
							<Col md={6} lg={8}>
								<h4 className="">Quantitative Research Intern</h4>
								<h5 className=" font-weight-light ">May 2010 - Aug 2019</h5>
							</Col>
							<Col md={6} lg={4}>
								<a
									className="text-right"
									target="_blank"
									rel="noreferrer"
									href="https://www.worldquant.com/what-we-do/"
									style={{ color: "#93C5FD" }}
								>
									<h4>WorldQuant</h4>
								</a>
								<h5 className=" font-weight-light text-right">
									Quantitative Hedge Fund
								</h5>
							</Col>
						</Row>
						<Row>
							<Col>
								<p className=" text-justify">
									I developed statistical arbitrage strategies in global
									equities.
								</p>

								<ul className="" style={{ listStyleType: "square" }}>
									<li>
										Developed systematic trading strategies for equities in
										global markets, using C++ and Python
									</li>
									<li>
										Refined ideas from academic literature into profitable
										strategies under the firm’s mandate
									</li>
									<li>
										Worked with a variety of datasets including options chain,
										financial statements, and analysts’ estimates
									</li>
									<li>
										Strategies were implemented into the production environment
										for capital allocation by portfolio managers{" "}
									</li>
									<li>
										Developed tests to analyze the performance and robustness of
										trading strategies
									</li>
								</ul>
								<p className=" text-justify">
									Tags: Quantitative Trading | Equities | Alternative Data |
									Python | C++ | Bash | Linux
								</p>
								{/* <hr className="mb-4" style={{ borderColor: "gray" }}></hr> */}
							</Col>
						</Row>
					</Container>
					{/* Hydra X */}
					<Container className="resume-experience">
						<Row>
							<Col md={6} lg={8}>
								<h4 className="">Product Strategy Intern</h4>
								<h5 className=" font-weight-light ">Jun 2018 - Jan 2019</h5>
							</Col>
							<Col md={6} lg={4}>
								<a
									className="text-right"
									target="_blank"
									rel="noreferrer"
									href="https://www.hydrax.io/about/"
									style={{ color: "#93C5FD" }}
								>
									<h4>Hydra X</h4>
								</a>
								<h5 className=" font-weight-light text-right">
									Fintech Start-Up
								</h5>
							</Col>
						</Row>
						<Row>
							<Col>
								<p className=" text-justify">
									I researched and acted on product improvement ideas.
								</p>

								<ul className="" style={{ listStyleType: "square" }}>
									<li>
										Conducted research in various ICOs, and clearing &
										settlement solutions
									</li>
									<li>
										Developed multiple modules for the Hydra X retail trading
										platform
									</li>
									<li>
										Collaborated with the CTO in developing the back-testing
										infrastructure
									</li>
									<li>
										Developed statistical arbitrage strategies in
										cryptocurrencies
									</li>
								</ul>
								<p className=" text-justify">
									Tags: Electronic Trading | Crypto-assets | React | JavaScript
								</p>
							</Col>
						</Row>
					</Container>
				</Container>
				<Container>
					<h2 className=" text-right" style={code}>
						02 EDUCATION
					</h2>
					<hr className="my-4" style={{ borderColor: "white" }}></hr>
					{/* NUS */}
					<Container>
						<Row>
							<Col md={7}>
								<h4 className="">
									Bachelors - Economics and Chemical Engineering
								</h4>
								<h5 className=" font-weight-light ">Aug 2016 - Jun 2020</h5>
							</Col>
							<Col md={5}>
								<a
									className="text-right"
									target="_blank"
									rel="noreferrer"
									href="https://www.hydrax.io/about/"
									style={{ color: "#93C5FD" }}
								>
									<h4>National University of Singapore</h4>
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<p className=" text-justify">
									Specialised in Quantitative Economics and Financial & Monetary
									Economics
								</p>
							</Col>
						</Row>
					</Container>
					{/* UCSB */}
					<Container>
						<Row>
							<Col md={7}>
								<h4 className="">Student Exchange Programme</h4>
								<h5 className=" font-weight-light ">Sep 2018 - Dec 2018</h5>
							</Col>
							<Col md={5}>
								<a
									className="text-right"
									target="_blank"
									rel="noreferrer"
									href="https://www.hydrax.io/about/"
									style={{ color: "#93C5FD" }}
								>
									<h4>University of California, Santa Barbara</h4>
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<p className=" text-justify">
									College of Engineering Dean's Honors List
								</p>
							</Col>
						</Row>
					</Container>
					{/* CFA */}
					<Container>
						<Row>
							<Col md={7}>
								<h4 className="">
									Chartered Financial Analyst (CFA) Programme
								</h4>
							</Col>
							<Col md={5}>
								<a
									className="text-right"
									target="_blank"
									rel="noreferrer"
									href="https://www.hydrax.io/about/"
									style={{ color: "#93C5FD" }}
								>
									<h4>CFA Institute</h4>
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<ul className="" style={{ listStyleType: "square" }}>
									<li>Passed Level 1 exam in Dec 2018</li>
									<li>Passed Level 2 exam in Jun 2019</li>
									<li>Sitting for Level 3 exam in Jun 2021</li>
								</ul>
							</Col>
						</Row>
					</Container>
					{/* FRM */}
					<Container>
						<Row>
							<Col md={7}>
								<h4 className="">Financial Risk Management (FRM) Programme</h4>
							</Col>
							<Col md={5}>
								<a
									className="text-right"
									target="_blank"
									rel="noreferrer"
									href="https://www.hydrax.io/about/"
									style={{ color: "#93C5FD" }}
								>
									<h4>GARP</h4>
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<ul className="" style={{ listStyleType: "square" }}>
									<li>Passed Level 1 exam in Nov 2019</li>
									<li>Passed Level 2 exam in Oct 2020</li>
									<li>Accruing work experience to receive FRM designation.</li>
								</ul>
							</Col>
						</Row>
					</Container>
					{/* CAIA */}
					<Container>
						<Row>
							<Col md={8}>
								<h4 className="">
									Chartered Alternative Investments Analyst (CAIA) Programme
								</h4>
							</Col>
							<Col md={4}>
								<a
									className="text-right"
									target="_blank"
									rel="noreferrer"
									href="https://www.hydrax.io/about/"
									style={{ color: "#93C5FD" }}
								>
									<h4>CAIA Institute</h4>
								</a>
							</Col>
						</Row>
						<Row>
							<Col>
								<ul className="" style={{ listStyleType: "square" }}>
									<li>Passed Level 1 exam in Mar 2020</li>
									<li>Passed Level 2 exam in Oct 2020</li>
									<li>Accruing work experience to receive CAIA designation.</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</Container>
				<Container>
					<h2 className="" style={code}>
						03 PROJECTS
					</h2>
					<hr className="my-4" style={{ borderColor: "white" }}></hr>
					<h4 className="">???</h4>
					<p className=" text-justify mb-0 pb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						imperdiet leo ac tortor sagittis pulvinar ut nec ante. Integer
						molestie facilisis lacus nec finibus. Curabitur non odio eu leo
						posuere aliquet. In leo nisi, egestas ac dui eget, sagittis aliquam
						libero. Morbi semper euismod convallis. Integer rhoncus ipsum sed
						tellus gravida, hendrerit vulputate sapien accumsan. Pellentesque
						consequat aliquet ultrices. Aenean faucibus lacinia sapien, et
						tristique arcu condimentum a. Duis orci dui, mattis in eleifend
						quis, vestibulum et velit. Integer tortor odio, pulvinar non
						tincidunt et, lacinia ac mauris. Pellentesque vel sodales est, quis
						volutpat orci. Pellentesque tristique est eget urna porta, id
						condimentum ipsum feugiat. Morbi pharetra eros urna, in euismod
						turpis viverra vitae. Vivamus rutrum tellus dui, non consequat diam
						efficitur at. Curabitur a molestie velit. Mauris id ante porta,
						pellentesque nibh id, accumsan nisi.
					</p>
				</Container>
				<Container>
					<h2 className=" text-right" style={code}>
						04 SKILLS
					</h2>
					<hr className="my-4" style={{ borderColor: "white" }}></hr>
					<h4 className="">???</h4>
					<p className=" text-justify mb-0 pb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						imperdiet leo ac tortor sagittis pulvinar ut nec ante. Integer
						molestie facilisis lacus nec finibus. Curabitur non odio eu leo
						posuere aliquet. In leo nisi, egestas ac dui eget, sagittis aliquam
						libero. Morbi semper euismod convallis. Integer rhoncus ipsum sed
						tellus gravida, hendrerit vulputate sapien accumsan. Pellentesque
						consequat aliquet ultrices. Aenean faucibus lacinia sapien, et
						tristique arcu condimentum a. Duis orci dui, mattis in eleifend
						quis, vestibulum et velit. Integer tortor odio, pulvinar non
						tincidunt et, lacinia ac mauris. Pellentesque vel sodales est, quis
						volutpat orci. Pellentesque tristique est eget urna porta, id
						condimentum ipsum feugiat. Morbi pharetra eros urna, in euismod
						turpis viverra vitae. Vivamus rutrum tellus dui, non consequat diam
						efficitur at. Curabitur a molestie velit. Mauris id ante porta,
						pellentesque nibh id, accumsan nisi.
					</p>
				</Container>
			</Container>
		);
	}
}
export default C;
