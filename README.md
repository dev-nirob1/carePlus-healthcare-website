# Project Architecture & Developer Guide

A complete pattern guide for AI models and developers. This is not documentation of what already exists — it is a blueprint for how to build anything new, consistently.

---

## Tech Stack

| Layer      | Technology                                                   |
| ---------- | ------------------------------------------------------------ |
| Framework  | Vue 3 — Composition API, `<script setup>` only               |
| Router     | Vue Router 4                                                 |
| Build Tool | Vite                                                         |
| CSS System | Custom **Luxe-Grid** (`grid.css` imported inside `main.css`) |
| Icons      | Font Awesome 6 (CDN — no npm install needed)                 |
| Font       | **Outfit** (Google Fonts, loaded in `index.html`)            |

---

## Folder Structure

```
src/
├── assets/
│   ├── grid.css          ← THE GRID SYSTEM — NEVER MODIFY
│   └── main.css          ← Active global styles + utility classes
├── components/
│   ├── Element/          ← Atomic elements, globally registered in main.js
│   └── Section/          ← Global layout wrappers (Navbar, Footer, TopNav)
├── router/
│   └── router.js         ← Merges all route files
└── zems/
    └── Front/
        ├── Components/
        │   ├── Section/  ← Full-width page sections
        │   └── Widget/   ← Reusable card/form components
        ├── Layout/
        │   └── MainLayout.vue  ← Navbar + <RouterView> + Footer
        ├── Pages/        ← Route targets (compose sections here)
        └── Routes/
            └── front_routes.js
```

---

## Entry Point & Bootstrapping

### `main.js`

- Imports `main.css` — and `main.css` itself starts with `@import "./grid.css"` so the grid loads first
- Globally registers all **Element** components (`src/components/Element/`) — no import needed anywhere
- **Only Element components are globally registered.** Everything else (Widgets, Sections) must be explicitly imported where used
- Mounts the app to `#app`

### `App.vue`

```html
<template><RouterView /></template>
```

Nothing else. App.vue is only a router outlet.

### `router.js` → `front_routes.js`

All routes are **children of `MainLayout`**, so every page automatically gets Navbar + Footer:

```js
export const front_routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "home", component: HomePage },
      { path: "/about", name: "about", component: AboutPage },
      { path: "/new-page", name: "new-page", component: NewPage },
      // add new routes here
    ],
  },
];
```

---

## How a Page Is Built

A **page** (`src/zems/Front/Pages/`) is a thin composition file. It does nothing except import and stack section components in order.

```vue
<!-- ExamplePage.vue -->
<script setup>
import HeroSection from "../Components/Section/HeroSection.vue";
import ContentSection from "../Components/Section/ContentSection.vue";
import CtaSection from "../Components/Section/CtaSection.vue";
</script>

<template>
  <HeroSection />
  <ContentSection />
  <CtaSection />
</template>
```

**Rules for pages:**

- No scoped CSS — all styling lives inside sections or widgets
- No business logic — data lives in sections
- No inline styles
- Sections render in document order — sequence matters visually

---

## How a Section Is Built

A **section** (`src/zems/Front/Components/Section/`) is a full-width visual block. It owns its layout, data, and styling.

### Anatomy of a Section

```vue
<script setup>
// Widgets must be explicitly imported — they are NOT globally registered
import SectionTitle from "../Widget/SectionTitle.vue";
import MyWidget from "../Widget/MyWidget.vue";

// For internal navigation links, import RouterLink
import { RouterLink } from "vue-router";

// All data lives here as local const/ref arrays
const items = [{ title: "Item A", description: "...", image: "https://..." }];
</script>

<template>
  <section class="my-section py-5">
    <div class="container">
      <!-- Use SectionTitle widget for the label + heading pattern -->
      <SectionTitle subTitle="Small Label" title="Main Heading" />

      <!-- Luxe-Grid handles all responsive layout -->
      <div class="medium-2 large-3 gap-2 mt-3">
        <MyWidget v-for="item in items" :key="item.title" :item="item" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.my-section {
  background: var(--background-color);
}
/* Nest all child selectors under the section root */
.my-section .title {
  color: var(--primary-color);
}
</style>
```

### Section Rules

