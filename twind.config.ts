import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        "vn-red": "#b94e5e",
        "vn-yellow": "#e3c996",
      },
    },
  },
} as Options;
