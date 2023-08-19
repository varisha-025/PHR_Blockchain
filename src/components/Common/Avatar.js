import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Typography } from '@mui/material';

export default function LetterAvatars(props) {

  const initials = props.initials[0];

  return (
    <Stack direction="row" spacing={2} sx={{ textAlign: 'right', marginBottom: '10px' }}>
      <Avatar sx={{ bgcolor: deepOrange[500], width: '60px', height: '60px' }}>
        <Typography variant='h5'>
          {initials}
        </Typography></Avatar>
    </Stack>
  );
}