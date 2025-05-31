import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import react from '../assets/react.png';
import javascript from '../assets/js.jpeg';
import responsive from '../assets/responsive.png';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first application.',
      image: react,
      date: '2024-03-20',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      excerpt: 'Deep dive into modern JavaScript features and best practices.',
      image: javascript,
      date: '2024-03-19',
    },
    {
      id: 3,
      title: 'Building Responsive Websites',
      excerpt: 'Tips and tricks for creating beautiful responsive web designs.',
      image: responsive,
      date: '2024-03-18',
    },
  ]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Latest Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(post.date).toLocaleDateString()}
                </Typography>
                <Button
                  component={RouterLink}
                  to={`/post/${post.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 