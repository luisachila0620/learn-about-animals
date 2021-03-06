import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Domestic } from "./views/Domestic";
import { Reptiles } from "./views/Reptiles";
import { Aquatic } from "./views/Aquatic";
import { Birds } from "./views/Birds";
import { Herbivores } from "./views/Herbivores";
import { Carnivore } from "./views/Carnivore";
import { Contenido } from "./views/Contenido";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/Contenido">
							<Contenido />
						</Route>
						<Route exact path="/Carnivore">
							<Carnivore />
						</Route>
						<Route exact path="/Herbivores">
							<Herbivores />
						</Route>
						<Route exact path="/Birds">
							<Birds />
						</Route>
						<Route exact path="/Aquatic">
							<Aquatic />
						</Route>
						<Route exact path="/Reptiles">
							<Reptiles />
						</Route>
						<Route exact path="/Domestic">
							<Domestic />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
