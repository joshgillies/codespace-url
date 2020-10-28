# codespace-url
Get the Github Codespace URL of a forwarded port. 🦕
Ported to Deno from https://www.npmjs.com/package/codespaces-port. 

## Usage

```typescript
import { getCodespaceUrl } from "https://deno.land/x/codespace_url/mod.ts";

console.log(getCodespaceUrl(8000));
// https://64a3c66c-e6d2-47d5-acfa-f6198f6b7ea9-8000.apps.codespaces.githubusercontent.com
```

```bash
deno run --allow-env https://deno.land/x/codespace_url/mod.ts 8000
# https://64a3c66c-e6d2-47d5-acfa-f6198f6b7ea9-8000.apps.codespaces.githubusercontent.com
```