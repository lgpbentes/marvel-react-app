import React, { useState, useEffect } from 'react';

import { Hero } from '../../components/HeroItem';

import { CharactersApi } from '../../services/marvel-api';

import logoImage from '../../assets/images/logo/Group.png';
import heartIcon from '../../assets/images/icons/heart/Path.png';
import reviewImage from '../../assets/images/review/Group.png';
import videoIcon from '../../assets/images/icons/video/shape.svg';
import bookIcon from '../../assets/images/icons/book/Group.svg';

import './styles.css';

interface HeroDetailProps {
  match: {
    params: {
      id: number,
    };
  };
}

const HeroDetail: React.FC<HeroDetailProps> = (props) => {
  const [hero, setHero] = useState<Hero | undefined>(undefined);
  const [releases, setReleases] = useState<any>([]);

  async function getCharacterDetail() {

    // const response = await CharactersApi.getCharacters();
    // const { total, count, results } = response.data;

    setHero({
      "id": 1009351,
      "name": "Hulk",
      "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
      "modified": "2020-07-21T10:35:15-0400",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
        "extension": "jpg"
      },
      "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
      "comics": {
        "available": 1666,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/comics",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/41112",
            "name": "5 Ronin (Hardcover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/36365",
            "name": "5 Ronin (2010) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38753",
            "name": "5 Ronin (2010) #2 (BROOKS COVER)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
            "name": "A+X (2012) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
            "name": "A+X (2012) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/77060",
            "name": "Absolute Carnage: Immortal Hulk (2019) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/320",
            "name": "Actor Presents Spider-Man and the Incredible Hulk (2003) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
            "name": "Age of X: Universe (2011) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
            "name": "Age of X: Universe (2011) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24053",
            "name": "All-New Savage She-Hulk (2009) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24252",
            "name": "All-New Savage She-Hulk (2009) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12689",
            "name": "Alpha Flight (1983) #29"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12650",
            "name": "Alpha Flight (1983) #110"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12651",
            "name": "Alpha Flight (1983) #111"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
            "name": "Alpha Flight (1983) #127"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6527",
            "name": "The Amazing Spider-Man (1963) #14"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35528",
            "name": "Amazing Spider-Man (1999) #667"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
            "name": "Amazing Spider-Man Annual (1964) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16886",
            "name": "Amazing Spider-Man Annual (1964) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/36956",
            "name": "Amazing Spider-Man Annual (2011) #38"
          }
        ],
        "returned": 20
      },
      "series": {
        "available": 474,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/series",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15276",
            "name": "5 Ronin (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/12429",
            "name": "5 Ronin (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - 2014)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/27632",
            "name": "Absolute Carnage: Immortal Hulk (2019)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/458",
            "name": "Actor Presents Spider-Man and the Incredible Hulk (2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7231",
            "name": "All-New Savage She-Hulk (2009)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13205",
            "name": "Amazing Spider-Man Annual (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24323",
            "name": "Ant-Man and the Wasp Adventures (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
            "name": "Avengers (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
            "name": "Avengers (2016 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24044",
            "name": "Avengers & The Infinity Gauntlet (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
            "name": "Avengers & the Infinity Gauntlet (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
            "name": "Avengers Annual (1967 - 1994)"
          }
        ],
        "returned": 20
      },
      "stories": {
        "available": 2550,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/stories",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/702",
            "name": "INCREDIBLE HULK (1999) #62",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/703",
            "name": "Interior #703",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/704",
            "name": "INCREDIBLE HULK (1999) #63",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/705",
            "name": "Interior #705",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/706",
            "name": "INCREDIBLE HULK (1999) #64",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/707",
            "name": "Interior #707",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/872",
            "name": "HULK: GRAY (2003) #2",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/873",
            "name": "Interior #873",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/874",
            "name": "HULK: GRAY (2003) #3",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/875",
            "name": "Interior #875",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1134",
            "name": "Interior #1134",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1217",
            "name": "INCREDIBLE HULK (1999) #68",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1218",
            "name": "Interior #1218",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1219",
            "name": "INCREDIBLE HULK (1999) #69",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1220",
            "name": "Interior #1220",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1221",
            "name": "INCREDIBLE HULK (1999) #70",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1222",
            "name": "Interior #1222",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1223",
            "name": "INCREDIBLE HULK (1999) #71",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1224",
            "name": "Interior #1224",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1225",
            "name": "INCREDIBLE HULK (1999) #75",
            "type": "cover"
          }
        ],
        "returned": 20
      },
      "events": {
        "available": 26,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/events",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
            "name": "Age of X"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/297",
            "name": "Fall of the Hulks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
            "name": "Fall of the Mutants"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
            "name": "Inhumanity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/311",
            "name": "Marvel NOW!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/319",
            "name": "Original Sin"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/266",
            "name": "Other - Evolve or Die"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/212",
            "name": "Planet Hulk"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/295",
            "name": "Realm of Kings"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          }
        ],
        "returned": 20
      },
      "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
        }
      ]
    });

    setReleases([
      {
        "id": 17458,
        "digitalId": 0,
        "title": "Defenders: Indefensible (2005)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": null,
        "modified": "2016-11-03T16:50:27-0400",
        "isbn": "0-7851-1762-8",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17458",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/17458/defenders_indefensible_2005?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/3290",
          "name": "Defenders: Indefensible (2005)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/5818e6422bf81",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/581ba301caf9e",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/f0/581ba2dee06b5",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/581ba2d3eb0d6",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/581ba2be3fe79",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/5818e6422bf81",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/90/4bc631dcc0fc2",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4bc62c0fc227e",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/c0/4bc62596d6dfb",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bc620f8097da",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/4bc6162b6747c",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17458/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/6986",
              "name": "J. M. DeMatteis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/400",
              "name": "Keith Giffen",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/780",
              "name": "Kevin Maguire",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8429",
              "name": "Dave Sharpe",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/500",
              "name": "Christopher Sotomayor",
              "role": "colorist"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17458/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011023",
              "name": "Defenders"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
              "name": "Doctor Strange"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009280",
              "name": "Dormammu"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009592",
              "name": "Silver Surfer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
              "name": "Sub-Mariner"
            }
          ],
          "returned": 6
        },
        "stories": {
          "available": 11,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17458/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3099",
              "name": "1 of 5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3100",
              "name": "1 of 5",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3101",
              "name": "2 of 5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3102",
              "name": "2 of 5",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3103",
              "name": "3 of 5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3104",
              "name": "3 of 5",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3105",
              "name": "4 of 5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3106",
              "name": "4 of 5",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3107",
              "name": "5 of 5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3108",
              "name": "5 of 5",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/67660",
              "name": "DEFENDERS: INDEFENSIBLE TPB 0 cover",
              "type": "cover"
            }
          ],
          "returned": 11
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17458/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 17465,
        "digitalId": 0,
        "title": "Marvel Masterworks: Ant-Man/Giant-Man Vol. 1 (Hardcover)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": null,
        "modified": "2014-05-09T20:30:51-0400",
        "isbn": "0-7851-2049-1",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Hardcover",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17465",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/collection/17465/marvel_masterworks_ant-mangiant-man_vol_1_hardcover?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/3297",
          "name": "Marvel Masterworks: Ant-Man/Giant-Man Vol. 1 (0000 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11442",
            "name": "Tales to Astonish (1959) #94"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11441",
            "name": "Tales to Astonish (1959) #93"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11440",
            "name": "Tales to Astonish (1959) #92"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11438",
            "name": "Tales to Astonish (1959) #90"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11436",
            "name": "Tales to Astonish (1959) #89"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11435",
            "name": "Tales to Astonish (1959) #88"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11414",
            "name": "Tales to Astonish (1959) #69"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11413",
            "name": "Tales to Astonish (1959) #68"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11412",
            "name": "Tales to Astonish (1959) #67"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11410",
            "name": "Tales to Astonish (1959) #65"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11409",
            "name": "Tales to Astonish (1959) #64"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11408",
            "name": "Tales to Astonish (1959) #63"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11407",
            "name": "Tales to Astonish (1959) #62"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11406",
            "name": "Tales to Astonish (1959) #61"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11396",
            "name": "Tales to Astonish (1959) #52"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11395",
            "name": "Tales to Astonish (1959) #51"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11394",
            "name": "Tales to Astonish (1959) #50"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11392",
            "name": "Tales to Astonish (1959) #49"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11391",
            "name": "Tales to Astonish (1959) #48"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/11390",
            "name": "Tales to Astonish (1959) #47"
          }
        ],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/536d433861089",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/536d731cd4a67",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/536d706fd44a5",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/536d6fde340df",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/536d6fa682524",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/536d6ab176939",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/536d6a7ed8a64",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/536d6a1e5df75",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/20/536d69862df4b",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/40/536d68bee1aad",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/80/536d688e528d7",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/536d67a817b20",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/536d66acc948e",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/536d667c3141e",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/536d6541d9c41",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/536d64b05eac5",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/536d63e2bea78",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/536d627268ce5",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/536d61d5cf49d",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/03/536d5d0813793",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/536d56b48bc4b",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/e0/536d561f693a6",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/536d558a1acb0",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/70/536d553223781",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/536d5425b1cde",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/536d4ee06e042",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/536d4e16d0ede",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/536d4db73e04d",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/00/536d44888e1c4",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/536d44539ab9b",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/536d4415580e0",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/536d43ad99cbc",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/536d437b80ffd",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/536d433861089",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/4c7d5b9c95183",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4bc46abb6eb38",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc46ab67f62f",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/90/4bc382a5e8edf",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/4bc369a8c9164",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4bc369a3b7e7e",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/90/4bc3699e83e96",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/e0/4bc36994ad87a",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/00/4bc3698fcac96",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc3698adec43",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/4bc36985b6822",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bc368c15afb6",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/30/4bc368bc5ce51",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4bc368b2461ba",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/4bc368ad34bb9",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/4bc368a80615f",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/e0/4bc368a2dcdcb",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/40/4bc3689de945e",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/4bc36893f0843",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/c0/4bc3688edea73",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4bc36889cd262",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/4bc36884b2619",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc3687fa91ce",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4bc3687a59eb3",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc3687543e78",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bc3686b2b2a6",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/4bc36866384ed",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4bc368615c66e",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/4bc3685c928fd",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/4bc36857b052c",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4bc36852acad0",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc3684dbde62",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/4bc36848d58a7",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17465/creators",
          "items": [],
          "returned": 0
        },
        "characters": {
          "available": 12,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17465/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010371",
              "name": "Boomerang"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
              "name": "Captain America"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009234",
              "name": "Chameleon"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
              "name": "Cyclops"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011490",
              "name": "Hank Pym"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009379",
              "name": "Rick Jones"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009592",
              "name": "Silver Surfer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011062",
              "name": "Stranger"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010791",
              "name": "Sub-Mariner"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009660",
              "name": "The Stranger"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009707",
              "name": "Wasp"
            }
          ],
          "returned": 12
        },
        "stories": {
          "available": 122,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17465/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12092",
              "name": "Cover #12092",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12093",
              "name": "*The Man In The Ant Hill",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12094",
              "name": "Trouble Bubble",
              "type": "letters"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12095",
              "name": "Mirror, Mirror, On The Wall...",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12096",
              "name": "The Talking Horse",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12097",
              "name": "Dead Planet",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12140",
              "name": "[untitled]",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12141",
              "name": "The Return of the Ant-Man",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12142",
              "name": "The Doorway to Nowhere",
              "type": "mystery story"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12143",
              "name": "The Thing From Outer Space",
              "type": "mystery story"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12144",
              "name": "[untitled]",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12145",
              "name": "The Challenge of Comrade X",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12146",
              "name": "The Hands of Time",
              "type": "mystery story"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12147",
              "name": "The Search for Pan",
              "type": "mystery story"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12148",
              "name": "Cover #12148",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12149",
              "name": "Trapped by the Protector",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12150",
              "name": "Afraid to Dream",
              "type": "mystery story"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12151",
              "name": "The Star Raiders",
              "type": "mystery story"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12152",
              "name": "Cover #12152",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/12153",
              "name": "Betrayed by the Ants",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17465/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 17476,
        "digitalId": 0,
        "title": "Thanos Vol. 3: Marvel Universe - The End (2003)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": null,
        "modified": "2018-06-11T15:20:39-0400",
        "isbn": "0-7851-1116-6",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17476",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/17476/thanos_vol_3_marvel_universe_-_the_end_2003?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/3308",
          "name": "Thanos Vol. 3: Marvel Universe - The End (2003)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/30/4c363b9e89284",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5188021fd1fc8",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/30/4c363b9e89284",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c363b774028f",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4c36389ae39aa",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/4c36388089c0d",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17476/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
              "name": "Tom Brevoort",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
              "name": "Al Milgrom",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/361",
              "name": "Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/6758",
              "name": "Christie Scheele",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/146",
              "name": "Jim Starlin",
              "role": "penciller (cover)"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 13,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17476/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
              "name": "Avengers"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009224",
              "name": "Captain Marvel (Mar-Vell)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
              "name": "Doctor Doom"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009282",
              "name": "Doctor Strange"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011061",
              "name": "Eternity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
              "name": "Fantastic Four"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011059",
              "name": "Living Tribunal"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009466",
              "name": "Namor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009592",
              "name": "Silver Surfer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009652",
              "name": "Thanos"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
              "name": "Thor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
              "name": "X-Men"
            }
          ],
          "returned": 13
        },
        "stories": {
          "available": 11,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17476/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/38464",
              "name": "Cover #38464",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/38465",
              "name": "Interior #38465",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44945",
              "name": "Cover #44945",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44946",
              "name": "Interior #44946",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44947",
              "name": "Cover #44947",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44948",
              "name": "Interior #44948",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44949",
              "name": "Cover #44949",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44950",
              "name": "Interior #44950",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44951",
              "name": "Cover #44951",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/44952",
              "name": "Interior #44952",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/67678",
              "name": "THANOS VOL. 3: MARVEL UNIVERSE - THE END TPB 0 cover",
              "type": "cover"
            }
          ],
          "returned": 11
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17476/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 17457,
        "digitalId": 0,
        "title": "Infinity War (Trade Paperback)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": null,
        "modified": "2013-07-10T12:11:32-0400",
        "isbn": "0-7851-2105-6",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Trade Paperback",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17457",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/collection/17457/infinity_war_trade_paperback?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Infinity-War-0/digital-comic/27978?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/3289",
          "name": "Infinity War (2005)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9297",
            "name": "Infinity War (1992) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/18414",
            "name": "Warlock and the Infinity Watch (1992) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/18454",
            "name": "Warlock and the Infinity Watch (1992) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9296",
            "name": "Infinity War (1992) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/18453",
            "name": "Warlock and the Infinity Watch (1992) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9295",
            "name": "Infinity War (1992) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/18452",
            "name": "Warlock and the Infinity Watch (1992) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9294",
            "name": "Infinity War (1992) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9293",
            "name": "Infinity War (1992) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/9292",
            "name": "Infinity War (1992) #1"
          }
        ],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/40/51dd868e26684",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/40/51dd868e26684",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 14,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17457/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2632",
              "name": "Stein",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1929",
              "name": "Ian Laughlin",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/6758",
              "name": "Christie Scheele",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4201",
              "name": "Bob Almond",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11063",
              "name": "Terry Kevin Austin",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/435",
              "name": "Al Milgrom",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2047",
              "name": "Craig Anderson",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1887",
              "name": "Janice Chiang",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/2700",
              "name": "Kenny Lopez",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1933",
              "name": "Jack Morelli",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/658",
              "name": "Ron Lim",
              "role": "penciller"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/372",
              "name": "Angel Medina",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/444",
              "name": "Tom Raney",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/146",
              "name": "Jim Starlin",
              "role": "writer"
            }
          ],
          "returned": 14
        },
        "characters": {
          "available": 24,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17457/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
              "name": "Archangel"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
              "name": "Captain America"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
              "name": "Colossus"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
              "name": "Cyclops"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009330",
              "name": "Guardian"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009337",
              "name": "Havok"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009343",
              "name": "Hercules"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
              "name": "Human Torch"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
              "name": "Invisible Woman"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009477",
              "name": "Nova"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009499",
              "name": "Polaris"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009504",
              "name": "Professor X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009512",
              "name": "Psylocke"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009523",
              "name": "Quasar (Phyla-Vell)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009546",
              "name": "Rogue"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009560",
              "name": "Sasquatch (Walter Langkowski)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
              "name": "Scarlet Witch"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009576",
              "name": "Shaman"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009583",
              "name": "She-Hulk (Jennifer Walters)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 11,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17457/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/23963",
              "name": "Chthonic Maneuvers",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/23965",
              "name": "Ethereal Revisionism",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/23967",
              "name": "Nefarious Rhapsody",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/23969",
              "name": "Mortiferous Artifice",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/23971",
              "name": "Psychomania",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/23973",
              "name": "The Animus Engagement",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39233",
              "name": "Self-Desructive Tendencies",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39309",
              "name": "The Island!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39311",
              "name": "Interlude",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/39313",
              "name": "Old Wounds",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/67659",
              "name": "Infinity War TPB 0 cover",
              "type": "cover"
            }
          ],
          "returned": 11
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17457/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
              "name": "Infinity War"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 17487,
        "digitalId": 0,
        "title": "X-Men: The Complete Onslaught Epic Vol. 4 (2009)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": null,
        "modified": "2018-07-10T13:15:09-0400",
        "isbn": "0-7851-2826-3",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17487",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/17487/x-men_the_complete_onslaught_epic_vol_4_2009?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/3319",
          "name": "X-Men: The Complete Onslaught Epic Vol. 4 (2009)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/57dae7fc9caf2",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/57dae7fc9caf2",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17487/creators",
          "items": [],
          "returned": 0
        },
        "characters": {
          "available": 31,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17487/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009156",
              "name": "Apocalypse"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009182",
              "name": "Bishop"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
              "name": "Black Panther"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
              "name": "Black Widow"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009214",
              "name": "Cable"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009219",
              "name": "Cannonball"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
              "name": "Captain America"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009255",
              "name": "Crystal"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009257",
              "name": "Cyclops"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
              "name": "Doctor Doom"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009297",
              "name": "Falcon"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009313",
              "name": "Gambit"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
              "name": "Hawkeye"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
              "name": "Human Torch"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009362",
              "name": "Iceman"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
              "name": "Invisible Woman"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
              "name": "Iron Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009380",
              "name": "Joseph"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
              "name": "Mr. Fantastic"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17487/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/26051",
              "name": "ONSLAUGHT: MARVEL UNIVERSE (1996) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/26052",
              "name": "With Great Power ...",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/67689",
              "name": "X-MEN: THE COMPLETE ONSLAUGHT EPIC VOL. 4 TPB 0 cover",
              "type": "cover"
            }
          ],
          "returned": 3
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17487/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
              "name": "Onslaught"
            }
          ],
          "returned": 1
        }
      },
      {
        "id": 17482,
        "digitalId": 0,
        "title": "What If? Classic Vol. 4 (2007)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": null,
        "modified": "2018-11-02T11:36:39-0400",
        "isbn": "978-0-7851-2738-3",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17482",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/17482/what_if_classic_vol_4_2007?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/3314",
          "name": "What If? Classic Vol. 4 (2007)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "images": [],
        "creators": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17482/creators",
          "items": [],
          "returned": 0
        },
        "characters": {
          "available": 12,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17482/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
              "name": "Captain America"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010813",
              "name": "Celestials"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
              "name": "Daredevil"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
              "name": "Doctor Doom"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010807",
              "name": "Eternals"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
              "name": "Human Torch"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
              "name": "Iron Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009420",
              "name": "Man-Thing"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
              "name": "Spider-Man"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
              "name": "Thing"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
              "name": "Thor"
            }
          ],
          "returned": 12
        },
        "stories": {
          "available": 23,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17482/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20698",
              "name": "Interior #20698",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20699",
              "name": "What If Doctor Doom had Become a Hero?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20700",
              "name": "\"Sunday Punch!\"",
              "type": "ad"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20701",
              "name": "What if the Hulk had become a Barbarian?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20702",
              "name": "What if...Hulk's Girlfriend Jarella had not Died?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20703",
              "name": "The First Celestial Host!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20704",
              "name": "What if Aunt May instead of her Nephew Peter had been Bitten by that Radioactive  Spider?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20705",
              "name": "The Human Torch Saves the Valley!",
              "type": "ad"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20706",
              "name": "What if Spider-Man had Rescued Gwen Stacy?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20707",
              "name": "What if Gwen Stacy had Lived?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20708",
              "name": "The First Eternals",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20709",
              "name": "Iron Man Vs. the Bank Robbers!",
              "type": "ad"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20710",
              "name": "The Saga of Johnny West",
              "type": "ad"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20711",
              "name": "What if Thor and the Avengers Battled the Gods?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20712",
              "name": "What If Thor Fought Odin over Jane Foster?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20713",
              "name": "The First Uni-Mind",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20714",
              "name": "Daredevil vs. Johnny Punk!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20715",
              "name": "Interior #20715",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20716",
              "name": "What if Captain America Were Elected President?",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/20717",
              "name": "What if...The Man-Thing had Regained Ted  Sallis' Brain?",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/17482/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 8906,
        "digitalId": 83,
        "title": "Incredible Hulk (1962) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "Witness the birth of the Jade Giant! The Hulk is the strangest man alive. Is he man or monster...or both?",
        "modified": "2017-08-22T17:50:24-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 36,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "Witness the birth of the Jade Giant! The Hulk is the strangest man alive. Is he man or monster...or both?"
          },
          {
            "type": "70th_winner_desc",
            "language": "en-us",
            "text": "Is he a man, monster or both?  The jury is still out on that one, but fans have decided that this cover by Jack Kirby is one of Marvel's best!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8906",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/8906/incredible_hulk_1962_1?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Incredible-Hulk-1/digital-comic/83?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=83&utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/83?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
          "name": "Incredible Hulk (1962 - 1999)"
        },
        "variants": [],
        "collections": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1118",
            "name": "Marvel Masterworks: The Incredible Hulk Vol. 1 (Hardcover)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "1962-05-01T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2008-01-01T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2010-06-10T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/59933ea5b5c2e",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/59933ea5b5c2e",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8906/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
              "name": "Jack Kirby",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
              "name": "Stan Lee",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1306",
              "name": "Paul Reinman",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13093",
              "name": "Art Simek",
              "role": "letterer"
            }
          ],
          "returned": 4
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8906/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8906/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13514",
              "name": "[none]",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13515",
              "name": "The Hulk",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/206100",
              "name": "story from Incredible Hulk (1962) #1",
              "type": "interiorStory"
            }
          ],
          "returned": 3
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8906/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 8907,
        "digitalId": 3357,
        "title": "Incredible Hulk (1962) #2",
        "issueNumber": 2,
        "variantDescription": "",
        "description": "The Incredible Hulk in \"The Terror of the Toad Men!\"",
        "modified": "2018-05-26T09:54:48-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "The Incredible Hulk in \"The Terror of the Toad Men!\""
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8907",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/8907/incredible_hulk_1962_2?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Incredible-Hulk-2/digital-comic/3357?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=3357&utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/3357?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
          "name": "Incredible Hulk (1962 - 1999)"
        },
        "variants": [],
        "collections": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1118",
            "name": "Marvel Masterworks: The Incredible Hulk Vol. 1 (Hardcover)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "1962-07-01T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2007-11-13T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2010-06-08T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/5b33974a4da3d",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/5b33974a4da3d",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8907/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/32",
              "name": "Steve Ditko",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
              "name": "Jack Kirby",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
              "name": "Stan Lee",
              "role": "writer"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8907/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8907/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13516",
              "name": "Cover #13516",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13517",
              "name": "The Terror of the Toad Men",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8907/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 8908,
        "digitalId": 1984,
        "title": "Incredible Hulk (1962) #3",
        "issueNumber": 3,
        "variantDescription": "",
        "description": "See the Hulk banished to outer space, trapped by the Ringmaster, and other thrills with the everyone's favorite Jade Giant!",
        "modified": "2018-05-26T09:54:51-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "See the Hulk banished to outer space, trapped by the Ringmaster, and other thrills with the everyone's favorite Jade Giant!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8908",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/8908/incredible_hulk_1962_3?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Incredible-Hulk-3/digital-comic/1984?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=1984&utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/1984?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
          "name": "Incredible Hulk (1962 - 1999)"
        },
        "variants": [],
        "collections": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1118",
            "name": "Marvel Masterworks: The Incredible Hulk Vol. 1 (Hardcover)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "1962-09-01T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2007-11-13T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2010-06-08T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/60/5b33a0c2cbb56",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/60/5b33a0c2cbb56",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8908/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/263",
              "name": "Dick Ayers",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
              "name": "Jack Kirby",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
              "name": "Stan Lee",
              "role": "writer"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8908/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8908/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13518",
              "name": "Cover #13518",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13519",
              "name": "Banished to Outer Space",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13520",
              "name": "The Origin of the Hulk!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13521",
              "name": "The Ringmaster",
              "type": "interiorStory"
            }
          ],
          "returned": 4
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8908/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 8909,
        "digitalId": 3358,
        "title": "Incredible Hulk (1962) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "The Incredible Hulk in two feature length thrills: \"The Monster and the Machine\" and \"Mongu! Gladiator From Space!\"",
        "modified": "2018-05-26T09:54:53-0400",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
            "type": "issue_preview_text",
            "language": "en-us",
            "text": "The Incredible Hulk in two feature length thrills: \"The Monster and the Machine\" and \"Mongu! Gladiator From Space!\""
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8909",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/8909/incredible_hulk_1962_4?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Incredible-Hulk-4/digital-comic/3358?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=3358&utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/3358?utm_campaign=apiRef&utm_source=96217a48cad94538b4016516d4587e1a"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
          "name": "Incredible Hulk (1962 - 1999)"
        },
        "variants": [],
        "collections": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1118",
            "name": "Marvel Masterworks: The Incredible Hulk Vol. 1 (Hardcover)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "1962-11-01T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2007-11-13T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2010-06-08T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 0
          },
          {
            "type": "digitalPurchasePrice",
            "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/5b33affc5ca82",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/10/5b33affc5ca82",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8909/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/263",
              "name": "Dick Ayers",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/196",
              "name": "Jack Kirby",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/30",
              "name": "Stan Lee",
              "role": "writer"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8909/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
              "name": "Hulk"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8909/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13522",
              "name": "Cover #13522",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13523",
              "name": "The Monster and the Machine",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/13524",
              "name": "The Gladiator from Outer Space",
              "type": "interiorStory"
            }
          ],
          "returned": 3
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/8909/events",
          "items": [],
          "returned": 0
        }
      }
    ])
  }

  useEffect(() => {
    const { match: { params } } = props;
    console.log(params.id);

    getCharacterDetail();
  }, [])

  return (
    <div id="page-hero-detail" className="container">
      {/* TODO: create header component */}
      <header className="page-header">
        <figure>
          <img src={logoImage} alt="Marvel Search Heros" />
        </figure>
        <form id="search-form">
          <input type="search" placeholder="Procure por heróis" />
        </form>
      </header>
      <main>
        {
          hero ?
            <>
              <article className="hero-detail">
                <figure className="hero-image">
                  <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
                </figure>
                <section className="hero-info">
                  <div className="hero-title">
                    <span>{hero.name}</span>
                    <img src={heartIcon} alt='heart' />
                  </div>

                  <p className="hero-description">{hero.description}</p>

                  <div className="hero-stats">
                    <div>
                      <p className="hero-stat-label"><strong>Quadrinhos</strong></p>
                      <div className="hero-stat">
                        <img src={bookIcon} alt={'book'} />
                        <span>{hero.comics.available}</span>
                      </div>
                    </div>
                    <div>
                      <p className="hero-stat-label"><strong>Estórias</strong></p>
                      <div className="hero-stat">
                        <img src={videoIcon} alt={'video'} />
                        <span>{hero.stories.available}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-rating">
                    <span><strong>Rating: </strong></span>
                    <img src={reviewImage} alt={'rating'} />
                  </div>
                  <div className="hero-last-release">
                    <span><strong>Último quadrinho:</strong> 13 de fevereiro de 2020</span>
                  </div>
                </section>
              </article>
              <section className="hero-releases">
                <h1 >Últimos lançamentos</h1>
                <div className="hero-releases-list">
                  {releases.map((release: any) => {
                    return <article key={release.id} className="release-item">
                      <figure className="release-cover">
                        <img src={`${release.thumbnail.path}.${release.thumbnail.extension}`} alt={release.title} />
                      </figure>
                      <footer className="release-title">
                        <p>
                          <strong>{release.title}</strong>
                        </p>
                      </footer>
                    </article>;
                  })}
                </div>
              </section>
            </>
            : <></>
        }
      </main>
      {/* TODO: create footer component */}
      <footer className="page-footer">
      </footer>
    </div>
  )
}

export default HeroDetail;