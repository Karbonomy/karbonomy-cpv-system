import React from 'react'
import {
  Backdrop,
  CircularProgress,
  Typography,
  Box
} from '@mui/material';

export default function Loading({ open, content }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress color="inherit" />
          <Typography sx={{ marginTop: '1rem' }}>{content}</Typography>
        </Box>
      </Backdrop>
    </div>
  )
}