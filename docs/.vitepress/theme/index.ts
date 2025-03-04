
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Register global components or add custom directives here
    
    // Example of how to add a custom component
    // app.component('MyCustomComponent', MyCustomComponent)
  }
}
