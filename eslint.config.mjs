import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Stylistic — we use straight ASCII apostrophes intentionally, browsers render fine.
      "react/no-unescaped-entities": "off",
      // App router project — `pages/` is unused. Rule misfires on root `<a href="/">` links
      // when the route is intentionally a hard reload (e.g. from /portal back to home).
      // Real `<Link>` usage is already in place where needed.
      "@next/next/no-html-link-for-pages": "off",
      // Demo previews intentionally use raw `<img>` because they simulate non-Next.js
      // client websites; HomeNarrative also uses raw <img> for hero/marquee art with manual control.
      "@next/next/no-img-element": "off",
      // React 19 strict rules — false positives in Three.js / R3F code where mutating
      // camera position, texture colorSpace, etc. inside useFrame is the documented pattern.
      "react-hooks/immutability": "off",
      "react-hooks/refs": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
