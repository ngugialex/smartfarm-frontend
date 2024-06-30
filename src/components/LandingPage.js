// src/components/LandingPage.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, Card, CardContent, CardMedia, CssBaseline } from '@mui/material';

function LandingPage() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SmartFarm
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to SmartFarm
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              SmartFarm provides crop recommendations and weather data to help farmers optimize their yields and make informed decisions.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Get Started
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{ pt: '56.25%' }}
                  image="https://source.unsplash.com/random"
                  alt="Crop Recommendations"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Crop Recommendations
                  </Typography>
                  <Typography>
                    Get personalized crop recommendations based on your location and soil data.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{ pt: '56.25%' }}
                  image="https://source.unsplash.com/random"
                  alt="Weather Data"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weather Data
                  </Typography>
                  <Typography>
                    Access real-time weather data to plan your farming activities efficiently.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{ pt: '56.25%' }}
                  image="https://source.unsplash.com/random"
                  alt="Market Prices"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Market Prices
                  </Typography>
                  <Typography>
                    Stay updated with the latest market prices to maximize your profits.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          SmartFarm
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Empowering farmers with technology
        </Typography>
      </Box>
    </>
  );
}

export default LandingPage;
