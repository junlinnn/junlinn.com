import { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";

import { Link } from "react-router-dom";

class C extends Component {
	render() {
		return (
			<Navbar
				collapseOnSelect
				expand="lg"
				// bg="dark"
				variant="dark"
				sticky="top"
				style={{ backgroundColor: "#0F172A" }}
			>
				<Container>
					<Navbar.Brand as={Link} to="/">
						Jun Lin
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link as={Link} to="/ideas">
								Ideas
							</Nav.Link>
							<Nav.Link as={Link} to="/projects">
								Projects
							</Nav.Link>
							<Nav.Link as={Link} to="/what">
								PlaceH
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="mailto: junlinn.lim@gmail.com?subject=Hello%20Junlin!">
								<Envelope />
							</Nav.Link>

							<Nav.Link href="https://github.com/junlinnn">
								<Github />
							</Nav.Link>
							<Nav.Link href="https://www.linkedin.com/in/junlin-lim/">
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
