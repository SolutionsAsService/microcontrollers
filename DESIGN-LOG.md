# DESIGN-LOG — The Microcontroller Encyclopedia (DADA)

Carry-forward read first: `CARRY-FORWARD.md` beside this file (facts measured in earlier runs on this
medium).

## 1. Traversal Plan

**Brief, one sentence:** Redo the Microcontroller Encyclopedia so each page carries its own bold graphic
identity — a generated board portrait at display scale — under one shared system, professional enough to
be trusted as a hardware reference.

**Why this run exists.** The owner's standing complaint about recent DADA runs: they land on "clean and
neutral" and never reach a *unique bold graphic on different pages*. That complaint is the brief, and it
is also a claim about the artifact, so it was measured first (R0, below) rather than assumed.

### Step 0. Tooling inventory

| Job | Tool used | Notes |
|---|---|---|
| Render/navigate the anchor graph | **none available** — no Mermaid renderer or graph tool in this session | Mermaid text kept in this log; `visited/kept/adapted/scrapped` classes written by hand |
| Compute the Frontier | **none** — hand-listed from the edge lines of `references/anchor-graph.md` (read with Grep) | edges quoted verbatim below |
| Track workflow state | **TaskCreate/TaskUpdate** (deferred task tools, loaded for this run) | one task per Frontier candidate taken; checklist also mirrored here |
| Run the panel | **Agent tool** (sub-agents), one per literary reference, max 3 at a time | each seat writes `<panel_dir>/<seat>.md` as its last action |
| Collect panel reports | `scripts/collect_panel.py` from the dada skill + panel directory on disk | |
| Render the artifact | Playwright 1.64.1 driving installed Chrome (`channel="chrome"`); Pillow 13 for crops | playwright's own browsers are not installed; `p.chromium.launch()` fails, `channel="chrome"` works |
| Measure | Playwright DOM measurement + a contrast script; Pillow for pixel populations | CRLF/encoding: files are UTF-8; PowerShell `Get-Content` renders them as cp1252 |
| Persist the log | `DESIGN-LOG.md` + `CARRY-FORWARD.md` in the repo | |

### Mode: **Adaptive**

The site is a public reference people arrive at from a search result to look up a pinout; it serves an
audience, so reception binds. Governing criterion **MAYA (Most Advanced Yet Acceptable, Raymond
Loewy)**: the advanced pole (a bold, page-specific graphic) and the acceptable pole (findable, legible,
contrast-passing reference) must both hold; if either is weak the move is revised.

### Seed (labels copied verbatim from `references/anchor-graph.md`)

- **Stance** — `Make It Bigger (Paula Scher)` — scale as the argument; type as environment, not label.
- **Rule** — `Point and Line to Plane (Wassily Kandinsky)` — build every graphic from primitives:
  point = pin, line = bus, plane = board body.
- **Rule** — `A Primer of Visual Literacy (Donis A. Dondis)` — emphasis and subordination, and the
  visual literacy of the reader who has never seen a pinout.
- **Breaker** — `The Medium Is the Massage (Marshall McLuhan, Quentin Fiore)` — the page's form is its
  content: the portrait of the board is the information, not decoration around it.
- **Counterpoint (dotted)** — `The Vignelli Canon (Massimo Vignelli)`, reached by
  `scher -.->|contrasts with| vignelliCanon`, and through it `vignelliCanon -->|systems in| nycta`
  (`NYCTA Graphics Standards Manual (Massimo Vignelli, Bob Noorda)`). Scher's expressive scale against
  Vignelli's one-system discipline is the exact tension the brief asks for: bold per page, identical
  rules throughout.

Chain as written:

