{
	/* <div className="card">
		<img
		src="https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg"
		className="card-img-top"
		alt="..."
		/>
		<h5 className="card-titles">Lion</h5>
		
		<div className="card-body"></div>
	</div> */
}
// 	import React from "react";
import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card";

export const Reptiles = () => (
	<>
		<div className="row custom-row">
			{/* <div className="card">
			<img
				src="https://static.theprint.in/wp-content/uploads/2021/04/yawning-lion.jpg"
				className="card-img-top"
				alt="..."
			/>
			<h5 className="card-titles">Lion</h5>

			<div className="card-body"></div>
		</div> */}
			<Card
				name="Frog"
				description="A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil proto-frog appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago. Frogs are widely distributed, ranging from the tropics to subarctic regions, but the greatest concentration of species diversity is in tropical rainforest. Frogs account for around 88% of extant amphibian species."
				image="https://images.hdqwalls.com/download/frog-60-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Frog"
			/>
			<Card
				name="Green iguana"
				description="The green iguana (Iguana iguana), also known as the American iguana or the common green iguana, is a large, arboreal, mostly herbivorous species of lizard of the genus Iguana. Usually, this animal is simply called the iguana. The green iguana ranges over a large geographic area; it is native from southern Brazil and Paraguay as far north as Mexico, and has been introduced from South America to Puerto Rico and is very common throughout the island, where it is colloquially known as gallina de palo (bamboo chicken or chicken of the trees) and considered an invasive species; in the United States, feral populations also exist in South Florida (including the Florida Keys), Hawaii, the U.S. Virgin Islands and the Rio Grande Valley of Texas."
				image="https://images7.alphacoders.com/425/425214.jpg"
				link="https://en.wikipedia.org/wiki/Green_iguana"
			/>

			<Card
				name="Viper snake"
				description="The Viperidae (vipers) are a family of venomous snakes found in most parts of the world, with the exception of Antarctica, Australia, Hawaii, Madagascar, as well as various other isolated islands, and north of the Arctic Circle. All have long (relative to non-vipers), hinged fangs that permit deep penetration and injection of snake venom. Four subfamilies are currently recognized.[2] They are also known as viperids. The name viper is derived from the Latin word vipera, -ae, also meaning viper, possibly from vivus (living) and parere (to beget), referring to the trait viviparity (giving live birth) common in vipers but not in snakes at large."
				image="https://images.wallpaperscraft.com/image/single/snake_bend_color_scales_72211_1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Viperidae"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Crocodile"
				description="Crocodiles (family Crocodylidae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. The term crocodile is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae), and all other living and fossil Crocodylomorpha."
				image="http://cdn.wallpaperhi.com/1600x900/20111215/Nile-Crocodile--2-.jpg"
				link="https://en.wikipedia.org/wiki/Crocodile"
			/>
			<Card
				name="Chameleon"
				description="Chameleons or chamaeleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 202 species described as of June 2015.[1] These species come in a range of colours, and many species have the ability to change colour.

				Chameleons are distinguished by their zygodactylous feet, their swaying gait,[2] and crests or horns on their brow and snout. Most species, the larger ones in particular, also have a prehensile tail. "
				image="https://www.wallpaperuse.com/wallp/10-107653_m.jpg"
				link="https://en.wikipedia.org/wiki/Chameleon"
			/>
			<Card
				name="Gecko"
				description="Geckos are small, mostly carnivorous lizards that have a wide distribution, found on every continent except Antarctica. Belonging to the infraorder Gekkota, geckos are found in warm climates throughout the world. They range from 1.6 to 60 cm (0.64 to 24 inches)."
				image="https://cdn.wallpapersafari.com/19/27/iECGdn.jpg"
				link="https://en.wikipedia.org/wiki/Gecko"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Agama (lizard)"
				description="Agama (from Sranan Tongo meaning lizard) is a genus of small-to-moderate-sized, long-tailed, insectivorous Old World lizards. The genus Agama includes at least 37 species in Africa, especially sub-Saharan Africa, where most regions are home to at least one species. Eurasian agamids are largely assigned to genus Laudakia. The various species differ in size, ranging from about 12 to 30 centimetres (5 to 12 in) in length, when fully grown."
				image="https://images6.alphacoders.com/425/thumb-1920-425190.jpg"
				link="https://en.wikipedia.org/wiki/Agama_(lizard)"
			/>

			<Card
				name="Giant tortoise"
				description="The Galápagos tortoise complex or Galápagos giant tortoise complex is a species complex of 15 (13 extant and 2 extinct) very large tortoise species in the genus Chelonoidis (which also contains three other species from mainland South America). They are the largest living species of tortoise, with some modern Galápagos tortoises weighing up to 417 kg (919 lb).[2] With lifespans in the wild of over 100 years, they are one of the longest-lived vertebrates. Captive Galapagos tortoises can live up to 177 years.[3] For example, a captive individual, Harriet, lived for at least 175 years."
				image="https://s.abcnews.com/images/International/diego-2-sh-er-200112_hpMain_16x9_1600.jpg"
				link="https://en.wikipedia.org/wiki/Gal%C3%A1pagos_tortoise"
			/>

			<Card
				name="Python"
				description="The Burmese python (Python bivittatus) is one of the largest species of snakes. It is native to a large area of Southeast Asia and is listed as Vulnerable on the IUCN Red List.[1] Until 2009, it was considered a subspecies of Python molurus, but is now recognized as belonging to a distinct species.[3] It is an invasive species in Florida as a result of the pet trade."
				image="https://uhdwallpapers.org/uploads/converted/18/03/29/green-python-1600x900_64489-mm-90.jpg"
				link="https://en.wikipedia.org/wiki/Burmese_python"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="komodo dragon"
				description="As a result of their size, Komodo dragons are apex predators, and dominate the ecosystems in which they live. Komodo dragons hunt and ambush prey including invertebrates, birds, and mammals. It has been claimed that they have a venomous bite; there are two glands in the lower jaw which secrete several toxic proteins. The biological significance of these proteins is disputed, but the glands have been shown to secrete an anticoagulant. Komodo dragons' group behavior in hunting is exceptional in the reptile world. The diet of Komodo dragons mainly consists of Javan rusa (Rusa timorensis), though they also eat considerable amounts of carrion. Komodo dragons also occasionally attack humans."
				image="https://wallpaperaccess.com/full/2270922.jpg"
				link="https://en.wikipedia.org/wiki/Komodo_dragon"
			/>

			<Card
				name="King cobra"
				description="The king cobra (Ophiophagus hannah) is a venomous snake species of elapids endemic to jungles in Southern and Southeast Asia. The sole member of the genus Ophiophagus, it is distinguishable from other cobras, most noticeably by its size and neck patterns. The king cobra is the world's longest venomous snake, with an average length of 3.18 to 4 m (10.4 to 13.1 ft),[2] reaching a maximum of 5.85 m (19.2 ft).[3] Its skin colour varies across the habitats, from black with white stripes to unbroken brownish grey. It preys chiefly on other snakes, including its own species. Unlike other snakes, it rarely hunts non-reptile vertebrates, such as rodents and lizards."
				image="http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/king-cobra-in-chips-can-ft-blog0717.jpg?itok=82OVCi7p"
				link="https://en.wikipedia.org/wiki/King_cobra"
			/>
			<Card
				name="Gila monster"
				description="The Gila monster (Heloderma suspectum, /ˈhiːlə/ HEE-lə) is a species of venomous lizard native to the Southwestern United States and the northwestern Mexican state of Sonora. A heavy, typically slow-moving lizard, up to 60 cm (2.0 ft) long, the Gila monster is the only venomous lizard native to the United States. Its venomous close relatives, the four beaded lizards (all former subspecies of Heloderma horridum) inhabit Mexico and Guatemala.[2][3] The Gila monster is sluggish in nature, so not generally dangerous and very rarely a real threat to humans. Yet, its exaggeratedly fearsome reputation has led to its sometimes being killed, in spite of being protected by state law in Arizona."
				image="https://a-static.besthdwallpaper.com/banded-gila-monster-red-dead-redemption-2-wallpaper-1600x900-6145_47.jpg"
				link="https://en.wikipedia.org/wiki/Gila_monster"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Tree monitor"
				description="Monitor lizards have long necks, powerful tails and claws, and well-developed limbs. The adult length of extant species ranges from 20 cm (7.9 in) in some species, to over 3 m (10 ft) in the case of the Komodo dragon, though the extinct varanid known as megalania (Varanus priscus) may have been capable of reaching lengths more than 7 m (23 ft). Most monitor species are terrestrial, but arboreal and semiaquatic monitors are also known. While most monitor lizards are carnivorous, eating eggs, smaller reptiles, fish, birds, insects, and small mammals, some also eat fruit and vegetation, depending on where they live."
				image="https://cdn.theatlantic.com/thumbor/tKiOwqRL1Frsw83nKJ8u1VTtDU8=/0x0:3171x1784/1600x900/media/img/mt/2021/06/173039267a_huge/original.jpg"
				link="https://en.wikipedia.org/wiki/Monitor_lizard"
			/>
			<Card
				name="Anaconda"
				description="The green anaconda (Eunectes murinus), also known as giant anaconda, common anaconda, common water boa or sucuri, is a boa species found in South America. It is the heaviest and one of the longest known extant snake species. Like all boas, it is a non-venomous constrictor. The term anaconda often refers to this species, though the term could also apply to other members of the genus Eunectes. Fossils of the snake date back to the Late Pleistocene in the Gruta do Urso locality."
				image="https://vistapointe.net/images/anaconda-1.jpg"
				link="https://en.wikipedia.org/wiki/Green_anaconda"
			/>
			<Card
				name="Basilisk lizard"
				description="Basiliscus is a genus of large corytophanid lizards, commonly known as basilisks, which are endemic to southern Mexico, Central America, and northern South America. The genus contains four species, which are commonly known as the Jesus Christ lizard, or simply the Jesus lizard, due to their ability to run across water for significant distances before sinking due to the large surface area of their feet."
				image="http://images6.fanpop.com/image/photos/38600000/Plumed-Basilisk-lizards-38676923-1600-900.jpg"
				link="https://en.wikipedia.org/wiki/Basiliscus_(lizard)"
			/>
		</div>
	</>
);
