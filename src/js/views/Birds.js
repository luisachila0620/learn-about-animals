import React from "react";
import "../../styles/home.scss";

export const Birds = () => (
	<div className="card-group">
		<div className="card">
			<img
				src="https://www.nps.gov/common/uploads/cropped_image/primary/7357F452-9461-A974-DF84E7F4C6A616BC.jpg?width=1600&quality=90&mode=crop"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Eeagle</h5>
			</div>
		</div>
		<div className="card">
			<img
				src="https://img.wallpapersafari.com/desktop/1600/900/40/40/twxlO0.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">P hawk</h5>
			</div>
		</div>
		<div className="card">
			<img
				src="https://mocah.org/uploads/posts/1186014-birds-animals-nature-wildlife-pigeons-beak-bird-fauna-perching-bird-vertebrate-stock-dove-pigeons-and-doves.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Dove</h5>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://a-static.besthdwallpaper.com/eurasian-eagle-owl-wallpaper-1600x900-35245_47.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">owl</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://images.hdqwalls.com/download/blue-jay-bird-4k-em-1600x900.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">blue jay</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="data:image/jpeg;base64,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"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">canarie</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://images.hdqwalls.com/download/scarlet-macaw-bird-1600x900.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Parrot</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://lh3.googleusercontent.com/proxy/L089UqvR3XWehmgbwNoWcIymuBrM9U7JQbzZzhk7yGSnRJo5KbTqeALtBQRdeK_GjZqcZT6ytEJlwHbRxP6CMmt-gq6Y_dpGrDYn9vhWfBs_PZHRrS1uxOIntn8tGwEdtigkbSVBdlaSTTuio97iPruvqiVjDQFAN1eBYbwHddE2"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Cardinal</h5>
				</div>
			</div>
			<div className="card">
				<img src="https://eskipaper.com/images/bird-pelican-1.jpg" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Pelican</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://wallpaperfx.com/view_image/mandarin-duck-1600x900-wallpaper-13411.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Mandarin Duck</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://assets.farmsanctuary.org/content/uploads/2020/07/28145700/2020_07-16_FSNY_Harry_rooster_DSC_9973_CREDIT_Farm_Sanctuary-1600x900.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Rooster</h5>
				</div>
			</div>
			<div className="card">
				<img src="https://img.wallpapersafari.com/desktop/1600/900/15/81/RS8DOm.jpg" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Gold phiasant</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img src="https://vistapointe.net/images/ostrich-1.jpg" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Ostrich</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="data:image/jpeg;base64,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"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Seagull</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://img.wallpapersafari.com/desktop/1600/900/1/50/I06mdc.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Crow</h5>
				</div>
			</div>
		</div>
	</div>
);
