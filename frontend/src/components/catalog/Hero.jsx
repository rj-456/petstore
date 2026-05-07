import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: '#ff7e67',
        color: 'white',
        overflow: 'hidden',
        borderRadius: { xs: 0, lg: '24px' },
        mt: { xs: 0, lg: 4 },
        mb: 6,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      
      {/* Dark overlay for text readability if needed */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: { xs: '100%', md: '50%' },
          background: 'linear-gradient(90deg, rgba(255,126,103,0.9) 0%, rgba(255,126,103,0.7) 60%, rgba(255,126,103,0) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack spacing={3} sx={{ py: { xs: 8, md: 12 }, maxWidth: '500px' }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
            Find Your New Best Friend
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
            Browse our wide selection of adorable pets waiting for a loving home.
          </Typography>
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                borderRadius: '30px',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Explore Pets
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
