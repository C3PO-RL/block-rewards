# React + TypeScript + Vite
# Block Rewards React App

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

### Prerequisites

- Ensure you have Node.js version 20.9.0 installed.
- Install [pnpm](https://pnpm.io/installation) if you haven't already.

### Installation

1. Clone the repository:
  ```sh
  git clone <repository-url>
  cd block-rewards
  ```

2. Install dependencies using pnpm:
  ```sh
  pnpm install
  ```

### Running the App

1. Rename the `.env.template` file to `.env`:
  ```sh
  mv .env.template .env
  ```

2. Add the following environment variable to the `.env` file:
  ```env
  VITE_APP_BITQUERY_API_KEY=<your-bitquery-api-key>
  ```

3. To obtain the `VITE_APP_BITQUERY_API_KEY`, sign up at [Bitquery](https://account.bitquery.io/user/account), navigate to the API V1 section, and generate an API key.

4. Start the development server:
  ```sh
  pnpm dev
  ```

### Running Tests

To run the tests, use the following command:
```sh
pnpm test
```

## Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

  ```js
  export default tseslint.config({
    languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
    },
  })
  ```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

  ```js
  // eslint.config.js
  import react from 'eslint-plugin-react'

  export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
    // Add the react plugin
    react,
    },
    rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    },
  })
  ```
```
