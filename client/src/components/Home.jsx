import { Component } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import Resume from "./Resume";
import PDFicon from "../assets/pdf.svg";

class C extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid style={{ backgroundColor: "#CBD5E1" }}>
					<Container>
						<h1>Welcome Human,</h1>
						<p>
							I am Jun Lin, a Macro Research & Strategy Intern at Dymon Asia
							Capital.
						</p>
						<p>Looking for full-time opportunities in quantatitve finance.</p>

						<Button variant="outline-secondary" className="d-flex py-2 px-">
							<img src={PDFicon} alt="pdf-icon" style={{ width: 25 }} />
							<b className="ml-2">Download CV</b>
						</Button>
					</Container>
				</Jumbotron>
				<Resume />
			</div>
		);
	}
}
export default C;
