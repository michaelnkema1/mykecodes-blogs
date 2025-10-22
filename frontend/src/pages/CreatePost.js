import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Alert,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import API from '../services/api';

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState({
    title: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await API.post('posts/', post);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="warning">
          You need to be logged in to create a post.
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Post
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Post Title"
            name="title"
            value={post.title}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="content"
            label="Post Content"
            name="content"
            value={post.content}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={10}
            helperText="Write your post content here. Markdown is supported."
          />
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
            >
              {loading ? 'Publishing...' : 'Publish Post'}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate('/')}
              disabled={loading}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreatePost; 