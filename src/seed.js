const plants = [
    {
        'id': 1,
        'name': 'Monstera Adansonii',
        'image': '/plant_images/monsteraAdansonii.jpeg',
        'description': "Monstera adansonii, also known as the Swiss cheese plant, is a unique flowering plant with beautiful heart-shaped leaves. Because of the oval-shaped holes or fenestrations dappled throughout the leaf, it's sometimes called Monstera adansonii Swiss cheese, or simply swiss cheese plant.",
        'price': 35,
        'countInStock': 5
    },
    {
        'id': 2,
        'name': 'String of Pearls',
        'image': '/plant_images/stringOfPearls.jpeg',
        'description': 'String of Pearls, or Senecio rowleyanus, is a succulent vine belonging to the family Asteraceae. The creeping plant grows along the ground, with the stems trailing on the ground. As the stems touch the ground, it starts rooting where they touch and forming a dense mat or groundcover.',
        'price': 20,
        'countInStock': 10
    },
    {
        'id': 3,
        'name': 'String of Turtles',
        'image': '/plant_images/stringofturtles.jpg',
        'description': 'String of Turtles is a popular semi-succulent plant for hanging baskets, terrariums or indoors. Also known as Jade Necklace, this plant looks best in situations where it can trail i.e. tall pots or hanging baskets. An easy plant to grow, String of Turtles can be adapted to a range of growing conditions.',
        'price': 35,
        'countInStock': 6
    },
    {
        'id': 4,
        'name': 'Variegated String of Hearts',
        'image': '/plant_images/varStringOfHearts.jpeg',
        'description': "The String of Hearts (Ceropegia woodii) is a trailing succulent-like plant native to South Africa. The delicate heart-shaped foliage and slender vines can reach up to 12' long in its natural environment, and has earned this plant many nicknames, including Rosary Vine and Sweetheart Vine.",
        'price': 45,
        'countInStock': 9
    },
    {
        'id': 5,
        'name': 'Watermelon Peperomia',
        'description': 'Watermelon Peperomia is a tropical evergreen herbaceous shrub that is erect and bushy, grows up to 8" tall and can be used as a houseplant in temperate climates. It is named Watermelon Peperomia because its leaves resemble the rind of a watermelon.',
        'image': '/plant_images/watermelonPeperomia.png',
        'price': 50,
        'countInStock': 8
    },
    {
        'id': 6,
        'name': 'Aloe Vera',
        'description': "Aloe vera, sometimes described as a 'wonder plant,' is a short-stemmed shrub. The leaves of Aloe vera are succulent, erect, and form a dense rosette. Many uses are made of the gel obtained from the plant's leaves.",
        'image':'/plant_images/aloeVera.jpeg',
        'price': 20,
        'countInStock': 4
    },
    {
        'id': 7,
        'name': 'Monstera Deliciosa Albo Variegata',
        'description': "Monstera deliciosa 'Albo Variegata' is an impressive, spreading, easy-to-grow, evergreen and generally low maintenance perennial plant. This cultivar produces attractive variegated leaves marbled with white colouring. This houseplant lives happily in full or partial shade. However, it will grow faster in bright light",
        'image':'/plant_images/monsteraDeliciosaAlboVariegata.jpeg',
        'price': 300,
        'countInStock': 3
    },
    {
        'id': 8,
        'name': 'Pink Syngonium',
        'description': "Syngonium Neon Robusta is a beautiful pink variety of the popular arrowhead vine family. These subtropical climbers are a super versatile species, able to happily grow as a bushy houseplant, a vine, or as a terrarium plant – depending on how you like to grow them.",
        'image':'/plant_images/pinkSygnonium.jpeg',
        'price': 15,
        'countInStock': 8
    },
    {
        'id': 9,
        'name': 'Philodendron Brasil',
        'description': "The Philodendron Brasil is a fast-growing, easy, vining plant. Its graceful, heart-shaped leaves are dark green with yellow variegation in the center of the leaf. ... The Philodendron Brazil is incredibly forgiving and will tolerate all kinds of neglect including low light, poor soil, and inconsistent watering.",
        'image':'/plant_images/philodendronBrasil.jpeg',
        'price': 20,
        'countInStock': 7
    },
    {
        'id': 10,
        'name': 'Pink Philodendron',
        'description': "The Philodendron Pink Princess is one of the most stunning and beautiful houseplants to grow. With its dark green leaves and bright pink variegation, this indoor plant is rightly called the “pink princess.” Pink Princess philodendron plants grow well in pots or in hanging baskets where the trailing vines and pink leaves create a stunning showpiece.",
        'image':'/plant_images/pinkPhilodendron.jpeg',
        'price': 350,
        'countInStock': 6
    },
    {
        'id': 11,
        'name': 'Neon Pothos',
        'description': "The Neon Pothos is labeled as such for its bright green neon color throughout its leaves and stems. ‘Neon’ has all the rugged, durable characteristics that houseplant lovers expect from Pothos, but with glowing, neon-green foliage.",
        'image':'/plant_images/neonPothos.jpeg',
        'price': 15,
        'countInStock': 10
    },
    {
        'id': 12,
        'name': 'Pothos N Joy',
        'description': "A beautiful Epipremnum aureum variety that really stands out from the Pothos crowd with its signature mottled white and green variegation and small, irregular leaves.",
        'image':'/plant_images/pothosNJoy.jpeg',
        'price': 20,
        'countInStock': 10
    },
    {
        'id': 13,
        'name': 'Marble Pothos',
        'description': "The Pothos plant is our top recommendation for first time plant parents. Lovingly nicknamed the cubicle plant because it can thrive in almost any environment, the easy-care Pothos and its quick growing vines will make any space look more lush. The Marble variety is known for its variegated green and white leaves.",
        'image':'/plant_images/marblePothos.jpeg',
        'price': 15,
        'countInStock': 10
    },
    {
        'id': 14,
        'name': 'Hoya Carnosa Krimson Queen',
        'description': "Hoya Carnosa Krimson Queen is a draping succulent vine that produces clusters of star-shaped waxy flowers. Krimson Queen has green leaves with variegated borders. The variegation can be from white/cream to yellowish depending upon the growing conditions.",
        'image':'/plant_images/hoyaCarnosaKrimsonQueen.jpg',
        'price': 80,
        'countInStock': 10
    },
    {
        'id': 15,
        'name': 'Hoya Carnosa Compacta',
        'description': "Hoya carnosa compacta is a popular variety of the Hoya genus to grow as a houseplant – with good reason. This plant is great for hanging pots and ledges that will show off its verdant trailing vines.",
        'image':'/plant_images/hoyaCarnosaCompacta.jpeg',
        'price': 15,
        'countInStock': 10
    }

]

export default plants;