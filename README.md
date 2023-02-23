# <img src="./public/icon.svg" alt="logo" width="28px"> Fake YouTube Banner

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

# Reflections

I started this project because I was intrigued by the YouTube search bar, and wanted to put my styling skills to test.
On the styling front I'm really pleased with the result and I did learn a lot, especially regarding dropdowns.
However, I partially wish I gave this project a go with vanilla CSS to make sure I was fully understanding the styling concepts that underpinned what I was making, since Tailwind does abstract some of the complexity.

Having initially started the project as a styling exercise, I didn't think there would be much need for testing my code.
However, as the project went on I started adding some functionality (eg search bar suggestions replacing the input if you click on them).
Testing this functionality would have helped catch bugs earlier, without manual testing and would help me be more confident in my code.

# Things to Add

- Make the styling work on different screen sizes
- TESTING!!!
- Add some placeholder content below the navbar
- Make the buttons link to different pages / components / functionality
- Add a small backend to store user search history and profile picture
- Host the app
