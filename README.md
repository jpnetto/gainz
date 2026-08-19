# Gainz

Gainz is a React Native (Expo) app that generates a personalized gym workout on demand, powered by Google's Gemini API. You tell it how many days a week you can train, optionally which muscles you want to focus on and what your goal is, and it returns a ready-to-follow routine that can be copied to the clipboard with one tap.

> **Note:** I built this as a focused learning project to understand how to integrate a generative AI API into a mobile app end to end: prompt construction, request handling, and rendering the result in the UI. It wasn't built for production, and a few trade-offs reflect that scope on purpose. See **Known limitations** for what that means in practice, and why each one is there.

## The problem

Generic workout plans rarely account for how many days someone can actually train or what they're specifically trying to achieve, and putting together a routine from scratch requires knowledge most people don't have starting out. Gainz reduces that to three quick inputs (frequency, muscle focus, goal) and lets a language model handle the actual programming, returning something tailored in seconds instead of requiring the user to research it themselves.

## How it works

1. The user selects how many times a week they can train (1–7) via a slider.
2. Optionally, they select up to 8 muscle groups to emphasize (abs, biceps, back, calves, chest, hamstrings, quads, triceps).
3. Optionally, they select up to 6 training goals (strength, general wellbeing, muscle gain, mobility, weight loss, endurance).
4. On submit, the app assembles a natural-language prompt in Portuguese from those selections and sends it to the Gemini API (`gemini-1.5-flash`).
5. The generated routine renders in a scrollable view and can be copied to the clipboard with one tap.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React Native + Expo |
| Navigation | React Navigation (native-stack, drawer, scaffolded but not yet wired up) |
| AI | Google Gemini API (`gemini-1.5-flash`, called directly from the client) |
| State | React `useState`. The app's state is small and localized enough that a dedicated state manager would add overhead without benefit |
| Config | `react-native-dotenv`, API key read from `.env` (excluded from version control) |
| UI feedback | `react-native-toast-message` |
| Fonts | Be Vietnam Pro, Caveat (custom, loaded via `expo-font`) |

## Design decisions

**The prompt is built conditionally, not from a single fixed template.** Depending on whether the user selected only muscles, only goals, both, or neither, a differently worded prompt is sent to Gemini. This was a deliberate choice over one template with placeholders. Keeping the prompt shorter and more focused when there are no extra constraints produced noticeably more consistent output from the model in practice.

**No backend. The app calls Gemini directly.** For a project of this scope, adding a backend solely to proxy a single API call felt unjustified at the time. It's a real trade-off, and I'd rather name it explicitly than leave it implicit (see **Known limitations**).

**Local component state instead of a global store.** The app currently revolves around one screen and a handful of directly related state variables (days, checkboxes, loading, result). Introducing Redux, Zustand, or Context at this stage would add indirection without solving a problem the app actually has.

## Known limitations

- **The Gemini API key currently ships inside the client bundle.** Any key bundled into a mobile app can be extracted by a sufficiently motivated user, since the app runs entirely on their device. `.env` is correctly excluded from version control, so the key isn't exposed via the repository, but that doesn't protect it once the app is built and installed. This is an accepted trade-off for a project scoped around learning the AI integration itself. Moving the Gemini call behind a small backend would be the first change required before this could be used in production.
- **No persistence.** Generated routines aren't saved. Closing the app discards the result, and there's no history of past workouts.
- **Limited error handling.** If Gemini returns a response that doesn't match the expected shape, the app falls back to a generic error message rather than a specific one.

## Running the project

**Prerequisites:** Node.js, Expo CLI (`npm install -g expo-cli`, or use `npx expo`), and a Gemini API key.

```bash
# 1. Install dependencies
cd frontEnd
npm install

# 2. Create a .env file in frontEnd/ with your Gemini API key
echo "API_KEY=your_gemini_api_key_here" > .env

# 3. Start the Expo development server
npm start
```

Then scan the QR code with Expo Go (iOS/Android), or press `w` to run it in the browser.
