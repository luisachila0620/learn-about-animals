import React from "react";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

export const Contenido = () => (
	<div className="card bg-dark text-white">
		<img
			src="https://ichef.bbci.co.uk/news/976/cpsprodpb/4E55/production/_107135002_eagle.jpg"
			className="card-img"
			alt="eagle"
		/>
		<div className="card-img-overlay">
			<div className="hello">
				<p className="card-text">Click on any of the animal class you would like to learn.</p>
			</div>
			{/* <p className="card-text">Last updated 3 mins ago</p> */}
		</div>

		<div className="card-img-overlay">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card h-100">
						<Link to="/Carnivore">
							<img
								src="https://m.economictimes.com/thumb/msid-70585794,width-1200,height-900,resizemode-4,imgsize-1098713/tiger-istock-871661426.jpg"
								className="card-img-top"
								alt="tiger"
							/>
						</Link>

						<div className="card-body">
							<h5 className="card-title">Carnivours</h5>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<Link to="/Herbivores">
							<img
								src="https://bloximages.newyork1.vip.townnews.com/outtherecolorado.com/content/tncms/assets/v3/editorial/b/dc/bdc2a498-7123-545f-b8cb-3a2d4e5b8962/5eecdc4dd0261.image.jpg?crop=1115%2C836%2C69%2C0&resize=1200%2C900&order=crop%2Cresize"
								className="card-img-top"
								alt="ekl"
							/>
						</Link>
						<div className="card-body">
							<h5 className="card-title">Herbivore</h5>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100">
						<Link to="/Birds">
							<img
								src="https://i.guim.co.uk/img/media/50e3c003bba1ffb20919962de7b54db12823fdd0/0_410_6144_3686/master/6144.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=79e24df74eec3c3643e3617c28958072"
								className="card-img-top"
								alt="owl"
							/>
						</Link>
						<div className="card-body">
							<h5 className="card-title">Birds</h5>
						</div>
					</div>
				</div>
				<div className="col-whale">
					<div className="card h-100">
						<Link to="/Aquatic">
							<img
								src="https://i.guim.co.uk/img/media/4d7da2fd2eba5b69750e2c1fd5a485e9098ec187/0_174_3864_2318/master/3864.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=53cce41c79b14babaf71ce166533451f"
								className="card-img-top"
								alt="whale"
							/>
						</Link>
						<div className="card-body">
							<h5 className="card-title">Aquatic</h5>
						</div>
					</div>
				</div>
				<div className="col-croc">
					<div className="card w-100">
						<Link to="/Reptiles">
							<img
								src="https://bloximages.newyork1.vip.townnews.com/fox10tv.com/content/tncms/assets/v3/editorial/e/a2/ea2cae14-96e9-11ea-be0d-b39c4d6023a5/5ebefa4babe14.image.jpg?crop=944%2C708%2C8%2C0&resize=1200%2C900&order=crop%2Cresize"
								className="card-img-top w-100"
								alt="crocodile"
							/>
						</Link>

						<div className="card-body">
							<h5 className="card-title">Reptiles</h5>
						</div>
					</div>
				</div>
				<div className="col-dog">
					<div className="card h-100">
						<Link to="/Domestic">
							<img
								src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f598594a7559c44214065b57f2cb8583"
								className="card-img-top"
								alt="dog"
							/>
						</Link>
						<div className="card-body">
							<h5 className="card-title">Domestic</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
