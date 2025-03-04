
# API Reference

Welcome to the API reference documentation. This section provides detailed information about all the components, hooks, and utilities available in our library.

## How to Use This Reference

The API reference is organized into the following sections:

- **[Components](/api/components)**: UI components like buttons, forms, modals, etc.
- **[Hooks](/api/hooks)**: Custom React hooks for state management and side effects
- **[Utilities](/api/utilities)**: Helper functions and utilities

Each entry includes:

- **Props/Parameters**: All available options with types and default values
- **Return Values**: What the function or hook returns
- **Examples**: Code snippets showing how to use the API
- **Notes**: Important information and caveats

## Type Definitions

We use TypeScript for type safety. Here are some common types used throughout the API:

```typescript
// Common prop types
type Variant = 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

// Component props example
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
```

## Versioning

Our API follows [Semantic Versioning](https://semver.org/):

- **Major version** (x.0.0): Contains breaking changes
- **Minor version** (0.x.0): Adds functionality in a backward-compatible manner
- **Patch version** (0.0.x): Backward-compatible bug fixes

Always check the version compatibility when upgrading.