- Always wrap content in `<div class="container">`
- Use `py-5` (or `py-3`, `py-4`) for vertical section padding
- Set section background on the root `<section>` element using CSS variables
- All data is local — no Pinia, no API
- Never use inline styles

---

## How a Widget Is Built

A **widget** (`src/zems/Front/Components/Widget/`) is a reusable, self-contained UI unit — a card, form, filter, etc.

### Anatomy of a Widget

```vue
<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="item-card">
    <div class="image">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="card-content">
      <SubTitle>{{ item.title }}</SubTitle>
      <BaseParagraph>{{ item.description }}</BaseParagraph>
      <BaseButton class="bg-primary width-full">Learn More</BaseButton>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  background: var(--white-color);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease-in-out;
}
.item-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}
.item-card .image {
  height: 240px;
  overflow: hidden;
}
.item-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.item-card:hover .image img {
  transform: scale(1.08);
}
.card-content {
  padding: 1.5rem;
}
/* Style global elements by their rendered root class */
.item-card .sub-title {
  color: var(--primary-color);
}
.item-card p {
  color: var(--text-muted-color);
}
</style>
```

### Widget Rules

- Props define all external data — no hardcoded content inside widgets
- Use globally registered elements — **never import them**
- Target their root class in scoped CSS, not the component tag name
- Widgets do not handle layout — the parent section's grid does that

---

## Global Element Components

Globally registered in `main.js`. **Never import them** — use directly in any template.

| Component          | Renders      | Root class   | Notes                                                   |
| ------------------ | ------------ | ------------ | ------------------------------------------------------- |
| `<BaseButton>`     | `<button>`   | `btn`        | Modifier classes: `bg-primary`, `outline`, `width-full` |
| `<BaseTitle>`      | `<h3>`       | `title`      | Card/block titles                                       |
| `<HeroTitle>`      | `<h1>`       | `hero-title` | Hero headings only                                      |
| `<SubTitle>`       | `<h5>`       | `sub-title`  | Card subtitles, labels                                  |
| `<BaseParagraph>`  | `<p>`        | —            | Body text                                               |
| `<BaseImage>`      | `<img>`      | —            | Prop: `:image="url"`                                    |
| `<ListItem>`       | `<li>`       | —            | Wrap in `<ul>`                                          |
| `<InputField>`     | `<input>`    | —            | `v-model` + all `$attrs` (type, placeholder, required…) |
| `<SelectDropdown>` | `<select>`   | —            | `v-model`, children are `<option>` tags                 |
| `<BaseTextArea>`   | `<textarea>` | —            | `v-model`                                               |

**Styling global elements in scoped CSS — target the rendered class:**

```css
.my-section .title {
  font-size: 2rem;
}
.my-section .sub-title {
  color: var(--secondary-color);
}
.my-section p {
  opacity: 0.8;
}
.my-section .btn {
  border-radius: 0.75rem;
}
```

---

## CSS System — The Luxe-Grid

> **`grid.css` is sacred. NEVER modify it.**

### Grid Columns — `{breakpoint}-{columns}`

```html
<div class="medium-2 large-3 gap-2">
  <!-- 1 col mobile → 2 col tablet → 3 col desktop -->
</div>
```

| Prefix     | Activates at |
| ---------- | ------------ |
| `all-`     | always       |
| `small-`   | ≥ 576px      |
| `medium-`  | ≥ 768px      |
| `large-`   | ≥ 992px      |
| `larger-`  | ≥ 1200px     |
| `largest-` | ≥ 1400px     |

Columns: 1–12

### Column Spanning

```html
<div class="large-span-2">
  <!-- spans 2 cols at large breakpoint -->
  <div class="large-span-3"><!-- spans 3 cols at large breakpoint --></div>
</div>
```

### Gap

```
gap-1 = 1rem | gap-2 = 2rem | gap-3 = 3rem | gap-4 = 4rem | gap-5 = 5rem
```

Responsive: `medium-gap-2`, `large-gap-3`, etc.

### Container

```html
<div class="container"><!-- max-width 90%, centered --></div>
```

### Spacing Utilities

```
py-1..5   padding top + bottom     px-1..5   padding left + right
pt-1..5   padding-top              pb-1..5   padding-bottom
mt-1..5   margin-top               mb-1..5   margin-bottom
m-1..5    margin all
```

