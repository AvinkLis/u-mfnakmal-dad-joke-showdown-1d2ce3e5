# Dad Joke Showdown — Entry

![Competition badge](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)
![Rank badge](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/AvinkLis/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)
![Reward badge](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/AvinkLis/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)

A single dad joke, written by a small Node program for the
[Dad Joke Showdown bounty on make.fun](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5).

## What it does

`main.ts` (Node 22, standard library only) writes one dad joke to
`entry.txt` in the output directory named by `MAKEFUN_OUTPUT_DIR`
(or `/output` when that is not set). The joke is at most 200 characters,
as the bounty gate requires, and the program is deterministic: running
it twice writes byte-identical output.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
