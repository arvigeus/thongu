import type { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        "vn-red": "#A52422",
        "vn-yellow": "#C5B358",
      },
    },
  },
} as Options;
