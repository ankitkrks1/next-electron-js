# Next Electron App

This repository contains a project that combines **Next.js** and **Electron** to create a modern desktop application with web technologies. It leverages the power of Next.js for server-side rendering and Electron for building cross-platform desktop apps.

## Features

- **Next.js** for React-based server-side rendering and routing.
- **Electron** for creating desktop applications with native capabilities.
- Hot-reloading for both the renderer and main processes during development.
- Cross-platform support (Windows, macOS, and Linux).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/next-electron-app.git
    cd next-electron-app
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Development

To start the development environment:# Next Electron App

This repository contains a project that combines **Next.js** and **Electron** to create a modern desktop application with web technologies. It leverages the power of Next.js for server-side rendering and Electron for building cross-platform desktop apps.

## Folder Structure

- `main/`: Contains the Electron main process code.
- `renderer/`: Contains the Next.js application.
- `public/`: Static assets for the Next.js app.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
Happy coding!

```bash
npm run dev
# or
yarn dev
```

This will start both the Next.js development server and the Electron app.

### Build

To build the application for production:

```bash
npm run package-mac

```

The output will be available in the release-builds/** 

Note : you need to first co inside the MacOs app and run it from there first time from terminal. 

```bash
./release-builds/next-electron-app-darwin-arm64/next-electron-app.app/Contents/MacOS/<appName>

```
Then ready to run from app icon

---
Happy coding!


Buy me a Dosha :

[![Open Collective](https://img.shields.io/opencollective/all/sharemydisk?logo=open-collective)](https://opencollective.com/sharemydisk)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/ankitkrks1?label=GitHub%20Sponsors&logo=github)](https://github.com/sponsors/ankitkrks1)