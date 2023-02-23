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

# Technical Details

The frontend is built using [React](https://reactjs.org/), splitting up the different parts of the navbar into components (`Navbar`, `SearchBar`, `Suggestions` and `Button`).
This helps organise the code, and make it more reusable (especially for the `Button` component).

All styling is done through the [tailwindcss](https://tailwindcss.com/) framework, allowing for rapid and flexible styling, without premade components.

The main challenge with styling was the search bar and its suggestions.
Indeed, the search bar styling changes significantly when the user is typing.
A combination of using the `hidden`, `visible` and `invisible` tailwind classes helped bring elements in and out of view. `peer` and `group` classes were used to broadcast state between elements.
Finally, use of `relative` and `absolute` positions allowed for layering pop-ups on top of the page.

The project was built using [vite](https://vitejs.dev/).
