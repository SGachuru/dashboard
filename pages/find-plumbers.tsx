import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import PortalShell from '../components/PortalShell'

const plumbers = [
  { name: 'Mina Alvarez', rating: '4.9', skills: ['Leak repair', 'Water heater'], area: 'Downtown' },
  { name: 'Daniel Brooks', rating: '4.8', skills: ['Drain cleaning', 'Installations'], area: 'Northside' },
  { name: 'Sara Kim', rating: '4.7', skills: ['Bathroom upgrades', 'Maintenance'], area: 'West End' },
]

const FindPlumbersPage: NextPage = () => {
  return (
    <PortalShell
      title="Find Plumbers"
      subtitle="Browse verified plumbers by skill, rating, service area, and availability."
    >
      <Grid container spacing={3}>
        {plumbers.map((plumber) => (
          <Grid item xs={12} md={4} key={plumber.name}>
            <Card sx={{ borderRadius: 4, height: '100%', bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="h6" fontWeight={700} color="#f0f6fc">{plumber.name}</Typography>
                  <Chip label={`${plumber.rating}/5`} size="small" sx={{ bgcolor: '#1f6feb', color: '#fff' }} />
                </Stack>
                <Typography variant="body2" color="#8b949e">Service area: {plumber.area}</Typography>
                <Box sx={{ mt: 1.5 }}>
                  {plumber.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ mr: 1, mb: 1, bgcolor: '#0d1117', color: '#c9d1d9' }} />
                  ))}
                </Box>
                <Button component={Link} href="/plumber-profile" variant="outlined" sx={{ mt: 2, color: '#f0f6fc', borderColor: '#30363d' }}>
                  View profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PortalShell>
  )
}

export default FindPlumbersPage
