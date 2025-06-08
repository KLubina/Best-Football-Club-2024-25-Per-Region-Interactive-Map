// Anpassung: Clubs mind. 2 km Abstand
const CLUBS_DATA = [
    {
        "rank": 1,
        "name": "Inter Milan",
        "lat": 45.4781,
        "lng": 9.124,
        "country": "Italy"
    },
    {
        "rank": 2,
        "name": "Paris Saint-Germain",
        "lat": 48.8414,
        "lng": 2.2531,
        "country": "France"
    },
    {
        "rank": 3,
        "name": "Bayern München",
        "lat": 48.2186,
        "lng": 11.6247,
        "country": "Germany"
    },
    {
        "rank": 4,
        "name": "Barcelona",
        "lat": 41.3809,
        "lng": 2.1228,
        "country": "Spain"
    },
    {
        "rank": 5,
        "name": "Liverpool FC",
        "lat": 53.4308,
        "lng": -2.9608,
        "country": "England"
    },
    {
        "rank": 6,
        "name": "Arsenal",
        "lat": 51.5549,
        "lng": -0.1084,
        "country": "England"
    },
    {
        "rank": 7,
        "name": "Real Madrid",
        "lat": 40.4531,
        "lng": -3.6883,
        "country": "Spain"
    },
    {
        "rank": 8,
        "name": "Manchester City",
        "lat": 53.4831,
        "lng": -2.2004,
        "country": "England"
    },
    {
        "rank": 9,
        "name": "Borussia Dortmund",
        "lat": 51.4926,
        "lng": 7.4516,
        "country": "Germany"
    },
    {
        "rank": 10,
        "name": "Atlético Madrid",
        "lat": 40.4362,
        "lng": -3.5992,
        "country": "Spain"
    },
    {
        "rank": 11,
        "name": "Aston Villa",
        "lat": 52.5091,
        "lng": -1.8847,
        "country": "England"
    },
    {
        "rank": 12,
        "name": "SSC Napoli",
        "lat": 40.8279,
        "lng": 14.1935,
        "country": "Italy"
    },
    {
        "rank": 13,
        "name": "AS Roma",
        "lat": 41.9099,
        "lng": 12.4721,
        "country": "Italy"
    },
    {
        "rank": 14,
        "name": "Bayer Leverkusen",
        "lat": 51.0389,
        "lng": 7.0011,
        "country": "Germany"
    },
    {
        "rank": 15,
        "name": "Chelsea FC",
        "lat": 51.4816,
        "lng": -0.1909,
        "country": "England"
    },
    {
        "rank": 16,
        "name": "Atalanta",
        "lat": 45.7089,
        "lng": 9.6777,
        "country": "Italy"
    },
    {
        "rank": 17,
        "name": "Benfica",
        "lat": 38.7527,
        "lng": -9.1844,
        "country": "Portugal"
    },
    {
        "rank": 18,
        "name": "PSV Eindhoven",
        "lat": 51.4414,
        "lng": 5.4778,
        "country": "Netherlands"
    },
    {
        "rank": 19,
        "name": "Villarreal",
        "lat": 39.9439,
        "lng": -0.1003,
        "country": "Spain"
    },
    {
        "rank": 20,
        "name": "Sporting",
        "lat": 38.7612,
        "lng": -9.1629,
        "country": "Portugal"
    },
    {
        "rank": 21,
        "name": "Newcastle United",
        "lat": 54.9739,
        "lng": -1.6131,
        "country": "England"
    },
    {
        "rank": 22,
        "name": "Palmeiras",
        "lat": -23.5506,
        "lng": -46.6333,
        "country": "Brazil"
    },
    {
        "rank": 23,
        "name": "Juventus",
        "lat": 45.1096,
        "lng": 7.6411,
        "country": "Italy"
    },
    {
        "rank": 24,
        "name": "Crystal Palace",
        "lat": 51.3984,
        "lng": -0.0856,
        "country": "England"
    },
    {
        "rank": 25,
        "name": "Brighton & Hove Albion",
        "lat": 50.8615,
        "lng": -0.0845,
        "country": "England"
    },
    {
        "rank": 26,
        "name": "AC Milan",
        "lat": 45.49282594218039,
        "lng": 9.13873070628727,
        "country": "Italy"
    },
    {
        "rank": 27,
        "name": "Athletic Bilbao",
        "lat": 43.263,
        "lng": -2.9253,
        "country": "Spain"
    },
    {
        "rank": 28,
        "name": "Galatasaray",
        "lat": 41.0122,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 29,
        "name": "Eintracht Frankfurt",
        "lat": 50.1166,
        "lng": 8.6833,
        "country": "Germany"
    },
    {
        "rank": 30,
        "name": "Flamengo",
        "lat": -22.9121,
        "lng": -43.2302,
        "country": "Brazil"
    },
    {
        "rank": 31,
        "name": "Lazio",
        "lat": 41.92432835043385,
        "lng": 12.486532487520885,
        "country": "Italy"
    },
    {
        "rank": 32,
        "name": "Feyenoord",
        "lat": 51.8967,
        "lng": 4.5229,
        "country": "Netherlands"
    },
    {
        "rank": 33,
        "name": "Slavia Prague",
        "lat": 50.0596,
        "lng": 14.4656,
        "country": "Czech Republic"
    },
    {
        "rank": 34,
        "name": "Fiorentina",
        "lat": 43.7693,
        "lng": 11.2558,
        "country": "Italy"
    },
    {
        "rank": 35,
        "name": "Fenerbahçe",
        "lat": 41.03018643211838,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 36,
        "name": "Brentford FC",
        "lat": 51.4872,
        "lng": -0.299,
        "country": "England"
    },
    {
        "rank": 37,
        "name": "Olympiakos",
        "lat": 37.9833,
        "lng": 23.7333,
        "country": "Greece"
    },
    {
        "rank": 38,
        "name": "Real Betis",
        "lat": 37.3838,
        "lng": -5.9705,
        "country": "Spain"
    },
    {
        "rank": 39,
        "name": "AFC Bournemouth",
        "lat": 50.7357,
        "lng": -1.8389,
        "country": "England"
    },
    {
        "rank": 40,
        "name": "Lille",
        "lat": 50.6305,
        "lng": 3.0569,
        "country": "France"
    },
    {
        "rank": 41,
        "name": "Nottingham Forest",
        "lat": 52.9394,
        "lng": -1.1327,
        "country": "England"
    },
    {
        "rank": 42,
        "name": "Everton FC",
        "lat": 53.44744421166086,
        "lng": -2.9722454192483507,
        "country": "England"
    },
    {
        "rank": 43,
        "name": "Club Brugge",
        "lat": 51.2085,
        "lng": 3.2245,
        "country": "Belgium"
    },
    {
        "rank": 44,
        "name": "AS Monaco",
        "lat": 43.7384,
        "lng": 7.4246,
        "country": "France"
    },
    {
        "rank": 45,
        "name": "River Plate",
        "lat": -34.5452,
        "lng": -58.4494,
        "country": "Argentina"
    },
    {
        "rank": 46,
        "name": "Racing Club",
        "lat": -34.6634,
        "lng": -58.3708,
        "country": "Argentina"
    },
    {
        "rank": 47,
        "name": "Union St.Gilloise",
        "lat": 50.8241,
        "lng": 4.3377,
        "country": "Belgium"
    },
    {
        "rank": 48,
        "name": "FC Porto",
        "lat": 41.1617,
        "lng": -8.583,
        "country": "Portugal"
    },
    {
        "rank": 49,
        "name": "FK Red Star Belgrade",
        "lat": 44.8048,
        "lng": 20.4781,
        "country": "Serbia"
    },
    {
        "rank": 50,
        "name": "Bologna",
        "lat": 44.4938,
        "lng": 11.3387,
        "country": "Italy"
    },
    {
        "rank": 51,
        "name": "Celtic",
        "lat": 55.85,
        "lng": -4.2051,
        "country": "Scotland"
    },
    {
        "rank": 52,
        "name": "Mainz 05",
        "lat": 50.0012,
        "lng": 8.2712,
        "country": "Germany"
    },
    {
        "rank": 53,
        "name": "VfB Stuttgart",
        "lat": 48.7908,
        "lng": 9.2329,
        "country": "Germany"
    },
    {
        "rank": 54,
        "name": "Lyon",
        "lat": 45.7539,
        "lng": 4.8338,
        "country": "France"
    },
    {
        "rank": 55,
        "name": "Al Ahly",
        "lat": 30.0551,
        "lng": 31.2394,
        "country": "Egypt"
    },
    {
        "rank": 56,
        "name": "Manchester United",
        "lat": 53.4631,
        "lng": -2.2914,
        "country": "England"
    },
    {
        "rank": 57,
        "name": "Marseille",
        "lat": 43.2964,
        "lng": 5.3698,
        "country": "France"
    },
    {
        "rank": 58,
        "name": "Osasuna",
        "lat": 42.8169,
        "lng": -1.6432,
        "country": "Spain"
    },
    {
        "rank": 59,
        "name": "Fulham",
        "lat": 51.4749,
        "lng": -0.2218,
        "country": "England"
    },
    {
        "rank": 60,
        "name": "RB Leipzig",
        "lat": 51.3437,
        "lng": 12.348,
        "country": "Germany"
    },
    {
        "rank": 61,
        "name": "Nice",
        "lat": 43.7034,
        "lng": 7.2663,
        "country": "France"
    },
    {
        "rank": 62,
        "name": "Celta Vigo",
        "lat": 42.2154,
        "lng": -8.7207,
        "country": "Spain"
    },
    {
        "rank": 63,
        "name": "Werder Bremen",
        "lat": 53.0648,
        "lng": 8.8372,
        "country": "Germany"
    },
    {
        "rank": 64,
        "name": "Ajax Amsterdam",
        "lat": 52.3147,
        "lng": 4.9419,
        "country": "Netherlands"
    },
    {
        "rank": 65,
        "name": "Zenit St. Petersburg",
        "lat": 59.9366,
        "lng": 30.3061,
        "country": "Russia"
    },
    {
        "rank": 66,
        "name": "The New Saints",
        "lat": 52.7624,
        "lng": -3.0681,
        "country": "Wales"
    },
    {
        "rank": 67,
        "name": "Al Hilal",
        "lat": 24.6877,
        "lng": 46.7219,
        "country": "Saudi Arabia"
    },
    {
        "rank": 68,
        "name": "Botafogo FR",
        "lat": -22.894113567881625,
        "lng": -43.2302,
        "country": "Brazil"
    },
    {
        "rank": 69,
        "name": "Corinthians",
        "lat": -23.532613567881626,
        "lng": -46.6333,
        "country": "Brazil"
    },
    {
        "rank": 70,
        "name": "Flora Tallinn",
        "lat": 59.4389,
        "lng": 24.7545,
        "country": "Estonia"
    },
    {
        "rank": 71,
        "name": "Tottenham Hotspur",
        "lat": 51.6042,
        "lng": -0.0663,
        "country": "England"
    },
    {
        "rank": 72,
        "name": "Freiburg",
        "lat": 47.996,
        "lng": 7.8494,
        "country": "Germany"
    },
    {
        "rank": 73,
        "name": "Internacional",
        "lat": -30.0328,
        "lng": -51.2302,
        "country": "Brazil"
    },
    {
        "rank": 74,
        "name": "Braga",
        "lat": 41.5511,
        "lng": -8.4281,
        "country": "Portugal"
    },
    {
        "rank": 75,
        "name": "América",
        "lat": 19.3371,
        "lng": -99.2611,
        "country": "Mexico"
    },
    {
        "rank": 76,
        "name": "Valencia",
        "lat": 39.4697,
        "lng": -0.3774,
        "country": "Spain"
    },
    {
        "rank": 77,
        "name": "Cruz Azul",
        "lat": 19.355086432118377,
        "lng": -99.2611,
        "country": "Mexico"
    },
    {
        "rank": 78,
        "name": "RC Strasbourg",
        "lat": 48.58,
        "lng": 7.75,
        "country": "France"
    },
    {
        "rank": 79,
        "name": "PFC Ludogorets 1945 Razgrad",
        "lat": 43.85,
        "lng": 26.5167,
        "country": "Bulgaria"
    },
    {
        "rank": 80,
        "name": "FCI Levadia Tallinn",
        "lat": 59.456886432118374,
        "lng": 24.7545,
        "country": "Estonia"
    },
    {
        "rank": 81,
        "name": "São Paulo",
        "lat": -23.514627135763256,
        "lng": -46.6333,
        "country": "Brazil"
    },
    {
        "rank": 82,
        "name": "Como 1907",
        "lat": 45.8077,
        "lng": 9.0852,
        "country": "Italy"
    },
    {
        "rank": 83,
        "name": "Mamelodi Sundowns FC",
        "lat": -25.7309,
        "lng": 28.2184,
        "country": "South Africa"
    },
    {
        "rank": 84,
        "name": "Viktoria Plzeň",
        "lat": 49.7439,
        "lng": 13.3778,
        "country": "Czech Republic"
    },
    {
        "rank": 85,
        "name": "Peñarol",
        "lat": -34.8941,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 86,
        "name": "Shakhtar Donetsk",
        "lat": 48.0159,
        "lng": 37.8028,
        "country": "Ukraine"
    },
    {
        "rank": 87,
        "name": "West Ham United",
        "lat": 51.5389,
        "lng": 0.0167,
        "country": "England"
    },
    {
        "rank": 88,
        "name": "Dinamo Zagreb",
        "lat": 45.8131,
        "lng": 15.9775,
        "country": "Croatia"
    },
    {
        "rank": 89,
        "name": "Fluminense FC",
        "lat": -22.87612713576325,
        "lng": -43.2302,
        "country": "Brazil"
    },
    {
        "rank": 90,
        "name": "Wolverhampton Wanderers",
        "lat": 52.5901,
        "lng": -2.1301,
        "country": "England"
    },
    {
        "rank": 91,
        "name": "Rayo Vallecano",
        "lat": 40.3925,
        "lng": -3.6589,
        "country": "Spain"
    },
    {
        "rank": 92,
        "name": "AZ Alkmaar",
        "lat": 52.6333,
        "lng": 4.75,
        "country": "Netherlands"
    },
    {
        "rank": 93,
        "name": "Rangers",
        "lat": 55.867986432118386,
        "lng": -4.2051,
        "country": "Scotland"
    },
    {
        "rank": 94,
        "name": "Boca Juniors",
        "lat": -34.6365,
        "lng": -58.3653,
        "country": "Argentina"
    },
    {
        "rank": 95,
        "name": "Dynamo Kyiv",
        "lat": 50.4422,
        "lng": 30.5367,
        "country": "Ukraine"
    },
    {
        "rank": 96,
        "name": "Toluca FC",
        "lat": 19.288,
        "lng": -99.6559,
        "country": "Mexico"
    },
    {
        "rank": 97,
        "name": "Al Nassr",
        "lat": 24.705686432118377,
        "lng": 46.7219,
        "country": "Saudi Arabia"
    },
    {
        "rank": 98,
        "name": "Maccabi Tel Aviv",
        "lat": 32.0853,
        "lng": 34.7818,
        "country": "Israel"
    },
    {
        "rank": 99,
        "name": "Huracán",
        "lat": -34.6037,
        "lng": -58.3816,
        "country": "Argentina"
    },
    {
        "rank": 100,
        "name": "Independiente",
        "lat": -2.1707,
        "lng": -79.9353,
        "country": "Ecuador"
    },
    {
        "rank": 101,
        "name": "Esperance de Tunis",
        "lat": 36.8117,
        "lng": 10.1761,
        "country": "Tunisia"
    },
    {
        "rank": 102,
        "name": "Genoa",
        "lat": 44.4194,
        "lng": 8.9582,
        "country": "Italy"
    },
    {
        "rank": 103,
        "name": "Zrinjski Mostar",
        "lat": 43.3438,
        "lng": 17.8078,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 104,
        "name": "Lens",
        "lat": 50.4293,
        "lng": 2.8317,
        "country": "France"
    },
    {
        "rank": 105,
        "name": "Rosario Central",
        "lat": -32.9468,
        "lng": -60.6393,
        "country": "Argentina"
    },
    {
        "rank": 106,
        "name": "PAOK FC",
        "lat": 40.6211,
        "lng": 22.95,
        "country": "Greece"
    },
    {
        "rank": 107,
        "name": "Brest",
        "lat": 48.3906,
        "lng": -4.4861,
        "country": "France"
    },
    {
        "rank": 108,
        "name": "Independiente",
        "lat": -34.680626498571904,
        "lng": -58.37708990623903,
        "country": "Argentina"
    },
    {
        "rank": 109,
        "name": "Wolfsburg",
        "lat": 52.4227,
        "lng": 10.7865,
        "country": "Germany"
    },
    {
        "rank": 110,
        "name": "Red Bull Bragantino SP",
        "lat": -22.9519,
        "lng": -46.542,
        "country": "Brazil"
    },
    {
        "rank": 111,
        "name": "Deportivo Alaves",
        "lat": 42.8467,
        "lng": -2.6724,
        "country": "Spain"
    },
    {
        "rank": 112,
        "name": "Fortaleza Esporte Clube",
        "lat": -3.7189,
        "lng": -38.5267,
        "country": "Brazil"
    },
    {
        "rank": 113,
        "name": "Torino",
        "lat": 45.0678,
        "lng": 7.6866,
        "country": "Italy"
    },
    {
        "rank": 114,
        "name": "RCD Espanyol",
        "lat": 41.3479,
        "lng": 2.0751,
        "country": "Spain"
    },
    {
        "rank": 115,
        "name": "Pyramids FC",
        "lat": 30.037113567881626,
        "lng": 31.239399999999996,
        "country": "Egypt"
    },
    {
        "rank": 116,
        "name": "Real Sociedad",
        "lat": 43.3012,
        "lng": -1.9735,
        "country": "Spain"
    },
    {
        "rank": 117,
        "name": "Sparta Prague",
        "lat": 50.07758643211838,
        "lng": 14.4656,
        "country": "Czech Republic"
    },
    {
        "rank": 118,
        "name": "KRC Genk",
        "lat": 50.9636,
        "lng": 5.526,
        "country": "Belgium"
    },
    {
        "rank": 119,
        "name": "Cruzeiro",
        "lat": -19.9227,
        "lng": -43.9378,
        "country": "Brazil"
    },
    {
        "rank": 120,
        "name": "Al-Ahli",
        "lat": 21.5169,
        "lng": 39.2192,
        "country": "Saudi Arabia"
    },
    {
        "rank": 121,
        "name": "Levante",
        "lat": 39.48768643211838,
        "lng": -0.3774,
        "country": "Spain"
    },
    {
        "rank": 122,
        "name": "Bodø / Glimt",
        "lat": 67.2828,
        "lng": 14.4049,
        "country": "Norway"
    },
    {
        "rank": 123,
        "name": "Panathinaikos",
        "lat": 38.00128643211838,
        "lng": 23.7333,
        "country": "Greece"
    },
    {
        "rank": 124,
        "name": "LDU de Quito",
        "lat": -0.2201,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 125,
        "name": "Monterrey",
        "lat": 25.6667,
        "lng": -100.3,
        "country": "Mexico"
    },
    {
        "rank": 126,
        "name": "Nacional",
        "lat": -34.87611356788163,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 127,
        "name": "Mallorca",
        "lat": 39.5696,
        "lng": 2.6502,
        "country": "Spain"
    },
    {
        "rank": 128,
        "name": "AEK",
        "lat": 38.01927286423676,
        "lng": 23.7333,
        "country": "Greece"
    },
    {
        "rank": 129,
        "name": "Atlético Mineiro",
        "lat": -19.904713567881625,
        "lng": -43.9378,
        "country": "Brazil"
    },
    {
        "rank": 130,
        "name": "Ferencváros",
        "lat": 47.4813,
        "lng": 19.0424,
        "country": "Hungary"
    },
    {
        "rank": 131,
        "name": "FC Sheriff",
        "lat": 47.0607,
        "lng": 28.8659,
        "country": "Moldova"
    },
    {
        "rank": 132,
        "name": "Partizan Beograd",
        "lat": 44.822786432118384,
        "lng": 20.4781,
        "country": "Serbia"
    },
    {
        "rank": 133,
        "name": "Pafos FC",
        "lat": 34.7571,
        "lng": 32.4084,
        "country": "Cyprus"
    },
    {
        "rank": 134,
        "name": "FC Utrecht",
        "lat": 52.0833,
        "lng": 5.1333,
        "country": "Netherlands"
    },
    {
        "rank": 135,
        "name": "Club Atlético Platense",
        "lat": -34.5609,
        "lng": -58.4667,
        "country": "Argentina"
    },
    {
        "rank": 136,
        "name": "Borussia Mönchengladbach",
        "lat": 51.1744,
        "lng": 6.385,
        "country": "Germany"
    },
    {
        "rank": 137,
        "name": "København",
        "lat": 55.6867,
        "lng": 12.57,
        "country": "Denmark"
    },
    {
        "rank": 138,
        "name": "FC Twente",
        "lat": 52.2316,
        "lng": 6.8357,
        "country": "Netherlands"
    },
    {
        "rank": 139,
        "name": "Steaua Bucureşti",
        "lat": 44.4479,
        "lng": 26.0979,
        "country": "Romania"
    },
    {
        "rank": 140,
        "name": "Bolívar",
        "lat": -16.5,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 141,
        "name": "Argentinos Juniors",
        "lat": -34.58571356788163,
        "lng": -58.3816,
        "country": "Argentina"
    },
    {
        "rank": 142,
        "name": "Augsburg",
        "lat": 48.3668,
        "lng": 10.8986,
        "country": "Germany"
    },
    {
        "rank": 143,
        "name": "Rennes",
        "lat": 48.1113,
        "lng": -1.68,
        "country": "France"
    },
    {
        "rank": 144,
        "name": "Atlético Nacional",
        "lat": 6.2442,
        "lng": -75.5812,
        "country": "Colombia"
    },
    {
        "rank": 145,
        "name": "Red Bull Salzburg",
        "lat": 47.8095,
        "lng": 13.055,
        "country": "Austria"
    },
    {
        "rank": 146,
        "name": "CF Pachuca",
        "lat": 20.1011,
        "lng": -98.7591,
        "country": "Mexico"
    },
    {
        "rank": 147,
        "name": "Leganes",
        "lat": 40.3281,
        "lng": -3.7634,
        "country": "Spain"
    },
    {
        "rank": 148,
        "name": "PFC CSKA Sofia",
        "lat": 42.6951,
        "lng": 23.3253,
        "country": "Bulgaria"
    },
    {
        "rank": 149,
        "name": "Dinamo Minsk",
        "lat": 53.9072,
        "lng": 27.5863,
        "country": "Belarus"
    },
    {
        "rank": 150,
        "name": "Sevilla",
        "lat": 37.40178643211837,
        "lng": -5.9705,
        "country": "Spain"
    },
    {
        "rank": 151,
        "name": "Vitória Guimarães",
        "lat": 41.4411,
        "lng": -8.2911,
        "country": "Portugal"
    },
    {
        "rank": 152,
        "name": "Tigres UANL",
        "lat": 25.684686432118376,
        "lng": -100.3,
        "country": "Mexico"
    },
    {
        "rank": 153,
        "name": "AEK Larnaca",
        "lat": 34.9167,
        "lng": 33.6333,
        "country": "Cyprus"
    },
    {
        "rank": 154,
        "name": "1. FC Union Berlin",
        "lat": 52.457,
        "lng": 13.5653,
        "country": "Germany"
    },
    {
        "rank": 155,
        "name": "Hapoel Be'er Sheva",
        "lat": 31.2467,
        "lng": 34.7925,
        "country": "Israel"
    },
    {
        "rank": 156,
        "name": "Bahia",
        "lat": -12.973,
        "lng": -38.5016,
        "country": "Brazil"
    },
    {
        "rank": 157,
        "name": "Toulouse",
        "lat": 43.6006,
        "lng": 1.4442,
        "country": "France"
    },
    {
        "rank": 158,
        "name": "Hoffenheim",
        "lat": 49.2394,
        "lng": 8.8848,
        "country": "Germany"
    },
    {
        "rank": 159,
        "name": "Levski Sofia",
        "lat": 42.713086432118374,
        "lng": 23.3253,
        "country": "Bulgaria"
    },
    {
        "rank": 160,
        "name": "Persepolis",
        "lat": 35.6892,
        "lng": 51.389,
        "country": "Iran"
    },
    {
        "rank": 161,
        "name": "Aris Limassol",
        "lat": 34.6823,
        "lng": 33.0464,
        "country": "Cyprus"
    },
    {
        "rank": 162,
        "name": "FAR Rabat",
        "lat": 34.0209,
        "lng": -6.8416,
        "country": "Morocco"
    },
    {
        "rank": 163,
        "name": "Getafe",
        "lat": 40.3058,
        "lng": -3.7327,
        "country": "Spain"
    },
    {
        "rank": 164,
        "name": "Auckland City",
        "lat": -36.8485,
        "lng": 174.7633,
        "country": "New Zealand"
    },
    {
        "rank": 165,
        "name": "RSC Anderlecht",
        "lat": 50.84208643211838,
        "lng": 4.3377,
        "country": "Belgium"
    },
    {
        "rank": 166,
        "name": "Qarabağ",
        "lat": 40.1431,
        "lng": 47.5769,
        "country": "Azerbaijan"
    },
    {
        "rank": 167,
        "name": "Universitario de Deportes",
        "lat": -12.0433,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 168,
        "name": "Zorya Luhansk",
        "lat": 48.5671,
        "lng": 39.3171,
        "country": "Ukraine"
    },
    {
        "rank": 169,
        "name": "Sturm Graz",
        "lat": 47.0707,
        "lng": 15.4395,
        "country": "Austria"
    },
    {
        "rank": 170,
        "name": "Litex Lovech",
        "lat": 43.1319,
        "lng": 24.7247,
        "country": "Bulgaria"
    },
    {
        "rank": 171,
        "name": "Millonarios",
        "lat": 4.6097,
        "lng": -74.0817,
        "country": "Colombia"
    },
    {
        "rank": 172,
        "name": "CSKA Moskva",
        "lat": 55.7558,
        "lng": 37.6176,
        "country": "Russia"
    },
    {
        "rank": 173,
        "name": "Lanús",
        "lat": -34.7069,
        "lng": -58.3925,
        "country": "Argentina"
    },
    {
        "rank": 174,
        "name": "Olimpia",
        "lat": 14.0723,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 175,
        "name": "Grêmio",
        "lat": -30.014813567881628,
        "lng": -51.2302,
        "country": "Brazil"
    },
    {
        "rank": 176,
        "name": "Estudiantes de la Plata",
        "lat": -34.9215,
        "lng": -57.9545,
        "country": "Argentina"
    },
    {
        "rank": 177,
        "name": "Al-Sadd",
        "lat": 25.276,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 178,
        "name": "Dinamo Moskva",
        "lat": 55.77378643211838,
        "lng": 37.6176,
        "country": "Russia"
    },
    {
        "rank": 179,
        "name": "Kawasaki Frontale",
        "lat": 35.5308,
        "lng": 139.7028,
        "country": "Japan"
    },
    {
        "rank": 180,
        "name": "Dacia Chisinau",
        "lat": 47.05868643211838,
        "lng": 28.8659,
        "country": "Moldova"
    },
    {
        "rank": 181,
        "name": "Al Ittihad",
        "lat": 21.534886432118373,
        "lng": 39.2192,
        "country": "Saudi Arabia"
    },
    {
        "rank": 182,
        "name": "Ceará SC",
        "lat": -3.700913567881626,
        "lng": -38.5267,
        "country": "Brazil"
    },
    {
        "rank": 183,
        "name": "FC Midtjylland",
        "lat": 56.1572,
        "lng": 10.2107,
        "country": "Denmark"
    },
    {
        "rank": 184,
        "name": "Girona",
        "lat": 41.9794,
        "lng": 2.8214,
        "country": "Spain"
    },
    {
        "rank": 185,
        "name": "Universidad Católica",
        "lat": -0.2021135678816254,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 186,
        "name": "Colo Colo",
        "lat": -33.4489,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 187,
        "name": "CFR Cluj",
        "lat": 46.7667,
        "lng": 23.5833,
        "country": "Romania"
    },
    {
        "rank": 188,
        "name": "América de Cali",
        "lat": 3.3731,
        "lng": -76.5225,
        "country": "Colombia"
    },
    {
        "rank": 189,
        "name": "Sepahan",
        "lat": 32.6267,
        "lng": 51.6889,
        "country": "Iran"
    },
    {
        "rank": 190,
        "name": "Independiente Rivadavia",
        "lat": -32.8833,
        "lng": -68.8167,
        "country": "Argentina"
    },
    {
        "rank": 191,
        "name": "Omonia Nicosia",
        "lat": 35.1856,
        "lng": 33.3823,
        "country": "Cyprus"
    },
    {
        "rank": 192,
        "name": "SC Dnipro-1",
        "lat": 48.4593,
        "lng": 35.0386,
        "country": "Ukraine"
    },
    {
        "rank": 193,
        "name": "Shamrock Rovers",
        "lat": 53.3331,
        "lng": -6.2489,
        "country": "Ireland"
    },
    {
        "rank": 194,
        "name": "Portuguesa",
        "lat": -23.496640703644882,
        "lng": -46.6333,
        "country": "Brazil"
    },
    {
        "rank": 195,
        "name": "San Lorenzo de Almagro",
        "lat": -34.56772713576326,
        "lng": -58.3816,
        "country": "Argentina"
    },
    {
        "rank": 196,
        "name": "SD Huesca",
        "lat": 42.1364,
        "lng": -0.4082,
        "country": "Spain"
    },
    {
        "rank": 197,
        "name": "Barcelona SC",
        "lat": -2.1527135678816256,
        "lng": -79.93530000000001,
        "country": "Ecuador"
    },
    {
        "rank": 198,
        "name": "Auxerre",
        "lat": 47.8021,
        "lng": 3.5708,
        "country": "France"
    },
    {
        "rank": 199,
        "name": "Slovan Bratislava",
        "lat": 48.1439,
        "lng": 17.1097,
        "country": "Slovakia"
    },
    {
        "rank": 200,
        "name": "Deportivo Riestra",
        "lat": -34.54974070364489,
        "lng": -58.3816,
        "country": "Argentina"
    },
    {
        "rank": 201,
        "name": "Atlético PR",
        "lat": -25.4372,
        "lng": -49.24,
        "country": "Brazil"
    },
    {
        "rank": 202,
        "name": "The Strongest",
        "lat": -16.48201356788163,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 203,
        "name": "Baník Ostrava",
        "lat": 49.8209,
        "lng": 18.2625,
        "country": "Czech Republic"
    },
    {
        "rank": 204,
        "name": "Atletico Petro Luanda",
        "lat": -8.8137,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 205,
        "name": "Vasco da Gama",
        "lat": -22.858140703644878,
        "lng": -43.2302,
        "country": "Brazil"
    },
    {
        "rank": 206,
        "name": "Maccabi Haifa FC",
        "lat": 32.794,
        "lng": 34.9896,
        "country": "Israel"
    },
    {
        "rank": 207,
        "name": "Tolima",
        "lat": 4.2697,
        "lng": -75.2059,
        "country": "Colombia"
    },
    {
        "rank": 208,
        "name": "Cagliari",
        "lat": 39.2238,
        "lng": 9.1217,
        "country": "Italy"
    },
    {
        "rank": 209,
        "name": "TP Mazembe",
        "lat": -11.6606,
        "lng": 27.4794,
        "country": "Congo DR"
    },
    {
        "rank": 210,
        "name": "APOEL Nicosia",
        "lat": 35.20358643211838,
        "lng": 33.3823,
        "country": "Cyprus"
    },
    {
        "rank": 211,
        "name": "Udinese",
        "lat": 46.0748,
        "lng": 13.237,
        "country": "Italy"
    },
    {
        "rank": 212,
        "name": "Lokomotiv Moskva",
        "lat": 55.791772864236755,
        "lng": 37.6176,
        "country": "Russia"
    },
    {
        "rank": 213,
        "name": "Nomme Kalju FC (EST)",
        "lat": 59.47487286423675,
        "lng": 24.7545,
        "country": "Estonia"
    },
    {
        "rank": 214,
        "name": "KuPS",
        "lat": 62.8925,
        "lng": 27.6782,
        "country": "Finland"
    },
    {
        "rank": 215,
        "name": "Tigre",
        "lat": -34.4264,
        "lng": -58.5806,
        "country": "Argentina"
    },
    {
        "rank": 216,
        "name": "FC Krasnodar",
        "lat": 45.0355,
        "lng": 38.9753,
        "country": "Russia"
    },
    {
        "rank": 217,
        "name": "Fortuna Düsseldorf",
        "lat": 51.2333,
        "lng": 6.7833,
        "country": "Germany"
    },
    {
        "rank": 218,
        "name": "Independiente Medellín",
        "lat": 6.262186432118374,
        "lng": -75.5812,
        "country": "Colombia"
    },
    {
        "rank": 219,
        "name": "Cerro Porteño",
        "lat": -25.2637,
        "lng": -57.5759,
        "country": "Paraguay"
    },
    {
        "rank": 220,
        "name": "Olimpija Ljubljana",
        "lat": 46.0514,
        "lng": 14.506,
        "country": "Slovenia"
    },
    {
        "rank": 221,
        "name": "Hamburger SV",
        "lat": 53.5873,
        "lng": 9.899,
        "country": "Germany"
    },
    {
        "rank": 222,
        "name": "Parma Calcio 1913",
        "lat": 44.8015,
        "lng": 10.3279,
        "country": "Italy"
    },
    {
        "rank": 223,
        "name": "Cherno More Varna",
        "lat": 43.2167,
        "lng": 27.9167,
        "country": "Bulgaria"
    },
    {
        "rank": 224,
        "name": "Vitória",
        "lat": -12.955013567881627,
        "lng": -38.5016,
        "country": "Brazil"
    },
    {
        "rank": 225,
        "name": "Maribor",
        "lat": 46.5547,
        "lng": 15.6467,
        "country": "Slovenia"
    },
    {
        "rank": 226,
        "name": "RCA Raja Casablanca Athletic",
        "lat": 33.5928,
        "lng": -7.6192,
        "country": "Morocco"
    },
    {
        "rank": 227,
        "name": "Beşiktaş",
        "lat": 41.048172864236754,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 228,
        "name": "Mirassol Futebol Clube",
        "lat": -20.8167,
        "lng": -49.5167,
        "country": "Brazil"
    },
    {
        "rank": 229,
        "name": "Dnipro Dnipropetrovsk",
        "lat": 48.47728643211838,
        "lng": 35.0386,
        "country": "Ukraine"
    },
    {
        "rank": 230,
        "name": "El Zamalek",
        "lat": 30.068699011180556,
        "lng": 31.253001560441092,
        "country": "Egypt"
    },
    {
        "rank": 231,
        "name": "Malmö FF",
        "lat": 55.605,
        "lng": 13.0038,
        "country": "Sweden"
    },
    {
        "rank": 232,
        "name": "Hajduk Split",
        "lat": 43.5147,
        "lng": 16.4435,
        "country": "Croatia"
    },
    {
        "rank": 233,
        "name": "Al-Duhail SC",
        "lat": 25.293986432118373,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 234,
        "name": "Tractor Sazi",
        "lat": 38.0667,
        "lng": 46.2667,
        "country": "Iran"
    },
    {
        "rank": 235,
        "name": "FBC Melgar",
        "lat": -16.3988,
        "lng": -71.535,
        "country": "Peru"
    },
    {
        "rank": 236,
        "name": "Shanghai Shenhua",
        "lat": 31.2222,
        "lng": 121.4581,
        "country": "China PR"
    },
    {
        "rank": 237,
        "name": "Ingolstadt",
        "lat": 48.7665,
        "lng": 11.4257,
        "country": "Germany"
    },
    {
        "rank": 238,
        "name": "Vélez Sarsfield",
        "lat": -34.531754271526516,
        "lng": -58.3816,
        "country": "Argentina"
    },
    {
        "rank": 239,
        "name": "Shanghai Port F.C.",
        "lat": 31.240186432118378,
        "lng": 121.4581,
        "country": "China PR"
    },
    {
        "rank": 240,
        "name": "Spartak Moskva",
        "lat": 55.80975929635513,
        "lng": 37.6176,
        "country": "Russia"
    },
    {
        "rank": 241,
        "name": "PFC Sochi",
        "lat": 43.6028,
        "lng": 39.7342,
        "country": "Russia"
    },
    {
        "rank": 242,
        "name": "Sporting Cristal",
        "lat": -12.025313567881625,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 243,
        "name": "FC Basel",
        "lat": 47.5584,
        "lng": 7.5733,
        "country": "Switzerland"
    },
    {
        "rank": 244,
        "name": "Hellas Verona",
        "lat": 45.4386,
        "lng": 10.9916,
        "country": "Italy"
    },
    {
        "rank": 245,
        "name": "Guadalajara",
        "lat": 20.6597,
        "lng": -103.3496,
        "country": "Mexico"
    },
    {
        "rank": 246,
        "name": "Lokomotiv Astana",
        "lat": 51.1694,
        "lng": 71.4491,
        "country": "Kazakhstan"
    },
    {
        "rank": 247,
        "name": "Wydad Casablanca",
        "lat": 33.610786432118374,
        "lng": -7.6192,
        "country": "Morocco"
    },
    {
        "rank": 248,
        "name": "Young Boys",
        "lat": 46.9499,
        "lng": 7.4638,
        "country": "Switzerland"
    },
    {
        "rank": 249,
        "name": "Rijeka",
        "lat": 45.3431,
        "lng": 14.4078,
        "country": "Croatia"
    },
    {
        "rank": 250,
        "name": "Carpi",
        "lat": 44.7844,
        "lng": 10.8831,
        "country": "Italy"
    },
    {
        "rank": 251,
        "name": "Cádiz CF",
        "lat": 36.5297,
        "lng": -6.2923,
        "country": "Spain"
    },
    {
        "rank": 252,
        "name": "1. FC Köln",
        "lat": 50.9333,
        "lng": 6.95,
        "country": "Germany"
    },
    {
        "rank": 253,
        "name": "Elfsborg",
        "lat": 58.3119,
        "lng": 12.4928,
        "country": "Sweden"
    },
    {
        "rank": 254,
        "name": "Hammarby IF",
        "lat": 59.3126,
        "lng": 18.0785,
        "country": "Sweden"
    },
    {
        "rank": 255,
        "name": "Lecce",
        "lat": 40.3515,
        "lng": 18.175,
        "country": "Italy"
    },
    {
        "rank": 256,
        "name": "Stoke City",
        "lat": 52.9883,
        "lng": -2.175,
        "country": "England"
    },
    {
        "rank": 257,
        "name": "Orlando Pirates",
        "lat": -26.2041,
        "lng": 28.0473,
        "country": "South Africa"
    },
    {
        "rank": 258,
        "name": "Buriram United",
        "lat": 15.0,
        "lng": 103.1,
        "country": "Thailand"
    },
    {
        "rank": 259,
        "name": "Junior FC",
        "lat": 10.9639,
        "lng": -74.7964,
        "country": "Colombia"
    },
    {
        "rank": 260,
        "name": "Universidad de Chile",
        "lat": -33.43091356788163,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 261,
        "name": "1. FC Heidenheim",
        "lat": 48.6833,
        "lng": 10.15,
        "country": "Germany"
    },
    {
        "rank": 262,
        "name": "Al Ahli",
        "lat": 25.2048,
        "lng": 55.2708,
        "country": "United Arab Emirates"
    },
    {
        "rank": 263,
        "name": "RS Berkane",
        "lat": 34.9167,
        "lng": -2.3167,
        "country": "Morocco"
    },
    {
        "rank": 264,
        "name": "Elche",
        "lat": 38.2667,
        "lng": -0.7,
        "country": "Spain"
    },
    {
        "rank": 265,
        "name": "CR Belouizdad",
        "lat": 36.7539,
        "lng": 3.0588,
        "country": "Algeria"
    },
    {
        "rank": 266,
        "name": "US Monastir",
        "lat": 35.7814,
        "lng": 10.8264,
        "country": "Tunisia"
    },
    {
        "rank": 267,
        "name": "Kashima Antlers",
        "lat": 35.9642,
        "lng": 140.6347,
        "country": "Japan"
    },
    {
        "rank": 268,
        "name": "Royal Antwerp FC",
        "lat": 51.2213,
        "lng": 4.4051,
        "country": "Belgium"
    },
    {
        "rank": 269,
        "name": "FC Famalicão",
        "lat": 41.4067,
        "lng": -8.5206,
        "country": "Portugal"
    },
    {
        "rank": 270,
        "name": "Deportivo Saprissa",
        "lat": 9.9281,
        "lng": -84.0907,
        "country": "Costa Rica"
    },
    {
        "rank": 271,
        "name": "Ulsan Hyundai",
        "lat": 35.5384,
        "lng": 129.3114,
        "country": "South Korea"
    },
    {
        "rank": 272,
        "name": "Lech Poznań",
        "lat": 52.4069,
        "lng": 16.9299,
        "country": "Poland"
    },
    {
        "rank": 273,
        "name": "MC Alger",
        "lat": 36.76793591865676,
        "lng": 3.0728392879654236,
        "country": "Algeria"
    },
    {
        "rank": 274,
        "name": "Eibar",
        "lat": 43.1833,
        "lng": -2.4667,
        "country": "Spain"
    },
    {
        "rank": 275,
        "name": "Vissel Kobe",
        "lat": 34.6901,
        "lng": 135.1956,
        "country": "Japan"
    },
    {
        "rank": 276,
        "name": "Godoy Cruz Antonio Tomba",
        "lat": -32.9175,
        "lng": -68.8458,
        "country": "Argentina"
    },
    {
        "rank": 277,
        "name": "Aris Thessaloniki FC",
        "lat": 40.63908643211837,
        "lng": 22.95,
        "country": "Greece"
    },
    {
        "rank": 278,
        "name": "Swansea City",
        "lat": 51.6214,
        "lng": -3.9436,
        "country": "England"
    },
    {
        "rank": 279,
        "name": "Oleksandriya",
        "lat": 48.6667,
        "lng": 33.1167,
        "country": "Ukraine"
    },
    {
        "rank": 280,
        "name": "Wigan Athletic",
        "lat": 53.5478,
        "lng": -2.654,
        "country": "England"
    },
    {
        "rank": 281,
        "name": "NEC Nijmegen",
        "lat": 51.8426,
        "lng": 5.8372,
        "country": "Netherlands"
    },
    {
        "rank": 282,
        "name": "Schalke 04",
        "lat": 51.5544,
        "lng": 7.0678,
        "country": "Germany"
    },
    {
        "rank": 283,
        "name": "NK Celje",
        "lat": 46.2397,
        "lng": 15.2677,
        "country": "Slovenia"
    },
    {
        "rank": 284,
        "name": "Jablonec",
        "lat": 50.7242,
        "lng": 15.1711,
        "country": "Czech Republic"
    },
    {
        "rank": 285,
        "name": "Etoile du Sahel",
        "lat": 35.8333,
        "lng": 10.5833,
        "country": "Tunisia"
    },
    {
        "rank": 286,
        "name": "Molde FK",
        "lat": 62.7394,
        "lng": 7.1676,
        "country": "Norway"
    },
    {
        "rank": 287,
        "name": "Liverpool",
        "lat": -34.85812713576326,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 288,
        "name": "KS Raków Częstochowa",
        "lat": 50.7972,
        "lng": 19.1167,
        "country": "Poland"
    },
    {
        "rank": 289,
        "name": "Sanfrecce Hiroshima",
        "lat": 34.3853,
        "lng": 132.4553,
        "country": "Japan"
    },
    {
        "rank": 290,
        "name": "Trabzonspor",
        "lat": 41.0015,
        "lng": 39.7178,
        "country": "Turkey"
    },
    {
        "rank": 291,
        "name": "CA Central Cordoba",
        "lat": -27.7833,
        "lng": -64.2667,
        "country": "Argentina"
    },
    {
        "rank": 292,
        "name": "Stade Malien Bamako",
        "lat": 12.6392,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 293,
        "name": "LD Alajuelense",
        "lat": 10.0167,
        "lng": -84.2167,
        "country": "Costa Rica"
    },
    {
        "rank": 294,
        "name": "DSC Arminia Bielefeld",
        "lat": 52.0302,
        "lng": 8.5347,
        "country": "Germany"
    },
    {
        "rank": 295,
        "name": "Newell's Old Boys",
        "lat": -32.928813567881626,
        "lng": -60.6393,
        "country": "Argentina"
    },
    {
        "rank": 296,
        "name": "Kairat Almaty",
        "lat": 43.222,
        "lng": 76.8512,
        "country": "Kazakhstan"
    },
    {
        "rank": 297,
        "name": "Palestino",
        "lat": -33.412927135763255,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 298,
        "name": "HJK Helsinki",
        "lat": 60.1756,
        "lng": 24.9342,
        "country": "Finland"
    },
    {
        "rank": 299,
        "name": "Aucas",
        "lat": -0.1841271357632508,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 300,
        "name": "Vita Club",
        "lat": -4.4419,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 301,
        "name": "Defensa y Justicia",
        "lat": -34.7853,
        "lng": -58.2597,
        "country": "Argentina"
    },
    {
        "rank": 302,
        "name": "Barracas Central",
        "lat": -34.6467,
        "lng": -58.3928,
        "country": "Argentina"
    },
    {
        "rank": 303,
        "name": "Al Hilal Omdurman",
        "lat": 15.5007,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 304,
        "name": "Neman Grodno",
        "lat": 53.6884,
        "lng": 23.8258,
        "country": "Belarus"
    },
    {
        "rank": 305,
        "name": "Talleres de Cordoba",
        "lat": -31.4167,
        "lng": -64.1833,
        "country": "Argentina"
    },
    {
        "rank": 306,
        "name": "Sporting Gijón",
        "lat": 43.5322,
        "lng": -5.6611,
        "country": "Spain"
    },
    {
        "rank": 307,
        "name": "St. Pauli",
        "lat": 53.5546,
        "lng": 9.9676,
        "country": "Germany"
    },
    {
        "rank": 308,
        "name": "Beijing Guoan",
        "lat": 39.9388,
        "lng": 116.3974,
        "country": "China PR"
    },
    {
        "rank": 309,
        "name": "Columbus Crew",
        "lat": 39.9683,
        "lng": -82.9988,
        "country": "United States"
    },
    {
        "rank": 310,
        "name": "Santos FC",
        "lat": -23.9608,
        "lng": -46.3331,
        "country": "Brazil"
    },
    {
        "rank": 311,
        "name": "CS Universitatea Craiova",
        "lat": 44.3302,
        "lng": 23.7949,
        "country": "Romania"
    },
    {
        "rank": 312,
        "name": "Chengdu Rongcheng F.C.",
        "lat": 30.6667,
        "lng": 104.0667,
        "country": "China PR"
    },
    {
        "rank": 313,
        "name": "Libertad",
        "lat": -25.245713567881626,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 314,
        "name": "Alianza Lima",
        "lat": -12.007327135763253,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 315,
        "name": "Timişoara",
        "lat": 45.7489,
        "lng": 21.2087,
        "country": "Romania"
    },
    {
        "rank": 316,
        "name": "Leeds United",
        "lat": 53.7779,
        "lng": -1.5719,
        "country": "England"
    },
    {
        "rank": 317,
        "name": "León",
        "lat": 21.125,
        "lng": -101.6867,
        "country": "Mexico"
    },
    {
        "rank": 318,
        "name": "Neath Athletic",
        "lat": 51.6614,
        "lng": -3.8075,
        "country": "Wales"
    },
    {
        "rank": 319,
        "name": "Dunajska Streda",
        "lat": 47.9906,
        "lng": 17.622,
        "country": "Slovakia"
    },
    {
        "rank": 320,
        "name": "AIK",
        "lat": 59.33058643211838,
        "lng": 18.0785,
        "country": "Sweden"
    },
    {
        "rank": 321,
        "name": "Club Atlético Bucaramanga",
        "lat": 7.1254,
        "lng": -73.1198,
        "country": "Colombia"
    },
    {
        "rank": 322,
        "name": "Nantes",
        "lat": 47.2186,
        "lng": -1.5541,
        "country": "France"
    },
    {
        "rank": 323,
        "name": "Always Ready",
        "lat": -16.464027135763256,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 324,
        "name": "İstanbul Başakşehir",
        "lat": 41.06615929635514,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 325,
        "name": "Burnley",
        "lat": 53.7889,
        "lng": -2.2309,
        "country": "England"
    },
    {
        "rank": 326,
        "name": "Puskás FC",
        "lat": 47.499286432118375,
        "lng": 19.0424,
        "country": "Hungary"
    },
    {
        "rank": 327,
        "name": "Empoli FC",
        "lat": 43.7211,
        "lng": 10.8469,
        "country": "Italy"
    },
    {
        "rank": 328,
        "name": "Birmingham City",
        "lat": 52.4756,
        "lng": -1.8678,
        "country": "England"
    },
    {
        "rank": 329,
        "name": "Team Wellington",
        "lat": -41.2865,
        "lng": 174.7762,
        "country": "New Zealand"
    },
    {
        "rank": 330,
        "name": "Santa Fe",
        "lat": 4.6276864321183755,
        "lng": -74.0817,
        "country": "Colombia"
    },
    {
        "rank": 331,
        "name": "1º de Agosto",
        "lat": -8.795713567881627,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 332,
        "name": "Frosinone",
        "lat": 41.6401,
        "lng": 13.3387,
        "country": "Italy"
    },
    {
        "rank": 333,
        "name": "Brøndby",
        "lat": 55.6515,
        "lng": 12.4136,
        "country": "Denmark"
    },
    {
        "rank": 334,
        "name": "Esteghlal",
        "lat": 35.70718643211837,
        "lng": 51.389,
        "country": "Iran"
    },
    {
        "rank": 335,
        "name": "Paide Linnameeskond",
        "lat": 58.8856,
        "lng": 25.5569,
        "country": "Estonia"
    },
    {
        "rank": 336,
        "name": "Cuiaba",
        "lat": -15.6014,
        "lng": -56.0979,
        "country": "Brazil"
    },
    {
        "rank": 337,
        "name": "Las Palmas",
        "lat": 28.1248,
        "lng": -15.43,
        "country": "Spain"
    },
    {
        "rank": 338,
        "name": "Bangkok United",
        "lat": 13.7563,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 339,
        "name": "Catania",
        "lat": 37.5079,
        "lng": 15.083,
        "country": "Italy"
    },
    {
        "rank": 340,
        "name": "Goiás",
        "lat": -16.6869,
        "lng": -49.2648,
        "country": "Brazil"
    },
    {
        "rank": 341,
        "name": "Servette",
        "lat": 46.2044,
        "lng": 6.1432,
        "country": "Switzerland"
    },
    {
        "rank": 342,
        "name": "Jeonbuk FC",
        "lat": 35.8242,
        "lng": 127.148,
        "country": "South Korea"
    },
    {
        "rank": 343,
        "name": "EC Juventude",
        "lat": -29.1639,
        "lng": -51.5336,
        "country": "Brazil"
    },
    {
        "rank": 344,
        "name": "Deportivo Xerez",
        "lat": 36.6849,
        "lng": -6.137,
        "country": "Spain"
    },
    {
        "rank": 345,
        "name": "Viking FK",
        "lat": 58.9699,
        "lng": 5.7331,
        "country": "Norway"
    },
    {
        "rank": 346,
        "name": "Hertha BSC",
        "lat": 52.5147,
        "lng": 13.2394,
        "country": "Germany"
    },
    {
        "rank": 347,
        "name": "Guaraní",
        "lat": -25.227727135763253,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 348,
        "name": "Sparta Rotterdam",
        "lat": 51.9225,
        "lng": 4.4792,
        "country": "Netherlands"
    },
    {
        "rank": 349,
        "name": "Pumas UNAM",
        "lat": 19.373072864236747,
        "lng": -99.2611,
        "country": "Mexico"
    },
    {
        "rank": 350,
        "name": "Sochaux",
        "lat": 47.5333,
        "lng": 6.8333,
        "country": "France"
    },
    {
        "rank": 351,
        "name": "Atlético Tucumán",
        "lat": -26.8083,
        "lng": -65.2176,
        "country": "Argentina"
    },
    {
        "rank": 352,
        "name": "Monarcas Morelia",
        "lat": 19.7069,
        "lng": -101.1956,
        "country": "Mexico"
    },
    {
        "rank": 353,
        "name": "Once Caldas",
        "lat": 5.0704,
        "lng": -75.5138,
        "country": "Colombia"
    },
    {
        "rank": 354,
        "name": "ASEC Mimosas",
        "lat": 5.3364,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 355,
        "name": "Club Sport Herediano",
        "lat": 9.998,
        "lng": -84.11,
        "country": "Costa Rica"
    },
    {
        "rank": 356,
        "name": "Holstein Kiel",
        "lat": 54.3233,
        "lng": 10.1228,
        "country": "Germany"
    },
    {
        "rank": 357,
        "name": "Legia Warszawa",
        "lat": 52.2297,
        "lng": 21.0122,
        "country": "Poland"
    },
    {
        "rank": 358,
        "name": "Go Ahead Eagles",
        "lat": 52.2306,
        "lng": 6.1944,
        "country": "Netherlands"
    },
    {
        "rank": 359,
        "name": "Zalgiris Vilnius",
        "lat": 54.6872,
        "lng": 25.2797,
        "country": "Lithuania"
    },
    {
        "rank": 360,
        "name": "Apollon Limassol",
        "lat": 34.70028643211838,
        "lng": 33.0464,
        "country": "Cyprus"
    },
    {
        "rank": 361,
        "name": "Reims",
        "lat": 49.2628,
        "lng": 4.0347,
        "country": "France"
    },
    {
        "rank": 362,
        "name": "Deportivo La Coruña",
        "lat": 43.3623,
        "lng": -8.4115,
        "country": "Spain"
    },
    {
        "rank": 363,
        "name": "VfL Bochum",
        "lat": 51.4906,
        "lng": 7.2162,
        "country": "Germany"
    },
    {
        "rank": 364,
        "name": "Riga FC",
        "lat": 56.9677,
        "lng": 24.1056,
        "country": "Latvia"
    },
    {
        "rank": 365,
        "name": "SK Brann",
        "lat": 60.3894,
        "lng": 5.33,
        "country": "Norway"
    },
    {
        "rank": 366,
        "name": "Patronato de Parana",
        "lat": -31.7319,
        "lng": -60.5297,
        "country": "Argentina"
    },
    {
        "rank": 367,
        "name": "Belgrano",
        "lat": -31.39871356788162,
        "lng": -64.1833,
        "country": "Argentina"
    },
    {
        "rank": 368,
        "name": "Al-Merreikh",
        "lat": 15.518686432118374,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 369,
        "name": "JS Kabylie",
        "lat": 36.773896429313105,
        "lng": 3.0516540890526445,
        "country": "Algeria"
    },
    {
        "rank": 370,
        "name": "Gent",
        "lat": 51.05,
        "lng": 3.7167,
        "country": "Belgium"
    },
    {
        "rank": 371,
        "name": "US Cremonese",
        "lat": 45.1333,
        "lng": 10.0167,
        "country": "Italy"
    },
    {
        "rank": 372,
        "name": "Almería",
        "lat": 36.8381,
        "lng": -2.4597,
        "country": "Spain"
    },
    {
        "rank": 373,
        "name": "Djurgården",
        "lat": 59.34857286423676,
        "lng": 18.0785,
        "country": "Sweden"
    },
    {
        "rank": 374,
        "name": "LASK Linz",
        "lat": 48.3069,
        "lng": 14.2858,
        "country": "Austria"
    },
    {
        "rank": 375,
        "name": "Jiangsu Suning FC",
        "lat": 32.0603,
        "lng": 118.7969,
        "country": "China PR"
    },
    {
        "rank": 376,
        "name": "Budućnost",
        "lat": 42.4602,
        "lng": 19.2595,
        "country": "Montenegro"
    },
    {
        "rank": 377,
        "name": "Necaxa",
        "lat": 20.5218,
        "lng": -100.8092,
        "country": "Mexico"
    },
    {
        "rank": 378,
        "name": "Venezia FC",
        "lat": 45.4408,
        "lng": 12.3155,
        "country": "Italy"
    },
    {
        "rank": 379,
        "name": "CSD Municipal",
        "lat": 14.6349,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 380,
        "name": "Torpedo Zhodino",
        "lat": 54.0914,
        "lng": 28.3339,
        "country": "Belarus"
    },
    {
        "rank": 381,
        "name": "West Brom",
        "lat": 52.5089,
        "lng": -1.9644,
        "country": "England"
    },
    {
        "rank": 382,
        "name": "CD Santa Clara",
        "lat": 37.7394,
        "lng": -25.6681,
        "country": "Portugal"
    },
    {
        "rank": 383,
        "name": "Vancouver Whitecaps",
        "lat": 49.2768,
        "lng": -123.1093,
        "country": "Canada"
    },
    {
        "rank": 384,
        "name": "FC Infonet Tallinn",
        "lat": 59.49285929635513,
        "lng": 24.7345,
        "country": "Estonia"
    },
    {
        "rank": 385,
        "name": "ASD Spezia Calcio 2008",
        "lat": 44.1074,
        "lng": 9.8283,
        "country": "Italy"
    },
    {
        "rank": 386,
        "name": "Shandong Taishan F.C.",
        "lat": 36.6167,
        "lng": 117.05,
        "country": "China PR"
    },
    {
        "rank": 387,
        "name": "Bolton Wanderers",
        "lat": 53.5806,
        "lng": -2.5356,
        "country": "England"
    },
    {
        "rank": 388,
        "name": "Linfield",
        "lat": 54.6425,
        "lng": -5.9311,
        "country": "Northern Ireland"
    },
    {
        "rank": 389,
        "name": "Mjällby AIF",
        "lat": 56.0444,
        "lng": 14.2411,
        "country": "Sweden"
    },
    {
        "rank": 390,
        "name": "CS Deportivo Pereira",
        "lat": 4.8133,
        "lng": -75.6961,
        "country": "Colombia"
    },
    {
        "rank": 391,
        "name": "Urawa Red Diamonds",
        "lat": 35.8617,
        "lng": 139.6455,
        "country": "Japan"
    },
    {
        "rank": 392,
        "name": "Olimpia",
        "lat": -25.20974070364488,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 393,
        "name": "Al Shabab",
        "lat": 24.72367286423675,
        "lng": 46.7219,
        "country": "Saudi Arabia"
    },
    {
        "rank": 394,
        "name": "Instituto Atlético Central Córdoba",
        "lat": -31.380727135763244,
        "lng": -64.1833,
        "country": "Argentina"
    },
    {
        "rank": 395,
        "name": "Nasaf Qarshi",
        "lat": 38.8583,
        "lng": 65.7889,
        "country": "Uzbekistan"
    },
    {
        "rank": 396,
        "name": "Leicester City",
        "lat": 52.6205,
        "lng": -1.1424,
        "country": "England"
    },
    {
        "rank": 397,
        "name": "Cardiff City",
        "lat": 51.4816,
        "lng": -3.1791,
        "country": "England"
    },
    {
        "rank": 398,
        "name": "Yokohama F. Marinos",
        "lat": 35.4437,
        "lng": 139.638,
        "country": "Japan"
    },
    {
        "rank": 399,
        "name": "Rosenborg BK",
        "lat": 63.4305,
        "lng": 10.3951,
        "country": "Norway"
    },
    {
        "rank": 400,
        "name": "Győri ETO",
        "lat": 47.6875,
        "lng": 17.6504,
        "country": "Hungary"
    },
    {
        "rank": 401,
        "name": "Rigas Futbola skola",
        "lat": 56.985686432118364,
        "lng": 24.1056,
        "country": "Latvia"
    },
    {
        "rank": 402,
        "name": "Rubin Kazan",
        "lat": 55.7887,
        "lng": 49.1221,
        "country": "Russia"
    },
    {
        "rank": 403,
        "name": "Atlético Goianiense",
        "lat": -16.668913567881628,
        "lng": -49.2648,
        "country": "Brazil"
    },
    {
        "rank": 404,
        "name": "Real Zaragoza",
        "lat": 41.6488,
        "lng": -0.8891,
        "country": "Spain"
    },
    {
        "rank": 405,
        "name": "Spartak Trnava",
        "lat": 48.3774,
        "lng": 17.5906,
        "country": "Slovakia"
    },
    {
        "rank": 406,
        "name": "Hull City",
        "lat": 53.7457,
        "lng": -0.3688,
        "country": "England"
    },
    {
        "rank": 407,
        "name": "Sassuolo",
        "lat": 44.5436,
        "lng": 10.7794,
        "country": "Italy"
    },
    {
        "rank": 408,
        "name": "Arouca",
        "lat": 40.9317,
        "lng": -8.2439,
        "country": "Portugal"
    },
    {
        "rank": 409,
        "name": "AL Ahed",
        "lat": 33.8938,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 410,
        "name": "Blackpool",
        "lat": 53.8048,
        "lng": -3.0503,
        "country": "England"
    },
    {
        "rank": 411,
        "name": "Nordsjælland",
        "lat": 55.9167,
        "lng": 12.0833,
        "country": "Denmark"
    },
    {
        "rank": 412,
        "name": "Lorient",
        "lat": 47.7482,
        "lng": -3.367,
        "country": "France"
    },
    {
        "rank": 413,
        "name": "St Patrick's",
        "lat": 53.35108643211838,
        "lng": -6.2489,
        "country": "Ireland"
    },
    {
        "rank": 414,
        "name": "Wolfsberger AC",
        "lat": 46.6222,
        "lng": 14.3114,
        "country": "Austria"
    },
    {
        "rank": 415,
        "name": "FUS Rabat",
        "lat": 34.03888643211837,
        "lng": -6.8416,
        "country": "Morocco"
    },
    {
        "rank": 416,
        "name": "Coton Sport",
        "lat": 9.3077,
        "lng": 13.1054,
        "country": "Cameroon"
    },
    {
        "rank": 417,
        "name": "Anorthosis",
        "lat": 35.221572864236755,
        "lng": 33.3823,
        "country": "Cyprus"
    },
    {
        "rank": 418,
        "name": "Estoril",
        "lat": 38.7071,
        "lng": -9.3983,
        "country": "Portugal"
    },
    {
        "rank": 419,
        "name": "Kasımpaşa",
        "lat": 41.08414572847352,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 420,
        "name": "Motagua",
        "lat": 14.090286432118376,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 421,
        "name": "Al-Ain FC",
        "lat": 24.2092,
        "lng": 55.761,
        "country": "United Arab Emirates"
    },
    {
        "rank": 422,
        "name": "Luton Town F.C.",
        "lat": 51.8843,
        "lng": -0.4316,
        "country": "England"
    },
    {
        "rank": 423,
        "name": "Derry City",
        "lat": 54.9966,
        "lng": -7.3086,
        "country": "Ireland"
    },
    {
        "rank": 424,
        "name": "Tenerife",
        "lat": 28.2916,
        "lng": -16.6291,
        "country": "Spain"
    },
    {
        "rank": 425,
        "name": "Borac Banja Luka",
        "lat": 44.7681,
        "lng": 17.1903,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 426,
        "name": "Los Angeles FC",
        "lat": 34.0118,
        "lng": -118.2437,
        "country": "United States"
    },
    {
        "rank": 427,
        "name": "BATE Borisov",
        "lat": 54.1818,
        "lng": 27.5418,
        "country": "Belarus"
    },
    {
        "rank": 428,
        "name": "SC Bastia",
        "lat": 42.7,
        "lng": 9.45,
        "country": "France"
    },
    {
        "rank": 429,
        "name": "Connah's Quay",
        "lat": 53.2167,
        "lng": -3.05,
        "country": "Wales"
    },
    {
        "rank": 430,
        "name": "Austria Wien",
        "lat": 48.2092,
        "lng": 16.3728,
        "country": "Austria"
    },
    {
        "rank": 431,
        "name": "Orense SC",
        "lat": -3.2669,
        "lng": -79.9553,
        "country": "Ecuador"
    },
    {
        "rank": 432,
        "name": "Samsunspor",
        "lat": 41.2867,
        "lng": 36.33,
        "country": "Turkey"
    },
    {
        "rank": 433,
        "name": "Seattle Sounders FC",
        "lat": 47.5951,
        "lng": -122.3316,
        "country": "United States"
    },
    {
        "rank": 434,
        "name": "Coquimbo Unido",
        "lat": -29.9533,
        "lng": -71.3436,
        "country": "Chile"
    },
    {
        "rank": 435,
        "name": "CS Petrocub",
        "lat": 47.0168,
        "lng": 28.8369,
        "country": "Moldova"
    },
    {
        "rank": 436,
        "name": "Sporting Fingal",
        "lat": 53.369072864236756,
        "lng": -6.2489,
        "country": "Ireland"
    },
    {
        "rank": 437,
        "name": "FK Akhmat Grozny",
        "lat": 43.3117,
        "lng": 45.6986,
        "country": "Russia"
    },
    {
        "rank": 438,
        "name": "Koper",
        "lat": 45.5469,
        "lng": 13.7301,
        "country": "Slovenia"
    },
    {
        "rank": 439,
        "name": "Le Havre AC",
        "lat": 49.4944,
        "lng": 0.1079,
        "country": "France"
    },
    {
        "rank": 440,
        "name": "Sillamäe Kalev",
        "lat": 59.3969,
        "lng": 27.7631,
        "country": "Estonia"
    },
    {
        "rank": 441,
        "name": "Alianza FC",
        "lat": 13.6929,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 442,
        "name": "Defensor Sporting",
        "lat": -34.84014070364489,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 443,
        "name": "Sporting Charleroi",
        "lat": 50.4108,
        "lng": 4.4446,
        "country": "Belgium"
    },
    {
        "rank": 444,
        "name": "Al-Wehdat SC",
        "lat": 31.9462,
        "lng": 35.9284,
        "country": "Jordan"
    },
    {
        "rank": 445,
        "name": "Atlético San Luis",
        "lat": 22.1565,
        "lng": -100.9855,
        "country": "Mexico"
    },
    {
        "rank": 446,
        "name": "FC Arda Kardzhali",
        "lat": 41.65,
        "lng": 25.3667,
        "country": "Bulgaria"
    },
    {
        "rank": 447,
        "name": "Moreirense",
        "lat": 41.3583,
        "lng": -8.3467,
        "country": "Portugal"
    },
    {
        "rank": 448,
        "name": "Al Wahda",
        "lat": 24.227186432118373,
        "lng": 55.761,
        "country": "United Arab Emirates"
    },
    {
        "rank": 449,
        "name": "Criciúma",
        "lat": -28.6778,
        "lng": -49.3692,
        "country": "Brazil"
    },
    {
        "rank": 450,
        "name": "KF Shkendija",
        "lat": 41.9914,
        "lng": 20.9619,
        "country": "Macedonia"
    },
    {
        "rank": 451,
        "name": "Pogoń Szczecin",
        "lat": 53.4285,
        "lng": 14.5528,
        "country": "Poland"
    },
    {
        "rank": 452,
        "name": "Brasilia",
        "lat": -15.7939,
        "lng": -47.8828,
        "country": "Brazil"
    },
    {
        "rank": 453,
        "name": "Cusco FC",
        "lat": -13.5319,
        "lng": -71.9675,
        "country": "Peru"
    },
    {
        "rank": 454,
        "name": "Blackburn Rovers F.C.",
        "lat": 53.7284,
        "lng": -2.4894,
        "country": "England"
    },
    {
        "rank": 455,
        "name": "CS Sfaxien",
        "lat": 34.7406,
        "lng": 10.7603,
        "country": "Tunisia"
    },
    {
        "rank": 456,
        "name": "Djoliba AC",
        "lat": 12.657186432118374,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 457,
        "name": "Vojvodina",
        "lat": 45.2671,
        "lng": 19.8335,
        "country": "Serbia"
    },
    {
        "rank": 458,
        "name": "Gimcheon Sangmu FC",
        "lat": 36.1333,
        "lng": 128.1167,
        "country": "South Korea"
    },
    {
        "rank": 459,
        "name": "Slovan Liberec",
        "lat": 50.7663,
        "lng": 15.0543,
        "country": "Czech Republic"
    },
    {
        "rank": 460,
        "name": "Rapid Wien",
        "lat": 48.22718643211838,
        "lng": 16.3728,
        "country": "Austria"
    },
    {
        "rank": 461,
        "name": "Paksi SE",
        "lat": 46.6256,
        "lng": 18.8553,
        "country": "Hungary"
    },
    {
        "rank": 462,
        "name": "Olympiakos Volos",
        "lat": 39.364,
        "lng": 22.9444,
        "country": "Greece"
    },
    {
        "rank": 463,
        "name": "PEC Zwolle",
        "lat": 52.5044,
        "lng": 6.096,
        "country": "Netherlands"
    },
    {
        "rank": 464,
        "name": "Kryvbas",
        "lat": 47.9077,
        "lng": 33.3926,
        "country": "Ukraine"
    },
    {
        "rank": 465,
        "name": "Novara",
        "lat": 45.4431,
        "lng": 8.6219,
        "country": "Italy"
    },
    {
        "rank": 466,
        "name": "Colombe du Dja et Lobo",
        "lat": 3.8678,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 467,
        "name": "FC Vaslui",
        "lat": 46.6333,
        "lng": 27.7333,
        "country": "Romania"
    },
    {
        "rank": 468,
        "name": "Casa Pia",
        "lat": 38.72508643211838,
        "lng": -9.3983,
        "country": "Portugal"
    },
    {
        "rank": 469,
        "name": "Siena",
        "lat": 43.3188,
        "lng": 11.3307,
        "country": "Italy"
    },
    {
        "rank": 470,
        "name": "CS Constantine",
        "lat": 36.365,
        "lng": 6.6147,
        "country": "Algeria"
    },
    {
        "rank": 471,
        "name": "Eintracht Braunschweig",
        "lat": 52.2689,
        "lng": 10.5268,
        "country": "Germany"
    },
    {
        "rank": 472,
        "name": "Coritiba",
        "lat": -25.419213567881627,
        "lng": -49.24,
        "country": "Brazil"
    },
    {
        "rank": 473,
        "name": "Club Tijuana",
        "lat": 32.5027,
        "lng": -117.0382,
        "country": "Mexico"
    },
    {
        "rank": 474,
        "name": "Hradec Králové",
        "lat": 50.2092,
        "lng": 15.8327,
        "country": "Czech Republic"
    },
    {
        "rank": 475,
        "name": "Jagiellonia Białystok",
        "lat": 53.1325,
        "lng": 23.1688,
        "country": "Poland"
    },
    {
        "rank": 476,
        "name": "Ilves",
        "lat": 61.4991,
        "lng": 23.7871,
        "country": "Finland"
    },
    {
        "rank": 477,
        "name": "Pohang Steelers",
        "lat": 36.019,
        "lng": 129.3435,
        "country": "South Korea"
    },
    {
        "rank": 478,
        "name": "Tiraspol",
        "lat": 46.8403,
        "lng": 29.6433,
        "country": "Moldova"
    },
    {
        "rank": 479,
        "name": "Polissya Zhytomyr",
        "lat": 50.2649,
        "lng": 28.6767,
        "country": "Ukraine"
    },
    {
        "rank": 480,
        "name": "Club Africain",
        "lat": 36.82968643211838,
        "lng": 10.1761,
        "country": "Tunisia"
    },
    {
        "rank": 481,
        "name": "Orlando City",
        "lat": 28.5383,
        "lng": -81.3792,
        "country": "United States"
    },
    {
        "rank": 482,
        "name": "Sport Recife",
        "lat": -8.0476,
        "lng": -34.877,
        "country": "Brazil"
    },
    {
        "rank": 483,
        "name": "Ponte Preta",
        "lat": -22.9035,
        "lng": -47.0626,
        "country": "Brazil"
    },
    {
        "rank": 484,
        "name": "Real Estelí",
        "lat": 13.0939,
        "lng": -86.3531,
        "country": "Nicaragua"
    },
    {
        "rank": 485,
        "name": "Bidvest Wits",
        "lat": -26.186113567881627,
        "lng": 28.0473,
        "country": "South Africa"
    },
    {
        "rank": 486,
        "name": "FC Milsami Orhei",
        "lat": 47.3833,
        "lng": 28.8167,
        "country": "Moldova"
    },
    {
        "rank": 487,
        "name": "SC Paderborn 07",
        "lat": 51.7189,
        "lng": 8.7575,
        "country": "Germany"
    },
    {
        "rank": 488,
        "name": "Philadelphia Union",
        "lat": 39.8318,
        "lng": -75.378,
        "country": "United States"
    },
    {
        "rank": 489,
        "name": "Granada",
        "lat": 37.1773,
        "lng": -3.5986,
        "country": "Spain"
    },
    {
        "rank": 490,
        "name": "Rio Ave",
        "lat": 41.3605,
        "lng": -8.7394,
        "country": "Portugal"
    },
    {
        "rank": 491,
        "name": "FK Desna Chernihiv",
        "lat": 51.4982,
        "lng": 31.2893,
        "country": "Ukraine"
    },
    {
        "rank": 492,
        "name": "Tobol Kostanay",
        "lat": 53.2144,
        "lng": 63.6246,
        "country": "Kazakhstan"
    },
    {
        "rank": 493,
        "name": "Osijek",
        "lat": 45.555,
        "lng": 18.6955,
        "country": "Croatia"
    },
    {
        "rank": 494,
        "name": "Mushuc Runa SC",
        "lat": -1.6762,
        "lng": -78.6569,
        "country": "Ecuador"
    },
    {
        "rank": 495,
        "name": "FC Seoul",
        "lat": 37.5665,
        "lng": 126.978,
        "country": "South Korea"
    },
    {
        "rank": 496,
        "name": "Queens Park Rangers",
        "lat": 51.5092,
        "lng": -0.2319,
        "country": "England"
    },
    {
        "rank": 497,
        "name": "Nîmes Olympique",
        "lat": 43.8367,
        "lng": 4.3601,
        "country": "France"
    },
    {
        "rank": 498,
        "name": "Hibernian",
        "lat": 55.9619,
        "lng": -3.165,
        "country": "Scotland"
    },
    {
        "rank": 499,
        "name": "Nueva Chicago",
        "lat": -34.62871356788163,
        "lng": -58.392799999999994,
        "country": "Argentina"
    },
    {
        "rank": 500,
        "name": "Clermont Foot",
        "lat": 45.7797,
        "lng": 3.0863,
        "country": "France"
    },
    {
        "rank": 501,
        "name": "Málaga",
        "lat": 36.7213,
        "lng": -4.4214,
        "country": "Spain"
    },
    {
        "rank": 502,
        "name": "Topolski Sportski Club",
        "lat": 44.84077286423676,
        "lng": 20.4781,
        "country": "Serbia"
    },
    {
        "rank": 503,
        "name": "Gimnasia y Esgrima La Plata",
        "lat": -34.90351356788163,
        "lng": -57.9545,
        "country": "Argentina"
    },
    {
        "rank": 504,
        "name": "Universidad Católica",
        "lat": -33.39494070364489,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 505,
        "name": "Deportivo Pasto",
        "lat": 1.2136,
        "lng": -77.2811,
        "country": "Colombia"
    },
    {
        "rank": 506,
        "name": "SC Heerenveen",
        "lat": 52.9667,
        "lng": 5.9167,
        "country": "Netherlands"
    },
    {
        "rank": 507,
        "name": "BK Häcken",
        "lat": 57.6869,
        "lng": 11.9865,
        "country": "Sweden"
    },
    {
        "rank": 508,
        "name": "Ipswich Town F.C.",
        "lat": 52.0548,
        "lng": 1.144,
        "country": "England"
    },
    {
        "rank": 509,
        "name": "Middlesbrough",
        "lat": 54.5742,
        "lng": -1.2351,
        "country": "England"
    },
    {
        "rank": 510,
        "name": "Lugano",
        "lat": 46.0037,
        "lng": 8.9511,
        "country": "Switzerland"
    },
    {
        "rank": 511,
        "name": "Žilina",
        "lat": 49.2232,
        "lng": 18.7395,
        "country": "Slovakia"
    },
    {
        "rank": 512,
        "name": "Iskra-Stal",
        "lat": 47.2456,
        "lng": 28.6833,
        "country": "Moldova"
    },
    {
        "rank": 513,
        "name": "San Martín de Tucumán",
        "lat": -26.790313567881626,
        "lng": -65.2176,
        "country": "Argentina"
    },
    {
        "rank": 514,
        "name": "Emelec",
        "lat": -2.1347271357632516,
        "lng": -79.93530000000001,
        "country": "Ecuador"
    },
    {
        "rank": 515,
        "name": "Honka",
        "lat": 60.2415,
        "lng": 24.6575,
        "country": "Finland"
    },
    {
        "rank": 516,
        "name": "FK Sarajevo",
        "lat": 43.8563,
        "lng": 18.4131,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 517,
        "name": "FK Rostov",
        "lat": 47.2357,
        "lng": 39.7015,
        "country": "Russia"
    },
    {
        "rank": 518,
        "name": "El Nacional",
        "lat": -0.16614070364487618,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 519,
        "name": "Sarmiento",
        "lat": -34.664622548755155,
        "lng": -58.390958740523054,
        "country": "Argentina"
    },
    {
        "rank": 520,
        "name": "Nancy",
        "lat": 48.6921,
        "lng": 6.1844,
        "country": "France"
    },
    {
        "rank": 521,
        "name": "Deportivo Cuenca",
        "lat": -2.9001,
        "lng": -79.0059,
        "country": "Ecuador"
    },
    {
        "rank": 522,
        "name": "Evian TG",
        "lat": 46.4,
        "lng": 6.6333,
        "country": "France"
    },
    {
        "rank": 523,
        "name": "Delfin SC",
        "lat": -0.35,
        "lng": -79.95,
        "country": "Ecuador"
    },
    {
        "rank": 524,
        "name": "Racing Club",
        "lat": -34.82215427152652,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 525,
        "name": "GFC Ajaccio",
        "lat": 41.9194,
        "lng": 8.7386,
        "country": "France"
    },
    {
        "rank": 526,
        "name": "Mohun Bagan Super Giant",
        "lat": 22.5726,
        "lng": 88.3639,
        "country": "India"
    },
    {
        "rank": 527,
        "name": "Santo André",
        "lat": -23.6528,
        "lng": -46.5317,
        "country": "Brazil"
    },
    {
        "rank": 528,
        "name": "América Mineiro",
        "lat": -19.886727135763252,
        "lng": -43.9378,
        "country": "Brazil"
    },
    {
        "rank": 529,
        "name": "Pakhtakor Tashkent",
        "lat": 41.2995,
        "lng": 69.2401,
        "country": "Uzbekistan"
    },
    {
        "rank": 530,
        "name": "Saint-Eloi Lupopo",
        "lat": -11.642613567881625,
        "lng": 27.4794,
        "country": "Congo DR"
    },
    {
        "rank": 531,
        "name": "FC Cincinnati",
        "lat": 39.1031,
        "lng": -84.512,
        "country": "United States"
    },
    {
        "rank": 532,
        "name": "Rapid Bucureşti",
        "lat": 44.465886432118374,
        "lng": 26.0979,
        "country": "Romania"
    },
    {
        "rank": 533,
        "name": "FC Inter Turku (FIN)",
        "lat": 60.4518,
        "lng": 22.2666,
        "country": "Finland"
    },
    {
        "rank": 534,
        "name": "Remo Stars",
        "lat": 7.3775,
        "lng": 3.947,
        "country": "Nigeria"
    },
    {
        "rank": 535,
        "name": "KV Mechelen",
        "lat": 51.03,
        "lng": 4.4767,
        "country": "Belgium"
    },
    {
        "rank": 536,
        "name": "Unión Santa Fe",
        "lat": -31.6107,
        "lng": -60.702,
        "country": "Argentina"
    },
    {
        "rank": 537,
        "name": "Aktobe",
        "lat": 50.2839,
        "lng": 57.2072,
        "country": "Kazakhstan"
    },
    {
        "rank": 538,
        "name": "Ordabasy Shymkent",
        "lat": 42.3,
        "lng": 69.6,
        "country": "Kazakhstan"
    },
    {
        "rank": 539,
        "name": "Figueirense",
        "lat": -27.5969,
        "lng": -48.5495,
        "country": "Brazil"
    },
    {
        "rank": 540,
        "name": "Heart of Midlothian",
        "lat": 55.9389,
        "lng": -3.2319,
        "country": "Scotland"
    },
    {
        "rank": 541,
        "name": "Metalurh Donetsk",
        "lat": 48.033886432118386,
        "lng": 37.8028,
        "country": "Ukraine"
    },
    {
        "rank": 542,
        "name": "Bangor City",
        "lat": 53.228,
        "lng": -4.132,
        "country": "Wales"
    },
    {
        "rank": 543,
        "name": "Al Taawon",
        "lat": 24.4667,
        "lng": 46.9833,
        "country": "Saudi Arabia"
    },
    {
        "rank": 544,
        "name": "Sunderland",
        "lat": 54.9069,
        "lng": -1.3838,
        "country": "England"
    },
    {
        "rank": 545,
        "name": "AL Ansar SC",
        "lat": 33.91178643211837,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 546,
        "name": "Águila",
        "lat": 13.710886432118373,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 547,
        "name": "Reading",
        "lat": 51.4543,
        "lng": -0.9781,
        "country": "England"
    },
    {
        "rank": 548,
        "name": "Angers",
        "lat": 47.4739,
        "lng": -0.557,
        "country": "France"
    },
    {
        "rank": 549,
        "name": "Hércules",
        "lat": 38.346,
        "lng": -0.489,
        "country": "Spain"
    },
    {
        "rank": 550,
        "name": "Dempo SC",
        "lat": 15.2993,
        "lng": 74.124,
        "country": "India"
    },
    {
        "rank": 551,
        "name": "Al Masry",
        "lat": 31.2001,
        "lng": 29.9187,
        "country": "Egypt"
    },
    {
        "rank": 552,
        "name": "Diriangén FC",
        "lat": 11.8785,
        "lng": -86.2392,
        "country": "Nicaragua"
    },
    {
        "rank": 553,
        "name": "Alanyaspor",
        "lat": 36.5444,
        "lng": 31.9956,
        "country": "Turkey"
    },
    {
        "rank": 554,
        "name": "Dolphins FC",
        "lat": 9.0765,
        "lng": 7.3986,
        "country": "Nigeria"
    },
    {
        "rank": 555,
        "name": "FC Zürich",
        "lat": 47.3769,
        "lng": 8.5417,
        "country": "Switzerland"
    },
    {
        "rank": 556,
        "name": "Cienciano",
        "lat": -13.513913567881625,
        "lng": -71.9675,
        "country": "Peru"
    },
    {
        "rank": 557,
        "name": "Hannover 96",
        "lat": 52.3609,
        "lng": 9.7326,
        "country": "Germany"
    },
    {
        "rank": 558,
        "name": "Isloch",
        "lat": 52.9072,
        "lng": 27.5863,
        "country": "Belarus"
    },
    {
        "rank": 559,
        "name": "Saint-Étienne",
        "lat": 45.4397,
        "lng": 4.3872,
        "country": "France"
    },
    {
        "rank": 560,
        "name": "Čukarički",
        "lat": 44.85875929635513,
        "lng": 20.4781,
        "country": "Serbia"
    },
    {
        "rank": 561,
        "name": "Portsmouth",
        "lat": 50.796,
        "lng": -1.0677,
        "country": "England"
    },
    {
        "rank": 562,
        "name": "Shelbourne",
        "lat": 53.387059296355126,
        "lng": -6.2489,
        "country": "Ireland"
    },
    {
        "rank": 563,
        "name": "Cerezo Osaka",
        "lat": 34.70808643211838,
        "lng": 135.1956,
        "country": "Japan"
    },
    {
        "rank": 564,
        "name": "Gwangju FC",
        "lat": 35.1595,
        "lng": 126.8526,
        "country": "South Korea"
    },
    {
        "rank": 565,
        "name": "Stellenbosch FC",
        "lat": -33.9249,
        "lng": 18.8602,
        "country": "South Africa"
    },
    {
        "rank": 566,
        "name": "El Jaish (Doha)",
        "lat": 25.311972864236747,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 567,
        "name": "Mount Pleasant FC",
        "lat": 18.0079,
        "lng": -76.7198,
        "country": "Jamaica"
    },
    {
        "rank": 568,
        "name": "FC Brest",
        "lat": 52.0976,
        "lng": 23.734,
        "country": "Belarus"
    },
    {
        "rank": 569,
        "name": "Motema Pembe",
        "lat": -4.423913567881626,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 570,
        "name": "Amiens SC",
        "lat": 49.8951,
        "lng": 2.2956,
        "country": "France"
    },
    {
        "rank": 571,
        "name": "Sportivo Ameliano",
        "lat": -25.191754271526506,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 572,
        "name": "Krylya Sovetov Samara",
        "lat": 53.2415,
        "lng": 50.2212,
        "country": "Russia"
    },
    {
        "rank": 573,
        "name": "FC Ural",
        "lat": 56.8431,
        "lng": 60.6454,
        "country": "Russia"
    },
    {
        "rank": 574,
        "name": "Atlas",
        "lat": 20.677686432118374,
        "lng": -103.3496,
        "country": "Mexico"
    },
    {
        "rank": 575,
        "name": "Sharjah Cultural Club",
        "lat": 25.3463,
        "lng": 55.4209,
        "country": "United Arab Emirates"
    },
    {
        "rank": 576,
        "name": "Gangwon FC",
        "lat": 37.7513,
        "lng": 128.8784,
        "country": "South Korea"
    },
    {
        "rank": 577,
        "name": "Banfield",
        "lat": -34.7444,
        "lng": -58.3964,
        "country": "Argentina"
    },
    {
        "rank": 578,
        "name": "Metz",
        "lat": 49.1193,
        "lng": 6.1757,
        "country": "France"
    },
    {
        "rank": 579,
        "name": "Everton CD",
        "lat": -33.0458,
        "lng": -71.6197,
        "country": "Chile"
    },
    {
        "rank": 580,
        "name": "Gil Vicente FC",
        "lat": 41.569086432118375,
        "lng": -8.4281,
        "country": "Portugal"
    },
    {
        "rank": 581,
        "name": "Audax Italiano La Florida",
        "lat": -33.5167,
        "lng": -70.5989,
        "country": "Chile"
    },
    {
        "rank": 582,
        "name": "GOL Gohar Sirjan FC",
        "lat": 29.4528,
        "lng": 55.6814,
        "country": "Iran"
    },
    {
        "rank": 583,
        "name": "Persib Bandung",
        "lat": -6.9175,
        "lng": 107.6191,
        "country": "Indonesia"
    },
    {
        "rank": 584,
        "name": "Guarani FC",
        "lat": -23.0619,
        "lng": -47.4917,
        "country": "Brazil"
    },
    {
        "rank": 585,
        "name": "Antigua Guatemala",
        "lat": 14.5586,
        "lng": -90.7344,
        "country": "Guatemala"
    },
    {
        "rank": 586,
        "name": "CSD Comunicaciones",
        "lat": 14.652886432118375,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 587,
        "name": "Águilas Doradas",
        "lat": 5.088386432118375,
        "lng": -75.51380000000002,
        "country": "Colombia"
    },
    {
        "rank": 588,
        "name": "Marathón",
        "lat": 15.5057,
        "lng": -88.0251,
        "country": "Honduras"
    },
    {
        "rank": 589,
        "name": "All Boys",
        "lat": -34.610727135763256,
        "lng": -58.392799999999994,
        "country": "Argentina"
    },
    {
        "rank": 590,
        "name": "USM Alger",
        "lat": 36.791882861431475,
        "lng": 3.0516540890526445,
        "country": "Algeria"
    },
    {
        "rank": 591,
        "name": "ES Sétif",
        "lat": 36.1906,
        "lng": 5.4098,
        "country": "Algeria"
    },
    {
        "rank": 592,
        "name": "Deportivo Heredia",
        "lat": 14.670872864236753,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 593,
        "name": "Konyaspor",
        "lat": 37.8667,
        "lng": 32.4833,
        "country": "Turkey"
    },
    {
        "rank": 594,
        "name": "Atlético Rafaela",
        "lat": -31.25,
        "lng": -61.4833,
        "country": "Argentina"
    },
    {
        "rank": 595,
        "name": "Bordeaux",
        "lat": 44.8378,
        "lng": -0.5792,
        "country": "France"
    },
    {
        "rank": 596,
        "name": "Nacional Potosí",
        "lat": -19.5723,
        "lng": -65.755,
        "country": "Bolivia"
    },
    {
        "rank": 597,
        "name": "Melbourne City FC",
        "lat": -37.8253,
        "lng": 144.9831,
        "country": "Australia"
    },
    {
        "rank": 598,
        "name": "Kaiserslautern",
        "lat": 49.4431,
        "lng": 7.769,
        "country": "Germany"
    },
    {
        "rank": 599,
        "name": "Muangthong United",
        "lat": 13.9167,
        "lng": 100.5167,
        "country": "Thailand"
    },
    {
        "rank": 600,
        "name": "Port F.C.",
        "lat": 13.774286432118377,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 601,
        "name": "FC St. Gallen 1879",
        "lat": 47.4245,
        "lng": 9.3767,
        "country": "Switzerland"
    },
    {
        "rank": 602,
        "name": "Enyimba",
        "lat": 5.4527,
        "lng": 7.5248,
        "country": "Nigeria"
    },
    {
        "rank": 603,
        "name": "Dynamos",
        "lat": -17.8252,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 604,
        "name": "Fatih Karagümrük",
        "lat": 41.10213216059189,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 605,
        "name": "Bala Town FC",
        "lat": 52.9116,
        "lng": -3.5979,
        "country": "Wales"
    },
    {
        "rank": 606,
        "name": "Huachipato",
        "lat": -36.7265,
        "lng": -73.1134,
        "country": "Chile"
    },
    {
        "rank": 607,
        "name": "Larne FC",
        "lat": 54.8561,
        "lng": -5.8108,
        "country": "Northern Ireland"
    },
    {
        "rank": 608,
        "name": "Cercle Brugge",
        "lat": 51.22648643211837,
        "lng": 3.2245,
        "country": "Belgium"
    },
    {
        "rank": 609,
        "name": "SK Sigma Olomouc",
        "lat": 49.5938,
        "lng": 17.2509,
        "country": "Czech Republic"
    },
    {
        "rank": 610,
        "name": "Moskva",
        "lat": 55.82774572847351,
        "lng": 37.6176,
        "country": "Russia"
    },
    {
        "rank": 611,
        "name": "FC Ruh Brest",
        "lat": 52.11558643211838,
        "lng": 23.734,
        "country": "Belarus"
    },
    {
        "rank": 612,
        "name": "Crotone",
        "lat": 39.0847,
        "lng": 17.1267,
        "country": "Italy"
    },
    {
        "rank": 613,
        "name": "Al Wasl",
        "lat": 25.22278643211837,
        "lng": 55.27080000000001,
        "country": "United Arab Emirates"
    },
    {
        "rank": 614,
        "name": "Guingamp",
        "lat": 48.5597,
        "lng": -3.1497,
        "country": "France"
    },
    {
        "rank": 615,
        "name": "Al-Faisaly SC Amman",
        "lat": 31.96418643211838,
        "lng": 35.92840000000001,
        "country": "Jordan"
    },
    {
        "rank": 616,
        "name": "Neftçi",
        "lat": 40.4093,
        "lng": 49.8671,
        "country": "Azerbaijan"
    },
    {
        "rank": 617,
        "name": "Gamba Osaka",
        "lat": 34.72607286423675,
        "lng": 135.1956,
        "country": "Japan"
    },
    {
        "rank": 618,
        "name": "Stade Tunisien",
        "lat": 36.847672864236756,
        "lng": 10.1761,
        "country": "Tunisia"
    },
    {
        "rank": 619,
        "name": "Botev Plovdiv",
        "lat": 42.1354,
        "lng": 24.7453,
        "country": "Bulgaria"
    },
    {
        "rank": 620,
        "name": "FC CSKA 1948 Sofia",
        "lat": 42.73107286423675,
        "lng": 23.3253,
        "country": "Bulgaria"
    },
    {
        "rank": 621,
        "name": "FC Platinum",
        "lat": -20.1547,
        "lng": 30.9754,
        "country": "Zimbabwe"
    },
    {
        "rank": 622,
        "name": "Asociación Deportiva Tarma (ADT)",
        "lat": -11.4139,
        "lng": -75.6889,
        "country": "Peru"
    },
    {
        "rank": 623,
        "name": "Avaí FC",
        "lat": -27.578913567881628,
        "lng": -48.5495,
        "country": "Brazil"
    },
    {
        "rank": 624,
        "name": "Defence Force FC",
        "lat": 10.6918,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 625,
        "name": "Nagoya Grampus Eight",
        "lat": 35.1815,
        "lng": 136.9066,
        "country": "Japan"
    },
    {
        "rank": 626,
        "name": "Watford",
        "lat": 51.6498,
        "lng": -0.4013,
        "country": "England"
    },
    {
        "rank": 627,
        "name": "Santa Cruz",
        "lat": -8.029613567881626,
        "lng": -34.877,
        "country": "Brazil"
    },
    {
        "rank": 628,
        "name": "VPS",
        "lat": 65.0124,
        "lng": 25.4681,
        "country": "Finland"
    },
    {
        "rank": 629,
        "name": "Boston River",
        "lat": -34.80416783940815,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 630,
        "name": "Viitorul Constanţa",
        "lat": 44.1598,
        "lng": 28.6348,
        "country": "Romania"
    },
    {
        "rank": 631,
        "name": "Kayserispor",
        "lat": 38.7369,
        "lng": 35.4906,
        "country": "Turkey"
    },
    {
        "rank": 632,
        "name": "Olympic Club de Safi",
        "lat": 32.2994,
        "lng": -9.2372,
        "country": "Morocco"
    },
    {
        "rank": 633,
        "name": "Paradou AC",
        "lat": 36.809869293549845,
        "lng": 3.0516540890526445,
        "country": "Algeria"
    },
    {
        "rank": 634,
        "name": "Gunners",
        "lat": -17.80721356788162,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 635,
        "name": "Dinamo Tbilisi",
        "lat": 41.7151,
        "lng": 44.8271,
        "country": "Georgia"
    },
    {
        "rank": 636,
        "name": "Real España",
        "lat": 15.523686432118375,
        "lng": -88.0251,
        "country": "Honduras"
    },
    {
        "rank": 637,
        "name": "Inter Miami CF",
        "lat": 25.7753,
        "lng": -80.1901,
        "country": "United States"
    },
    {
        "rank": 638,
        "name": "Sagrada Esperança",
        "lat": -11.2027,
        "lng": 17.8739,
        "country": "Angola"
    },
    {
        "rank": 639,
        "name": "Amkar Perm'",
        "lat": 58.0105,
        "lng": 56.2502,
        "country": "Russia"
    },
    {
        "rank": 640,
        "name": "Foolad Khuzestan",
        "lat": 31.3183,
        "lng": 48.6706,
        "country": "Iran"
    },
    {
        "rank": 641,
        "name": "Hapoel Haifa",
        "lat": 32.811986432118374,
        "lng": 34.9896,
        "country": "Israel"
    },
    {
        "rank": 642,
        "name": "Farul Constanța",
        "lat": 44.177786432118374,
        "lng": 28.6348,
        "country": "Romania"
    },
    {
        "rank": 643,
        "name": "Gazişehir Gaziantep FK",
        "lat": 37.0662,
        "lng": 37.3781,
        "country": "Turkey"
    },
    {
        "rank": 644,
        "name": "Sportivo Trinidense",
        "lat": -25.17376783940813,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 645,
        "name": "Universitatea Cluj",
        "lat": 46.78468643211837,
        "lng": 23.5833,
        "country": "Romania"
    },
    {
        "rank": 646,
        "name": "Técnico Universitario",
        "lat": -1.8312,
        "lng": -78.1834,
        "country": "Ecuador"
    },
    {
        "rank": 647,
        "name": "Shakhtyor Soligorsk",
        "lat": 52.7878,
        "lng": 27.5433,
        "country": "Belarus"
    },
    {
        "rank": 648,
        "name": "Cerro Largo",
        "lat": -32.3705,
        "lng": -54.1775,
        "country": "Uruguay"
    },
    {
        "rank": 649,
        "name": "FK Zirka Kirovohrad",
        "lat": 48.5132,
        "lng": 32.2597,
        "country": "Ukraine"
    },
    {
        "rank": 650,
        "name": "Enugu Rangers",
        "lat": 6.5244,
        "lng": 7.5086,
        "country": "Nigeria"
    },
    {
        "rank": 651,
        "name": "Benevento",
        "lat": 41.1297,
        "lng": 14.7713,
        "country": "Italy"
    },
    {
        "rank": 652,
        "name": "Mahindra United",
        "lat": 19.076,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 653,
        "name": "Incheon United",
        "lat": 37.4563,
        "lng": 126.7052,
        "country": "South Korea"
    },
    {
        "rank": 654,
        "name": "Cobresal",
        "lat": -27.3668,
        "lng": -70.3323,
        "country": "Chile"
    },
    {
        "rank": 655,
        "name": "Rizespor",
        "lat": 41.0201,
        "lng": 40.5234,
        "country": "Turkey"
    },
    {
        "rank": 656,
        "name": "Westerlo",
        "lat": 51.0883,
        "lng": 4.9269,
        "country": "Belgium"
    },
    {
        "rank": 657,
        "name": "Alianza Atlético",
        "lat": -4.9571,
        "lng": -81.1143,
        "country": "Peru"
    },
    {
        "rank": 658,
        "name": "Plateau United",
        "lat": 9.2182,
        "lng": 9.5179,
        "country": "Nigeria"
    },
    {
        "rank": 659,
        "name": "Sampdoria",
        "lat": 44.43738643211837,
        "lng": 8.9582,
        "country": "Italy"
    },
    {
        "rank": 660,
        "name": "Kuban' Krasnodar",
        "lat": 45.05348643211838,
        "lng": 38.9753,
        "country": "Russia"
    },
    {
        "rank": 661,
        "name": "FC Dinamo Batumi",
        "lat": 41.6168,
        "lng": 41.6367,
        "country": "Georgia"
    },
    {
        "rank": 662,
        "name": "Le Mans",
        "lat": 47.996,
        "lng": 0.2073,
        "country": "France"
    },
    {
        "rank": 663,
        "name": "Rukh Vynnyky",
        "lat": 49.8326,
        "lng": 24.0297,
        "country": "Ukraine"
    },
    {
        "rank": 664,
        "name": "Xelajú",
        "lat": 14.8406,
        "lng": -91.5201,
        "country": "Guatemala"
    },
    {
        "rank": 665,
        "name": "Colón Santa Fe",
        "lat": -31.592713567881624,
        "lng": -60.702,
        "country": "Argentina"
    },
    {
        "rank": 666,
        "name": "JS Saoura",
        "lat": 31.6333,
        "lng": -2.2167,
        "country": "Algeria"
    },
    {
        "rank": 667,
        "name": "Bohemian FC",
        "lat": 53.4050457284735,
        "lng": -6.2489,
        "country": "Ireland"
    },
    {
        "rank": 668,
        "name": "River Plate PR",
        "lat": 18.4655,
        "lng": -66.1057,
        "country": "Puerto Rico"
    },
    {
        "rank": 669,
        "name": "NŠ Mura",
        "lat": 46.6611,
        "lng": 16.1697,
        "country": "Slovenia"
    },
    {
        "rank": 670,
        "name": "Joinville EC",
        "lat": -26.3044,
        "lng": -48.8487,
        "country": "Brazil"
    },
    {
        "rank": 671,
        "name": "AGF",
        "lat": 56.175186432118366,
        "lng": 10.210700000000001,
        "country": "Denmark"
    },
    {
        "rank": 672,
        "name": "Randers FC",
        "lat": 56.4607,
        "lng": 10.0369,
        "country": "Denmark"
    },
    {
        "rank": 673,
        "name": "Nejmeh SC",
        "lat": 33.929772864236746,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 674,
        "name": "ZESCO United",
        "lat": -12.8628,
        "lng": 28.1894,
        "country": "Zambia"
    },
    {
        "rank": 675,
        "name": "Querétaro",
        "lat": 20.5888,
        "lng": -100.3899,
        "country": "Mexico"
    },
    {
        "rank": 676,
        "name": "Daejeon Citizen",
        "lat": 36.3504,
        "lng": 127.3845,
        "country": "South Korea"
    },
    {
        "rank": 677,
        "name": "Luzern",
        "lat": 47.0502,
        "lng": 8.3093,
        "country": "Switzerland"
    },
    {
        "rank": 678,
        "name": "AS Réal Bamako",
        "lat": 12.67517286423675,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 679,
        "name": "Coban Imperial",
        "lat": 15.4781,
        "lng": -90.3706,
        "country": "Guatemala"
    },
    {
        "rank": 680,
        "name": "Club Atlético Grau",
        "lat": -4.939113567881626,
        "lng": -81.1143,
        "country": "Peru"
    },
    {
        "rank": 681,
        "name": "Lokomotiva",
        "lat": 45.83108643211837,
        "lng": 15.9775,
        "country": "Croatia"
    },
    {
        "rank": 682,
        "name": "FC Juárez",
        "lat": 31.7619,
        "lng": -106.485,
        "country": "Mexico"
    },
    {
        "rank": 683,
        "name": "BG Pathum United",
        "lat": 14.0208,
        "lng": 100.525,
        "country": "Thailand"
    },
    {
        "rank": 684,
        "name": "Al Qadsiah FC",
        "lat": 20.2759,
        "lng": 50.2089,
        "country": "Saudi Arabia"
    },
    {
        "rank": 685,
        "name": "Ñublense",
        "lat": -36.6053,
        "lng": -72.1036,
        "country": "Chile"
    },
    {
        "rank": 686,
        "name": "Saturn",
        "lat": 56.1184,
        "lng": 40.4078,
        "country": "Russia"
    },
    {
        "rank": 687,
        "name": "Fortuna Sittard",
        "lat": 50.9981,
        "lng": 5.8658,
        "country": "Netherlands"
    },
    {
        "rank": 688,
        "name": "Temperley",
        "lat": -34.7687,
        "lng": -58.3983,
        "country": "Argentina"
    },
    {
        "rank": 689,
        "name": "Arsenal de Sarandí",
        "lat": -34.6847,
        "lng": -58.3464,
        "country": "Argentina"
    },
    {
        "rank": 690,
        "name": "Power Dynamos",
        "lat": -12.844813567881626,
        "lng": 28.1894,
        "country": "Zambia"
    },
    {
        "rank": 691,
        "name": "Grenoble",
        "lat": 45.1885,
        "lng": 5.7245,
        "country": "France"
    },
    {
        "rank": 692,
        "name": "Beitar Jerusalem FC",
        "lat": 31.7683,
        "lng": 35.2137,
        "country": "Israel"
    },
    {
        "rank": 693,
        "name": "Piast Gliwice",
        "lat": 50.2945,
        "lng": 18.6714,
        "country": "Poland"
    },
    {
        "rank": 694,
        "name": "New York City FC",
        "lat": 40.8292,
        "lng": -73.9262,
        "country": "United States"
    },
    {
        "rank": 695,
        "name": "U.S. Salernitana 1919",
        "lat": 40.6824,
        "lng": 14.7681,
        "country": "Italy"
    },
    {
        "rank": 696,
        "name": "Kashiwa Reysol",
        "lat": 35.8617,
        "lng": 139.9431,
        "country": "Japan"
    },
    {
        "rank": 697,
        "name": "Bari",
        "lat": 41.1171,
        "lng": 16.8719,
        "country": "Italy"
    },
    {
        "rank": 698,
        "name": "FC Machida Zelvia",
        "lat": 35.5441,
        "lng": 139.4269,
        "country": "Japan"
    },
    {
        "rank": 699,
        "name": "Palermo",
        "lat": 38.1157,
        "lng": 13.3615,
        "country": "Italy"
    },
    {
        "rank": 700,
        "name": "Gazelle FC de Garoua",
        "lat": 9.325686432118374,
        "lng": 13.1054,
        "country": "Cameroon"
    },
    {
        "rank": 701,
        "name": "NK Bravo",
        "lat": 46.06938643211838,
        "lng": 14.506000000000002,
        "country": "Slovenia"
    },
    {
        "rank": 702,
        "name": "Al-Rayyan",
        "lat": 25.32995929635512,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 703,
        "name": "Sutjeska",
        "lat": 42.47818643211837,
        "lng": 19.2595,
        "country": "Montenegro"
    },
    {
        "rank": 704,
        "name": "Heracles",
        "lat": 52.24958643211838,
        "lng": 6.8357,
        "country": "Netherlands"
    },
    {
        "rank": 705,
        "name": "Eyüpspor",
        "lat": 41.12011859271028,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 706,
        "name": "Greuther Fürth",
        "lat": 49.4869,
        "lng": 10.9886,
        "country": "Germany"
    },
    {
        "rank": 707,
        "name": "AC Monza",
        "lat": 45.5845,
        "lng": 9.2744,
        "country": "Italy"
    },
    {
        "rank": 708,
        "name": "Astra Ploieşti",
        "lat": 44.9537,
        "lng": 26.0157,
        "country": "Romania"
    },
    {
        "rank": 709,
        "name": "ASO Chlef",
        "lat": 36.1654,
        "lng": 1.3347,
        "country": "Algeria"
    },
    {
        "rank": 710,
        "name": "MP Antalyaspor",
        "lat": 36.8969,
        "lng": 30.7133,
        "country": "Turkey"
    },
    {
        "rank": 711,
        "name": "FC Tokyo",
        "lat": 35.6762,
        "lng": 139.6503,
        "country": "Japan"
    },
    {
        "rank": 712,
        "name": "Motor Action",
        "lat": -17.789227135763248,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 713,
        "name": "Boulogne",
        "lat": 50.7264,
        "lng": 1.6147,
        "country": "France"
    },
    {
        "rank": 714,
        "name": "CS Alagoano AL",
        "lat": -9.6658,
        "lng": -35.735,
        "country": "Brazil"
    },
    {
        "rank": 715,
        "name": "AL Gharafa",
        "lat": 25.347945728473494,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 716,
        "name": "New York Red Bulls",
        "lat": 40.7357,
        "lng": -74.1502,
        "country": "United States"
    },
    {
        "rank": 717,
        "name": "Caen",
        "lat": 49.1829,
        "lng": -0.3707,
        "country": "France"
    },
    {
        "rank": 718,
        "name": "Asante Kotoko",
        "lat": 6.6885,
        "lng": -1.6244,
        "country": "Ghana"
    },
    {
        "rank": 719,
        "name": "Minnesota United",
        "lat": 44.9537,
        "lng": -93.1652,
        "country": "United States"
    },
    {
        "rank": 720,
        "name": "Radnički 1923 Kragujevac",
        "lat": 44.0165,
        "lng": 20.9114,
        "country": "Serbia"
    },
    {
        "rank": 721,
        "name": "Sint-Truiden",
        "lat": 50.8178,
        "lng": 5.1867,
        "country": "Belgium"
    },
    {
        "rank": 722,
        "name": "Sivasspor",
        "lat": 39.7477,
        "lng": 37.0179,
        "country": "Turkey"
    },
    {
        "rank": 723,
        "name": "FC Iberia 1999",
        "lat": 41.73308643211837,
        "lng": 44.8271,
        "country": "Georgia"
    },
    {
        "rank": 724,
        "name": "Independiente FBC (Campo Grande)",
        "lat": -25.155781407289755,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 725,
        "name": "Seinaejoen JK",
        "lat": 62.7903,
        "lng": 22.8404,
        "country": "Finland"
    },
    {
        "rank": 726,
        "name": "Grêmio Prudente",
        "lat": -22.1256,
        "lng": -51.3881,
        "country": "Brazil"
    },
    {
        "rank": 727,
        "name": "Danubio",
        "lat": -34.786181407289774,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 728,
        "name": "Ceramica Cleopatra",
        "lat": 30.074980562103917,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 729,
        "name": "Dila Gori",
        "lat": 41.9792,
        "lng": 44.1089,
        "country": "Georgia"
    },
    {
        "rank": 730,
        "name": "Gomel",
        "lat": 52.4345,
        "lng": 30.9754,
        "country": "Belarus"
    },
    {
        "rank": 731,
        "name": "Simba SC",
        "lat": -6.7924,
        "lng": 39.2083,
        "country": "Tanzania"
    },
    {
        "rank": 732,
        "name": "Pune FC",
        "lat": 18.5204,
        "lng": 73.8567,
        "country": "India"
    },
    {
        "rank": 733,
        "name": "AL Ettifaq FC",
        "lat": 26.3927,
        "lng": 50.0778,
        "country": "Saudi Arabia"
    },
    {
        "rank": 734,
        "name": "Unión La Calera",
        "lat": -32.7833,
        "lng": -71.2,
        "country": "Chile"
    },
    {
        "rank": 735,
        "name": "Nürnberg",
        "lat": 49.4521,
        "lng": 11.0767,
        "country": "Germany"
    },
    {
        "rank": 736,
        "name": "Alianza FC",
        "lat": 10.981886432118376,
        "lng": -74.7964,
        "country": "Colombia"
    },
    {
        "rank": 737,
        "name": "Zimbru",
        "lat": 47.076672864236755,
        "lng": 28.8659,
        "country": "Moldova"
    },
    {
        "rank": 738,
        "name": "Sport Huancayo",
        "lat": -12.0653,
        "lng": -75.2049,
        "country": "Peru"
    },
    {
        "rank": 739,
        "name": "FC Orenburg",
        "lat": 51.7727,
        "lng": 55.0988,
        "country": "Russia"
    },
    {
        "rank": 740,
        "name": "Abia Warriors",
        "lat": 5.470686432118375,
        "lng": 7.524800000000001,
        "country": "Nigeria"
    },
    {
        "rank": 741,
        "name": "Zob Ahan Isfahan FC",
        "lat": 32.64468643211838,
        "lng": 51.6889,
        "country": "Iran"
    },
    {
        "rank": 742,
        "name": "Portland Timbers",
        "lat": 45.5215,
        "lng": -122.6917,
        "country": "United States"
    },
    {
        "rank": 743,
        "name": "Cartaginés",
        "lat": 9.8644,
        "lng": -83.9194,
        "country": "Costa Rica"
    },
    {
        "rank": 744,
        "name": "Polonia Warszawa",
        "lat": 52.247686432118385,
        "lng": 21.0122,
        "country": "Poland"
    },
    {
        "rank": 745,
        "name": "Stade Renard de Melong",
        "lat": 5.0547,
        "lng": 9.9703,
        "country": "Cameroon"
    },
    {
        "rank": 746,
        "name": "Lokomotiv Plovdiv",
        "lat": 42.15338643211836,
        "lng": 24.7453,
        "country": "Bulgaria"
    },
    {
        "rank": 747,
        "name": "FC Ufa",
        "lat": 54.7388,
        "lng": 55.9721,
        "country": "Russia"
    },
    {
        "rank": 748,
        "name": "Tromsø IL",
        "lat": 69.6492,
        "lng": 18.9553,
        "country": "Norway"
    },
    {
        "rank": 749,
        "name": "Vinotinto F.C. Ecuador",
        "lat": -0.1481542715265016,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 750,
        "name": "Mladá Boleslav",
        "lat": 50.4113,
        "lng": 14.9033,
        "country": "Czech Republic"
    },
    {
        "rank": 751,
        "name": "Bohemians 1905",
        "lat": 50.095572864236765,
        "lng": 14.4656,
        "country": "Czech Republic"
    },
    {
        "rank": 752,
        "name": "Maghreb Fès",
        "lat": 34.0181,
        "lng": -5.0078,
        "country": "Morocco"
    },
    {
        "rank": 753,
        "name": "Modern Sport FC",
        "lat": 31.218086432118376,
        "lng": 29.9187,
        "country": "Egypt"
    },
    {
        "rank": 754,
        "name": "Teplice",
        "lat": 50.6404,
        "lng": 13.8249,
        "country": "Czech Republic"
    },
    {
        "rank": 755,
        "name": "Valenciennes",
        "lat": 50.3598,
        "lng": 3.5226,
        "country": "France"
    },
    {
        "rank": 756,
        "name": "Zhejiang Professional",
        "lat": 30.2741,
        "lng": 120.1551,
        "country": "China PR"
    },
    {
        "rank": 757,
        "name": "Highlanders",
        "lat": -20.1547,
        "lng": 28.5906,
        "country": "Zimbabwe"
    },
    {
        "rank": 758,
        "name": "Nacional Asunción",
        "lat": -25.137794975171385,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 759,
        "name": "Darmstadt",
        "lat": 49.8728,
        "lng": 8.6512,
        "country": "Germany"
    },
    {
        "rank": 760,
        "name": "Gornik Zabrze",
        "lat": 50.3021,
        "lng": 18.7858,
        "country": "Poland"
    },
    {
        "rank": 761,
        "name": "Chernomorets Burgas",
        "lat": 42.4939,
        "lng": 27.4721,
        "country": "Bulgaria"
    },
    {
        "rank": 762,
        "name": "Atromitos",
        "lat": 38.035660466906826,
        "lng": 23.742711241650696,
        "country": "Greece"
    },
    {
        "rank": 763,
        "name": "AS Nika",
        "lat": -4.405927135763252,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 764,
        "name": "TSV Hartberg",
        "lat": 47.2842,
        "lng": 15.9687,
        "country": "Austria"
    },
    {
        "rank": 765,
        "name": "Racing Santander",
        "lat": 43.4623,
        "lng": -3.8044,
        "country": "Spain"
    },
    {
        "rank": 766,
        "name": "FC Groningen",
        "lat": 53.2194,
        "lng": 6.5665,
        "country": "Netherlands"
    },
    {
        "rank": 767,
        "name": "Kavala",
        "lat": 40.9394,
        "lng": 24.4019,
        "country": "Greece"
    },
    {
        "rank": 768,
        "name": "Željezničar",
        "lat": 43.874286432118375,
        "lng": 18.4131,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 769,
        "name": "Union Sportive de Douala",
        "lat": 4.0511,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 770,
        "name": "Mazatlán FC",
        "lat": 23.2494,
        "lng": -106.4103,
        "country": "Mexico"
    },
    {
        "rank": 771,
        "name": "Norwich City",
        "lat": 52.6309,
        "lng": 1.2974,
        "country": "England"
    },
    {
        "rank": 772,
        "name": "Oud-Heverlee Leuven",
        "lat": 50.8798,
        "lng": 4.7005,
        "country": "Belgium"
    },
    {
        "rank": 773,
        "name": "Olympique de Bamako",
        "lat": 12.693159296355125,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 774,
        "name": "Gyeongnam FC",
        "lat": 35.2281,
        "lng": 128.6811,
        "country": "South Korea"
    },
    {
        "rank": 775,
        "name": "Viborg",
        "lat": 56.4533,
        "lng": 9.4023,
        "country": "Denmark"
    },
    {
        "rank": 776,
        "name": "FC Kolos Kovalivka",
        "lat": 50.1392,
        "lng": 29.9139,
        "country": "Ukraine"
    },
    {
        "rank": 777,
        "name": "Penybont FC",
        "lat": 51.541,
        "lng": -3.4078,
        "country": "Wales"
    },
    {
        "rank": 778,
        "name": "Séwé",
        "lat": 6.85,
        "lng": -5.2711,
        "country": "Ivory Coast"
    },
    {
        "rank": 779,
        "name": "Deportivo Táchira",
        "lat": 7.7669,
        "lng": -72.205,
        "country": "Venezuela"
    },
    {
        "rank": 780,
        "name": "Lobos B.U.A.P.",
        "lat": 19.0413,
        "lng": -98.2062,
        "country": "Mexico"
    },
    {
        "rank": 781,
        "name": "National Bank",
        "lat": 30.092966994222287,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 782,
        "name": "Johor Darul Ta'zim FC",
        "lat": 1.4927,
        "lng": 103.7414,
        "country": "Malaysia"
    },
    {
        "rank": 783,
        "name": "Aurora",
        "lat": -14.0583,
        "lng": -67.1097,
        "country": "Bolivia"
    },
    {
        "rank": 784,
        "name": "Juventud de Las Piedras",
        "lat": -34.7278,
        "lng": -56.2139,
        "country": "Uruguay"
    },
    {
        "rank": 785,
        "name": "Lausanne",
        "lat": 3.885786432118375,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 786,
        "name": "Arnett Gardens",
        "lat": 18.0179,
        "lng": -76.8099,
        "country": "Jamaica"
    },
    {
        "rank": 787,
        "name": "Sarpsborg 08",
        "lat": 59.2839,
        "lng": 11.1094,
        "country": "Norway"
    },
    {
        "rank": 788,
        "name": "Club Deportivo Garcilaso",
        "lat": -13.495927135763251,
        "lng": -71.9675,
        "country": "Peru"
    },
    {
        "rank": 789,
        "name": "Universidad Concepción",
        "lat": -36.827,
        "lng": -73.0498,
        "country": "Chile"
    },
    {
        "rank": 790,
        "name": "Slavia Sofia",
        "lat": 42.74905929635513,
        "lng": 23.3253,
        "country": "Bulgaria"
    },
    {
        "rank": 791,
        "name": "Shooting Stars",
        "lat": 7.395486432118376,
        "lng": 3.947,
        "country": "Nigeria"
    },
    {
        "rank": 792,
        "name": "Silkeborg",
        "lat": 56.1697,
        "lng": 9.5542,
        "country": "Denmark"
    },
    {
        "rank": 793,
        "name": "Standard Liège",
        "lat": 50.6292,
        "lng": 5.5797,
        "country": "Belgium"
    },
    {
        "rank": 794,
        "name": "Fredrikstad",
        "lat": 59.2181,
        "lng": 10.9298,
        "country": "Norway"
    },
    {
        "rank": 795,
        "name": "Cracovia Kraków",
        "lat": 50.0647,
        "lng": 19.945,
        "country": "Poland"
    },
    {
        "rank": 796,
        "name": "Navbahor Namangan",
        "lat": 40.9983,
        "lng": 71.6726,
        "country": "Uzbekistan"
    },
    {
        "rank": 797,
        "name": "Debrecen",
        "lat": 47.5316,
        "lng": 21.6273,
        "country": "Hungary"
    },
    {
        "rank": 798,
        "name": "Al-Jazira",
        "lat": 24.24517286423675,
        "lng": 55.761,
        "country": "United Arab Emirates"
    },
    {
        "rank": 799,
        "name": "Kyoto Sanga FC",
        "lat": 35.0116,
        "lng": 135.7681,
        "country": "Japan"
    },
    {
        "rank": 800,
        "name": "San Diego FC",
        "lat": -34.768194975171404,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 801,
        "name": "Bendel Insurance",
        "lat": 6.335,
        "lng": 5.6037,
        "country": "Nigeria"
    },
    {
        "rank": 802,
        "name": "Fortaleza CEIF FC",
        "lat": 10.99987286423675,
        "lng": -74.7964,
        "country": "Colombia"
    },
    {
        "rank": 803,
        "name": "Daegu FC",
        "lat": 35.8714,
        "lng": 128.6014,
        "country": "South Korea"
    },
    {
        "rank": 804,
        "name": "Macará",
        "lat": -1.2884,
        "lng": -78.9214,
        "country": "Ecuador"
    },
    {
        "rank": 805,
        "name": "St. Mirren",
        "lat": 55.88597286423676,
        "lng": -4.2051,
        "country": "Scotland"
    },
    {
        "rank": 806,
        "name": "Aldosivi",
        "lat": -37.9922,
        "lng": -57.5875,
        "country": "Argentina"
    },
    {
        "rank": 807,
        "name": "Deportivo Recoleta",
        "lat": -25.11980854305301,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 808,
        "name": "Interclube de Angola",
        "lat": -8.777727135763252,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 809,
        "name": "CD Antofagasta",
        "lat": -23.6509,
        "lng": -70.3975,
        "country": "Chile"
    },
    {
        "rank": 810,
        "name": "AFC Herrmannstadt Sibiu",
        "lat": 45.7983,
        "lng": 24.1256,
        "country": "Romania"
    },
    {
        "rank": 811,
        "name": "Houston Dynamo",
        "lat": 29.752,
        "lng": -95.3678,
        "country": "United States"
    },
    {
        "rank": 812,
        "name": "Glentoran",
        "lat": 54.5973,
        "lng": -5.9301,
        "country": "Northern Ireland"
    },
    {
        "rank": 813,
        "name": "NK Istra 1961",
        "lat": 45.2167,
        "lng": 13.9333,
        "country": "Croatia"
    },
    {
        "rank": 814,
        "name": "Chievo Verona",
        "lat": 45.45658643211837,
        "lng": 10.9916,
        "country": "Italy"
    },
    {
        "rank": 815,
        "name": "Bursaspor",
        "lat": 40.1917,
        "lng": 29.0611,
        "country": "Turkey"
    },
    {
        "rank": 816,
        "name": "Persipura Jayapura",
        "lat": -2.5489,
        "lng": 140.7137,
        "country": "Indonesia"
    },
    {
        "rank": 817,
        "name": "IFK Göteborg",
        "lat": 57.704886432118386,
        "lng": 11.9865,
        "country": "Sweden"
    },
    {
        "rank": 818,
        "name": "Paraná Clube",
        "lat": -25.401227135763254,
        "lng": -49.24,
        "country": "Brazil"
    },
    {
        "rank": 819,
        "name": "Sevilla FC Puerto Rico",
        "lat": 18.483486432118376,
        "lng": -66.1057,
        "country": "Puerto Rico"
    },
    {
        "rank": 820,
        "name": "Brescia",
        "lat": 45.5416,
        "lng": 10.2118,
        "country": "Italy"
    },
    {
        "rank": 821,
        "name": "Plaza Colonia",
        "lat": -34.4608,
        "lng": -57.8392,
        "country": "Uruguay"
    },
    {
        "rank": 822,
        "name": "Sekhukhune United FC",
        "lat": -24.1069,
        "lng": 29.4686,
        "country": "South Africa"
    },
    {
        "rank": 823,
        "name": "Novi Pazar",
        "lat": 43.1367,
        "lng": 20.5169,
        "country": "Serbia"
    },
    {
        "rank": 824,
        "name": "Deportivo Cali",
        "lat": 3.3910864321183745,
        "lng": -76.5225,
        "country": "Colombia"
    },
    {
        "rank": 825,
        "name": "Tauro FC",
        "lat": 8.9824,
        "lng": -79.5199,
        "country": "Panama"
    },
    {
        "rank": 826,
        "name": "Nashville SC",
        "lat": 36.1627,
        "lng": -86.7816,
        "country": "United States"
    },
    {
        "rank": 827,
        "name": "O'Higgins",
        "lat": -34.1706,
        "lng": -70.7394,
        "country": "Chile"
    },
    {
        "rank": 828,
        "name": "Arsenal Tula",
        "lat": 54.1961,
        "lng": 37.6182,
        "country": "Russia"
    },
    {
        "rank": 829,
        "name": "UMS de Loum",
        "lat": 4.7167,
        "lng": 9.7333,
        "country": "Cameroon"
    },
    {
        "rank": 830,
        "name": "Sepsi OSK",
        "lat": 45.8667,
        "lng": 25.7833,
        "country": "Romania"
    },
    {
        "rank": 831,
        "name": "MC El Bayadh",
        "lat": 33.6167,
        "lng": 1.0,
        "country": "Algeria"
    },
    {
        "rank": 832,
        "name": "San Martín San Juan",
        "lat": -31.5375,
        "lng": -68.5364,
        "country": "Argentina"
    },
    {
        "rank": 833,
        "name": "Osmanlıspor FK",
        "lat": 39.9208,
        "lng": 32.8541,
        "country": "Turkey"
    },
    {
        "rank": 834,
        "name": "San Pedro",
        "lat": 4.8056,
        "lng": -6.6306,
        "country": "Ivory Coast"
    },
    {
        "rank": 835,
        "name": "Red Arrows",
        "lat": -15.3875,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 836,
        "name": "CD Plaza Amador",
        "lat": 9.000386432118376,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 837,
        "name": "Salgaocar",
        "lat": 15.31728643211838,
        "lng": 74.124,
        "country": "India"
    },
    {
        "rank": 838,
        "name": "Hekari United",
        "lat": -9.4438,
        "lng": 147.1803,
        "country": "Papua New Guinea"
    },
    {
        "rank": 839,
        "name": "Charlotte FC",
        "lat": -34.75020854305303,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 840,
        "name": "Karpaty Lviv",
        "lat": 49.85058643211838,
        "lng": 24.029700000000002,
        "country": "Ukraine"
    },
    {
        "rank": 841,
        "name": "Independiente de La Chorrera",
        "lat": 8.8833,
        "lng": -79.7833,
        "country": "Panama"
    },
    {
        "rank": 842,
        "name": "Vitória Setúbal",
        "lat": 38.5244,
        "lng": -8.8882,
        "country": "Portugal"
    },
    {
        "rank": 843,
        "name": "Sheffield United FC",
        "lat": 53.3701,
        "lng": -1.4709,
        "country": "England"
    },
    {
        "rank": 844,
        "name": "Leones Negros U. de G.",
        "lat": 20.69567286423675,
        "lng": -103.3496,
        "country": "Mexico"
    },
    {
        "rank": 845,
        "name": "Pusamania Borneo FC",
        "lat": -0.7893,
        "lng": 113.9213,
        "country": "Indonesia"
    },
    {
        "rank": 846,
        "name": "Göztepe AŞ",
        "lat": 38.4237,
        "lng": 27.1428,
        "country": "Turkey"
    },
    {
        "rank": 847,
        "name": "Cliftonville",
        "lat": 54.660486432118375,
        "lng": -5.9311,
        "country": "Northern Ireland"
    },
    {
        "rank": 848,
        "name": "Real Salt Lake",
        "lat": 40.582,
        "lng": -111.8928,
        "country": "United States"
    },
    {
        "rank": 849,
        "name": "Akwa United",
        "lat": 5.0317,
        "lng": 7.9061,
        "country": "Nigeria"
    },
    {
        "rank": 850,
        "name": "2 de Mayo",
        "lat": -25.101822110934638,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 851,
        "name": "FC Torpedo Moscow",
        "lat": 55.845732160591886,
        "lng": 37.6176,
        "country": "Russia"
    },
    {
        "rank": 852,
        "name": "IFK Norrköping",
        "lat": 58.5877,
        "lng": 16.1924,
        "country": "Sweden"
    },
    {
        "rank": 853,
        "name": "Chicken Inn FC",
        "lat": -20.13671356788162,
        "lng": 28.5906,
        "country": "Zimbabwe"
    },
    {
        "rank": 854,
        "name": "Pandurii Târgu Jiu",
        "lat": 45.0333,
        "lng": 23.2833,
        "country": "Romania"
    },
    {
        "rank": 855,
        "name": "Eding Sport FC",
        "lat": 3.9037728642367497,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 856,
        "name": "Ankaragücü",
        "lat": 39.938786432118384,
        "lng": 32.8541,
        "country": "Turkey"
    },
    {
        "rank": 857,
        "name": "Bodrum F.K.",
        "lat": 37.0344,
        "lng": 27.4305,
        "country": "Turkey"
    },
    {
        "rank": 858,
        "name": "Southampton",
        "lat": 50.9097,
        "lng": -1.4044,
        "country": "England"
    },
    {
        "rank": 859,
        "name": "Sydney FC",
        "lat": -33.8688,
        "lng": 151.2093,
        "country": "Australia"
    },
    {
        "rank": 860,
        "name": "Al Khartoum SC",
        "lat": 15.536672864236747,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 861,
        "name": "Deportes Temuco",
        "lat": -38.7359,
        "lng": -72.5904,
        "country": "Chile"
    },
    {
        "rank": 862,
        "name": "Pwd Bamenda",
        "lat": 5.9597,
        "lng": 10.1486,
        "country": "Cameroon"
    },
    {
        "rank": 863,
        "name": "Canon Sportif",
        "lat": 4.069086432118374,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 864,
        "name": "Al-Hussein SC Irbid",
        "lat": 32.5556,
        "lng": 35.85,
        "country": "Jordan"
    },
    {
        "rank": 865,
        "name": "Aluminium Arak",
        "lat": 34.0917,
        "lng": 49.6892,
        "country": "Iran"
    },
    {
        "rank": 866,
        "name": "Sirius",
        "lat": 59.6099,
        "lng": 16.5448,
        "country": "Sweden"
    },
    {
        "rank": 867,
        "name": "LA Galaxy",
        "lat": 33.8644,
        "lng": -118.2611,
        "country": "United States"
    },
    {
        "rank": 868,
        "name": "FK Kauno Zalgiris",
        "lat": 54.8985,
        "lng": 23.9036,
        "country": "Lithuania"
    },
    {
        "rank": 869,
        "name": "NK Varaždin",
        "lat": 46.3044,
        "lng": 16.3367,
        "country": "Croatia"
    },
    {
        "rank": 870,
        "name": "Sabah FK",
        "lat": 40.42728643211838,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 871,
        "name": "Avispa Fukuoka",
        "lat": 33.5904,
        "lng": 130.4017,
        "country": "Japan"
    },
    {
        "rank": 872,
        "name": "Renaissance Club Zemamra",
        "lat": 32.2611,
        "lng": -8.0228,
        "country": "Morocco"
    },
    {
        "rank": 873,
        "name": "AEL Limassol",
        "lat": 34.71827286423676,
        "lng": 33.0464,
        "country": "Cyprus"
    },
    {
        "rank": 874,
        "name": "Jeanne d'Arc de Bamako",
        "lat": 12.7111457284735,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 875,
        "name": "Kano Pillars",
        "lat": 12.0022,
        "lng": 8.592,
        "country": "Nigeria"
    },
    {
        "rank": 876,
        "name": "Al-Ittihad",
        "lat": 32.8872,
        "lng": 13.1913,
        "country": "Libya"
    },
    {
        "rank": 877,
        "name": "MC Oran",
        "lat": 35.6969,
        "lng": -0.6331,
        "country": "Algeria"
    },
    {
        "rank": 878,
        "name": "Iraklis",
        "lat": 40.65707286423674,
        "lng": 22.95,
        "country": "Greece"
    },
    {
        "rank": 879,
        "name": "Irtysh Pavlodar",
        "lat": 52.2833,
        "lng": 76.95,
        "country": "Kazakhstan"
    },
    {
        "rank": 880,
        "name": "SC Farense",
        "lat": 37.0194,
        "lng": -7.9322,
        "country": "Portugal"
    },
    {
        "rank": 881,
        "name": "Oţelul Galaţi",
        "lat": 45.4353,
        "lng": 28.008,
        "country": "Romania"
    },
    {
        "rank": 882,
        "name": "Unisport FC Du Haut-Nkam",
        "lat": 5.35,
        "lng": 10.8833,
        "country": "Cameroon"
    },
    {
        "rank": 883,
        "name": "General Caballero JLM",
        "lat": -25.083835678816264,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 884,
        "name": "Bayelsa United",
        "lat": 4.7719,
        "lng": 6.0699,
        "country": "Nigeria"
    },
    {
        "rank": 885,
        "name": "Tokyo Verdy",
        "lat": 35.69418643211837,
        "lng": 139.6503,
        "country": "Japan"
    },
    {
        "rank": 886,
        "name": "FC Veris",
        "lat": 47.09465929635513,
        "lng": 28.8659,
        "country": "Moldova"
    },
    {
        "rank": 887,
        "name": "Montpellier",
        "lat": 43.6108,
        "lng": 3.8767,
        "country": "France"
    },
    {
        "rank": 888,
        "name": "Ashanti Gold FC",
        "lat": 6.2,
        "lng": -1.6167,
        "country": "Ghana"
    },
    {
        "rank": 889,
        "name": "Waitakere United",
        "lat": -36.83051356788163,
        "lng": 174.7633,
        "country": "New Zealand"
    },
    {
        "rank": 890,
        "name": "Maccabi Netanya",
        "lat": 32.3215,
        "lng": 34.8532,
        "country": "Israel"
    },
    {
        "rank": 891,
        "name": "Thun",
        "lat": 46.7581,
        "lng": 7.628,
        "country": "Switzerland"
    },
    {
        "rank": 892,
        "name": "Tianjin Jinmen Tiger F.C.",
        "lat": 39.3434,
        "lng": 117.3616,
        "country": "China PR"
    },
    {
        "rank": 893,
        "name": "Hegelmann Litauen Kaunas",
        "lat": 54.91648643211837,
        "lng": 23.9036,
        "country": "Lithuania"
    },
    {
        "rank": 894,
        "name": "Ružomberok",
        "lat": 49.0747,
        "lng": 19.3116,
        "country": "Slovakia"
    },
    {
        "rank": 895,
        "name": "Kabuscorp SCP",
        "lat": -8.75974070364488,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 896,
        "name": "Slovácko",
        "lat": 49.0747,
        "lng": 17.4622,
        "country": "Czech Republic"
    },
    {
        "rank": 897,
        "name": "Blooming",
        "lat": -17.7833,
        "lng": -63.1833,
        "country": "Bolivia"
    },
    {
        "rank": 898,
        "name": "Suwon FC",
        "lat": 37.2636,
        "lng": 127.0286,
        "country": "South Korea"
    },
    {
        "rank": 899,
        "name": "Academia F. Amadou Diallo",
        "lat": 5.354386432118376,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 900,
        "name": "Hapoel Jerusalem",
        "lat": 31.78628643211837,
        "lng": 35.2137,
        "country": "Israel"
    },
    {
        "rank": 901,
        "name": "PFC Lokomotiv Sofia 1929",
        "lat": 42.7670457284735,
        "lng": 23.3253,
        "country": "Bulgaria"
    },
    {
        "rank": 902,
        "name": "Córdoba CF",
        "lat": 37.8882,
        "lng": -4.7794,
        "country": "Spain"
    },
    {
        "rank": 903,
        "name": "Deportivo Malacateco",
        "lat": 14.5586,
        "lng": -91.5201,
        "country": "Guatemala"
    },
    {
        "rank": 904,
        "name": "TS Galaxy",
        "lat": -26.168127135763257,
        "lng": 28.0473,
        "country": "South Africa"
    },
    {
        "rank": 905,
        "name": "Slavia-Mozyr",
        "lat": 52.0495,
        "lng": 29.2456,
        "country": "Belarus"
    },
    {
        "rank": 906,
        "name": "Portimonense",
        "lat": 37.1364,
        "lng": -8.5376,
        "country": "Portugal"
    },
    {
        "rank": 907,
        "name": "Aberdeen",
        "lat": 57.1497,
        "lng": -2.0943,
        "country": "Scotland"
    },
    {
        "rank": 908,
        "name": "Mouscron-Péruwelz",
        "lat": 50.7436,
        "lng": 3.2072,
        "country": "Belgium"
    },
    {
        "rank": 909,
        "name": "Al-Faisaly FC Harmah",
        "lat": 21.4858,
        "lng": 39.1925,
        "country": "Saudi Arabia"
    },
    {
        "rank": 910,
        "name": "Ikorodu City",
        "lat": 6.6152,
        "lng": 3.5061,
        "country": "Nigeria"
    },
    {
        "rank": 911,
        "name": "CA Bizertin",
        "lat": 37.2744,
        "lng": 9.8739,
        "country": "Tunisia"
    },
    {
        "rank": 912,
        "name": "Kalmar FF",
        "lat": 56.6634,
        "lng": 16.3567,
        "country": "Sweden"
    },
    {
        "rank": 913,
        "name": "Club Atletico Torque",
        "lat": -34.73222211093465,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 914,
        "name": "CS Marítimo Madeira",
        "lat": 32.6669,
        "lng": -16.9241,
        "country": "Portugal"
    },
    {
        "rank": 915,
        "name": "Unión Española",
        "lat": -33.37695427152652,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 916,
        "name": "Levadiakos",
        "lat": 38.2333,
        "lng": 23.3667,
        "country": "Greece"
    },
    {
        "rank": 917,
        "name": "MOL Fehérvár FC",
        "lat": 47.1925,
        "lng": 18.4108,
        "country": "Hungary"
    },
    {
        "rank": 918,
        "name": "Persija Jakarta",
        "lat": -6.2088,
        "lng": 106.8456,
        "country": "Indonesia"
    },
    {
        "rank": 919,
        "name": "Jeju United",
        "lat": 33.4996,
        "lng": 126.5312,
        "country": "South Korea"
    },
    {
        "rank": 920,
        "name": "FC Struga Trim-Lum",
        "lat": 41.1775,
        "lng": 20.6769,
        "country": "Macedonia"
    },
    {
        "rank": 921,
        "name": "Maxline Vitebsk",
        "lat": 55.1904,
        "lng": 30.2049,
        "country": "Belarus"
    },
    {
        "rank": 922,
        "name": "Real Valladolid",
        "lat": 41.6523,
        "lng": -4.7245,
        "country": "Spain"
    },
    {
        "rank": 923,
        "name": "Vålerenga",
        "lat": 59.9139,
        "lng": 10.7522,
        "country": "Norway"
    },
    {
        "rank": 924,
        "name": "Xanthi FC",
        "lat": 41.1343,
        "lng": 24.8882,
        "country": "Greece"
    },
    {
        "rank": 925,
        "name": "Nasarawa United",
        "lat": 8.534,
        "lng": 7.7443,
        "country": "Nigeria"
    },
    {
        "rank": 926,
        "name": "New England Revolution",
        "lat": 42.0909,
        "lng": -71.2643,
        "country": "United States"
    },
    {
        "rank": 927,
        "name": "Cesena",
        "lat": 44.1391,
        "lng": 12.2431,
        "country": "Italy"
    },
    {
        "rank": 928,
        "name": "Rubio Ñú",
        "lat": -25.065849246697894,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 929,
        "name": "Eastern Suburbs",
        "lat": -36.812527135763254,
        "lng": 174.7633,
        "country": "New Zealand"
    },
    {
        "rank": 930,
        "name": "Olancho FC",
        "lat": 14.8406,
        "lng": -86.2017,
        "country": "Honduras"
    },
    {
        "rank": 931,
        "name": "Asteras Tripolis",
        "lat": 37.5089,
        "lng": 22.3781,
        "country": "Greece"
    },
    {
        "rank": 932,
        "name": "F.C.V. Dender E.H.",
        "lat": 50.9306,
        "lng": 4.0306,
        "country": "Belgium"
    },
    {
        "rank": 933,
        "name": "Huddersfield Town",
        "lat": 53.6544,
        "lng": -1.7706,
        "country": "England"
    },
    {
        "rank": 934,
        "name": "Quilmes",
        "lat": -34.7264,
        "lng": -58.2544,
        "country": "Argentina"
    },
    {
        "rank": 935,
        "name": "Dundalk FC",
        "lat": 53.9996,
        "lng": -6.4119,
        "country": "Ireland"
    },
    {
        "rank": 936,
        "name": "Consadole Sapporo",
        "lat": 43.0642,
        "lng": 141.3469,
        "country": "Japan"
    },
    {
        "rank": 937,
        "name": "Jaguares Chiapas",
        "lat": 16.7569,
        "lng": -93.1292,
        "country": "Mexico"
    },
    {
        "rank": 938,
        "name": "Wiliete SC",
        "lat": -8.741754271526505,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 939,
        "name": "Torpedo Kutaisi",
        "lat": 42.2483,
        "lng": 42.6933,
        "country": "Georgia"
    },
    {
        "rank": 940,
        "name": "FC Nizhny Novgorod",
        "lat": 56.2965,
        "lng": 43.9361,
        "country": "Russia"
    },
    {
        "rank": 941,
        "name": "FC Skonto Riga",
        "lat": 57.00367286423674,
        "lng": 24.1056,
        "country": "Latvia"
    },
    {
        "rank": 942,
        "name": "OFI Crete",
        "lat": 35.3387,
        "lng": 25.1442,
        "country": "Greece"
    },
    {
        "rank": 943,
        "name": "Slaven",
        "lat": 45.36108643211838,
        "lng": 14.4078,
        "country": "Croatia"
    },
    {
        "rank": 944,
        "name": "Bali United",
        "lat": -8.3405,
        "lng": 115.092,
        "country": "Indonesia"
    },
    {
        "rank": 945,
        "name": "MTK Budapest",
        "lat": 47.51727286423676,
        "lng": 19.0424,
        "country": "Hungary"
    },
    {
        "rank": 946,
        "name": "Sanga Balende",
        "lat": -4.387940703644877,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 947,
        "name": "Manta",
        "lat": -0.95,
        "lng": -80.7333,
        "country": "Ecuador"
    },
    {
        "rank": 948,
        "name": "Gostaresh Foolad",
        "lat": 36.5634,
        "lng": 53.0601,
        "country": "Iran"
    },
    {
        "rank": 949,
        "name": "Eastern Stars",
        "lat": -9.425813567881626,
        "lng": 147.1803,
        "country": "Papua New Guinea"
    },
    {
        "rank": 950,
        "name": "Troyes",
        "lat": 48.2973,
        "lng": 4.0744,
        "country": "France"
    },
    {
        "rank": 951,
        "name": "Kwara United",
        "lat": 8.5062,
        "lng": 4.5519,
        "country": "Nigeria"
    },
    {
        "rank": 952,
        "name": "Belenenses",
        "lat": 38.74307286423675,
        "lng": -9.3983,
        "country": "Portugal"
    },
    {
        "rank": 953,
        "name": "Elazığspor",
        "lat": 38.6748,
        "lng": 39.2267,
        "country": "Turkey"
    },
    {
        "rank": 954,
        "name": "RKC Waalwijk",
        "lat": 51.6978,
        "lng": 5.0694,
        "country": "Netherlands"
    },
    {
        "rank": 955,
        "name": "FC Vizela",
        "lat": 41.3881,
        "lng": -8.3013,
        "country": "Portugal"
    },
    {
        "rank": 956,
        "name": "L.A. Firpo",
        "lat": 13.728872864236749,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 957,
        "name": "Melipilla",
        "lat": -33.6833,
        "lng": -71.2167,
        "country": "Chile"
    },
    {
        "rank": 958,
        "name": "Beroe",
        "lat": 42.4167,
        "lng": 25.6333,
        "country": "Bulgaria"
    },
    {
        "rank": 959,
        "name": "Los Chankas CYC",
        "lat": -13.6333,
        "lng": -73.3667,
        "country": "Peru"
    },
    {
        "rank": 960,
        "name": "Liga de Loja",
        "lat": -3.9928,
        "lng": -79.2042,
        "country": "Ecuador"
    },
    {
        "rank": 961,
        "name": "Deportiva San Carlos",
        "lat": 10.4806,
        "lng": -84.4294,
        "country": "Costa Rica"
    },
    {
        "rank": 962,
        "name": "Smouha SC",
        "lat": 31.23607286423675,
        "lng": 29.9187,
        "country": "Egypt"
    },
    {
        "rank": 963,
        "name": "Naft Tehran",
        "lat": 35.72517286423675,
        "lng": 51.389,
        "country": "Iran"
    },
    {
        "rank": 964,
        "name": "Ngezi Platinum FC",
        "lat": -17.1083,
        "lng": 30.1472,
        "country": "Zimbabwe"
    },
    {
        "rank": 965,
        "name": "FC Bravos DO Maquis",
        "lat": -8.723767839408131,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 966,
        "name": "Al Shabab",
        "lat": 25.240772864236742,
        "lng": 55.27080000000001,
        "country": "United Arab Emirates"
    },
    {
        "rank": 967,
        "name": "Churchill Brothers SC",
        "lat": 15.335272864236753,
        "lng": 74.124,
        "country": "India"
    },
    {
        "rank": 968,
        "name": "Valmiera FK",
        "lat": 57.5333,
        "lng": 25.4167,
        "country": "Latvia"
    },
    {
        "rank": 969,
        "name": "Suwon Bluewings",
        "lat": 37.281586432118374,
        "lng": 127.0286,
        "country": "South Korea"
    },
    {
        "rank": 970,
        "name": "Deportivo La Guaira FC",
        "lat": 10.6,
        "lng": -66.9333,
        "country": "Venezuela"
    },
    {
        "rank": 971,
        "name": "Monomatapa United",
        "lat": -17.771240703644875,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 972,
        "name": "GAIS",
        "lat": 57.72287286423676,
        "lng": 11.9865,
        "country": "Sweden"
    },
    {
        "rank": 973,
        "name": "Port Talbot",
        "lat": 51.5881,
        "lng": -3.7806,
        "country": "Wales"
    },
    {
        "rank": 974,
        "name": "León de Huánuco",
        "lat": -9.9306,
        "lng": -76.2422,
        "country": "Peru"
    },
    {
        "rank": 975,
        "name": "Shimizu S-Pulse",
        "lat": 34.9756,
        "lng": 138.3829,
        "country": "Japan"
    },
    {
        "rank": 976,
        "name": "Dinamo Bucureşti",
        "lat": 44.48387286423675,
        "lng": 26.0979,
        "country": "Romania"
    },
    {
        "rank": 977,
        "name": "Ajax",
        "lat": -4.3699542715265025,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 978,
        "name": "Al Fateh FC",
        "lat": 26.410686432118375,
        "lng": 50.0778,
        "country": "Saudi Arabia"
    },
    {
        "rank": 979,
        "name": "Tukoko University",
        "lat": -9.407827135763252,
        "lng": 147.1803,
        "country": "Papua New Guinea"
    },
    {
        "rank": 980,
        "name": "GV San Jose",
        "lat": -16.44604070364488,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 981,
        "name": "Feutcheu FC",
        "lat": 5.977340802872396,
        "lng": 10.152128230428373,
        "country": "Cameroon"
    },
    {
        "rank": 982,
        "name": "Malavan",
        "lat": 37.4667,
        "lng": 49.45,
        "country": "Iran"
    },
    {
        "rank": 983,
        "name": "Gold Coast United",
        "lat": -28.0167,
        "lng": 153.4,
        "country": "Australia"
    },
    {
        "rank": 984,
        "name": "Supersport United",
        "lat": -25.712913567881625,
        "lng": 28.2184,
        "country": "South Africa"
    },
    {
        "rank": 985,
        "name": "Zarzis",
        "lat": 33.5061,
        "lng": 11.1122,
        "country": "Tunisia"
    },
    {
        "rank": 986,
        "name": "FC Dallas",
        "lat": 32.7767,
        "lng": -96.797,
        "country": "United States"
    },
    {
        "rank": 987,
        "name": "Sportivo Luqueño",
        "lat": -25.04786281457952,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 988,
        "name": "Shonan Bellmare",
        "lat": 35.3362,
        "lng": 139.4917,
        "country": "Japan"
    },
    {
        "rank": 989,
        "name": "Victoria United FC",
        "lat": 3.921759296355125,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 990,
        "name": "PSM Makassar",
        "lat": -5.1477,
        "lng": 119.4327,
        "country": "Indonesia"
    },
    {
        "rank": 991,
        "name": "Vitesse",
        "lat": 51.9225,
        "lng": 5.8372,
        "country": "Netherlands"
    },
    {
        "rank": 992,
        "name": "Shkupi Skopje",
        "lat": 42.0024,
        "lng": 21.4361,
        "country": "Macedonia"
    },
    {
        "rank": 993,
        "name": "FC Energetik-BGU Minsk",
        "lat": 53.92518643211838,
        "lng": 27.5863,
        "country": "Belarus"
    },
    {
        "rank": 994,
        "name": "Mes Rafsanjan",
        "lat": 30.4067,
        "lng": 55.9939,
        "country": "Iran"
    },
    {
        "rank": 995,
        "name": "El Tanque Sisley",
        "lat": -34.71423567881628,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 996,
        "name": "C.F. Estrela da Amadora",
        "lat": 38.754,
        "lng": -9.23,
        "country": "Portugal"
    },
    {
        "rank": 997,
        "name": "ENPPI",
        "lat": 30.110953426340664,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 998,
        "name": "Central Español",
        "lat": -34.6962492466979,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 999,
        "name": "Uniao da Madeira",
        "lat": 32.684886432118375,
        "lng": -16.9241,
        "country": "Portugal"
    },
    {
        "rank": 1000,
        "name": "Masvingo United",
        "lat": -20.0637,
        "lng": 30.8267,
        "country": "Zimbabwe"
    },
    {
        "rank": 1001,
        "name": "Suduva Marijampole",
        "lat": 55.2944,
        "lng": 23.3556,
        "country": "Lithuania"
    },
    {
        "rank": 1002,
        "name": "Chorrillo",
        "lat": 9.01837286423675,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 1003,
        "name": "Giresunspor",
        "lat": 40.9128,
        "lng": 38.3895,
        "country": "Turkey"
    },
    {
        "rank": 1004,
        "name": "FK Vitebsk",
        "lat": 55.208386432118374,
        "lng": 30.204899999999995,
        "country": "Belarus"
    },
    {
        "rank": 1005,
        "name": "Guastatoya",
        "lat": 14.8406,
        "lng": -90.0678,
        "country": "Guatemala"
    },
    {
        "rank": 1006,
        "name": "MC El Eulma",
        "lat": 36.15,
        "lng": 5.6833,
        "country": "Algeria"
    },
    {
        "rank": 1007,
        "name": "SO Armée",
        "lat": 5.37237286423675,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1008,
        "name": "Atlanta United FC",
        "lat": 33.749,
        "lng": -84.388,
        "country": "United States"
    },
    {
        "rank": 1009,
        "name": "Benfica Luanda",
        "lat": -8.705781407289756,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 1010,
        "name": "Deportivo Lara",
        "lat": 10.0647,
        "lng": -69.3194,
        "country": "Venezuela"
    },
    {
        "rank": 1011,
        "name": "Al Ahly Shendi",
        "lat": 16.6917,
        "lng": 33.4333,
        "country": "Sudan"
    },
    {
        "rank": 1012,
        "name": "Al Nasr",
        "lat": 25.258759296355116,
        "lng": 55.27080000000001,
        "country": "United Arab Emirates"
    },
    {
        "rank": 1013,
        "name": "Bunyodkor Tashkent",
        "lat": 41.31748643211837,
        "lng": 69.2401,
        "country": "Uzbekistan"
    },
    {
        "rank": 1014,
        "name": "Roda JC Kerkrade",
        "lat": 50.8714,
        "lng": 6.0658,
        "country": "Netherlands"
    },
    {
        "rank": 1015,
        "name": "Wuhan Three Towns F.C.",
        "lat": 30.5928,
        "lng": 114.3055,
        "country": "China PR"
    },
    {
        "rank": 1016,
        "name": "Caracas",
        "lat": 10.4806,
        "lng": -66.9036,
        "country": "Venezuela"
    },
    {
        "rank": 1017,
        "name": "LNZ Cherkasy",
        "lat": 49.4444,
        "lng": 32.0597,
        "country": "Ukraine"
    },
    {
        "rank": 1018,
        "name": "Cape Town City FC",
        "lat": -33.9249,
        "lng": 18.4241,
        "country": "South Africa"
    },
    {
        "rank": 1019,
        "name": "Śląsk Wrocław",
        "lat": 51.1079,
        "lng": 17.0385,
        "country": "Poland"
    },
    {
        "rank": 1020,
        "name": "Újpest",
        "lat": 47.53525929635513,
        "lng": 19.0424,
        "country": "Hungary"
    },
    {
        "rank": 1021,
        "name": "Olimpo",
        "lat": -38.9516,
        "lng": -68.0591,
        "country": "Argentina"
    },
    {
        "rank": 1022,
        "name": "Niger Tornadoes",
        "lat": 9.094486432118375,
        "lng": 7.398599999999999,
        "country": "Nigeria"
    },
    {
        "rank": 1023,
        "name": "Giwa FC",
        "lat": 12.020186432118377,
        "lng": 8.592,
        "country": "Nigeria"
    },
    {
        "rank": 1024,
        "name": "Sol de América",
        "lat": -25.029876382461147,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1025,
        "name": "Galway United FC",
        "lat": 53.2707,
        "lng": -9.0568,
        "country": "Ireland"
    },
    {
        "rank": 1026,
        "name": "MFK Karviná",
        "lat": 49.8539,
        "lng": 18.5586,
        "country": "Czech Republic"
    },
    {
        "rank": 1027,
        "name": "Kilmarnock",
        "lat": 55.6117,
        "lng": -4.4956,
        "country": "Scotland"
    },
    {
        "rank": 1028,
        "name": "Ratchaburi FC",
        "lat": 13.5282,
        "lng": 99.8133,
        "country": "Thailand"
    },
    {
        "rank": 1029,
        "name": "ADC Juan Pablo II",
        "lat": -11.989340703644881,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 1030,
        "name": "Velež Mostar",
        "lat": 43.36178643211838,
        "lng": 17.8078,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 1031,
        "name": "Diósgyör",
        "lat": 48.1036,
        "lng": 20.7848,
        "country": "Hungary"
    },
    {
        "rank": 1032,
        "name": "FK Panevėžys",
        "lat": 55.7333,
        "lng": 24.35,
        "country": "Lithuania"
    },
    {
        "rank": 1033,
        "name": "Eskişehirspor",
        "lat": 39.7767,
        "lng": 30.5206,
        "country": "Turkey"
    },
    {
        "rank": 1034,
        "name": "Montevideo Wanderers",
        "lat": -34.67826281457953,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1035,
        "name": "Tiko United",
        "lat": 4.0833,
        "lng": 9.3667,
        "country": "Cameroon"
    },
    {
        "rank": 1036,
        "name": "Saba Qom",
        "lat": 34.6401,
        "lng": 50.8764,
        "country": "Iran"
    },
    {
        "rank": 1037,
        "name": "Spartak Myjava",
        "lat": 48.7581,
        "lng": 17.5703,
        "country": "Slovakia"
    },
    {
        "rank": 1038,
        "name": "Akhisar Belediye",
        "lat": 38.9167,
        "lng": 27.8333,
        "country": "Turkey"
    },
    {
        "rank": 1039,
        "name": "Zalaegerszegi TE",
        "lat": 46.84,
        "lng": 16.8467,
        "country": "Hungary"
    },
    {
        "rank": 1040,
        "name": "Waterford FC",
        "lat": 52.2583,
        "lng": -7.1119,
        "country": "Ireland"
    },
    {
        "rank": 1041,
        "name": "Sharks",
        "lat": 9.11247286423675,
        "lng": 7.398599999999999,
        "country": "Nigeria"
    },
    {
        "rank": 1042,
        "name": "Bamboutos",
        "lat": 5.4667,
        "lng": 10.4167,
        "country": "Cameroon"
    },
    {
        "rank": 1043,
        "name": "Panthère",
        "lat": 3.9397457284734996,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1044,
        "name": "Bnei Yehuda Tel Aviv FC",
        "lat": 32.10328643211837,
        "lng": 34.7818,
        "country": "Israel"
    },
    {
        "rank": 1045,
        "name": "Llanelli",
        "lat": 51.6781,
        "lng": -4.1615,
        "country": "Wales"
    },
    {
        "rank": 1046,
        "name": "Paços de Ferreira",
        "lat": 41.2781,
        "lng": -8.3764,
        "country": "Portugal"
    },
    {
        "rank": 1047,
        "name": "AFC UTA Arad",
        "lat": 46.1865,
        "lng": 21.3122,
        "country": "Romania"
    },
    {
        "rank": 1048,
        "name": "Drogheda United",
        "lat": 53.7189,
        "lng": -6.3578,
        "country": "Ireland"
    },
    {
        "rank": 1049,
        "name": "Union de Touarga",
        "lat": 33.9716,
        "lng": -6.8498,
        "country": "Morocco"
    },
    {
        "rank": 1050,
        "name": "Arles",
        "lat": 43.6761,
        "lng": 4.6306,
        "country": "France"
    },
    {
        "rank": 1051,
        "name": "Carabobo FC",
        "lat": 10.2442,
        "lng": -68.0075,
        "country": "Venezuela"
    },
    {
        "rank": 1052,
        "name": "FC Haka J",
        "lat": 61.1986,
        "lng": 28.7903,
        "country": "Finland"
    },
    {
        "rank": 1053,
        "name": "FK AGMK",
        "lat": 40.1167,
        "lng": 67.8417,
        "country": "Uzbekistan"
    },
    {
        "rank": 1054,
        "name": "Katsina United",
        "lat": 12.9908,
        "lng": 7.6018,
        "country": "Nigeria"
    },
    {
        "rank": 1055,
        "name": "GKS Katowice",
        "lat": 50.2649,
        "lng": 19.0238,
        "country": "Poland"
    },
    {
        "rank": 1056,
        "name": "Deportes Iquique",
        "lat": -20.2208,
        "lng": -70.1431,
        "country": "Chile"
    },
    {
        "rank": 1057,
        "name": "Managua FC",
        "lat": 12.1364,
        "lng": -86.2514,
        "country": "Nicaragua"
    },
    {
        "rank": 1058,
        "name": "Cardiff Met University",
        "lat": 51.49958643211838,
        "lng": -3.1791,
        "country": "Wales"
    },
    {
        "rank": 1059,
        "name": "Beira-Mar",
        "lat": 40.6333,
        "lng": -8.65,
        "country": "Portugal"
    },
    {
        "rank": 1060,
        "name": "Recreativo da Caála",
        "lat": -12.85,
        "lng": 15.15,
        "country": "Angola"
    },
    {
        "rank": 1061,
        "name": "Sport Áncash",
        "lat": -9.525,
        "lng": -77.5306,
        "country": "Peru"
    },
    {
        "rank": 1062,
        "name": "Panetolikos",
        "lat": 38.2466,
        "lng": 21.7306,
        "country": "Greece"
    },
    {
        "rank": 1063,
        "name": "Real Tomayapo",
        "lat": -21.5355,
        "lng": -64.7296,
        "country": "Bolivia"
    },
    {
        "rank": 1064,
        "name": "Club de Deportes Limache",
        "lat": -33.0167,
        "lng": -71.2667,
        "country": "Chile"
    },
    {
        "rank": 1065,
        "name": "Nacional",
        "lat": 38.76105929635513,
        "lng": -9.3983,
        "country": "Portugal"
    },
    {
        "rank": 1066,
        "name": "Crusaders",
        "lat": 54.67847286423675,
        "lng": -5.9311,
        "country": "Northern Ireland"
    },
    {
        "rank": 1067,
        "name": "Henan Songshan Longmen F.C.",
        "lat": 34.7578,
        "lng": 113.6486,
        "country": "China PR"
    },
    {
        "rank": 1068,
        "name": "San Luis FC",
        "lat": 22.174486432118375,
        "lng": -100.9855,
        "country": "Mexico"
    },
    {
        "rank": 1069,
        "name": "Al-Arabi Doha",
        "lat": 25.36593216059187,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 1070,
        "name": "Rangers",
        "lat": -33.358967839408145,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 1071,
        "name": "Jorge Wilstermann",
        "lat": -17.3895,
        "lng": -66.1568,
        "country": "Bolivia"
    },
    {
        "rank": 1072,
        "name": "AmaZulu FC",
        "lat": -29.8587,
        "lng": 31.0218,
        "country": "South Africa"
    },
    {
        "rank": 1073,
        "name": "Kisvárda Master Good",
        "lat": 48.2167,
        "lng": 22.0833,
        "country": "Hungary"
    },
    {
        "rank": 1074,
        "name": "Erzurum BB",
        "lat": 39.9208,
        "lng": 41.2769,
        "country": "Turkey"
    },
    {
        "rank": 1075,
        "name": "La Luz FC",
        "lat": -34.660276382461156,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1076,
        "name": "Dorados Sinaloa",
        "lat": 25.7903,
        "lng": -108.985,
        "country": "Mexico"
    },
    {
        "rank": 1077,
        "name": "Medeama SC",
        "lat": 5.6037,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1078,
        "name": "New Soger",
        "lat": -4.351967839408128,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 1079,
        "name": "Melbourne Victory",
        "lat": -37.80731356788163,
        "lng": 144.9831,
        "country": "Australia"
    },
    {
        "rank": 1080,
        "name": "FC Emmen",
        "lat": 52.7792,
        "lng": 6.9003,
        "country": "Netherlands"
    },
    {
        "rank": 1081,
        "name": "Llaneros F.C.",
        "lat": 4.1533,
        "lng": -73.635,
        "country": "Colombia"
    },
    {
        "rank": 1082,
        "name": "Vysočina Jihlava",
        "lat": 49.3961,
        "lng": 15.5906,
        "country": "Czech Republic"
    },
    {
        "rank": 1083,
        "name": "Kaizer Chiefs",
        "lat": -26.21748704226375,
        "lng": 28.06068918585839,
        "country": "South Africa"
    },
    {
        "rank": 1084,
        "name": "Portmore United FC",
        "lat": 17.95,
        "lng": -76.8833,
        "country": "Jamaica"
    },
    {
        "rank": 1085,
        "name": "Deportivo Quevedo",
        "lat": -1.0333,
        "lng": -79.4667,
        "country": "Ecuador"
    },
    {
        "rank": 1086,
        "name": "Qingdao West Coast F.C.",
        "lat": 36.0671,
        "lng": 120.3826,
        "country": "China PR"
    },
    {
        "rank": 1087,
        "name": "Nueve de Octubre",
        "lat": -2.1167407036448767,
        "lng": -79.93530000000001,
        "country": "Ecuador"
    },
    {
        "rank": 1088,
        "name": "ZED FC",
        "lat": 30.12893985845905,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1089,
        "name": "Korona Kielce",
        "lat": 50.8661,
        "lng": 20.6286,
        "country": "Poland"
    },
    {
        "rank": 1090,
        "name": "Warri Wolves FC",
        "lat": 5.5164,
        "lng": 5.75,
        "country": "Nigeria"
    },
    {
        "rank": 1091,
        "name": "Santiago Morning",
        "lat": -33.340981407289775,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 1092,
        "name": "Khazar Lankaran FK",
        "lat": 38.7542,
        "lng": 48.85,
        "country": "Azerbaijan"
    },
    {
        "rank": 1093,
        "name": "AS Magenta",
        "lat": -22.2788,
        "lng": 166.4441,
        "country": "New Caledonia"
    },
    {
        "rank": 1094,
        "name": "Tondela",
        "lat": 40.5167,
        "lng": -8.0833,
        "country": "Portugal"
    },
    {
        "rank": 1095,
        "name": "Chaves",
        "lat": 41.74,
        "lng": -7.4678,
        "country": "Portugal"
    },
    {
        "rank": 1096,
        "name": "Sloboda Užice",
        "lat": 43.8583,
        "lng": 19.8667,
        "country": "Serbia"
    },
    {
        "rank": 1097,
        "name": "Livorno",
        "lat": 43.5428,
        "lng": 10.3106,
        "country": "Italy"
    },
    {
        "rank": 1098,
        "name": "Mordovia Saransk",
        "lat": 54.1838,
        "lng": 45.1749,
        "country": "Russia"
    },
    {
        "rank": 1099,
        "name": "De Graafschap",
        "lat": 51.9225,
        "lng": 6.1133,
        "country": "Netherlands"
    },
    {
        "rank": 1100,
        "name": "Chacarita Juniors",
        "lat": -34.5881,
        "lng": -58.4519,
        "country": "Argentina"
    },
    {
        "rank": 1101,
        "name": "Zirə",
        "lat": 40.445272864236756,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 1102,
        "name": "JSM Béjaïa",
        "lat": 36.7617,
        "lng": 5.0675,
        "country": "Algeria"
    },
    {
        "rank": 1103,
        "name": "FK Mladost Lučani",
        "lat": 43.8711,
        "lng": 20.1397,
        "country": "Serbia"
    },
    {
        "rank": 1104,
        "name": "Club Atlético Tembetary",
        "lat": -25.011889950342773,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1105,
        "name": "Strømsgodset",
        "lat": 59.7167,
        "lng": 10.05,
        "country": "Norway"
    },
    {
        "rank": 1106,
        "name": "Dijon",
        "lat": 47.322,
        "lng": 5.0415,
        "country": "France"
    },
    {
        "rank": 1107,
        "name": "Cavaliers FC",
        "lat": 18.035886432118378,
        "lng": -76.8099,
        "country": "Jamaica"
    },
    {
        "rank": 1108,
        "name": "Chapecoense AF",
        "lat": -27.0945,
        "lng": -52.6181,
        "country": "Brazil"
    },
    {
        "rank": 1109,
        "name": "Guaireña FC",
        "lat": -24.9939035182244,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1110,
        "name": "AVS Futebol SAD",
        "lat": 40.64975255912176,
        "lng": -8.659578398725618,
        "country": "Portugal"
    },
    {
        "rank": 1111,
        "name": "USM Khenchela",
        "lat": 35.4361,
        "lng": 7.1433,
        "country": "Algeria"
    },
    {
        "rank": 1112,
        "name": "Heart of Lions",
        "lat": 6.706486432118375,
        "lng": -1.6244,
        "country": "Ghana"
    },
    {
        "rank": 1113,
        "name": "Tigres FC",
        "lat": 4.645672864236751,
        "lng": -74.0817,
        "country": "Colombia"
    },
    {
        "rank": 1114,
        "name": "Excelsior",
        "lat": 51.94048643211838,
        "lng": 4.4792,
        "country": "Netherlands"
    },
    {
        "rank": 1115,
        "name": "Aduana Stars",
        "lat": 7.3386,
        "lng": -2.32,
        "country": "Ghana"
    },
    {
        "rank": 1116,
        "name": "Mura 05",
        "lat": 46.679086432118375,
        "lng": 16.1697,
        "country": "Slovenia"
    },
    {
        "rank": 1117,
        "name": "El Geish",
        "lat": 30.14692629057741,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1118,
        "name": "Naval 1º de Maio",
        "lat": 38.779045728473506,
        "lng": -9.3983,
        "country": "Portugal"
    },
    {
        "rank": 1119,
        "name": "Unión San Felipe",
        "lat": -32.75,
        "lng": -70.7333,
        "country": "Chile"
    },
    {
        "rank": 1120,
        "name": "Khimki",
        "lat": 55.897,
        "lng": 37.4296,
        "country": "Russia"
    },
    {
        "rank": 1121,
        "name": "Western Sydney",
        "lat": -33.7975,
        "lng": 150.9019,
        "country": "Australia"
    },
    {
        "rank": 1122,
        "name": "Bloemfontein Celtic",
        "lat": -29.0852,
        "lng": 26.1596,
        "country": "South Africa"
    },
    {
        "rank": 1123,
        "name": "Canterbury United",
        "lat": -43.5321,
        "lng": 172.6362,
        "country": "New Zealand"
    },
    {
        "rank": 1124,
        "name": "San Marcos",
        "lat": -33.32299497517139,
        "lng": -70.6693,
        "country": "Chile"
    },
    {
        "rank": 1125,
        "name": "Sagan Tosu",
        "lat": 33.3167,
        "lng": 130.5167,
        "country": "Japan"
    },
    {
        "rank": 1126,
        "name": "Hearts of Oak",
        "lat": 5.621686432118374,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1127,
        "name": "SPAL 2013",
        "lat": 44.8379,
        "lng": 11.6197,
        "country": "Italy"
    },
    {
        "rank": 1128,
        "name": "Lokomotiv Tashkent",
        "lat": 41.33547286423675,
        "lng": 69.2401,
        "country": "Uzbekistan"
    },
    {
        "rank": 1129,
        "name": "Honvéd",
        "lat": 47.553245728473506,
        "lng": 19.0424,
        "country": "Hungary"
    },
    {
        "rank": 1130,
        "name": "Podbrezová",
        "lat": 48.8167,
        "lng": 19.6167,
        "country": "Slovakia"
    },
    {
        "rank": 1131,
        "name": "Sud América",
        "lat": -34.64228995034278,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1132,
        "name": "Zaria Bălți",
        "lat": 47.7619,
        "lng": 27.9289,
        "country": "Moldova"
    },
    {
        "rank": 1133,
        "name": "Ma Pau",
        "lat": 10.709786432118374,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 1134,
        "name": "Široki Brijeg",
        "lat": 43.3839,
        "lng": 17.5983,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 1135,
        "name": "CD Magallanes",
        "lat": -53.1638,
        "lng": -70.9171,
        "country": "Chile"
    },
    {
        "rank": 1136,
        "name": "Petrolul Ploieşti",
        "lat": 44.971686432118375,
        "lng": 26.0157,
        "country": "Romania"
    },
    {
        "rank": 1137,
        "name": "Kecskeméti TE",
        "lat": 46.9074,
        "lng": 19.6897,
        "country": "Hungary"
    },
    {
        "rank": 1138,
        "name": "Heartland FC",
        "lat": 5.4242,
        "lng": 7.003,
        "country": "Nigeria"
    },
    {
        "rank": 1139,
        "name": "River Plate",
        "lat": -34.6243035182244,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1140,
        "name": "NC Magra",
        "lat": 36.82785572566822,
        "lng": 3.0516540890526445,
        "country": "Algeria"
    },
    {
        "rank": 1141,
        "name": "Sporting San Miguelito",
        "lat": 9.0369,
        "lng": -79.4856,
        "country": "Panama"
    },
    {
        "rank": 1142,
        "name": "Grasshopper Club Zürich",
        "lat": 47.39488643211837,
        "lng": 8.5417,
        "country": "Switzerland"
    },
    {
        "rank": 1143,
        "name": "Astres FC de Douala",
        "lat": 4.08707286423675,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 1144,
        "name": "Etoile Metlaoui",
        "lat": 34.4167,
        "lng": 8.4,
        "country": "Tunisia"
    },
    {
        "rank": 1145,
        "name": "Omiya Ardija",
        "lat": 35.9069,
        "lng": 139.6233,
        "country": "Japan"
    },
    {
        "rank": 1146,
        "name": "Pendikspor",
        "lat": 40.878,
        "lng": 29.2344,
        "country": "Turkey"
    },
    {
        "rank": 1147,
        "name": "Wikki Tourist",
        "lat": 11.1833,
        "lng": 9.6333,
        "country": "Nigeria"
    },
    {
        "rank": 1148,
        "name": "Pharco FC",
        "lat": 31.254059296355113,
        "lng": 29.9187,
        "country": "Egypt"
    },
    {
        "rank": 1149,
        "name": "FK Sileks",
        "lat": 42.00938643211838,
        "lng": 20.9619,
        "country": "Macedonia"
    },
    {
        "rank": 1150,
        "name": "Ittihad Tanger",
        "lat": 35.7595,
        "lng": -5.834,
        "country": "Morocco"
    },
    {
        "rank": 1151,
        "name": "FC Ashdod",
        "lat": 31.794,
        "lng": 34.6559,
        "country": "Israel"
    },
    {
        "rank": 1152,
        "name": "Zavrč",
        "lat": 46.3956,
        "lng": 15.8122,
        "country": "Slovenia"
    },
    {
        "rank": 1153,
        "name": "Young Africans",
        "lat": -6.8051628747406046,
        "lng": 39.22106337668315,
        "country": "Tanzania"
    },
    {
        "rank": 1154,
        "name": "Deportivo Capiatá",
        "lat": -25.35,
        "lng": -57.4333,
        "country": "Paraguay"
    },
    {
        "rank": 1155,
        "name": "Hilal Al-Obayed",
        "lat": 13.2833,
        "lng": 30.2167,
        "country": "Sudan"
    },
    {
        "rank": 1156,
        "name": "Deportivo Mixco",
        "lat": 14.688859296355126,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 1157,
        "name": "Difaâ El Jadida",
        "lat": 33.2316,
        "lng": -8.5007,
        "country": "Morocco"
    },
    {
        "rank": 1158,
        "name": "Stade d'Abidjan",
        "lat": 5.3903592963551255,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1159,
        "name": "Sion",
        "lat": 46.2276,
        "lng": 7.3606,
        "country": "Switzerland"
    },
    {
        "rank": 1160,
        "name": "KS Warta Poznań",
        "lat": 52.42488643211837,
        "lng": 16.9299,
        "country": "Poland"
    },
    {
        "rank": 1161,
        "name": "Chonburi FC",
        "lat": 13.3611,
        "lng": 100.9847,
        "country": "Thailand"
    },
    {
        "rank": 1162,
        "name": "Atheltic Club Port of Spain",
        "lat": 10.72777286423675,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 1163,
        "name": "Ethnikos Achnas",
        "lat": 35.239559296355125,
        "lng": 33.3823,
        "country": "Cyprus"
    },
    {
        "rank": 1164,
        "name": "ZPC Kariba",
        "lat": -16.5167,
        "lng": 28.8,
        "country": "Zimbabwe"
    },
    {
        "rank": 1165,
        "name": "Radomiak Radom",
        "lat": 51.4027,
        "lng": 21.1471,
        "country": "Poland"
    },
    {
        "rank": 1166,
        "name": "Cobreloa",
        "lat": -22.4523,
        "lng": -68.9279,
        "country": "Chile"
    },
    {
        "rank": 1167,
        "name": "Stal Kamianske",
        "lat": 48.5132,
        "lng": 34.6267,
        "country": "Ukraine"
    },
    {
        "rank": 1168,
        "name": "Znojmo",
        "lat": 48.8555,
        "lng": 16.0488,
        "country": "Czech Republic"
    },
    {
        "rank": 1169,
        "name": "Bengaluru FC",
        "lat": 12.9716,
        "lng": 77.5946,
        "country": "India"
    },
    {
        "rank": 1170,
        "name": "Košice",
        "lat": 48.7164,
        "lng": 21.2611,
        "country": "Slovakia"
    },
    {
        "rank": 1171,
        "name": "Bella Vista",
        "lat": -34.606317086106024,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1172,
        "name": "Sligo Rovers",
        "lat": 54.2697,
        "lng": -8.4694,
        "country": "Ireland"
    },
    {
        "rank": 1173,
        "name": "Veres Rivne",
        "lat": 50.6199,
        "lng": 26.2516,
        "country": "Ukraine"
    },
    {
        "rank": 1174,
        "name": "Apejes de Mfou",
        "lat": 3.7167,
        "lng": 11.6333,
        "country": "Cameroon"
    },
    {
        "rank": 1175,
        "name": "La Equidad",
        "lat": 4.663659296355126,
        "lng": -74.0817,
        "country": "Colombia"
    },
    {
        "rank": 1176,
        "name": "MyPa",
        "lat": 60.7783,
        "lng": 26.9561,
        "country": "Finland"
    },
    {
        "rank": 1177,
        "name": "Stella Club",
        "lat": 5.4083457284735,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1178,
        "name": "Universitario de Vinto",
        "lat": -17.371513567881628,
        "lng": -66.1568,
        "country": "Bolivia"
    },
    {
        "rank": 1179,
        "name": "Sport Colombia",
        "lat": -24.975917086106023,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1180,
        "name": "Annaba",
        "lat": 36.9,
        "lng": 7.7667,
        "country": "Algeria"
    },
    {
        "rank": 1181,
        "name": "Trenčín",
        "lat": 48.8946,
        "lng": 18.0438,
        "country": "Slovakia"
    },
    {
        "rank": 1182,
        "name": "East Bengal Club",
        "lat": 22.59058643211838,
        "lng": 88.3639,
        "country": "India"
    },
    {
        "rank": 1183,
        "name": "Ventspils",
        "lat": 57.3944,
        "lng": 21.5583,
        "country": "Latvia"
    },
    {
        "rank": 1184,
        "name": "Bakı",
        "lat": 40.463259296355126,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 1185,
        "name": "C.A. Cerro",
        "lat": -34.58833065398765,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1186,
        "name": "Waterhouse FC",
        "lat": 18.05387286423676,
        "lng": -76.8099,
        "country": "Jamaica"
    },
    {
        "rank": 1187,
        "name": "General Caballero",
        "lat": -24.95793065398765,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1188,
        "name": "San Antonio Bulo Bulo",
        "lat": -17.4167,
        "lng": -63.5333,
        "country": "Bolivia"
    },
    {
        "rank": 1189,
        "name": "Hassania Agadir",
        "lat": 30.4278,
        "lng": -9.5981,
        "country": "Morocco"
    },
    {
        "rank": 1190,
        "name": "Deportes La Serena",
        "lat": -29.9027,
        "lng": -71.2519,
        "country": "Chile"
    },
    {
        "rank": 1191,
        "name": "W Connection FC",
        "lat": 10.745759296355125,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 1192,
        "name": "Club Atletico Progreso",
        "lat": -34.57034422186928,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1193,
        "name": "FC Voluntari",
        "lat": 44.50185929635512,
        "lng": 26.0979,
        "country": "Romania"
    },
    {
        "rank": 1194,
        "name": "Sporting San José FC",
        "lat": 10.015986432118376,
        "lng": -84.11,
        "country": "Costa Rica"
    },
    {
        "rank": 1195,
        "name": "Motherwell",
        "lat": 55.7886,
        "lng": -3.9825,
        "country": "Scotland"
    },
    {
        "rank": 1196,
        "name": "Ventforet Kofu",
        "lat": 35.6681,
        "lng": 138.5681,
        "country": "Japan"
    },
    {
        "rank": 1197,
        "name": "Ben Guerdane",
        "lat": 33.1397,
        "lng": 11.2189,
        "country": "Tunisia"
    },
    {
        "rank": 1198,
        "name": "Braşov",
        "lat": 45.658,
        "lng": 25.6012,
        "country": "Romania"
    },
    {
        "rank": 1199,
        "name": "AS Fortuna",
        "lat": 3.9577321605918745,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1200,
        "name": "Academia Puerto Cabello",
        "lat": 10.4733,
        "lng": -68.0125,
        "country": "Venezuela"
    },
    {
        "rank": 1201,
        "name": "Olhanense",
        "lat": 37.03738643211838,
        "lng": -7.9322,
        "country": "Portugal"
    },
    {
        "rank": 1202,
        "name": "Inverness CT",
        "lat": 57.4778,
        "lng": -4.2247,
        "country": "Scotland"
    },
    {
        "rank": 1203,
        "name": "Domžale",
        "lat": 46.1367,
        "lng": 14.5928,
        "country": "Slovenia"
    },
    {
        "rank": 1204,
        "name": "FC Arsenal Kiev",
        "lat": 50.46018643211838,
        "lng": 30.5367,
        "country": "Ukraine"
    },
    {
        "rank": 1205,
        "name": "Sunshine Stars",
        "lat": 7.25,
        "lng": 5.2,
        "country": "Nigeria"
    },
    {
        "rank": 1206,
        "name": "Club River Plate",
        "lat": -24.939944221869276,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1207,
        "name": "Stade Gabésien",
        "lat": 33.8815,
        "lng": 10.0982,
        "country": "Tunisia"
    },
    {
        "rank": 1208,
        "name": "Vorskla Poltava",
        "lat": 49.5883,
        "lng": 34.5514,
        "country": "Ukraine"
    },
    {
        "rank": 1209,
        "name": "Club Deportivo Maldonado",
        "lat": -34.9,
        "lng": -54.9667,
        "country": "Uruguay"
    },
    {
        "rank": 1210,
        "name": "Sevastopol",
        "lat": 44.6167,
        "lng": 33.5167,
        "country": "Ukraine"
    },
    {
        "rank": 1211,
        "name": "Léopards de Dolisié",
        "lat": -4.2036,
        "lng": 12.6728,
        "country": "Congo"
    },
    {
        "rank": 1212,
        "name": "Rhyl",
        "lat": 53.3167,
        "lng": -3.4833,
        "country": "Wales"
    },
    {
        "rank": 1213,
        "name": "Highlands Park",
        "lat": -26.150140703644883,
        "lng": 28.0473,
        "country": "South Africa"
    },
    {
        "rank": 1214,
        "name": "Royal Excel Mouscron Péruwelz",
        "lat": 50.76158643211838,
        "lng": 3.2072,
        "country": "Belgium"
    },
    {
        "rank": 1215,
        "name": "Club Petrolero",
        "lat": -17.765313567881623,
        "lng": -63.18330000000001,
        "country": "Bolivia"
    },
    {
        "rank": 1216,
        "name": "Adelaide United",
        "lat": -34.9285,
        "lng": 138.6007,
        "country": "Australia"
    },
    {
        "rank": 1217,
        "name": "Železničar Pančevo",
        "lat": 44.8704,
        "lng": 20.64,
        "country": "Serbia"
    },
    {
        "rank": 1218,
        "name": "Patriotas Boyacá",
        "lat": 5.5333,
        "lng": -73.3667,
        "country": "Colombia"
    },
    {
        "rank": 1219,
        "name": "Albirex Niigata",
        "lat": 37.9161,
        "lng": 139.0364,
        "country": "Japan"
    },
    {
        "rank": 1220,
        "name": "Kristiansund BK",
        "lat": 63.11,
        "lng": 7.7389,
        "country": "Norway"
    },
    {
        "rank": 1221,
        "name": "Lamontville Golden Arrows",
        "lat": -29.84071356788162,
        "lng": 31.021799999999995,
        "country": "South Africa"
    },
    {
        "rank": 1222,
        "name": "Botafogo FC",
        "lat": 3.975718592710249,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1223,
        "name": "IF Gnistan",
        "lat": 60.19358643211838,
        "lng": 24.934200000000004,
        "country": "Finland"
    },
    {
        "rank": 1224,
        "name": "Uniautónoma FC",
        "lat": 11.017859296355125,
        "lng": -74.7964,
        "country": "Colombia"
    },
    {
        "rank": 1225,
        "name": "Blau-Weiß Linz",
        "lat": 48.32488643211837,
        "lng": 14.2858,
        "country": "Austria"
    },
    {
        "rank": 1226,
        "name": "Colorado Rapids",
        "lat": 39.8061,
        "lng": -104.8919,
        "country": "United States"
    },
    {
        "rank": 1227,
        "name": "Sfîntul Gheorghe",
        "lat": 45.884686432118386,
        "lng": 25.7833,
        "country": "Moldova"
    },
    {
        "rank": 1228,
        "name": "FK IMT",
        "lat": 44.87674572847351,
        "lng": 20.4781,
        "country": "Serbia"
    },
    {
        "rank": 1229,
        "name": "Tianjin Tianhai",
        "lat": 39.36138643211837,
        "lng": 117.3616,
        "country": "China PR"
    },
    {
        "rank": 1230,
        "name": "Panionios",
        "lat": 37.9444,
        "lng": 23.6947,
        "country": "Greece"
    },
    {
        "rank": 1231,
        "name": "HNK Gorica",
        "lat": 46.32043747640558,
        "lng": 16.32491071458934,
        "country": "Croatia"
    },
    {
        "rank": 1232,
        "name": "Ittihad El-Shorta",
        "lat": 30.16491272269578,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1233,
        "name": "Botoşani",
        "lat": 47.7411,
        "lng": 26.6686,
        "country": "Romania"
    },
    {
        "rank": 1234,
        "name": "Ionikos",
        "lat": 37.962386432118386,
        "lng": 23.6947,
        "country": "Greece"
    },
    {
        "rank": 1235,
        "name": "Atlante",
        "lat": 19.391059296355124,
        "lng": -99.2611,
        "country": "Mexico"
    },
    {
        "rank": 1236,
        "name": "Chiangrai United",
        "lat": 19.9106,
        "lng": 99.8325,
        "country": "Thailand"
    },
    {
        "rank": 1237,
        "name": "US Biskra",
        "lat": 34.85,
        "lng": 5.7333,
        "country": "Algeria"
    },
    {
        "rank": 1238,
        "name": "Roeselare",
        "lat": 50.9467,
        "lng": 3.1333,
        "country": "Belgium"
    },
    {
        "rank": 1239,
        "name": "Orduspor",
        "lat": 40.9839,
        "lng": 37.8764,
        "country": "Turkey"
    },
    {
        "rank": 1240,
        "name": "Balıkesirspor",
        "lat": 39.6484,
        "lng": 27.8826,
        "country": "Turkey"
    },
    {
        "rank": 1241,
        "name": "Motor Lublin",
        "lat": 51.2465,
        "lng": 22.5684,
        "country": "Poland"
    },
    {
        "rank": 1242,
        "name": "Bukola Babes",
        "lat": 6.4474,
        "lng": 3.3903,
        "country": "Nigeria"
    },
    {
        "rank": 1243,
        "name": "Odense Boldklub",
        "lat": 55.4038,
        "lng": 10.4024,
        "country": "Denmark"
    },
    {
        "rank": 1244,
        "name": "Maniema Union",
        "lat": -4.333981407289754,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 1245,
        "name": "Pars Jonoubi Jam",
        "lat": 27.8394,
        "lng": 52.8661,
        "country": "Iran"
    },
    {
        "rank": 1246,
        "name": "3 de Febrero",
        "lat": -24.921957789750905,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1247,
        "name": "FK Gorodeya",
        "lat": 53.3167,
        "lng": 25.3167,
        "country": "Belarus"
    },
    {
        "rank": 1248,
        "name": "USM El Harrach",
        "lat": 36.7167,
        "lng": 3.1333,
        "country": "Algeria"
    },
    {
        "rank": 1249,
        "name": "Austin FC",
        "lat": -34.55235778975091,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1250,
        "name": "Isidro Metapán",
        "lat": 14.3333,
        "lng": -89.45,
        "country": "El Salvador"
    },
    {
        "rank": 1251,
        "name": "Bnei Sakhnin",
        "lat": 32.8667,
        "lng": 35.2833,
        "country": "Israel"
    },
    {
        "rank": 1252,
        "name": "Fovu de Baham",
        "lat": 5.2833,
        "lng": 10.3833,
        "country": "Cameroon"
    },
    {
        "rank": 1253,
        "name": "River Plate Ecuador",
        "lat": -2.098754271526502,
        "lng": -79.93530000000001,
        "country": "Ecuador"
    },
    {
        "rank": 1254,
        "name": "FC Winterthur",
        "lat": 47.5058,
        "lng": 8.724,
        "country": "Switzerland"
    },
    {
        "rank": 1255,
        "name": "Caernarfon",
        "lat": 53.1396,
        "lng": -4.2764,
        "country": "Wales"
    },
    {
        "rank": 1256,
        "name": "Dečić",
        "lat": 42.49617286423675,
        "lng": 19.2595,
        "country": "Montenegro"
    },
    {
        "rank": 1257,
        "name": "Deportivo Los Caimanes",
        "lat": -11.971354271526506,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 1258,
        "name": "RC Arbaâ",
        "lat": 36.1833,
        "lng": 3.3167,
        "country": "Algeria"
    },
    {
        "rank": 1259,
        "name": "Hajduk Kula",
        "lat": 45.6167,
        "lng": 19.5167,
        "country": "Serbia"
    },
    {
        "rank": 1260,
        "name": "Hwange",
        "lat": -18.3667,
        "lng": 26.5,
        "country": "Zimbabwe"
    },
    {
        "rank": 1261,
        "name": "Pécsi MFC",
        "lat": 46.0727,
        "lng": 18.233,
        "country": "Hungary"
    },
    {
        "rank": 1262,
        "name": "Deportivo Binacional",
        "lat": -15.8367,
        "lng": -70.0217,
        "country": "Peru"
    },
    {
        "rank": 1263,
        "name": "Sport Loreto",
        "lat": -3.7492,
        "lng": -73.2531,
        "country": "Peru"
    },
    {
        "rank": 1264,
        "name": "Club Puebla",
        "lat": 19.05437044120847,
        "lng": -98.21927191918287,
        "country": "Mexico"
    },
    {
        "rank": 1265,
        "name": "AD Guanacasteca",
        "lat": 10.4806,
        "lng": -84.11,
        "country": "Costa Rica"
    },
    {
        "rank": 1266,
        "name": "Simurq",
        "lat": 40.5736,
        "lng": 49.8478,
        "country": "Azerbaijan"
    },
    {
        "rank": 1267,
        "name": "Juan Aurich",
        "lat": -6.7667,
        "lng": -79.8333,
        "country": "Peru"
    },
    {
        "rank": 1268,
        "name": "Defensor La Bocana",
        "lat": -18.0131,
        "lng": -70.2506,
        "country": "Peru"
    },
    {
        "rank": 1269,
        "name": "Sportivo San Lorenzo",
        "lat": -24.903971357632532,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1270,
        "name": "CAPS United",
        "lat": -17.7532542715265,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1271,
        "name": "Narva Trans",
        "lat": 59.3778,
        "lng": 28.19,
        "country": "Estonia"
    },
    {
        "rank": 1272,
        "name": "Al-Ramtha SC",
        "lat": 32.57358643211837,
        "lng": 35.85,
        "country": "Jordan"
    },
    {
        "rank": 1273,
        "name": "Coleraine",
        "lat": 55.1325,
        "lng": -6.6681,
        "country": "Northern Ireland"
    },
    {
        "rank": 1274,
        "name": "Bechem United",
        "lat": 7.0833,
        "lng": -2.0333,
        "country": "Ghana"
    },
    {
        "rank": 1275,
        "name": "OFK Beograd",
        "lat": 44.894732160591886,
        "lng": 20.4781,
        "country": "Serbia"
    },
    {
        "rank": 1276,
        "name": "Desportivo Da Huíla",
        "lat": -14.9167,
        "lng": 13.5667,
        "country": "Angola"
    },
    {
        "rank": 1277,
        "name": "Al-Wakra",
        "lat": 25.1647,
        "lng": 51.6061,
        "country": "Qatar"
    },
    {
        "rank": 1278,
        "name": "CD FAS",
        "lat": 13.746859296355124,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 1279,
        "name": "Académica",
        "lat": 40.2033,
        "lng": -8.4103,
        "country": "Portugal"
    },
    {
        "rank": 1280,
        "name": "Curicó Unido",
        "lat": -34.9833,
        "lng": -71.2333,
        "country": "Chile"
    },
    {
        "rank": 1281,
        "name": "Lechia Gdańsk",
        "lat": 54.352,
        "lng": 18.6466,
        "country": "Poland"
    },
    {
        "rank": 1282,
        "name": "Spartak Nal'chik",
        "lat": 43.4986,
        "lng": 43.6169,
        "country": "Russia"
    },
    {
        "rank": 1283,
        "name": "Persebaya Surabaya",
        "lat": -7.2575,
        "lng": 112.7521,
        "country": "Indonesia"
    },
    {
        "rank": 1284,
        "name": "Zagłębie Lubin",
        "lat": 51.4014,
        "lng": 16.1619,
        "country": "Poland"
    },
    {
        "rank": 1285,
        "name": "Sandefjord Football",
        "lat": 59.1311,
        "lng": 10.2164,
        "country": "Norway"
    },
    {
        "rank": 1286,
        "name": "FK Rotor Volgograd",
        "lat": 48.708,
        "lng": 44.5133,
        "country": "Russia"
    },
    {
        "rank": 1287,
        "name": "Bakaridjan de Barouéli",
        "lat": 13.1,
        "lng": -6.65,
        "country": "Mali"
    },
    {
        "rank": 1288,
        "name": "Manica Diamonds",
        "lat": -18.9667,
        "lng": 32.6667,
        "country": "Zimbabwe"
    },
    {
        "rank": 1289,
        "name": "Independiente Petrolero",
        "lat": -17.74732713576325,
        "lng": -63.18330000000001,
        "country": "Bolivia"
    },
    {
        "rank": 1290,
        "name": "Imbabura S.C.",
        "lat": 0.35,
        "lng": -78.1167,
        "country": "Ecuador"
    },
    {
        "rank": 1291,
        "name": "Kayseri Erciyesspor",
        "lat": 38.75488643211838,
        "lng": 35.4906,
        "country": "Turkey"
    },
    {
        "rank": 1292,
        "name": "Almere City FC",
        "lat": 52.3508,
        "lng": 5.2647,
        "country": "Netherlands"
    },
    {
        "rank": 1293,
        "name": "Al-Ittihad Alexandria",
        "lat": 31.27204572847349,
        "lng": 29.9187,
        "country": "Egypt"
    },
    {
        "rank": 1294,
        "name": "Fagiano Okayama",
        "lat": 34.6617,
        "lng": 133.9341,
        "country": "Japan"
    },
    {
        "rank": 1295,
        "name": "Metalist Kharkiv",
        "lat": 49.9935,
        "lng": 36.2304,
        "country": "Ukraine"
    },
    {
        "rank": 1296,
        "name": "Saipa FC",
        "lat": 35.7219,
        "lng": 51.3347,
        "country": "Iran"
    },
    {
        "rank": 1297,
        "name": "Cumbayá FC",
        "lat": -0.2083,
        "lng": -78.4167,
        "country": "Ecuador"
    },
    {
        "rank": 1298,
        "name": "Yenisey Krasnoyarsk",
        "lat": 56.0184,
        "lng": 92.8672,
        "country": "Russia"
    },
    {
        "rank": 1299,
        "name": "Universidad César Vallejo",
        "lat": -8.1116,
        "lng": -79.0287,
        "country": "Peru"
    },
    {
        "rank": 1300,
        "name": "AS Tanda",
        "lat": 7.8,
        "lng": -3.1667,
        "country": "Ivory Coast"
    },
    {
        "rank": 1301,
        "name": "Platinum Stars",
        "lat": -25.69492713576325,
        "lng": 28.2184,
        "country": "South Africa"
    },
    {
        "rank": 1302,
        "name": "Deportivo Carapeguá",
        "lat": -25.7833,
        "lng": -57.2667,
        "country": "Paraguay"
    },
    {
        "rank": 1303,
        "name": "Voždovac",
        "lat": 44.91271859271026,
        "lng": 20.4781,
        "country": "Serbia"
    },
    {
        "rank": 1304,
        "name": "Leixões",
        "lat": 41.1844,
        "lng": -8.7006,
        "country": "Portugal"
    },
    {
        "rank": 1305,
        "name": "Recreativo do Libolo",
        "lat": -8.68779497517138,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 1306,
        "name": "Gençlerbirligi",
        "lat": 39.95677286423676,
        "lng": 32.8541,
        "country": "Turkey"
    },
    {
        "rank": 1307,
        "name": "Université Ngaoundéré",
        "lat": 7.3167,
        "lng": 13.5833,
        "country": "Cameroon"
    },
    {
        "rank": 1308,
        "name": "Polokwane City",
        "lat": -23.9045,
        "lng": 29.4689,
        "country": "South Africa"
    },
    {
        "rank": 1309,
        "name": "Hapoel Tel Aviv",
        "lat": 32.121272864236744,
        "lng": 34.7818,
        "country": "Israel"
    },
    {
        "rank": 1310,
        "name": "Universidad de San Carlos",
        "lat": 14.7068457284735,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 1311,
        "name": "Manisaspor",
        "lat": 38.6191,
        "lng": 27.4289,
        "country": "Turkey"
    },
    {
        "rank": 1312,
        "name": "Deportivo Sanarate",
        "lat": 14.7883,
        "lng": -89.7097,
        "country": "Guatemala"
    },
    {
        "rank": 1313,
        "name": "CD Jaguares",
        "lat": 7.8939,
        "lng": -75.3981,
        "country": "Colombia"
    },
    {
        "rank": 1314,
        "name": "Kortrijk",
        "lat": 50.828,
        "lng": 3.2648,
        "country": "Belgium"
    },
    {
        "rank": 1315,
        "name": "Damash",
        "lat": 37.4667,
        "lng": 57.3167,
        "country": "Iran"
    },
    {
        "rank": 1316,
        "name": "Cúcuta Deportivo",
        "lat": 7.8939,
        "lng": -72.5078,
        "country": "Colombia"
    },
    {
        "rank": 1317,
        "name": "FK Spartak 1918 Varna",
        "lat": 43.23468643211837,
        "lng": 27.9167,
        "country": "Bulgaria"
    },
    {
        "rank": 1318,
        "name": "Fauve Azur Elite FC",
        "lat": 3.993705024828624,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1319,
        "name": "Altay S.K.",
        "lat": 38.44168643211837,
        "lng": 27.1428,
        "country": "Turkey"
    },
    {
        "rank": 1320,
        "name": "Haverfordwest County",
        "lat": 51.8014,
        "lng": -4.9706,
        "country": "Wales"
    },
    {
        "rank": 1321,
        "name": "Bayamón FC",
        "lat": 18.3946,
        "lng": -66.1641,
        "country": "Puerto Rico"
    },
    {
        "rank": 1322,
        "name": "Sport Boys",
        "lat": -11.0833,
        "lng": -77.65,
        "country": "Peru"
    },
    {
        "rank": 1323,
        "name": "Damac FC",
        "lat": 18.2465,
        "lng": 42.7265,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1324,
        "name": "FK Tosno",
        "lat": 59.5422,
        "lng": 30.8739,
        "country": "Russia"
    },
    {
        "rank": 1325,
        "name": "Grödig",
        "lat": 47.7406,
        "lng": 13.0197,
        "country": "Austria"
    },
    {
        "rank": 1326,
        "name": "Balmazújváros",
        "lat": 47.6167,
        "lng": 21.35,
        "country": "Hungary"
    },
    {
        "rank": 1327,
        "name": "Boavista",
        "lat": 41.1617,
        "lng": -8.6139,
        "country": "Portugal"
    },
    {
        "rank": 1328,
        "name": "DRB Tadjenanet",
        "lat": 36.1167,
        "lng": 5.4667,
        "country": "Algeria"
    },
    {
        "rank": 1329,
        "name": "FC Goa",
        "lat": 15.35325929635513,
        "lng": 74.124,
        "country": "India"
    },
    {
        "rank": 1330,
        "name": "Olympique Akbou",
        "lat": 36.4667,
        "lng": 4.5333,
        "country": "Algeria"
    },
    {
        "rank": 1331,
        "name": "Don Bosco SC",
        "lat": -4.315994975171378,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 1332,
        "name": "Volos New Football Club",
        "lat": 39.381986432118374,
        "lng": 22.9444,
        "country": "Greece"
    },
    {
        "rank": 1333,
        "name": "NAC Breda",
        "lat": 51.5719,
        "lng": 4.7683,
        "country": "Netherlands"
    },
    {
        "rank": 1334,
        "name": "Widzew Łódz",
        "lat": 51.7592,
        "lng": 19.456,
        "country": "Poland"
    },
    {
        "rank": 1335,
        "name": "CD Génesis de Comayagua",
        "lat": 14.45,
        "lng": -87.65,
        "country": "Honduras"
    },
    {
        "rank": 1336,
        "name": "Tacuarembó",
        "lat": -31.7167,
        "lng": -55.9833,
        "country": "Uruguay"
    },
    {
        "rank": 1337,
        "name": "Horoya AC",
        "lat": 9.537,
        "lng": -13.6785,
        "country": "Guinea"
    },
    {
        "rank": 1338,
        "name": "AC Ajaccio (FRA)",
        "lat": 41.93738643211838,
        "lng": 8.7386,
        "country": "France"
    },
    {
        "rank": 1339,
        "name": "ASGNN",
        "lat": 13.5167,
        "lng": 2.1167,
        "country": "Niger"
    },
    {
        "rank": 1340,
        "name": "Vardar Skopje",
        "lat": 42.020386432118386,
        "lng": 21.4361,
        "country": "Macedonia"
    },
    {
        "rank": 1341,
        "name": "ŠKF Sereď",
        "lat": 48.2892,
        "lng": 17.7328,
        "country": "Slovakia"
    },
    {
        "rank": 1342,
        "name": "El Gounah",
        "lat": 27.3958,
        "lng": 33.6781,
        "country": "Egypt"
    },
    {
        "rank": 1343,
        "name": "Lillestrøm",
        "lat": 59.9536,
        "lng": 11.0395,
        "country": "Norway"
    },
    {
        "rank": 1344,
        "name": "FC Krumovgrad",
        "lat": 41.4667,
        "lng": 25.65,
        "country": "Bulgaria"
    },
    {
        "rank": 1345,
        "name": "Monaghan United",
        "lat": 54.2489,
        "lng": -6.9681,
        "country": "Ireland"
    },
    {
        "rank": 1346,
        "name": "Wisła Płock",
        "lat": 52.5461,
        "lng": 19.7067,
        "country": "Poland"
    },
    {
        "rank": 1347,
        "name": "Athens Kallithea F.C.",
        "lat": 37.9453745198595,
        "lng": 23.71747447826292,
        "country": "Greece"
    },
    {
        "rank": 1348,
        "name": "Unirea Urziceni",
        "lat": 44.7167,
        "lng": 26.6333,
        "country": "Romania"
    },
    {
        "rank": 1349,
        "name": "Dewa United F.C.",
        "lat": -6.190813567881626,
        "lng": 106.8456,
        "country": "Indonesia"
    },
    {
        "rank": 1350,
        "name": "WWS Rangers",
        "lat": -17.735267839408127,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1351,
        "name": "Náutico",
        "lat": -8.011627135763252,
        "lng": -34.877,
        "country": "Brazil"
    },
    {
        "rank": 1352,
        "name": "Moroka Swallows",
        "lat": -26.13215427152651,
        "lng": 28.0473,
        "country": "South Africa"
    },
    {
        "rank": 1353,
        "name": "OCK Khouribga",
        "lat": 32.8811,
        "lng": -6.9063,
        "country": "Morocco"
    },
    {
        "rank": 1354,
        "name": "Dundee United",
        "lat": 56.3406,
        "lng": -2.9681,
        "country": "Scotland"
    },
    {
        "rank": 1355,
        "name": "Deportivo Quito",
        "lat": -0.13016783940812698,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 1356,
        "name": "Simba Bhora FC",
        "lat": -17.717281407289757,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1357,
        "name": "Olympique Béja",
        "lat": 36.7281,
        "lng": 9.1847,
        "country": "Tunisia"
    },
    {
        "rank": 1358,
        "name": "Albion F.C.",
        "lat": -34.53437135763253,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1359,
        "name": "Neftchi",
        "lat": 39.6883,
        "lng": 66.9597,
        "country": "Uzbekistan"
    },
    {
        "rank": 1360,
        "name": "Qäbälä",
        "lat": 40.9781,
        "lng": 47.8456,
        "country": "Azerbaijan"
    },
    {
        "rank": 1361,
        "name": "Hatayspor Kulübü",
        "lat": 36.2022,
        "lng": 36.1611,
        "country": "Turkey"
    },
    {
        "rank": 1362,
        "name": "Fénix",
        "lat": -34.51638492551415,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1363,
        "name": "Sporting Gagnoa",
        "lat": 6.1333,
        "lng": -5.95,
        "country": "Ivory Coast"
    },
    {
        "rank": 1364,
        "name": "Yunnan Yukun F.C.",
        "lat": 25.0389,
        "lng": 102.7183,
        "country": "China PR"
    },
    {
        "rank": 1365,
        "name": "Racing Club d'Abidjan",
        "lat": 5.4263321605918735,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1366,
        "name": "Boyacá Chicó FC",
        "lat": 5.551286432118374,
        "lng": -73.3667,
        "country": "Colombia"
    },
    {
        "rank": 1367,
        "name": "FC Minsk",
        "lat": 53.94317286423675,
        "lng": 27.5863,
        "country": "Belarus"
    },
    {
        "rank": 1368,
        "name": "Deportivo Achuapa",
        "lat": 13.05,
        "lng": -86.5833,
        "country": "Guatemala"
    },
    {
        "rank": 1369,
        "name": "Royal Pari",
        "lat": -16.42805427152651,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 1370,
        "name": "FK Spartak Subotica",
        "lat": 46.1,
        "lng": 19.6667,
        "country": "Serbia"
    },
    {
        "rank": 1371,
        "name": "CD America de Quito",
        "lat": -0.11218140728975239,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 1372,
        "name": "Sporting Lagos",
        "lat": 6.465386432118375,
        "lng": 3.3903000000000003,
        "country": "Nigeria"
    },
    {
        "rank": 1373,
        "name": "Newtown",
        "lat": 52.5158,
        "lng": -3.3167,
        "country": "Wales"
    },
    {
        "rank": 1374,
        "name": "Padideh F.C.",
        "lat": 36.2972,
        "lng": 59.6067,
        "country": "Iran"
    },
    {
        "rank": 1375,
        "name": "Kheybar Khorramabad",
        "lat": 33.4878,
        "lng": 48.355,
        "country": "Iran"
    },
    {
        "rank": 1376,
        "name": "Santos Laguna",
        "lat": 25.8688,
        "lng": -103.2275,
        "country": "Mexico"
    },
    {
        "rank": 1377,
        "name": "Oriente Petrolero",
        "lat": -17.72934070364488,
        "lng": -63.18330000000001,
        "country": "Bolivia"
    },
    {
        "rank": 1378,
        "name": "Dynamo de Douala",
        "lat": 4.105059296355124,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 1379,
        "name": "Ifeanyi Ubah United",
        "lat": 6.2,
        "lng": 6.95,
        "country": "Nigeria"
    },
    {
        "rank": 1380,
        "name": "FC U Craiova 1948",
        "lat": 44.34818643211838,
        "lng": 23.7949,
        "country": "Romania"
    },
    {
        "rank": 1381,
        "name": "Estudiantes Tecos",
        "lat": 20.713659296355125,
        "lng": -103.3496,
        "country": "Mexico"
    },
    {
        "rank": 1382,
        "name": "Maccabi Bnei Reineh",
        "lat": 32.7167,
        "lng": 35.1167,
        "country": "Israel"
    },
    {
        "rank": 1383,
        "name": "Tampere United",
        "lat": 61.51708643211837,
        "lng": 23.7871,
        "country": "Finland"
    },
    {
        "rank": 1384,
        "name": "Ben Aknoun",
        "lat": 36.7667,
        "lng": 3.0167,
        "country": "Algeria"
    },
    {
        "rank": 1385,
        "name": "Sibir Novosibirsk",
        "lat": 55.0084,
        "lng": 82.9357,
        "country": "Russia"
    },
    {
        "rank": 1386,
        "name": "Paykan F.C.",
        "lat": 35.74315929635512,
        "lng": 51.389,
        "country": "Iran"
    },
    {
        "rank": 1387,
        "name": "IFK Värnamo",
        "lat": 57.1858,
        "lng": 14.0403,
        "country": "Sweden"
    },
    {
        "rank": 1388,
        "name": "Shams Azar F.C.",
        "lat": 37.2745,
        "lng": 49.5883,
        "country": "Iran"
    },
    {
        "rank": 1389,
        "name": "Chadormalu Sports Club",
        "lat": 32.662672864236754,
        "lng": 51.6889,
        "country": "Iran"
    },
    {
        "rank": 1390,
        "name": "Seongnam FC",
        "lat": 37.4449,
        "lng": 127.1378,
        "country": "South Korea"
    },
    {
        "rank": 1391,
        "name": "Carlos A. Mannucci",
        "lat": -8.093613567881624,
        "lng": -79.0287,
        "country": "Peru"
    },
    {
        "rank": 1392,
        "name": "KACM Marrakech",
        "lat": 31.6295,
        "lng": -7.9811,
        "country": "Morocco"
    },
    {
        "rank": 1393,
        "name": "Petrojet",
        "lat": 29.3705,
        "lng": 30.8418,
        "country": "Egypt"
    },
    {
        "rank": 1394,
        "name": "Radnički Niš",
        "lat": 43.3209,
        "lng": 21.8958,
        "country": "Serbia"
    },
    {
        "rank": 1395,
        "name": "Bhayangkara FC",
        "lat": -6.172827135763251,
        "lng": 106.8456,
        "country": "Indonesia"
    },
    {
        "rank": 1396,
        "name": "St. Louis City",
        "lat": 49.868572864236754,
        "lng": 24.029700000000002,
        "country": "Ukraine"
    },
    {
        "rank": 1397,
        "name": "Nkana FC",
        "lat": -12.826827135763253,
        "lng": 28.1894,
        "country": "Zambia"
    },
    {
        "rank": 1398,
        "name": "Guabirá",
        "lat": -17.711354271526503,
        "lng": -63.18330000000001,
        "country": "Bolivia"
    },
    {
        "rank": 1399,
        "name": "Gualaceo SC",
        "lat": -2.8833,
        "lng": -78.7833,
        "country": "Ecuador"
    },
    {
        "rank": 1400,
        "name": "Berekum Chelsea FC",
        "lat": 7.45,
        "lng": -2.5833,
        "country": "Ghana"
    },
    {
        "rank": 1401,
        "name": "Mons",
        "lat": 50.4542,
        "lng": 3.9563,
        "country": "Belgium"
    },
    {
        "rank": 1402,
        "name": "Ironi Kiryat Schmona",
        "lat": 33.2067,
        "lng": 35.57,
        "country": "Israel"
    },
    {
        "rank": 1403,
        "name": "Puntarenas FC",
        "lat": 9.9761,
        "lng": -84.8413,
        "country": "Costa Rica"
    },
    {
        "rank": 1404,
        "name": "Telephonaat Beni Suef",
        "lat": 29.0661,
        "lng": 31.0994,
        "country": "Egypt"
    },
    {
        "rank": 1405,
        "name": "Brujas",
        "lat": 10.033972864236752,
        "lng": -84.11,
        "country": "Costa Rica"
    },
    {
        "rank": 1406,
        "name": "Academia del Balompi  Boliviano (ABB)",
        "lat": -16.410067839408132,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 1407,
        "name": "Kaisar Kyzylorda",
        "lat": 44.8528,
        "lng": 65.5089,
        "country": "Kazakhstan"
    },
    {
        "rank": 1408,
        "name": "Villa Teresa",
        "lat": -34.49839849339578,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1409,
        "name": "AS Aïn M'lila",
        "lat": 36.05,
        "lng": 6.5667,
        "country": "Algeria"
    },
    {
        "rank": 1410,
        "name": "Wisła Kraków",
        "lat": 50.08268643211837,
        "lng": 19.945,
        "country": "Poland"
    },
    {
        "rank": 1411,
        "name": "Mattersburg",
        "lat": 47.7378,
        "lng": 16.3978,
        "country": "Austria"
    },
    {
        "rank": 1412,
        "name": "CF Montreal",
        "lat": 45.5017,
        "lng": -73.5673,
        "country": "Canada"
    },
    {
        "rank": 1413,
        "name": "Busan I'Park",
        "lat": 35.104,
        "lng": 129.0756,
        "country": "South Korea"
    },
    {
        "rank": 1414,
        "name": "LDU Portoviejo",
        "lat": -1.0542,
        "lng": -80.4556,
        "country": "Ecuador"
    },
    {
        "rank": 1415,
        "name": "Bibiani Gold Stars F.C.",
        "lat": 6.4667,
        "lng": -2.3167,
        "country": "Ghana"
    },
    {
        "rank": 1416,
        "name": "Júbilo Iwata",
        "lat": 34.7167,
        "lng": 137.8833,
        "country": "Japan"
    },
    {
        "rank": 1417,
        "name": "Amicale FC",
        "lat": -17.7333,
        "lng": 168.3167,
        "country": "Vanuatu"
    },
    {
        "rank": 1418,
        "name": "Santos",
        "lat": -26.114167839408136,
        "lng": 28.0473,
        "country": "South Africa"
    },
    {
        "rank": 1419,
        "name": "FC Tsarsko Selo Sofia 2015",
        "lat": 42.785032160591875,
        "lng": 23.3253,
        "country": "Bulgaria"
    },
    {
        "rank": 1420,
        "name": "Willem II",
        "lat": 51.555,
        "lng": 5.0831,
        "country": "Netherlands"
    },
    {
        "rank": 1421,
        "name": "ES Mostaganem",
        "lat": 35.9331,
        "lng": 0.0894,
        "country": "Algeria"
    },
    {
        "rank": 1422,
        "name": "Mes Kerman",
        "lat": 30.2839,
        "lng": 57.0834,
        "country": "Iran"
    },
    {
        "rank": 1423,
        "name": "CNI",
        "lat": -11.953367839408132,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 1424,
        "name": "Ümraniyespor",
        "lat": 41.138105024828654,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 1425,
        "name": "Monagas SC",
        "lat": 8.75,
        "lng": -62.05,
        "country": "Venezuela"
    },
    {
        "rank": 1426,
        "name": "FK Mariupol Illichivets'",
        "lat": 47.0956,
        "lng": 37.5431,
        "country": "Ukraine"
    },
    {
        "rank": 1427,
        "name": "Al Mokawloon Al Arab",
        "lat": 30.18289915481416,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1428,
        "name": "Yverdon-Sport FC",
        "lat": 46.7784,
        "lng": 6.6411,
        "country": "Switzerland"
    },
    {
        "rank": 1429,
        "name": "Total Chalaco",
        "lat": -11.065313567881626,
        "lng": -77.65,
        "country": "Peru"
    },
    {
        "rank": 1430,
        "name": "Aigle Royal",
        "lat": 4.011691456946998,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1431,
        "name": "Árabe Unido",
        "lat": 8.4667,
        "lng": -80.1,
        "country": "Panama"
    },
    {
        "rank": 1432,
        "name": "Nations FC",
        "lat": 5.63967286423675,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1433,
        "name": "KFUM-Kameratene Oslo",
        "lat": 59.93188643211839,
        "lng": 10.7522,
        "country": "Norway"
    },
    {
        "rank": 1434,
        "name": "Arema",
        "lat": -7.9666,
        "lng": 112.6326,
        "country": "Indonesia"
    },
    {
        "rank": 1435,
        "name": "Sporting Clube de Goa",
        "lat": 15.371245728473504,
        "lng": 74.124,
        "country": "India"
    },
    {
        "rank": 1436,
        "name": "Samartex",
        "lat": 5.657659296355125,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1437,
        "name": "Africa Sports National",
        "lat": 5.444318592710249,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1438,
        "name": "Oita Trinita",
        "lat": 33.2382,
        "lng": 131.6126,
        "country": "Japan"
    },
    {
        "rank": 1439,
        "name": "Skalica",
        "lat": 48.8456,
        "lng": 17.2267,
        "country": "Slovakia"
    },
    {
        "rank": 1440,
        "name": "Bryne FK",
        "lat": 58.7361,
        "lng": 5.6464,
        "country": "Norway"
    },
    {
        "rank": 1441,
        "name": "El Kanemi Warriors",
        "lat": 11.8333,
        "lng": 13.15,
        "country": "Nigeria"
    },
    {
        "rank": 1442,
        "name": "Neuchâtel Xamax",
        "lat": 46.993,
        "lng": 6.9317,
        "country": "Switzerland"
    },
    {
        "rank": 1443,
        "name": "Zanaco",
        "lat": -15.369513567881624,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 1444,
        "name": "Asoc. Dep. y Rec. Jicaral Sercoba",
        "lat": 9.994086432118376,
        "lng": -84.8413,
        "country": "Costa Rica"
    },
    {
        "rank": 1445,
        "name": "KFC Komárno",
        "lat": 47.7667,
        "lng": 18.1333,
        "country": "Slovakia"
    },
    {
        "rank": 1446,
        "name": "Shahrdari Tabriz",
        "lat": 38.08468643211837,
        "lng": 46.2667,
        "country": "Iran"
    },
    {
        "rank": 1447,
        "name": "CD UT Cajamarca",
        "lat": -7.1611,
        "lng": -78.5136,
        "country": "Peru"
    },
    {
        "rank": 1448,
        "name": "Khroub",
        "lat": 36.3667,
        "lng": 6.7,
        "country": "Algeria"
    },
    {
        "rank": 1449,
        "name": "Municipal Limeño",
        "lat": 13.7648457284735,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 1450,
        "name": "United Sports Club",
        "lat": 22.608572864236752,
        "lng": 88.3639,
        "country": "India"
    },
    {
        "rank": 1451,
        "name": "Shabanie Mine",
        "lat": -20.13671356788162,
        "lng": 30.975399999999997,
        "country": "Zimbabwe"
    },
    {
        "rank": 1452,
        "name": "Dukla Praha",
        "lat": 50.113559296355135,
        "lng": 14.4656,
        "country": "Czech Republic"
    },
    {
        "rank": 1453,
        "name": "Gokulam Kerala Fc",
        "lat": 11.2588,
        "lng": 75.7804,
        "country": "India"
    },
    {
        "rank": 1454,
        "name": "Dreams FC",
        "lat": 5.6756457284735,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1455,
        "name": "Olimpik Donetsk",
        "lat": 48.05187286423676,
        "lng": 37.8028,
        "country": "Ukraine"
    },
    {
        "rank": 1456,
        "name": "Vista Hermosa",
        "lat": 13.782832160591877,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 1457,
        "name": "Herentals FC",
        "lat": -17.69929497517138,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1458,
        "name": "San Luis",
        "lat": -33.2833,
        "lng": -66.3333,
        "country": "Chile"
    },
    {
        "rank": 1459,
        "name": "Rapide Club Oued Zem",
        "lat": 32.8667,
        "lng": -6.5667,
        "country": "Morocco"
    },
    {
        "rank": 1460,
        "name": "FK Slutsk",
        "lat": 53.0158,
        "lng": 27.5544,
        "country": "Belarus"
    },
    {
        "rank": 1461,
        "name": "FC Anyang",
        "lat": 37.3943,
        "lng": 126.9568,
        "country": "South Korea"
    },
    {
        "rank": 1462,
        "name": "Delta Force FC",
        "lat": 5.534386432118375,
        "lng": 5.75,
        "country": "Nigeria"
    },
    {
        "rank": 1463,
        "name": "AD Unión Magdalena",
        "lat": 11.2408,
        "lng": -74.199,
        "country": "Colombia"
    },
    {
        "rank": 1464,
        "name": "Szombathelyi Haladás",
        "lat": 47.2306,
        "lng": 16.6214,
        "country": "Hungary"
    },
    {
        "rank": 1465,
        "name": "Lautoka",
        "lat": -17.6167,
        "lng": 177.45,
        "country": "Fiji"
    },
    {
        "rank": 1466,
        "name": "Ergotelis",
        "lat": 35.35668643211838,
        "lng": 25.1442,
        "country": "Greece"
    },
    {
        "rank": 1467,
        "name": "Persidafon",
        "lat": -6.154840703644877,
        "lng": 106.8456,
        "country": "Indonesia"
    },
    {
        "rank": 1468,
        "name": "Kabwe Warriors",
        "lat": -14.4469,
        "lng": 28.4461,
        "country": "Zambia"
    },
    {
        "rank": 1469,
        "name": "San Francisco FC",
        "lat": 9.036359296355126,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 1470,
        "name": "Lučko",
        "lat": 45.84907286423675,
        "lng": 15.9775,
        "country": "Croatia"
    },
    {
        "rank": 1471,
        "name": "Al Feiha",
        "lat": 26.428672864236752,
        "lng": 50.0778,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1472,
        "name": "New Edubiase FC",
        "lat": 6.1667,
        "lng": -1.3333,
        "country": "Ghana"
    },
    {
        "rank": 1473,
        "name": "Minyor Pernik",
        "lat": 42.6,
        "lng": 23.0333,
        "country": "Bulgaria"
    },
    {
        "rank": 1474,
        "name": "Larisa Ael",
        "lat": 39.6403,
        "lng": 22.4194,
        "country": "Greece"
    },
    {
        "rank": 1475,
        "name": "Puerto Rico Islanders",
        "lat": 18.501472864236753,
        "lng": -66.1057,
        "country": "Puerto Rico"
    },
    {
        "rank": 1476,
        "name": "Sofapaka",
        "lat": -1.2921,
        "lng": 36.8219,
        "country": "Kenya"
    },
    {
        "rank": 1477,
        "name": "Primorje",
        "lat": 45.56488643211838,
        "lng": 13.7301,
        "country": "Slovenia"
    },
    {
        "rank": 1478,
        "name": "Zawisza Bydgoszcz",
        "lat": 53.1235,
        "lng": 18.0084,
        "country": "Poland"
    },
    {
        "rank": 1479,
        "name": "Kyzylzhar Petropavlovsk",
        "lat": 54.8658,
        "lng": 69.1394,
        "country": "Kazakhstan"
    },
    {
        "rank": 1480,
        "name": "Wadi Degla FC",
        "lat": 30.200885586932536,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1481,
        "name": "FC Daugava",
        "lat": 56.5,
        "lng": 27.3333,
        "country": "Latvia"
    },
    {
        "rank": 1482,
        "name": "Gefle",
        "lat": 60.6749,
        "lng": 17.1413,
        "country": "Sweden"
    },
    {
        "rank": 1483,
        "name": "Iztapa",
        "lat": 14.1,
        "lng": -90.6333,
        "country": "Guatemala"
    },
    {
        "rank": 1484,
        "name": "Deportivo Municipal",
        "lat": -11.935381407289759,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 1485,
        "name": "Merreikh El-Fasher",
        "lat": 13.6281,
        "lng": 25.35,
        "country": "Sudan"
    },
    {
        "rank": 1486,
        "name": "Saïda",
        "lat": 34.8397,
        "lng": -0.15,
        "country": "Algeria"
    },
    {
        "rank": 1487,
        "name": "Ismaily SC",
        "lat": 30.5965,
        "lng": 32.2715,
        "country": "Egypt"
    },
    {
        "rank": 1488,
        "name": "Turnu Severin",
        "lat": 44.6317,
        "lng": 22.6561,
        "country": "Romania"
    },
    {
        "rank": 1489,
        "name": "Marumo Gallants FC",
        "lat": -23.88651356788163,
        "lng": 29.4689,
        "country": "South Africa"
    },
    {
        "rank": 1490,
        "name": "Atlético Choloma",
        "lat": 15.6167,
        "lng": -87.95,
        "country": "Honduras"
    },
    {
        "rank": 1491,
        "name": "FC Zbrojovka Brno",
        "lat": 49.1951,
        "lng": 16.6068,
        "country": "Czech Republic"
    },
    {
        "rank": 1492,
        "name": "Juventud Independiente",
        "lat": 13.800818592710252,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 1493,
        "name": "Atlético Huila",
        "lat": 2.9273,
        "lng": -75.2819,
        "country": "Colombia"
    },
    {
        "rank": 1494,
        "name": "Ebusua Dwarfs",
        "lat": 5.1056,
        "lng": -1.2475,
        "country": "Ghana"
    },
    {
        "rank": 1495,
        "name": "OFK Titograd",
        "lat": 42.51415929635512,
        "lng": 19.2595,
        "country": "Montenegro"
    },
    {
        "rank": 1496,
        "name": "Deportivo Marquense",
        "lat": 14.858586432118372,
        "lng": -91.5201,
        "country": "Guatemala"
    },
    {
        "rank": 1497,
        "name": "Zeta",
        "lat": 42.53214572847349,
        "lng": 19.2595,
        "country": "Montenegro"
    },
    {
        "rank": 1498,
        "name": "Águilas",
        "lat": 10.051959296355127,
        "lng": -84.11,
        "country": "Costa Rica"
    },
    {
        "rank": 1499,
        "name": "Al-Jazeera Amman",
        "lat": 31.98217286423676,
        "lng": 35.92840000000001,
        "country": "Jordan"
    },
    {
        "rank": 1500,
        "name": "Jalapa",
        "lat": 14.724832160591873,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 1501,
        "name": "Barry Town United FC",
        "lat": 51.4,
        "lng": -3.2667,
        "country": "Wales"
    },
    {
        "rank": 1502,
        "name": "Prachuap FC",
        "lat": 11.8167,
        "lng": 99.8,
        "country": "Thailand"
    },
    {
        "rank": 1503,
        "name": "Cork City",
        "lat": 51.8986,
        "lng": -8.4958,
        "country": "Ireland"
    },
    {
        "rank": 1504,
        "name": "USFAS Bamako",
        "lat": 12.729132160591876,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 1505,
        "name": "Beyond Limits FA",
        "lat": 9.130459296355125,
        "lng": 7.398599999999999,
        "country": "Nigeria"
    },
    {
        "rank": 1506,
        "name": "FC Chindia Târgovişte",
        "lat": 44.9256,
        "lng": 25.4608,
        "country": "Romania"
    },
    {
        "rank": 1507,
        "name": "CDT Real Oruro",
        "lat": -17.9833,
        "lng": -67.1167,
        "country": "Bolivia"
    },
    {
        "rank": 1508,
        "name": "Deportes Copiapó",
        "lat": -27.348813567881628,
        "lng": -70.3323,
        "country": "Chile"
    },
    {
        "rank": 1509,
        "name": "Mumbai City FC",
        "lat": 19.093986432118374,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 1510,
        "name": "Cerro Porteño PF",
        "lat": -24.88598492551416,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1511,
        "name": "Sporting Kansas City",
        "lat": 39.1217,
        "lng": -94.8133,
        "country": "United States"
    },
    {
        "rank": 1512,
        "name": "Joenkoepings Soedra",
        "lat": 57.7826,
        "lng": 14.1618,
        "country": "Sweden"
    },
    {
        "rank": 1513,
        "name": "MFM FC",
        "lat": 6.48337286423675,
        "lng": 3.3903000000000003,
        "country": "Nigeria"
    },
    {
        "rank": 1514,
        "name": "Pacífico",
        "lat": -11.917394975171385,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 1515,
        "name": "FK Pardubice",
        "lat": 50.037,
        "lng": 15.775,
        "country": "Czech Republic"
    },
    {
        "rank": 1516,
        "name": "Odds Ballklubb",
        "lat": 59.1342,
        "lng": 9.758,
        "country": "Norway"
    },
    {
        "rank": 1517,
        "name": "Pescara",
        "lat": 42.4584,
        "lng": 14.2081,
        "country": "Italy"
    },
    {
        "rank": 1518,
        "name": "Waterford United FC",
        "lat": 52.276286432118376,
        "lng": -7.1119,
        "country": "Ireland"
    },
    {
        "rank": 1519,
        "name": "AZAL PFC Baku",
        "lat": 40.481245728473496,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 1520,
        "name": "Alaniya",
        "lat": 42.9703,
        "lng": 44.6753,
        "country": "Russia"
    },
    {
        "rank": 1521,
        "name": "Zulia",
        "lat": 10.391,
        "lng": -71.4794,
        "country": "Venezuela"
    },
    {
        "rank": 1522,
        "name": "Aluminium Hormozgan",
        "lat": 27.1931,
        "lng": 56.2808,
        "country": "Iran"
    },
    {
        "rank": 1523,
        "name": "MCO Oujda",
        "lat": 34.6867,
        "lng": -1.9114,
        "country": "Morocco"
    },
    {
        "rank": 1524,
        "name": "Suchitepéquez",
        "lat": 14.2833,
        "lng": -91.6167,
        "country": "Guatemala"
    },
    {
        "rank": 1525,
        "name": "AD Municipal Liberia",
        "lat": 10.6333,
        "lng": -85.4333,
        "country": "Costa Rica"
    },
    {
        "rank": 1526,
        "name": "Jeonnam Dragons",
        "lat": 34.7603,
        "lng": 127.6622,
        "country": "South Korea"
    },
    {
        "rank": 1527,
        "name": "Young Sport Academy Bamenda",
        "lat": 5.979103638540774,
        "lng": 10.134130514209492,
        "country": "Cameroon"
    },
    {
        "rank": 1528,
        "name": "Kladno",
        "lat": 50.1478,
        "lng": 14.1031,
        "country": "Czech Republic"
    },
    {
        "rank": 1529,
        "name": "FC Zlin",
        "lat": 49.2265,
        "lng": 17.6679,
        "country": "Czech Republic"
    },
    {
        "rank": 1530,
        "name": "Assyriska",
        "lat": 59.366559296355135,
        "lng": 18.0785,
        "country": "Sweden"
    },
    {
        "rank": 1531,
        "name": "Esteghlal Khuzestan",
        "lat": 31.336286432118364,
        "lng": 48.6706,
        "country": "Iran"
    },
    {
        "rank": 1532,
        "name": "Xinabajul",
        "lat": 15.496086432118378,
        "lng": -90.3706,
        "country": "Guatemala"
    },
    {
        "rank": 1533,
        "name": "Liberty Professionals",
        "lat": 5.693632160591873,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1534,
        "name": "Penafiel",
        "lat": 41.2078,
        "lng": -8.2839,
        "country": "Portugal"
    },
    {
        "rank": 1535,
        "name": "Centre Salif Kéita",
        "lat": 12.747118592710253,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 1536,
        "name": "Pattaya United",
        "lat": 12.9236,
        "lng": 100.8825,
        "country": "Thailand"
    },
    {
        "rank": 1537,
        "name": "Dalian Yingbo F.C.",
        "lat": 38.914,
        "lng": 121.6147,
        "country": "China PR"
    },
    {
        "rank": 1538,
        "name": "AL Safa",
        "lat": 33.94775929635512,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 1539,
        "name": "Odisha FC",
        "lat": 20.2961,
        "lng": 85.8245,
        "country": "India"
    },
    {
        "rank": 1540,
        "name": "Union Douala",
        "lat": 4.123045728473499,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 1541,
        "name": "Duguwolofila",
        "lat": 12.76510502482863,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 1542,
        "name": "NK Rogaška",
        "lat": 46.2397,
        "lng": 15.6361,
        "country": "Slovenia"
    },
    {
        "rank": 1543,
        "name": "Enosis Paralimni",
        "lat": 35.0381,
        "lng": 33.9822,
        "country": "Cyprus"
    },
    {
        "rank": 1544,
        "name": "FKS Stal Mielec",
        "lat": 50.3044,
        "lng": 21.4289,
        "country": "Poland"
    },
    {
        "rank": 1545,
        "name": "Ramonense PO",
        "lat": 9.8867,
        "lng": -83.75,
        "country": "Costa Rica"
    },
    {
        "rank": 1546,
        "name": "Panserraikos FC",
        "lat": 41.0881,
        "lng": 22.5681,
        "country": "Greece"
    },
    {
        "rank": 1547,
        "name": "FK Septemvri Sofia",
        "lat": 42.80301859271025,
        "lng": 23.3253,
        "country": "Bulgaria"
    },
    {
        "rank": 1548,
        "name": "FC Minaj",
        "lat": 48.2167,
        "lng": 22.9667,
        "country": "Ukraine"
    },
    {
        "rank": 1549,
        "name": "Bolognesi",
        "lat": -4.1019,
        "lng": -81.1143,
        "country": "Peru"
    },
    {
        "rank": 1550,
        "name": "Rampla Juniors",
        "lat": -34.48041206127741,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1551,
        "name": "HamKam",
        "lat": 60.7945,
        "lng": 11.068,
        "country": "Norway"
    },
    {
        "rank": 1552,
        "name": "Chabab Atlas Khénifra",
        "lat": 32.9333,
        "lng": -5.6667,
        "country": "Morocco"
    },
    {
        "rank": 1553,
        "name": "Rabotnički",
        "lat": 42.03837286423676,
        "lng": 21.4361,
        "country": "Macedonia"
    },
    {
        "rank": 1554,
        "name": "Madura United",
        "lat": -7.0167,
        "lng": 113.8833,
        "country": "Indonesia"
    },
    {
        "rank": 1555,
        "name": "Victoria",
        "lat": 14.108272864236751,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 1556,
        "name": "FK Auda",
        "lat": 57.02165929635512,
        "lng": 24.1056,
        "country": "Latvia"
    },
    {
        "rank": 1557,
        "name": "Deportivo Santaní",
        "lat": -25.3667,
        "lng": -56.9667,
        "country": "Paraguay"
    },
    {
        "rank": 1558,
        "name": "Chippa United",
        "lat": -33.906913567881624,
        "lng": 18.4241,
        "country": "South Africa"
    },
    {
        "rank": 1559,
        "name": "Go Round",
        "lat": 4.8156,
        "lng": 7.0498,
        "country": "Nigeria"
    },
    {
        "rank": 1560,
        "name": "Auckland FC",
        "lat": -36.79454070364487,
        "lng": 174.7633,
        "country": "New Zealand"
    },
    {
        "rank": 1561,
        "name": "Doma United",
        "lat": 8.1106,
        "lng": 9.7711,
        "country": "Nigeria"
    },
    {
        "rank": 1562,
        "name": "MZKS Arka Gdynia",
        "lat": 54.5189,
        "lng": 18.5305,
        "country": "Poland"
    },
    {
        "rank": 1563,
        "name": "Wellington Phoenix",
        "lat": -37.78932713576325,
        "lng": 144.9831,
        "country": "Australia"
    },
    {
        "rank": 1564,
        "name": "Western United FC",
        "lat": -9.4438,
        "lng": 160.8811,
        "country": "Solomon Islands"
    },
    {
        "rank": 1565,
        "name": "Petrovac",
        "lat": 42.2061,
        "lng": 18.9439,
        "country": "Montenegro"
    },
    {
        "rank": 1566,
        "name": "MO Béjaia",
        "lat": 36.77968643211837,
        "lng": 5.0675,
        "country": "Algeria"
    },
    {
        "rank": 1567,
        "name": "Richards Bay",
        "lat": -28.7831,
        "lng": 32.0378,
        "country": "South Africa"
    },
    {
        "rank": 1568,
        "name": "Alki Oroklinis",
        "lat": 35.1333,
        "lng": 33.6,
        "country": "Cyprus"
    },
    {
        "rank": 1569,
        "name": "Sable Batié",
        "lat": 5.2833,
        "lng": 10.2833,
        "country": "Cameroon"
    },
    {
        "rank": 1570,
        "name": "Universidad Central de Venezuela FC",
        "lat": 10.498586432118376,
        "lng": -66.9036,
        "country": "Venezuela"
    },
    {
        "rank": 1571,
        "name": "Envigado",
        "lat": 6.1658,
        "lng": -75.5847,
        "country": "Colombia"
    },
    {
        "rank": 1572,
        "name": "FC Unirea 2004 Slobozia",
        "lat": 44.5667,
        "lng": 27.3667,
        "country": "Romania"
    },
    {
        "rank": 1573,
        "name": "Harare City",
        "lat": -17.681308543053007,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1574,
        "name": "Obolon' Kyiv",
        "lat": 50.47817286423675,
        "lng": 30.5367,
        "country": "Ukraine"
    },
    {
        "rank": 1575,
        "name": "Săgeata Năvodari",
        "lat": 44.3167,
        "lng": 28.6167,
        "country": "Romania"
    },
    {
        "rank": 1576,
        "name": "Omonia Aradippou",
        "lat": 34.95,
        "lng": 33.5833,
        "country": "Cyprus"
    },
    {
        "rank": 1577,
        "name": "Ironi Tiberias F.C.",
        "lat": 32.795,
        "lng": 35.5306,
        "country": "Israel"
    },
    {
        "rank": 1578,
        "name": "Chicago Fire",
        "lat": 41.7658,
        "lng": -87.8042,
        "country": "United States"
    },
    {
        "rank": 1579,
        "name": "Al Ahli Tripoli",
        "lat": 32.90518643211838,
        "lng": 13.1913,
        "country": "Libya"
    },
    {
        "rank": 1580,
        "name": "Argeș Pitești",
        "lat": 44.8565,
        "lng": 24.8692,
        "country": "Romania"
    },
    {
        "rank": 1581,
        "name": "Rah Ahan",
        "lat": 35.76114572847349,
        "lng": 51.389,
        "country": "Iran"
    },
    {
        "rank": 1582,
        "name": "Tivoli Gardens",
        "lat": 18.071859296355136,
        "lng": -76.8099,
        "country": "Jamaica"
    },
    {
        "rank": 1583,
        "name": "Olympic El Qanah FC",
        "lat": 30.218872019050913,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1584,
        "name": "Rentistas",
        "lat": -34.462425629159036,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1585,
        "name": "Sogndal",
        "lat": 61.2328,
        "lng": 7.1025,
        "country": "Norway"
    },
    {
        "rank": 1586,
        "name": "FC Anzhi Makhachkala",
        "lat": 42.9814,
        "lng": 47.5047,
        "country": "Russia"
    },
    {
        "rank": 1587,
        "name": "FC Vaduz",
        "lat": 47.1392,
        "lng": 9.5214,
        "country": "Switzerland"
    },
    {
        "rank": 1588,
        "name": "Deportivo Walter Ferretti",
        "lat": 12.154386432118375,
        "lng": -86.2514,
        "country": "Nicaragua"
    },
    {
        "rank": 1589,
        "name": "CODM Meknès",
        "lat": 33.8935,
        "lng": -5.5473,
        "country": "Morocco"
    },
    {
        "rank": 1590,
        "name": "Feirense",
        "lat": 40.9267,
        "lng": -8.5433,
        "country": "Portugal"
    },
    {
        "rank": 1591,
        "name": "Napredak",
        "lat": 43.33888643211838,
        "lng": 21.8958,
        "country": "Serbia"
    },
    {
        "rank": 1592,
        "name": "Qatar SC",
        "lat": 25.383918592710245,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 1593,
        "name": "José Gálvez",
        "lat": -7.1647,
        "lng": -79.8456,
        "country": "Peru"
    },
    {
        "rank": 1594,
        "name": "Stabæk",
        "lat": 59.8978,
        "lng": 10.5339,
        "country": "Norway"
    },
    {
        "rank": 1595,
        "name": "FC Dordrecht",
        "lat": 51.8133,
        "lng": 4.6739,
        "country": "Netherlands"
    },
    {
        "rank": 1596,
        "name": "FK Tuzla City",
        "lat": 44.5361,
        "lng": 18.6708,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 1597,
        "name": "Real Cartagena",
        "lat": 10.3997,
        "lng": -75.5144,
        "country": "Colombia"
    },
    {
        "rank": 1598,
        "name": "Ruch Chorzów",
        "lat": 50.2945,
        "lng": 18.9567,
        "country": "Poland"
    },
    {
        "rank": 1599,
        "name": "Maccabi Petah Tikva",
        "lat": 32.0914,
        "lng": 34.8878,
        "country": "Israel"
    },
    {
        "rank": 1600,
        "name": "Necaxa",
        "lat": 14.126259296355126,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 1601,
        "name": "Caïman Douala",
        "lat": 4.141032160591873,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 1602,
        "name": "Chongqing Liangjiang Athletic F.C.",
        "lat": 29.5647,
        "lng": 106.5507,
        "country": "China PR"
    },
    {
        "rank": 1603,
        "name": "Green Buffaloes",
        "lat": -15.351527135763252,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 1604,
        "name": "Joe Public",
        "lat": 10.763745728473499,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 1605,
        "name": "Ciclon",
        "lat": -17.69336783940813,
        "lng": -63.18330000000001,
        "country": "Bolivia"
    },
    {
        "rank": 1606,
        "name": "Deportivo Anzoátegui",
        "lat": 8.75,
        "lng": -64.7,
        "country": "Venezuela"
    },
    {
        "rank": 1607,
        "name": "Onze Créateurs",
        "lat": 12.783091456947005,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 1608,
        "name": "Changchun Yatai",
        "lat": 43.88,
        "lng": 125.3228,
        "country": "China PR"
    },
    {
        "rank": 1609,
        "name": "Ekranas",
        "lat": 55.95,
        "lng": 23.3167,
        "country": "Lithuania"
    },
    {
        "rank": 1610,
        "name": "Akwa Starlets",
        "lat": 5.049686432118375,
        "lng": 7.906100000000001,
        "country": "Nigeria"
    },
    {
        "rank": 1611,
        "name": "Barrio México",
        "lat": 9.946086432118376,
        "lng": -84.09070000000001,
        "country": "Costa Rica"
    },
    {
        "rank": 1612,
        "name": "Bucaspor",
        "lat": 40.20968643211838,
        "lng": 29.061099999999996,
        "country": "Turkey"
    },
    {
        "rank": 1613,
        "name": "Jigawa Golden Stars",
        "lat": 12.45,
        "lng": 9.85,
        "country": "Nigeria"
    },
    {
        "rank": 1614,
        "name": "Radomlje",
        "lat": 46.1839,
        "lng": 14.9831,
        "country": "Slovenia"
    },
    {
        "rank": 1615,
        "name": "Nassaji Mazandaran",
        "lat": 36.58138643211838,
        "lng": 53.0601,
        "country": "Iran"
    },
    {
        "rank": 1616,
        "name": "Aboomoslem",
        "lat": 36.31518643211837,
        "lng": 59.6067,
        "country": "Iran"
    },
    {
        "rank": 1617,
        "name": "Degerfors IF",
        "lat": 59.3425,
        "lng": 14.1694,
        "country": "Sweden"
    },
    {
        "rank": 1618,
        "name": "Lokeren",
        "lat": 51.1044,
        "lng": 4.0089,
        "country": "Belgium"
    },
    {
        "rank": 1619,
        "name": "Alianza",
        "lat": 9.0543457284735,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 1620,
        "name": "Kaduna United FC",
        "lat": 10.5222,
        "lng": 7.4383,
        "country": "Nigeria"
    },
    {
        "rank": 1621,
        "name": "FA Šiauliai",
        "lat": 55.932085566941815,
        "lng": 23.313829269462154,
        "country": "Lithuania"
    },
    {
        "rank": 1622,
        "name": "Semen Padang",
        "lat": -0.9492,
        "lng": 100.3543,
        "country": "Indonesia"
    },
    {
        "rank": 1623,
        "name": "SK Austria Klagenfurt",
        "lat": 46.64018643211838,
        "lng": 14.3114,
        "country": "Austria"
    },
    {
        "rank": 1624,
        "name": "LPTA Tozeur",
        "lat": 33.9197,
        "lng": 8.1336,
        "country": "Tunisia"
    },
    {
        "rank": 1625,
        "name": "Capaco",
        "lat": -4.298008543053004,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 1626,
        "name": "Nea Salamis",
        "lat": 35.1167,
        "lng": 33.95,
        "country": "Cyprus"
    },
    {
        "rank": 1627,
        "name": "Olympique de Medea",
        "lat": 36.2639,
        "lng": 2.7539,
        "country": "Algeria"
    },
    {
        "rank": 1628,
        "name": "Shenzhen Peng City F.C.",
        "lat": 22.5431,
        "lng": 114.0579,
        "country": "China PR"
    },
    {
        "rank": 1629,
        "name": "Olympiakos Nicosia",
        "lat": 35.2575457284735,
        "lng": 33.3823,
        "country": "Cyprus"
    },
    {
        "rank": 1630,
        "name": "Livyi Bereh Kyiv",
        "lat": 50.49615929635512,
        "lng": 30.5367,
        "country": "Ukraine"
    },
    {
        "rank": 1631,
        "name": "Rising Stars",
        "lat": 9.148445728473499,
        "lng": 7.398599999999999,
        "country": "Nigeria"
    },
    {
        "rank": 1632,
        "name": "Taraba",
        "lat": 8.15,
        "lng": 9.7833,
        "country": "Nigeria"
    },
    {
        "rank": 1633,
        "name": "Zhetysu Taldykorgan",
        "lat": 45.0167,
        "lng": 78.3833,
        "country": "Kazakhstan"
    },
    {
        "rank": 1634,
        "name": "Chepo FC",
        "lat": 9.1667,
        "lng": -79.1,
        "country": "Panama"
    },
    {
        "rank": 1635,
        "name": "Sport Boys Warnes",
        "lat": -17.5167,
        "lng": -63.1667,
        "country": "Bolivia"
    },
    {
        "rank": 1636,
        "name": "Sportif de Chebba",
        "lat": 35.2372,
        "lng": 11.1147,
        "country": "Tunisia"
    },
    {
        "rank": 1637,
        "name": "Gaziantepspor",
        "lat": 37.08418643211837,
        "lng": 37.3781,
        "country": "Turkey"
    },
    {
        "rank": 1638,
        "name": "Royal AM",
        "lat": -29.822727135763245,
        "lng": 31.021799999999995,
        "country": "South Africa"
    },
    {
        "rank": 1639,
        "name": "Deportes Quindío",
        "lat": 4.4389,
        "lng": -75.6764,
        "country": "Colombia"
    },
    {
        "rank": 1640,
        "name": "Leones FC",
        "lat": 8.3047,
        "lng": -73.0372,
        "country": "Colombia"
    },
    {
        "rank": 1641,
        "name": "AC Oulu",
        "lat": 65.03038643211838,
        "lng": 25.4681,
        "country": "Finland"
    },
    {
        "rank": 1642,
        "name": "Montego Bay United",
        "lat": 18.4762,
        "lng": -77.8939,
        "country": "Jamaica"
    },
    {
        "rank": 1643,
        "name": "CSMS Iaşi",
        "lat": 47.1585,
        "lng": 27.6014,
        "country": "Romania"
    },
    {
        "rank": 1644,
        "name": "Hispano",
        "lat": 14.144245728473502,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 1645,
        "name": "Qingdao Jonoon",
        "lat": 36.08508643211838,
        "lng": 120.3826,
        "country": "China PR"
    },
    {
        "rank": 1646,
        "name": "Free State Stars",
        "lat": -29.067213567881623,
        "lng": 26.1596,
        "country": "South Africa"
    },
    {
        "rank": 1647,
        "name": "Viktoria Žižkov",
        "lat": 50.08671335025051,
        "lng": 14.441201754339748,
        "country": "Czech Republic"
    },
    {
        "rank": 1648,
        "name": "Kitchee",
        "lat": 22.2855,
        "lng": 114.1577,
        "country": "Hong Kong"
    },
    {
        "rank": 1649,
        "name": "Moghreb Tétouan",
        "lat": 35.5889,
        "lng": -5.3626,
        "country": "Morocco"
    },
    {
        "rank": 1650,
        "name": "Adanaspor",
        "lat": 37.0,
        "lng": 35.3213,
        "country": "Turkey"
    },
    {
        "rank": 1651,
        "name": "United Petrotrin",
        "lat": 10.781732160591874,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 1652,
        "name": "Jagodina",
        "lat": 43.9775,
        "lng": 21.2553,
        "country": "Serbia"
    },
    {
        "rank": 1653,
        "name": "Malut United FC",
        "lat": 0.975,
        "lng": 127.8167,
        "country": "Indonesia"
    },
    {
        "rank": 1654,
        "name": "Koloale",
        "lat": -9.428,
        "lng": 159.95,
        "country": "Solomon Islands"
    },
    {
        "rank": 1655,
        "name": "Indios",
        "lat": 19.4090457284735,
        "lng": -99.2611,
        "country": "Mexico"
    },
    {
        "rank": 1656,
        "name": "Keşlə Futbol Klubu",
        "lat": 40.49923216059187,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 1657,
        "name": "Al-Khaleej Club",
        "lat": 26.5975,
        "lng": 49.9475,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1658,
        "name": "AS Rejiche",
        "lat": 34.3297,
        "lng": 10.7594,
        "country": "Tunisia"
    },
    {
        "rank": 1659,
        "name": "Lierse",
        "lat": 51.1336,
        "lng": 4.5703,
        "country": "Belgium"
    },
    {
        "rank": 1660,
        "name": "Pas Hamedan",
        "lat": 34.7992,
        "lng": 48.5146,
        "country": "Iran"
    },
    {
        "rank": 1661,
        "name": "Dundee FC",
        "lat": 56.462,
        "lng": -2.9707,
        "country": "Scotland"
    },
    {
        "rank": 1662,
        "name": "Metropolitanos FC",
        "lat": 10.516572864236752,
        "lng": -66.9036,
        "country": "Venezuela"
    },
    {
        "rank": 1663,
        "name": "Cape Town Spurs",
        "lat": -33.888927135763254,
        "lng": 18.4241,
        "country": "South Africa"
    },
    {
        "rank": 1664,
        "name": "Vegalta Sendai",
        "lat": 38.2682,
        "lng": 140.8694,
        "country": "Japan"
    },
    {
        "rank": 1665,
        "name": "Tacuary",
        "lat": -24.867998493395785,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1666,
        "name": "Pretoria University",
        "lat": -25.676940703644878,
        "lng": 28.2184,
        "country": "South Africa"
    },
    {
        "rank": 1667,
        "name": "FC Yelimay",
        "lat": 43.23998643211838,
        "lng": 76.8512,
        "country": "Kazakhstan"
    },
    {
        "rank": 1668,
        "name": "Zamora FC",
        "lat": 10.082686432118374,
        "lng": -69.3194,
        "country": "Venezuela"
    },
    {
        "rank": 1669,
        "name": "NK Krka",
        "lat": 45.7558,
        "lng": 15.1675,
        "country": "Slovenia"
    },
    {
        "rank": 1670,
        "name": "União de Leiria",
        "lat": 39.7436,
        "lng": -8.8071,
        "country": "Portugal"
    },
    {
        "rank": 1671,
        "name": "V-Varen Nagasaki",
        "lat": 32.7503,
        "lng": 129.8779,
        "country": "Japan"
    },
    {
        "rank": 1672,
        "name": "Magesi F.C.",
        "lat": -23.86852713576325,
        "lng": 29.4689,
        "country": "South Africa"
    },
    {
        "rank": 1673,
        "name": "CA Palmaflor",
        "lat": -17.675381407289755,
        "lng": -63.18330000000001,
        "country": "Bolivia"
    },
    {
        "rank": 1674,
        "name": "Dalian Shide",
        "lat": 38.93198643211837,
        "lng": 121.6147,
        "country": "China PR"
    },
    {
        "rank": 1675,
        "name": "Renaissance de Ngoumou",
        "lat": 3.85,
        "lng": 11.5,
        "country": "Cameroon"
    },
    {
        "rank": 1676,
        "name": "Guangzhou F.C.",
        "lat": 23.1434,
        "lng": 113.3392,
        "country": "China PR"
    },
    {
        "rank": 1677,
        "name": "FK Inhulets' Petrove",
        "lat": 47.9825,
        "lng": 33.2272,
        "country": "Ukraine"
    },
    {
        "rank": 1678,
        "name": "Belén Siglo XXI",
        "lat": 10.012072864236751,
        "lng": -84.8413,
        "country": "Costa Rica"
    },
    {
        "rank": 1679,
        "name": "ADO Den Haag",
        "lat": 52.0705,
        "lng": 4.3007,
        "country": "Netherlands"
    },
    {
        "rank": 1680,
        "name": "Atyrau",
        "lat": 47.1167,
        "lng": 51.8833,
        "country": "Kazakhstan"
    },
    {
        "rank": 1681,
        "name": "Santiago Wanderers",
        "lat": -33.04997320361275,
        "lng": -71.59882754953003,
        "country": "Chile"
    },
    {
        "rank": 1682,
        "name": "Sriwijaya FC",
        "lat": -2.9901,
        "lng": 104.7569,
        "country": "Indonesia"
    },
    {
        "rank": 1683,
        "name": "Virunga",
        "lat": -4.28002211093463,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 1684,
        "name": "Al-Zawraa SC",
        "lat": 33.3128,
        "lng": 44.3615,
        "country": "Iraq"
    },
    {
        "rank": 1685,
        "name": "Deportivo Llacuabamba",
        "lat": -7.7,
        "lng": -78.0167,
        "country": "Peru"
    },
    {
        "rank": 1686,
        "name": "Karlovac",
        "lat": 45.4872,
        "lng": 15.5581,
        "country": "Croatia"
    },
    {
        "rank": 1687,
        "name": "Lobi Stars",
        "lat": 7.75,
        "lng": 8.5333,
        "country": "Nigeria"
    },
    {
        "rank": 1688,
        "name": "SV Roeselare",
        "lat": 50.964686432118384,
        "lng": 3.1333,
        "country": "Belgium"
    },
    {
        "rank": 1689,
        "name": "Sport Rosario (Huaraz)",
        "lat": -9.507013567881627,
        "lng": -77.5306,
        "country": "Peru"
    },
    {
        "rank": 1690,
        "name": "Vestsjælland",
        "lat": 55.4038,
        "lng": 11.3167,
        "country": "Denmark"
    },
    {
        "rank": 1691,
        "name": "RWD Molenbeek",
        "lat": 50.86007268924992,
        "lng": 4.3378256686928705,
        "country": "Belgium"
    },
    {
        "rank": 1692,
        "name": "El Entag El Harby",
        "lat": 30.236858451169283,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1693,
        "name": "Dragons",
        "lat": -4.262035678816256,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 1694,
        "name": "Issia Wazi",
        "lat": 6.4933,
        "lng": -6.5908,
        "country": "Ivory Coast"
    },
    {
        "rank": 1695,
        "name": "Örebro",
        "lat": 59.2741,
        "lng": 15.2066,
        "country": "Sweden"
    },
    {
        "rank": 1696,
        "name": "Maritzburg United",
        "lat": -29.5989,
        "lng": 30.3794,
        "country": "South Africa"
    },
    {
        "rank": 1697,
        "name": "Zulte Waregem",
        "lat": 50.865,
        "lng": 3.4197,
        "country": "Belgium"
    },
    {
        "rank": 1698,
        "name": "Internaţional Curtea de Argeş",
        "lat": 45.1167,
        "lng": 24.6833,
        "country": "Romania"
    },
    {
        "rank": 1699,
        "name": "Maestro United Zambia",
        "lat": -15.333540703644879,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 1700,
        "name": "FF Jaro",
        "lat": 63.0939,
        "lng": 21.6139,
        "country": "Finland"
    },
    {
        "rank": 1701,
        "name": "AOK Kerkyra",
        "lat": 39.6243,
        "lng": 19.9217,
        "country": "Greece"
    },
    {
        "rank": 1702,
        "name": "Al Shoalah",
        "lat": 25.4167,
        "lng": 49.5833,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1703,
        "name": "Accra Great Olympics",
        "lat": 5.7116185927102485,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1704,
        "name": "Mictlán",
        "lat": 14.742818592710249,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 1705,
        "name": "Hønefoss",
        "lat": 60.1681,
        "lng": 10.2597,
        "country": "Norway"
    },
    {
        "rank": 1706,
        "name": "Taraz",
        "lat": 42.9,
        "lng": 71.3667,
        "country": "Kazakhstan"
    },
    {
        "rank": 1707,
        "name": "Central Coast Mariners FC",
        "lat": -33.4307,
        "lng": 151.3464,
        "country": "Australia"
    },
    {
        "rank": 1708,
        "name": "Chikhura",
        "lat": 42.0825,
        "lng": 42.4814,
        "country": "Georgia"
    },
    {
        "rank": 1709,
        "name": "KV Oostende",
        "lat": 51.2144,
        "lng": 2.9239,
        "country": "Belgium"
    },
    {
        "rank": 1710,
        "name": "Avion Fc Du Nkam",
        "lat": 5.367986432118374,
        "lng": 10.8833,
        "country": "Cameroon"
    },
    {
        "rank": 1711,
        "name": "Lokomotiv Mezdra",
        "lat": 43.1319,
        "lng": 23.7075,
        "country": "Bulgaria"
    },
    {
        "rank": 1712,
        "name": "FC Samgurali Tskhaltubo",
        "lat": 42.3369,
        "lng": 42.6089,
        "country": "Georgia"
    },
    {
        "rank": 1713,
        "name": "Crucero del Norte",
        "lat": -27.3667,
        "lng": -55.9,
        "country": "Argentina"
    },
    {
        "rank": 1714,
        "name": "Ranheim",
        "lat": 63.4058,
        "lng": 10.5481,
        "country": "Norway"
    },
    {
        "rank": 1715,
        "name": "Vasas Budapest",
        "lat": 47.57123216059187,
        "lng": 19.0424,
        "country": "Hungary"
    },
    {
        "rank": 1716,
        "name": "Öster",
        "lat": 56.68138643211838,
        "lng": 16.3567,
        "country": "Sweden"
    },
    {
        "rank": 1717,
        "name": "Pirin Blagoevgrad",
        "lat": 42.0167,
        "lng": 23.1,
        "country": "Bulgaria"
    },
    {
        "rank": 1718,
        "name": "FK Riteriai",
        "lat": 54.7167,
        "lng": 25.2667,
        "country": "Lithuania"
    },
    {
        "rank": 1719,
        "name": "Al Quwa Al Jawiya",
        "lat": 33.33078643211838,
        "lng": 44.3615,
        "country": "Iraq"
    },
    {
        "rank": 1720,
        "name": "Al-Kholood Club",
        "lat": 18.9167,
        "lng": 42.5,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1721,
        "name": "FK Istiqlol Dushanbe",
        "lat": 38.5598,
        "lng": 68.787,
        "country": "Tajikistan"
    },
    {
        "rank": 1722,
        "name": "Skenderbeu",
        "lat": 40.45,
        "lng": 20.0667,
        "country": "Albania"
    },
    {
        "rank": 1723,
        "name": "USM Bel Abbès",
        "lat": 35.1833,
        "lng": -0.6167,
        "country": "Algeria"
    },
    {
        "rank": 1724,
        "name": "Veria FC",
        "lat": 40.5211,
        "lng": 22.2031,
        "country": "Greece"
    },
    {
        "rank": 1725,
        "name": "VVV-Venlo",
        "lat": 51.3703,
        "lng": 6.1725,
        "country": "Netherlands"
    },
    {
        "rank": 1726,
        "name": "El-Sharkia Lel Dokhan (Eastern Company SC)",
        "lat": 30.25484488328766,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1727,
        "name": "Hay Al Wadi SC",
        "lat": 15.554659296355123,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 1728,
        "name": "Limón",
        "lat": 9.9914,
        "lng": -83.0353,
        "country": "Costa Rica"
    },
    {
        "rank": 1729,
        "name": "Brommapojkarna",
        "lat": 59.38454572847351,
        "lng": 18.0785,
        "country": "Sweden"
    },
    {
        "rank": 1730,
        "name": "JS El Omrane",
        "lat": 36.8447,
        "lng": 10.26,
        "country": "Tunisia"
    },
    {
        "rank": 1731,
        "name": "Williamsville Athletic Club",
        "lat": 5.462305024828624,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1732,
        "name": "Suphanburi FC",
        "lat": 14.4744,
        "lng": 100.1378,
        "country": "Thailand"
    },
    {
        "rank": 1733,
        "name": "WSG Tirol",
        "lat": 47.2672,
        "lng": 11.3928,
        "country": "Austria"
    },
    {
        "rank": 1734,
        "name": "Grazer AK",
        "lat": 47.08868643211838,
        "lng": 15.4395,
        "country": "Austria"
    },
    {
        "rank": 1735,
        "name": "Hapoel Rishon LeZion",
        "lat": 31.9611,
        "lng": 34.8039,
        "country": "Israel"
    },
    {
        "rank": 1736,
        "name": "Åtvidaberg",
        "lat": 58.1994,
        "lng": 16.0022,
        "country": "Sweden"
    },
    {
        "rank": 1737,
        "name": "Polonia Bytom",
        "lat": 50.3483,
        "lng": 18.9317,
        "country": "Poland"
    },
    {
        "rank": 1738,
        "name": "Al Ahli",
        "lat": 25.401905024828622,
        "lng": 51.52,
        "country": "Qatar"
    },
    {
        "rank": 1739,
        "name": "Club Vaca Díez de Pando",
        "lat": -11.0167,
        "lng": -68.7667,
        "country": "Bolivia"
    },
    {
        "rank": 1740,
        "name": "São Salvador do Kongo",
        "lat": -7.2667,
        "lng": 14.9167,
        "country": "Angola"
    },
    {
        "rank": 1741,
        "name": "FK Haugesund",
        "lat": 59.4139,
        "lng": 5.2681,
        "country": "Norway"
    },
    {
        "rank": 1742,
        "name": "A.E. Kifisia F.C.",
        "lat": 38.0744,
        "lng": 23.8111,
        "country": "Greece"
    },
    {
        "rank": 1743,
        "name": "San Simon",
        "lat": -17.35352713576325,
        "lng": -66.1568,
        "country": "Peru"
    },
    {
        "rank": 1744,
        "name": "Turku PS",
        "lat": 60.469786432118376,
        "lng": 22.2666,
        "country": "Finland"
    },
    {
        "rank": 1745,
        "name": "Elima",
        "lat": -4.244049246697881,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 1746,
        "name": "Nyíregyháza Spartacus",
        "lat": 47.95,
        "lng": 21.7167,
        "country": "Hungary"
    },
    {
        "rank": 1747,
        "name": "Gateway FC",
        "lat": 6.501359296355125,
        "lng": 3.3903000000000003,
        "country": "Nigeria"
    },
    {
        "rank": 1748,
        "name": "Al-Riyadh SC",
        "lat": 24.741659296355127,
        "lng": 46.7219,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1749,
        "name": "Halcones FC",
        "lat": 14.760805024828622,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 1750,
        "name": "CS Uruguay",
        "lat": 10.069945728473503,
        "lng": -84.11,
        "country": "Costa Rica"
    },
    {
        "rank": 1751,
        "name": "Chornomorets Odesa",
        "lat": 46.4825,
        "lng": 30.7233,
        "country": "Ukraine"
    },
    {
        "rank": 1752,
        "name": "Hawke's Bay United",
        "lat": -39.4928,
        "lng": 176.912,
        "country": "New Zealand"
    },
    {
        "rank": 1753,
        "name": "Steel Azin",
        "lat": 35.779132160591864,
        "lng": 51.389,
        "country": "Iran"
    },
    {
        "rank": 1754,
        "name": "SC Austria Lustenau",
        "lat": 47.4239,
        "lng": 9.6661,
        "country": "Austria"
    },
    {
        "rank": 1755,
        "name": "FC Arsenal Dzerzhinsk",
        "lat": 53.6167,
        "lng": 27.1333,
        "country": "Belarus"
    },
    {
        "rank": 1756,
        "name": "Portuguesa FC",
        "lat": 10.534559296355129,
        "lng": -66.9036,
        "country": "Venezuela"
    },
    {
        "rank": 1757,
        "name": "Lion Blessé",
        "lat": 4.029677889065373,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1758,
        "name": "Volyn",
        "lat": 50.7472,
        "lng": 25.3258,
        "country": "Ukraine"
    },
    {
        "rank": 1759,
        "name": "Örgryte",
        "lat": 57.74085929635514,
        "lng": 11.9865,
        "country": "Sweden"
    },
    {
        "rank": 1760,
        "name": "Falkirk",
        "lat": 55.9981,
        "lng": -3.7839,
        "country": "Scotland"
    },
    {
        "rank": 1761,
        "name": "Sanat Naft Abadan",
        "lat": 30.3392,
        "lng": 48.3043,
        "country": "Iran"
    },
    {
        "rank": 1762,
        "name": "FK Liepājas Metalurgs",
        "lat": 56.5058,
        "lng": 21.0106,
        "country": "Latvia"
    },
    {
        "rank": 1763,
        "name": "Real Juventud",
        "lat": 14.162232160591877,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 1764,
        "name": "Matsumoto Yamaga",
        "lat": 36.2381,
        "lng": 137.9717,
        "country": "Japan"
    },
    {
        "rank": 1765,
        "name": "Ocean Boys FC",
        "lat": 4.833586432118374,
        "lng": 7.049800000000001,
        "country": "Nigeria"
    },
    {
        "rank": 1766,
        "name": "Shakhter Karagandy",
        "lat": 49.8047,
        "lng": 73.1094,
        "country": "Kazakhstan"
    },
    {
        "rank": 1767,
        "name": "Police Tero FC",
        "lat": 13.792272864236752,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 1768,
        "name": "New Star de Douala",
        "lat": 4.1590185927102485,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 1769,
        "name": "Aizawl",
        "lat": 23.7367,
        "lng": 92.7194,
        "country": "India"
    },
    {
        "rank": 1770,
        "name": "Halmstads BK",
        "lat": 56.6749,
        "lng": 12.8528,
        "country": "Sweden"
    },
    {
        "rank": 1771,
        "name": "Nkwazi",
        "lat": -15.315554271526509,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 1772,
        "name": "Aluminij",
        "lat": 46.257686432118376,
        "lng": 15.2677,
        "country": "Slovenia"
    },
    {
        "rank": 1773,
        "name": "Al-Salt",
        "lat": 32.0397,
        "lng": 35.7272,
        "country": "Jordan"
    },
    {
        "rank": 1774,
        "name": "Sogakope WAFA",
        "lat": 6.0167,
        "lng": 0.5833,
        "country": "Ghana"
    },
    {
        "rank": 1775,
        "name": "Turan Tovuz",
        "lat": 40.9881,
        "lng": 45.6278,
        "country": "Azerbaijan"
    },
    {
        "rank": 1776,
        "name": "Puszcza Niepołomice",
        "lat": 50.0333,
        "lng": 20.2167,
        "country": "Poland"
    },
    {
        "rank": 1777,
        "name": "Västerås SK",
        "lat": 59.627886432118395,
        "lng": 16.5448,
        "country": "Sweden"
    },
    {
        "rank": 1778,
        "name": "FC Dunărea Călăraşi",
        "lat": 44.2,
        "lng": 27.3333,
        "country": "Romania"
    },
    {
        "rank": 1779,
        "name": "Río Abajo",
        "lat": 9.072332160591877,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 1780,
        "name": "Granit",
        "lat": 53.634686432118386,
        "lng": 27.1333,
        "country": "Belarus"
    },
    {
        "rank": 1781,
        "name": "SønderjyskE",
        "lat": 55.2167,
        "lng": 9.4833,
        "country": "Denmark"
    },
    {
        "rank": 1782,
        "name": "Triangle FC",
        "lat": -20.118727135763248,
        "lng": 30.975399999999997,
        "country": "Zimbabwe"
    },
    {
        "rank": 1783,
        "name": "Karela United FC",
        "lat": 5.2833,
        "lng": -2.3167,
        "country": "Ghana"
    },
    {
        "rank": 1784,
        "name": "Molinos El Pirata FC",
        "lat": -11.89940854305301,
        "lng": -77.0283,
        "country": "Peru"
    },
    {
        "rank": 1785,
        "name": "Ironi Ramat HaSharon",
        "lat": 32.1461,
        "lng": 34.8394,
        "country": "Israel"
    },
    {
        "rank": 1786,
        "name": "FK Tambov",
        "lat": 52.7311,
        "lng": 41.4447,
        "country": "Russia"
    },
    {
        "rank": 1787,
        "name": "NK Tabor Sežana",
        "lat": 45.7097,
        "lng": 13.8703,
        "country": "Slovenia"
    },
    {
        "rank": 1788,
        "name": "Metalist 1925 Kharkiv",
        "lat": 50.011486432118375,
        "lng": 36.2304,
        "country": "Ukraine"
    },
    {
        "rank": 1789,
        "name": "Pirae",
        "lat": 33.5131,
        "lng": 36.2919,
        "country": "Syria"
    },
    {
        "rank": 1790,
        "name": "Čelik Nikšić",
        "lat": 42.7731,
        "lng": 18.9494,
        "country": "Montenegro"
    },
    {
        "rank": 1791,
        "name": "Suva",
        "lat": -18.1416,
        "lng": 178.4419,
        "country": "Fiji"
    },
    {
        "rank": 1792,
        "name": "12 de Octubre de Itaugua",
        "lat": -25.3833,
        "lng": -57.35,
        "country": "Paraguay"
    },
    {
        "rank": 1793,
        "name": "Persik Kediri",
        "lat": -7.8167,
        "lng": 112.0167,
        "country": "Indonesia"
    },
    {
        "rank": 1794,
        "name": "Dragon",
        "lat": -17.5373,
        "lng": -149.5583,
        "country": "Tahiti"
    },
    {
        "rank": 1795,
        "name": "C.D. Lunda Sul",
        "lat": -9.0667,
        "lng": 20.4,
        "country": "Angola"
    },
    {
        "rank": 1796,
        "name": "Mezőkövesd-Zsóry",
        "lat": 47.8167,
        "lng": 20.5833,
        "country": "Hungary"
    },
    {
        "rank": 1797,
        "name": "Baniyas",
        "lat": 24.2992,
        "lng": 54.6042,
        "country": "United Arab Emirates"
    },
    {
        "rank": 1798,
        "name": "Miramar Misiones",
        "lat": -34.8167,
        "lng": -55.2167,
        "country": "Uruguay"
    },
    {
        "rank": 1799,
        "name": "Mineros de Guayana",
        "lat": 8.3511,
        "lng": -62.65,
        "country": "Venezuela"
    },
    {
        "rank": 1800,
        "name": "Guizhou Hengfeng",
        "lat": 26.5783,
        "lng": 106.7133,
        "country": "China PR"
    },
    {
        "rank": 1801,
        "name": "Zemplin Michalovce",
        "lat": 48.7547,
        "lng": 21.9297,
        "country": "Slovakia"
    },
    {
        "rank": 1802,
        "name": "Hamam Sousse",
        "lat": 35.8333,
        "lng": 10.6333,
        "country": "Tunisia"
    },
    {
        "rank": 1803,
        "name": "Sogdiyona Jizzax",
        "lat": 40.13468643211838,
        "lng": 67.8417,
        "country": "Uzbekistan"
    },
    {
        "rank": 1804,
        "name": "FK Proleter Novi Sad",
        "lat": 45.285086432118376,
        "lng": 19.8335,
        "country": "Serbia"
    },
    {
        "rank": 1805,
        "name": "RNK Split",
        "lat": 43.53268643211838,
        "lng": 16.4435,
        "country": "Croatia"
    },
    {
        "rank": 1806,
        "name": "Yokohama FC",
        "lat": 35.46168643211838,
        "lng": 139.638,
        "country": "Japan"
    },
    {
        "rank": 1807,
        "name": "Clan Juvenil",
        "lat": -0.09419497517137777,
        "lng": -78.5123,
        "country": "Ecuador"
    },
    {
        "rank": 1808,
        "name": "Costuleni",
        "lat": 47.0167,
        "lng": 28.95,
        "country": "Moldova"
    },
    {
        "rank": 1809,
        "name": "FK Kolubara",
        "lat": 44.4,
        "lng": 20.0167,
        "country": "Serbia"
    },
    {
        "rank": 1810,
        "name": "Târgu Mureş",
        "lat": 46.5397,
        "lng": 24.5581,
        "country": "Romania"
    },
    {
        "rank": 1811,
        "name": "Carmarthen",
        "lat": 51.85,
        "lng": -4.3,
        "country": "Wales"
    },
    {
        "rank": 1812,
        "name": "Ikorodu United",
        "lat": 6.633186432118375,
        "lng": 3.5061000000000004,
        "country": "Nigeria"
    },
    {
        "rank": 1813,
        "name": "Bekescsaba",
        "lat": 46.6833,
        "lng": 21.1,
        "country": "Hungary"
    },
    {
        "rank": 1814,
        "name": "FC Lahti",
        "lat": 60.9833,
        "lng": 25.65,
        "country": "Finland"
    },
    {
        "rank": 1815,
        "name": "Diyarbakirspor",
        "lat": 37.9144,
        "lng": 40.2306,
        "country": "Turkey"
    },
    {
        "rank": 1816,
        "name": "TelOne FC",
        "lat": -17.663322110934633,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1817,
        "name": "CD EL Vencedor",
        "lat": 13.818805024828627,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 1818,
        "name": "Progresso da Lunda Sul",
        "lat": -9.048713567881626,
        "lng": 20.4,
        "country": "Angola"
    },
    {
        "rank": 1819,
        "name": "Cortuluá",
        "lat": 3.4372,
        "lng": -76.5225,
        "country": "Colombia"
    },
    {
        "rank": 1820,
        "name": "Grbalj Radanovici",
        "lat": 42.4167,
        "lng": 18.7,
        "country": "Montenegro"
    },
    {
        "rank": 1821,
        "name": "Guadalupe FC",
        "lat": 10.030059296355128,
        "lng": -84.8413,
        "country": "Costa Rica"
    },
    {
        "rank": 1822,
        "name": "Renova",
        "lat": 42.05635929635515,
        "lng": 21.4361,
        "country": "Macedonia"
    },
    {
        "rank": 1823,
        "name": "AS Slimane",
        "lat": 36.86565929635513,
        "lng": 10.1761,
        "country": "Tunisia"
    },
    {
        "rank": 1824,
        "name": "Havadar S.C.",
        "lat": 35.79711859271024,
        "lng": 51.389,
        "country": "Iran"
    },
    {
        "rank": 1825,
        "name": "Douanes Niamey",
        "lat": 13.534686432118376,
        "lng": 2.1167,
        "country": "Niger"
    },
    {
        "rank": 1826,
        "name": "Sandecja Nowy Sącz",
        "lat": 49.6244,
        "lng": 20.7156,
        "country": "Poland"
    },
    {
        "rank": 1827,
        "name": "Lamphun Warrior",
        "lat": 18.5833,
        "lng": 99.0167,
        "country": "Thailand"
    },
    {
        "rank": 1828,
        "name": "Jeunesse Sportive Soualem",
        "lat": 33.24958643211838,
        "lng": -8.5007,
        "country": "Morocco"
    },
    {
        "rank": 1829,
        "name": "Ayacucho FC",
        "lat": -13.1639,
        "lng": -74.2236,
        "country": "Peru"
    },
    {
        "rank": 1830,
        "name": "Universitatea Craiova",
        "lat": 44.36617286423676,
        "lng": 23.7949,
        "country": "Romania"
    },
    {
        "rank": 1831,
        "name": "Ajman Club",
        "lat": 25.4052,
        "lng": 55.5136,
        "country": "United Arab Emirates"
    },
    {
        "rank": 1832,
        "name": "PAS Giannina",
        "lat": 39.6675,
        "lng": 20.8508,
        "country": "Greece"
    },
    {
        "rank": 1833,
        "name": "Waasland-Beveren",
        "lat": 51.2056,
        "lng": 4.2628,
        "country": "Belgium"
    },
    {
        "rank": 1834,
        "name": "Santos de Guápiles",
        "lat": 10.2167,
        "lng": -83.7833,
        "country": "Costa Rica"
    },
    {
        "rank": 1835,
        "name": "Partick Thistle",
        "lat": 55.8819,
        "lng": -4.265,
        "country": "Scotland"
    },
    {
        "rank": 1836,
        "name": "Hienghène Sport",
        "lat": -20.6833,
        "lng": 164.95,
        "country": "New Caledonia"
    },
    {
        "rank": 1837,
        "name": "Deportivo del Este",
        "lat": 9.09031859271025,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 1838,
        "name": "Gyirmót SE",
        "lat": 47.70548643211838,
        "lng": 17.6504,
        "country": "Hungary"
    },
    {
        "rank": 1839,
        "name": "FK Iskra",
        "lat": 42.55013216059187,
        "lng": 19.2595,
        "country": "Montenegro"
    },
    {
        "rank": 1840,
        "name": "Chabab Rif Al Hoceima",
        "lat": 35.25,
        "lng": -3.9167,
        "country": "Morocco"
    },
    {
        "rank": 1841,
        "name": "Botev Vratsa",
        "lat": 43.2056,
        "lng": 23.5617,
        "country": "Bulgaria"
    },
    {
        "rank": 1842,
        "name": "Aragua FC",
        "lat": 10.2442,
        "lng": -67.5914,
        "country": "Venezuela"
    },
    {
        "rank": 1843,
        "name": "San Jose Earthquakes",
        "lat": 37.3501,
        "lng": -121.9252,
        "country": "United States"
    },
    {
        "rank": 1844,
        "name": "Esan United",
        "lat": 13.81025929635513,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 1845,
        "name": "Fajr Sepasi",
        "lat": 32.68065929635513,
        "lng": 51.6889,
        "country": "Iran"
    },
    {
        "rank": 1846,
        "name": "Politehnica Iaşi",
        "lat": 47.176486432118374,
        "lng": 27.6014,
        "country": "Romania"
    },
    {
        "rank": 1847,
        "name": "Voinţa Sibiu",
        "lat": 45.81628643211837,
        "lng": 24.1256,
        "country": "Romania"
    },
    {
        "rank": 1848,
        "name": "FK Mladost Novi Sad",
        "lat": 45.30307286423676,
        "lng": 19.8335,
        "country": "Serbia"
    },
    {
        "rank": 1849,
        "name": "HŠK Posušje",
        "lat": 43.4667,
        "lng": 17.3167,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 1850,
        "name": "Bełchatów",
        "lat": 51.3739,
        "lng": 19.3572,
        "country": "Poland"
    },
    {
        "rank": 1851,
        "name": "Chapungu United",
        "lat": -18.9167,
        "lng": 32.6167,
        "country": "Zimbabwe"
    },
    {
        "rank": 1852,
        "name": "JC Abidjan",
        "lat": 5.480291456946999,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1853,
        "name": "Dan Kassawa",
        "lat": 13.55267286423675,
        "lng": 2.1167,
        "country": "Niger"
    },
    {
        "rank": 1854,
        "name": "Juventud Retalteca",
        "lat": 14.778791456947,
        "lng": -90.5069,
        "country": "Guatemala"
    },
    {
        "rank": 1855,
        "name": "Urana",
        "lat": 13.570659296355126,
        "lng": 2.1167,
        "country": "Niger"
    },
    {
        "rank": 1856,
        "name": "Venus",
        "lat": 33.53108643211837,
        "lng": 36.2919,
        "country": "Syria"
    },
    {
        "rank": 1857,
        "name": "Santa Lucia Cotzumalguapa",
        "lat": 14.3333,
        "lng": -91.0167,
        "country": "Guatemala"
    },
    {
        "rank": 1858,
        "name": "Chengdu Blades",
        "lat": 30.68468643211837,
        "lng": 104.0667,
        "country": "China PR"
    },
    {
        "rank": 1859,
        "name": "Académica do Soyo",
        "lat": -6.1333,
        "lng": 12.3667,
        "country": "Angola"
    },
    {
        "rank": 1860,
        "name": "DC United",
        "lat": 38.8677,
        "lng": -77.0129,
        "country": "United States"
    },
    {
        "rank": 1861,
        "name": "AS Matelots",
        "lat": 4.047664321183748,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1862,
        "name": "Araz PFK",
        "lat": 39.5667,
        "lng": 45.9667,
        "country": "Azerbaijan"
    },
    {
        "rank": 1863,
        "name": "Afrique Football Élite",
        "lat": 12.801077889065382,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 1864,
        "name": "Ferroviário da Beira",
        "lat": -19.8167,
        "lng": 34.8667,
        "country": "Mozambique"
    },
    {
        "rank": 1865,
        "name": "ACS Poli Timişoara",
        "lat": 45.76688643211837,
        "lng": 21.2087,
        "country": "Romania"
    },
    {
        "rank": 1866,
        "name": "Njala Quan",
        "lat": 4.065650753302123,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1867,
        "name": "FK Tekstilac Odžaci",
        "lat": 45.5167,
        "lng": 19.2833,
        "country": "Serbia"
    },
    {
        "rank": 1868,
        "name": "Moors World of Sport FC",
        "lat": -17.64533567881626,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1869,
        "name": "AaB",
        "lat": 57.0417,
        "lng": 9.9167,
        "country": "Denmark"
    },
    {
        "rank": 1870,
        "name": "SOL FC",
        "lat": 5.498277889065373,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1871,
        "name": "Ba",
        "lat": -17.5333,
        "lng": 177.6667,
        "country": "Fiji"
    },
    {
        "rank": 1872,
        "name": "Lausanne Sport",
        "lat": 46.5197,
        "lng": 6.6323,
        "country": "Switzerland"
    },
    {
        "rank": 1873,
        "name": "Haidob En Nahud",
        "lat": 12.7167,
        "lng": 28.4333,
        "country": "Sudan"
    },
    {
        "rank": 1874,
        "name": "Drava",
        "lat": 46.4197,
        "lng": 15.8697,
        "country": "Slovenia"
    },
    {
        "rank": 1875,
        "name": "Muğan",
        "lat": 39.6556,
        "lng": 48.9172,
        "country": "Azerbaijan"
    },
    {
        "rank": 1876,
        "name": "Sacachispas Chiquimula",
        "lat": 14.8,
        "lng": -89.55,
        "country": "Guatemala"
    },
    {
        "rank": 1877,
        "name": "FC Rapid Ghidighici",
        "lat": 47.05,
        "lng": 28.9167,
        "country": "Moldova"
    },
    {
        "rank": 1878,
        "name": "Cambuur",
        "lat": 53.2019,
        "lng": 5.7831,
        "country": "Netherlands"
    },
    {
        "rank": 1879,
        "name": "Mersin İdmanyurdu",
        "lat": 36.8,
        "lng": 34.6333,
        "country": "Turkey"
    },
    {
        "rank": 1880,
        "name": "KPV",
        "lat": 65.04837286423675,
        "lng": 25.4681,
        "country": "Finland"
    },
    {
        "rank": 1881,
        "name": "Javor",
        "lat": 43.356872864236756,
        "lng": 21.8958,
        "country": "Serbia"
    },
    {
        "rank": 1882,
        "name": "Violette AC",
        "lat": 18.5944,
        "lng": -72.3074,
        "country": "Haiti"
    },
    {
        "rank": 1883,
        "name": "Shabab Al Sahel",
        "lat": 33.9657457284735,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 1884,
        "name": "Persiwa Wamena",
        "lat": -4.1,
        "lng": 138.95,
        "country": "Indonesia"
    },
    {
        "rank": 1885,
        "name": "Wydad Fès",
        "lat": 34.036086432118374,
        "lng": -5.0078,
        "country": "Morocco"
    },
    {
        "rank": 1886,
        "name": "Sreenidi Deccan",
        "lat": 17.385,
        "lng": 78.4867,
        "country": "India"
    },
    {
        "rank": 1887,
        "name": "Green Eagles",
        "lat": -15.297567839408133,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 1888,
        "name": "FC Luch Minsk",
        "lat": 53.961159296355135,
        "lng": 27.5863,
        "country": "Belarus"
    },
    {
        "rank": 1889,
        "name": "Umm-Salal",
        "lat": 25.4058,
        "lng": 51.4069,
        "country": "Qatar"
    },
    {
        "rank": 1890,
        "name": "Dalkurd FF",
        "lat": 59.8586,
        "lng": 17.6389,
        "country": "Sweden"
    },
    {
        "rank": 1891,
        "name": "NAPSA Stars FC",
        "lat": -15.279581407289763,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 1892,
        "name": "Black Mambas",
        "lat": -17.62734924669789,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1893,
        "name": "Shooting Stars",
        "lat": -17.609362814579516,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1894,
        "name": "C.D. Cacahuatique",
        "lat": 13.836791456947005,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 1895,
        "name": "Atlético de Kolkata",
        "lat": 22.62655929635513,
        "lng": 88.3639,
        "country": "India"
    },
    {
        "rank": 1896,
        "name": "Zoman FC",
        "lat": 5.5162643211837485,
        "lng": -4.0267,
        "country": "Ivory Coast"
    },
    {
        "rank": 1897,
        "name": "SCR Altach",
        "lat": 47.3642,
        "lng": 9.6486,
        "country": "Austria"
    },
    {
        "rank": 1898,
        "name": "RoPS Rovaniemi",
        "lat": 66.5039,
        "lng": 25.7294,
        "country": "Finland"
    },
    {
        "rank": 1899,
        "name": "Lokomotiv Gorna Oryahovitsa",
        "lat": 43.1319,
        "lng": 25.6872,
        "country": "Bulgaria"
    },
    {
        "rank": 1900,
        "name": "Deportivo Chiantla",
        "lat": 15.3667,
        "lng": -91.4833,
        "country": "Guatemala"
    },
    {
        "rank": 1901,
        "name": "IFK Mariehamn",
        "lat": 60.0973,
        "lng": 19.9361,
        "country": "Finland"
    },
    {
        "rank": 1902,
        "name": "Macarthur FC",
        "lat": -34.0753,
        "lng": 150.7906,
        "country": "Australia"
    },
    {
        "rank": 1903,
        "name": "Oestersunds FK",
        "lat": 63.1792,
        "lng": 14.6357,
        "country": "Sweden"
    },
    {
        "rank": 1904,
        "name": "ESPOLI",
        "lat": -2.0807678394081273,
        "lng": -79.93530000000001,
        "country": "Ecuador"
    },
    {
        "rank": 1905,
        "name": "FC Volendam",
        "lat": 52.4978,
        "lng": 5.0694,
        "country": "Netherlands"
    },
    {
        "rank": 1906,
        "name": "Union Deportivo Universitario",
        "lat": 9.108305024828628,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 1907,
        "name": "Al Wahda",
        "lat": 24.7596457284735,
        "lng": 46.7219,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1908,
        "name": "JUTH FC",
        "lat": 9.8965,
        "lng": 8.8583,
        "country": "Nigeria"
    },
    {
        "rank": 1909,
        "name": "FC Pyunik",
        "lat": 40.1872,
        "lng": 44.5152,
        "country": "Armenia"
    },
    {
        "rank": 1910,
        "name": "Meizhou Hakka F.C.",
        "lat": 24.2899,
        "lng": 116.1225,
        "country": "China PR"
    },
    {
        "rank": 1911,
        "name": "Atenas",
        "lat": -34.44443919704066,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1912,
        "name": "Esbjerg fB",
        "lat": 55.4669,
        "lng": 8.452,
        "country": "Denmark"
    },
    {
        "rank": 1913,
        "name": "Lion City Sailors FC",
        "lat": 1.3521,
        "lng": 103.8198,
        "country": "Singapore"
    },
    {
        "rank": 1914,
        "name": "Union Sportive Bougouba",
        "lat": 12.819064321183758,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 1915,
        "name": "Dunav Ruse",
        "lat": 43.8564,
        "lng": 25.9656,
        "country": "Bulgaria"
    },
    {
        "rank": 1916,
        "name": "Karmiotissa Pano Polemidion",
        "lat": 34.71567240086397,
        "lng": 33.024747948551685,
        "country": "Cyprus"
    },
    {
        "rank": 1917,
        "name": "Shahin Bushehr FC",
        "lat": 28.9678,
        "lng": 50.8197,
        "country": "Iran"
    },
    {
        "rank": 1918,
        "name": "Black Rhinos",
        "lat": -17.591376382461142,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1919,
        "name": "Scottland Football Club",
        "lat": -17.57338995034277,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1920,
        "name": "Al-Sailiya",
        "lat": 25.3572,
        "lng": 51.3572,
        "country": "Qatar"
    },
    {
        "rank": 1921,
        "name": "Army United",
        "lat": 13.828245728473506,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 1922,
        "name": "Shijiazhuang Ever Bright",
        "lat": 38.0428,
        "lng": 114.5149,
        "country": "China PR"
    },
    {
        "rank": 1923,
        "name": "Odra Wodzisław",
        "lat": 50.0,
        "lng": 18.4667,
        "country": "Poland"
    },
    {
        "rank": 1924,
        "name": "SV Ried",
        "lat": 48.2058,
        "lng": 13.4911,
        "country": "Austria"
    },
    {
        "rank": 1925,
        "name": "Eagles",
        "lat": -17.555403518224395,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1926,
        "name": "St. George",
        "lat": 9.025,
        "lng": 38.7469,
        "country": "Ethiopia"
    },
    {
        "rank": 1927,
        "name": "Granit Mikashevichi",
        "lat": 52.2167,
        "lng": 29.4833,
        "country": "Belarus"
    },
    {
        "rank": 1928,
        "name": "Vendsyssel FF",
        "lat": 57.4886,
        "lng": 10.0308,
        "country": "Denmark"
    },
    {
        "rank": 1929,
        "name": "Volga Nyzhnyi",
        "lat": 56.31448643211838,
        "lng": 43.93610000000001,
        "country": "Russia"
    },
    {
        "rank": 1930,
        "name": "Hay al-Arab (SUD)",
        "lat": 15.572645728473496,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 1931,
        "name": "How Mine",
        "lat": -20.118727135763248,
        "lng": 28.5906,
        "country": "Zimbabwe"
    },
    {
        "rank": 1932,
        "name": "Okzhetpes Kokshetau",
        "lat": 53.2833,
        "lng": 69.3833,
        "country": "Kazakhstan"
    },
    {
        "rank": 1933,
        "name": "FC Maktaaral",
        "lat": 40.8333,
        "lng": 69.0,
        "country": "Kazakhstan"
    },
    {
        "rank": 1934,
        "name": "Gorica",
        "lat": 45.9258,
        "lng": 13.6417,
        "country": "Slovenia"
    },
    {
        "rank": 1935,
        "name": "Avenir de La Marsa",
        "lat": 36.8783,
        "lng": 10.3256,
        "country": "Tunisia"
    },
    {
        "rank": 1936,
        "name": "USM Blida",
        "lat": 36.4203,
        "lng": 2.8281,
        "country": "Algeria"
    },
    {
        "rank": 1937,
        "name": "SKA-Khabarovsk",
        "lat": 48.4827,
        "lng": 135.0839,
        "country": "Russia"
    },
    {
        "rank": 1938,
        "name": "Akokana",
        "lat": 13.588645728473502,
        "lng": 2.1167,
        "country": "Niger"
    },
    {
        "rank": 1939,
        "name": "AS Korofina",
        "lat": 12.837050753302133,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 1940,
        "name": "Haras El-Hodood SC",
        "lat": 30.272831315406027,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1941,
        "name": "F91 Dudelange",
        "lat": 49.4814,
        "lng": 6.0875,
        "country": "Luxembourg"
    },
    {
        "rank": 1942,
        "name": "FK Zemun",
        "lat": 44.843,
        "lng": 20.4,
        "country": "Serbia"
    },
    {
        "rank": 1943,
        "name": "Henderson Eels",
        "lat": -9.410013567881627,
        "lng": 159.95,
        "country": "Solomon Islands"
    },
    {
        "rank": 1944,
        "name": "Sololá FC",
        "lat": 14.7667,
        "lng": -91.1833,
        "country": "Guatemala"
    },
    {
        "rank": 1945,
        "name": "Víkingur Reykjavik",
        "lat": 64.1466,
        "lng": -21.9426,
        "country": "Iceland"
    },
    {
        "rank": 1946,
        "name": "Nogoom FC",
        "lat": 30.29081774752439,
        "lng": 31.233526242378275,
        "country": "Egypt"
    },
    {
        "rank": 1947,
        "name": "General Díaz",
        "lat": -24.85001206127741,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 1948,
        "name": "Barnechea",
        "lat": -33.3833,
        "lng": -70.5167,
        "country": "Chile"
    },
    {
        "rank": 1949,
        "name": "Flint Town United",
        "lat": 53.25,
        "lng": -3.1333,
        "country": "Wales"
    },
    {
        "rank": 1950,
        "name": "Police",
        "lat": 10.79971859271025,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 1951,
        "name": "Al-Okhdood Club",
        "lat": 18.264486432118375,
        "lng": 42.7265,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1952,
        "name": "Cerrito",
        "lat": -34.42645276492228,
        "lng": -56.0675,
        "country": "Uruguay"
    },
    {
        "rank": 1953,
        "name": "Akritas Chlorakas",
        "lat": 34.74412747282682,
        "lng": 32.42356349154859,
        "country": "Cyprus"
    },
    {
        "rank": 1954,
        "name": "Dukla Banska Bystrica",
        "lat": 48.7394,
        "lng": 19.1511,
        "country": "Slovakia"
    },
    {
        "rank": 1955,
        "name": "OFTA FC",
        "lat": 4.083637185420497,
        "lng": 11.5181,
        "country": "Cameroon"
    },
    {
        "rank": 1956,
        "name": "Nalkutan FC",
        "lat": -17.715313567881626,
        "lng": 168.3167,
        "country": "Vanuatu"
    },
    {
        "rank": 1957,
        "name": "GreenFuel FC",
        "lat": -19.0167,
        "lng": 32.6667,
        "country": "Zimbabwe"
    },
    {
        "rank": 1958,
        "name": "Dubnica",
        "lat": 48.9614,
        "lng": 17.5894,
        "country": "Slovakia"
    },
    {
        "rank": 1959,
        "name": "CD das Aves",
        "lat": 41.3,
        "lng": -8.7167,
        "country": "Portugal"
    },
    {
        "rank": 1960,
        "name": "Persis Solo",
        "lat": -7.5667,
        "lng": 110.8333,
        "country": "Indonesia"
    },
    {
        "rank": 1961,
        "name": "Bulawayo Chiefs",
        "lat": -20.100740703644874,
        "lng": 28.5906,
        "country": "Zimbabwe"
    },
    {
        "rank": 1962,
        "name": "Royal Wahingdoh",
        "lat": 25.5788,
        "lng": 91.8933,
        "country": "India"
    },
    {
        "rank": 1963,
        "name": "AL Shorta SC",
        "lat": 33.34877286423676,
        "lng": 44.3615,
        "country": "Iraq"
    },
    {
        "rank": 1964,
        "name": "Atlético Sport Aviação",
        "lat": -8.669808543053007,
        "lng": 13.2302,
        "country": "Angola"
    },
    {
        "rank": 1965,
        "name": "Sumqayıt",
        "lat": 40.5897,
        "lng": 49.6181,
        "country": "Azerbaijan"
    },
    {
        "rank": 1966,
        "name": "AS Salé",
        "lat": 34.0531,
        "lng": -6.7986,
        "country": "Morocco"
    },
    {
        "rank": 1967,
        "name": "Athlone Town",
        "lat": 53.4244,
        "lng": -7.9378,
        "country": "Ireland"
    },
    {
        "rank": 1968,
        "name": "Aarau",
        "lat": 47.3917,
        "lng": 8.0456,
        "country": "Switzerland"
    },
    {
        "rank": 1969,
        "name": "Atlético Venezuela",
        "lat": 10.552545728473506,
        "lng": -66.9036,
        "country": "Venezuela"
    },
    {
        "rank": 1970,
        "name": "Termalica Nieciecza",
        "lat": 50.2667,
        "lng": 20.9167,
        "country": "Poland"
    },
    {
        "rank": 1971,
        "name": "Podbeskidzie Bielsko-Biala",
        "lat": 49.8225,
        "lng": 19.0467,
        "country": "Poland"
    },
    {
        "rank": 1972,
        "name": "Binga FC",
        "lat": 17.6167,
        "lng": -27.3333,
        "country": "Mali"
    },
    {
        "rank": 1973,
        "name": "Al Ahli Benghazi",
        "lat": 32.115,
        "lng": 20.0669,
        "country": "Libya"
    },
    {
        "rank": 1974,
        "name": "Vejle Boldklub",
        "lat": 55.7089,
        "lng": 9.5358,
        "country": "Denmark"
    },
    {
        "rank": 1975,
        "name": "Adana Demirspor",
        "lat": 37.01798643211838,
        "lng": 35.32130000000001,
        "country": "Turkey"
    },
    {
        "rank": 1976,
        "name": "JSM Laâyoune",
        "lat": 27.1253,
        "lng": -13.1625,
        "country": "Morocco"
    },
    {
        "rank": 1977,
        "name": "Accra Lions FC",
        "lat": 5.729605024828624,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 1978,
        "name": "Dunaújváros Pálhalma SE",
        "lat": 46.9631,
        "lng": 18.9411,
        "country": "Hungary"
    },
    {
        "rank": 1979,
        "name": "Nakhon Ratchasima FC",
        "lat": 14.9799,
        "lng": 102.0977,
        "country": "Thailand"
    },
    {
        "rank": 1980,
        "name": "Once Municipal",
        "lat": 13.854777889065382,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 1981,
        "name": "NK Zadar",
        "lat": 44.1194,
        "lng": 15.2314,
        "country": "Croatia"
    },
    {
        "rank": 1982,
        "name": "Baroka FC",
        "lat": -23.850540703644874,
        "lng": 29.4689,
        "country": "South Africa"
    },
    {
        "rank": 1983,
        "name": "PSBS Biak",
        "lat": -1.1833,
        "lng": 136.1,
        "country": "Indonesia"
    },
    {
        "rank": 1984,
        "name": "KCCA FC",
        "lat": 0.3476,
        "lng": 32.5825,
        "country": "Togo"
    },
    {
        "rank": 1985,
        "name": "Wiener Neustadt",
        "lat": 47.8167,
        "lng": 16.25,
        "country": "Austria"
    },
    {
        "rank": 1986,
        "name": "Medimurje",
        "lat": 46.32462320368997,
        "lng": 16.350240369561757,
        "country": "Croatia"
    },
    {
        "rank": 1987,
        "name": "Persiba Balikpapan",
        "lat": -1.2675,
        "lng": 116.8289,
        "country": "Indonesia"
    },
    {
        "rank": 1988,
        "name": "Grombalia Sports",
        "lat": 36.6,
        "lng": 10.4833,
        "country": "Tunisia"
    },
    {
        "rank": 1989,
        "name": "Béni-Khalled",
        "lat": 36.7333,
        "lng": 10.35,
        "country": "Tunisia"
    },
    {
        "rank": 1990,
        "name": "Al Nahdha Dammam",
        "lat": 26.44665929635513,
        "lng": 50.0778,
        "country": "Saudi Arabia"
    },
    {
        "rank": 1991,
        "name": "CD Vida",
        "lat": 15.541672864236748,
        "lng": -88.0251,
        "country": "Honduras"
    },
    {
        "rank": 1992,
        "name": "Mufulira Wanderers",
        "lat": -12.55,
        "lng": 28.24,
        "country": "Zambia"
    },
    {
        "rank": 1993,
        "name": "Buffaloes FC",
        "lat": -17.53741708610602,
        "lng": 31.0335,
        "country": "Zimbabwe"
    },
    {
        "rank": 1994,
        "name": "San Juan FC",
        "lat": 18.519459296355127,
        "lng": -66.1057,
        "country": "Puerto Rico"
    },
    {
        "rank": 1995,
        "name": "Usc Bassam",
        "lat": 5.2167,
        "lng": -3.7833,
        "country": "Ivory Coast"
    },
    {
        "rank": 1996,
        "name": "Tefana",
        "lat": -17.519313567881625,
        "lng": -149.5583,
        "country": "Tahiti"
    },
    {
        "rank": 1997,
        "name": "Othellos Athienou FC",
        "lat": 35.0667,
        "lng": 33.5333,
        "country": "Cyprus"
    },
    {
        "rank": 1998,
        "name": "Comerciantes Unidos",
        "lat": -6.748713567881626,
        "lng": -79.8333,
        "country": "Peru"
    },
    {
        "rank": 1999,
        "name": "Radnik Bijeljina",
        "lat": 44.7583,
        "lng": 19.2139,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2000,
        "name": "FK Donji Srem",
        "lat": 44.9667,
        "lng": 19.9667,
        "country": "Serbia"
    },
    {
        "rank": 2001,
        "name": "Shark XI",
        "lat": -4.226062814579508,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2002,
        "name": "Dalian Professional FC",
        "lat": 38.94997286423674,
        "lng": 121.6147,
        "country": "China PR"
    },
    {
        "rank": 2003,
        "name": "Chainat FC",
        "lat": 15.1861,
        "lng": 100.125,
        "country": "Thailand"
    },
    {
        "rank": 2004,
        "name": "Atlético Balboa",
        "lat": 13.872764321183759,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2005,
        "name": "PSPS Pekanbaru",
        "lat": 0.5333,
        "lng": 101.45,
        "country": "Indonesia"
    },
    {
        "rank": 2006,
        "name": "Hapoel Nof HaGalil",
        "lat": 32.7069,
        "lng": 35.3033,
        "country": "Israel"
    },
    {
        "rank": 2007,
        "name": "FK Jezero Plav",
        "lat": 42.5967,
        "lng": 19.9481,
        "country": "Montenegro"
    },
    {
        "rank": 2008,
        "name": "Zamfara United FC",
        "lat": 12.1667,
        "lng": 6.2333,
        "country": "Nigeria"
    },
    {
        "rank": 2009,
        "name": "Veti Club",
        "lat": -4.208076382461133,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2010,
        "name": "Al Hilal Kadougli",
        "lat": 11.0168,
        "lng": 29.7168,
        "country": "Sudan"
    },
    {
        "rank": 2011,
        "name": "Al Ahli Khartoum",
        "lat": 15.59063216059187,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2012,
        "name": "Wuachon United",
        "lat": 13.846232160591883,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 2013,
        "name": "Resistencia Sport Club",
        "lat": -24.832025629159038,
        "lng": -57.575900000000004,
        "country": "Paraguay"
    },
    {
        "rank": 2014,
        "name": "Olympic Niamey",
        "lat": 13.50741300976845,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2015,
        "name": "Dinamo-Auto",
        "lat": 47.0105,
        "lng": 28.8638,
        "country": "Moldova"
    },
    {
        "rank": 2016,
        "name": "Hoang Anh Gia Lai",
        "lat": 13.9759,
        "lng": 108.0014,
        "country": "Vietnam"
    },
    {
        "rank": 2017,
        "name": "Parrillas One",
        "lat": 14.180218592710254,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 2018,
        "name": "Harbin Yiteng",
        "lat": 45.8038,
        "lng": 126.5349,
        "country": "China PR"
    },
    {
        "rank": 2019,
        "name": "Olympique du Kef",
        "lat": 36.1741,
        "lng": 8.704,
        "country": "Tunisia"
    },
    {
        "rank": 2020,
        "name": "Académica Lobito",
        "lat": -12.3598,
        "lng": 13.5311,
        "country": "Angola"
    },
    {
        "rank": 2021,
        "name": "Prison Leopards",
        "lat": -15.405486432118375,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2022,
        "name": "AEL Kalloni FC",
        "lat": 39.2167,
        "lng": 26.35,
        "country": "Greece"
    },
    {
        "rank": 2023,
        "name": "Al-Bourj FC",
        "lat": 33.98373216059188,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2024,
        "name": "FC Wacker Innsbruck",
        "lat": 47.27173793337379,
        "lng": 11.418449598730122,
        "country": "Austria"
    },
    {
        "rank": 2025,
        "name": "EO Sidi Bouzid",
        "lat": 35.0381,
        "lng": 9.4839,
        "country": "Tunisia"
    },
    {
        "rank": 2026,
        "name": "Real Kashmir FC",
        "lat": 34.0837,
        "lng": 74.7973,
        "country": "India"
    },
    {
        "rank": 2027,
        "name": "US Bitam",
        "lat": -17.55528483300187,
        "lng": -149.55804845875798,
        "country": "Tahiti"
    },
    {
        "rank": 2028,
        "name": "RC Bafoussam",
        "lat": 5.484604030613299,
        "lng": 10.418427600790181,
        "country": "Cameroon"
    },
    {
        "rank": 2029,
        "name": "Lengthens",
        "lat": -17.820988118277533,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2030,
        "name": "Chennai City FC",
        "lat": 13.0827,
        "lng": 80.2707,
        "country": "India"
    },
    {
        "rank": 2031,
        "name": "Ústí nad Labem",
        "lat": 50.6607,
        "lng": 14.0322,
        "country": "Czech Republic"
    },
    {
        "rank": 2032,
        "name": "NIGELEC",
        "lat": 13.525399441886824,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2033,
        "name": "Blessing FC",
        "lat": -4.190089950342759,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2034,
        "name": "Tema Youth",
        "lat": 5.6698,
        "lng": -0.0166,
        "country": "Ghana"
    },
    {
        "rank": 2035,
        "name": "Cabinda",
        "lat": -5.55,
        "lng": 12.2,
        "country": "Angola"
    },
    {
        "rank": 2036,
        "name": "FK Krupa",
        "lat": 44.8167,
        "lng": 16.15,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2037,
        "name": "Victoria Branesti",
        "lat": 44.4268,
        "lng": 26.1025,
        "country": "Romania"
    },
    {
        "rank": 2038,
        "name": "BSK Borča",
        "lat": 44.81671600669058,
        "lng": 20.454230801026984,
        "country": "Serbia"
    },
    {
        "rank": 2039,
        "name": "Ermis Aradippou",
        "lat": 34.94003514069802,
        "lng": 33.6015673128384,
        "country": "Cyprus"
    },
    {
        "rank": 2040,
        "name": "Berekum Arsenal",
        "lat": 7.456159820237733,
        "lng": -2.566257245025657,
        "country": "Ghana"
    },
    {
        "rank": 2041,
        "name": "Ifira Black Bird",
        "lat": -17.733477743440503,
        "lng": 168.3355827855571,
        "country": "Vanuatu"
    },
    {
        "rank": 2042,
        "name": "Kiglon",
        "lat": -17.80300168615916,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2043,
        "name": "FC Tskhinvali",
        "lat": 42.2269,
        "lng": 43.9686,
        "country": "Georgia"
    },
    {
        "rank": 2044,
        "name": "Saint George",
        "lat": 9.042986432118374,
        "lng": 38.7469,
        "country": "Ethiopia"
    },
    {
        "rank": 2045,
        "name": "FK Sloga Doboj",
        "lat": 44.7333,
        "lng": 18.0833,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2046,
        "name": "Estudiantes de Mérida",
        "lat": 8.5988,
        "lng": -71.1565,
        "country": "Venezuela"
    },
    {
        "rank": 2047,
        "name": "Anzoátegui F.C.",
        "lat": 8.6297,
        "lng": -62.9351,
        "country": "Venezuela"
    },
    {
        "rank": 2048,
        "name": "Akademija Pandev",
        "lat": 41.99384335250288,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2049,
        "name": "Llandudno FC",
        "lat": 53.3244,
        "lng": -3.8277,
        "country": "Wales"
    },
    {
        "rank": 2050,
        "name": "Samut Prakan City",
        "lat": 13.5991,
        "lng": 100.5998,
        "country": "Thailand"
    },
    {
        "rank": 2051,
        "name": "Najran SC",
        "lat": 17.4925,
        "lng": 44.1277,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2052,
        "name": "Siófok",
        "lat": 46.9167,
        "lng": 18.05,
        "country": "Hungary"
    },
    {
        "rank": 2053,
        "name": "Njube Sundowns",
        "lat": -20.171115163916575,
        "lng": 28.582767866728307,
        "country": "Zimbabwe"
    },
    {
        "rank": 2054,
        "name": "El Raja",
        "lat": 30.039718398979733,
        "lng": 31.218842046337247,
        "country": "Egypt"
    },
    {
        "rank": 2055,
        "name": "Al Fallah Atbara FC",
        "lat": 17.7,
        "lng": 33.9833,
        "country": "Sudan"
    },
    {
        "rank": 2056,
        "name": "Herrera FC",
        "lat": 7.9,
        "lng": -80.4167,
        "country": "Panama"
    },
    {
        "rank": 2057,
        "name": "Tavriia",
        "lat": 46.1958,
        "lng": 33.3665,
        "country": "Ukraine"
    },
    {
        "rank": 2058,
        "name": "Unirea Alba Iulia",
        "lat": 46.0667,
        "lng": 23.5833,
        "country": "Romania"
    },
    {
        "rank": 2059,
        "name": "Forest Rangers",
        "lat": -15.407500000000003,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2060,
        "name": "Akzhaiyk Uralsk",
        "lat": 51.2333,
        "lng": 51.3667,
        "country": "Kazakhstan"
    },
    {
        "rank": 2061,
        "name": "Příbram",
        "lat": 49.6895,
        "lng": 14.0105,
        "country": "Czech Republic"
    },
    {
        "rank": 2062,
        "name": "Petržalka",
        "lat": 48.1167,
        "lng": 17.1167,
        "country": "Slovakia"
    },
    {
        "rank": 2063,
        "name": "Hapoel Hadera",
        "lat": 32.4333,
        "lng": 34.9167,
        "country": "Israel"
    },
    {
        "rank": 2064,
        "name": "Nchanga Rangers",
        "lat": -12.8333,
        "lng": 27.4167,
        "country": "Zambia"
    },
    {
        "rank": 2065,
        "name": "Pérez Zeledón",
        "lat": 9.3333,
        "lng": -83.7,
        "country": "Costa Rica"
    },
    {
        "rank": 2066,
        "name": "AS-FAN",
        "lat": 13.5433858740052,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2067,
        "name": "FK Metalac",
        "lat": 44.0167,
        "lng": 21.9167,
        "country": "Serbia"
    },
    {
        "rank": 2068,
        "name": "Sukhothai FC",
        "lat": 17.01,
        "lng": 99.82,
        "country": "Thailand"
    },
    {
        "rank": 2069,
        "name": "JEF United",
        "lat": 35.6167,
        "lng": 140.1,
        "country": "Japan"
    },
    {
        "rank": 2070,
        "name": "KAC Kénitra",
        "lat": 34.261,
        "lng": -6.5802,
        "country": "Morocco"
    },
    {
        "rank": 2071,
        "name": "EGS Gafsa",
        "lat": 34.425,
        "lng": 8.7842,
        "country": "Tunisia"
    },
    {
        "rank": 2072,
        "name": "Hasaacas",
        "lat": 4.8967,
        "lng": -1.7756,
        "country": "Ghana"
    },
    {
        "rank": 2073,
        "name": "Hobro",
        "lat": 56.6431,
        "lng": 9.7903,
        "country": "Denmark"
    },
    {
        "rank": 2074,
        "name": "Dacia Buiucani",
        "lat": 47.02848643211838,
        "lng": 28.863799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2075,
        "name": "Tamale City",
        "lat": 9.4008,
        "lng": -0.8393,
        "country": "Ghana"
    },
    {
        "rank": 2076,
        "name": "Police United FC",
        "lat": 13.86421859271026,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 2077,
        "name": "Central Sport",
        "lat": 33.51407859509708,
        "lng": 36.27035914764853,
        "country": "Syria"
    },
    {
        "rank": 2078,
        "name": "Čelik Zenica",
        "lat": 44.2031,
        "lng": 17.9072,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2079,
        "name": "Al Sharkeyah",
        "lat": 30.5852,
        "lng": 31.5041,
        "country": "Egypt"
    },
    {
        "rank": 2080,
        "name": "AS Bamako",
        "lat": 12.855037185420509,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2081,
        "name": "FK Horizont Turnovo",
        "lat": 42.011829784621256,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2082,
        "name": "Eleven Wonders FC",
        "lat": 7.9465,
        "lng": -1.0232,
        "country": "Ghana"
    },
    {
        "rank": 2083,
        "name": "Liga Muçulmana",
        "lat": -25.9692,
        "lng": 32.5732,
        "country": "Mozambique"
    },
    {
        "rank": 2084,
        "name": "Baladiyat El Mahalla SC",
        "lat": 30.9776,
        "lng": 31.1669,
        "country": "Egypt"
    },
    {
        "rank": 2085,
        "name": "Metallurg Bekobod",
        "lat": 40.2167,
        "lng": 69.25,
        "country": "Uzbekistan"
    },
    {
        "rank": 2086,
        "name": "J.S. Groupe Bazano",
        "lat": 55.66878663263109,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2087,
        "name": "Barito Putera",
        "lat": -2.2118,
        "lng": 113.9214,
        "country": "Indonesia"
    },
    {
        "rank": 2088,
        "name": "GFK Tikvesh",
        "lat": 41.4386,
        "lng": 22.2789,
        "country": "Macedonia"
    },
    {
        "rank": 2089,
        "name": "Legon Cities FC",
        "lat": 5.747591456946998,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2090,
        "name": "Inter Allies FC",
        "lat": 5.765577889065373,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2091,
        "name": "Neftochimic Burgas 1962",
        "lat": 42.50903144140409,
        "lng": 27.458910969490628,
        "country": "Bulgaria"
    },
    {
        "rank": 2092,
        "name": "Punjab Football Club",
        "lat": 30.7333,
        "lng": 76.7794,
        "country": "India"
    },
    {
        "rank": 2093,
        "name": "Universitario",
        "lat": -16.39208140728976,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 2094,
        "name": "FC Stade Lausanne-Ouchy",
        "lat": 46.537686432118385,
        "lng": 6.6323,
        "country": "Switzerland"
    },
    {
        "rank": 2095,
        "name": "Siquinalá FC",
        "lat": 14.55,
        "lng": -90.9833,
        "country": "Guatemala"
    },
    {
        "rank": 2096,
        "name": "Yobe Desert Stars",
        "lat": 11.75,
        "lng": 11.9667,
        "country": "Nigeria"
    },
    {
        "rank": 2097,
        "name": "Admira Wacker Mödling",
        "lat": 48.0833,
        "lng": 16.2833,
        "country": "Austria"
    },
    {
        "rank": 2098,
        "name": "Sepidrood Rasht SC",
        "lat": 37.28962056043202,
        "lng": 49.57605781386479,
        "country": "Iran"
    },
    {
        "rank": 2099,
        "name": "Gaitcha FCN",
        "lat": -22.2628,
        "lng": 166.4572,
        "country": "New Caledonia"
    },
    {
        "rank": 2100,
        "name": "Helsingborgs IF",
        "lat": 56.0465,
        "lng": 12.6945,
        "country": "Sweden"
    },
    {
        "rank": 2101,
        "name": "Al Raed",
        "lat": 26.3064,
        "lng": 43.97,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2102,
        "name": "San Juan Jabloteh",
        "lat": 10.817705024828623,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2103,
        "name": "Kongsvinger",
        "lat": 60.1939,
        "lng": 11.999,
        "country": "Norway"
    },
    {
        "rank": 2104,
        "name": "Nantong Zhiyun FC",
        "lat": 32.0167,
        "lng": 120.8667,
        "country": "China PR"
    },
    {
        "rank": 2105,
        "name": "Ocean Pacifique",
        "lat": 55.706773064749474,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2106,
        "name": "Denizlispor",
        "lat": 37.7765,
        "lng": 29.0864,
        "country": "Turkey"
    },
    {
        "rank": 2107,
        "name": "Viettel Football Club",
        "lat": 21.0285,
        "lng": 105.8542,
        "country": "Vietnam"
    },
    {
        "rank": 2108,
        "name": "Bouaké FC",
        "lat": 7.6928,
        "lng": -5.03,
        "country": "Ivory Coast"
    },
    {
        "rank": 2109,
        "name": "Jamshedpur FC",
        "lat": 22.8046,
        "lng": 86.2029,
        "country": "India"
    },
    {
        "rank": 2110,
        "name": "King Faisal",
        "lat": 9.418786432118374,
        "lng": -0.8393000000000002,
        "country": "Ghana"
    },
    {
        "rank": 2111,
        "name": "Amidaus Professionals FC",
        "lat": 5.783564321183747,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2112,
        "name": "CS Hammam-Lif",
        "lat": 36.751286432118384,
        "lng": 10.35,
        "country": "Tunisia"
    },
    {
        "rank": 2113,
        "name": "Yanbian",
        "lat": 42.9167,
        "lng": 129.5,
        "country": "China PR"
    },
    {
        "rank": 2114,
        "name": "Gaborone United",
        "lat": -24.6282,
        "lng": 25.9231,
        "country": "Botswana"
    },
    {
        "rank": 2115,
        "name": "Tallinna JK Legion",
        "lat": 59.42141338586402,
        "lng": 24.74622079138525,
        "country": "Estonia"
    },
    {
        "rank": 2116,
        "name": "Ross County",
        "lat": 57.5936,
        "lng": -4.443,
        "country": "Scotland"
    },
    {
        "rank": 2117,
        "name": "Vision FC",
        "lat": 5.801550753302123,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2118,
        "name": "Alamal Atbara",
        "lat": 17.717986432118373,
        "lng": 33.9833,
        "country": "Sudan"
    },
    {
        "rank": 2119,
        "name": "Ittihad Zemouri de Khemisset",
        "lat": 33.8244,
        "lng": -6.0691,
        "country": "Morocco"
    },
    {
        "rank": 2120,
        "name": "Sandnes",
        "lat": 58.8523,
        "lng": 5.736,
        "country": "Norway"
    },
    {
        "rank": 2121,
        "name": "CA Batna",
        "lat": 35.5559,
        "lng": 6.174,
        "country": "Algeria"
    },
    {
        "rank": 2122,
        "name": "FC Noah",
        "lat": 40.1773930781091,
        "lng": 44.49546471636883,
        "country": "Armenia"
    },
    {
        "rank": 2123,
        "name": "ABM Galaxy FC",
        "lat": -17.715491311322133,
        "lng": 168.3355827855571,
        "country": "Vanuatu"
    },
    {
        "rank": 2124,
        "name": "Mumbai FC",
        "lat": 19.11197286423675,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 2125,
        "name": "Makedonija Gjorče Petrov",
        "lat": 42.02981621673963,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2126,
        "name": "Yadah FC",
        "lat": -17.785015254040786,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2127,
        "name": "Teungueth FC",
        "lat": 14.6928,
        "lng": -17.4467,
        "country": "Senegal"
    },
    {
        "rank": 2128,
        "name": "Mladi Radnik",
        "lat": 44.03468643211838,
        "lng": 21.9167,
        "country": "Serbia"
    },
    {
        "rank": 2129,
        "name": "Arcahaie FC",
        "lat": 18.7619,
        "lng": -72.5155,
        "country": "Haiti"
    },
    {
        "rank": 2130,
        "name": "El Mansura",
        "lat": 31.0364,
        "lng": 31.3801,
        "country": "Egypt"
    },
    {
        "rank": 2131,
        "name": "Newcastle United Jets",
        "lat": -32.9283,
        "lng": 151.7817,
        "country": "Australia"
    },
    {
        "rank": 2132,
        "name": "Crown FC",
        "lat": 9.0765,
        "lng": 8.6753,
        "country": "Nigeria"
    },
    {
        "rank": 2133,
        "name": "Varbergs BoIS",
        "lat": 57.1057,
        "lng": 12.2504,
        "country": "Sweden"
    },
    {
        "rank": 2134,
        "name": "Ekenäs Idrottsförening",
        "lat": 59.9667,
        "lng": 23.4333,
        "country": "Finland"
    },
    {
        "rank": 2135,
        "name": "Nkoyi Bilombe",
        "lat": 55.704759496867844,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2136,
        "name": "Lyngby",
        "lat": 55.7706,
        "lng": 12.5044,
        "country": "Denmark"
    },
    {
        "rank": 2137,
        "name": "RC Relizane",
        "lat": 35.7375,
        "lng": 0.5567,
        "country": "Algeria"
    },
    {
        "rank": 2138,
        "name": "Al-Ain FC",
        "lat": 26.5564,
        "lng": 49.9777,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2139,
        "name": "Sahel",
        "lat": 13.561372306123577,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2140,
        "name": "Ankaran Hrvatini",
        "lat": 45.58275787640625,
        "lng": 13.733000858727694,
        "country": "Slovenia"
    },
    {
        "rank": 2141,
        "name": "Ceahlăul Piatra",
        "lat": 46.9333,
        "lng": 26.3667,
        "country": "Romania"
    },
    {
        "rank": 2142,
        "name": "Mogren",
        "lat": 42.77309788915635,
        "lng": 18.924896952905513,
        "country": "Montenegro"
    },
    {
        "rank": 2143,
        "name": "AS Puma Generaleňa",
        "lat": 9.964072864236751,
        "lng": -84.09070000000001,
        "country": "Costa Rica"
    },
    {
        "rank": 2144,
        "name": "Santa Gema FC",
        "lat": 9.126291456947003,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 2145,
        "name": "Likasi",
        "lat": -10.9833,
        "lng": 26.7333,
        "country": "Congo DR"
    },
    {
        "rank": 2146,
        "name": "Doxa Dramas",
        "lat": 41.1533,
        "lng": 24.1469,
        "country": "Greece"
    },
    {
        "rank": 2147,
        "name": "Ha Noi FC",
        "lat": 21.04648643211838,
        "lng": 105.8542,
        "country": "Vietnam"
    },
    {
        "rank": 2148,
        "name": "Cobresol",
        "lat": -12.047141115462995,
        "lng": -77.04626707635701,
        "country": "Peru"
    },
    {
        "rank": 2149,
        "name": "Dinamo Vranje",
        "lat": 42.5528,
        "lng": 21.903,
        "country": "Serbia"
    },
    {
        "rank": 2150,
        "name": "Alianza Universidad Huanuco",
        "lat": -9.912613567881625,
        "lng": -76.2422,
        "country": "Peru"
    },
    {
        "rank": 2151,
        "name": "Cavalry FC",
        "lat": 51.0486,
        "lng": -114.0708,
        "country": "Canada"
    },
    {
        "rank": 2152,
        "name": "Sportul Studentesc",
        "lat": 44.44478643211838,
        "lng": 26.1025,
        "country": "Romania"
    },
    {
        "rank": 2153,
        "name": "Gornik Leczna",
        "lat": 51.3,
        "lng": 22.8833,
        "country": "Poland"
    },
    {
        "rank": 2154,
        "name": "Canon Buromeca",
        "lat": -4.172103518224383,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2155,
        "name": "Brisbane Roar FC",
        "lat": -27.4698,
        "lng": 153.0251,
        "country": "Australia"
    },
    {
        "rank": 2156,
        "name": "Scorpion FC de Bé",
        "lat": 6.1319,
        "lng": 1.2228,
        "country": "Cameroon"
    },
    {
        "rank": 2157,
        "name": "Panthrakikos Komotini",
        "lat": 41.1189,
        "lng": 25.4047,
        "country": "Greece"
    },
    {
        "rank": 2158,
        "name": "Sriracha",
        "lat": 13.1722,
        "lng": 100.9333,
        "country": "Thailand"
    },
    {
        "rank": 2159,
        "name": "Partizani Tirana",
        "lat": 41.3275,
        "lng": 19.8187,
        "country": "Albania"
    },
    {
        "rank": 2160,
        "name": "El Minya",
        "lat": 28.1084,
        "lng": 30.7503,
        "country": "Egypt"
    },
    {
        "rank": 2161,
        "name": "Persema Malang",
        "lat": -7.98434271391987,
        "lng": 112.62962027328365,
        "country": "Indonesia"
    },
    {
        "rank": 2162,
        "name": "Merreikh Nyala",
        "lat": 12.05,
        "lng": 24.8833,
        "country": "Sudan"
    },
    {
        "rank": 2163,
        "name": "TRAU F.C.",
        "lat": 24.817,
        "lng": 93.9368,
        "country": "India"
    },
    {
        "rank": 2164,
        "name": "Šibenik",
        "lat": 43.735,
        "lng": 15.8952,
        "country": "Croatia"
    },
    {
        "rank": 2165,
        "name": "FK Olympic Tashkent",
        "lat": 41.35345929635513,
        "lng": 69.2401,
        "country": "Uzbekistan"
    },
    {
        "rank": 2166,
        "name": "APOP / Kinyras",
        "lat": 35.1264,
        "lng": 33.4299,
        "country": "Cyprus"
    },
    {
        "rank": 2167,
        "name": "FK Arsenal Tivat",
        "lat": 42.4347,
        "lng": 18.6975,
        "country": "Montenegro"
    },
    {
        "rank": 2168,
        "name": "Kansanshi Dynamos",
        "lat": -12.1,
        "lng": 26.4167,
        "country": "Zambia"
    },
    {
        "rank": 2169,
        "name": "Tom' Tomsk",
        "lat": 56.5,
        "lng": 84.9667,
        "country": "Russia"
    },
    {
        "rank": 2170,
        "name": "USGN",
        "lat": 13.579358738241952,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2171,
        "name": "US Bougouni",
        "lat": 11.4167,
        "lng": -7.4833,
        "country": "Mali"
    },
    {
        "rank": 2172,
        "name": "Saraburi FC",
        "lat": 14.5289,
        "lng": 100.9067,
        "country": "Thailand"
    },
    {
        "rank": 2173,
        "name": "Rad Beograd",
        "lat": 44.83470243880895,
        "lng": 20.454230801026984,
        "country": "Serbia"
    },
    {
        "rank": 2174,
        "name": "Zagłębie Sosnowiec",
        "lat": 50.2862,
        "lng": 19.104,
        "country": "Poland"
    },
    {
        "rank": 2175,
        "name": "Gigira Laitepo",
        "lat": -6.314,
        "lng": 143.9555,
        "country": "Papua New Guinea"
    },
    {
        "rank": 2176,
        "name": "Kerala Blasters FC",
        "lat": 10.8505,
        "lng": 76.2711,
        "country": "India"
    },
    {
        "rank": 2177,
        "name": "Tsholotsho",
        "lat": -19.75,
        "lng": 27.7833,
        "country": "Zimbabwe"
    },
    {
        "rank": 2178,
        "name": "Al-Tai FC",
        "lat": 27.5167,
        "lng": 41.8833,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2179,
        "name": "Zimbabwe Saints",
        "lat": -17.767028821922413,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2180,
        "name": "Rangdajied United",
        "lat": 25.59678643211838,
        "lng": 91.8933,
        "country": "India"
    },
    {
        "rank": 2181,
        "name": "Hapoel Kfar Saba",
        "lat": 32.1744,
        "lng": 34.9063,
        "country": "Israel"
    },
    {
        "rank": 2182,
        "name": "PA Sambizanga",
        "lat": -8.8383,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2183,
        "name": "Cosmos de Bafia",
        "lat": 4.75,
        "lng": 11.2333,
        "country": "Cameroon"
    },
    {
        "rank": 2184,
        "name": "Young Apostles",
        "lat": 6.72447286423675,
        "lng": -1.6244,
        "country": "Ghana"
    },
    {
        "rank": 2185,
        "name": "Ħamrun Spartans",
        "lat": 35.8878,
        "lng": 14.4964,
        "country": "Malta"
    },
    {
        "rank": 2186,
        "name": "Ibanda Sport",
        "lat": -4.15411708610601,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2187,
        "name": "Limerick",
        "lat": 52.6638,
        "lng": -8.6267,
        "country": "Ireland"
    },
    {
        "rank": 2188,
        "name": "UWI FC",
        "lat": 18.0179,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2189,
        "name": "Breiðablik",
        "lat": 64.1,
        "lng": -21.8914,
        "country": "Iceland"
    },
    {
        "rank": 2190,
        "name": "Rajasthan United",
        "lat": 26.9124,
        "lng": 75.7873,
        "country": "India"
    },
    {
        "rank": 2191,
        "name": "Central Coast F.C.",
        "lat": -9.427999634055299,
        "lng": 159.96823271547657,
        "country": "Solomon Islands"
    },
    {
        "rank": 2192,
        "name": "ONGC FC",
        "lat": 19.129959296355125,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 2193,
        "name": "Mighty Jets",
        "lat": 5.819537185420497,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2194,
        "name": "SKN Sankt Pölten",
        "lat": 48.2,
        "lng": 15.6167,
        "country": "Austria"
    },
    {
        "rank": 2195,
        "name": "NA Hussein Dey",
        "lat": 36.73591356788163,
        "lng": 3.0588,
        "country": "Algeria"
    },
    {
        "rank": 2196,
        "name": "Lincoln Red Imps FC",
        "lat": 36.1408,
        "lng": -5.3536,
        "country": "Gibraltar"
    },
    {
        "rank": 2197,
        "name": "Al Batin",
        "lat": 28.4267,
        "lng": 45.9967,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2198,
        "name": "Kabasha",
        "lat": -4.136130653987635,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2199,
        "name": "AS Police",
        "lat": 12.873023617538882,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2200,
        "name": "Marek Dupnitsa",
        "lat": 42.2667,
        "lng": 23.1167,
        "country": "Bulgaria"
    },
    {
        "rank": 2201,
        "name": "Social Sol",
        "lat": 14.198205024828631,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 2202,
        "name": "Budafoki MTE",
        "lat": 47.498480517742635,
        "lng": 19.01580401681016,
        "country": "Hungary"
    },
    {
        "rank": 2203,
        "name": "Rudar Velenje",
        "lat": 46.3592,
        "lng": 15.1111,
        "country": "Slovenia"
    },
    {
        "rank": 2204,
        "name": "Yeni Malatyaspor",
        "lat": 38.3552,
        "lng": 38.3095,
        "country": "Turkey"
    },
    {
        "rank": 2205,
        "name": "FK Jedinstvo Ub",
        "lat": 44.4667,
        "lng": 20.0667,
        "country": "Serbia"
    },
    {
        "rank": 2206,
        "name": "Kaloum Star",
        "lat": 9.6412,
        "lng": -13.5784,
        "country": "Guinea"
    },
    {
        "rank": 2207,
        "name": "LLB Académic",
        "lat": -3.3731,
        "lng": 29.9189,
        "country": "Burundi"
    },
    {
        "rank": 2208,
        "name": "Olympic Club",
        "lat": -4.118144221869261,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2209,
        "name": "FK Šilas",
        "lat": 54.701634855951085,
        "lng": 25.283708287953548,
        "country": "Lithuania"
    },
    {
        "rank": 2210,
        "name": "AS Nyuki de Butembo",
        "lat": 55.72274592898623,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2211,
        "name": "Highway",
        "lat": -17.74904238980404,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2212,
        "name": "Nord Sport",
        "lat": 55.7407323611046,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2213,
        "name": "Sheasham FC",
        "lat": -17.73105595768567,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2214,
        "name": "Persiram Raja Ampat",
        "lat": -0.7893,
        "lng": 131.1016,
        "country": "Indonesia"
    },
    {
        "rank": 2215,
        "name": "Aïn Fakroun",
        "lat": 36.4,
        "lng": 6.8667,
        "country": "Algeria"
    },
    {
        "rank": 2216,
        "name": "Glenavon",
        "lat": 54.45,
        "lng": -6.3833,
        "country": "Northern Ireland"
    },
    {
        "rank": 2217,
        "name": "Etoile du Kivu",
        "lat": -4.100157789750886,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2218,
        "name": "Doxa Katokopia",
        "lat": 35.144386432118374,
        "lng": 33.4299,
        "country": "Cyprus"
    },
    {
        "rank": 2219,
        "name": "Nembe City FC",
        "lat": 4.54,
        "lng": 6.4033,
        "country": "Nigeria"
    },
    {
        "rank": 2220,
        "name": "Platense",
        "lat": 15.4417,
        "lng": -87.9667,
        "country": "Honduras"
    },
    {
        "rank": 2221,
        "name": "Independiente FC",
        "lat": 13.890750753302134,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2222,
        "name": "Sabé",
        "lat": 7.710786432118374,
        "lng": -5.03,
        "country": "Ivory Coast"
    },
    {
        "rank": 2223,
        "name": "Diables Noirs",
        "lat": -4.2634,
        "lng": 15.2429,
        "country": "Congo"
    },
    {
        "rank": 2224,
        "name": "Entente Sportive du Bafing",
        "lat": 7.728772864236748,
        "lng": -5.03,
        "country": "Ivory Coast"
    },
    {
        "rank": 2225,
        "name": "Mornar",
        "lat": 42.45268643211838,
        "lng": 18.6975,
        "country": "Montenegro"
    },
    {
        "rank": 2226,
        "name": "Persita Tangerang",
        "lat": -6.1781,
        "lng": 106.6319,
        "country": "Indonesia"
    },
    {
        "rank": 2227,
        "name": "Township Rollers",
        "lat": -24.61021356788163,
        "lng": 25.9231,
        "country": "Botswana"
    },
    {
        "rank": 2228,
        "name": "AL Adalh FC",
        "lat": 24.7136,
        "lng": 46.6753,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2229,
        "name": "Racing United FC",
        "lat": 18.035886432118378,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2230,
        "name": "Sunkar",
        "lat": 43.257972864236756,
        "lng": 76.8512,
        "country": "Kazakhstan"
    },
    {
        "rank": 2231,
        "name": "KF Tirana",
        "lat": 41.34548643211837,
        "lng": 19.8187,
        "country": "Albania"
    },
    {
        "rank": 2232,
        "name": "Gaz Metan Mediaş",
        "lat": 46.1667,
        "lng": 24.35,
        "country": "Romania"
    },
    {
        "rank": 2233,
        "name": "Ararat-Armenia FC",
        "lat": 40.195379510227475,
        "lng": 44.49546471636883,
        "country": "Armenia"
    },
    {
        "rank": 2234,
        "name": "Tammeka",
        "lat": 58.3778,
        "lng": 26.7305,
        "country": "Estonia"
    },
    {
        "rank": 2235,
        "name": "FK Molodechno",
        "lat": 54.3167,
        "lng": 26.8667,
        "country": "Belarus"
    },
    {
        "rank": 2236,
        "name": "Progresso Associação do Sambizanga",
        "lat": -8.840313567881625,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2237,
        "name": "Deportivo Savio",
        "lat": 14.216191456947008,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 2238,
        "name": "UMECIT FC",
        "lat": 9.14427788906538,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 2239,
        "name": "AS Kasserine",
        "lat": 35.1678,
        "lng": 8.8369,
        "country": "Tunisia"
    },
    {
        "rank": 2240,
        "name": "Young Green Eagles",
        "lat": -15.38951356788163,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2241,
        "name": "İstanbulspor",
        "lat": 40.99421356788162,
        "lng": 28.9784,
        "country": "Turkey"
    },
    {
        "rank": 2242,
        "name": "Azam",
        "lat": -6.774413567881624,
        "lng": 39.2083,
        "country": "Tanzania"
    },
    {
        "rank": 2243,
        "name": "FC Alashkert",
        "lat": 40.21336594234585,
        "lng": 44.49546471636883,
        "country": "Armenia"
    },
    {
        "rank": 2244,
        "name": "AC Kuya Sport",
        "lat": -4.082171357632512,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2245,
        "name": "Eupen",
        "lat": 50.6292,
        "lng": 6.037,
        "country": "Belgium"
    },
    {
        "rank": 2246,
        "name": "Miedź Legnica",
        "lat": 51.2167,
        "lng": 16.1667,
        "country": "Poland"
    },
    {
        "rank": 2247,
        "name": "Olympic Sport Abobo",
        "lat": 5.418730943437319,
        "lng": -4.010325395390626,
        "country": "Ivory Coast"
    },
    {
        "rank": 2248,
        "name": "Sliven",
        "lat": 42.6833,
        "lng": 26.3167,
        "country": "Bulgaria"
    },
    {
        "rank": 2249,
        "name": "Metalleghe BSI",
        "lat": 44.751286432118384,
        "lng": 18.0833,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2250,
        "name": "El Dorado",
        "lat": 55.758718793222975,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2251,
        "name": "Lobos UPNFM",
        "lat": 14.234177889065384,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 2252,
        "name": "FK Kom Podgorica",
        "lat": 42.4411,
        "lng": 19.2636,
        "country": "Montenegro"
    },
    {
        "rank": 2253,
        "name": "Zestafoni",
        "lat": 42.1082,
        "lng": 43.0411,
        "country": "Georgia"
    },
    {
        "rank": 2254,
        "name": "US Panda B5",
        "lat": -4.064184925514137,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2255,
        "name": "Al Bataeh Club",
        "lat": 25.4382,
        "lng": 56.1735,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2256,
        "name": "FC Lubumbashi sport",
        "lat": -11.675844531656821,
        "lng": 27.48914688805925,
        "country": "Congo DR"
    },
    {
        "rank": 2257,
        "name": "Uniao Sport Clube do Uige",
        "lat": -7.6167,
        "lng": 15.05,
        "country": "Angola"
    },
    {
        "rank": 2258,
        "name": "Wad Hashim SC Sennar",
        "lat": 13.5538,
        "lng": 33.6372,
        "country": "Sudan"
    },
    {
        "rank": 2259,
        "name": "Gabès",
        "lat": 33.89948643211837,
        "lng": 10.0982,
        "country": "Tunisia"
    },
    {
        "rank": 2260,
        "name": "Kuwait SC",
        "lat": 29.3375,
        "lng": 47.6581,
        "country": "Kuwait"
    },
    {
        "rank": 2261,
        "name": "Tamme Auto",
        "lat": 58.395786432118385,
        "lng": 26.7305,
        "country": "Estonia"
    },
    {
        "rank": 2262,
        "name": "Mouna FC",
        "lat": 7.7467592963551235,
        "lng": -5.03,
        "country": "Ivory Coast"
    },
    {
        "rank": 2263,
        "name": "Molunge",
        "lat": -4.046198493395763,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2264,
        "name": "Shabab Al-Ordon Club",
        "lat": 31.95436929134701,
        "lng": 35.909514862565075,
        "country": "Jordan"
    },
    {
        "rank": 2265,
        "name": "Juventud Escuintleca",
        "lat": 14.2833,
        "lng": -90.7,
        "country": "Guatemala"
    },
    {
        "rank": 2266,
        "name": "Pelita Bandung Raya",
        "lat": -6.899513567881627,
        "lng": 107.6191,
        "country": "Indonesia"
    },
    {
        "rank": 2267,
        "name": "Mitra Kukar",
        "lat": -0.5022,
        "lng": 117.1203,
        "country": "Indonesia"
    },
    {
        "rank": 2268,
        "name": "CS Fola Esch",
        "lat": 49.4961,
        "lng": 5.9808,
        "country": "Luxembourg"
    },
    {
        "rank": 2269,
        "name": "Warrior",
        "lat": 59.4393998179824,
        "lng": 24.74622079138525,
        "country": "Estonia"
    },
    {
        "rank": 2270,
        "name": "Surkhon-2011",
        "lat": 37.9333,
        "lng": 67.2833,
        "country": "Uzbekistan"
    },
    {
        "rank": 2271,
        "name": "ASI D'Abengourou",
        "lat": 6.7333,
        "lng": -3.4833,
        "country": "Ivory Coast"
    },
    {
        "rank": 2272,
        "name": "Verdes FC",
        "lat": 17.4989,
        "lng": -88.1962,
        "country": "Belize"
    },
    {
        "rank": 2273,
        "name": "La U Universitarios",
        "lat": 9.982059296355127,
        "lng": -84.09070000000001,
        "country": "Costa Rica"
    },
    {
        "rank": 2274,
        "name": "JCT FC",
        "lat": 31.326,
        "lng": 75.5762,
        "country": "India"
    },
    {
        "rank": 2275,
        "name": "Mutondo Stars",
        "lat": -15.371527135763256,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2276,
        "name": "Platanias",
        "lat": 35.5167,
        "lng": 23.6667,
        "country": "Greece"
    },
    {
        "rank": 2277,
        "name": "Krumkachy Minsk",
        "lat": 53.90393072041428,
        "lng": 27.556277453438884,
        "country": "Belarus"
    },
    {
        "rank": 2278,
        "name": "Stjarnan",
        "lat": 64.1355,
        "lng": -21.8174,
        "country": "Iceland"
    },
    {
        "rank": 2279,
        "name": "Deportivo Zulia",
        "lat": 10.6316,
        "lng": -71.6444,
        "country": "Venezuela"
    },
    {
        "rank": 2280,
        "name": "Wad Nubawi Khartoum FC",
        "lat": 15.608618592710247,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2281,
        "name": "Ranchers Bees",
        "lat": 9.094486432118375,
        "lng": 8.675300000000002,
        "country": "Nigeria"
    },
    {
        "rank": 2282,
        "name": "Gombe United",
        "lat": 10.2897,
        "lng": 11.1689,
        "country": "Nigeria"
    },
    {
        "rank": 2283,
        "name": "FK Jerv",
        "lat": 58.1597,
        "lng": 8.0182,
        "country": "Norway"
    },
    {
        "rank": 2284,
        "name": "PSS Sleman",
        "lat": -7.7326,
        "lng": 110.3467,
        "country": "Indonesia"
    },
    {
        "rank": 2285,
        "name": "Gran Valencia FC",
        "lat": 10.1617,
        "lng": -68.0077,
        "country": "Venezuela"
    },
    {
        "rank": 2286,
        "name": "APEP",
        "lat": 35.162372864236744,
        "lng": 33.4299,
        "country": "Cyprus"
    },
    {
        "rank": 2287,
        "name": "CSyD Carchá",
        "lat": 15.4,
        "lng": -90.3167,
        "country": "Guatemala"
    },
    {
        "rank": 2288,
        "name": "Papua New Guinea U20",
        "lat": -6.296013567881625,
        "lng": 143.9555,
        "country": "Papua New Guinea"
    },
    {
        "rank": 2289,
        "name": "Germinal Beerschot",
        "lat": 51.23928643211838,
        "lng": 4.4051,
        "country": "Belgium"
    },
    {
        "rank": 2290,
        "name": "Togo-Port",
        "lat": 0.3655864321183746,
        "lng": 32.5825,
        "country": "Uganda"
    },
    {
        "rank": 2291,
        "name": "AS Denguélé",
        "lat": 9.4,
        "lng": -7.55,
        "country": "Ivory Coast"
    },
    {
        "rank": 2292,
        "name": "AS Nianan",
        "lat": 12.891010049657257,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2293,
        "name": "Akademik Sofia",
        "lat": 42.7063663802936,
        "lng": 23.302594616165013,
        "country": "Bulgaria"
    },
    {
        "rank": 2294,
        "name": "Asyut Petrol",
        "lat": 27.1809,
        "lng": 31.1837,
        "country": "Egypt"
    },
    {
        "rank": 2295,
        "name": "FC Pasching",
        "lat": 48.2333,
        "lng": 14.2,
        "country": "Austria"
    },
    {
        "rank": 2296,
        "name": "Central",
        "lat": 10.835691456946996,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2297,
        "name": "Briton Ferry Llansawel",
        "lat": 51.6333,
        "lng": -3.8167,
        "country": "Wales"
    },
    {
        "rank": 2298,
        "name": "Al Qadsia Kuwait",
        "lat": 29.35548643211838,
        "lng": 47.6581,
        "country": "Kuwait"
    },
    {
        "rank": 2299,
        "name": "FK Turan Turkistan",
        "lat": 43.2973,
        "lng": 68.2517,
        "country": "Kazakhstan"
    },
    {
        "rank": 2300,
        "name": "Zhenis",
        "lat": 49.82268643211837,
        "lng": 73.10940000000001,
        "country": "Kazakhstan"
    },
    {
        "rank": 2301,
        "name": "Petro Souths",
        "lat": -6.27802713576325,
        "lng": 143.9555,
        "country": "Papua New Guinea"
    },
    {
        "rank": 2302,
        "name": "Club Olympique de Médenine",
        "lat": 33.3549,
        "lng": 10.5052,
        "country": "Tunisia"
    },
    {
        "rank": 2303,
        "name": "Flame Lilly",
        "lat": -17.713069525567292,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2304,
        "name": "FK Bokelj",
        "lat": 42.47067286423675,
        "lng": 18.6975,
        "country": "Montenegro"
    },
    {
        "rank": 2305,
        "name": "Bikita Minerals FC",
        "lat": -19.9833,
        "lng": 31.3,
        "country": "Zimbabwe"
    },
    {
        "rank": 2306,
        "name": "Eleven Wise",
        "lat": 5.8375236175388725,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2307,
        "name": "DSK Shivajians",
        "lat": 19.147945728473502,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 2308,
        "name": "Differdange 03",
        "lat": 49.5247,
        "lng": 6.1608,
        "country": "Luxembourg"
    },
    {
        "rank": 2309,
        "name": "FC Kuressaare",
        "lat": 58.253,
        "lng": 22.4894,
        "country": "Estonia"
    },
    {
        "rank": 2310,
        "name": "Hvidovre IF",
        "lat": 55.6572,
        "lng": 12.4736,
        "country": "Denmark"
    },
    {
        "rank": 2311,
        "name": "Olympique de Missira",
        "lat": 12.908996481775633,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2312,
        "name": "Atlético do Namibe",
        "lat": -15.15,
        "lng": 12.15,
        "country": "Angola"
    },
    {
        "rank": 2313,
        "name": "FC Gareji Sagarejo",
        "lat": 41.7333,
        "lng": 45.3167,
        "country": "Georgia"
    },
    {
        "rank": 2314,
        "name": "Tiga Sport",
        "lat": -22.244813567881625,
        "lng": 166.4572,
        "country": "New Caledonia"
    },
    {
        "rank": 2315,
        "name": "Underhill",
        "lat": -17.69508309344892,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2316,
        "name": "AD Grecia FC",
        "lat": 10.1333,
        "lng": -84.3167,
        "country": "Costa Rica"
    },
    {
        "rank": 2317,
        "name": "Pontypridd Town",
        "lat": 51.6,
        "lng": -3.3333,
        "country": "Wales"
    },
    {
        "rank": 2318,
        "name": "Abha Club",
        "lat": 18.2164,
        "lng": 42.5047,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2319,
        "name": "Diaraf",
        "lat": 14.710786432118372,
        "lng": -17.4467,
        "country": "Senegal"
    },
    {
        "rank": 2320,
        "name": "Youssoufia Berrechid",
        "lat": 33.2667,
        "lng": -7.5833,
        "country": "Morocco"
    },
    {
        "rank": 2321,
        "name": "FC MK",
        "lat": -4.0282120612773875,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2322,
        "name": "Al-Hilal Alsahil",
        "lat": 15.62660502482862,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2323,
        "name": "Al-Ahli Atbara",
        "lat": 17.73597286423675,
        "lng": 33.9833,
        "country": "Sudan"
    },
    {
        "rank": 2324,
        "name": "Angostura FC",
        "lat": 8.1,
        "lng": -63.55,
        "country": "Venezuela"
    },
    {
        "rank": 2325,
        "name": "MSP Batna",
        "lat": 35.57388643211838,
        "lng": 6.174,
        "country": "Algeria"
    },
    {
        "rank": 2326,
        "name": "Basake Holy Stars FC",
        "lat": 5.855510049657247,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2327,
        "name": "PSIS",
        "lat": -6.9931,
        "lng": 110.4203,
        "country": "Indonesia"
    },
    {
        "rank": 2328,
        "name": "Persijap Jepara",
        "lat": -6.5889,
        "lng": 110.6719,
        "country": "Indonesia"
    },
    {
        "rank": 2329,
        "name": "Ubon UMT FC",
        "lat": 15.2442,
        "lng": 104.8475,
        "country": "Thailand"
    },
    {
        "rank": 2330,
        "name": "Lae City Dwellers",
        "lat": -6.7269,
        "lng": 146.9923,
        "country": "Papua New Guinea"
    },
    {
        "rank": 2331,
        "name": "Binh Duong",
        "lat": 10.9804,
        "lng": 106.6519,
        "country": "Vietnam"
    },
    {
        "rank": 2332,
        "name": "Tiare Tahiti",
        "lat": 33.53206502721546,
        "lng": 36.27035914764853,
        "country": "Syria"
    },
    {
        "rank": 2333,
        "name": "Kokand 1912",
        "lat": 40.5283,
        "lng": 70.9428,
        "country": "Uzbekistan"
    },
    {
        "rank": 2334,
        "name": "Ahal FK",
        "lat": 37.95,
        "lng": 58.3833,
        "country": "Turkmenistan"
    },
    {
        "rank": 2335,
        "name": "Tokushima Vortis",
        "lat": 34.0658,
        "lng": 134.5593,
        "country": "Japan"
    },
    {
        "rank": 2336,
        "name": "Adzopé",
        "lat": 6.1067,
        "lng": -3.8567,
        "country": "Ivory Coast"
    },
    {
        "rank": 2337,
        "name": "H&H Export Sébaco FC",
        "lat": 12.85,
        "lng": -86.1,
        "country": "Nicaragua"
    },
    {
        "rank": 2338,
        "name": "Mjøndalen IF",
        "lat": 59.6333,
        "lng": 9.8333,
        "country": "Norway"
    },
    {
        "rank": 2339,
        "name": "Real Hope FA",
        "lat": 18.779886432118378,
        "lng": -72.5155,
        "country": "Haiti"
    },
    {
        "rank": 2340,
        "name": "FK Aksu",
        "lat": 42.4167,
        "lng": 74.9833,
        "country": "Kazakhstan"
    },
    {
        "rank": 2341,
        "name": "Toronto FC",
        "lat": 43.6532,
        "lng": -79.3832,
        "country": "Canada"
    },
    {
        "rank": 2342,
        "name": "Saint-Clément",
        "lat": -4.010225629159013,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2343,
        "name": "Al-Zoma Khartoum",
        "lat": 15.644591456946998,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2344,
        "name": "Tempête",
        "lat": 18.79787286423675,
        "lng": -72.5155,
        "country": "Haiti"
    },
    {
        "rank": 2345,
        "name": "Al-Orobah FC",
        "lat": 25.9667,
        "lng": 49.5833,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2346,
        "name": "Kukesi",
        "lat": 42.0833,
        "lng": 20.4167,
        "country": "Albania"
    },
    {
        "rank": 2347,
        "name": "Marist",
        "lat": -9.410013201936923,
        "lng": 159.96823271547657,
        "country": "Solomon Islands"
    },
    {
        "rank": 2348,
        "name": "Club Sando",
        "lat": 10.85367788906537,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2349,
        "name": "Chennaiyin FC",
        "lat": 13.100686432118374,
        "lng": 80.2707,
        "country": "India"
    },
    {
        "rank": 2350,
        "name": "Szolnoki MÁV",
        "lat": 47.1833,
        "lng": 20.2,
        "country": "Hungary"
    },
    {
        "rank": 2351,
        "name": "El Nasr Tadeen",
        "lat": 30.057704831098103,
        "lng": 31.218842046337247,
        "country": "Egypt"
    },
    {
        "rank": 2352,
        "name": "Erakor Golden Star",
        "lat": -17.69750487920376,
        "lng": 168.3355827855571,
        "country": "Vanuatu"
    },
    {
        "rank": 2353,
        "name": "Vostok",
        "lat": 43.2567,
        "lng": 76.9286,
        "country": "Kazakhstan"
    },
    {
        "rank": 2354,
        "name": "Shabab El Bourj SC",
        "lat": 34.00171859271025,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2355,
        "name": "FC Simba",
        "lat": 55.77670522534135,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2356,
        "name": "FK Kaspiy Aktau",
        "lat": 43.65,
        "lng": 51.1833,
        "country": "Kazakhstan"
    },
    {
        "rank": 2357,
        "name": "Santos de Angola",
        "lat": -8.822327135763251,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2358,
        "name": "Kober SC Bahri",
        "lat": 15.65,
        "lng": 32.5333,
        "country": "Sudan"
    },
    {
        "rank": 2359,
        "name": "Nong Bua Pitchaya FC",
        "lat": 17.2042,
        "lng": 102.4406,
        "country": "Thailand"
    },
    {
        "rank": 2360,
        "name": "FK Mladost Doboj Kakanj",
        "lat": 44.4167,
        "lng": 18.1167,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2361,
        "name": "Muungano",
        "lat": -3.992239197040638,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2362,
        "name": "Alkali Nassara",
        "lat": 13.59734517036033,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2363,
        "name": "Chegutu Pirates FC",
        "lat": -18.1333,
        "lng": 30.15,
        "country": "Zimbabwe"
    },
    {
        "rank": 2364,
        "name": "FK Gorno Lisice",
        "lat": 42.047802648858,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2365,
        "name": "Concordia Chiajna",
        "lat": 44.442772864236754,
        "lng": 26.1025,
        "country": "Romania"
    },
    {
        "rank": 2366,
        "name": "CD Audaz",
        "lat": 13.90873718542051,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2367,
        "name": "Club Omnisports de Korhogo (CIV)",
        "lat": 9.4583,
        "lng": -5.6297,
        "country": "Ivory Coast"
    },
    {
        "rank": 2368,
        "name": "Mont Bleu",
        "lat": 55.79469165745972,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2369,
        "name": "CD Chalatenango",
        "lat": 14.0333,
        "lng": -88.9333,
        "country": "El Salvador"
    },
    {
        "rank": 2370,
        "name": "Nafta",
        "lat": 46.6466087776669,
        "lng": 16.15417795353129,
        "country": "Slovenia"
    },
    {
        "rank": 2371,
        "name": "A.D. Municipal Santa Ana",
        "lat": 10.2333,
        "lng": -84.1833,
        "country": "Costa Rica"
    },
    {
        "rank": 2372,
        "name": "Lajong SC",
        "lat": 25.614772864236755,
        "lng": 91.8933,
        "country": "India"
    },
    {
        "rank": 2373,
        "name": "Kalyani Bharat FC",
        "lat": 22.9751,
        "lng": 88.4345,
        "country": "India"
    },
    {
        "rank": 2374,
        "name": "GD Baixa de Kassanje",
        "lat": -9.1167,
        "lng": 16.7833,
        "country": "Angola"
    },
    {
        "rank": 2375,
        "name": "Interblock",
        "lat": 46.0691566185667,
        "lng": 14.48007715386495,
        "country": "Slovenia"
    },
    {
        "rank": 2376,
        "name": "Haskovo 2009",
        "lat": 41.9333,
        "lng": 25.5667,
        "country": "Bulgaria"
    },
    {
        "rank": 2377,
        "name": "NK Zagreb",
        "lat": 45.82233427625772,
        "lng": 16.000049832566436,
        "country": "Croatia"
    },
    {
        "rank": 2378,
        "name": "Kazakhmys",
        "lat": 47.7,
        "lng": 67.7,
        "country": "Kazakhstan"
    },
    {
        "rank": 2379,
        "name": "Real Santa Cruz",
        "lat": -17.657394975171385,
        "lng": -63.18330000000001,
        "country": "Bolivia"
    },
    {
        "rank": 2380,
        "name": "FH Hafnarfjordur",
        "lat": 64.0671,
        "lng": -21.9512,
        "country": "Iceland"
    },
    {
        "rank": 2381,
        "name": "FK Radnik Surdulica",
        "lat": 42.6936,
        "lng": 22.1619,
        "country": "Serbia"
    },
    {
        "rank": 2382,
        "name": "Al-Abbassieh",
        "lat": 34.019705024828625,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2383,
        "name": "Santa Tecla FC",
        "lat": 13.6667,
        "lng": -89.2833,
        "country": "El Salvador"
    },
    {
        "rank": 2384,
        "name": "FC Buzău",
        "lat": 45.15,
        "lng": 26.8167,
        "country": "Romania"
    },
    {
        "rank": 2385,
        "name": "Moossou FC",
        "lat": 6.9,
        "lng": -5.2833,
        "country": "Ivory Coast"
    },
    {
        "rank": 2386,
        "name": "Roan United",
        "lat": -12.815313567881628,
        "lng": 27.416700000000002,
        "country": "Zambia"
    },
    {
        "rank": 2387,
        "name": "Wassaman United",
        "lat": 5.2,
        "lng": -2.2333,
        "country": "Ghana"
    },
    {
        "rank": 2388,
        "name": "JSK Chabab Kasba Tadla",
        "lat": 32.5833,
        "lng": -6.2667,
        "country": "Morocco"
    },
    {
        "rank": 2389,
        "name": "Sabana de Mopti",
        "lat": 14.4833,
        "lng": -4.1833,
        "country": "Mali"
    },
    {
        "rank": 2390,
        "name": "AC Mamahira",
        "lat": 12.926982913894008,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2391,
        "name": "FC Renaissance du Congo",
        "lat": 55.8126780895781,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2392,
        "name": "FC Ulytau",
        "lat": 48.5667,
        "lng": 67.7333,
        "country": "Kazakhstan"
    },
    {
        "rank": 2393,
        "name": "Espoir",
        "lat": 13.615331602478705,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2394,
        "name": "Partizan Minsk",
        "lat": 53.92191715253266,
        "lng": 27.556277453438884,
        "country": "Belarus"
    },
    {
        "rank": 2395,
        "name": "FC Spicul Chișcăreni",
        "lat": 47.04647286423676,
        "lng": 28.863799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2396,
        "name": "Ndoki ya Ndombe",
        "lat": -3.974252764922263,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2397,
        "name": "Sportist Svoge",
        "lat": 42.9167,
        "lng": 23.0167,
        "country": "Bulgaria"
    },
    {
        "rank": 2398,
        "name": "FK Otrant-Olympic",
        "lat": 42.0972,
        "lng": 19.1281,
        "country": "Montenegro"
    },
    {
        "rank": 2399,
        "name": "ATS Koro",
        "lat": 14.0333,
        "lng": -3.4833,
        "country": "Mali"
    },
    {
        "rank": 2400,
        "name": "Standard Sumgayit",
        "lat": 40.5892,
        "lng": 49.6683,
        "country": "Azerbaijan"
    },
    {
        "rank": 2401,
        "name": "Etar",
        "lat": 43.0833,
        "lng": 25.9667,
        "country": "Bulgaria"
    },
    {
        "rank": 2402,
        "name": "PAEEK Kyrenia",
        "lat": 35.3365,
        "lng": 33.317,
        "country": "Cyprus"
    },
    {
        "rank": 2403,
        "name": "FC Diarra",
        "lat": 12.944969346012382,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2404,
        "name": "Dunfermline Athletic",
        "lat": 56.0706,
        "lng": -3.4514,
        "country": "Scotland"
    },
    {
        "rank": 2405,
        "name": "Ouragahio",
        "lat": 7.764745728473499,
        "lng": -5.03,
        "country": "Ivory Coast"
    },
    {
        "rank": 2406,
        "name": "Al-Shahania S.C.",
        "lat": 25.286868593663502,
        "lng": 51.53826913996911,
        "country": "Qatar"
    },
    {
        "rank": 2407,
        "name": "Gahar Zagros",
        "lat": 33.25,
        "lng": 49.7,
        "country": "Iran"
    },
    {
        "rank": 2408,
        "name": "Armed Forces",
        "lat": 1.3700864321183748,
        "lng": 103.8198,
        "country": "Singapore"
    },
    {
        "rank": 2409,
        "name": "Tiburones Rojos de Veracruz",
        "lat": 19.1738,
        "lng": -96.1342,
        "country": "Mexico"
    },
    {
        "rank": 2410,
        "name": "NK Krsko",
        "lat": 45.9583,
        "lng": 15.4917,
        "country": "Slovenia"
    },
    {
        "rank": 2411,
        "name": "FK Atlantas",
        "lat": 54.71962128806946,
        "lng": 25.283708287953548,
        "country": "Lithuania"
    },
    {
        "rank": 2412,
        "name": "Deltras Sidoarjo",
        "lat": -7.45,
        "lng": 112.7167,
        "country": "Indonesia"
    },
    {
        "rank": 2413,
        "name": "Naft Masjed Soleyman FC",
        "lat": 31.9333,
        "lng": 49.3,
        "country": "Iran"
    },
    {
        "rank": 2414,
        "name": "Wexford Youths",
        "lat": 52.3369,
        "lng": -6.4633,
        "country": "Ireland"
    },
    {
        "rank": 2415,
        "name": "Maverly Hughenden FC",
        "lat": 18.05387286423676,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2416,
        "name": "Dunbeholden FC",
        "lat": 17.9667,
        "lng": -76.7667,
        "country": "Jamaica"
    },
    {
        "rank": 2417,
        "name": "Luanda City FC",
        "lat": -8.804340703644878,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2418,
        "name": "Atletico Lusaka FC",
        "lat": -15.261594975171386,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2419,
        "name": "Racing de Casablanca",
        "lat": 33.5731,
        "lng": -7.5898,
        "country": "Morocco"
    },
    {
        "rank": 2420,
        "name": "El Dakhleya",
        "lat": 31.05438643211837,
        "lng": 31.380100000000002,
        "country": "Egypt"
    },
    {
        "rank": 2421,
        "name": "ASM Oran",
        "lat": 35.71488643211838,
        "lng": -0.6331,
        "country": "Algeria"
    },
    {
        "rank": 2422,
        "name": "Tafea FC",
        "lat": -17.679518447085382,
        "lng": 168.3355827855571,
        "country": "Vanuatu"
    },
    {
        "rank": 2423,
        "name": "FK TransINVEST",
        "lat": 54.73760772018784,
        "lng": 25.283708287953548,
        "country": "Lithuania"
    },
    {
        "rank": 2424,
        "name": "Rewa",
        "lat": -18.159586432118378,
        "lng": 178.4419,
        "country": "Fiji"
    },
    {
        "rank": 2425,
        "name": "Hilal El-Fasher",
        "lat": 13.610113567881626,
        "lng": 25.35,
        "country": "Sudan"
    },
    {
        "rank": 2426,
        "name": "FK Zlatibor Čajetina",
        "lat": 43.75,
        "lng": 19.7167,
        "country": "Serbia"
    },
    {
        "rank": 2427,
        "name": "Mansheyat Bani Hasan",
        "lat": 32.3333,
        "lng": 35.7167,
        "country": "Jordan"
    },
    {
        "rank": 2428,
        "name": "PSMS",
        "lat": 3.5952,
        "lng": 98.6722,
        "country": "Indonesia"
    },
    {
        "rank": 2429,
        "name": "Misr El Makasa",
        "lat": 29.3084,
        "lng": 30.8428,
        "country": "Egypt"
    },
    {
        "rank": 2430,
        "name": "Socozaki",
        "lat": 55.83066452169647,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2431,
        "name": "Cibao",
        "lat": 55.84865095381485,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2432,
        "name": "Mash'al Muborak",
        "lat": 39.65,
        "lng": 66.9667,
        "country": "Uzbekistan"
    },
    {
        "rank": 2433,
        "name": "Aswan FC",
        "lat": 24.0889,
        "lng": 32.8998,
        "country": "Egypt"
    },
    {
        "rank": 2434,
        "name": "Sportive de Djerba",
        "lat": 33.8076,
        "lng": 10.8451,
        "country": "Tunisia"
    },
    {
        "rank": 2435,
        "name": "Al Ittihad Kalba",
        "lat": 25.0684,
        "lng": 56.3569,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2436,
        "name": "AC Rangers",
        "lat": 55.866637385933224,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2437,
        "name": "Meshki Pooshan Football Club",
        "lat": 36.2605,
        "lng": 59.6168,
        "country": "Iran"
    },
    {
        "rank": 2438,
        "name": "Cibalia",
        "lat": 45.4953,
        "lng": 18.6881,
        "country": "Croatia"
    },
    {
        "rank": 2439,
        "name": "Bofoakwa Tano",
        "lat": 7.35,
        "lng": -2.7667,
        "country": "Ghana"
    },
    {
        "rank": 2440,
        "name": "AFC Eskilstuna",
        "lat": 59.3667,
        "lng": 16.5167,
        "country": "Sweden"
    },
    {
        "rank": 2441,
        "name": "Al Ahly Merowe",
        "lat": 18.4667,
        "lng": 31.8167,
        "country": "Sudan"
    },
    {
        "rank": 2442,
        "name": "Hardbody",
        "lat": -17.67709666133054,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2443,
        "name": "Lys Sassandra",
        "lat": 4.95,
        "lng": -6.0833,
        "country": "Ivory Coast"
    },
    {
        "rank": 2444,
        "name": "Bukavu Dawa",
        "lat": -2.5083,
        "lng": 28.8608,
        "country": "Congo DR"
    },
    {
        "rank": 2445,
        "name": "Rayo Zuliano",
        "lat": 10.649586432118376,
        "lng": -71.6444,
        "country": "Venezuela"
    },
    {
        "rank": 2446,
        "name": "Lyn",
        "lat": 59.94987286423677,
        "lng": 10.7522,
        "country": "Norway"
    },
    {
        "rank": 2447,
        "name": "Bellinzona",
        "lat": 46.1951,
        "lng": 9.0224,
        "country": "Switzerland"
    },
    {
        "rank": 2448,
        "name": "Sektzia Ness Ziona FC",
        "lat": 31.9333,
        "lng": 34.7917,
        "country": "Israel"
    },
    {
        "rank": 2449,
        "name": "Deportivo Zacapa",
        "lat": 15.3333,
        "lng": -89.5333,
        "country": "Guatemala"
    },
    {
        "rank": 2450,
        "name": "Bray Wanderers",
        "lat": 53.2028,
        "lng": -6.1111,
        "country": "Ireland"
    },
    {
        "rank": 2451,
        "name": "Beijing Renhe",
        "lat": 39.9042,
        "lng": 116.4074,
        "country": "China PR"
    },
    {
        "rank": 2452,
        "name": "Northeast United FC",
        "lat": 26.1158,
        "lng": 91.7086,
        "country": "India"
    },
    {
        "rank": 2453,
        "name": "Perseru Badak Lampung",
        "lat": -5.45,
        "lng": 105.2667,
        "country": "Indonesia"
    },
    {
        "rank": 2454,
        "name": "Ghazl El Mehalla",
        "lat": 30.99558643211838,
        "lng": 31.166900000000002,
        "country": "Egypt"
    },
    {
        "rank": 2455,
        "name": "KF Besa Dobërdoll",
        "lat": 42.06578908097638,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2456,
        "name": "CD Real de Minas",
        "lat": 14.25216432118376,
        "lng": -87.1921,
        "country": "Honduras"
    },
    {
        "rank": 2457,
        "name": "Sudeva Delhi FC",
        "lat": 28.7041,
        "lng": 77.1025,
        "country": "India"
    },
    {
        "rank": 2458,
        "name": "Saurimo FC",
        "lat": -9.6667,
        "lng": 20.3833,
        "country": "Angola"
    },
    {
        "rank": 2459,
        "name": "Chiangmai FC",
        "lat": 18.7883,
        "lng": 98.9853,
        "country": "Thailand"
    },
    {
        "rank": 2460,
        "name": "Bulawayo City FC",
        "lat": -20.1731287317982,
        "lng": 28.58276786672831,
        "country": "Zimbabwe"
    },
    {
        "rank": 2461,
        "name": "Roumde Adjia",
        "lat": 9.3014,
        "lng": 13.4014,
        "country": "Cameroon"
    },
    {
        "rank": 2462,
        "name": "Villa Espanola",
        "lat": -34.8581,
        "lng": -56.1708,
        "country": "Uruguay"
    },
    {
        "rank": 2463,
        "name": "Prestatyn Town FC",
        "lat": 53.3333,
        "lng": -3.4167,
        "country": "Wales"
    },
    {
        "rank": 2464,
        "name": "FC Hebar 1918",
        "lat": 41.95128643211837,
        "lng": 25.5667,
        "country": "Bulgaria"
    },
    {
        "rank": 2465,
        "name": "Mohammedan SC",
        "lat": 22.64454572847351,
        "lng": 88.3639,
        "country": "India"
    },
    {
        "rank": 2466,
        "name": "Malampa Revivors FC",
        "lat": -16.1667,
        "lng": 167.45,
        "country": "Vanuatu"
    },
    {
        "rank": 2467,
        "name": "Jocoro FC",
        "lat": 13.7,
        "lng": -88.0333,
        "country": "El Salvador"
    },
    {
        "rank": 2468,
        "name": "Kenkre FC",
        "lat": 19.165932160591876,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 2469,
        "name": "Étoiles du Mandé",
        "lat": 12.962955778130757,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2470,
        "name": "AC Horsens",
        "lat": 55.8606,
        "lng": 9.85,
        "country": "Denmark"
    },
    {
        "rank": 2471,
        "name": "Nikao Sokattak",
        "lat": -21.2069,
        "lng": -159.7777,
        "country": "Cook Islands"
    },
    {
        "rank": 2472,
        "name": "Deportivo Las Sabanas",
        "lat": 12.119042224343882,
        "lng": -86.24657865363895,
        "country": "Nicaragua"
    },
    {
        "rank": 2473,
        "name": "Dongo",
        "lat": -17.659110229212168,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2474,
        "name": "Kfarsoum",
        "lat": 33.4333,
        "lng": 35.8,
        "country": "Jordan"
    },
    {
        "rank": 2475,
        "name": "Inter de Barinas",
        "lat": 8.6226,
        "lng": -70.2054,
        "country": "Venezuela"
    },
    {
        "rank": 2476,
        "name": "Hamilton Academical",
        "lat": 55.7831,
        "lng": -4.0522,
        "country": "Scotland"
    },
    {
        "rank": 2477,
        "name": "KF Gostivari",
        "lat": 41.7958,
        "lng": 20.9108,
        "country": "Macedonia"
    },
    {
        "rank": 2478,
        "name": "Hapoel Petah Tikva FC",
        "lat": 32.10938643211838,
        "lng": 34.8878,
        "country": "Israel"
    },
    {
        "rank": 2479,
        "name": "Qingdao Hainiu",
        "lat": 36.100236992656356,
        "lng": 120.37060353336756,
        "country": "China PR"
    },
    {
        "rank": 2480,
        "name": "AS Avenir de Tombouctou",
        "lat": 16.7666,
        "lng": -3.0026,
        "country": "Mali"
    },
    {
        "rank": 2481,
        "name": "CO Bouafle",
        "lat": 6.9833,
        "lng": -5.75,
        "country": "Ivory Coast"
    },
    {
        "rank": 2482,
        "name": "Al Shorta Al Qadarif",
        "lat": 14.0333,
        "lng": 35.3833,
        "country": "Sudan"
    },
    {
        "rank": 2483,
        "name": "Eastern Sports Club",
        "lat": 22.278014303863294,
        "lng": 114.17537443804486,
        "country": "Hong Kong"
    },
    {
        "rank": 2484,
        "name": "Ferroviário Do Huambo",
        "lat": -12.7756,
        "lng": 15.7339,
        "country": "Angola"
    },
    {
        "rank": 2485,
        "name": "Malekesa",
        "lat": -3.9562663328038887,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2486,
        "name": "Speranţa Crihana",
        "lat": 47.06445929635513,
        "lng": 28.863799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2487,
        "name": "Saint-Luc",
        "lat": -3.9382799006855147,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2488,
        "name": "Babeti ya Sika",
        "lat": -3.9202934685671402,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2489,
        "name": "Indígenas de Matagalpa",
        "lat": 12.9254,
        "lng": -85.9175,
        "country": "Nicaragua"
    },
    {
        "rank": 2490,
        "name": "HIFK",
        "lat": 60.15871164412711,
        "lng": 24.9466395310379,
        "country": "Finland"
    },
    {
        "rank": 2491,
        "name": "C.D. Fuerte San Francisco",
        "lat": 13.926723617538885,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2492,
        "name": "Jyvaskyla JK",
        "lat": 62.2426,
        "lng": 25.7473,
        "country": "Finland"
    },
    {
        "rank": 2493,
        "name": "Kafue Celtic",
        "lat": -15.7833,
        "lng": 28.1833,
        "country": "Zambia"
    },
    {
        "rank": 2494,
        "name": "Yopougon FC",
        "lat": 5.35,
        "lng": -4.0833,
        "country": "Ivory Coast"
    },
    {
        "rank": 2495,
        "name": "FC Helsingør",
        "lat": 56.0367,
        "lng": 12.6139,
        "country": "Denmark"
    },
    {
        "rank": 2496,
        "name": "Vipers SC",
        "lat": 0.3835728642367492,
        "lng": 32.5825,
        "country": "Uganda"
    },
    {
        "rank": 2497,
        "name": "Qizilqum Zarafshon",
        "lat": 40.1167,
        "lng": 65.3667,
        "country": "Uzbekistan"
    },
    {
        "rank": 2498,
        "name": "ND Triglav",
        "lat": 46.3644,
        "lng": 14.1678,
        "country": "Slovenia"
    },
    {
        "rank": 2499,
        "name": "Khorfakkan Club",
        "lat": 25.35,
        "lng": 56.3417,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2500,
        "name": "Hiré",
        "lat": 6.3833,
        "lng": -5.9167,
        "country": "Ivory Coast"
    },
    {
        "rank": 2501,
        "name": "Jwaneng Galaxy FC",
        "lat": -24.7,
        "lng": 24.7167,
        "country": "Botswana"
    },
    {
        "rank": 2502,
        "name": "Valencia de Leogane",
        "lat": 18.5167,
        "lng": -72.6333,
        "country": "Haiti"
    },
    {
        "rank": 2503,
        "name": "FC Edmonton",
        "lat": 53.5461,
        "lng": -113.4938,
        "country": "Canada"
    },
    {
        "rank": 2504,
        "name": "Olimpik Sarajevo",
        "lat": 43.8476,
        "lng": 18.3564,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2505,
        "name": "Solomon Warriors FC",
        "lat": -9.392026769818548,
        "lng": 159.96823271547657,
        "country": "Solomon Islands"
    },
    {
        "rank": 2506,
        "name": "Hapoel Ramat Gan",
        "lat": 32.0706,
        "lng": 34.8214,
        "country": "Israel"
    },
    {
        "rank": 2507,
        "name": "North Eastern Re Organising Cultural Association",
        "lat": 25.632759296355133,
        "lng": 91.8933,
        "country": "India"
    },
    {
        "rank": 2508,
        "name": "Gloria Bistrita",
        "lat": 47.1333,
        "lng": 24.5,
        "country": "Romania"
    },
    {
        "rank": 2509,
        "name": "Al Ahli Wad Medani",
        "lat": 14.4,
        "lng": 33.5167,
        "country": "Sudan"
    },
    {
        "rank": 2510,
        "name": "Kapfenberger SV",
        "lat": 47.4444,
        "lng": 15.2978,
        "country": "Austria"
    },
    {
        "rank": 2511,
        "name": "TTM Chiangmai",
        "lat": 18.80628643211837,
        "lng": 98.9853,
        "country": "Thailand"
    },
    {
        "rank": 2512,
        "name": "Merikh Kosti",
        "lat": 13.1667,
        "lng": 32.6667,
        "country": "Sudan"
    },
    {
        "rank": 2513,
        "name": "Montedio Yamagata",
        "lat": 38.2404,
        "lng": 140.3636,
        "country": "Japan"
    },
    {
        "rank": 2514,
        "name": "Lusaka Dynamos",
        "lat": -15.243608543053012,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2515,
        "name": "Hapoel Ra'anana",
        "lat": 32.1844,
        "lng": 34.8706,
        "country": "Israel"
    },
    {
        "rank": 2516,
        "name": "Moca FC",
        "lat": 55.884623818051594,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2517,
        "name": "Academia Cantolao",
        "lat": -12.1167,
        "lng": -77.0167,
        "country": "Peru"
    },
    {
        "rank": 2518,
        "name": "Cavaly",
        "lat": 18.815859296355132,
        "lng": -72.5155,
        "country": "Haiti"
    },
    {
        "rank": 2519,
        "name": "Nsoatreman FC",
        "lat": 7.3167,
        "lng": -2.4833,
        "country": "Ghana"
    },
    {
        "rank": 2520,
        "name": "WaiBOP United",
        "lat": -37.6878,
        "lng": 176.1651,
        "country": "New Zealand"
    },
    {
        "rank": 2521,
        "name": "Guangzhou City F.C.",
        "lat": 23.1291,
        "lng": 113.2644,
        "country": "China PR"
    },
    {
        "rank": 2522,
        "name": "Hapoel Ironi Akko",
        "lat": 32.9333,
        "lng": 35.0833,
        "country": "Israel"
    },
    {
        "rank": 2523,
        "name": "Lovćen",
        "lat": 42.2728,
        "lng": 18.8311,
        "country": "Montenegro"
    },
    {
        "rank": 2524,
        "name": "Puaikura",
        "lat": -21.188913567881627,
        "lng": -159.77770000000004,
        "country": "Cook Islands"
    },
    {
        "rank": 2525,
        "name": "Union Sportive du Cercle de Kita",
        "lat": 13.0333,
        "lng": -9.4833,
        "country": "Mali"
    },
    {
        "rank": 2526,
        "name": "Ndjadi",
        "lat": -3.9023070364487653,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2527,
        "name": "FC Pune City",
        "lat": 18.538386432118376,
        "lng": 73.8567,
        "country": "India"
    },
    {
        "rank": 2528,
        "name": "Matiti Mabe",
        "lat": -3.884320604330391,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2529,
        "name": "CS Makiso",
        "lat": -3.866334172212017,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2530,
        "name": "Nkoy",
        "lat": -3.8483477400936428,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2531,
        "name": "Maccabi Ahi Nazareth",
        "lat": 32.69032090753555,
        "lng": 35.31158809261867,
        "country": "Israel"
    },
    {
        "rank": 2532,
        "name": "Trelleborgs FF",
        "lat": 55.3756,
        "lng": 13.1506,
        "country": "Sweden"
    },
    {
        "rank": 2533,
        "name": "Zumunta",
        "lat": 13.633318034597082,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2534,
        "name": "Harju Jalgpallikool",
        "lat": 59.45738625010079,
        "lng": 24.72622079138525,
        "country": "Estonia"
    },
    {
        "rank": 2535,
        "name": "PK-35 Vantaa",
        "lat": 60.2939,
        "lng": 25.0378,
        "country": "Finland"
    },
    {
        "rank": 2536,
        "name": "Forge FC",
        "lat": 43.2481,
        "lng": -79.8711,
        "country": "Canada"
    },
    {
        "rank": 2537,
        "name": "Dauphins Noirs",
        "lat": -3.8303613079752683,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2538,
        "name": "FK Senica",
        "lat": 48.6794,
        "lng": 17.3569,
        "country": "Slovakia"
    },
    {
        "rank": 2539,
        "name": "Chirag Kerala",
        "lat": 10.868486432118374,
        "lng": 76.2711,
        "country": "India"
    },
    {
        "rank": 2540,
        "name": "Kalteng Putra",
        "lat": -2.193813567881626,
        "lng": 113.9214,
        "country": "Indonesia"
    },
    {
        "rank": 2541,
        "name": "Bantu Rovers",
        "lat": -20.15514229967983,
        "lng": 28.58276786672831,
        "country": "Zimbabwe"
    },
    {
        "rank": 2542,
        "name": "Start",
        "lat": 58.177686432118385,
        "lng": 8.0182,
        "country": "Norway"
    },
    {
        "rank": 2543,
        "name": "Liaoning Hongyun",
        "lat": 41.8057,
        "lng": 123.4315,
        "country": "China PR"
    },
    {
        "rank": 2544,
        "name": "Al-Shamal SC",
        "lat": 26.1275,
        "lng": 51.2039,
        "country": "Qatar"
    },
    {
        "rank": 2545,
        "name": "Tasman United",
        "lat": -41.2706,
        "lng": 173.284,
        "country": "New Zealand"
    },
    {
        "rank": 2546,
        "name": "FC Gagra",
        "lat": 40.2697,
        "lng": 40.0061,
        "country": "Georgia"
    },
    {
        "rank": 2547,
        "name": "Jeunesse Sportive de Kinshasa",
        "lat": -3.8123748758568934,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2548,
        "name": "Al Amir",
        "lat": 15.662577889065371,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2549,
        "name": "FK Borec Veles",
        "lat": 41.7153,
        "lng": 21.7753,
        "country": "Macedonia"
    },
    {
        "rank": 2550,
        "name": "Nacional de Benguela",
        "lat": -12.5763,
        "lng": 13.4055,
        "country": "Angola"
    },
    {
        "rank": 2551,
        "name": "Syrianska",
        "lat": 59.32795041459308,
        "lng": 18.043620376633225,
        "country": "Sweden"
    },
    {
        "rank": 2552,
        "name": "Khonkaen",
        "lat": 16.4322,
        "lng": 102.8236,
        "country": "Thailand"
    },
    {
        "rank": 2553,
        "name": "Humble Lions",
        "lat": 17.984686432118373,
        "lng": -76.7667,
        "country": "Jamaica"
    },
    {
        "rank": 2554,
        "name": "Thai Honda",
        "lat": 13.882205024828636,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 2555,
        "name": "Harbour View",
        "lat": 17.98333610226337,
        "lng": -76.78555697311316,
        "country": "Jamaica"
    },
    {
        "rank": 2556,
        "name": "Tripple B",
        "lat": -17.641123797093798,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2557,
        "name": "Deportiva Carmelita",
        "lat": 10.1333,
        "lng": -84.2167,
        "country": "Costa Rica"
    },
    {
        "rank": 2558,
        "name": "União de Malanje",
        "lat": -9.5333,
        "lng": 16.3333,
        "country": "Angola"
    },
    {
        "rank": 2559,
        "name": "Colón C-3",
        "lat": 9.3622,
        "lng": -79.9005,
        "country": "Panama"
    },
    {
        "rank": 2560,
        "name": "Morobe Wawens",
        "lat": -6.708913567881626,
        "lng": 146.9923,
        "country": "Papua New Guinea"
    },
    {
        "rank": 2561,
        "name": "Centro Ítalo",
        "lat": 10.179686432118375,
        "lng": -68.0077,
        "country": "Venezuela"
    },
    {
        "rank": 2562,
        "name": "Kwekwe United FC",
        "lat": -18.9167,
        "lng": 29.8167,
        "country": "Zimbabwe"
    },
    {
        "rank": 2563,
        "name": "Khon Kaen United FC",
        "lat": 16.450186432118375,
        "lng": 102.8236,
        "country": "Thailand"
    },
    {
        "rank": 2564,
        "name": "Manu Ura",
        "lat": -17.557298400883497,
        "lng": -149.55804845875798,
        "country": "Tahiti"
    },
    {
        "rank": 2565,
        "name": "Al Ahly SC Nabatieh",
        "lat": 33.3833,
        "lng": 35.4833,
        "country": "Lebanon"
    },
    {
        "rank": 2566,
        "name": "Pasaquina F.C.",
        "lat": 13.9667,
        "lng": -87.8167,
        "country": "El Salvador"
    },
    {
        "rank": 2567,
        "name": "Club Atletico Pantoja",
        "lat": 55.90261025016997,
        "lng": 12.567127640646362,
        "country": "Denmark"
    },
    {
        "rank": 2568,
        "name": "St. Johnstone",
        "lat": 56.3947,
        "lng": -3.4339,
        "country": "Scotland"
    },
    {
        "rank": 2569,
        "name": "Hrvatski Dragovoljac",
        "lat": 45.8403207083761,
        "lng": 16.000049832566436,
        "country": "Croatia"
    },
    {
        "rank": 2570,
        "name": "Slavija Sarajevo",
        "lat": 43.86558643211837,
        "lng": 18.3564,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2571,
        "name": "GD Escolinha Isaac de Benguela",
        "lat": -12.558313567881628,
        "lng": 13.4055,
        "country": "Angola"
    },
    {
        "rank": 2572,
        "name": "Tuti SC Khartoum",
        "lat": 15.680564321183748,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2573,
        "name": "Al Nasr FC",
        "lat": 30.07569126321648,
        "lng": 31.218842046337247,
        "country": "Egypt"
    },
    {
        "rank": 2574,
        "name": "Deportivo Petare",
        "lat": 10.4806,
        "lng": -66.8222,
        "country": "Venezuela"
    },
    {
        "rank": 2575,
        "name": "R.F.C. Seraing",
        "lat": 50.6069,
        "lng": 5.4939,
        "country": "Belgium"
    },
    {
        "rank": 2576,
        "name": "OFK Mladost Donja Gorica",
        "lat": 42.509086432118376,
        "lng": 19.2636,
        "country": "Montenegro"
    },
    {
        "rank": 2577,
        "name": "Trident FC",
        "lat": -15.353540703644882,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2578,
        "name": "Kalulushi Modern Stars",
        "lat": -12.8333,
        "lng": 28.1,
        "country": "Zambia"
    },
    {
        "rank": 2579,
        "name": "Pirin Gotse Delchev",
        "lat": 41.5667,
        "lng": 23.7333,
        "country": "Bulgaria"
    },
    {
        "rank": 2580,
        "name": "Al-Markhiya Sports Club",
        "lat": 25.3375,
        "lng": 51.4608,
        "country": "Qatar"
    },
    {
        "rank": 2581,
        "name": "Dinamo Samarkand",
        "lat": 39.66105504581525,
        "lng": 66.94827159111392,
        "country": "Uzbekistan"
    },
    {
        "rank": 2582,
        "name": "Rojolu",
        "lat": -3.79438844373852,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2583,
        "name": "Colwyn Bay F.C.",
        "lat": 53.2944,
        "lng": -3.7297,
        "country": "Wales"
    },
    {
        "rank": 2584,
        "name": "Nitra",
        "lat": 48.3167,
        "lng": 18.0833,
        "country": "Slovakia"
    },
    {
        "rank": 2585,
        "name": "FK Podgorica",
        "lat": 42.47707286423675,
        "lng": 19.2236,
        "country": "Montenegro"
    },
    {
        "rank": 2586,
        "name": "Tucanes FC",
        "lat": 10.19767286423675,
        "lng": -68.0077,
        "country": "Venezuela"
    },
    {
        "rank": 2587,
        "name": "JL Chiangmai United FC",
        "lat": 18.824272864236747,
        "lng": 98.9853,
        "country": "Thailand"
    },
    {
        "rank": 2588,
        "name": "Bantous",
        "lat": -3.776402011620145,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2589,
        "name": "GIF Sundsvall",
        "lat": 62.3908,
        "lng": 17.3069,
        "country": "Sweden"
    },
    {
        "rank": 2590,
        "name": "Sigui",
        "lat": 11.9167,
        "lng": -8.5667,
        "country": "Mali"
    },
    {
        "rank": 2591,
        "name": "Persitara Jakarta",
        "lat": -6.136854271526503,
        "lng": 106.8456,
        "country": "Indonesia"
    },
    {
        "rank": 2592,
        "name": "Al Ansar FC (Medina)",
        "lat": 24.5247,
        "lng": 39.5692,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2593,
        "name": "Dibba Al-Hisn SC",
        "lat": 25.6167,
        "lng": 56.2667,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2594,
        "name": "FK Pohronie",
        "lat": 48.15,
        "lng": 18.8667,
        "country": "Slovakia"
    },
    {
        "rank": 2595,
        "name": "Chiredzi FC",
        "lat": -21.05,
        "lng": 31.6667,
        "country": "Zimbabwe"
    },
    {
        "rank": 2595,
        "name": "Chiredzi FC",
        "lat": -21.032013567881627,
        "lng": 31.6667,
        "country": "Zimbabwe"
    },
    {
        "rank": 2596,
        "name": "Wuhan Yangtze River",
        "lat": 30.610786432118374,
        "lng": 114.3055,
        "country": "China PR"
    },
    {
        "rank": 2597,
        "name": "Kotoku Royals",
        "lat": 5.873496481775623,
        "lng": -0.187,
        "country": "Ghana"
    },
    {
        "rank": 2598,
        "name": "Konkola Blades",
        "lat": -12.4333,
        "lng": 27.6167,
        "country": "Zambia"
    },
    {
        "rank": 2599,
        "name": "CD Olmedo",
        "lat": -1.2581,
        "lng": -78.6267,
        "country": "Ecuador"
    },
    {
        "rank": 2600,
        "name": "Uthai Thani FC",
        "lat": 15.3792,
        "lng": 100.0236,
        "country": "Thailand"
    },
    {
        "rank": 2601,
        "name": "Siam Navy FC",
        "lat": 13.900191456947011,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 2602,
        "name": "United Sikkim F.C",
        "lat": 27.3389,
        "lng": 88.6065,
        "country": "India"
    },
    {
        "rank": 2603,
        "name": "FC Academia Chisinau",
        "lat": 47.08244572847351,
        "lng": 28.853799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2604,
        "name": "Carmona Sport Club do Uíge",
        "lat": -7.598713567881628,
        "lng": 15.050000000000002,
        "country": "Angola"
    },
    {
        "rank": 2605,
        "name": "Apollon Smyrnis",
        "lat": 37.9852539571451,
        "lng": 23.71061483866442,
        "country": "Greece"
    },
    {
        "rank": 2606,
        "name": "Finn Harps",
        "lat": 55.0081952501584,
        "lng": -7.284626210530897,
        "country": "Ireland"
    },
    {
        "rank": 2607,
        "name": "EFYM",
        "lat": 7.782732160591874,
        "lng": -5.03,
        "country": "Ivory Coast"
    },
    {
        "rank": 2608,
        "name": "Perth Glory",
        "lat": -31.9505,
        "lng": 115.8605,
        "country": "Australia"
    },
    {
        "rank": 2609,
        "name": "Porthmadog",
        "lat": 52.9239,
        "lng": -4.1289,
        "country": "Wales"
    },
    {
        "rank": 2610,
        "name": "Hoverla Uzhhorod",
        "lat": 48.6208,
        "lng": 22.2879,
        "country": "Ukraine"
    },
    {
        "rank": 2611,
        "name": "Vaivase-Tai FC",
        "lat": -13.8506,
        "lng": -171.7513,
        "country": "Samoa"
    },
    {
        "rank": 2612,
        "name": "Jomo Cosmos",
        "lat": -26.096181407289762,
        "lng": 28.0473,
        "country": "South Africa"
    },
    {
        "rank": 2613,
        "name": "Atletico Socopo",
        "lat": 10.215659296355126,
        "lng": -68.0077,
        "country": "Venezuela"
    },
    {
        "rank": 2614,
        "name": "Veraguas FC",
        "lat": 8.1167,
        "lng": -80.9833,
        "country": "Panama"
    },
    {
        "rank": 2615,
        "name": "Victoria",
        "lat": -17.623137364975424,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2616,
        "name": "Kruoja Pakruojis",
        "lat": 55.9667,
        "lng": 23.8667,
        "country": "Lithuania"
    },
    {
        "rank": 2617,
        "name": "Ohod Saudi FC",
        "lat": 26.324386432118377,
        "lng": 43.97,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2618,
        "name": "Yafoot FC Yaounde 2",
        "lat": 3.8375807997043485,
        "lng": 11.51303991346797,
        "country": "Cameroon"
    },
    {
        "rank": 2619,
        "name": "Sporting Central Academy",
        "lat": 18.071859296355136,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2620,
        "name": "Rudar Pljevlja",
        "lat": 43.3567,
        "lng": 19.3514,
        "country": "Montenegro"
    },
    {
        "rank": 2621,
        "name": "Elmina Sharks",
        "lat": 5.0833,
        "lng": -1.35,
        "country": "Ghana"
    },
    {
        "rank": 2622,
        "name": "Arenel Movers FC",
        "lat": -17.605150932857047,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2623,
        "name": "Mladost Velika",
        "lat": 44.5667,
        "lng": 18.4167,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2624,
        "name": "Douglas Warriors",
        "lat": -17.587164500738673,
        "lng": 31.02186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2625,
        "name": "AS Black Stars",
        "lat": 12.980942210249133,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2626,
        "name": "Rivoli United",
        "lat": 18.0,
        "lng": -76.8667,
        "country": "Jamaica"
    },
    {
        "rank": 2627,
        "name": "PS Kemi",
        "lat": 65.7369,
        "lng": 24.5522,
        "country": "Finland"
    },
    {
        "rank": 2628,
        "name": "Dragón",
        "lat": 13.94471004965726,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2629,
        "name": "Revan Baku",
        "lat": 40.51721859271025,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 2630,
        "name": "SD Atletico Nacional",
        "lat": 9.162264321183756,
        "lng": -79.51990000000002,
        "country": "Panama"
    },
    {
        "rank": 2631,
        "name": "Al Shabab Al Arabi Beirut",
        "lat": 34.037691456947,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2632,
        "name": "Air India",
        "lat": 19.183918592710253,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 2633,
        "name": "ASK Dragão do Uíge",
        "lat": -7.580727135763251,
        "lng": 15.050000000000002,
        "country": "Angola"
    },
    {
        "rank": 2634,
        "name": "Al-Khor",
        "lat": 25.6825,
        "lng": 51.4969,
        "country": "Qatar"
    },
    {
        "rank": 2635,
        "name": "Jangorzo",
        "lat": 13.651304466715459,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2636,
        "name": "ES Bingerville",
        "lat": 5.35,
        "lng": -3.9,
        "country": "Ivory Coast"
    },
    {
        "rank": 2637,
        "name": "Juticalpa",
        "lat": 14.6667,
        "lng": -86.2167,
        "country": "Honduras"
    },
    {
        "rank": 2638,
        "name": "PAC Omonia 29M",
        "lat": 35.18035929635512,
        "lng": 33.4299,
        "country": "Cyprus"
    },
    {
        "rank": 2639,
        "name": "CD Platense Municipal",
        "lat": 13.962696481775636,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2640,
        "name": "Urena SC",
        "lat": 7.9,
        "lng": -72.3833,
        "country": "Venezuela"
    },
    {
        "rank": 2641,
        "name": "FC Smorgon",
        "lat": 54.4833,
        "lng": 26.3833,
        "country": "Belarus"
    },
    {
        "rank": 2642,
        "name": "Office Niger Sports",
        "lat": 12.998928642367508,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2643,
        "name": "Al Mourada",
        "lat": 15.69855075330213,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2644,
        "name": "FC Kapaz",
        "lat": 40.6833,
        "lng": 46.3667,
        "country": "Azerbaijan"
    },
    {
        "rank": 2645,
        "name": "Domant FC",
        "lat": -8.786354271526504,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2646,
        "name": "Johvi FC Lokomotiv",
        "lat": 59.3592,
        "lng": 27.4114,
        "country": "Estonia"
    },
    {
        "rank": 2647,
        "name": "SK Babīte",
        "lat": 56.9667,
        "lng": 23.95,
        "country": "Latvia"
    },
    {
        "rank": 2648,
        "name": "Vutuka",
        "lat": -3.7584155795017704,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2649,
        "name": "Livingston FC",
        "lat": 55.8831,
        "lng": -3.5228,
        "country": "Scotland"
    },
    {
        "rank": 2650,
        "name": "Lime Hotspurs",
        "lat": -15.32555427152651,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2651,
        "name": "Montana",
        "lat": 43.4139,
        "lng": 23.2267,
        "country": "Bulgaria"
    },
    {
        "rank": 2652,
        "name": "Xorazm",
        "lat": 41.3833,
        "lng": 60.3667,
        "country": "Uzbekistan"
    },
    {
        "rank": 2653,
        "name": "Persela Lamongan",
        "lat": -7.1167,
        "lng": 112.4167,
        "country": "Indonesia"
    },
    {
        "rank": 2654,
        "name": "Porcelana FC",
        "lat": -8.768367839408129,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2655,
        "name": "FK Bregalnica Stip",
        "lat": 41.735,
        "lng": 22.1947,
        "country": "Macedonia"
    },
    {
        "rank": 2656,
        "name": "Debo Club",
        "lat": 13.016915074485883,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2657,
        "name": "FK Zvijezda 09",
        "lat": 44.769272864236754,
        "lng": 18.0833,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2658,
        "name": "Cranborne Bullets FC",
        "lat": -17.569178068620296,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2659,
        "name": "FB Gulbene",
        "lat": 57.1728,
        "lng": 26.7533,
        "country": "Latvia"
    },
    {
        "rank": 2660,
        "name": "Atlético El Vigía",
        "lat": 8.6167,
        "lng": -71.65,
        "country": "Venezuela"
    },
    {
        "rank": 2661,
        "name": "CAS de Sévaré",
        "lat": 14.3833,
        "lng": -4.9833,
        "country": "Mali"
    },
    {
        "rank": 2662,
        "name": "Lampang FC",
        "lat": 18.2922,
        "lng": 99.4928,
        "country": "Thailand"
    },
    {
        "rank": 2663,
        "name": "Jedinstvo BP",
        "lat": 42.79108432127472,
        "lng": 18.924896952905513,
        "country": "Montenegro"
    },
    {
        "rank": 2664,
        "name": "Police FC",
        "lat": 13.669290898833834,
        "lng": 2.1325418519276846,
        "country": "Niger"
    },
    {
        "rank": 2665,
        "name": "Konkola Mine Police",
        "lat": -12.415313567881626,
        "lng": 27.6167,
        "country": "Zambia"
    },
    {
        "rank": 2666,
        "name": "AS Eliwidj FC",
        "lat": 13.034901506604257,
        "lng": -8.0029,
        "country": "Mali"
    },
    {
        "rank": 2667,
        "name": "Al Asalah",
        "lat": 31.972355723465387,
        "lng": 35.909514862565075,
        "country": "Jordan"
    },
    {
        "rank": 2668,
        "name": "CA Bordj Bou Arreridj",
        "lat": 36.0667,
        "lng": 4.7667,
        "country": "Algeria"
    },
    {
        "rank": 2669,
        "name": "Belshina Bobruisk",
        "lat": 53.15,
        "lng": 29.2333,
        "country": "Belarus"
    },
    {
        "rank": 2670,
        "name": "FK Inđija",
        "lat": 45.05,
        "lng": 20.0833,
        "country": "Serbia"
    },
    {
        "rank": 2671,
        "name": "Songkhla United FC",
        "lat": 7.2061,
        "lng": 100.5956,
        "country": "Thailand"
    },
    {
        "rank": 2672,
        "name": "Nakambala Leopards",
        "lat": -16.0833,
        "lng": 27.7833,
        "country": "Zambia"
    },
    {
        "rank": 2673,
        "name": "AE Kouklion",
        "lat": 34.675,
        "lng": 32.9847,
        "country": "Cyprus"
    },
    {
        "rank": 2674,
        "name": "FK Voska Sport",
        "lat": 42.083775513094764,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2675,
        "name": "Vidima-Rakovski",
        "lat": 42.8167,
        "lng": 25.0167,
        "country": "Bulgaria"
    },
    {
        "rank": 2676,
        "name": "Hamilton Wanderers Afc",
        "lat": -37.787,
        "lng": 175.2793,
        "country": "New Zealand"
    },
    {
        "rank": 2677,
        "name": "US Tataouine",
        "lat": 32.9297,
        "lng": 10.4517,
        "country": "Tunisia"
    },
    {
        "rank": 2678,
        "name": "MFK Tatran Liptovský Mikuláš",
        "lat": 49.0833,
        "lng": 19.6167,
        "country": "Slovakia"
    },
    {
        "rank": 2679,
        "name": "Atlético Marte",
        "lat": 13.980682913894011,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2680,
        "name": "Karabükspor",
        "lat": 41.2061,
        "lng": 32.6204,
        "country": "Turkey"
    },
    {
        "rank": 2681,
        "name": "Dragon de Yaoundé",
        "lat": 3.855567231822724,
        "lng": 11.51303991346797,
        "country": "Cameroon"
    },
    {
        "rank": 2682,
        "name": "T&TEC",
        "lat": 10.871664321183747,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2683,
        "name": "Smederevo",
        "lat": 44.6667,
        "lng": 20.9167,
        "country": "Serbia"
    },
    {
        "rank": 2684,
        "name": "AL Tadamon Sour",
        "lat": 33.2731,
        "lng": 35.2039,
        "country": "Lebanon"
    },
    {
        "rank": 2685,
        "name": "Trat FC",
        "lat": 12.2436,
        "lng": 102.515,
        "country": "Thailand"
    },
    {
        "rank": 2686,
        "name": "Opava",
        "lat": 49.9386,
        "lng": 17.9025,
        "country": "Czech Republic"
    },
    {
        "rank": 2687,
        "name": "Madang",
        "lat": -5.2269,
        "lng": 145.7869,
        "country": "Papua New Guinea"
    },
    {
        "rank": 2688,
        "name": "Tanta",
        "lat": 30.7865,
        "lng": 31.0004,
        "country": "Egypt"
    },
    {
        "rank": 2689,
        "name": "FC Merani Tbilisi",
        "lat": 41.75107286423675,
        "lng": 44.8271,
        "country": "Georgia"
    },
    {
        "rank": 2690,
        "name": "Karvan",
        "lat": 40.535205024828635,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 2691,
        "name": "Lumwana Radiants",
        "lat": -12.1833,
        "lng": 25.8167,
        "country": "Zambia"
    },
    {
        "rank": 2692,
        "name": "Al Akhaa Al Ahli",
        "lat": 34.05567788906538,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2693,
        "name": "Machine Sazi FC",
        "lat": 38.08,
        "lng": 46.2919,
        "country": "Iran"
    },
    {
        "rank": 2694,
        "name": "Eger",
        "lat": 47.9025,
        "lng": 20.3733,
        "country": "Hungary"
    },
    {
        "rank": 2695,
        "name": "Aberystwyth",
        "lat": 52.4161,
        "lng": -4.0828,
        "country": "Wales"
    },
    {
        "rank": 2696,
        "name": "Tshinkunku",
        "lat": -3.7404291473833964,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2697,
        "name": "Alpha United",
        "lat": 6.8013,
        "lng": -58.1551,
        "country": "Guyana"
    },
    {
        "rank": 2698,
        "name": "NK Igman Konjic",
        "lat": 43.65,
        "lng": 17.9667,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2699,
        "name": "Nakhon Pathom",
        "lat": 13.8199,
        "lng": 100.0647,
        "country": "Thailand"
    },
    {
        "rank": 2700,
        "name": "Orión",
        "lat": 10.000045728473502,
        "lng": -84.09070000000001,
        "country": "Costa Rica"
    },
    {
        "rank": 2701,
        "name": "Borac Čačak",
        "lat": 43.8914,
        "lng": 20.3497,
        "country": "Serbia"
    },
    {
        "rank": 2702,
        "name": "Shanghai Shenxin",
        "lat": 31.231407921568145,
        "lng": 121.47646019585468,
        "country": "China PR"
    },
    {
        "rank": 2703,
        "name": "Quelaton",
        "lat": -17.551191636501922,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2704,
        "name": "Sport Lubango e Benfica",
        "lat": -14.9167,
        "lng": 13.4833,
        "country": "Angola"
    },
    {
        "rank": 2705,
        "name": "Art Municipal Jalapa",
        "lat": 14.6333,
        "lng": -89.9833,
        "country": "Nicaragua"
    },
    {
        "rank": 2706,
        "name": "AS Lossi",
        "lat": -22.22682713576325,
        "lng": 166.4572,
        "country": "New Caledonia"
    },
    {
        "rank": 2707,
        "name": "Bontang PKT",
        "lat": 0.1333,
        "lng": 117.5,
        "country": "Indonesia"
    },
    {
        "rank": 2708,
        "name": "Caledonia AIA",
        "lat": 10.88965075330212,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2709,
        "name": "Sporting Beirut",
        "lat": 34.07366432118375,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2710,
        "name": "PTT Rayong FC",
        "lat": 12.681,
        "lng": 101.2815,
        "country": "Thailand"
    },
    {
        "rank": 2711,
        "name": "UNAN Managua",
        "lat": 12.11702865646226,
        "lng": -86.24657865363895,
        "country": "Nicaragua"
    },
    {
        "rank": 2712,
        "name": "1º de Maio",
        "lat": -8.750381407289753,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2713,
        "name": "North Queensland Fury",
        "lat": -19.259,
        "lng": 146.8169,
        "country": "Australia"
    },
    {
        "rank": 2714,
        "name": "Tenax CS FC",
        "lat": -17.533205204383552,
        "lng": 31.05186787770171,
        "country": "Zimbabwe"
    },
    {
        "rank": 2715,
        "name": "Welshpool Town",
        "lat": 52.6597,
        "lng": -3.1453,
        "country": "Wales"
    },
    {
        "rank": 2716,
        "name": "NK Zvijezda Gradacac",
        "lat": 44.8833,
        "lng": 18.4167,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2717,
        "name": "FK Spartaks",
        "lat": 56.962097515371624,
        "lng": 24.07424799179405,
        "country": "Latvia"
    },
    {
        "rank": 2718,
        "name": "FC Telavi",
        "lat": 41.9167,
        "lng": 45.4667,
        "country": "Georgia"
    },
    {
        "rank": 2719,
        "name": "Hapoel Ashkelon",
        "lat": 31.6667,
        "lng": 34.5667,
        "country": "Israel"
    },
    {
        "rank": 2720,
        "name": "Wellington Phoenix Reserves",
        "lat": -41.26851356788162,
        "lng": 174.7762,
        "country": "New Zealand"
    },
    {
        "rank": 2721,
        "name": "FC Dnyapro Mogilev",
        "lat": 53.9167,
        "lng": 30.3333,
        "country": "Belarus"
    },
    {
        "rank": 2722,
        "name": "Wanderers SC",
        "lat": -41.25052713576324,
        "lng": 174.7762,
        "country": "New Zealand"
    },
    {
        "rank": 2723,
        "name": "Adamawa United",
        "lat": 9.3265,
        "lng": 12.3984,
        "country": "Nigeria"
    },
    {
        "rank": 2724,
        "name": "Jazeerat Al Feel",
        "lat": 15.716537185420503,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2725,
        "name": "Corona Braşov",
        "lat": 45.64011160699314,
        "lng": 25.59851721728127,
        "country": "Romania"
    },
    {
        "rank": 2726,
        "name": "FC Phoenix 1976",
        "lat": 10.907637185420498,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2727,
        "name": "Anagennisi Deryneia",
        "lat": 35.0733,
        "lng": 33.9608,
        "country": "Cyprus"
    },
    {
        "rank": 2728,
        "name": "Stade Malien Sikasso",
        "lat": 11.3167,
        "lng": -5.6667,
        "country": "Mali"
    },
    {
        "rank": 2729,
        "name": "C.D. Honduras Progreso",
        "lat": 15.4,
        "lng": -87.9,
        "country": "Honduras"
    },
    {
        "rank": 2730,
        "name": "Tulevik Viljandi",
        "lat": 58.3637,
        "lng": 25.5928,
        "country": "Estonia"
    },
    {
        "rank": 2731,
        "name": "Persikabo 1973 (INA)",
        "lat": -6.5597,
        "lng": 106.7539,
        "country": "Indonesia"
    },
    {
        "rank": 2732,
        "name": "FK Guliston",
        "lat": 40.4833,
        "lng": 68.7833,
        "country": "Uzbekistan"
    },
    {
        "rank": 2733,
        "name": "Dibba Al-Fujairah Club",
        "lat": 25.5833,
        "lng": 56.3333,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2734,
        "name": "Mont-Dore",
        "lat": -22.208840703644878,
        "lng": 166.4572,
        "country": "New Caledonia"
    },
    {
        "rank": 2735,
        "name": "RC Kinshasa",
        "lat": -3.722442715265021,
        "lng": 15.2663,
        "country": "Congo DR"
    },
    {
        "rank": 2736,
        "name": "Tampines Rovers FC",
        "lat": 1.3880728642367495,
        "lng": 103.8198,
        "country": "Singapore"
    },
    {
        "rank": 2737,
        "name": "Al Ittihad",
        "lat": 15.734523617538876,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2738,
        "name": "Kaliakra",
        "lat": 43.4,
        "lng": 28.5833,
        "country": "Bulgaria"
    },
    {
        "rank": 2739,
        "name": "San José de Oruro",
        "lat": -17.96531356788163,
        "lng": -67.1167,
        "country": "Bolivia"
    },
    {
        "rank": 2740,
        "name": "Naftan Novopolotsk",
        "lat": 55.5333,
        "lng": 28.65,
        "country": "Belarus"
    },
    {
        "rank": 2741,
        "name": "El Nsoor",
        "lat": 15.752510049657252,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2742,
        "name": "Atlético Veragüense",
        "lat": 8.134686432118375,
        "lng": -80.9833,
        "country": "Panama"
    },
    {
        "rank": 2743,
        "name": "Shabab Al-Aqaba Club",
        "lat": 29.5317,
        "lng": 35.0061,
        "country": "Jordan"
    },
    {
        "rank": 2744,
        "name": "Džiugas Telšiai",
        "lat": 55.9811,
        "lng": 22.2475,
        "country": "Lithuania"
    },
    {
        "rank": 2745,
        "name": "CD Junior Managua",
        "lat": 12.135015088580637,
        "lng": -86.24657865363895,
        "country": "Nicaragua"
    },
    {
        "rank": 2746,
        "name": "Al-Kharitiyat",
        "lat": 25.700486432118375,
        "lng": 51.4969,
        "country": "Qatar"
    },
    {
        "rank": 2747,
        "name": "Al-Yarmouk FC",
        "lat": 32.5569,
        "lng": 36.0847,
        "country": "Jordan"
    },
    {
        "rank": 2748,
        "name": "Chambishi FC",
        "lat": -12.65,
        "lng": 28.0667,
        "country": "Zambia"
    },
    {
        "rank": 2749,
        "name": "Travnik",
        "lat": 44.2281,
        "lng": 17.6694,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2750,
        "name": "Universitario de Cobija",
        "lat": -11.0406,
        "lng": -68.7697,
        "country": "Bolivia"
    },
    {
        "rank": 2751,
        "name": "CD Sonsonate",
        "lat": 13.7167,
        "lng": -89.7167,
        "country": "El Salvador"
    },
    {
        "rank": 2752,
        "name": "Kozara Gradiška",
        "lat": 45.15,
        "lng": 17.25,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2753,
        "name": "Santa Rita de Cássia FC",
        "lat": -8.73239497517138,
        "lng": 13.2344,
        "country": "Angola"
    },
    {
        "rank": 2754,
        "name": "Coatepeque",
        "lat": 14.7,
        "lng": -92.0,
        "country": "Guatemala"
    },
    {
        "rank": 2755,
        "name": "Destroyers",
        "lat": -16.37409497517139,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 2756,
        "name": "CF Ungheni",
        "lat": 47.2167,
        "lng": 27.8,
        "country": "Moldova"
    },
    {
        "rank": 2757,
        "name": "Lootus",
        "lat": 59.47537268221915,
        "lng": 24.72622079138525,
        "country": "Estonia"
    },
    {
        "rank": 2758,
        "name": "FK Utenis Utena",
        "lat": 55.4969,
        "lng": 25.5994,
        "country": "Lithuania"
    },
    {
        "rank": 2759,
        "name": "Real Tamale",
        "lat": 9.43677286423675,
        "lng": -0.8393000000000002,
        "country": "Ghana"
    },
    {
        "rank": 2760,
        "name": "Rancho Santana FC",
        "lat": 12.173001520699012,
        "lng": -86.24657865363895,
        "country": "Nicaragua"
    },
    {
        "rank": 2761,
        "name": "CSF Spartanii Selemet",
        "lat": 47.100432160591886,
        "lng": 28.843799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2762,
        "name": "FC Stumbras",
        "lat": 55.1561,
        "lng": 23.8811,
        "country": "Lithuania"
    },
    {
        "rank": 2763,
        "name": "Rudar Prijedor",
        "lat": 44.9833,
        "lng": 16.7167,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2764,
        "name": "Real Sociedad",
        "lat": 15.2,
        "lng": -88.0333,
        "country": "Honduras"
    },
    {
        "rank": 2765,
        "name": "Tonnerre Kalara Club",
        "lat": 4.177005024828623,
        "lng": 9.7679,
        "country": "Cameroon"
    },
    {
        "rank": 2766,
        "name": "MOIK",
        "lat": 40.55319145694701,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 2767,
        "name": "Gagauziya",
        "lat": 46.3167,
        "lng": 28.6667,
        "country": "Moldova"
    },
    {
        "rank": 2768,
        "name": "HB Chelghoum Laïd",
        "lat": 36.15,
        "lng": 6.1667,
        "country": "Algeria"
    },
    {
        "rank": 2769,
        "name": "CSyD Nueva Concepción",
        "lat": 14.2,
        "lng": -91.9167,
        "country": "Guatemala"
    },
    {
        "rank": 2770,
        "name": "Austria Kärnten",
        "lat": 46.61186055346147,
        "lng": 14.289973002108947,
        "country": "Austria"
    },
    {
        "rank": 2771,
        "name": "Faulkland FC",
        "lat": 18.08984572847351,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2772,
        "name": "Hyderabad FC",
        "lat": 17.40298643211838,
        "lng": 78.4867,
        "country": "India"
    },
    {
        "rank": 2773,
        "name": "Alacranes del Norte",
        "lat": 13.998669346012385,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2774,
        "name": "Sisaket FC",
        "lat": 15.1151,
        "lng": 104.3167,
        "country": "Thailand"
    },
    {
        "rank": 2775,
        "name": "Black Leopards",
        "lat": -23.0,
        "lng": 30.0,
        "country": "South Africa"
    },
    {
        "rank": 2776,
        "name": "FC Carlos Stein",
        "lat": -6.7781092017624465,
        "lng": -79.84730244540312,
        "country": "Peru"
    },
    {
        "rank": 2777,
        "name": "Səbail FK",
        "lat": 40.57117788906539,
        "lng": 49.86710000000001,
        "country": "Azerbaijan"
    },
    {
        "rank": 2778,
        "name": "Raja Beni Mellal",
        "lat": 32.3394,
        "lng": -6.3498,
        "country": "Morocco"
    },
    {
        "rank": 2779,
        "name": "FC Saxan",
        "lat": 47.11841859271027,
        "lng": 28.863799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2780,
        "name": "CD Petapa",
        "lat": 14.5,
        "lng": -90.55,
        "country": "Guatemala"
    },
    {
        "rank": 2781,
        "name": "Al Islah Bourg Shamaly",
        "lat": 34.09165075330212,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2782,
        "name": "Croatia Sesvete",
        "lat": 45.8333,
        "lng": 16.1167,
        "country": "Croatia"
    },
    {
        "rank": 2783,
        "name": "Juventus Bucureşti",
        "lat": 44.46075929635513,
        "lng": 26.1025,
        "country": "Romania"
    },
    {
        "rank": 2784,
        "name": "Trujillanos FC",
        "lat": 9.3667,
        "lng": -70.4333,
        "country": "Venezuela"
    },
    {
        "rank": 2785,
        "name": "Sandals South Coast",
        "lat": 18.107832160591887,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2786,
        "name": "Al-Mergheni",
        "lat": 15.770496481775625,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2787,
        "name": "Llaneros de Guanare",
        "lat": 8.75,
        "lng": -69.7333,
        "country": "Venezuela"
    },
    {
        "rank": 2788,
        "name": "Nadi",
        "lat": -17.8042,
        "lng": 177.4436,
        "country": "Fiji"
    },
    {
        "rank": 2789,
        "name": "Caroní",
        "lat": 8.3731,
        "lng": -62.7156,
        "country": "Venezuela"
    },
    {
        "rank": 2790,
        "name": "Kitwe United",
        "lat": -12.8028,
        "lng": 28.2139,
        "country": "Zambia"
    },
    {
        "rank": 2791,
        "name": "Andijon",
        "lat": 40.7821,
        "lng": 72.3442,
        "country": "Uzbekistan"
    },
    {
        "rank": 2792,
        "name": "Ittihad Al-Ramtha",
        "lat": 32.5569,
        "lng": 36.0097,
        "country": "Jordan"
    },
    {
        "rank": 2793,
        "name": "Svetkavitsa",
        "lat": 42.6833,
        "lng": 25.3333,
        "country": "Bulgaria"
    },
    {
        "rank": 2794,
        "name": "Esteghlal Ahvaz",
        "lat": 31.35427286423674,
        "lng": 48.6706,
        "country": "Iran"
    },
    {
        "rank": 2795,
        "name": "FC Ma'an",
        "lat": 30.1961,
        "lng": 35.7347,
        "country": "Jordan"
    },
    {
        "rank": 2796,
        "name": "United City F.C.",
        "lat": -12.02915468334462,
        "lng": -77.04626707635701,
        "country": "Peru"
    },
    {
        "rank": 2797,
        "name": "Atar Club",
        "lat": 20.5208,
        "lng": -13.0519,
        "country": "Mali"
    },
    {
        "rank": 2798,
        "name": "Unión Comercio",
        "lat": -6.4889,
        "lng": -76.3622,
        "country": "Peru"
    },
    {
        "rank": 2799,
        "name": "Yaracuyanos FC",
        "lat": 10.3167,
        "lng": -68.7333,
        "country": "Venezuela"
    },
    {
        "rank": 2800,
        "name": "FC Sioni Bolnisi",
        "lat": 41.4486,
        "lng": 44.5336,
        "country": "Georgia"
    },
    {
        "rank": 2801,
        "name": "FC Nõmme United",
        "lat": 59.3939,
        "lng": 24.6586,
        "country": "Estonia"
    },
    {
        "rank": 2802,
        "name": "Falkenbergs FF",
        "lat": 56.9056,
        "lng": 12.4914,
        "country": "Sweden"
    },
    {
        "rank": 2803,
        "name": "Samut Songkram",
        "lat": 13.4147,
        "lng": 100.0028,
        "country": "Thailand"
    },
    {
        "rank": 2804,
        "name": "Al Shimali",
        "lat": 19.95,
        "lng": 32.9,
        "country": "Sudan"
    },
    {
        "rank": 2805,
        "name": "Real Potosí",
        "lat": -19.590064880709715,
        "lng": -65.75201286325522,
        "country": "Bolivia"
    },
    {
        "rank": 2806,
        "name": "TOT",
        "lat": 13.918177889065388,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 2807,
        "name": "Aalesund",
        "lat": 62.4722,
        "lng": 6.1494,
        "country": "Norway"
    },
    {
        "rank": 2808,
        "name": "Al-Nil",
        "lat": 15.788482913893999,
        "lng": 32.5599,
        "country": "Sudan"
    },
    {
        "rank": 2809,
        "name": "Chivas USA",
        "lat": 34.0522,
        "lng": -118.2437,
        "country": "United States"
    },
    {
        "rank": 2810,
        "name": "FK Skopje",
        "lat": 42.101761945213134,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2811,
        "name": "Estudiantes de Caracas",
        "lat": 10.570532160591883,
        "lng": -66.9036,
        "country": "Venezuela"
    },
    {
        "rank": 2812,
        "name": "RANS Nusantara F.C.",
        "lat": -6.881527135763252,
        "lng": 107.6191,
        "country": "Indonesia"
    },
    {
        "rank": 2813,
        "name": "Airbus UK Broughton FC",
        "lat": 53.1333,
        "lng": -2.9833,
        "country": "Wales"
    },
    {
        "rank": 2814,
        "name": "WhaWha",
        "lat": -18.9667,
        "lng": 32.85,
        "country": "Zimbabwe"
    },
    {
        "rank": 2815,
        "name": "Ballymena United",
        "lat": 54.8639,
        "lng": -6.2744,
        "country": "Northern Ireland"
    },
    {
        "rank": 2816,
        "name": "FC Lviv",
        "lat": 49.88655929635513,
        "lng": 24.029700000000002,
        "country": "Ukraine"
    },
    {
        "rank": 2817,
        "name": "Sapovnela",
        "lat": 42.2581,
        "lng": 42.7153,
        "country": "Georgia"
    },
    {
        "rank": 2818,
        "name": "Al-Dhafra",
        "lat": 24.2042,
        "lng": 54.6975,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2819,
        "name": "UES",
        "lat": 14.016655778130758,
        "lng": -89.2182,
        "country": "El Salvador"
    },
    {
        "rank": 2820,
        "name": "Fk Metalurg Skopje",
        "lat": 42.11974837733151,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2821,
        "name": "FC Rustavi",
        "lat": 41.5492,
        "lng": 44.9844,
        "country": "Georgia"
    },
    {
        "rank": 2822,
        "name": "Universidad San Martín de Porres",
        "lat": -12.011168251226247,
        "lng": -77.04626707635701,
        "country": "Peru"
    },
    {
        "rank": 2823,
        "name": "Shortan Guzor",
        "lat": 38.8333,
        "lng": 65.7833,
        "country": "Uzbekistan"
    },
    {
        "rank": 2824,
        "name": "Real Mamoré",
        "lat": -14.8333,
        "lng": -64.9,
        "country": "Bolivia"
    },
    {
        "rank": 2825,
        "name": "Lokomotivi Tbilisi",
        "lat": 41.76905929635513,
        "lng": 44.8271,
        "country": "Georgia"
    },
    {
        "rank": 2826,
        "name": "Lyubimets",
        "lat": 41.8333,
        "lng": 26.0,
        "country": "Bulgaria"
    },
    {
        "rank": 2827,
        "name": "Barbican FC",
        "lat": 18.125818592710264,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2828,
        "name": "Al-Jalil",
        "lat": 32.5569,
        "lng": 35.2917,
        "country": "Jordan"
    },
    {
        "rank": 2829,
        "name": "Pelister",
        "lat": 41.0369,
        "lng": 21.0119,
        "country": "Macedonia"
    },
    {
        "rank": 2830,
        "name": "Masachapa F.C.",
        "lat": 11.9667,
        "lng": -86.5333,
        "country": "Nicaragua"
    },
    {
        "rank": 2831,
        "name": "Treasure Beach",
        "lat": 18.14380502482864,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2832,
        "name": "FK Turon Yaypan",
        "lat": 40.116698470815706,
        "lng": 67.81818013465275,
        "country": "Uzbekistan"
    },
    {
        "rank": 2833,
        "name": "Fuerza Amarilla SC",
        "lat": -3.2489135678816257,
        "lng": -79.9553,
        "country": "Ecuador"
    },
    {
        "rank": 2834,
        "name": "Lamia",
        "lat": 38.9,
        "lng": 22.4333,
        "country": "Greece"
    },
    {
        "rank": 2835,
        "name": "Pápa",
        "lat": 47.3333,
        "lng": 17.4667,
        "country": "Hungary"
    },
    {
        "rank": 2836,
        "name": "US Souf",
        "lat": 33.4931,
        "lng": 6.8731,
        "country": "Algeria"
    },
    {
        "rank": 2837,
        "name": "Tripoli AC",
        "lat": 34.4364,
        "lng": 35.8489,
        "country": "Lebanon"
    },
    {
        "rank": 2838,
        "name": "Brong Ahafo Stars",
        "lat": 7.7167,
        "lng": -2.3167,
        "country": "Ghana"
    },
    {
        "rank": 2839,
        "name": "Academia Quintana",
        "lat": 18.4655,
        "lng": -66.7208,
        "country": "Puerto Rico"
    },
    {
        "rank": 2840,
        "name": "Carolina Gigantes",
        "lat": 18.3833,
        "lng": -65.6667,
        "country": "Puerto Rico"
    },
    {
        "rank": 2841,
        "name": "ACS FC Academica Clinceni",
        "lat": 44.3667,
        "lng": 26.1167,
        "country": "Romania"
    },
    {
        "rank": 2842,
        "name": "Pärnu JK Vaprus",
        "lat": 58.3859,
        "lng": 24.5033,
        "country": "Estonia"
    },
    {
        "rank": 2843,
        "name": "Smolevichy",
        "lat": 54.0167,
        "lng": 28.0833,
        "country": "Belarus"
    },
    {
        "rank": 2844,
        "name": "Banga Gargzdai",
        "lat": 55.7167,
        "lng": 21.3833,
        "country": "Lithuania"
    },
    {
        "rank": 2845,
        "name": "Sloboda Tuzla",
        "lat": 44.530706652670524,
        "lng": 18.694870946860146,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2846,
        "name": "FK Drina Zvornik",
        "lat": 44.3833,
        "lng": 19.1,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2847,
        "name": "Chinandega FC",
        "lat": 12.6292,
        "lng": -87.1328,
        "country": "Nicaragua"
    },
    {
        "rank": 2848,
        "name": "Maardu Linnameeskond",
        "lat": 59.4667,
        "lng": 25.0167,
        "country": "Estonia"
    },
    {
        "rank": 2849,
        "name": "Guaynabo Fluminense",
        "lat": 18.3667,
        "lng": -66.1167,
        "country": "Puerto Rico"
    },
    {
        "rank": 2850,
        "name": "Al Mesaimeer",
        "lat": 25.355486432118372,
        "lng": 51.4608,
        "country": "Qatar"
    },
    {
        "rank": 2851,
        "name": "Al-Hikma",
        "lat": 34.1096371854205,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2852,
        "name": "Southern United",
        "lat": -45.8667,
        "lng": 170.5,
        "country": "New Zealand"
    },
    {
        "rank": 2853,
        "name": "Mayagüez",
        "lat": 18.2014,
        "lng": -67.1397,
        "country": "Puerto Rico"
    },
    {
        "rank": 2854,
        "name": "FK Palanga",
        "lat": 55.9167,
        "lng": 21.0667,
        "country": "Lithuania"
    },
    {
        "rank": 2855,
        "name": "Point Fortin FC",
        "lat": 10.1833,
        "lng": -61.6833,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2856,
        "name": "Zaprešić",
        "lat": 45.85,
        "lng": 15.8,
        "country": "Croatia"
    },
    {
        "rank": 2857,
        "name": "Dubai Club",
        "lat": 25.276745728473493,
        "lng": 55.27080000000001,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2858,
        "name": "Dinamo Bender",
        "lat": 46.8333,
        "lng": 29.4833,
        "country": "Moldova"
    },
    {
        "rank": 2859,
        "name": "Al Urooba Club",
        "lat": 24.37,
        "lng": 54.4306,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2860,
        "name": "FK Leotar",
        "lat": 42.8833,
        "lng": 18.4167,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2861,
        "name": "Racing Beirut",
        "lat": 34.12762361753888,
        "lng": 35.5018,
        "country": "Lebanon"
    },
    {
        "rank": 2862,
        "name": "Gradina Srebrenik",
        "lat": 44.7167,
        "lng": 18.4833,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2863,
        "name": "WA Tlemcen",
        "lat": 34.8833,
        "lng": -1.3167,
        "country": "Algeria"
    },
    {
        "rank": 2864,
        "name": "Persiraja Aceh",
        "lat": 5.5483,
        "lng": 95.3238,
        "country": "Indonesia"
    },
    {
        "rank": 2865,
        "name": "Chapelton Maroons FC",
        "lat": 18.161791456947018,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2866,
        "name": "Talinna Kalev",
        "lat": 59.49335911433753,
        "lng": 24.74622079138525,
        "country": "Estonia"
    },
    {
        "rank": 2867,
        "name": "Caersws",
        "lat": 52.5167,
        "lng": -3.4333,
        "country": "Wales"
    },
    {
        "rank": 2868,
        "name": "Sahab SC",
        "lat": 31.8667,
        "lng": 36.0,
        "country": "Jordan"
    },
    {
        "rank": 2869,
        "name": "Alki",
        "lat": 34.93028349614229,
        "lng": 33.62000286408644,
        "country": "Cyprus"
    },
    {
        "rank": 2870,
        "name": "Grobiņas Sporta Centrs",
        "lat": 56.5333,
        "lng": 21.1667,
        "country": "Latvia"
    },
    {
        "rank": 2871,
        "name": "That Ras Club",
        "lat": 32.2833,
        "lng": 36.0167,
        "country": "Jordan"
    },
    {
        "rank": 2872,
        "name": "FC Samtredia",
        "lat": 42.1661,
        "lng": 42.3339,
        "country": "Georgia"
    },
    {
        "rank": 2873,
        "name": "Vitez",
        "lat": 44.15,
        "lng": 17.7667,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2874,
        "name": "Hindustan Aero",
        "lat": 12.989586432118376,
        "lng": 77.5946,
        "country": "India"
    },
    {
        "rank": 2875,
        "name": "FK Belasica Strumica",
        "lat": 41.4369,
        "lng": 22.6439,
        "country": "Macedonia"
    },
    {
        "rank": 2876,
        "name": "Kaposvári Rákóczi",
        "lat": 46.3667,
        "lng": 17.7833,
        "country": "Hungary"
    },
    {
        "rank": 2877,
        "name": "Loughgall F.C.",
        "lat": 54.4167,
        "lng": -6.55,
        "country": "Northern Ireland"
    },
    {
        "rank": 2878,
        "name": "Muaither SC",
        "lat": 25.30351466920928,
        "lng": 51.545804896057625,
        "country": "Qatar"
    },
    {
        "rank": 2879,
        "name": "Juventus Managua",
        "lat": 12.19098795281739,
        "lng": -86.24657865363895,
        "country": "Nicaragua"
    },
    {
        "rank": 2880,
        "name": "FC Guria Lanchkhuti",
        "lat": 42.0833,
        "lng": 42.1167,
        "country": "Georgia"
    },
    {
        "rank": 2881,
        "name": "Puerto Rico United",
        "lat": 18.483486432118376,
        "lng": -66.7208,
        "country": "Puerto Rico"
    },
    {
        "rank": 2882,
        "name": "Al Rabta Kosti",
        "lat": 13.184686432118378,
        "lng": 32.6667,
        "country": "Sudan"
    },
    {
        "rank": 2883,
        "name": "Al Ahli SC Amman",
        "lat": 31.990342155583757,
        "lng": 35.909514862565075,
        "country": "Jordan"
    },
    {
        "rank": 2884,
        "name": "Kaya F.C.-Iloilo",
        "lat": -11.993181819107873,
        "lng": -77.04626707635701,
        "country": "Peru"
    },
    {
        "rank": 2885,
        "name": "Ala'ab Damanhour",
        "lat": 31.0356,
        "lng": 30.4719,
        "country": "Egypt"
    },
    {
        "rank": 2886,
        "name": "Noah Jūrmala",
        "lat": 56.9681,
        "lng": 23.7794,
        "country": "Latvia"
    },
    {
        "rank": 2887,
        "name": "Dungannon Swifts",
        "lat": 54.5028,
        "lng": -6.7711,
        "country": "Northern Ireland"
    },
    {
        "rank": 2888,
        "name": "BBCU FC",
        "lat": 13.936164321183766,
        "lng": 100.5018,
        "country": "Thailand"
    },
    {
        "rank": 2889,
        "name": "CS Mioveni",
        "lat": 44.95,
        "lng": 24.95,
        "country": "Romania"
    },
    {
        "rank": 2890,
        "name": "Mgaear Al Sarhan",
        "lat": 32.3167,
        "lng": 36.2,
        "country": "Jordan"
    },
    {
        "rank": 2891,
        "name": "Napredok",
        "lat": 42.13773480944989,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2892,
        "name": "Łódzki KS",
        "lat": 51.77718643211838,
        "lng": 19.456,
        "country": "Poland"
    },
    {
        "rank": 2893,
        "name": "Rakvere JK Tarvas",
        "lat": 59.3467,
        "lng": 26.3553,
        "country": "Estonia"
    },
    {
        "rank": 2894,
        "name": "JSM Skikda",
        "lat": 36.8667,
        "lng": 6.9,
        "country": "Algeria"
    },
    {
        "rank": 2895,
        "name": "HB Køge",
        "lat": 55.4581,
        "lng": 12.1831,
        "country": "Denmark"
    },
    {
        "rank": 2896,
        "name": "Klaipedos Granitas",
        "lat": 55.7172,
        "lng": 21.1175,
        "country": "Lithuania"
    },
    {
        "rank": 2897,
        "name": "Buxoro",
        "lat": 39.7747,
        "lng": 64.4286,
        "country": "Uzbekistan"
    },
    {
        "rank": 2898,
        "name": "Prison Service FC",
        "lat": 10.925623617538871,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2899,
        "name": "FK Teteks",
        "lat": 42.155721241568266,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2900,
        "name": "JS Kairouanaise",
        "lat": 35.6781,
        "lng": 10.0963,
        "country": "Tunisia"
    },
    {
        "rank": 2901,
        "name": "Hajer FC Al-Hasa",
        "lat": 25.434578310815112,
        "lng": 49.585480383341185,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2902,
        "name": "Sporting de Cabinda",
        "lat": -5.532013567881626,
        "lng": 12.2,
        "country": "Angola"
    },
    {
        "rank": 2903,
        "name": "Ballinamallard United",
        "lat": 54.4661,
        "lng": -7.8369,
        "country": "Northern Ireland"
    },
    {
        "rank": 2904,
        "name": "Fajardo",
        "lat": 18.3358,
        "lng": -65.6519,
        "country": "Puerto Rico"
    },
    {
        "rank": 2905,
        "name": "National Assembly",
        "lat": -15.225622110934639,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2906,
        "name": "Al-Sareeh SC",
        "lat": 31.7167,
        "lng": 35.8333,
        "country": "Jordan"
    },
    {
        "rank": 2907,
        "name": "Lime Hall Academy",
        "lat": 18.179777889065395,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2908,
        "name": "FC KTP",
        "lat": 60.8681,
        "lng": 26.7042,
        "country": "Finland"
    },
    {
        "rank": 2909,
        "name": "Reno FC",
        "lat": 18.197764321183772,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2910,
        "name": "Portadown FC",
        "lat": 54.4256,
        "lng": -6.4422,
        "country": "Northern Ireland"
    },
    {
        "rank": 2911,
        "name": "Afan Lido",
        "lat": 51.55,
        "lng": -3.6167,
        "country": "Wales"
    },
    {
        "rank": 2912,
        "name": "Zlate Moravce",
        "lat": 48.3833,
        "lng": 18.4,
        "country": "Slovakia"
    },
    {
        "rank": 2913,
        "name": "AL Hazem FC",
        "lat": 25.9333,
        "lng": 43.3,
        "country": "Saudi Arabia"
    },
    {
        "rank": 2914,
        "name": "Tatran Prešov",
        "lat": 49.0,
        "lng": 21.25,
        "country": "Slovakia"
    },
    {
        "rank": 2915,
        "name": "Ilukstes NSS",
        "lat": 55.9667,
        "lng": 23.6833,
        "country": "Latvia"
    },
    {
        "rank": 2916,
        "name": "Mladost CD",
        "lat": 42.173707673686636,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2917,
        "name": "Al Fujairah",
        "lat": 25.1281,
        "lng": 56.3267,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2918,
        "name": "Shabab AL Ghazieh SC",
        "lat": 33.5169,
        "lng": 35.3819,
        "country": "Lebanon"
    },
    {
        "rank": 2919,
        "name": "Nistru",
        "lat": 47.13640502482863,
        "lng": 28.863799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2920,
        "name": "AC LALA FC",
        "lat": 10.233645728473501,
        "lng": -68.0077,
        "country": "Venezuela"
    },
    {
        "rank": 2921,
        "name": "Lupe ole Soaga",
        "lat": -13.832613567881626,
        "lng": -171.7513,
        "country": "Samoa"
    },
    {
        "rank": 2922,
        "name": "GOŠK Gabela",
        "lat": 43.1167,
        "lng": 17.7333,
        "country": "Bosnia and Herzegovina"
    },
    {
        "rank": 2923,
        "name": "FK Sputnik Rechytsa",
        "lat": 52.3667,
        "lng": 30.3833,
        "country": "Belarus"
    },
    {
        "rank": 2924,
        "name": "WIT Georgia Tbilisi",
        "lat": 41.7870457284735,
        "lng": 44.8271,
        "country": "Georgia"
    },
    {
        "rank": 2925,
        "name": "Shabab Baalbek SC",
        "lat": 34.0067,
        "lng": 36.215,
        "country": "Lebanon"
    },
    {
        "rank": 2926,
        "name": "Vitosha Bistritsa",
        "lat": 42.55,
        "lng": 23.2833,
        "country": "Bulgaria"
    },
    {
        "rank": 2927,
        "name": "Al Egtmaaey Tripoli",
        "lat": 34.45438643211837,
        "lng": 35.8489,
        "country": "Lebanon"
    },
    {
        "rank": 2928,
        "name": "Salam Zgharta",
        "lat": 34.4,
        "lng": 35.9,
        "country": "Lebanon"
    },
    {
        "rank": 2929,
        "name": "La Paz",
        "lat": -16.35610854305301,
        "lng": -68.15,
        "country": "Bolivia"
    },
    {
        "rank": 2930,
        "name": "Kiwi",
        "lat": -13.814627135763251,
        "lng": -171.7513,
        "country": "Samoa"
    },
    {
        "rank": 2931,
        "name": "Buildcon",
        "lat": -15.317567839408137,
        "lng": 28.3228,
        "country": "Zambia"
    },
    {
        "rank": 2932,
        "name": "Paernu Linnameeskond",
        "lat": 58.40388643211839,
        "lng": 24.5033,
        "country": "Estonia"
    },
    {
        "rank": 2933,
        "name": "Cunupia FC",
        "lat": 10.6667,
        "lng": -61.4167,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2934,
        "name": "Ayia Napa",
        "lat": 35.02859314379814,
        "lng": 34.000847172483624,
        "country": "Cyprus"
    },
    {
        "rank": 2935,
        "name": "FK Tauras Taurage",
        "lat": 55.25,
        "lng": 22.2833,
        "country": "Lithuania"
    },
    {
        "rank": 2936,
        "name": "Berane",
        "lat": 42.8456,
        "lng": 19.8711,
        "country": "Montenegro"
    },
    {
        "rank": 2937,
        "name": "Institute FC",
        "lat": 55.007220127692804,
        "lng": -7.333909701957101,
        "country": "Northern Ireland"
    },
    {
        "rank": 2938,
        "name": "Ards",
        "lat": 54.65,
        "lng": -5.4833,
        "country": "Northern Ireland"
    },
    {
        "rank": 2939,
        "name": "Young Heart Manawatu",
        "lat": -40.3523,
        "lng": 175.6082,
        "country": "New Zealand"
    },
    {
        "rank": 2940,
        "name": "FK Jelgava",
        "lat": 56.65,
        "lng": 23.7167,
        "country": "Latvia"
    },
    {
        "rank": 2941,
        "name": "Sporting Clube de Benguela",
        "lat": -12.540327135763253,
        "lng": 13.4055,
        "country": "Angola"
    },
    {
        "rank": 2942,
        "name": "Ajax Lasnamäe",
        "lat": 59.5113455464559,
        "lng": 24.74622079138525,
        "country": "Estonia"
    },
    {
        "rank": 2943,
        "name": "Molynes United FC",
        "lat": 18.215750753302146,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2944,
        "name": "České Budějovice",
        "lat": 48.9745,
        "lng": 14.4743,
        "country": "Czech Republic"
    },
    {
        "rank": 2945,
        "name": "Atlético Chiriquí",
        "lat": 8.4,
        "lng": -82.4333,
        "country": "Panama"
    },
    {
        "rank": 2946,
        "name": "Merani Martvili",
        "lat": 42.4167,
        "lng": 42.3833,
        "country": "Georgia"
    },
    {
        "rank": 2947,
        "name": "FC Kolkheti-1913 Poti",
        "lat": 42.1578,
        "lng": 41.6697,
        "country": "Georgia"
    },
    {
        "rank": 2948,
        "name": "Boys' Town",
        "lat": 18.233737185420523,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2949,
        "name": "Nevėžis Kėdainiai",
        "lat": 55.2919,
        "lng": 23.9747,
        "country": "Lithuania"
    },
    {
        "rank": 2950,
        "name": "SC Chabab Mohammédia",
        "lat": 33.6833,
        "lng": -7.3833,
        "country": "Morocco"
    },
    {
        "rank": 2951,
        "name": "Arrows",
        "lat": 19.20190502482863,
        "lng": 72.8777,
        "country": "India"
    },
    {
        "rank": 2952,
        "name": "Cefn Druids AFC",
        "lat": 53.0667,
        "lng": -3.0167,
        "country": "Wales"
    },
    {
        "rank": 2953,
        "name": "Tupapa Maraerenga",
        "lat": -21.17092713576325,
        "lng": -159.77770000000004,
        "country": "Cook Islands"
    },
    {
        "rank": 2954,
        "name": "Real Madriz",
        "lat": 13.3667,
        "lng": -86.3833,
        "country": "Nicaragua"
    },
    {
        "rank": 2955,
        "name": "Vereya",
        "lat": 42.8167,
        "lng": 25.3167,
        "country": "Bulgaria"
    },
    {
        "rank": 2956,
        "name": "Al-Shaab",
        "lat": 25.294732160591867,
        "lng": 55.27080000000001,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2957,
        "name": "CD Ocotal",
        "lat": 13.6333,
        "lng": -86.4833,
        "country": "Nicaragua"
    },
    {
        "rank": 2958,
        "name": "BFC Daugavpils",
        "lat": 55.8833,
        "lng": 26.5167,
        "country": "Latvia"
    },
    {
        "rank": 2959,
        "name": "Tornados de Humacao",
        "lat": 18.15,
        "lng": -65.8167,
        "country": "Puerto Rico"
    },
    {
        "rank": 2960,
        "name": "Niki Volou",
        "lat": 39.373257922628206,
        "lng": 22.96474533455756,
        "country": "Greece"
    },
    {
        "rank": 2961,
        "name": "Mačva Šabac",
        "lat": 44.7467,
        "lng": 19.6897,
        "country": "Serbia"
    },
    {
        "rank": 2962,
        "name": "Obod",
        "lat": 40.13468490293408,
        "lng": 67.81818013465275,
        "country": "Uzbekistan"
    },
    {
        "rank": 2963,
        "name": "Caguas Huracán",
        "lat": 18.2342,
        "lng": -66.0356,
        "country": "Puerto Rico"
    },
    {
        "rank": 2964,
        "name": "FC Zugdidi",
        "lat": 42.5097,
        "lng": 41.8708,
        "country": "Georgia"
    },
    {
        "rank": 2965,
        "name": "Hatta",
        "lat": 24.8,
        "lng": 56.1333,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2966,
        "name": "Longford Town",
        "lat": 53.7289,
        "lng": -7.7931,
        "country": "Ireland"
    },
    {
        "rank": 2967,
        "name": "AEZ Zakakiou",
        "lat": 34.7333,
        "lng": 33.0333,
        "country": "Cyprus"
    },
    {
        "rank": 2968,
        "name": "Dnepr Mogilev",
        "lat": 53.93468643211837,
        "lng": 30.333300000000005,
        "country": "Belarus"
    },
    {
        "rank": 2969,
        "name": "Siauliai",
        "lat": 55.93127728408874,
        "lng": 23.345905081420266,
        "country": "Lithuania"
    },
    {
        "rank": 2970,
        "name": "Shenzhen FC",
        "lat": 22.561086432118376,
        "lng": 114.0579,
        "country": "China PR"
    },
    {
        "rank": 2971,
        "name": "Gresik United FC",
        "lat": -7.1561,
        "lng": 112.6536,
        "country": "Indonesia"
    },
    {
        "rank": 2972,
        "name": "FK Bačka Palanka",
        "lat": 45.25,
        "lng": 19.3833,
        "country": "Serbia"
    },
    {
        "rank": 2973,
        "name": "Carrick Rangers",
        "lat": 54.7167,
        "lng": -5.8,
        "country": "Northern Ireland"
    },
    {
        "rank": 2974,
        "name": "Dainava Alytus",
        "lat": 54.3964,
        "lng": 24.0461,
        "country": "Lithuania"
    },
    {
        "rank": 2975,
        "name": "FC Torpedo Minsk",
        "lat": 53.93990358465103,
        "lng": 27.556277453438884,
        "country": "Belarus"
    },
    {
        "rank": 2976,
        "name": "Al-Baqa'a SC",
        "lat": 32.0167,
        "lng": 35.8667,
        "country": "Jordan"
    },
    {
        "rank": 2977,
        "name": "NK Rudeš",
        "lat": 45.858307140494475,
        "lng": 16.000049832566436,
        "country": "Croatia"
    },
    {
        "rank": 2978,
        "name": "Emirates Club",
        "lat": 24.387986432118375,
        "lng": 54.4306,
        "country": "United Arab Emirates"
    },
    {
        "rank": 2979,
        "name": "FK Tukums 2000",
        "lat": 56.9667,
        "lng": 23.1667,
        "country": "Latvia"
    },
    {
        "rank": 2980,
        "name": "Tobago United",
        "lat": 11.25,
        "lng": -60.7333,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2981,
        "name": "FOX Villa FC",
        "lat": 12.208974384935765,
        "lng": -86.24657865363895,
        "country": "Nicaragua"
    },
    {
        "rank": 2982,
        "name": "Indeni FC",
        "lat": -12.815313567881628,
        "lng": 28.1,
        "country": "Zambia"
    },
    {
        "rank": 2983,
        "name": "Hebei F.C.",
        "lat": 38.06078643211838,
        "lng": 114.5149,
        "country": "China PR"
    },
    {
        "rank": 2984,
        "name": "FC Jurmala",
        "lat": 56.98608643211836,
        "lng": 23.7794,
        "country": "Latvia"
    },
    {
        "rank": 2985,
        "name": "Vere United FC",
        "lat": 18.2517236175389,
        "lng": -76.7494,
        "country": "Jamaica"
    },
    {
        "rank": 2986,
        "name": "FC Floreşti",
        "lat": 47.9167,
        "lng": 28.3,
        "country": "Moldova"
    },
    {
        "rank": 2987,
        "name": "FC Shukura Kobuleti",
        "lat": 41.8167,
        "lng": 41.7833,
        "country": "Georgia"
    },
    {
        "rank": 2988,
        "name": "FC Codru Lozova",
        "lat": 47.15439145694701,
        "lng": 28.863799999999998,
        "country": "Moldova"
    },
    {
        "rank": 2989,
        "name": "Pobeda",
        "lat": 42.19169410580501,
        "lng": 21.414811735040836,
        "country": "Macedonia"
    },
    {
        "rank": 2990,
        "name": "South End",
        "lat": 10.943610049657247,
        "lng": -61.2225,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2991,
        "name": "Lietava Jonava",
        "lat": 55.0714,
        "lng": 24.2797,
        "country": "Lithuania"
    },
    {
        "rank": 2992,
        "name": "Metalurh Zaporizhya",
        "lat": 47.8388,
        "lng": 35.1396,
        "country": "Ukraine"
    },
    {
        "rank": 2993,
        "name": "SK Super Nova",
        "lat": 57.00407286423673,
        "lng": 23.7794,
        "country": "Latvia"
    },
    {
        "rank": 2994,
        "name": "University College Dublin",
        "lat": 53.34774310129409,
        "lng": -6.278506266740066,
        "country": "Ireland"
    },
    {
        "rank": 2995,
        "name": "La Horquetta Rangers FC",
        "lat": 10.666699953437263,
        "lng": -61.39839730721467,
        "country": "Trinidad and Tobago"
    },
    {
        "rank": 2996,
        "name": "Warrenpoint Town",
        "lat": 54.1028,
        "lng": -6.2511,
        "country": "Northern Ireland"
    },
    {
        "rank": 2997,
        "name": "Newry City AFC",
        "lat": 54.1766,
        "lng": -6.34,
        "country": "Northern Ireland"
    },
    {
        "rank": 2998,
        "name": "FK Metta",
        "lat": 56.9496,
        "lng": 24.1052,
        "country": "Latvia"
    }
];