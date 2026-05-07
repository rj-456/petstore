import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const options = [
  { label: '🐾 All', value: '' },
  { label: '🐱 Cats', value: 'CATS' },
  { label: '🐶 Dogs', value: 'DOGS' },
  { label: '🐟 Fish', value: 'FISH' },
  { label: '🐦 Birds', value: 'BIRDS' },
];

export default function CategoryFilter({ value, onChange }) {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={value}
      onChange={(_, nextValue) => {
        if (nextValue !== null) {
          onChange(nextValue);
        }
      }}
      aria-label="Pet category filter"
      sx={{ 
        flexWrap: 'wrap', 
        gap: 1.5,
        '& .MuiToggleButtonGroup-grouped': {
          border: '1px solid rgba(0,0,0,0.1) !important',
          borderRadius: '30px !important',
          px: 3,
          py: 1,
          bgcolor: 'background.paper',
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: 'rgba(255, 126, 103, 0.1)',
            transform: 'translateY(-2px)'
          },
          '&.Mui-selected': {
            bgcolor: 'primary.main',
            color: 'white',
            boxShadow: '0 4px 12px rgba(255, 126, 103, 0.4)',
            '&:hover': {
              bgcolor: 'primary.dark',
            }
          }
        }
      }}
    >
      {options.map((option) => (
        <ToggleButton key={option.value || 'ALL'} value={option.value}>
          <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
            {option.label}
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
