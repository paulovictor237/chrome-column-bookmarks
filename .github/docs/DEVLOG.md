# Zustand

Links to reading more about Zustand

- [github-zustand](https://github.com/pmndrs/zustand)
- [persisting-store-data](https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md)

# Favicon V3

Unfortunaly the Manifest V3 there is no favicon API, then i have to use alternatives.

```javascript
- chrome://favicon/size/16@2x/${URL}
- https://api.statvoo.com/favicon/?url=${URL}
- https://api.faviconkit.com/${URL}/32
- https://s2.googleusercontent.com/s2/favicons?domain=${URL}&sz=32
- https://www.google.com/s2/favicons?sz=32&domain_url=${URL}

```

# Chrome API

APIs not implemented, see all in [dev-chrome](https://developer.chrome.com/docs/extensions/reference/bookmarks).

```typescript
// chrome.bookmarks.move
const  move = (
  id: string,
  destination: object,
  callback?: function,
) => void

// chrome.bookmarks.get
const get = (
  idOrIdList: string | [string, ...string[]],
  callback?: function,
) => void

// chrome.bookmarks.getSubTree
const getSubTree = (
  id: string,
  callback?: function,
) => void

// chrome.bookmarks.getChildren
const getChildren = (
  id: string,
  callback?: function,
) => void
```
