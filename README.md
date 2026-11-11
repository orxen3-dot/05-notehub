# NoteHub

A note-management application built with React, TypeScript, TanStack Query, and the NoteHub REST API.

## Features

- Create notes with a title, content, and tag
- Delete notes
- Search notes with a debounced input
- Browse notes with pagination
- Validate note forms with Formik and Yup
- Cache and synchronize server data with TanStack Query
- Display loading, error, and empty states

## Tech Stack

- React 19 and TypeScript
- Vite
- TanStack Query
- Axios
- Formik and Yup
- React Paginate
- use-debounce
- CSS Modules
- Modern Normalize

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the API token

Create a `.env.local` file in the project root:

```env
VITE_NOTEHUB_TOKEN=your_api_token
```

The token can be obtained from the [NoteHub API documentation](https://notehub-public.goit.study/api/docs).

### 3. Start the development server

```bash
npm run dev
```

### Available scripts

- `npm run build` - type-check and build the application
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build

## API

The application communicates with the [NoteHub REST API](https://notehub-public.goit.study/api). Axios handles HTTP requests, while TanStack Query manages fetching, caching, and server-state updates.

**Security note:** Vite variables prefixed with `VITE_` are included in client-side code. Use only credentials intended for browser-side use and never commit your local environment file.

## Project Structure

```text
src/
├── components/
│   ├── App/
│   ├── Modal/
│   ├── NoteForm/
│   ├── NoteList/
│   ├── Pagination/
│   └── SearchBox/
├── services/
│   └── noteService.ts
├── types/
│   └── note.ts
├── index.css
└── main.tsx
```

## Learning Focus

Server-state management, API integration, typed React components, debounced search, pagination, form validation, and CRUD operations.
