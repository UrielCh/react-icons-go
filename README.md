# Github Octicons icons icons for deno / Preact

**License** [MIT](https://github.com/primer/octicons/blob/master/LICENSE)

**Project** [https://octicons.github.com/](https://octicons.github.com/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=go)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/go":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-go@1.0.4/mod.ts",
    "react-icons/go/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-go@1.0.4/ico/",
  }
}
```

## Direct import sample

```ts
import { GoAlert } from "https://deno.land/x/react_icons_go@1.0.4/mod.ts"
```

## import_map import sample

```ts
import { GoAlert } from "react-icons/go"
```

## minimal import

```ts
import { GoAlert } from "react-icons/go/GoAlert.ts"
```

## minimal import using default export

```ts
import GoAlert from "react-icons/go/GoAlert.ts"
```

