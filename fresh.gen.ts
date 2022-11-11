// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/test.tsx";
import * as $$0 from "./islands/InputPrompt.tsx";
import * as $$1 from "./islands/LetterInput.tsx";
import * as $$2 from "./islands/MultiCharacterInput.tsx";
import * as $$3 from "./islands/Text.tsx";
import * as $$4 from "./islands/WordInput.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/test.tsx": $3,
  },
  islands: {
    "./islands/InputPrompt.tsx": $$0,
    "./islands/LetterInput.tsx": $$1,
    "./islands/MultiCharacterInput.tsx": $$2,
    "./islands/Text.tsx": $$3,
    "./islands/WordInput.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
