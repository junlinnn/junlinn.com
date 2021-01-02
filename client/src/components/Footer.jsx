import { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class C extends Component {
	render() {
		return (
			<Jumbotron
				className="my-0 text-center"
				style={{ backgroundColor: "#1E293B", color: "white" }}
			>
				<Container>
					<p>Copyright &#169; 2020 Jun Lin Lim</p>
				</Container>
			</Jumbotron>
		);
	}
}
export default C;
