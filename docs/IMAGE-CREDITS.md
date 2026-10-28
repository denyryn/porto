# Placeholder images

These files are stand-ins so the layout can be judged with real pixels. Replace them
with the real assets listed in `docs/PLAN.md §7`; nothing in the site depends on them
beyond the paths in `src/constants/`.

All are downscaled and cropped to the slot aspect (cards 4:3, portrait 4:5).
Cards 4–6 have no visual by design — that work is under NDA.

Project visuals live one folder per card, numbered in display order:
`public/images/work/<slug>/01.webp` is the cover, `02.webp`, `03.webp`, … follow it in
the card's carousel.

`portrait.webp`, `work/competition/01.webp`, and `work/ihdc/01.webp` are real assets, not placeholders.
The three `work/*` files are currently unreferenced — the work cards render text-only — but stay on disk
for when visuals return.

| File | Source | Author | Licence |
|---|---|---|---|
| `work/katresna/01.webp` | [Interior of the library at Amantaka, Luang Prabang](https://commons.wikimedia.org/wiki/File:Interior_of_the_library_at_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg) | Wikimedia Commons contributor | CC BY-SA 4.0 |

The CC BY / CC BY-SA files need attribution if they ever ship. They are placeholders,
so the intent is to delete them, not to credit them.
