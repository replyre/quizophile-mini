# Quizophile Mini

A simple general-knowledge quiz app built with React. Enter your name, pick how many questions you want, answer them as you scroll, and get a grade at the end.

## Features

- Start screen where you enter your name and choose 10, 15, 20, 25 or 30 questions.
- Multiple-choice general-knowledge questions (easy) with shuffled options.
- Infinite scroll: the first 10 questions load at the start, and 5 more load each time you reach the bottom until you hit your chosen total.
- Each correct answer gives 10 points. Cards turn green or red once answered.
- Live score in the header.
- End screen with a grade (A to E), your percentage and a quote, plus an option to play again.

## Tech stack

- React 18 (Create React App)
- react-responsive-modal for the start screen
- Plain CSS for styling and animations
- [Open Trivia Database](https://opentdb.com/) API for questions

## Project structure

```
src/
  App.jsx                 Main app: start modal, fetching questions, infinite scroll, score
  components/
    Header.jsx            Logo and live score
    Background.jsx        Animated background
    CardContainer.jsx     Question cards and answer handling
    EndContainer.jsx      Works out the grade from the percentage
    EndCard.jsx           Result screen and "play again"
  Data/endings.js         Grade messages (A to E)
public/                   Images, icons and index.html
```

## Getting the API

The questions come from the [Open Trivia Database](https://opentdb.com/), which is free and needs no sign-up or API key. You can build a request URL for any category or difficulty with its [API config tool](https://opentdb.com/api_config.php). The app calls `https://opentdb.com/api.php` with `amount` (10 at the start, then 5 per scroll), `category=9` (General Knowledge), `difficulty=easy` and `type=multiple`.

Open Trivia DB allows about one request every 5 seconds per IP. If you send requests faster than that, it returns HTTP 429, and the app logs a "Rate limit exceeded" error.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Build

```bash
npm run build
```

This writes the production build to the `build` folder.

## Deploy to Vercel

1. Push the repo to GitHub and import it in Vercel.
2. Framework preset: **Create React App**. Build command: `npm run build`. Output directory: `build`.
3. Deploy. The project uses Node.js 24.x, set in `package.json` under `engines`.

## Author

[replyre](https://github.com/replyre)
