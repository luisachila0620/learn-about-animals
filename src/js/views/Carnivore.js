import React from "react";
import "../../styles/home.scss";

export const Carnivore = () => (
	<div className="card-group">
		{/* <div className="card">
			<img
				src="https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg"
				className="card-img-top"
				alt="..."
			/>
			<h5 className="card-titles">Lion</h5>

			<div className="card-body"></div>
		</div> */}
		<div className="card">
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img
							src="https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg"
							alt="Avatar"
							className="card-img-top"
						/>
						<h5 className="card-titles">Lion</h5>
					</div>
					<div className="flip-card-back">
						<h1>Lion</h1>
						<p>
							The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It
							has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the
							end of its tail. It is sexually dimorphic; adult male lions are larger than females and have
							a prominent mane. It is a social species, forming groups called prides. A lions pride
							consists of a few adult males, related females, and cubs. Groups of female lions usually
							hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator
							although some lions scavenge when opportunities occur and have been known to hunt humans,
							the species typically does not.
						</p>
						<a href="https://en.wikipedia.org/wiki/Lion">Visit W3Schools.com!</a>
					</div>
				</div>
			</div>
		</div>

		<div className="card">
			<img
				src="https://media.khou.com/assets/CCT/images/dc946f14-9bbd-4a44-8e72-643069adaab4/dc946f14-9bbd-4a44-8e72-643069adaab4_1140x641.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-titles">Tiger</h5>
			</div>
		</div>
		<div className="card">
			<img
				src="https://www.nps.gov/articles/images/Image-w-cred-cap_-1200w-_-Brown-Bear-page_-brown-bear-in-fog_2_1.jpg?maxwidth=1200maxheight=1200autorotate=false"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-titles">Bear</h5>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://cdn.vox-cdn.com/thumbor/6UYSIGEYXWuU3vtgwsCbmT2Nztc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22019271/1184377894.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Wolf</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Jarguar</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/1/16/Fox_-_British_Wildlife_Centre_%2817429406401%29.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Fox</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://www.biologicaldiversity.org/assets/img/species/mammals/Wolverine_Wikimedia_WilliamFWood.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Wolverine</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/04/25/5fa90461657ef.jpeg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Linx</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://c.files.bbci.co.uk/67EE/production/_105260662_gettyimages-578257624.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Dingo</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://live.staticflickr.com/41/95150186_4eb9945f33_c.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Comodo dragon</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://www.insidescience.org/sites/default/files/2021-08/Hyena-with-elephant-leg-bone_edit.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Hyena</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sarcophilus_harrisii_taranna.jpg/1200px-Sarcophilus_harrisii_taranna.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Tasmania demon</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://www.nps.gov/deva/learn/nature/images/Coyote-by-Neal_BIR3705-Print.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Coyote</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://www.avma.org/sites/default/files/inline-images/2020-07-15-story-11a.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Mink</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://cdn.britannica.com/20/93520-050-3E663489/Puma.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Puma</h5>
				</div>
			</div>
		</div>
	</div>
);
