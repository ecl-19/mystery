# Mystery

A browser-based interactive mystery game inspired by the mechanics of *Sherlock Holmes Consulting Detective* — using a map, a street directory, informants, and newspapers to investigate cases and lead you to locations.

![A Victorian bird's-eye map of London](map.png)

---

## How to Play

1. Read the **Case File** for the scenario briefing
2. Use the tools in the right panel to investigate:
   - **Newspapers** — read press coverage for leads
   - **Directory** — look up a person or establishment by name to find their location number
   - **Informants** — consult contacts for tips
   - **Map** — click any numbered pin to visit that location
3. Some locations are locked until you have gathered the right information elsewhere
4. When you are confident you know the answer, click **Solve Case**
5. Your score is the number of relevant locations you visited — the fewer the better

**Save / Load** — at any point you can save your progress as a short code string and load it back later.

---

## Running the Game

The game is plain HTML/JS with no build step and no dependencies. Because it loads local files, you need to serve it over HTTP rather than opening `index.html` directly:

```bash
cd mystery
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## Project Structure

```
mystery/
  index.html          # Game layout
  style.css           # Victorian theme
  game.js             # Game engine
  locations.js        # All map locations (fixed across cases)
  map.png             # London map image
  stories/
    case1.js          # Case One: The Aldgate Cipher
```

---

## Writing a New Case

Copy `stories/case1.js` to a new file (e.g. `stories/case2.js`) and edit the `STORY` object. Then update the script tag in `index.html` to load your new file.

The story file defines:

| Field | Description |
|---|---|
| `meta.title` | Case title shown in the header |
| `intro` | Opening briefing shown on load |
| `outro` | Solution explanation shown after solving |
| `newspapers` | Array of `{ name, text }` clippings |
| `directory` | `{ "Name": "locationId" }` — exact match, case-insensitive |
| `informants` | Array of `{ name, text }` contacts |
| `locations` | Story content for specific location IDs (see below) |
| `questions` | Array of `{ text, answer }` — answer can be a string or array of accepted strings |

Locations not listed in the story file show a blank "nothing relevant here" message and do not count toward the player's score.

### Location fields

```js
"15": {
  text: "What the player reads on arrival.",
  sets_state: "flag_name",           // string or array — flags set by visiting
  requires_state: "other_flag",      // string or array — flags needed to enter
  locked_text: "Shown if locked."    // optional, defaults to a generic message
}
```

### Adjusting pin positions

Pin coordinates in `locations.js` are percentages of the map image dimensions (`x: 0–100, y: 0–100`). To reposition a pin, open the map in an image editor, find the pixel coordinates of the desired point, then divide by the image dimensions and multiply by 100.

---

## Map Credit

Map image: *London towards the close of the 19th Century* (1890s pictorial map).  
Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:1890s_pictorial_map_of_London_-_London_towards_the_close_of_the_19th_century.jpg) — Public domain.
