# Video Games App

## Project Description:

VideoGames-App is a web application designed to help users discover new video games. The app allows users to search for games by various criteria such as platform, genre, and other attributes, enabling them to find games that suit their preferences.

## Goal

Merge Gaming Passion with Front-end Development, as well learn more the use of TypeScript.

## Key Features

- **Game Discovery:** Users can search for games based on platform, genre, and other parameters.
- **Responsive Design:** The app adapts to different screen sizes, providing a seamless user experience on desktops, tablets, and mobile devices.
- **User Interface:** Implemented using React and Chakra UI to create a visually appealing and user-friendly interface.
- **Dynamic Filtering and Sorting:** Users can filter games by genre and platform, and sort them based on various criteria such as popularity, release date, and rating.
- **Dark/Light Mode:** The app supports color mode switching, allowing users to toggle between dark and light themes.

## Key Technologies and Tools

- React: A popular JavaScript library for building user interfaces.
- TypeScript: Used for type safety and improved code quality.
- [Chakra UI](https://chakra-ui.com/): A component library for building accessible and responsive UIs.
- Axios: For making HTTP requests to the RAWG API.
- [React Query](https://tanstack.com/query/latest/docs/framework/react/quick-start): Refactored the data fetching logic using     useQuery and useInfiniteQuery from React Query for more efficient data fetching, caching, and state management.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): Added `react-infinite-scroll-component` for seamless infinite scrolling functionality in the game grid. This enables the user to scroll through the game listings without reloading or navigating away from the page, enhancing the user experience.( integrated with React Query's using `useInfiniteQuery`)
- [Zustand](https://www.npmjs.com/package/zustand#typescript-usage): It is a state management library that is simpler and more lightweight compared to other solutions like Redux or Context API. It allows to manage global state with minimal boilerplate code and does not require the use of custom hooks, reducers, or context providers.
- [RAWG API](https://rawg.io/apidocs): Provides data about video games, including genres, platforms, and game details.
- [Vercel](https://vercel.com/docs): Used for deploying the application and hosting it on the web.

## Website link:

- [VideoGames-app](https://video-games-app-fawn.vercel.app/)
