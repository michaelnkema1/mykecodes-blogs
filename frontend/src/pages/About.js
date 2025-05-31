import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Our Blog
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" paragraph>
            Welcome to our blog! We're passionate about sharing knowledge and insights
            about web development, programming, and technology. Our mission is to
            provide valuable content that helps developers of all levels improve
            their skills and stay up-to-date with the latest trends in technology.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're a beginner just starting your journey in web development
            or an experienced developer looking to expand your knowledge, you'll
            find articles and tutorials that cater to your needs. We cover topics
            ranging from basic programming concepts to advanced development
            techniques.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team of experienced developers and writers is dedicated to creating
            high-quality, well-researched content that's both informative and
            engaging. We believe in learning by doing, so our tutorials often
            include practical examples and code snippets that you can use in your
            own projects.
          </Typography>
          <Typography variant="body1">
            Feel free to explore our articles, leave comments, and join the
            discussion. We're always happy to hear from our readers and welcome
            your feedback and suggestions.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About; 