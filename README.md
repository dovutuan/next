# ef-core-admin-site

## Getting Started

#### Required environments
- NodeJS: ver 20

#### Run the development server:

```bash
npm ci
npm run dev
```

#### Build project:
```bash
npm run build
```

## Project Structure
    .
    ├─ .vscode                # Editor settings (vscode)
    ├─ src                    # Source files
    │ ├─ app                  # app router views
    │   ├─ reset-password     # Page name (should be a folder with kebab case and index.tsx file inside)
    │     ├─ index.tsx
    │ ├─ layout.tsx           # Top level layout of project
    │ ├─ StoreProvider.tsx    # Redux store provider
    ├─ components             # Define components
    │ ├─ app                  # Components broken down from the page
    │ ├─ common               # Common components
    │ ├─ modules              # Common components deal with store
    ├─ store                  # Redux
    │ ├─ features             # Dedicated store handles each page view
    │   ├─ reset-password
    │     ├─ index.tsx
    │ ├─ modal                # Store dedicated to handling modal operations 
    │ ├─ hooks.ts             # Define redux hooks with typescript
    │ ├─ index.ts             # Register reducers place
    ├─ .eslintrc.json	        # Configuration file for ESLint
    ├─ .gitignore             # Git files and folders to ignore
    ├─ next.config.mjs	      # Configuration file for Next.js
    ├─ package.json	          # Project dependencies and scripts
    ├─ postcss.config.mjs	    # Configuration file for style
    ├─ .env                   # Environment variables
    ├─ env.example            # Environment variables keys
    ├─ next-env.d.ts          # TypeScript declaration file for Next.js
    ├─ README.md              # Guidelines
    ├─ tailwind.config.ts     # Configuration file for tailwind
    └─ tsconfig.json          # Configuration file for TypeScript

