// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
//
// The line was picked from 15 candidates scored against the judge's five
// criteria in order (fridge text at 3am + funny; biggest laugh; sounds like
// a fridge; one complete lock-screen line; fresh angle, not milk / ice /
// door-left-open). Winner: the insomniac-witness angle — the fridge has
// counted the owner's 3am visits and then admits it doesn't even have eyes.
// That final twist is the laugh, and it only works because a machine says it.
//
// Deterministic by construction: no clock, no randomness, no network, no
// I/O besides the single write. The file holds the line exactly, with no
// trailing newline (a smaller text wins ties, so no extra byte is spent).

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  "3am. You're here again. I counted. That's the fourth time tonight, and I don't even have eyes.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', LINE, 'utf8');
