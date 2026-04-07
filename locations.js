// Map image: "London towards the close of the 19th Century" (1890s pictorial map)
// Source: https://commons.wikimedia.org/wiki/File:1890s_pictorial_map_of_London_-_London_towards_the_close_of_the_19th_century.jpg
// Public domain.
//
// All locations on the map. These are fixed — they do not change between cases.
//
// x and y are percentage positions on the map image (0–100).
// Adjust these values to match your specific map.png.
// A location at x:50, y:50 appears at the exact centre of the image.
//
// To find the right coordinates for a location:
//   - Open your map image in an image editor
//   - Hover over the desired point and read the pixel coordinates
//   - Divide pixel X by image width  × 100  → x value
//   - Divide pixel Y by image height × 100  → y value

window.LOCATIONS = {
  "1":  { name: "Scotland Yard",              x: 46,   y: 72  },
  "2":  { name: "Houses of Parliament",       x: 43,   y: 76  },
  "3":  { name: "Buckingham Palace",          x: 37,   y: 68  },
  "4":  { name: "Hyde Park Corner",           x: 26,   y: 57  },
  "5":  { name: "Kensington",                 x: 12,   y: 40  },
  "6":  { name: "Paddington Station",         x: 17,   y: 23  },
  "7":  { name: "Baker Street",               x: 27,   y: 27  },
  "8":  { name: "Regent's Park",              x: 33,   y: 12  },
  "9":  { name: "The Diogenes Club",          x: 40,   y: 70  },
  "10": { name: "Covent Garden",              x: 51,   y: 62  },
  "11": { name: "Fleet Street",               x: 56,   y: 59  },
  "12": { name: "St. Paul's Cathedral",       x: 62,   y: 56  },
  "13": { name: "The Old Bailey",             x: 59,   y: 53  },
  "14": { name: "Smithfield Market",          x: 57,   y: 48  },
  "15": { name: "Aldgate",                    x: 70,   y: 52  },
  "16": { name: "Whitechapel",                x: 76,   y: 50  },
  "17": { name: "London Bridge",              x: 64,   y: 68  },
  "18": { name: "Southwark",                  x: 62,   y: 73  },
  "19": { name: "Lambeth",                    x: 47,   y: 79  },
  "20": { name: "Bermondsey",                 x: 68,   y: 74  },
  "21": { name: "Holborn",                    x: 54,   y: 55  },
  "22": { name: "King's Cross",               x: 45,   y: 23  },
  "23": { name: "Islington",                  x: 55,   y: 19  },
  "24": { name: "Shoreditch",                 x: 64,   y: 37  },
  "25": { name: "Stepney",                    x: 77,   y: 54  }
};
