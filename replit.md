# Overview

This is a real estate listing website for Marci Metzger - The Ridge Realty Group. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to showcase property listings, provide property search functionality, and allow users to contact the real estate office.

The website features a modern, responsive design with sections for hero content, about us information, services, property listings, office details, and contact forms. It's built with TypeScript for type safety and uses modern UI components from shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side application is built with React and TypeScript using Vite as the build tool. It follows a component-based architecture with the following key design decisions:

- **Component Organization**: UI components are organized in a hierarchical structure with reusable components in `/components/ui/` and page-specific sections in `/pages/sections/`
- **Routing**: Uses Wouter for client-side routing, providing a lightweight alternative to React Router
- **State Management**: Leverages React Query (@tanstack/react-query) for server state management and caching
- **Styling**: Uses Tailwind CSS for utility-first styling with shadcn/ui components for consistent design patterns
- **Form Handling**: Implements React Hook Form with Zod validation for type-safe form handling

## Backend Architecture

The server-side is built with Express.js and TypeScript following a clean architecture pattern:

- **API Structure**: RESTful API design with all routes prefixed with `/api`
- **Data Layer**: Storage abstraction through an interface-based approach allowing for multiple storage implementations
- **Memory Storage**: Currently implements in-memory storage for development, with the interface ready for database integration
- **Request Logging**: Custom middleware for API request/response logging and performance monitoring

## Data Storage Solutions

The application uses a flexible storage architecture:

- **Storage Interface**: Defines CRUD operations through the `IStorage` interface
- **Current Implementation**: In-memory storage using Maps for development
- **Database Ready**: Configured for PostgreSQL with Drizzle ORM, including schema definitions and migrations
- **Schema Design**: User entity with username/password fields, extendable for additional real estate entities

## Authentication and Authorization

Basic user management structure is in place:

- **User Schema**: Defined with Drizzle ORM including unique usernames and password storage
- **Validation**: Zod schemas for input validation and type safety
- **Future-Ready**: Architecture supports session management and authentication middleware

## External Dependencies

- **Database**: Neon (PostgreSQL) configured via `@neondatabase/serverless`
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Framework**: shadcn/ui with Radix UI primitives for accessible components
- **Development Tools**: Vite with HMR, TypeScript for type safety
- **Fonts**: Google Fonts (Outfit, Domine) for typography
- **Build Tools**: esbuild for server bundling, PostCSS with Tailwind CSS for styling
- **Validation**: Zod for runtime type checking and form validation
- **HTTP Client**: Native fetch API with custom error handling
- **Session Storage**: connect-pg-simple for PostgreSQL session store (configured but not actively used)