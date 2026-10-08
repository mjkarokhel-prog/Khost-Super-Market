# Khost Super Market - Fixes

## Run the project

```bash
npm install
npm run dev
```

## Main fixes

- Corrected `./components/...` imports to the actual `src/Component/...` folder.
- Added the missing `SectionHeading` import in `About.jsx`.
- Kept Tailwind CSS on version 3 (`tailwindcss ^3.4.19`).
- Replaced Tailwind v4-style/unsupported utility names with Tailwind v3-compatible classes.
- Added Tailwind v3 configuration for `font-heading`, `coffee-bg`, `menu-bg`, and the custom animations.
- Added the runtime dependencies used by the source code: `react-icons` and `@mojs/core`.
- Removed the unused Vite starter `App.css`.

The project does not use Tailwind v4 directives such as `@theme` or `@utility`.
