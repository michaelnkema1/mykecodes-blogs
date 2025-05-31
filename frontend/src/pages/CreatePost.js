import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the post
    console.log('New post:', post);
    // For now, we'll just navigate back to home
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Post
        </Typography>
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
            id="image"
            label="Image URL"
            name="image"
            value={post.image}
            onChange={handleChange}
            variant="outlined"
            helperText="Enter a URL for the post's featured image"
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
            >
              Publish Post
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate('/')}
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