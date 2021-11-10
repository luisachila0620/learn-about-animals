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

export const Domestic = () => (
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
				name="Dog"
				description="The dog or domestic dog, (Canis lupus familiaris[4] or Canis familiaris[5] to distinguish from other members of the Canis family), is a domesticated descendant of the wolf, characterized by an upturning tail. The dog derived from an ancient, extinct wolf,[6][7] and the modern grey wolf is the dog's nearest living relative.[8] The dog was the first species to be domesticated,[9][8] by hunter–gatherers over 15,000 years ago,[7] before the development of agriculture.[1]"
				image="https://coolwallpapers.me/picsup/5816277-belgian-malinois-wallpapers.jpg"
				link="https://en.wikipedia.org/wiki/Dog"
			/>
			<Card
				name="Sheep"
				description="Sheep (Ovis aries) are quadrupedal, ruminant mammals typically kept as livestock. Like all ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates. Although the name sheep applies to many species in the genus Ovis, in everyday usage it almost always refers to Ovis aries. Numbering a little over one billion, domestic sheep are also the most numerous species of sheep. An adult female is referred to as a ewe (/juː/), an intact male as a ram, occasionally a tup, a castrated male as a wether, and a young sheep as a lamb."
				image="https://images.hdqwalls.com/download/white-sheep-photography-8k-on-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Sheep"
			/>

			<Card
				name="Cow"
				description="Cattle, taurine cattle, Eurasian cattle, or European cattle (Bos taurus or Bos primigenius taurus) are large domesticated cloven-hooved herbivores. They are a prominent modern member of the subfamily Bovinae, are the most widespread species of the genus Bos. Depending on sex, they are referred to as cows (female) or bulls (male)."
				image="https://cdn.wallpapersafari.com/44/57/3H2ux0.jpg"
				link="https://en.wikipedia.org/wiki/Cattle"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Goat"
				description="The domestic goat or simply goat (Capra hircus) is a domesticated species of goat-antelope typically kept as livestock. It was domesticated from the wild goat (C. aegagrus) of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat.[1] It is one of the oldest domesticated species of animal, according to archaeological evidence that its earliest domestication occurred in Iran at 10,000 calibrated calendar years ago."
				image="https://images.wallpaperscraft.com/image/single/goat_field_grass_114557_1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Goat"
			/>
			<Card
				name="Cat"
				description="The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to kill rodents. About 60 cat breeds are recognized by various cat registries."
				image="https://uhdwallpapers.org/uploads/converted/18/04/15/black-and-white-cat-1600x900_46999-mm-90.jpg"
				link="https://en.wikipedia.org/wiki/Cat"
			/>
			<Card
				name="Rooster"
				description="The chicken (Gallus gallus domesticus) is a domesticated subspecies of the red junglefowl originally from Southeastern Asia. Rooster or cock is a term for an adult male bird, and younger male may be called a cockerel. A male that has been castrated is a capon. An adult female bird is called a hen and a sexually immature female is called a pullet."
				image="https://img.wallpapersafari.com/desktop/1600/900/48/70/dvXY1k.jpg"
				link="https://en.wikipedia.org/wiki/Chicken"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Pig"
				description="A pig is any of the animals in the genus Sus, within the even-toed ungulate family Suidae. Pigs include domestic pigs (Sus domesticus) and their ancestor, the common Eurasian wild boar (Sus scrofa), along with other species. Pigs, like all suids, are native to the Eurasian and African continents, ranging from Europe to the Pacific islands. Suids other than the pig are the babirusa of Indonesia, the pygmy hog of South Asia, the warthog of Africa, and other pig genera from Africa. The suids are a sister clade to peccaries."
				image="https://gqb.co.za/wp-content/uploads/2017/06/animalli.com-baby-animals-domestic-grass-pig-two-animal-hd-background-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Pig"
			/>

			<Card
				name="Duck"
				description="Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are also members of the same family. Divided among several subfamilies, they are a form taxon; they do not represent a monophyletic group (the group of all descendants of a single common ancestral species), since swans and geese are not considered ducks. Ducks are mostly aquatic birds, and may be found in both fresh water and sea water."
				image="https://static01.nyt.com/images/2019/01/30/world/30xp-duck-1/30xp-duck-1-videoSixteenByNineJumbo1600.jpg"
				link="https://en.wikipedia.org/wiki/Duck"
			/>

			<Card
				name="Horse"
				description="The horse (Equus ferus caballus)[2][3] is a domesticated one-toed hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today. Humans began domesticating horses around 4000 BC, and their domestication is believed to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used to describe horses that have never been domesticated. "
				image="https://www.bhmpics.com/download/grass_field_two_horses-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Horse"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Bull"
				description="A bull is an intact (i.e., not castrated) adult male of the species Bos taurus. More muscular and aggressive than the females of the same species, the cows, bulls have long been an important symbol in many cultures, and play a significant role in beef ranching, dairy farming, and a variety of other cultural activities, including bullfighting and bull riding."
				image="https://d.newsweek.com/en/full/1598154/top-game-1.jpg?w=1600&h=900&q=88&f=73af0d4d8fe66d93306792200c2c21fa"
				link="https://en.wikipedia.org/wiki/Bull"
			/>

			<Card
				name="Donkey"
				description="The donkey or ass is a domestic animal in the horse family. It derives from the African wild ass, Equus africanus, and has been used as a working animal for at least 5000 years. There are more than 40 million donkeys in the world, mostly in underdeveloped countries, where they are used principally as draught or pack animals. Working donkeys are often associated with those living at or below subsistence levels. Small numbers of donkeys are kept for breeding or as pets in developed countries."
				image="https://img.texasmonthly.com/2013/01/donkey.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=900&ixlib=php-1.2.1&q=45&w=1600"
				link="https://en.wikipedia.org/wiki/Donkey"
			/>
			<Card
				name="Turkey"
				description="The turkey is a large bird in the genus Meleagris, native to North America. There are two extant turkey species: the wild turkey (Meleagris gallopavo) of eastern and central North America and the ocellated turkey (Meleagris ocellata) of the Yucatán Peninsula in Mexico. Males of both turkey species have a distinctive fleshy wattle, called a snood, that hangs from the top of the beak. They are among the largest birds in their ranges. As with many large ground-feeding birds (order Galliformes), the male is bigger and much more colorful than the female."
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtf4pYw6jqSP_zyX5WKAD1uB0XEaxRzf75LQ&usqp=CAU"
				link="https://en.wikipedia.org/wiki/Turkey_(bird)"
			/>
		</div>
		<div className="row custom-row">
			<Card
				name="Llama"
				description="Llamas are very social animals and live with others as a herd. Their wool is very soft and contains very little lanolin.[2] Llamas can learn simple tasks after a few repetitions. When using a pack, they can carry about 25 to 30% of their body weight for 8 to 13 km (5–8 miles).[3] The name llama (in the past also spelled lama or glama) was adopted by European settlers from native Peruvians."
				image="https://e3.365dm.com/20/07/1600x900/skynews-llama-llamas_5038469.jpg?20200713150852"
				link="https://en.wikipedia.org/wiki/Llama"
			/>
			<Card
				name="Hamster"
				description="Hamsters are rodents (order Rodentia) belonging to the subfamily Cricetinae, which contains 19 species classified in seven genera.[1][2] They have become established as popular small pets.[3] The best-known species of hamster is the golden or Syrian hamster (Mesocricetus auratus), which is the type most commonly kept as pets. Other hamster species commonly kept as pets are the three species of dwarf hamster, Campbell's dwarf hamster (Phodopus campbelli), the winter white dwarf hamster (Phodopus sungorus) and the Roborovski hamster (Phodopus roborovskii)."
				image="https://free4kwallpapers.com/uploads/wallpaper/hamster-hd-wallpaper-1600x900-wallpaper.jpg"
				link="https://en.wikipedia.org/wiki/Hamster"
			/>
			<Card
				name="Ox"
				description="TAn ox (/ˈɒks/) (plural oxen, /ˈɒksən/), also known as a bullock (in BrE, AusE, and IndE),[1] is a male bovine trained and used as a draft animal. Oxen are commonly castrated adult male cattle; castration inhibits testosterone and aggression, which makes the males docile and safer to work with. Cows (adult females) or bulls (intact males) may also be used in some areas."
				image="https://www.bhmpics.com/download/beef_cattle-1600x900.jpg"
				link="https://en.wikipedia.org/wiki/Ox"
			/>
		</div>
	</>
);
