# NLW Agents Web

Web interface developed during the **Rocketseat** event to manage rooms with intelligent agents.

## 🚀 Technologies Used

- **React 19** - Library for user interfaces
- **TypeScript** - Static typing
- **Vite** - Modern build tool and bundler
- **React Router DOM** - Routing for SPAs
- **TanStack Query** - State management for requests
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Day.js** - Date manipulation
- **Web APIs** - MediaRecorder and getUserMedia for audio capture
- **Tailwind CSS v4** - Utility CSS framework
- **shadcn/ui** - Reusable UI components
- **Lucide React** - Modern icons
- **Biome** - Code linter and formatter

## 🏢️ Architecture and Patterns

- **SPA (Single Page Application)** with React Router
- **Composition Pattern** with shadcn/ui
- **Server State Management** with TanStack Query
- **Optimistic Updates** for better user experience
- **Real-time Audio Capture** with native Web APIs
- **Utility-First CSS** with Tailwind CSS
- **Component-Based Architecture**
- **TypeScript** for type safety
- **Path Aliases** for organized imports

## 📋 Prerequisites

- Node.js 18+
- npm, yarn or pnpm
- NLW Agents API running on `http://localhost:3333`

## ⚙️ Configuration and Setup

### 1. Clone the repository
```bash
git clone https://github.com/victorbadaro/letmeask-agents-web
cd letmeask-agents-web
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Generates production build
- `pnpm preview` - Previews the production build

## 🎨 UI Components

The project uses **shadcn/ui** with the following configurations:
- **Style**: New York
- **Base color**: Zinc
- **Icons**: Lucide React
- **CSS Variables**: Enabled
- **Theme**: Support for dark/light mode

## 📱 Features

### 🏠 Home Page
- **Room listing** - View all available rooms with detailed information
- **Room creation** - Form to create new question and answer rooms
- **Navigation between rooms** - Dynamic routing with date information and question count
- **Responsive interface** - Compatible with different devices

### 🏷️ Individual Rooms
- **Question viewing** - Lists all questions in the room with AI responses
- **Question form** - Interface to add new questions with complete API integration
- **Question creation** - Complete POST system for `/rooms/:roomId/questions` with validation
- **Automatic responses** - AI generates responses based on room audio content
- **Optimistic updates** - Responsive interface with loading state during response generation
- **Response status** - Visual indicator of AI response generation progress
- **Relative timestamps** - Display of when questions were created
- **Automatic synchronization** - Cache automatically invalidated after question creation
- **Navigation** - Button to return to home page and access to audio functionality

### 🎤 Audio Recording
- **Real-time audio capture** - Uses MediaRecorder API for continuous recording
- **Chunk processing** - Audio is sent in 5-second segments
- **Quality configuration** - Optimized with 64kbps and WebM format
- **Echo cancellation** - Echo cancellation and noise suppression enabled
- **Intuitive interface** - Buttons to start/pause recording with visual feedback
- **Automatic upload** - Direct sending to transcription and processing API
- **Support detection** - Browser compatibility validation

### ⚡ Optimizations
- **Optimized loading** - Loading states and intelligent cache
- **Form validation** - Zod schemas with React Hook Form
- **State management** - TanStack Query for data synchronization

## 🌐 API Integration

The application consumes the NLW Agents Server API:
- **Endpoint**: `http://localhost:3333`
- **Routes used**: 
  - `GET /rooms` - Room listing
  - `GET /rooms/:roomId/questions` - Room question listing
  - `POST /rooms/:roomId/questions` - Question creation with automatic responses
  - `POST /rooms/:roomId/audio` - Audio upload for transcription
- **Management**: TanStack Query for cache and synchronization
- **Mutations**: Complete question creation system with optimistic updates
- **File Upload**: FormData for sending audio files

## 📝 Route Structure

- `/` - Home page with room listing
- `/room/:roomId` - Individual room page with questions and answers
- `/room/:roomId/audio` - Audio recording page

## 📁 Folder Structure

```
letmeask-agents-web/
├── public/                       # Static public files
├── src/                         # Application source code
│   ├── components/              # Reusable React components
│   │   ├── create-room-form.tsx # Room creation form
│   │   ├── question-form.tsx    # Form for asking questions
│   │   ├── question-item.tsx    # Individual question/answer item
│   │   ├── room-list.tsx        # List of available rooms
│   │   └── ui/                  # shadcn/ui UI components
│   │       ├── badge.tsx        # Badge/label component
│   │       ├── button.tsx       # Button component
│   │       ├── card.tsx         # Card component
│   │       ├── form.tsx         # Form components
│   │       ├── input.tsx        # Input component
│   │       ├── label.tsx        # Label component
│   │       └── textarea.tsx     # Textarea component
│   ├── http/                    # API communication layer
│   │   ├── types/               # TypeScript types for API
│   │   │   ├── create-room-request.ts     # Room creation request type
│   │   │   ├── create-room-response.ts    # Room creation response type
│   │   │   ├── create-question-request.ts # Question creation request type
│   │   │   ├── create-question-response.ts# Question creation response type
│   │   │   └── get-rooms-response.ts      # Room listing response type
│   │   ├── use-create-room.ts   # Hook for room creation
│   │   ├── use-create-question.ts # Hook for question creation
│   │   └── use-rooms.ts         # Hook for room listing
│   ├── lib/                     # Utilities and configurations
│   │   ├── dayjs.ts            # Day.js configuration
│   │   └── utils.ts            # Helper functions
│   ├── pages/                   # Application pages
│   │   ├── create-room.tsx      # Home page with creation and listing
│   │   ├── room.tsx             # Individual room page
│   │   └── record-room-audio.tsx# Audio recording page
│   ├── app.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   ├── index.css               # Global styles and Tailwind
│   └── vite-env.d.ts           # Vite type declarations
├── .vscode/                     # VS Code settings
├── components.json              # shadcn/ui configuration
├── package.json                 # Dependencies and scripts
├── pnpm-lock.yaml              # pnpm lock file
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── biome.jsonc                 # Biome configuration
```

---

Developed with ❤️ during the Rocketseat NLW event
