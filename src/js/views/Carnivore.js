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

export const Carnivore = () => (
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
				name="Lion"
				description="The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It
							has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the
							end of its tail. It is sexually dimorphic; adult male lions are larger than females and have
							a prominent mane. It is a social species, forming groups called prides. A lions pride
							consists of a few adult males, related females, and cubs. Groups of female lions usually
							hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator
							although some lions scavenge when opportunities occur and have been known to hunt humans,
							the species typically does not."
				image="http://all4desktop.com/data_images/original/4242124-lion.jpg"
				link="https://en.wikipedia.org/wiki/Lion"
			/>
			<Card
				name="Tiger"
				description="The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat, which support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years, then become independent and leave their mother's home range to establish their own."
				image="https://uhdwallpapers.org/uploads/converted/18/06/18/beautiful-big-tiger-1600x900_79896-mm-90.jpg"
				link="https://en.wikipedia.org/wiki/Tiger"
			/>

			<Card
				name="Brown Bear"
				description="Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails."
				image="https://www.bhmpics.com/download/bear_at_river_summer-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Bear"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Wolf"
				description="The wolf (Canis lupus[a]), also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. More than thirty subspecies of Canis lupus have been recognized, and gray wolves, as colloquially understood, comprise non-domestic/feral subspecies. The wolf is the largest extant member of the family Canidae. It is also distinguished from other Canis species by its less pointed ears and muzzle, as well as a shorter torso and a longer tail."
				image="https://wallpaperaccess.com/full/2693434.jpg"
				link="https://en.wikipedia.org/wiki/Wolf"
			/>
			<Card
				name="Jaguar"
				description="The jaguar (Panthera onca) is a large felid species and the only living member of the genus Panthera native to the Americas. With a body length of up to 1.85 m (6 ft 1 in) and weight of up to 96 kg (212 lb), it is the largest cat species in the Americas and the third largest in the world. Its distinctively marked coat features pale yellow to tan colored fur covered by spots that transition to rosettes on the sides. The jaguar's powerful bite allows it to pierce the carapaces of turtles and tortoises, and to employ an unusual killing method: it bites directly through the skull of mammalian prey between the ears to deliver a fatal blow to the brain."
				image="https://images.hdqwalls.com/download/big-cat-jaguar-9i-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Jaguar"
			/>
			<Card
				name="fox"
				description="Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies.[2] The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World."
				image="https://eskipaper.com/images/fox-wallpaper-1.jpg"
				link="https://en.wikipedia.org/wiki/Fox"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Wolverine"
				description="The wolverine is found primarily in remote reaches of the Northern boreal forests and subarctic and alpine tundra of the Northern Hemisphere, with the greatest numbers in Northern Canada, the U.S. state of Alaska, the mainland Nordic countries of Europe, and throughout western Russia and Siberia. Its population has steadily declined since the 19th century owing to trapping, range reduction and habitat fragmentation. The wolverine is now essentially absent from the southern end of its European range."
				image="https://img.wallpapersafari.com/desktop/1600/900/80/73/utIZAM.jpg"
				link="https://en.wikipedia.org/wiki/Wolverine"
			/>

			<Card
				name="Lynx"
				description="Lynx have a short tail, characteristic tufts of black hair on the tips of their ears, large, padded paws for walking on snow and long whiskers on the face. Under their neck, they have a ruff, which has black bars resembling a bow tie, although this is often not visible."
				image="https://e3.365dm.com/17/10/1600x900/skynews-borth-lillith-lynx_4142285.jpg?20171030002536"
				link="https://en.wikipedia.org/wiki/Lynx"
			/>

			<Card
				name="Dingo"
				description="The dingo is a medium-sized canine that possesses a lean, hardy body adapted for speed, agility, and stamina. The dingo's three main coat colourations are light ginger or tan, black and tan, or creamy white.[18][19] The skull is wedge-shaped and appears large in proportion to the body.[18] The dingo is closely related to the New Guinea singing dog and the New Guinea Highland wild dog:[11] their lineage split early from the lineage that led to today's domestic dogs,[20][21][22] and can be traced back through the Malay Archipelago to Asia.[1]"
				image="https://img.wallpapersafari.com/desktop/1600/900/73/65/vFRM7a.jpg"
				link="https://en.wikipedia.org/wiki/Dingo"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="komodo dragon"
				description="As a result of their size, Komodo dragons are apex predators, and dominate the ecosystems in which they live. Komodo dragons hunt and ambush prey including invertebrates, birds, and mammals. It has been claimed that they have a venomous bite; there are two glands in the lower jaw which secrete several toxic proteins. The biological significance of these proteins is disputed, but the glands have been shown to secrete an anticoagulant. Komodo dragons' group behavior in hunting is exceptional in the reptile world. The diet of Komodo dragons mainly consists of Javan rusa (Rusa timorensis), though they also eat considerable amounts of carrion. Komodo dragons also occasionally attack humans."
				image="https://www.desktopbackground.org/download/1600x900/2014/07/27/800005_komodo-dragon-indonesia-national-animal_1600x1200_h.jpg"
				link="https://en.wikipedia.org/wiki/Komodo_dragon"
			/>

			<Card
				name="Hyena"
				description="Hyenas, or hyaenas (from Ancient Greek ὕαινα, hýaina[1]), are feliform carnivoran mammals of the family Hyaenidae /haɪˈɛnɪdiː/. With only four extant species (each in their own genera), it is the fifth-smallest biological family in the Carnivora and one of the smallest in the class Mammalia.[2] Despite their low diversity, hyenas are unique and vital components of most African ecosystems.[3]"
				image="https://cdn.cnn.com/cnnnext/dam/assets/150107065924-ugly-safari-hyena-kenya-full-169.jpg"
				link="https://en.wikipedia.org/wiki/Hyena"
			/>
			<Card
				name="Tasmania devil"
				description="The Tasmanian devil (Sarcophilus harrisii) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding."
				image="https://img.wallpapersafari.com/desktop/1600/900/36/88/Ft1gVj.jpg"
				link="https://en.wikipedia.org/wiki/Tasmanian_devil"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Coyete"
				description="The coyote (Canis latrans) is a species of canine native to North America. It is smaller than its close relative, the wolf, and slightly smaller than the closely related eastern wolf and red wolf. It fills much of the same ecological niche as the golden jackal does in Eurasia. The coyote is larger and more predatory and was once referred to as the American jackal by a behavioral ecologist. Other historical names for the species include the prairie wolf and the brush wolf."
				image="https://d.newsweek.com/en/full/1563783/coyote-yellowstone.jpg?w=1600&h=900&q=88&f=00c950dfd7ef8be02b498ae51a03aff5"
				link="https://en.wikipedia.org/wiki/Coyote"
			/>
			<Card
				name="Mink"
				description="The American mink's fur has been highly prized for use in clothing. Their treatment on fur farms has been a focus of animal rights and animal welfare[1] activism. American mink have established populations in Europe (including Great Britain and Denmark) and South America. Some people believe this happened after the animals were released from mink farms by animal rights activists, or otherwise escaping from captivity.[2] [3]In the UK, under the Wildlife & Countryside Act 1981, it is illegal to release mink into the wild.[4] In some countries, any live mink caught in traps must be humanely killed.[5]"
				image="https://static01.nyt.com/images/2020/12/15/science/15VIRUS-WILDMINK/15VIRUS-WILDMINK-videoSixteenByNineJumbo1600.jpg"
				link="https://en.wikipedia.org/wiki/Mink"
			/>
			<Card
				name="Puma"
				description="The cougar (Puma concolor) is a large cat of the subfamily Felinae. Native to the Americas, its range spans from the Canadian Yukon to the southern Andes in South America and is the most widespread of any large wild terrestrial mammal in the Western Hemisphere. It is an adaptable, generalist species, occurring in most American habitat types. Due to its wide range, it has many names, including puma, mountain lion, catamount, panther and painter."
				image="https://data.1freewallpapers.com/download/puma-high-resolution-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Cougar"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Snow leopard"
				description="The snow leopard (Panthera uncia), also known as the ounce, is a felid in the genus Panthera native to the mountain ranges of Central and South Asia. It is listed as Vulnerable on the IUCN Red List because the global population is estimated to number fewer than 10,000 mature individuals and is expected to decline about 10% by 2040. It is threatened by poaching and habitat destruction following infrastructural developments. It inhabits alpine and subalpine zones at elevations from 3,000 to 4,500 m (9,800 to 14,800 ft), ranging from eastern Afghanistan, the Himalayas and the Tibetan Plateau, to southern Siberia, Mongolia and western China. In the northern part of its range, it also lives at lower elevations.["
				image="https://images.wallpaperscraft.com/image/single/snow_leopard_snow_face_powdered_anger_look_57966_1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Snow_leopard"
			/>
			<Card
				name="Leopard"
				description="The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the cat family, Felidae.[4] It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, Southern Russia, and on the Indian subcontinent to Southeast and East Asia. It is listed as Vulnerable on the IUCN Red List because leopard populations are threatened by habitat loss and fragmentation, and are declining in large parts of the global range."
				image="https://images.hdqwalls.com/download/zoo-leopard-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Leopard"
			/>
			<Card
				name="Black bear"
				description="The American black bear (Ursus americanus) is a medium-sized bear endemic to North America. It is the continent's smallest and most widely distributed bear species. American black bears are omnivores, with their diets varying greatly depending on season and location. They typically live in largely forested areas, but will leave forests in search of food, and are sometimes attracted to human communities due to the immediate availability of food. Despite the name, some subspecies can be brown or even blond in coloration."
				image="https://d.newsweek.com/en/full/1888594/file-photo-black-bear.jpg?w=1600&h=900&q=88&f=92e97f367607d23eaa3f8205585b6930"
				link="https://en.wikipedia.org/wiki/American_black_bear"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="African wild dog"
				description="The African wild dog (Lycaon pictus) also called the African painted dog and the African hunting dog, is a wild canine which is a native species to sub-Saharan Africa. It is the largest wild canine in Africa, and the only extant member of the genus Lycaon, which is distinguished from Canis by dentition highly specialised for a hypercarnivorous diet, and by a lack of dewclaws. It is estimated that about 6,600 adults (including 1,400 mature individuals) live in 39 subpopulations that are all threatened by habitat fragmentation, human persecution, and outbreaks of disease."
				image="https://i.pinimg.com/originals/50/cc/96/50cc96a70264bebf932c13edec945202.jpg"
				link="https://en.wikipedia.org/wiki/African_wild_dog"
			/>
			<Card
				name="River otter"
				description="Otters are carnivorous mammals in the subfamily Lutrinae. The 13 extant otter species are all semiaquatic, aquatic or marine, with diets based on fish and invertebrates. Lutrinae is a branch of the Mustelidae family, which also includes weasels, badgers, mink, and wolverines, among other animals."
				image="https://images.wallpaperscraft.com/image/single/otter_animal_muzzle_hair_66474_1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Otter"
			/>
			<Card
				name="Clouded leopard"
				description="TThe clouded leopard (Neofelis nebulosa) is a wild cat inhabiting dense forests from the foothills of the Himalayas through mainland Southeast Asia into South China. The first clouded leopard known to science was brought to London from China in the early 19th century and described in 1821. It has large dusky-grey blotches and irregular spots and stripes reminiscent of clouds."
				image="https://c4.wallpaperflare.com/wallpaper/413/903/793/cats-clouded-leopard-big-cat-clouded-leopard-wildlife-hd-wallpaper-preview.jpg"
				link="https://en.wikipedia.org/wiki/Clouded_leopard"
			/>
		</div>
	</>
);
