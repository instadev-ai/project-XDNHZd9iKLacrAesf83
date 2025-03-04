
# Installation

This guide will walk you through the process of installing and setting up our library in your project.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation Methods

### Using npm

```bash
npm install our-awesome-package
```

### Using yarn

```bash
yarn add our-awesome-package
```

### Using pnpm

```bash
pnpm add our-awesome-package
```

## Setting Up

After installation, you need to set up the provider at the root of your application:

```jsx
import { ThemeProvider } from 'our-awesome-package'

function App() {
  return (
    <ThemeProvider>
      {/* Your application code */}
    </ThemeProvider>
  )
}
```

## Verifying Installation

To verify that everything is working correctly, try importing and using a simple component:

```jsx
import { Button } from 'our-awesome-package'

function TestComponent() {
  return (
    <Button>
      It works!
    </Button>
  )
}
```

If you can see the button rendered correctly, the installation was successful!

## Troubleshooting

If you encounter any issues during installation, try the following:

1. Clear your package manager's cache:
   ```bash
   npm cache clean --force
   # or
   yarn cache clean
   ```

2. Make sure your dependencies are compatible:
   ```bash
   npm ls our-awesome-package
   ```

3. Check for peer dependency warnings and install any required peer dependencies.

If you're still having trouble, please [open an issue](https://github.com/yourusername/yourproject/issues) on our GitHub repository.
