// The London Street Directory — shared across all cases.
// Loaded alongside locations.js. Case-specific entries in the story file
// take precedence over entries here when the same name appears in both.
//
// Format: "Surname, Forename": { area: "id", address: "..." }
// Some addresses do not appear in the area's address list — these are
// red herrings that cannot be visited directly from the map.

window.DIRECTORY = {

  // ── Baker Street & Marylebone (Area 1) ──────────────────────────────────

  "Hudson, Mrs. Martha":       { area: "1", address: "221B Baker Street" },
  "Holmes, Mr. Sherlock":      { area: "1", address: "221B Baker Street" },
  "Watson, Dr. John H.":       { area: "1", address: "221B Baker Street" },
  "Stamford, Mr. Michael":     { area: "1", address: "34 Baker Street" },
  "Davenport, Mr. Gerald":     { area: "1", address: "47 Baker Street" },
  "Fenn, Mr. Arthur":          { area: "1", address: "3 Montagu Place" },
  "Pemberton, Dr. Henry":      { area: "1", address: "6 Harley Street" },
  "Cartwright, Sir Frederick": { area: "1", address: "12 Harley Street" },
  "Forsythe, Miss Edith":      { area: "1", address: "7 Wimpole Street" },
  "Barlow, Mr. Thomas":        { area: "1", address: "24 Wimpole Street" },
  "Tindall, Mrs. Agnes":       { area: "1", address: "15 Dorset Street" },
  "Tindall, Mr. George":       { area: "1", address: "15 Dorset Street" },
  "Beaumont, Dr. James":       { area: "1", address: "55 Baker Street" },      // not on map

  // ── Euston (Area 2) ──────────────────────────────────────────────────────

  "Prescott, Colonel George":  { area: "2", address: "14 Euston Square" },
  "Morstan, Captain Arthur":   { area: "2", address: "3 Euston Road" },
  "Rycroft, Mr. James":        { area: "2", address: "7 Euston Square" },
  "Rycroft, Mrs. Clara":       { area: "2", address: "7 Euston Square" },
  "Alderton, Rev. Thomas":     { area: "2", address: "22 Gower Street" },
  "Pendleton, Mrs. Frances":   { area: "2", address: "9 Warren Street" },
  "Pendleton, Mr. Robert":     { area: "2", address: "9 Warren Street" },
  "Lestrange, Mr. Harold":     { area: "2", address: "7 Hampstead Road" },
  "Mackay, Dr. Alistair":      { area: "2", address: "42 Euston Road" },       // not on map

  // ── Hyde Park & Piccadilly (Area 3) ─────────────────────────────────────

  "Wingate, Mr. Percy":        { area: "3", address: "14 Park Lane" },
  "Wingate, Mrs. Dorothy":     { area: "3", address: "14 Park Lane" },
  "Fairfax, Mrs. Eleanor":     { area: "3", address: "7 Grosvenor Square" },
  "Trevalyan, Mr. Arthur":     { area: "3", address: "7 Half Moon Street" },
  "Collingwood, Mr. Nat.":     { area: "3", address: "19 Half Moon Street" },
  "Napper, Miss Rose":         { area: "3", address: "33 Piccadilly" },
  "Dobbins, Mr. Francis":      { area: "3", address: "14 Piccadilly" },
  "Hartley, Mr. Charles":      { area: "3", address: "62 Park Lane" },         // not on map

  // ── Pimlico (Area 4) ─────────────────────────────────────────────────────

  "Armitage, Lord Henry":      { area: "4", address: "3 Warwick Square" },
  "Armitage, Lady Constance":  { area: "4", address: "3 Warwick Square" },
  "Cornwallis, Lady Augusta":  { area: "4", address: "14 Eccleston Square" },
  "Fitzroy, Mr. Theodore":     { area: "4", address: "22 Belgrave Road" },
  "Merrilow, Mrs. Sarah":      { area: "4", address: "9 Tachbrook Street" },
  "Culverton, Sir Robert":     { area: "4", address: "7 St George's Square" },
  "Straker, Mr. John":         { area: "4", address: "18 Lupus Street" },
  "Farintosh, Mrs. Violet":    { area: "4", address: "9 Pimlico Road" },       // not on map
  "Woodhouse, Mr. Gerald":     { area: "4", address: "14 Pimlico Road" },
  "Woodhouse, Mrs. Clara":     { area: "4", address: "14 Pimlico Road" },

  // ── Westminster & St James's (Area 5) ───────────────────────────────────

  "Brackenbury, Mr. Richard":  { area: "5", address: "The Reform Club, Pall Mall" },
  "Cantlemere, Lord":          { area: "5", address: "The Athenaeum Club, Pall Mall" },
  "Morrison, Sir Alistair":    { area: "5", address: "9 Pall Mall" },
  "Sutherland, Cmdr. Philip":  { area: "5", address: "14 Whitehall" },
  "Bellingham, Mr. Arthur":    { area: "5", address: "7 Queen Anne's Gate" },
  "Milverton, Mr. Charles":    { area: "5", address: "14 Queen Anne's Gate" },
  "Gregson, Inspector Tobias": { area: "5", address: "Scotland Yard, Whitehall" },
  "Kemp, Inspector Walter":    { area: "5", address: "Scotland Yard, Whitehall" },
  "Trelawney, Mr. Edmund":     { area: "5", address: "3 Birdcage Walk" },
  "Soames, Rev. Mr.":          { area: "5", address: "12 Birdcage Walk" },
  "Holmes, Mr. Mycroft":       { area: "5", address: "The Diogenes Club, Pall Mall" }, // not on map

  // ── Strand & Trafalgar Square (Area 6) ──────────────────────────────────

  "Pinner, Mr. Arthur":        { area: "6", address: "14 Villiers Street" },
  "Crabbe, Mr. Herbert":       { area: "6", address: "21 Villiers Street" },
  "Trevithick, Mr. James":     { area: "6", address: "38 Strand" },
  "Dacre, Mrs. Harriet":       { area: "6", address: "9 John Street" },
  "Dacre, Mr. Leonard":        { area: "6", address: "9 John Street" },
  "Windibank, Mr. James":      { area: "6", address: "22 Adam Street" },
  "Neville, Mr. St. Clair":    { area: "6", address: "7 Cecil Street" },
  "St. Simon, Lord Robert":    { area: "6", address: "3 Northumberland Avenue" },
  "Osborne, Miss Frances":     { area: "6", address: "Simpson's, Strand" },    // not on map

  // ── Holborn & Covent Garden (Area 7) ────────────────────────────────────

  "Streatfield, Mrs. Beatrice": { area: "7", address: "17 Drury Lane" },
  "Munro, Mr. Grant":           { area: "7", address: "14 Holborn" },
  "Norbury, Mrs. Helen":        { area: "7", address: "22 Holborn" },
  "Dobbins, Mr. Samuel":        { area: "7", address: "22 Bow Street" },
  "Cubitt, Mr. Hilton":         { area: "7", address: "31 Bow Street" },
  "Charpentier, Madam":         { area: "7", address: "9 Kingsway" },
  "Soames, Mr. Hilton":         { area: "7", address: "7 Lincoln's Inn Fields" },
  "Garrideb, Mr. Nathan":       { area: "7", address: "14 Long Acre" },
  "Westbury, Miss Violet":      { area: "7", address: "42 Kingsway" },         // not on map

  // ── Fleet Street & Temple (Area 8) ──────────────────────────────────────

  "Neville, Mr. Rupert":       { area: "8", address: "23 Fleet Street" },
  "Dorak, Mr. Peter":          { area: "8", address: "23 Fleet Street" },
  "Stanger, Miss Clara":       { area: "8", address: "17 Fleet Street" },
  "Phelps, Mr. Percy":         { area: "8", address: "3 Chancery Lane" },
  "Garrideb, Mr. John":        { area: "8", address: "14 Chancery Lane" },
  "Porlock, Mr. Fred":         { area: "8", address: "9 Bouverie Street" },
  "Melas, Mr. Paul":           { area: "8", address: "4 Bouverie Street" },
  "Staunton, Mr. Godfrey":     { area: "8", address: "31 Shoe Lane" },
  "Clevering, Mr. Thomas":     { area: "8", address: "78 Fleet Street" },      // not on map

  // ── The City (Area 9) ───────────────────────────────────────────────────

  "Wilson, Mr. Jabez":         { area: "9", address: "14 Cheapside" },
  "Clay, Mr. John":            { area: "9", address: "22 Cheapside" },
  "Merryweather, Mr. John":    { area: "9", address: "The Bank of England, Threadneedle Street" },
  "Holder, Mr. Alexander":     { area: "9", address: "7 Cornhill" },
  "Holder, Mr. Arthur":        { area: "9", address: "7 Cornhill" },
  "Openshaw, Mr. John":        { area: "9", address: "22 Lombard Street" },
  "Gurney, Mr. Samuel":        { area: "9", address: "3 Wood Street" },
  "Lestrange, Mr. Victor":     { area: "9", address: "7 Wood Street" },
  "Brunton, Mr. Richard":      { area: "9", address: "18 Bartholomew Lane" },
  "Keene, Mr. Thomas":         { area: "9", address: "4 King William Street" }, // not on map

  // ── Aldgate & Whitechapel (Area 10) ─────────────────────────────────────

  "Lascar, Mr. Hugh":          { area: "10", address: "The Princess Alice, Commercial Street" },
  "Drebber, Mr. Enoch":        { area: "10", address: "47 Whitechapel Road" },
  "Stangerson, Mr. Joseph":    { area: "10", address: "3 Goulston Street" },
  "Kirwan, Mr. William":       { area: "10", address: "18 Leman Street" },
  "Fergusson, Miss Martha":    { area: "10", address: "22 Whitechapel Road" },
  "Pepper, Mr. Silas":         { area: "10", address: "9 Petticoat Lane" },
  "Doyle, Mrs. Bridget":       { area: "10", address: "31 Duke Street, Aldgate" },
  "Riordan, Mr. Patrick":      { area: "10", address: "56 Commercial Road" },  // not on map

  // ── Shoreditch & Bethnal Green (Area 11) ────────────────────────────────

  "Oldacre, Mr. Jonas":        { area: "11", address: "14 Shoreditch High Street" },
  "Blessington, Mr. Percy":    { area: "11", address: "7 Hoxton Square" },
  "Woodley, Mr. Jack":         { area: "11", address: "22 Old Street" },
  "Croker, Captain Jack":      { area: "11", address: "14 Old Street" },
  "Millington, Mr. Henry":     { area: "11", address: "18 Hackney Road" },
  "Millington, Mrs. Ruth":     { area: "11", address: "18 Hackney Road" },
  "Fenn, Mr. George":          { area: "11", address: "4 Curtain Road" },
  "Tanner, Mr. Joseph":        { area: "11", address: "42 Bethnal Green Road" }, // not on map

  // ── Islington & King's Cross (Area 12) ──────────────────────────────────

  "Hatherley, Mr. Victor":     { area: "12", address: "14 Pentonville Road" },
  "Hatherley, Miss Jane":      { area: "12", address: "14 Pentonville Road" },
  "Ferrier, Miss Lucy":        { area: "12", address: "22 Upper Street" },
  "Murillo, Mr. Don":          { area: "12", address: "7 Caledonian Road" },
  "Roylott, Dr. Grimesby":     { area: "12", address: "18 Barnsbury Street" },
  "Mortimer, Dr. James":       { area: "12", address: "3 Amwell Street" },
  "Brunton, Mr. Alfred":       { area: "12", address: "4 Duncan Terrace" },
  "MacPherson, Mr. Neil":      { area: "12", address: "37 Pentonville Road" }, // not on map

  // ── London Bridge & Southwark (Area 13) ─────────────────────────────────

  "Small, Mr. Jonathan":       { area: "13", address: "14 Borough High Street" },
  "Trevor, Mr. Victor":        { area: "13", address: "The George Inn, Borough High Street" },
  "Bartholomew, Mr. Thomas":   { area: "13", address: "3 Bermondsey Street" },
  "Turner, Mr. John":          { area: "13", address: "14 Bermondsey Street" },
  "Cairns, Mr. Patrick":       { area: "13", address: "9 Union Street" },
  "Cairns, Mrs. Ellen":        { area: "13", address: "9 Union Street" },
  "Tonga":                     { area: "13", address: "7 Tooley Street" },
  "Fordham, Mr. Ezekiah":      { area: "13", address: "3 Clink Street" },      // not on map

  // ── Lambeth & Vauxhall (Area 14) ────────────────────────────────────────

  "Fordham, Mrs. Grace":       { area: "14", address: "14 Lambeth Walk" },
  "Fordham, Mr. Silas":        { area: "14", address: "14 Lambeth Walk" },
  "Cushing, Miss Susan":       { area: "14", address: "3 Black Prince Road" },
  "Cushing, Miss Mary":        { area: "14", address: "3 Black Prince Road" },
  "Trevithick, Dr. William":   { area: "14", address: "22 Albert Embankment" },
  "Henderson, Mr. Harold":     { area: "14", address: "14 Kennington Road" },
  "Crosby, Inspector":         { area: "14", address: "18 Lambeth High Street" },
  "Ronder, Mrs. Eugenia":      { area: "14", address: "31 Vauxhall Bridge Road" }, // not on map

  // ── Regent's Park (Area 15) ──────────────────────────────────────────────

  "Bellamy, Miss Flora":       { area: "15", address: "17 Park Crescent" },
  "Turner, Sir Geoffrey":      { area: "15", address: "4 Park Crescent" },
  "Turner, Lady Dorothy":      { area: "15", address: "4 Park Crescent" },
  "Sinclair, Lord St. Simon":  { area: "15", address: "3 Chester Terrace" },
  "Barclay, Colonel James":    { area: "15", address: "The Regent's Park Barracks, Albany Street" },
  "Barclay, Mrs. Nancy":       { area: "15", address: "18 Albany Street" },
  "Kemp, Mr. Isadora":         { area: "15", address: "31 Robert Street" },
  "Davenport, Miss Alice":     { area: "15", address: "9 Outer Circle" },
  "Adler, Miss Irene":         { area: "15", address: "The Holme, Outer Circle" },  // not on map

};
