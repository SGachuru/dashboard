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
            <Card sx={{ borderRadius: 4, height: '100%' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="h6" fontWeight={700}>{plumber.name}</Typography>
                  <Chip label={`${plumber.rating}/5`} color="primary" size="small" />
                </Stack>
                <Typography variant="body2" color="text.secondary">Service area: {plumber.area}</Typography>
                <Box sx={{ mt: 1.5 }}>
                  {plumber.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
                <Button component={Link} href="/plumber-profile" variant="outlined" sx={{ mt: 2 }}>
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
