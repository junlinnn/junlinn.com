import { Component } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

class C extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid>
					<Container>
						<h1>Placeholder</h1>
						<p>???</p>
					</Container>
				</Jumbotron>
				{/* <Container className="text-white" style={{ minHeight: "10vh" }}>
					<Row>
						<Col>
							<h1>Listening</h1>
							<h3>可在我心底的名字 - 盧廣仲</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<h1>Reading</h1>
							<h3>Dark Pools - Scott Patterson</h3>
						</Col>
					</Row>
				</Container> */}
			</div>
		);
	}
}
export default C;
