# Nordic Library Book Site

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![Vitest](https://img.shields.io/badge/Vitest-646CFF?style=for-the-badge&logo=vitest)
![Status](https://img.shields.io/badge/Status-Development-yellow?style=for-the-badge)

A sophisticated literary directory and personal quote manager designed with the **Nordic Nocturne** aesthetic—emphasizing high-contrast dark tones and brass accents.

![Project Preview](https://picsum.photos/800/400)

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Manual Setup](#manual-setup)
  - [Working with Local AI Models](#working-with-local-ai-models)
- [Testing](#testing)
- [License](#license)

## Features

- **Global Book Directory**: A comprehensive bibliographic catalog.
  - Read-only access for guests.
  - Full editing capabilities for authenticated users.
- **Personal Quote Collection**: Save and manage personal literary excerpts.
- **Theming System**:
  - **Nordic Nocturne**: A rich dark theme using OKLCH color space.
  - **Light Mode**: A high-contrast light alternative.
- **Mock Authentication**: A JWT-based authentication simulation via LocalStorage for rapid development.

## Getting Started

### Manual Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   Visit `http://localhost:4200` to see the app in action.

### Working with Local AI Models

This project is optimized for AI-driven development. If you are using a tool like **opencode** or other Local AI CLI agents:

1. **Initialize the Agent**: Ensure your agent has access to the root directory.
2. **Contextual Awareness**: The agent can refer to `CONTEXT.md` to understand the domain model (Books, Quotes, Users) and the visual design system (Nordic Nocturne).
3. **Engineering Skills**: This project comes pre-configured with **matt-pocock's engineering skills**, enabling agents to perform advanced tasks like codebase design, TDD, and domain modeling with higher precision.
4. **Tasks**: You can prompt the AI to:
   - *Implement new components* following the existing Angular 22 patterns.
   - *Add new features* to the Global Directory or Personal Collection.
   - *Refactor themes* by updating the OKLCH color variables.

## Testing

The project uses **Vitest** for unit and integration testing.

To run the test suite:
```bash
npm test
```

## License

This project is licensed under the MIT License.
