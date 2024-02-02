# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


gin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//instalar o vite
npm create vite@latest

//entra no projeto

// instalar dependencias
cd
// instalar dependencias
npm install
npm install prop-types

//rodar projeto
cd..



// instalar o surge
npm install --global surge

// buildar o projeto
npm run build
npm run dev

//deploy
surge ./build



// instalar react router
npm install react-router-dom


Hoock 
useState
useEffect
useContext

//Bibliotecas de componentes
Material UI - https://mui.com/material-ui/
  npm install @mui/material @emotion/react @emotion/styled

chakra - https://chakra-ui.com/docs/components
  npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

React Hook Form
 npm install react-hook-form

React Hook Form resolvers (faz a comunicação do form com validador zod)
 npm install @hookform/resolvers

 Zod validador
  npm install zod

Styled components
  npm install styled-components