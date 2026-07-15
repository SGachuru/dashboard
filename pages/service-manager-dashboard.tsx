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
import ServiceManagerShell from '../components/ServiceManagerShell'

const dispatches = [
  { title: 'Route 12 active jobs', status: 'Live' },
  { title: 'Reassign technician', status: 'Pending' },
]

const ServiceManagerDashboardPage: NextPage = () => {
  return (
    <ServiceManagerShell
      title="Service Manager Dashboard"
      subtitle="Coordinate dispatch operations, map coverage, plumber management, and reporting workflows."
      active="Dispatch"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Dispatch overview</Typography>
              <Stack spacing={1.5}>
                {dispatches.map((dispatch) => (
                  <Box key={dispatch.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#f8fafc' }}>
                    <Typography variant="body2" fontWeight={700}>{dispatch.title}</Typography>
                    <Chip label={dispatch.status} color="primary" size="small" sx={{ mt: 0.75 }} />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Operations snapshot</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="text.secondary">Response time</Typography><Typography variant="h6" fontWeight={700}>17 min</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">On-time rate</Typography><Typography variant="h6" fontWeight={700}>94%</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ServiceManagerShell>
  )
}

export default ServiceManagerDashboardPage
