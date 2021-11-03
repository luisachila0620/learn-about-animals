import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card";

export const Herbivores = () => (
	<div className="row">
		<Card
			name="Zebra"
			description="Zebras (UK: /ˈzɛbrəz/, US: /ˈziːbrəz/) (subgenus Hippotigris) are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy's zebra (Equus grevyi), plains zebra (E. quagga), and the mountain zebra (E. zebra). Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae. Zebra stripes come in different patterns, unique to each individual. Several theories have been proposed for the function of these stripes, with most evidence supporting them as a deterrent for biting flies."
			image="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK-1200-80.jpg"
			link="https://en.wikipedia.org/wiki/Zebra"
		/>
		<Card
			name="Deere"
			description="Deer or true deer are hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk (wapiti), the red deer, and the fallow deer; and the Capreolinae, including the reindeer (caribou), white-tailed deer, the roe deer, and the moose. Male deer of all species (except the Chinese water deer) as well as female reindeer, grow and shed new antlers each year. In this they differ from permanently horned antelope, which are part of a different family (Bovidae) within the same order of even-toed ungulates (Artiodactyla)."
			image="https://cdn.wallpapersafari.com/68/12/gTDxqZ.jpg"
			link="https://en.wikipedia.org/wiki/Deer"
		/>
		<div className="card">
			<img
				src="https://www.redduckpost.com/wp-content/uploads/2016/12/Elephants-2-1000x667-72.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-titles">Elephant</h5>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://norwegianscitechnews.com/wp-content/uploads/2017/10/boffel-7407-1000x667-1000x667.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Bufalo</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://frankfmradio.com/wp-content/uploads/sites/41/2019/05/mammal-386740_1920-1000x667.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Moose</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://vistapointe.net/images/orangutan-wallpaper-13.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Orangutan</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img src="http://lcamtuf.coredump.cx/squirrel/" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-titles">Chipmunk</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://www.photopathway.com/wp-content/uploads/2020/01/MG_7414-1000x667.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">koala</h5>
				</div>
			</div>
			<div className="card">
				<img src="https://whc.unesco.org/document/147973" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-titles">Kangooru</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://www.wendyperrin.com/wp-content/uploads/2018/02/Charlie-Zambia-Safari-Giraffe-1000x667.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Giraffe</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="http://d279m997dpfwgl.cloudfront.net/wp/2016/10/bunny-1000x667.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Rabbit</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="http://www.robertharding.com/watermark.php?type=preview&im=RF/RH_RF/HORIZONTAL/741-5731"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Capibara</h5>
				</div>
			</div>
		</div>
		<div className="card-group">
			<div className="card">
				<img
					src="https://www.nanpa.org/wp-content/uploads/2020/04/Bison-in-Soda-Butte-Creek-1000x667.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Bison</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://i0.wp.com/trentsizemore.com/learn/wp-content/uploads/2020/05/20200517_untitled_6231-Edit-1000x667.jpg?resize=1000%2C667&ssl=1"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Beaver</h5>
				</div>
			</div>
			<div className="card">
				<img
					src="https://www.edgeofexistence.org/wp-content/uploads/2017/06/Tapirus-indicus_shutterstock_411690637-1000x667.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-titles">Tapir</h5>
				</div>
			</div>
		</div>
	</div>
);
