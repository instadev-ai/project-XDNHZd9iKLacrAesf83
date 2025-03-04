
# Interactive Examples

This page contains interactive code examples that you can edit and see the results in real-time.

## Basic Button Example

Try editing this code to see how the button changes:

```jsx live
function ButtonExample() {
  const [variant, setVariant] = React.useState('default')
  
  const variants = ['default', 'primary', 'secondary', 'destructive', 'outline', 'ghost']
  
  return (
    <div className="example-container">
      <div className="controls">
        {variants.map(v => (
          <button 
            key={v} 
            onClick={() => setVariant(v)}
            className={variant === v ? 'active' : ''}
          >
            {v}
          </button>
        ))}
      </div>
      
      <div className="preview">
        <Button variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
        </Button>
      </div>
    </div>
  )
}
```

## Form Input with Validation

This example shows how to create a form with validation:

```jsx live
function FormExample() {
  const [email, setEmail] = React.useState('')
  const [isValid, setIsValid] = React.useState(true)
  const [submitted, setSubmitted] = React.useState(false)
  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = validateEmail(email)
    setIsValid(valid)
    if (valid) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 2000)
    }
  }
  
  return (
    <div className="form-example">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setIsValid(true)
            }}
            isInvalid={!isValid}
            placeholder="Enter your email"
          />
          {!isValid && (
            <div className="error-message">
              Please enter a valid email address
            </div>
          )}
        </div>
        
        <Button type="submit" variant="primary">
          Submit
        </Button>
        
        {submitted && (
          <div className="success-message">
            Form submitted successfully!
          </div>
        )}
      </form>
    </div>
  )
}
```

## Interactive Card Component

Try this interactive card component with different settings:

```jsx live
function CardExample() {
  const [variant, setVariant] = React.useState('default')
  const [hoverable, setHoverable] = React.useState(false)
  
  return (
    <div className="card-example">
      <div className="controls">
        <div>
          <label>
            <input
              type="radio"
              checked={variant === 'default'}
              onChange={() => setVariant('default')}
            />
            Default
          </label>
          <label>
            <input
              type="radio"
              checked={variant === 'bordered'}
              onChange={() => setVariant('bordered')}
            />
            Bordered
          </label>
          <label>
            <input
              type="radio"
              checked={variant === 'elevated'}
              onChange={() => setVariant('elevated')}
            />
            Elevated
          </label>
        </div>
        
        <div>
          <label>
            <input
              type="checkbox"
              checked={hoverable}
              onChange={() => setHoverable(!hoverable)}
            />
            Hoverable
          </label>
        </div>
      </div>
      
      <Card 
        variant={variant} 
        isHoverable={hoverable}
        className="demo-card"
      >
        <Card.Header>
          <h3>Interactive Card</h3>
        </Card.Header>
        <Card.Body>
          <p>This card is using the following settings:</p>
          <ul>
            <li>Variant: {variant}</li>
            <li>Hoverable: {hoverable ? 'Yes' : 'No'}</li>
          </ul>
          <p>Try changing the settings above!</p>
        </Card.Body>
        <Card.Footer>
          <Button size="sm">Action Button</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
```

## Data Table Example

This example shows how to create a sortable data table:

```jsx live
function TableExample() {
  const [data, setData] = React.useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending' },
  ])
  
  const [sortField, setSortField] = React.useState('id')
  const [sortDirection, setSortDirection] = React.useState('asc')
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }
  
  const sortedData = [...data].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })
  
  return (
    <div className="table-example">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('name')}>
              Name {sortField === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('email')}>
              Email {sortField === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('status')}>
              Status {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>
                <span className={`status-${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-info">
        <p>Click on any column header to sort the table.</p>
      </div>
    </div>
  )
}
```

<style>
.example-container {
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 20px 0;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.controls button {
  padding: 5px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}

.controls button.active {
  background: var(--vp-c-brand);
  color: white;
}

.preview {
  padding: 20px;
  display: flex;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
}

.form-example form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.error-message {
  color: var(--vp-c-danger);
  font-size: 0.9em;
  margin-top: 5px;
}

.success-message {
  color: var(--vp-c-success);
  margin-top: 15px;
  padding: 10px;
  background: var(--vp-c-success-soft);
  border-radius: 4px;
  text-align: center;
}

.card-example .demo-card {
  max-width: 400px;
  margin: 20px auto;
}

.table-example table {
  width: 100%;
  border-collapse: collapse;
}

.table-example th {
  background: var(--vp-c-bg-soft);
  padding: 10px;
  text-align: left;
  cursor: pointer;
  user-select: none;
}

.table-example th:hover {
  background: var(--vp-c-bg-mute);
}

.table-example td {
  padding: 10px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.status-active {
  color: var(--vp-c-success);
}

.status-inactive {
  color: var(--vp-c-danger);
}

.status-pending {
  color: var(--vp-c-warning);
}

.table-info {
  margin-top: 10px;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}
</style>
