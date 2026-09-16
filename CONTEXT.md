# Context: Nordic Library Book Site

## Glossary

### Core Entities

- **Book**: A global bibliographic entry in the library directory.
  - Properties: `title`, `author`, `publicationDate`.
- **Quote**: A personal literary excerpt saved by a user.
  - Properties: `text`, `author`.
- **User**: An authenticated entity with access to manage the library and their own quotes.
  - Properties: `username`, `email`.

### Concepts

- **Global Directory**: The collection of Books, which is read-only for Guests and editable by Users.
- **Personal Collection**: The set of Quotes owned by a specific User.
- **Auth Token**: A mock JWT string used to verify identity and permissions in LocalStorage.
- **Nordic Nocturne**: The visual design system emphasizing high-contrast dark tones, serif typography for literary content, and brass accents.
- **Theme Switching**: The ability to toggle between the default Dark theme (Nordic Nocturne) and a Light theme approximation by applying the `.light-theme` class to the document root. This is managed via CSS Custom Properties (using OKLCH color space).