```
Make It Bigger (Paula Scher)
  -.->|contrasts with| The Vignelli Canon (Massimo Vignelli)
        -->|systems in| NYCTA Graphics Standards Manual (Massimo Vignelli, Bob Noorda)
Point and Line to Plane (Wassily Kandinsky) -->|informs| A Primer of Visual Literacy (Donis A. Dondis)
A Primer of Visual Literacy (Donis A. Dondis) -->|systematizes| Principles of Form and Design (Wucius Wong)
The Medium Is the Massage (Marshall McLuhan, Quentin Fiore) -.->|form as message echoed in| The End of Print (David Carson, Lewis Blackwell)
```

### Premortem, round R0 — the inherited artifact, measured

Panel: 7 seats (Debord, Shklovsky, Holmes, Mace, Bringhurst, Tufte, Sharp). Screenshots and DOM
measurements at `shots/q0-*`.

**Measured before the panel convened** (so the panel judged evidence, not a description):

| Fact | Procedure | Value |
|---|---|---|
| Images, SVG or canvas in the whole site | count `<img`, `<svg`, `<canvas` across all 8 HTML files | **0 / 0 / 0** — the site is text and tables only |
| Distinct hues in `styles.css` | regex `#[0-9a-fA-F]{6}` in `styles.css`, grouped | **all neutrals** — #f5f5f5 ×6, #fafafa ×5, #ffffff ×3, then greys and near-blacks. No chromatic colour anywhere |
| Pages | count HTML files | 8 (index + 7) |
| Density per board page | count `<h2` and `<table` | ESP32 25/16 · Nano 26/12 · Cameras 25/10 · RFID 25/12 · LCD-OLED 23/13 · Pico 60/19 · About 15/3 · index 17/6 |
| Shared structure | grep for `<header>`, `<main>`, `<footer>` | present on all 8 — a system can be swapped in wholesale |
| Type | `font-family` declarations in `styles.css` | two stacks only: `--font-sans`, `--font-mono` |

The owner's complaint is therefore **not a taste quibble but a measurement**: the site has no graphic
layer at all. R0 is not being asked whether the site is ugly; it is being asked what a bold, page-
specific graphic must not destroy.

## Frontier

| Candidate | Reached via (edge label, direction) | From anchor | Status |
|---|---|---|---|
| Give each page a generated board portrait at display scale | outgoing, Breaker | `The Medium Is the Massage` | OPEN |
| One shared system: grid, type scale, one rule for every page's portrait | dotted counterpoint, incoming | `scher -.->|contrasts with| vignelliCanon` | OPEN |
| Build the portraits from point/line/plane primitives | outgoing solid | `kandinsky -->|informs| dondis` | OPEN |
| Emphasis/subordination inside dense pinout tables | outgoing solid | `dondis -->|systematizes| wong` | OPEN |
| Break the grid on the masthead | outgoing solid from Breaker's dotted neighbour | `mcluhan -.->|form as message echoed in| carson` | OPEN |
| Delete the competing neutral system it inherits | deletion review, step 2f | — | TAKEN (M1) |

## 3. Panel Reports

### Panel, WHOLE, round R0 (artifact examined: `shots/q0-*`, `styles.css` at 27,485 bytes, all 8 pages)

| Critic | Anchor used | Observed in the work | Verdict | Requested change |
|---|---|---|---|---|
| Debord | Society of the Spectacle, Thesis 1 | 0 `mm` anywhere in `pages/`; the stylesheet names its own source "Vercel-Inspired"; `.danger-row td` is lighter than the notice | OBJECT, **Andon** | State footprint and pitch per board; emit the SVG from those numbers |
| Shklovsky | Art as Technique | `.card.safe` and `.card.danger` both `#000000`; `.danger-row td` #f5f5f5 on #fff (~3% delta) | PASS (conditional) | Distinguish hazard by a channel other than lightness |
| Holmes | Mismatch | 41-row Pico table at `min-width: 580px` behind an 88px sticky column; one mode of access to a spatial object | OBJECT (Andon if the portrait is decoration) | portrait pins ↔ table rows, keyboard reachable |
| Mace | Principles of Universal Design, 4 & 5 | safe/danger identical; 9px `th`; no `scope`, no `caption`; Pico page 32,073px tall with zero `id=` | OBJECT, **Andon** | redundant hazard encoding: a word plus a distinct colour per card |
| Bringhurst | Elements of Typographic Style §2.1.2 | `--reading-width: 920px` declared and used zero times; paragraphs run ~177 characters at 15px | OBJECT, **Andon** | redefine to `30em` and actually apply it |
| Tufte | Visual Display, ch. 4 data-ink | Pico 41 rows; 17 of 40 non-digital; `.danger-row` used 0 times; hero `radial-gradient` carries no data | OBJECT, **Andon** | generate the portrait *from* the table; pads filled from each row's own value |
| Sharp | How Brands Grow | borrowed Vercel pixels everywhere; nothing ownable survives the first viewport | OBJECT | pin a per-page mark into the sticky header, visible at any scroll depth |

