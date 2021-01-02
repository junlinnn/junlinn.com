import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ideas from "./components/Ideas";
import Projects from "./components/Projects";
import Placeholder from "./components/Placeholder";
import Footer from "./components/Footer";
// import Research from "./components/Research";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div style={{ backgroundColor: "#334155" }}>
			<Router>
				<Navbar />

				<Switch>
					<Route path="/ideas">
						{/* <Research /> */}
						<Ideas />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/what">
						<Placeholder />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
