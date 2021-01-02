import { Component } from "react";
import { Row, Jumbotron, Container, Pagination } from "react-bootstrap";
import { Suspense, lazy } from "react";

const PostPreview = lazy(() => import("./PostPreview"));
const renderLoader = () => (
	<Container
		className="bg-secondary text-light my-2 post-preview"
		style={{ minHeight: "200px" }}
	/>
);
class C extends Component {
	render() {
		return (
			<div>
				<Jumbotron fluid>
					<Container>
						<h1>Big Ideas</h1>
						<p>Not here.</p>
					</Container>
				</Jumbotron>
				<Container>
					<Row>
						<Suspense fallback={renderLoader()}>
							<PostPreview id={1} />
						</Suspense>
					</Row>
					<Row>
						<Suspense fallback={renderLoader()}>
							<PostPreview id={2} />
						</Suspense>
					</Row>
					<Row>
						<Suspense fallback={renderLoader()}>
							<PostPreview id={3} />
						</Suspense>
					</Row>
				</Container>
				<Container>
					<Pagination className="justify-content-center">
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Ellipsis />

						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Item>{11}</Pagination.Item>
						<Pagination.Item active>{12}</Pagination.Item>
						<Pagination.Item>{13}</Pagination.Item>
						<Pagination.Item disabled>{14}</Pagination.Item>

						<Pagination.Ellipsis />
						<Pagination.Item>{20}</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</Container>
			</div>
		);
	}
}
export default C;