Statements of meaning: an encyclopedia that offers the board's algebra and never its body. Artist
questions: is the portrait allowed to be decoration? Critic questions: what is the board's footprint?
Opinions (permitted): five of seven called it a measurement failure, not a taste failure. Andon pulled
by Debord, Mace, Bringhurst and Tufte.

**Resolution of every objection** (all four Andons were measured, not assumed — the premise "the site
states no millimetre" was verified with a grep that returned 0 hits, so none of them could be OVERRULEd):

- Debord → **ADAPT**. Footprints sourced from the manufacturers, not invented: Arduino Nano 45 × 18 mm
  (`docs.arduino.cc/hardware/nano/`: "a length of 45 mm and a width of 18 mm"); Raspberry Pi Pico
  21 × 51 mm (`raspberrypi.com/products/raspberry-pi-pico/`: "21 mm × 51 mm form factor"). The
  ESP32-S3-WROOM-1 datasheet PDF could not be read in this session, so that page — and the three
  peripheral pages with no single authoritative footprint — print **"footprint: not stated"** and their
  drawings are labelled **"schematic · footprint not stated here"**. No millimetre is drawn that was not
  sourced. Test, per page: pad count == data-row count of that page's own pinout table.
- Mace + Shklovsky → **ADAPT**. Every `.card.safe|analog|warning|danger` now carries a word (SAFE /
  INPUT-ONLY / CAUTION / RESERVED) and a distinct `border-top-color`; `.danger-row` and the four card
  states carry a diagonal hatch that survives greyscale.
- Bringhurst → **ADAPT**. `--reading-width: 30em`, applied to `p, ul, ol, .notice, .warning-box,
  .danger-box`.
- Tufte → **ADAPT**. The portrait is generated from the page's own table: one pad per data row, filled
  from that row's own electrical value (ground solid grey, supply in the accent, ADC at 35% fill,
  digital unfilled), pads 1..n/2 down the left rail and the rest back up the right so **pin 40 (VBUS)
  lands beside pin 1 (GP0)**; the same classification is applied back to the rows as `.row--gnd|pwr|adc`.
  The hero's `radial-gradient` went with the deleted stylesheet.
- Holmes → **ADAPT** (M2). Pads are focusable with per-pin `aria-label`; focusing or hovering either the
  pad or the row highlights both.
- Sharp → **ADAPT** (M3). The nav is sticky and carries a 26px per-page mark.
- **Deviation recorded:** Tufte asked for the non-digital rows to take `.danger-row`. They are tagged
  `.row--pwr|gnd|adc` instead — calling a 3V3 pin "danger" would be false, and the texture he wanted is
  applied under an honest name. `.danger-row` keeps its meaning and is still used on the ESP32 page.

### Moves

- **M1 (BREAK)** the generated board portrait, per the Decision Record above. Measured: 1 `<svg
  class="portrait">` per board page; pad count equals that page's own table row count on every page.
