# NoteHub

A note management application built with React, TypeScript, and TanStack Query. NoteHub allows users to create, delete, search, and organize notes with pagination.

## Features

- **Create notes** with a title, content, and category.
- **Delete notes** directly from the notes list.
- **Search notes** with debounced input to reduce unnecessary API requests.
- **Pagination** for browsing through notes.
- **Form validation** using Formik and Yup.
- **Server state management** with TanStack Query.
- **Responsive interface** styled with CSS Modules.

## Technologies

- React
- TypeScript
- Vite
- TanStack Query
- Axios
- Formik
- Yup
- React Paginate
- use-debounce
- CSS Modules
- modern-normalize

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/orxen3-dot/05-notehub.git
cd 05-notehub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add your API token:

```env
VITE_NOTEHUB_TOKEN=your_api_token
```

You can obtain an API token from the [NoteHub API documentation](https://notehub-public.goit.study/api/docs).

### 4. Start the development server

```bash
npm run dev
```

## API

The application uses the NoteHub REST API:

https://notehub-public.goit.study/api

All requests are handled through Axios, while TanStack Query manages server state, caching, mutations, and data synchronization.

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
├── App.tsx
├── index.css
└── main.tsx
```

## Live Demo

Add your deployed Vercel URL here.

## Author

[GitHub Profile](https://github.com/orxen3-dot)