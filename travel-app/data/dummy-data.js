import Country from '../models/Country';
import Trip from '../models/Trips'

// Create an array of 10 conutries, and export it:

export const COUNTRIES = [
    new Country("c1", "Israel", "coral"),
    new Country("c2", "France", "darksalmon"),
    new Country("c3", "Russia", "darkcyan"),
    new Country("c4", "China", "darkviolet"),
    new Country("c5", "Spain", "firebrick"),
    new Country("c6", "Norway", "gold"),
    new Country("c7", "USA", "green"),
    new Country("c8", "Brazil", "lightpink"),
    new Country("c9", "Netherland", "mediumseagreen"),
    new Country("c10", "Chile", "mediumorchid"),
];

// add data for Trips:

export const TRIPS = [
    new Trip(
      "t1",
      ["c1"], // Array of countries id's
      "JERUSALEM DAY TOUR",
      "affordable",
      "simple",
      "https://media.audleytravel.com/-/media/images/home/north-africa-and-the-middle-east/israel/places/istock_691476048_jerusalem_letterbox.jpg?q=79&w=1920&h=640",
      "1 day",
      "Day tour in jerusalem city...",
      [
        `08:00 – Old City Tour`,
        `11:00 - Tour of Mount Zion`,
        `12:00 - Panoramic views of Jerusalem from the Haas Promenade`,
        `12:30 - Tour the First Station, the Israeli Parliament, the Rose Garden, and more`,
        `16:00 - Explore the Machane Yehuda Market`,
      ],
      true,
      true,
      false,
      true
    ),
    new Trip(
      "t2",
      ["c2"],
      "Canary Islands Walking - La Gomera and Tenerife",
      "priecy",
      "trek",
      "https://cdn.tourradar.com/s3/tour/1500x800/124760_a6b909f2.jpg",
      "8 days",
      "Start and end in San Miguel de Abona! With the Hiking & Trekking tour Canary Islands Walking - La Gomera and Tenerife, you have a 8 days tour package taking you through San Miguel de Abona, Spain and 5 other destinations in Spain. Canary Islands Walking - La Gomera and Tenerife includes accommodation in a hotel as well as an expert guide, meals, transport and more.    ",
      [
        "Day 1: Join trip in Los Cristianos, Tenerife; ferry to La Gomera Island",
        "Day 2: Walk from Vallehermoso to coastal town of Agulo",
        "Day 3: Explore the ancient cloud forest and ascend Alto de Garajonay",
        "Day 4: Descend to Chejelipes via La Laja village; free afternoon",
        "Day 5: Free day to relax or enjoy an optional walk",
        "Day 6: Walk to the black sand beach of Playa Caleta",
        "Day 7: Ferry back to Tenerife; circular walk on El Teide",
        "Day 8: Trip ends in San Miguel de Abona, Tenerife",
      ],
      false,
      false,
      true,
      false
    ),
    new Trip(
      "t3", // id
      ['c9'], // countryIds
      "How to Visit The Forbidden City", // title
      "pricey", // affordability
      "challanging", // complexity
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-9G6w8y6174M%2FURD4388aElI%2FAAAAAAAAQd4%2FPwGeK1CS8Mw%2Fs1600%2FForbidden%2BCity%2BBeijing%2BChina%2B16.jpg&f=1&nofb=1", //imageUrl
      "3 days", //duration
      "As the seat of power for hundreds of years, Beijing is full of examples of imperial extravagance and architectural design. In no place are these on better display than the Forbidden City, also known as the Palace Museum or gu gong in Chinese.", //description
      [
        `Day 1:
        Tiananmen Square – China's iconic public square
        Forbidden City – explore the immense palace complex that was home to China's emperors for more than 400 years
        Jingshan Park – a charming park with panoramic views of the Forbidden City
        Lunch – at a traditional hutong home
        Hutong Rickshaw Tour with Local Family Visit – explore Beijing's narrow hutongs from the back of a rickshaw and see how local people live
        Houhai lake – stroll around this scenic lake and get a glimpse of local life
        Drum Tower – enjoy bird's-eye views of Beijing's traditional hutong area from the top of this historic building
        Acrobatic Show at Chaoyang Theater – prepare to be amazed by this popular acrobatic show (seating: rows`,
        `Day 2:
        Mutianyu Great Wall – this scenic section of the Great Wall has been restored but is still far less touristy (with toboggan and cable car)
        Lunch – fresh trout and other Chinese dishes
        Ming Tombs & Sacred Way – enjoy a peaceful walk along the Sacred Way and explore the magnificent final resting places of China's emperors`,
        `Day 3:
        Tai Chi Class – do some relaxing morning exercise in the historic Temple of Heaven park
        Temple of Heaven – browse this magnificent temple complex and learn about Chinese sacrificial culture
        Lunch – Peking duck
        Summer Palace – a masterpiece of Chinese imperial garden design
        Chinese Tea Experience – spend a relaxing couple of hours in a tranquil tea house
        Olympic Venues – see the iconic sports venues from the 2008 Beijing Olympics, Bird's Nest stadium and Water Cube (outside view only)`,
      ], //steps
      true, //isFamilyAvailable
      false, //isSuitableForDisabled
      true, //isWaterAccess
      true //isUrban
    ),
    new Trip(
      "t4",
      ['c7'],
      "New York Day Tour",
      "Pricy",
      "Simple",
      "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
      "2 Days",
      "let's axplore New York Together, 2 Day Trip in The Big Apple...",
      [
        `Day 1`,
        '08:00 - Meeting in Starbaks For Coffe and Donut',
        `08:30 - Taking the ferry To Librety Islend `,
        `10:00 - Tour in Ellis Islend`,
        `12:00 - Lunch Break`,
        `13:00 - Central Park guided tour of Strawberry Fields`,
        `15:00 - Empire State Building`,
        `17:00 - Meeting For Dinner at One of the Best Restaurant in Manhettan`,
        `18:00 - Free Time for axplore Manhetten at night`,
        `Day 2`,
        `09:00 - Brooklyn Bridge Seen from the boat cruise`,
        `11:00 - The National 9/11 Memorial & Museum`,
        `12:00 - Lunch Break`,
        `13:00 - Federal Hall`,
        `14:00 - St. Paul's Chapel `,
        `15:00 - Times Square`,
        `17:00 - Broadway`
      ],
      true,
      false,
      true,
      true
    ),
    new Trip(
      "t5",
      ["c1"], 
      "BET-SHEMESH DAY TOUR",
      "affordable",
      "simple",
      "https://www.betshemesh.muni.il/uploads/n/1517303274.4753.jpg",
      "1 day",
      "Day tour in BET-SHEMESH city...",
      [
        `08:00 – merkaz bet-shemesh`,
        `11:00 - htyelet`,
        `12:00 - resturant dakar`,
        `13:00 - ramat bet-shemesh`,
        `16:00 - end of tour`,
      ],
      true,
      true,
      false,
      true
    ),
    new Trip(
      "t6",
      ["c1"],
      "TURTLE IN HADERA",
      "affordable",
      "simple",
      "https://media-cdn.tripadvisor.com/media/photo-s/02/5a/32/38/filename-p1010466-jpg.jpg",
      "1 day",
      "Day tour in Fisher village",
      [
          '10:00 - Hadera Forest',
          '11:00 - Orot Rabin',
          '12:30 - Hadera River',
          '14:30 - Lunch at Falafel Barzilay'
      ],
      true,
      true,
      true,
      true
  ), 
  new Trip(
    "t7",
    ["c2","c9"],
    "From Paris to Amsterdam - 1 Week Trip",
    "pricey",
    "Road trip & Tour",
    "https://s.inspirockcdn.com/ds10/photos/France/2/louvre-museum--986329674.jpg",
    "7 days",
    "Starting at Paris(Louvre - Museum) and ends at Amsterdam(De Dam). Touring through Museums and Historical Monuments throughout the day with fun Night Outs. 5 Star Hotels and Restaurants. We will visit at 7 Museums and 4 Monuments with a free run around in the streets of Amsterdam on the last day",
    [
        `Day 1: Meet and visit at "Louvre Museum",lunch at a 5 star Restaurant, continuing to Eiffel Tower and head to "Hotel Flanelles Paris" Hotel`,
        `Day 2: Breakfast int the Hotel, visit at "Musée d’Orsay", lunch at a Fancy Restaurant, continue to "Tuileries Garden", head to "Hôtel Montecristo" Hotel, Night out at the RedCats Club`,
        `Day 3: Breakfast int the Hotel, visit at "Notre-Dame Cathedral", lunch on the River, head to "Musee de l'Orangerie", end at the "Le 123 Sébastopol - Astotel" Hotel, Night out at the Eiffel park`,
        `Day 4: Early wake up -> on to busses and off to the Netherlands, lunch on Road Restaurant, arrive to Amsterdat at "Park Inn by Radisson Amsterdam City West " Hotel, Night out on the River`,
        `Day 5: Breakfast in Hotel, ride to "Van Gogh Museum", lunch at "Mothers" Restaurant, continue to "Munt Tower (Munttoren)" Monument, head to "Olympic Hotel", Night Out to a CoffeeShop`,
        `Day 6: Breakfast in Hotel, visit the "Rijksmuseum Amsterdam Museum", launch in the area, off to the "Hotel Mai Amsterdam" Hotel, Night Out at the red Street`,
        `Day 7: Breakfast in Hotel, Free walk around day, Meet at "De Dam" at 16:00, Summarize Trip, THE END`
    ],
    true,
    true,
    false,
    true
),
  new Trip(
    "t8",
    ["c1"],
    "TURTLE IN Sharey Tikva",
    "affordable",
    "simple",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ynet.co.il%2FPicServer5%2F2019%2F12%2F12%2F9654562%2F965393601000100980652no.jpg&imgrefurl=https%3A%2F%2Fwww.ynet.co.il%2Farticles%2F0%2C7340%2CL-5642699%2C00.html&tbnid=jZPsA3UwfWZoxM&vet=12ahUKEwj5i4PD2IP1AhURgc4BHd2jAZgQMygAegUIARCrAQ..i&docid=3eEniwm7bwGd0M&w=980&h=652&itg=1&q=%D7%A0%D7%97%D7%9C%20%D7%97%D7%93%D7%A8%D7%94&ved=2ahUKEwj5i4PD2IP1AhURgc4BHd2jAZgQMygAegUIARCrAQ",
    "1 day",
    "Day tour in Fisher village",
    [
      "10:00 - Sharey Tikva Forest",
      "11:00 - Moshe Market",
      "12:30 - Sharey Tikva River",
      "14:30 - The Louvre Museum in Sharey Tikva",
    ],
    true,
    true,
    true,
    true
  ),
  new Trip(
    "t9",
    ["c5"],
    "Barclona",
    "Pricy",
    "simple",
    "https://img.static-af.com/images/meta/IDname/CITY-BCN-1?aspect_ratio=2:1&max_width=1920",
    "1 day",
    "Day tour in the football staduim",
    [
      "10:00 - the football musaim",
      "11:00 - the stadium",
      "12:30 - meet the players",
      "14:30 - Lunch at a seaFood restrunt",
    ],
    true,
    true,
    true,
    true
  )
];