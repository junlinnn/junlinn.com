import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// const src = 'https://www.abeautifulsite.net/uploads/2014/08/placekitten-example.jpg'
const src = "https://via.placeholder.com/300x200";
// const src =
// "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NVqgz4ZEA99r4mpbE97b7jY_sNeOZjsEz3PMHz4IVul3hQuv";

export default class PostPreview extends Component {
	render() {
		return (
			<Link
				to={"/research/" + this.props.id}
				style={{ textDecoration: "none" }}
			>
				<Container
					className="bg-secondary text-light my-2 post-preview"
					style={{ minHeight: "200px", transition: "all .5s" }}
				>
					<Row>
						<Col className="p-3" xl="auto">
							<img
								// style={{ height: '100%', width: '100%', opacity: '1', maxHeight: '100%', maxWidth: '100%' }}
								style={{ objectFit: "cover", height: "100%", width: "100%" }}
								src={src}
								alt="Generic placeholder"
							/>
						</Col>
						<Col>
							{/* <Link to="/research/1" style={{ textDecoration: 'none' }}> */}
							<h2
								className="text-light mt-3 color-white"
								style={{ textDecoration: "none" }}
							>
								Lorem ipsum
							</h2>
							{/* </Link> */}
							<hr />
							<p>
								"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt."
							</p>
						</Col>
					</Row>
				</Container>
			</Link>
		);
	}
}