Responsive: `medium-py-5`, `large-mt-3`, etc.

### Flex Utilities

```
.flex            display: flex
.flex-center     flex + center both axes
.flex-wrap       flex-wrap: wrap
.align-center    align-items: center
.align-start     align-items: flex-start
.justify-between justify-content: space-between
.justify-center  justify-content: center
```

### Color / Layout Utilities

```
.bg-primary      primary green background
.bg-secondary    sage background
.bg-light        5% primary tint background
.bg-white        white background
.text-center     text-align: center
.relative        position: relative
.width-full      width: 100%
.height-full     height: 100%
.italic          font-style: italic
```

### Button System

```html
<BaseButton class="bg-primary">
  <!-- green pill button -->
  <BaseButton class="bg-primary width-full">
    <!-- full-width -->
    <BaseButton class="outline">
      <!-- transparent, white border (dark backgrounds) --></BaseButton
    ></BaseButton
  ></BaseButton
>
```

Base: `padding: 0.75rem 1.5rem`, `border-radius: 2rem`, `font-size: 1rem`

---

## Design Tokens

All colors and sizing use CSS variables. Never hardcode color values.

```css
--primary-color:
  #0a3d32 /* Deep Forest Green */ --secondary-color: #5c8d7d /* Muted Sage */
    --accent-color: #d4e09b /* Soft Lime / Pear */ --background-color: #fdfbf7
    /* Warm Cream */ --white-color: #ffffff --surface-alt-color: #f0f4f2
    /* Light Grayish Green */ --text-main-color: #1a2e29
    --text-muted-color: #5a6b65 --border-color: #e6eadd --font-family: "Outfit",
  sans-serif --box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
```

Responsive heading scale (auto-adjusts via `main.css`):

```
Mobile:  h1=2rem     h2=1.75rem   h3=1.5rem
Tablet:  h1=2.25rem  h2=2rem      h3=1.75rem
Desktop: h1=3rem     h2=2.25rem   h3=2rem
Large:   h1=3.75rem  h2=3rem      h3=2.25rem
```

---

## Scoped CSS Conventions

1. **Minimal class names** — one class per structural element is enough
2. **Nest selectors** — don't add extra classes, nest from the root:
   ```css
   .card {
     background: var(--white-color);
   }
   .card:hover {
     transform: translateY(-8px);
   }
   .card:hover .image img {
     transform: scale(1.08);
   }
   .card .card-content {
     padding: 1.5rem;
   }
   .card .title {
     color: var(--primary-color);
   }
   ```
3. **Style global elements by root class:**
   ```css
   .section .title {
   } /* BaseTitle → h3.title */
   .section .sub-title {
   } /* SubTitle → h5.sub-title */
   .section p {
   } /* BaseParagraph → p */
   .section .btn {
   } /* BaseButton → button.btn */
   ```
4. **Responsive overrides** go inside `@media` in scoped CSS
5. **No inline styles** ever

---

## CSS Limitations

- `grid.css` — **read-only, never touch**
- Active CSS chain: `main.js` imports `main.css` → `main.css` starts with `@import "./grid.css"`
- When creating a new `main.css`, its very first line must be `@import "./grid.css";`
- Font Awesome is CDN — use `fas fa-*`, `fab fa-*` directly, no npm install
- Always use `--primary-color` (defined in `main.css`)

---

## Adding New Code — Workflow

### New Page

```
1. Create src/zems/Front/Pages/NewPage.vue
2. Add route in front_routes.js as a child of MainLayout
3. Import and stack section components in <template>
4. No CSS, no data in the page file itself
```

### New Section

```
1. Create src/zems/Front/Components/Section/NewSection.vue
2. Define local data as const/ref arrays in <script setup>
3. Wrap template in <section class="name py-5"><div class="container">
4. Use Luxe-Grid classes for layout, widgets for content items
5. All styling in <style scoped> — nested selectors + CSS variables only
```

### New Widget

```
1. Create src/zems/Front/Components/Widget/NewWidget.vue
2. defineProps for all external data
3. Use globally registered elements — no imports needed
4. Style in <style scoped> targeting root element classes
5. No layout logic inside a widget — parent section handles the grid
```

### New Route

```js
// In front_routes.js, inside the children array:
{ path: '/new-path', name: 'new-name', component: NewPage }
```
