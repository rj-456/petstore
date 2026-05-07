import { Box, Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageWithFallback from '../common/ImageWithFallback';

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export default function PetCard({ pet }) {
  const navigate = useNavigate();

  return (
    <Card sx={{
      borderRadius: '24px',
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'visible',
      '&:hover': {
        transform: 'translateY(-12px)',
        boxShadow: '0 24px 48px rgba(255, 126, 103, 0.15)',
        '& .pet-image': {
          transform: 'scale(1.05)'
        }
      }
    }}>
      <CardActionArea onClick={() => navigate(`/pets/${pet.id}`)} sx={{ borderRadius: '24px', overflow: 'hidden' }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', pt: '100%' }}>
          <Box className="pet-image" sx={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            transition: 'transform 0.5s ease',
            '& img': { width: '100%', height: '100%', objectFit: 'cover' }
          }}>
            <ImageWithFallback src={pet.imageUrl} alt={pet.name} />
          </Box>
          <Box sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(4px)',
            px: 2,
            py: 0.5,
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <Typography sx={{ fontWeight: 800, color: 'primary.main' }}>
              {formatPrice(pet.price)}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={0.5}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>{pet.name}</Typography>
            <Chip
              label={pet.available ? 'Ready' : 'Adopted'}
              sx={{ 
                fontWeight: 600, 
                bgcolor: pet.available ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                color: pet.available ? 'success.main' : 'error.main',
                borderRadius: '8px'
              }}
              size="small"
            />
          </Stack>
          <Typography color="text.secondary" sx={{ fontWeight: 500 }}>{pet.breed}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
