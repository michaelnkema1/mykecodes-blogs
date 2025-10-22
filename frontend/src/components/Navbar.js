import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';

const StyledLink = styled(RouterLink)({
  textDecoration: 'none',
  color: 'inherit',
  marginLeft: '1rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '-4px',
    left: '0',
    backgroundColor: '#fff',
    transition: 'width 0.3s ease-in-out',
  },
  '&:hover::after': {
    width: '100%',
  },
});

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
});

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleLogout = () => {
    logout();
    handleUserMenuClose();
    navigate('/');
  };

  const displayName = user?.first_name && user?.last_name 
    ? `${user.first_name} ${user.last_name}` 
    : user?.username || 'User';

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              letterSpacing: '1px',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            MykeCodes Blogs
          </Typography>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              letterSpacing: '1px',
              display: { xs: 'block', sm: 'none' },
            }}
          >
            MykeCodes
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button color="inherit" component={StyledLink} to="/">
              Home
            </Button>
            {user && (
              <Button color="inherit" component={StyledLink} to="/create">
                Create Post
              </Button>
            )}
            <Button color="inherit" component={StyledLink} to="/about">
              About
            </Button>
            {user ? (
              <>
                <IconButton
                  onClick={handleUserMenuOpen}
                  sx={{ ml: 2 }}
                >
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                  >
                    {displayName.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={userMenuAnchor}
                  open={Boolean(userMenuAnchor)}
                  onClose={handleUserMenuClose}
                >
                  <MenuItem component={RouterLink} to="/profile" onClick={handleUserMenuClose}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                component={RouterLink}
                to="/login"
                sx={{ ml: 2 }}
              >
                Login
              </Button>
            )}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuItem component={RouterLink} to="/" onClick={handleMobileMenuClose}>
          Home
        </MenuItem>
        {user && (
          <MenuItem component={RouterLink} to="/create" onClick={handleMobileMenuClose}>
            Create Post
          </MenuItem>
        )}
        <MenuItem component={RouterLink} to="/about" onClick={handleMobileMenuClose}>
          About
        </MenuItem>
        {user ? (
          <>
            <MenuItem component={RouterLink} to="/profile" onClick={handleMobileMenuClose}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => { handleLogout(); handleMobileMenuClose(); }}>
              Logout
            </MenuItem>
          </>
        ) : (
          <MenuItem component={RouterLink} to="/login" onClick={handleMobileMenuClose}>
            Login
          </MenuItem>
        )}
      </Menu>
    </StyledAppBar>
  );
};

export default Navbar; 