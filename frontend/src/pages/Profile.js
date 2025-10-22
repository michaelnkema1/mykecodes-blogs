import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
  Grid,
  Divider,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    email: user?.email || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({
      ...user,
      ...formData,
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h5" align="center">
          Please log in to view your profile
        </Typography>
      </Container>
    );
  }

  const displayName = user.first_name && user.last_name 
    ? `${user.first_name} ${user.last_name}` 
    : user.username;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{ width: 100, height: 100, mr: 3 }}
          >
            {displayName.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="h4" component="h1">
              {displayName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              @{user.username}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user.email}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {isEditing ? (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            <Typography paragraph>
              <strong>Username:</strong> {user.username}
            </Typography>
            <Typography paragraph>
              <strong>Email:</strong> {user.email}
            </Typography>
            {user.first_name && (
              <Typography paragraph>
                <strong>First Name:</strong> {user.first_name}
              </Typography>
            )}
            {user.last_name && (
              <Typography paragraph>
                <strong>Last Name:</strong> {user.last_name}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
  };
  
export default Profile;