import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, Divider, CircularProgress, Alert } from '@mui/material';
import API from '../services/api';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await API.get(`posts/${id}/`);
      setPost(response.data);
    } catch (err) {
      setError('Failed to load post');
      console.error('Error fetching post:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">{error || 'Post not found'}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="subtitle1" color="text.secondary">
            By {post.author.username}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 2 }}>
            {new Date(post.created_at).toLocaleDateString()}
          </Typography>
        </Box>
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