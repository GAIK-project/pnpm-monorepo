# Monorepo Example

This repository demonstrates a full-stack application using FastAPI (Python), Express (Node.js) and Next.js in a pnpm monorepo structure

## Project Structure

```
monorepo/
├── apps/
│   ├── express/        # Node/Express.ts application
│   ├── fastapi/        # FastAPI application
│   └── web/            # Next.js application
├── packages/           # Shared packages
│   └── common/         # Common utilities and types
├── package.json        # Root package.json
└── pnpm-workspace.yaml # PNPM workspace configuration
```

## Getting Started

### Prerequisites

- Node.js (16+)
- PNPM (8+)
- Python (3.8+)

### Installation

Install all dependencies:

```bash
pnpm install:all
```

### Running the Development Environment

Run all applications with a single command:

```bash
pnpm dev
```

Or run applications separately:

```bash
# FastAPI backend
pnpm dev:fastapi

# Express backend
pnpm dev:express

# Next.js frontend
pnpm dev:web
```

Apps will run on:

- FastAPI: http://localhost:8000
- Express: http://localhost:4000
- Next.js: http://localhost:3000

### Building for Production

Build all applications:

```bash
pnpm build
```
