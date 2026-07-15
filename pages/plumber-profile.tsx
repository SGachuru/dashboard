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
    <PortalShell title="Plumber Profile" subtitle="A detailed profile showing ratings, completed jobs, service areas, and customer feedback.">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h5" fontWeight={800} color="#f0f6fc">Mina Alvarez</Typography>
              <Typography variant="body2" color="#8b949e" sx={{ mt: 0.5 }}>Certified plumber • 8 years experience</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <Chip label="Emergency repairs" size="small" sx={{ bgcolor: '#1f6feb', color: '#fff' }} />
                <Chip label="Water heaters" size="small" sx={{ bgcolor: '#0d1117', color: '#c9d1d9' }} />
                <Chip label="Installations" size="small" sx={{ bgcolor: '#0d1117', color: '#c9d1d9' }} />
              </Stack>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" fontWeight={700} color="#f0f6fc">Highlights</Typography>
                <Typography variant="body2" color="#8b949e">320 completed jobs • 4.9/5 rating • Available same day</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc">Recent reviews</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="#8b949e">“Very professional and fast.”</Typography>
                <Typography variant="caption" color="#58a6ff">— A. Davis</Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="#8b949e">“Arrived on time and fixed the leak properly.”</Typography>
                <Typography variant="caption" color="#58a6ff">— T. Moore</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default PlumberProfilePage
