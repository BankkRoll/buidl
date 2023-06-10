# BUIDL - Web3 Design System

`buidl` is a Web3 component library built using [TailwindCSS](https://tailwindcss.com/) and [Radix](https://www.radix-ui.com/) for the TurboETH Web3 Build System. 

![image](/og.jpg)

https://www.figma.com/file/F65o6koQzFYLNn4tWIk0dn/BUIDL-Core?type=design&node-id=0%3A1&t=Ov3Y7ps7bc9ZxqJJ-1

## Why

The `buidl` component library is being designed to compliment [TurboETH]() which utilizes [shadcn UI component library](https://ui.shadcn.com/), [TailwindCSS](https://tailwindcss.com/) and [Radix](https://www.radix-ui.com/).

**What makes `buidl` unique?**

A strong focus on a full-stack Web3 application. 

Today many Web3 component libraries strictly focus on wallet connections and smart contracts interactions.

`buidl` will of course include these essential components, but a strong emphasis will also be given to verifiable credentials, decentralized identity, identifier registries, distributed storage (Arweave, IPFS, etc...) and other core Web3 primitives.

## Backlog V0

**Identity**
- [ ] `<InputAccount />`
- [ ] `<CredentialCardSmall />`
- [ ] `<CredentialCard />`
- [ ] `<CredentialCardLarge />`
- [ ] `<CredentialCollection />`
- [ ] `<FormCredentialIssue />`
- [ ] `<IdentityCard />`
- [ ] `<IdentityCardHorizontal />`
- [ ] `<IdentityLinkages />`
- [ ] `<VerifiablePresentationRequest />`

**Tokens**
- [ ] `<InputToken />`
- [ ] `<InputTokenAdvanced />`
- [ ] `<FormTokenTransfer />`
- [ ] `<FormTokenSwap />`

# Developer Experience

## Commands

DTS scaffolds your new library inside `/src`, and also sets up a [Vite-based](https://vitejs.dev) playground for it inside `/example`.

The recommended workflow is to run DTS in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure DTS is running in watch mode like we recommend above.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # EDIT THIS
/test
  index.test.tsx  # EDIT THIS
/stories
  Thing.stories.tsx # EDIT THIS
/.storybook
  main.js
  preview.js
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

#### React Testing Library

We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.

### Rollup

DTS uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Optimizations

Please see the main `dts` [optimizations docs](https://github.com/weiran-zsd/dts-cli#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/weiran-zsd/dts-cli#invariant) and [warning](https://github.com/weiran-zsd/dts-cli#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

