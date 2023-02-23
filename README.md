# Fake YouTube Banner <img src="./public/icon.svg" alt="logo" width="28px">

A small clone of [Youtube](https://www.youtube.com/)'s navbar.

Includes all the buttons, a search bar with autocomplete suggestions (provided by the [Datamuse API](https://www.datamuse.com/api/)) and search history, a profile pic (provided by [Dicebear's Open Peeps API](https://dicebear.com/styles/open-peeps)) and a logo!

# Running the Project

To run this project, first clone the repository and run

```
npm install
```

You can then start the server on `localhost:8000` by running

```
npm run dev
```

Alternatively, you can build the page and host it

```
npm run build
npm run preview
```

If you want to host the server on a different port (say 8080), run either

```
VITE_PORT=8080 npm run dev
VITE_PORT=8080 npm run preview
```

depending on your use.
