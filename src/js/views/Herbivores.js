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

export const Herbivores = () => (
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
				name="Zebra"
				description="Zebras (UK: /ˈzɛbrəz/, US: /ˈziːbrəz/) (subgenus Hippotigris) are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy's zebra (Equus grevyi), plains zebra (E. quagga), and the mountain zebra (E. zebra). Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae. Zebra stripes come in different patterns, unique to each individual. Several theories have been proposed for the function of these stripes, with most evidence supporting them as a deterrent for biting flies. Zebras inhabit eastern and southern Africa and can be found in a variety of habitats such as savannahs, grasslands, woodlands, shrublands, and mountainous areas."
				image="https://www.arthipo.com/image/cache/catalog/poster/animals/panimal83-burchells-zebra-equus-quagga-burchellii-resim-poster-kanvas-photo-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/Zebra"
			/>
			<Card
				name="Deer"
				description="Deer or true deer are hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk (wapiti), the red deer, and the fallow deer; and the Capreolinae, including the reindeer (caribou), white-tailed deer, the roe deer, and the moose. Male deer of all species (except the Chinese water deer) as well as female reindeer, grow and shed new antlers each year. In this they differ from permanently horned antelope, which are part of a different family (Bovidae) within the same order of even-toed ungulates (Artiodactyla)."
				image="https://cdn.wallpapersafari.com/68/12/gTDxqZ.jpg"
				link="https://en.wikipedia.org/wiki/Deer"
			/>

			<Card
				name="Elephant"
				description="Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are an informal grouping within the proboscidean family Elephantidae. Elephantidae is the only surviving family of proboscideans; extinct members include the mastodons. Elephantidae also contains several extinct groups, including the mammoths and straight-tusked elephants. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs."
				image="https://www.redduckpost.com/wp-content/uploads/2016/12/Elephants-2-1000x667-72.jpg"
				link="https://en.wikipedia.org/wiki/Elephant"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Buffalo"
				description="The African buffalo (Syncerus caffer) is a large sub-Saharan African bovine.[2] Syncerus caffer caffer, the Cape buffalo, is the typical subspecies, and the largest one, found in Southern and East Africa. S. c. nanus (the forest buffalo) is the smallest subspecies, common in forest areas of Central and West Africa, while S. c. brachyceros is in West Africa and S. c. aequinoctialis is in the savannas of East Africa. The adult African buffalo's horns are its characteristic feature: they have fused bases, forming a continuous bone shield across the top of the head referred to as a boss."
				image="https://norwegianscitechnews.com/wp-content/uploads/2017/10/boffel-7407-1000x667-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/African_buffalo"
			/>
			<Card
				name="Moose"
				description="The moose (in North America) or elk (in Eurasia) (Alces alces) is a member of the New World deer subfamily and is the largest and heaviest extant species in the deer family. Most adult male moose have distinctive broad, palmate (open-hand shaped) antlers; most other members of the deer family have antlers with a dendritic (twig-like) configuration. Moose typically inhabit boreal forests and temperate broadleaf and mixed forests of the Northern Hemisphere in temperate to subarctic climates. Hunting and other human activities have caused a reduction in the size of the moose's range over time. It has been reintroduced to some of its former habitats."
				image="https://frankfmradio.com/wp-content/uploads/sites/41/2019/05/mammal-386740_1920-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/Moose"
			/>
			<Card
				name="Orangutan"
				description="Orangutans are great apes native to the rainforests of Indonesia and Malaysia. They are now found only in parts of Borneo and Sumatra, but during the Pleistocene they ranged throughout Southeast Asia and South China. Classified in the genus Pongo, orangutans were originally considered to be one species. From 1996, they were divided into two species: the Bornean orangutan (P. pygmaeus, with three subspecies) and the Sumatran orangutan (P. abelii). A third species, the Tapanuli orangutan (P. tapanuliensis), was identified definitively in 2017. The orangutans are the only surviving species of the subfamily Ponginae, which diverged genetically from the other hominids (gorillas, chimpanzees, and humans) between 19.3 and 15.7 million years ago."
				image="https://vistapointe.net/images/orangutan-wallpaper-13.jpg"
				link="https://en.wikipedia.org/wiki/Orangutan"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="chipmunk"
				description="Chipmunks may be classified either as a single genus, Tamias, or as three genera: Tamias, of which the eastern chipmunk (T. striatus) is the only living member; Eutamias, of which the Siberian chipmunk (E. sibiricus) is the only living member; and Neotamias, which includes the 23 remaining, mostly western, species. These classifications were treated as subgenera due to the chipmunks' morphological similarities.[2] As a result, most taxonomies over the twentieth century have placed the chipmunks into a single genus."
				image="http://lcamtuf.coredump.cx/squirrel/"
				link="https://en.wikipedia.org/wiki/Chipmunk"
			/>

			<Card
				name="Koala"
				description="The koala or, inaccurately, koala bear[a] (Phascolarctos cinereus), is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats, which are members of the family Vombatidae. The koala is found in coastal areas of the mainland's eastern and southern regions, inhabiting Queensland, New South Wales, Victoria, and South Australia. It is easily recognisable by its stout, tailless body and large head with round, fluffy ears and large, spoon-shaped nose. The koala has a body length of 60–85 cm (24–33 in) and weighs 4–15 kg (9–33 lb). Fur colour ranges from silver grey to chocolate brown."
				image="https://www.photopathway.com/wp-content/uploads/2020/01/MG_7414-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/Koala"
			/>

			<Card
				name="Kangaroo"
				description="The kangaroo is a marsupial from the family Macropodidae (macropods, meaning large foot). In common use the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo.[1] Kangaroos are indigenous to Australia and New Guinea. The Australian government estimates that 42.8 million kangaroos lived within the commercial harvest areas of Australia in 2019, down from 53.2 million in 2013.[2]"
				image="https://whc.unesco.org/document/147973"
				link="https://en.wikipedia.org/wiki/Kangaroo"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Giraffe"
				description="The giraffe (Giraffa) is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies. However, the existence of up to nine extant giraffe species has been described, based upon research into the mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa. Seven other prehistoric species, known from fossils, are extinct."
				image="https://www.wendyperrin.com/wp-content/uploads/2018/02/Charlie-Zambia-Safari-Giraffe-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/Giraffe"
			/>

			<Card
				name="Rabbit"
				description="Rabbits, also known as bunnies or bunny rabbits, are small mammals in the family Leporidae (along with the hare) of the order Lagomorpha (along with the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds[1] of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the seven types of cottontail. The European rabbit, which has been introduced on every continent except Antarctica, is familiar throughout the world as a wild prey animal and as a domesticated form of livestock and pet. With its widespread effect on ecologies and cultures, the rabbit is, in many areas of the world, a part of daily life—as food, clothing, a companion, and a source of artistic inspiration."
				image="http://d279m997dpfwgl.cloudfront.net/wp/2016/10/bunny-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/Rabbit"
			/>
			<Card
				name="Capybara"
				description="The capybara[note 1] (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America. It is the largest living rodent[2] and a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the coypu. The capybara inhabits savannas and dense forests and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually lives in groups of 10–20 individuals. The capybara is not a threatened species and it is hunted for its meat and hide and also for grease from its thick fatty skin."
				image="http://www.robertharding.com/watermark.php?type=preview&im=RF/RH_RF/HORIZONTAL/741-5731"
				link="https://en.wikipedia.org/wiki/Capybara"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Bison"
				description="Bison are large, even-toed ungulates in the genus Bison within the subfamily Bovinae. Two extant and six extinct species are recognised. Of the six extinct species, five became extinct in the Quaternary extinction event. Bison palaeosinensis evolved in the Early Pleistocene in South Asia, and was the evolutionary ancestor of B. priscus (steppe bison), which was the ancestor of all other Bison species. From 2 million years ago to 6,000 BC, steppe bison ranged across the mammoth steppe, inhabiting Europe and northern Asia with B. schoetensacki (woodland bison), and North America with B. antiquus, B. latifrons, and B. occidentalis. The last species to go extinct, B. occidentalis, was succeeded at 3,000 BC by B. bison."
				image="https://www.nanpa.org/wp-content/uploads/2020/04/Bison-in-Soda-Butte-Creek-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/Bison"
			/>
			<Card
				name="Beaver"
				description="Beavers are large, semiaquatic rodents in the genus Castor native to the temperate Northern Hemisphere. There are two extant species: the North American beaver (Castor canadensis) and the Eurasian beaver (C. fiber). Beavers are the second-largest living rodents after the capybaras. They have stout bodies with large heads, long chisel-like incisors, brown or gray fur, hand-like front feet, webbed back feet and flat, scaly tails. The Eurasian beaver has a more elongated skull with a more triangular nasal bone opening, lighter fur color and a narrower tail. The animals can be found in a number of freshwater habitats, such as rivers, streams, lakes and ponds. They are herbivorous, consuming tree bark, aquatic plants, grasses and sedges."
				image="https://i0.wp.com/trentsizemore.com/learn/wp-content/uploads/2020/05/20200517_untitled_6231-Edit-1000x667.jpg?resize=1000%2C667&ssl=1"
				link="https://en.wikipedia.org/wiki/Beaver"
			/>
			<Card
				name="Tapir"
				description="Size varies between types, but most tapirs are about 2 m (6.6 ft) long, stand about 1 m (3 ft) high at the shoulder, and weigh between 150 and 300 kg (330 and 700 lb). Their coats are short and range in colour from reddish brown, to grey, to nearly black, with the notable exceptions of the Malayan tapir, which has a white, saddle-shaped marking on its back, and the mountain tapir, which has longer, woolly fur. All tapirs have oval, white-tipped ears, rounded, protruding rumps with stubby tails, and splayed, hooved toes, with four toes on the front feet and three on the hind feet, which help them to walk on muddy and soft ground."
				image="https://www.edgeofexistence.org/wp-content/uploads/2017/06/Tapirus-indicus_shutterstock_411690637-1000x667.jpg"
				link="https://en.wikipedia.org/wiki/Tapir"
			/>
		</div>
	</>
);
