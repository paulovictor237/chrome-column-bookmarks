# Bookmarks Column View<img src="./.github/img/chrome-web-store-icon.png" width="40" align="left">

This project was build for learning propose. See the demo by clicking on the image above. The chrome extension is available at the following Link:
<a href="https://chrome.google.com/webstore/detail/column-bookmarks-new-tab/ocjdiehlhhoiahkbbgmjnfeipjpbhhph?hl" target="_blank">
Column Bookmarks New Tab
</a>

<p align="center" margin-bottom="0">
  <a href="https://chrome-column-tab.vercel.app" target="_blank">
    <img alt="demo" width="auto" height="auto" src="./.github/img/demo(Desktop Normal).png"/>
  </a>
</p>

### Technologies

- React
- Typescript
- Redux
- Tailwind
- Framer Motion
- Chrome Extension
- Vite
- Zustand
- react-beautiful-dnd (discontinued)

## Inspirations

Code Inspire:

- [Another Tab](https://chrome.google.com/webstore/detail/another-tab/oaaeanlgefipegfcbgpgnhhnpengdjld)
- [AnotherTab - New Tab page](https://chrome.google.com/webstore/detail/anothertab-new-tab-page/cpeojfdfhhgedcaiglbjdklaigennhpl)

Visual Inspire:

- [Qlearly Light - Bookmark Manager](https://chrome.google.com/webstore/detail/qlearly-light-bookmark-ma/lkmkjmklcnhfcfpojimnbjpaimbdjeao)

### Developing locally

This is a standard Create React App, so you can easily start working on it by simply cloning the project and running `yarn` to install all its dependencies.

To develop the app locally you can run `yarn dev`, I already included some fake bookmarks to simulate the production behavior of the extension.

Update: This project was rebuild with Vite using the following command line

```shell
yarn create vite vite-project --template react-ts
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

Builds the app for production with the command `yarn build` to the _build_ folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

To publish the extension is necessary configure a "_public/manifest.json_" file. To Learn more i recommended read the following page [Creating a Chrome extension with React and TypeScript](https://blog.logrocket.com/creating-chrome-extension-react-typescript/).
