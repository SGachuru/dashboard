import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import PortalShell from '../components/PortalShell'

const PlumberProfilePage: NextPage = () => {
  return (
    <PortalShell title="Plumber Profile" subtitle="A detailed profile showing ratings, completed jobs, service areas, and customer feedback." active="Find Plumbers">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h5" fontWeight={800}>Mina Alvarez</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>Certified plumber • 8 years experience</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <Chip label="Emergency repairs" color="primary" />
                <Chip label="Water heaters" />
                <Chip label="Installations" />
              </Stack>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" fontWeight={700}>Highlights</Typography>
                <Typography variant="body2" color="text.secondary">320 completed jobs • 4.9/5 rating • Available same day</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Recent reviews</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">“Very professional and fast.”</Typography>
                <Typography variant="caption" color="primary">— A. Davis</Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary">“Arrived on time and fixed the leak properly.”</Typography>
                <Typography variant="caption" color="primary">— T. Moore</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default PlumberProfilePage
