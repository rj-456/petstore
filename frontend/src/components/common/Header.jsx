import { AppBar, Box, Button, Container, Stack, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <PetsIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '-0.5px' }}>
              Paws & Whiskers
            </Typography>
          </Stack>
          <Box>
            <Button color="inherit" onClick={() => navigate('/')} sx={{ fontWeight: 600 }}>
              Catalog
            </Button>
            <Button variant="contained" color="primary" sx={{ ml: 2, borderRadius: '20px', px: 3, fontWeight: 600, boxShadow: 'none' }}>
              Adopt Now
            </Button>
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
}
