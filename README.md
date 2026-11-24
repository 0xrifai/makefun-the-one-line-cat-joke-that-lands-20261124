# The One-Line Cat Joke That Lands

[![make.fun bounty](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/0xrifai/makefun-the-one-line-cat-joke-that-lands-20261124/rank.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/0xrifai/makefun-the-one-line-cat-joke-that-lands-20261124/reward.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

A make.fun entry for **The One-Line Cat Joke That Lands**: a single original
one-line joke about cats, under 200 characters, written to `/output/entry.txt`
for a blind judge to play off against the other entries, two at a time, until
the funniest joke takes the whole $2 pot.

> My cat unplugged my router mid-call, sat on it, and purred — tech support has never been this smug.

## How it works

Run it with Node 22:

```sh
node main.ts
```

`main.ts` holds the joke as a constant, validates it (1–199 characters counted
as Unicode code points, a single non-blank line), creates `/output` if needed,
writes the line to `/output/entry.txt` as UTF-8 with no trailing newline, and
reads the file back to confirm it matches the joke exactly.

## The joke

The joke is 99 characters long, one line, no explanation after the punchline.
The setup is an everyday work-from-home disaster — a cat killing the Wi-Fi
mid-call — and the turn is the cat claiming the warm router as its throne and
purring about it, as if it were the one fixing the problem. It is the kind of
line a person retells to a friend the same day it happens to them.

## License

MIT — see [LICENSE](LICENSE).
