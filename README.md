# Github Octicons icons icons for deno / Preact

**License** [MIT](https://github.com/primer/octicons/blob/master/LICENSE)

**Project** [https://octicons.github.com/](https://octicons.github.com/)

[See available icons here](https://react-icons.deno.dev/go)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/go":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-go@1.0.10/mod.ts",
    "react-icons/go/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-go@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib go

```ts
import { GoAlert } from "https://deno.land/x/react_icons_go@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { GoAlert } from "react-icons/go"
```

## import a single icon, downloading just one icon

```ts
import { GoAlert } from "react-icons/go/GoAlert.ts"
```

or using default export

```ts
import GoAlert from "react-icons/go/GoAlert.ts"
```