- **M2 (KEEP-THE-RULE)** redundancy of hazard and of pin identity — word + colour + texture, and the
  pad ↔ row link. Anchors `The Principles of Universal Design` / `Mismatch`.
- **M3 (KEEP-THE-RULE)** the measure and the sticky mark. Anchors `The Elements of Typographic Style` /
  `How Brands Grow`.
- **M4 (deletion)** the inherited 2,206-line stylesheet is deleted and replaced by one 6.9 kB system.
  Retained-value ledger: the content (every table, every row) is untouched; the deletion must preserve
  lookup, so nothing in `<main>` was restructured, only the header, nav and footer were swapped.

### 2g. Figures the artifact prints, re-measured at its final state

| Printed | Procedure | Value at final state | Result |
|---|---|---|---|
| Pad count per board page | count `[data-pin]` in the page's `svg.portrait` vs count of data rows in its own pinout table | Nano 22/22 · Pico 40/40 · ESP32 34/34 · cameras 12/12 · RFID 10/10 · LCD-OLED 16/16 | reproducible |
| "45 × 18 mm" (Nano) | quoted from `docs.arduino.cc/hardware/nano/` | 45 × 18 mm | sourced |
| "21 × 51 mm" (Pico) | quoted from `raspberrypi.com/products/raspberry-pi-pico/` | 21 × 51 mm | sourced |
| "footprint: not stated" (ESP32, cameras, RFID, LCD-OLED, about) | no authoritative footprint could be read this session | printed as "not stated", drawing labelled schematic | honest |
| Characters per rendered line | Range rects per `<p>` at 1280px | min 41, max 72, median ~59 | Bringhurst's test (max ≤ 75, median ≥ 45) passes |
| Four hazard tokens | `getComputedStyle` + text content | SAFE / INPUT-ONLY / CAUTION / RESERVED, borders #1B7F4B / #1769C4 / #A96400 / #C0202C | distinct |
| Pad ↔ row link | dispatch focus on pad 3, assert both carry `is-on` | PASS | reproducible |
| Mark visible at 50% scroll | `getBoundingClientRect` of `.nav .mark svg` after scrolling to half height | true | reproducible |
| Horizontal overflow at 393px | `document.documentElement.scrollWidth` vs `innerWidth` | 393 vs 393 | no overflow |

### Status of this run: **incomplete**

- **S1** Frontier has no OPEN items — met.
- **S2** No WHOLE round has been run against the *new* artifact; R0 judged what the run inherited.
  **Not met.**
- **S3** **Not met** (depends on S2).
- **S4** The ambition push (the portrait at display scale) is measured: 0 → 1 SVG per page, pad count
  equal to the page's own row count, sticky mark visible at depth. Partially met; not re-paneled.
- **S5** Every dotted edge: `scher -.->|contrasts with| vignelliCanon` applied (one system, eight
  accents); `mcluhan -.->|form as message echoed in| carson` declined — Carson's illegibility would
  break the acceptable pole of MAYA on a pinout.

**Resume point:** run a WHOLE panel round on `shots/q1-*` with all seven seats, then re-run 2g. Until
then the artifact is measured but not paneled, and this log says so rather than implying it passed.

### Carry-Forward Ledger (facts about this medium, measured in this run)

- A `<tr>` written outside `<table>` is dropped by the HTML parser with no error; a build script that
  replaces a table with its rows alone silently loses the whole table. Splice with a capturing
  `re.split` that keeps the wrapper. Found it by counting `tr[data-pin]` in the DOM (0) against the file
  (40).
- `position: sticky` on an element whose parent is the header unsticks as soon as the header leaves the
  viewport. The sticky element has to be a sibling of the scrolling content.
- A relative `src` on a page in a subdirectory resolves against that subdirectory; pages under `pages/`
  need `../assets/site.js`.
- Rows whose first cell is a `<th>` are dropped by any parser that strips `<th>` before counting — read
  cells from `th` and `td` alike (Pico lost a pin this way: 39 instead of 40).

