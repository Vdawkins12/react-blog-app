export const postsData = [
    {
      id: 1,
      title: 'Understanding React Components',
      author: 'Jane Doe',
      date: 'October 24, 2025',
      content: 'React components are the building blocks of any React application. A component is a self-contained module that renders some output. You can think of components as reusable pieces of your UI, like buttons, forms, or entire pages. This is the full post content, which is longer than the summary.',
      summary: 'React components are the building blocks of any React application. A component is a self-contained module that renders some output.',
      comments: [
        { id: 1, name: 'ReactFan', text: 'Great post! Very informative.' }
      ]
    },
    {
      id: 2,
      title: 'Props vs. State in React',
      author: 'John Smith',
      date: 'October 22, 2025',
      content: 'The two most important concepts in React are props and state. "Props" (short for properties) are read-only and are passed down from parent to child components. "State" is internal to a component and can be changed, causing the component to re-render. This detail page shows the full text.',
      summary: 'The two most important concepts in React are props and state. "Props" are read-only... "State" is internal to a component...',
      comments: [
        { id: 1, name: 'CodeNewbie', text: 'This really helped me understand the difference!' },
        { id: 2, name: 'Jane Doe', text: 'Glad I could help!' }
      ]
    }
  ];