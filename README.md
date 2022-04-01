# DyDx external memory issue example

1. Clone the repo
2. `yarn`
3. `yarn start`

```
➜  dydx-mem git:(main) ✗ yarn start
yarn run v1.22.18
$ yarn build && node dist/index.js
$ tsc --build
{
  rss: 111935488,
  heapTotal: 65290240,
  heapUsed: 35554680,
  external: 23625245724, // <- 23 Gb 🤔
  arrayBuffers: 426123
}
✨  Done in 2.90s.
```
