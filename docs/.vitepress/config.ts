
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Beautiful Docs",
  description: "A beautiful documentation site with dark mode, search, and API references",
  lastUpdated: true,
  appearance: true, // Enable dark mode
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Examples', link: '/examples/' },
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' },
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Core Features', link: '/guide/features' },
            { text: 'Advanced Usage', link: '/guide/advanced' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Components', link: '/api/components' },
            { text: 'Hooks', link: '/api/hooks' },
            { text: 'Utilities', link: '/api/utilities' },
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Code Examples',
          items: [
            { text: 'Basic Examples', link: '/examples/' },
            { text: 'Interactive Demo', link: '/examples/interactive' },
            { text: 'Advanced Patterns', link: '/examples/advanced' },
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/yourproject' },
      { icon: 'twitter', link: 'https://twitter.com/yourusername' }
    ],
    
    search: {
      provider: 'local' // Enable local search
    },
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Your Name'
    }
  }
})
