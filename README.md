# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
$ yarn

yarn install v1.22.19
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
info There appears to be trouble with your network connection. Retrying...
[4/5] Linking dependencies...
warning "@docusaurus/core > react-loadable-ssr-addon-v5-slorber@1.0.1" has unmet peer dependency "react-loadable@*".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-preset-algolia@1.9.3" has unmet peer dependency "@algolia/client-search@>= 4.9.1 < 6".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-core > @algolia/autocomplete-plugin-algolia-insights@1.9.3" has unmet peer dependency "search-insights@>= 1 < 3".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-core > @algolia/autocomplete-shared@1.9.3" has unmet peer dependency "@algolia/client-search@>= 4.9.1 < 6".
[5/5] Building fresh packages...
Done in 925.83s.
```

### Local Development

```bash
$ yarn start --host 0.0.0.0

yarn run v1.22.19
$ docusaurus start --host 0.0.0.0
[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

✔ Client
  Compiled successfully in 3.17m

client (webpack 5.88.2) compiled successfully
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
