import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import API from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await API.get('posts/');
      setPosts(response.data);
    } catch (err) {
      setError('Failed to load posts');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Latest Posts
      </Typography>
      {posts.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 4 }}>
          No posts available yet. Be the first to create one!
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.content.length > 150 
                      ? `${post.content.substring(0, 150)}...` 
                      : post.content
                    }
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    By {post.author.username} on {new Date(post.created_at).toLocaleDateString()}
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
      )}
    </Container>
  );
};

export default Home; 