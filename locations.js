// Map image: "London towards the close of the 19th Century" (1890s pictorial map)
// Source: https://commons.wikimedia.org/wiki/File:1890s_pictorial_map_of_London_-_London_towards_the_close_of_the_19th_century.jpg
// Public domain.
//
// Areas are fixed across all cases — only the story file changes per case.
// x and y are percentage positions on the map image (0–100).
//
// Each area contains ~17 addresses. The story file keys locations as "areaId:address",
// e.g. "10:14 Aldgate High Street". Addresses not in the story file show a blank message.

window.LOCATIONS = {

  "1": {
    name: "Baker Street & Marylebone",
    x: 27, y: 27,
    addresses: [
      "221B Baker Street",
      "10 Baker Street",
      "34 Baker Street",
      "47 Baker Street",
      "68 Baker Street",
      "The Volunteer Inn, Baker Street",
      "8 Dorset Street",
      "15 Dorset Street",
      "3 Montagu Place",
      "Madame Tussaud's Exhibition Rooms, Marylebone Road",
      "7 Wimpole Street",
      "24 Wimpole Street",
      "19 Upper Wimpole Street",
      "6 Harley Street",
      "12 Harley Street",
      "The Marylebone Dispensary, New Cavendish Street",
      "22 George Street"
    ]
  },

  "2": {
    name: "Regent's Park & Euston",
    x: 38, y: 18,
    addresses: [
      "The Zoological Gardens, Outer Circle",
      "4 Park Crescent",
      "17 Park Crescent",
      "12 Gloucester Gate",
      "Euston Station, Euston Road",
      "7 Euston Square",
      "14 Euston Square",
      "The Crown & Anchor, Albany Street",
      "18 Albany Street",
      "33 Albany Street",
      "3 Chester Terrace",
      "11 Chester Terrace",
      "The Regent's Park Barracks, Albany Street",
      "22 Robert Street",
      "31 Robert Street",
      "The York & Albany, Parkway",
      "9 Outer Circle"
    ]
  },

  "3": {
    name: "Paddington & Bayswater",
    x: 19, y: 30,
    addresses: [
      "Paddington Station, Praed Street",
      "14 Praed Street",
      "28 Praed Street",
      "The Fountains Abbey, Praed Street",
      "The Great Western Hotel, Praed Street",
      "6 Norfolk Square",
      "14 Norfolk Square",
      "3 Sussex Gardens",
      "22 Sussex Gardens",
      "3 Westbourne Terrace",
      "17 Westbourne Terrace",
      "9 Westbourne Park Road",
      "4 Inverness Terrace",
      "14 Craven Road",
      "18 Craven Road",
      "The Porchester Hotel, Porchester Gardens",
      "11 Moscow Road"
    ]
  },

  "4": {
    name: "Kensington & Hyde Park",
    x: 18, y: 46,
    addresses: [
      "The Natural History Museum, Cromwell Road",
      "14 Cromwell Road",
      "27 Cromwell Road",
      "7 Exhibition Road",
      "19 Exhibition Road",
      "The Royal Albert Hall, Kensington Gore",
      "8 Princes Gate",
      "14 Princes Gate",
      "3 Ennismore Gardens",
      "The Hyde Park Hotel, Knightsbridge",
      "22 Kensington Road",
      "33 Kensington Road",
      "The Kensington Arms, Wright's Lane",
      "The Kensington Registry Office, Marloes Road",
      "16 Young Street",
      "The Leighton House, Holland Park Road",
      "9 Pemberton Gardens"
    ]
  },

  "5": {
    name: "Westminster & St James's",
    x: 40, y: 70,
    addresses: [
      "Scotland Yard, Whitehall",
      "14 Whitehall",
      "The Houses of Parliament, Westminster",
      "7 Queen Anne's Gate",
      "14 Queen Anne's Gate",
      "The Army & Navy Club, Pall Mall",
      "The Reform Club, Pall Mall",
      "The Athenaeum Club, Pall Mall",
      "9 Pall Mall",
      "7 Carlton House Terrace",
      "11 Carlton House Terrace",
      "3 Birdcage Walk",
      "12 Birdcage Walk",
      "The Treasury, Whitehall",
      "22 Great George Street",
      "The Westminster Palace Hotel, Victoria Street",
      "St James's Palace, St James's"
    ]
  },

  "6": {
    name: "Strand & Trafalgar Square",
    x: 46, y: 64,
    addresses: [
      "The National Gallery, Trafalgar Square",
      "14 Villiers Street",
      "21 Villiers Street",
      "The Savoy Hotel, Strand",
      "38 Strand",
      "The Coal Hole Tavern, Strand",
      "The Tivoli Music Hall, Strand",
      "6 Wellington Street",
      "The Lyceum Theatre, Wellington Street",
      "Charing Cross Station, Strand",
      "3 Northumberland Avenue",
      "17 Northumberland Avenue",
      "9 John Street",
      "19 Adam Street",
      "22 Adam Street",
      "7 Cecil Street",
      "The Charing Cross Hospital, Agar Street"
    ]
  },

  "7": {
    name: "Holborn & Covent Garden",
    x: 51, y: 57,
    addresses: [
      "Covent Garden Market",
      "3 Drury Lane",
      "17 Drury Lane",
      "The Freemasons' Arms, Long Acre",
      "14 Long Acre",
      "22 Bow Street",
      "31 Bow Street",
      "The Royal Opera House, Bow Street",
      "Bow Street Magistrates' Court",
      "7 Southampton Row",
      "18 Southampton Row",
      "9 Kingsway",
      "14 Holborn",
      "22 Holborn",
      "The Old Curiosity Shop, Portsmouth Street",
      "7 Lincoln's Inn Fields",
      "The Princess's Theatre, Oxford Street"
    ]
  },

  "8": {
    name: "Fleet Street & Temple",
    x: 54, y: 59,
    addresses: [
      "17 Fleet Street",
      "23 Fleet Street",
      "47 Fleet Street",
      "The Cheshire Cheese, Fleet Street",
      "El Vino's Wine Bar, Fleet Street",
      "8 Fetter Lane",
      "14 Fetter Lane",
      "The Temple, Inner Temple Lane",
      "The Middle Temple Hall",
      "3 Chancery Lane",
      "14 Chancery Lane",
      "4 Bouverie Street",
      "9 Bouverie Street",
      "22 Shoe Lane",
      "31 Shoe Lane",
      "6 Clifford's Inn",
      "The Black Friar, Queen Victoria Street"
    ]
  },

  "9": {
    name: "The City",
    x: 60, y: 54,
    addresses: [
      "St Paul's Cathedral, Ludgate Hill",
      "The Old Bailey, Newgate Street",
      "14 Cheapside",
      "22 Cheapside",
      "The Bank of England, Threadneedle Street",
      "7 Cornhill",
      "14 Cornhill",
      "The Mansion House",
      "9 Lombard Street",
      "22 Lombard Street",
      "The Jamaica Wine House, St Michael's Alley",
      "Smithfield Market, Charterhouse Street",
      "3 Wood Street",
      "7 Wood Street",
      "The Guildhall, Gresham Street",
      "3 Bartholomew Lane",
      "18 Bartholomew Lane"
    ]
  },

  "10": {
    name: "Aldgate & Whitechapel",
    x: 70, y: 51,
    addresses: [
      "3 Aldgate High Street",
      "14 Aldgate High Street",
      "31 Duke Street, Aldgate",
      "6 Commercial Street",
      "The Ten Bells, Commercial Street",
      "The Princess Alice, Commercial Street",
      "7 Mitre Square",
      "14 Mitre Square",
      "22 Whitechapel Road",
      "47 Whitechapel Road",
      "The Whitechapel Bell Foundry, Whitechapel Road",
      "The Blind Beggar, Whitechapel Road",
      "3 Goulston Street",
      "18 Leman Street",
      "22 Leman Street",
      "Whitechapel Police Station, Leman Street",
      "9 Petticoat Lane"
    ]
  },

  "11": {
    name: "Shoreditch & Bethnal Green",
    x: 64, y: 38,
    addresses: [
      "14 Shoreditch High Street",
      "31 Shoreditch High Street",
      "The Griffin, Shoreditch High Street",
      "7 Hoxton Square",
      "14 Hoxton Square",
      "14 Old Street",
      "22 Old Street",
      "The Britannia Theatre, Hoxton",
      "3 Columbia Road",
      "The Bethnal Green Museum",
      "18 Hackney Road",
      "33 Hackney Road",
      "9 Great Eastern Street",
      "The George & Dragon, Bethnal Green Road",
      "4 Curtain Road",
      "7 Kingsland Road",
      "27 Kingsland Road"
    ]
  },

  "12": {
    name: "Islington & King's Cross",
    x: 50, y: 28,
    addresses: [
      "King's Cross Station, Euston Road",
      "3 Pentonville Road",
      "14 Pentonville Road",
      "The Penton Arms, Pentonville Road",
      "7 Caledonian Road",
      "14 Caledonian Road",
      "The Angel Inn, Islington",
      "9 Upper Street",
      "22 Upper Street",
      "The King's Head Theatre, Upper Street",
      "3 Amwell Street",
      "18 Barnsbury Street",
      "27 Barnsbury Street",
      "6 Liverpool Road",
      "9 Liverpool Road",
      "The Sadler's Wells Theatre, Rosebery Avenue",
      "4 Duncan Terrace"
    ]
  },

  "13": {
    name: "London Bridge & Southwark",
    x: 63, y: 67,
    addresses: [
      "London Bridge Station",
      "7 Borough High Street",
      "14 Borough High Street",
      "The George Inn, Borough High Street",
      "The Bridge House Hotel, Borough High Street",
      "7 Tooley Street",
      "22 Tooley Street",
      "The Hop Exchange, Southwark Street",
      "14 Southwark Street",
      "22 Borough Market",
      "3 Bermondsey Street",
      "14 Bermondsey Street",
      "9 Union Street",
      "18 Union Street",
      "Southwark Cathedral",
      "3 Bankside",
      "The Anchor Tavern, Bankside"
    ]
  },

  "14": {
    name: "Lambeth & Vauxhall",
    x: 44, y: 77,
    addresses: [
      "Lambeth Palace",
      "3 Lambeth Walk",
      "14 Lambeth Walk",
      "9 Lambeth High Street",
      "18 Lambeth High Street",
      "The Crown, Lambeth High Street",
      "7 Albert Embankment",
      "22 Albert Embankment",
      "St Thomas's Hospital, Albert Embankment",
      "14 Kennington Road",
      "22 Kennington Road",
      "3 Black Prince Road",
      "7 Black Prince Road",
      "9 Bondway",
      "The Canterbury Music Hall, Westminster Bridge Road",
      "4 Hercules Road",
      "The Horns Tavern, Kennington Park Road"
    ]
  },

  "15": {
    name: "Chelsea & Belgravia",
    x: 29, y: 68,
    addresses: [
      "7 Cheyne Walk",
      "14 Cheyne Walk",
      "The Chelsea Arts Club, Old Church Street",
      "7 Sloane Square",
      "22 King's Road",
      "33 King's Road",
      "The Six Bells, King's Road",
      "3 Eaton Square",
      "14 Eaton Square",
      "The Cadogan Hotel, Sloane Street",
      "3 Pont Street",
      "18 Pont Street",
      "9 Pimlico Road",
      "22 Pimlico Road",
      "4 Royal Hospital Road",
      "The Chelsea Physic Garden, Swan Walk",
      "The Surprise, Christchurch Terrace"
    ]
  }

};
