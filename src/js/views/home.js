import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<div className="first">
			<img
				src="https://media.istockphoto.com/id/135138016/photo/curious-red-eyed-tree-frog.jpg?s=612x612&w=0&k=20&c=s0aTy7y317SEsFP-0Q9vpfnEFrx7m2rLB-FeGLHm5bw="
				className="card-img"
				alt="..."
			/>
		</div>
		<div className="card-img-overlay">
			<h5 className="card-title">LEARN ANIMALS</h5>
			<p className="intro-text">
				Take a look at some of the most awsome animals and what makes them unique at the same time that you
				learn about the many different species of animals.
			</p>
			<Link to="/Contenido">
				<button type="button" className="boton1">
					Begin Here
				</button>
			</Link>
		</div>
		<div className="segundop">
			<h1 className="segundot">Have fun while you learn!</h1>
			<p id="info">
				Learn about every animal from the sea to the land and sky, and how they make up the animal kingdom!.
			</p>
		</div>
		<div className="card-group h-100">
			<div className="card">
				<h1 className="predators">CARNIVOROUS</h1>
				<img
					src="https://api.time.com/wp-content/uploads/2018/12/lion-conservators-center.jpg"
					className="card-img-top"
					alt="lion"
				/>
				<div className="card-body">
					<p className="lion">Learn and discover every animal and what makes them unique.</p>
					<p className="card-text">
						<small className="text-muted" />
					</p>
				</div>
			</div>
			<div className="card">
				<h1 className="herbibors">HERBIVORES</h1>
				<img
					src="https://megaricos.com/wp-content/uploads/2019/02/Horison-1.jpg"
					className="card-img-top"
					alt="bufalo"
				/>
				<div className="card-body">
					<p className="bufalo">All animal species and how they survive.</p>
					<p className="card-text">
						<small className="text-muted" />
					</p>
				</div>
			</div>
			<div className="card">
				<h1 className="domestics">DOMESTIC</h1>
				<img
					src="https://www.aristokatzvet.com/wp-content/uploads/2018/12/iStock-875599324.jpg"
					className="card-img-top"
					alt="cat"
				/>
				<div className="card-body">
					<p className="cat">Domestic and wild they are all unique.</p>
					<p className="card-text">
						<small className="text-muted" />
					</p>
				</div>
			</div>
		</div>
		<div className="anchor">
			<h1 className="linelink">for mor information about animals click here</h1>
			<a className="a" href="https://en.wikipedia.org/wiki/Animal">
				Click here to learn more!!
			</a>
		</div>
	</div>
);
