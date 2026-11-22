# Nexus GitWeb

A static, single-page React 19 brand site built with TypeScript and Vite.

## Local development

```sh
npm install
npm run dev
npm run build
npm run lint
```

## Editing content

Update `src/data/site.ts`, `src/data/announcements.ts`, `src/data/projects.ts`, and `src/data/roadmap.ts`.

## Newsletter endpoint

Set `newsletterEndpoint` in `src/data/site.ts` to a POST-capable endpoint. The form submits JSON containing `{ "email": "..." }`. Leave it empty to show GitHub and Discord buttons instead.

## Community forum

The Forum section links to this repository's GitHub Discussions. Discussions persist across visits and require a GitHub account to post. Manage topics and moderation in the repository's **Discussions** tab.

## GitHub Pages

1. Push this project to the repository's `main` branch.
2. Open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. The included workflow builds `dist` and deploys it on pushes to `main` or manual runs.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
