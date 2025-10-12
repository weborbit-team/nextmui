'use client';
import { useState } from 'react';
import {
  Container, Typography, Grid, Box, Fab, Tabs, Tab, Paper,
  Accordion, AccordionSummary, AccordionDetails, Chip, Avatar,
  LinearProgress, CircularProgress, Alert, Button,
  TextField, Switch, FormControlLabel, Rating, Slider,
  List, ListItem, ListItemText, ListItemAvatar, Divider,
  Badge, IconButton, Tooltip, Card, CardContent
} from '@mui/material';
import {
  Add as AddIcon, ExpandMore, Star, Favorite, Share,
  Person, Email, Phone, Settings, Notifications
} from '@mui/icons-material';
import { Header, FeatureCard } from '@/components';

const features = [
  { title: 'Next.js', description: 'The React Framework for Production with built-in optimization.', action: 'Learn More' },
  { title: 'Material-UI', description: 'React components for faster and easier web development.', action: 'Explore' },
  { title: 'TypeScript Ready', description: 'Built-in TypeScript support for better development experience.', action: 'Get Started' }
];

function TabPanel({ children, value, index }) {
  return value === index ? <Box sx={{ p: 3 }}>{children}</Box> : null;
}

export default function Home() {
  const [tabValue, setTabValue] = useState(0);
  const [progress, setProgress] = useState(75);
  const [rating, setRating] = useState(4);
  const [sliderValue, setSliderValue] = useState(30);
  const [showAlert, setShowAlert] = useState(true);
  const [switchChecked, setSwitchChecked] = useState(true);

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Hero Section */}
        <Box 
          textAlign="center" 
          mb={6}
          sx={{
            background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
            borderRadius: 3,
            p: 6,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              zIndex: 1
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              MUI Component Showcase
            </Typography>
            <Typography variant="h5" color="text.secondary" mb={3}>
              Explore Material-UI's most useful components
            </Typography>
            <Box display="flex" justifyContent="center" gap={1} mb={3}>
              <Chip label="React" color="primary" sx={{ fontWeight: 500 }} />
              <Chip label="Next.js" color="secondary" sx={{ fontWeight: 500 }} />
              <Chip label="Material-UI" variant="outlined" sx={{ fontWeight: 500, borderColor: 'primary.main' }} />
            </Box>
          </Box>
        </Box>

        {/* Progress & Rating Section */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>Progress & Feedback</Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="body2" gutterBottom>Linear Progress</Typography>
              <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
              <Typography variant="body2">Loading: {progress}%</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex" alignItems="center" gap={2}>
                <CircularProgress size={40} />
                <Typography>Processing...</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" gutterBottom>Rating</Typography>
              <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
            </Grid>
          </Grid>
        </Paper>

        {/* Tabs Section */}
        <Paper sx={{ mb: 4 }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="Components" />
            <Tab label="Forms" />
            <Tab label="Navigation" />
          </Tabs>
          
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FeatureCard {...feature} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email" type="email" variant="outlined" sx={{ mb: 2 }} />
                <TextField fullWidth label="Message" multiline rows={4} variant="outlined" sx={{ mb: 2 }} />
                <FormControlLabel
                  control={<Switch checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />}
                  label="Enable notifications"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography gutterBottom>Slider Value: {sliderValue}</Typography>
                <Slider
                  value={sliderValue}
                  onChange={(e, newValue) => setSliderValue(newValue)}
                  valueLabelDisplay="auto"
                  sx={{ mb: 3 }}
                />
                <Button variant="contained" fullWidth>Submit Form</Button>
              </Grid>
            </Grid>
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar><Person /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Profile" secondary="Manage your account" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar><Settings /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Settings" secondary="Configure preferences" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar><Notifications /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Notifications" secondary="Manage alerts" />
              </ListItem>
            </List>
          </TabPanel>
        </Paper>

        {/* Accordion Section */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>Frequently Asked Questions</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>What is Material-UI?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Material-UI is a React component library that implements Google's Material Design.
                It provides pre-built components that are accessible, customizable, and production-ready.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>How do I customize themes?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can customize MUI themes using the createTheme function to define colors,
                typography, spacing, and component styles that match your brand.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Is it mobile responsive?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! MUI components are built with responsive design in mind and work seamlessly
                across different screen sizes using the Grid system and breakpoints.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Action Cards */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                  <Email />
                </Avatar>
                <Typography variant="h6" gutterBottom>Contact</Typography>
                <Typography variant="body2" color="text.secondary">
                  Get in touch with our team
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>Email Us</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: 'secondary.main', mx: 'auto', mb: 2 }}>
                  <Phone />
                </Avatar>
                <Typography variant="h6" gutterBottom>Support</Typography>
                <Typography variant="body2" color="text.secondary">
                  24/7 customer support available
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>Call Now</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: 'success.main', mx: 'auto', mb: 2 }}>
                  <Star />
                </Avatar>
                <Typography variant="h6" gutterBottom>Premium</Typography>
                <Typography variant="body2" color="text.secondary">
                  Upgrade to unlock all features
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>Upgrade</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Alert */}
        {showAlert && (
          <Alert 
            severity="info" 
            onClose={() => setShowAlert(false)}
            sx={{ mb: 4 }}
          >
            This is a demo showcasing various MUI components in action!
          </Alert>
        )}
      </Container>
      
      {/* Floating Action Buttons */}
      <Box sx={{ position: 'fixed', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Tooltip title="Add new item">
          <Fab color="primary" size="medium">
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Favorite">
          <Fab color="secondary" size="small">
            <Badge badgeContent={4} color="error">
              <Favorite />
            </Badge>
          </Fab>
        </Tooltip>
        <Tooltip title="Share">
          <IconButton color="primary" sx={{ bgcolor: 'background.paper', boxShadow: 2 }}>
            <Share />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}
