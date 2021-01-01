import { Component } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

class C extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Jun Lin</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#features">Home</Nav.Link>
							<Nav.Link href="#pricing">Resume</Nav.Link>
							<Nav.Link href="#pricing">Ideas</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="github.com">
								<Github />
							</Nav.Link>
							<Nav.Link href="linkedin.com">
								<Linkedin />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
export default C;
