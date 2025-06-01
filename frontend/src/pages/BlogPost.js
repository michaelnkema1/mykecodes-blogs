import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: id,
    title: 'Getting Started with React',
    content: `React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the fundamental concepts of React and how to get started with your first application.

    First, let's understand what React is and why it's so popular. React allows you to create reusable UI components and manage their state efficiently. It uses a virtual DOM to optimize rendering performance and provides a declarative way to build user interfaces.

    To get started with React, you'll need to have Node.js installed on your computer. Then, you can create a new React application using Create React App:

    \`\`\`bash
    npx create-react-app my-app
    cd my-app
    npm start
    \`\`\`

    This will set up a new React project with all the necessary dependencies and configuration. The development server will start, and you can view your application at http://localhost:3000.

    React components are the building blocks of your application. They can be either functional components or class components. Here's an example of a simple functional component:

    \`\`\`jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    \`\`\`

    Stay tuned for more React tutorials and tips!`,
    image: 'https://source.unsplash.com/random/1200x600?react',
    date: '2025-05-31',
    author: 'Michael Nkema',
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="subtitle1" color="text.secondary">
            By {post.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 2 }}>
            {new Date(post.date).toLocaleDateString()}
          </Typography>
        </Box>
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
            mb: 4,
            borderRadius: 1,
          }}
        />
        <Divider sx={{ mb: 4 }} />
        <Typography
          variant="body1"
          component="div"
          sx={{
            whiteSpace: 'pre-wrap',
            '& pre': {
              backgroundColor: '#f5f5f5',
              padding: 2,
              borderRadius: 1,
              overflowX: 'auto',
            },
          }}
        >
          {post.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BlogPost; 