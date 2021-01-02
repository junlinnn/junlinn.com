import React, { Component } from "react";
import { Container, Tab, Tabs, Card, Row } from "react-bootstrap";
import { Suspense, lazy } from "react";

// import PostPreview from './PostPreview'
const PostPreview = lazy(() => import("./PostPreview"));
const renderLoader = () => (
	<Container
		className="bg-secondary text-light my-2 post-preview"
		style={{ minHeight: "200px" }}
	/>
);
export default class Research extends Component {
	render() {
		return (
			<Container
				className="bg-dark text-light mt-sm-5 p-3"
				style={{ minHeight: "calc(94vh - 3rem)", opacity: "0.95" }}
			>
				<h1 className="display-4">Research</h1>
				<Tabs defaultActiveKey="general" style={{ borderColor: "#6c757d" }}>
					<Tab eventKey="general" title="General" tabClassName="color-white">
						<hr></hr>
						<Card className="mb-2" bg="secondary" text="light">
							<Card.Header as="h5">Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
							</Card.Body>
						</Card>
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
							<Row>
								<Suspense fallback={renderLoader()}>
									<PostPreview id={4} />
								</Suspense>
							</Row>
							<Row>
								<Suspense fallback={renderLoader()}>
									<PostPreview id={5} />
								</Suspense>
							</Row>
							{/* <Row><PostPreview id={1} /></Row>
                            <Row><PostPreview id={2} /></Row>
                            <Row><PostPreview id={3} /></Row>
                            <Row><PostPreview id={4} /></Row>
                            <Row><PostPreview id={5} /></Row> */}
						</Container>
					</Tab>
					<Tab
						eventKey="portfolio"
						title="Portfolio"
						tabClassName="color-white"
					></Tab>
					<Tab
						eventKey="strategy"
						title="Strategy"
						disabled
						tabClassName="color-white"
					></Tab>
					<Tab
						eventKey="technology"
						title="Technology"
						disabled
						tabClassName="color-white"
					></Tab>
				</Tabs>
			</Container>
		);
	}
}
