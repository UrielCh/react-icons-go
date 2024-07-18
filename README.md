# Github Octicons icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/go)](https://jsr.io/@preact-icons/go)

**License** [MIT](https://github.com/primer/octicons/blob/master/LICENSE)

**Project** [https://octicons.github.com/](https://octicons.github.com/)

[See available icons here](https://react-icons.deno.dev/go)

## install the module

```bash
deno add @preact-icons/go
dnpx jsr add @preact-icons/go
pnpm dlx jsr add @preact-icons/go
bunx jsr add @preact-icons/go
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { GoAlert } from "@preact-icons/go"
```

## import a single icon, downloading just one icon

```ts
import { GoAlert } from "react-icons/go/GoAlert"
```

or using default export

```ts
import GoAlert from "react-icons/go/GoAlert.ts"
```
