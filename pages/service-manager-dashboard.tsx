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
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Dispatch overview</Typography>
              <Stack spacing={1.5}>
                {dispatches.map((dispatch) => (
                  <Box key={dispatch.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#0d1117' }}>
                    <Typography variant="body2" fontWeight={700} color="#f0f6fc">{dispatch.title}</Typography>
                    <Chip label={dispatch.status} size="small" sx={{ mt: 0.75, bgcolor: '#1f6feb', color: '#fff' }} />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc">Operations snapshot</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="#8b949e">Response time</Typography><Typography variant="h6" fontWeight={700} color="#f0f6fc">17 min</Typography></Box>
                <Box><Typography variant="body2" color="#8b949e">On-time rate</Typography><Typography variant="h6" fontWeight={700} color="#f0f6fc">94%</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ServiceManagerShell>
  )
}

export default ServiceManagerDashboardPage
