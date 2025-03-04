
# Components API

This page documents all the UI components available in our library.

## Button

A versatile button component with multiple variants and sizes.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost'` | `'default'` | The visual style of the button |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the button |
| `isLoading` | `boolean` | `false` | Whether the button is in a loading state |
| `leftIcon` | `ReactNode` | `undefined` | Icon to display before the button text |
| `rightIcon` | `ReactNode` | `undefined` | Icon to display after the button text |
| `isDisabled` | `boolean` | `false` | Whether the button is disabled |

### Examples

```jsx
import { Button } from 'our-awesome-package'

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With loading state
<Button isLoading>Loading...</Button>

// With icons
<Button leftIcon={<SearchIcon />}>Search</Button>
```

## Card

A flexible card component for displaying content in a contained manner.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'bordered' \| 'elevated'` | `'default'` | The visual style of the card |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | The padding inside the card |
| `isHoverable` | `boolean` | `false` | Whether the card has hover effects |

### Sub-components

- `Card.Header`: The header section of the card
- `Card.Body`: The main content area of the card
- `Card.Footer`: The footer section of the card

### Examples

```jsx
import { Card } from 'our-awesome-package'

<Card>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Body>
    <p>This is the main content of the card.</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>

// With variants
<Card variant="bordered">
  Bordered card
</Card>

<Card variant="elevated" isHoverable>
  Elevated card with hover effect
</Card>
```

## Input

A form input component with various styles and states.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'filled' \| 'flushed' \| 'outline'` | `'default'` | The visual style of the input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the input |
| `isDisabled` | `boolean` | `false` | Whether the input is disabled |
| `isInvalid` | `boolean` | `false` | Whether the input has an error |
| `leftElement` | `ReactNode` | `undefined` | Element to display at the left side of the input |
| `rightElement` | `ReactNode` | `undefined` | Element to display at the right side of the input |

### Examples

```jsx
import { Input } from 'our-awesome-package'

// Basic usage
<Input placeholder="Enter your name" />

// With variants
<Input variant="filled" placeholder="Filled input" />
<Input variant="flushed" placeholder="Flushed input" />
<Input variant="outline" placeholder="Outline input" />

// With sizes
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />

// With validation state
<Input isInvalid placeholder="Invalid input" />

// With elements
<Input 
  leftElement={<UserIcon />} 
  placeholder="Username" 
/>
<Input 
  rightElement={<Button size="sm">Search</Button>} 
  placeholder="Search..." 
/>
```

## Interactive Demo

<div class="language-jsx">
<pre><code>
// Try editing this code!
function Example() {
  const [count, setCount] = React.useState(0)
  
  return (
    <div className="example-container">
      <p>You clicked {count} times</p>
      <Button 
        onClick={() => setCount(count + 1)}
        variant="primary"
      >
        Click me
      </Button>
    </div>
  )
}
</code></pre>
</div>

<script>
// This will be processed by VitePress to create an interactive example
</script>
