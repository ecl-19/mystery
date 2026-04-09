# The Consulting Detective

A browser-based interactive mystery game inspired by the mechanics of *Sherlock Holmes Consulting Detective* — using a Victorian map of London, a street directory, informants, and newspapers to investigate cases set in 1890s London.

---

## How to Play

1. Select a case from the landing page
2. Read the **Case File** for the scenario briefing
3. Use the tools in the right panel to investigate:
   - **Newspapers** — read press coverage for leads and background
   - **Directory** — look up a person or establishment by name to find their area and address
   - **Informants** — consult contacts for tips
   - **Map** — click a numbered area pin to see its addresses, then click an address to visit it
4. Some locations are locked until you have gathered the right information elsewhere
5. When you are confident, click **Solve Case** and answer the questions

Your score is the number of locations visited (including blank ones) and informants consulted. The fewer the better.

**Save / Load** — save your progress as a code string at any point and paste it back to resume. Save codes are case-specific; a save from one case cannot be loaded into another.

---

## Running the Game

Plain HTML/JS — no build step, no dependencies. Serve over HTTP rather than opening files directly:

```bash
cd mystery
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## Project Structure

```
mystery/
  index.html          # Case selection landing page
  game.html           # Game engine shell (loaded as game.html?case=N)
  style.css           # Victorian theme
  game.js             # Game logic
  locations.js        # 15 area pins, each with ~17 addresses (fixed across cases)
  directory.js        # Shared street directory (~120 Victorian names)
  map.png             # London map image (not in repository)
  stories/
    case1.js          # Case One: The Aldgate Cipher
    case2.js          # Case Two: The Woodhouse Affair
```

---

## Adding a New Case

1. Copy `stories/case1.js` to `stories/case3.js` (or the next number) and edit the `STORY` object
2. Add a card to the `#case-list` in `index.html` linking to `game.html?case=3`

No other files need to change.

### Story file structure

| Field | Description |
|---|---|
| `meta.title` | Case title shown in the header |
| `intro` | Opening briefing shown on load |
| `outro` | Solution explanation shown after submitting answers |
| `newspapers` | Array of newspaper objects (see below) |
| `directory` | Case-specific directory entries — merged with the shared `directory.js` at startup; case entries take precedence |
| `informants` | Array of `{ name, text }` contacts |
| `locations` | Story content keyed by `"areaId:address"` (see below) |
| `questions` | Array of `{ text, answer }` — answer can be a string or array of accepted strings |

### Locations

Location keys combine the area ID and the exact address string from `locations.js`:

```js
"5:Scotland Yard, Whitehall": {
  text: "What the player reads on arrival.",
  sets_state: "flag_name",          // string or array — flags set by this visit
  requires_state: "other_flag",     // string or array — flags needed to enter
  locked_text: "Shown if locked."   // optional; defaults to a generic message
}
```

Addresses not listed in the story file show a blank "nothing relevant" message and still count toward the player's score when visited.

### Newspapers

```js
{
  name: "The Morning Chronicle",
  date: "Monday, 3rd November, 1895",
  edition: "Morning Edition",
  price: "One Penny",
  articles: [
    { headline: "Suspicious Death in Aldgate", text: "Body text here..." },
    { headline: "Red Herring Article",         text: "Unrelated filler..." }
  ]
}
```

Articles open in a modal overlay styled as a Victorian newspaper (two-column layout). Include one relevant article and several red herrings per paper.

### Directory

Case-specific entries use the same format as `directory.js`:

```js
directory: {
  "Harrington, Edwin": { area: "10", address: "14 Aldgate High Street" },
  "Scotland Yard":     { area: "5",  address: "Scotland Yard, Whitehall" }
}
```

The directory supports fuzzy matching — short words must match exactly, longer words tolerate one or two character differences. The shared `directory.js` contains ~120 background names across all 15 areas; story entries override shared entries of the same name.

### Pin positions

Area coordinates in `locations.js` are percentage positions on the map image (`x: 0–100, y: 0–100`). To reposition a pin, find the pixel coordinates in an image editor and divide by the image dimensions × 100.

---

## Map Credit

Map image: *London towards the close of the 19th Century* (1890s pictorial map).  
Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:1890s_pictorial_map_of_London_-_London_towards_the_close_of_the_19th_century.jpg) — Public domain.
