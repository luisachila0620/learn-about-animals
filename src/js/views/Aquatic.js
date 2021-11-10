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

export const Aquatic = () => (
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
				name="Great white shark"
				description="The great white shark (Carcharodon carcharias), also known as the white shark, white pointer, or simply great white, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. It is notable for its size, with larger female individuals growing to 6.1 m (20 ft) in length and 1,905–2,268 kg (4,200–5,000 lb) in weight at maturity.[2][3][4] However, most are smaller; males measure 3.4 to 4.0 m (11 to 13 ft), and females measure 4.6 to 4.9 m (15 to 16 ft) on average.[3][5] According to a 2014 study, the lifespan of great white sharks is estimated to be as long as 70 years or more, well above previous estimates,[6] making it one of the longest lived cartilaginous fishes currently known."
				image="https://cdn.theatlantic.com/thumbor/2ZLu91qIpPiwnxz0I_H9LeJWJzk=/1x520:6177x3994/1600x900/media/img/mt/2019/04/GettyImages_611541996/original.jpg"
				link="https://en.wikipedia.org/wiki/Great_white_shark"
			/>
			<Card
				name="Blue whale"
				description="The blue whale (Balaenoptera musculus) is a marine mammal belonging to the baleen whale parvorder Mysticeti. Reaching a maximum confirmed length of 29.9 metres (98 ft) and weighing up to 199 tonnes (196 long tons; 219 short tons), it is the largest animal known to have ever existed. The blue whale's long and slender body can be various shades of greyish-blue dorsally and somewhat lighter underneath."
				image="https://www.bhmpics.com/download/underwater_largest_whale-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Blue_whale"
			/>

			<Card
				name="Orca"
				description="The killer whale or orca (Orcinus orca) is a toothed whale belonging to the oceanic dolphin family, of which it is the largest member. It is recognizable by its black-and-white patterned body. A cosmopolitan species, killer whales can be found in all of the world's oceans in a variety of marine environments, from Arctic and Antarctic regions to tropical seas; they are absent only from the Baltic and Black seas, and some areas of the Arctic Ocean."
				image="https://www.bhmpics.com/download/orca_whale_love-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Killer_whale"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Barracuda"
				description="A barracuda, or cuda for short, is a large, predatory, ray-finned fish known for its fearsome appearance and ferocious behaviour. The barracuda is a saltwater fish of the genus Sphyraena, the only genus in the family Sphyraenidae which was named by Constantine Samuel Rafinesque in 1815.[2] It is found in tropical and subtropical oceans worldwide ranging from the eastern border of the Atlantic Ocean to the Red Sea, on its western border the Caribbean Sea, and in tropical areas of the Pacific Ocean. Barracudas reside near the top of the water and near coral reefs and sea grasses.[3] Barracudas are targeted by sport-fishing enthusiasts."
				image="https://img.wallpapersafari.com/desktop/1600/900/83/69/ckMzdG.jpg"
				link="https://en.wikipedia.org/wiki/Barracuda"
			/>
			<Card
				name="Betta fish"
				description="Bettas are anabantoids, which means they can breathe atmospheric air using a unique organ called the labyrinth. This accounts for their ability to thrive in low-oxygen water conditions that would kill most other fish, such as rice paddies, slow-moving streams, drainage ditches, and large puddles.[2]

				The bettas exhibit two kinds of spawning behaviour: some build bubble nests, such as B. splendens, while others are mouthbrooders, such as B. picta. The mouthbrooding species are sometimes called pseudo bettas, and are sometimes speculated to have evolved from the nest-builders in an adaptation to their fast-moving stream habitats.[3]"
				image="https://www.teahub.io/photos/full/202-2021548_red-fish-wallpaper.jpg"
				link="https://en.wikipedia.org/wiki/Betta"
			/>
			<Card
				name="Manatee"
				description="Manatees (family Trichechidae, genus Trichechus) are large, fully aquatic, mostly herbivorous marine mammals sometimes known as sea cows. There are three accepted living species of Trichechidae, representing three of the four living species in the order Sirenia: the Amazonian manatee (Trichechus inunguis), the West Indian manatee (Trichechus manatus), and the West African manatee (Trichechus senegalensis). They measure up to 4.0 metres (13 ft 1 in) long, weigh as much as 590 kilograms (1,300 lb),[2] and have paddle-like flippers."
				image="https://eskipaper.com/images/manatee-1.jpg"
				link="https://en.wikipedia.org/wiki/Manatee"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Sea turttle"
				description="Turtles are an order of reptiles known as Testudines, characterized by a shell developed mainly from their ribs. Modern turtles are divided into two major groups, the side-necked turtles and hidden neck turtles which differ in the way the head retracts. There are 360 living and recently extinct species of turtles, including tortoises and terrapins. They are found on most continents, some islands and much of the ocean. Like other reptiles, birds, and mammals, they breathe air and do not lay eggs underwater, although many species live in or around water. Genetic evidence typically places them in close relation to crocodilians and birds."
				image="https://eskipaper.com/images/sea-turtle-wallpaper-13.jpg"
				link="https://en.wikipedia.org/wiki/Turtle"
			/>

			<Card
				name="Manta ray"
				description="Manta rays are large rays belonging to the genus Mobula (formerly its own genus Manta). The larger species, M. birostris, reaches 7 m (23 ft) in width, while the smaller, M. alfredi, reaches 5.5 m (18 ft). Both have triangular pectoral fins, horn-shaped cephalic fins and large, forward-facing mouths. They are classified among the Myliobatiformes (stingrays and relatives) and are placed in the family Myliobatidae (eagle rays). They have the largest brains and brain to body ratio of all fish, and can pass the mirror test."
				image="https://coolwallpapers.me/picsup/5735961-manta-ray-wallpapers.jpg"
				link="https://en.wikipedia.org/wiki/Manta_ray"
			/>

			<Card
				name="Sea horse"
				description="A seahorse (also written sea-horse and sea horse) is any of 46 species of small marine fish in the genus Hippocampus. Hippocampus comes from the Ancient Greek hippókampos (ἱππόκαμπος), itself from híppos (ἵππος) meaning horse and kámpos (κάμπος) meaning sea monster.[4][5] Having a head and neck suggestive of a horse, seahorses also feature segmented bony armour, an upright posture and a curled prehensile tail.[6] Along with the pipefishes and seadragons (Phycodurus and Phyllopteryx) they form the family Syngnathidae."
				image="https://e3.365dm.com/20/06/1600x900/skynews-the-seahorse-trust_5004387.jpg?20200602143036"
				link="https://en.wikipedia.org/wiki/Seahorse"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Sea lion"
				description="Sea lions are pinnipeds characterized by external ear flaps, long foreflippers, the ability to walk on all fours, short, thick hair, and a big chest and belly. Together with the fur seals, they make up the family Otariidae, eared seals, which contains six extant and one extinct species (the Japanese sea lion) in five genera. Their range extends from the subarctic to tropical waters of the global ocean in both the Northern and Southern Hemispheres, with the notable exception of the northern Atlantic Ocean."
				image="https://images6.alphacoders.com/419/419848.jpg"
				link="https://en.wikipedia.org/wiki/Sea_lion"
			/>

			<Card
				name="Pirahna"
				description="A piranha or piraña (/pɪˈrɑːnjə/, /pɪˈrænjə/, or /pɪˈrɑːnə/; Portuguese: [piˈɾɐ̃ɲɐ], Spanish: [piˈɾaɲa]), a member of family Serrasalmidae,[1] or a member of the subfamily Serrasalminae within the tetra family, Characidae[2] in order Characiformes, is a freshwater fish that inhabits South American rivers, floodplains, lakes and reservoirs. Although often described as extremely predatory and mainly feeding on fish, their dietary habits vary extensively, and they will also take plant material,[3] leading to their classification as omnivorous.[4]"
				image="https://www.desktopbackground.org/download/1600x900/2012/11/27/490132_piranha-fish-photo-and-wallpaper-cute-piranha-fish-pictures_2398x1370_h.jpg"
				link="https://en.wikipedia.org/wiki/Piranha"
			/>
			<Card
				name="Bull shark"
				description="The bull shark (Carcharhinus leucas), also known as the Zambezi shark(informally zambi) in Africa, and Lake Nicaragua shark in Nicaragua, is a requiem shark commonly found worldwide in warm, shallow waters along coasts and in rivers. It is known for its aggressive nature, and presence in warm, shallow brackish and freshwater systems including estuaries and rivers."
				image="https://d.newsweek.com/en/full/1799781/bull-shark.jpg?w=1600&h=900&q=88&f=28a4f4e02e69247e33bbed09aef260d5"
				link="https://en.wikipedia.org/wiki/Bull_shark"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Tiger shark"
				description="The tiger shark (Galeocerdo cuvier[3]) is a species of requiem shark and the only extant member of the genus Galeocerdo. It is a large macropredator, capable of attaining a length over 5 m (16 ft 5 in).[4] Populations are found in many tropical and temperate waters, especially around central Pacific islands. Its name derives from the dark stripes down its body, which resemble a tiger's pattern, but fade as the shark matures.["
				image="https://e3.365dm.com/17/12/1600x900/skynews-tiger-shark-generic_4172004.jpg?20171202103900"
				link="https://en.wikipedia.org/wiki/Tiger_shark"
			/>
			<Card
				name="Squid"
				description="TSquid are cephalopods in the superorder Decapodiformes with elongated bodies, large eyes, eight arms and two tentacles. Like all other cephalopods, squid have a distinct head, bilateral symmetry, and a mantle. They are mainly soft-bodied, like octopuses, but have a small internal skeleton in the form of a rod-like gladius or pen, made of chitin."
				image="https://vistapointe.net/images/squid-7.jpg"
				link="https://en.wikipedia.org/wiki/Squid"
			/>
			<Card
				name="Sea snake"
				description="Sea snakes, or coral reef snakes, are a subfamily of elapid snakes, the Hydrophiinae,[clarification needed] that inhabit marine environments for most or all of their lives. Most are venomous, except the genus Emydocephalus, which feeds almost exclusively on fish eggs.[2] Sea snakes are extensively adapted to a fully aquatic life and are unable to move on land, except for the genus Laticauda, which has limited land movement.[clarification needed] They are found in warm coastal waters from the Indian Ocean to the Pacific and are closely related to venomous terrestrial snakes in Australia."
				image="https://cdn.hswstatic.com/gif/sea-snake-1.jpg"
				link="https://en.wikipedia.org/wiki/Sea_snake"
			/>
		</div>
	</>
);