### 5. Compliance Check
- [x] Tooling inventory done; tooling used as listed, "none available" for graph rendering
- [x] Mode stated (Adaptive) with the reason
- [x] Seed with exact labels, one dotted counterpoint, living Frontier
- [x] At least one BREAK move (M1); no move quota used to stop
- [x] Decision Record written before the moves (M1 full; M2–M4 recorded above in brief — M2 and M3 were
      made while four Andons were open and are recorded after the fact, which is a deviation)
- [x] R0 panel, 7 seats, each citing something observable
- [x] Every OBJECT resolved as ADAPT, with one deviation recorded
- [ ] WHOLE round on the new artifact; S2 and S3 not met — **run incomplete**
- [x] Every figure the artifact prints re-measured at the final state with its procedure
- [ ] Anchor Ledger and live graph not updated (no graph tooling; to be written at the resume point)
- [x] Double loop below
- [x] This reply states the mode, tools, stop conditions and skips

### Double loop
The panel did not fail the work; the *instrument* did, twice, in the same way it did on the portfolio
run: my build script reported success while the DOM disagreed. The pad count in the file was 40 and in
the DOM 0, because I had replaced a table with its rows. Believing the file instead of measuring the
browser is the same error as believing a screenshot instead of the live page. **Graph amendment:** add
a node "Measure the rendered artifact, not the source" to the Panel Method cluster with the
edge `c_genchi -->|verify the DOM against the source before tabling a premise for| CRITICS`.


## 2. Decision Records

## Move M1: A generated board portrait on every page  (BREAK)
Depends on: none
Anchors: Stance `Make It Bigger (Paula Scher)` | Rule `Point and Line to Plane (Wassily Kandinsky)` |
Breaker `The Medium Is the Massage (Marshall McLuhan, Quentin Fiore)` |
Counterpoint `The Vignelli Canon (Massimo Vignelli)` (dotted: `scher -.->|contrasts with| vignelliCanon`)
Intent: each page opens with a portrait of the thing it is about, drawn at display scale — the board as
a plane, its pins as points, its buses as lines — set at a size that makes the masthead an environment
rather than a label. The portrait is generated, not drawn: one script, one spec per board, so eight
pages differ in geometry and accent and in nothing else.
Formal argument: McLuhan's claim is that the form carries the content; a page about a 51 × 21 mm board
should show that board at 51 × 21 proportions before it lists a single pin. Kandinsky supplies the
vocabulary that keeps it a graphic rather than an illustration (point, line, plane only). Scher
supplies the scale. Vignelli — the counterpoint taken in the same move, not deferred — supplies the
fence: identical masthead construction, identical grid and type scale across all eight pages, so the
variation reads as a system with eight instances instead of eight designs.
Alternatives rejected: (a) photography of each board — the repo has none, licensing and accuracy become
dependencies, and a photo cannot be regenerated when a dimension is corrected; (b) one shared hero
image with a per-page tint — answers "bold" but not "unique per page", which is the brief; (c) a
CSS-only geometric motif — cannot carry a real pin count or a real scale bar.
Consequence: the masthead gains one inline SVG per page (a few kB, no network request); the old header
markup is deleted; every page must still pass contrast and 320px width with the portrait in place.
Fence: the rule being broken is "a reference site is a document; keep chrome minimal". That rule exists
because chrome competes with lookup. It is honoured by making the portrait *carry* lookup data (pin
count and dimensions, both printed), not by making it decorative.
Frontier effect: opens the pin-rail candidate (portrait built from the page's own table), the accent-
system candidate, the table-emphasis candidate, and the deletion of the inherited neutral system.
Mode field: Advanced pole — a page-specific graphic at display scale, grounded in `Make It Bigger`.
Acceptable pole — the portrait prints real, auditable numbers (pins, millimetres) and the page still
works with a screen reader, grounded in `WCAG 2.2 Contrast and Perceivability (W3C)`.
