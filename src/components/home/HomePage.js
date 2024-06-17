import React from 'react'
import { Container, Typography } from '@mui/material'
import { Grid } from 'react-loader-spinner'

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid item>
        <Typography>
          نویسنده ها
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          مقالات
        </Typography>
      </Grid>
    </Container>
  )
}

export default HomePage
