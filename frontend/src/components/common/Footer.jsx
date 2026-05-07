import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, mt: 'auto', background: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Paws & Whiskers. Built with love for pets.
        </Typography>
      </Container>
    </Box>
  );
}
