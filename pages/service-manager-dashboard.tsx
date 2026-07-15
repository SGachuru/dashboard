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

const dispatches = [
  { title: 'Route 12 active jobs', status: 'Live' },
  { title: 'Reassign technician', status: 'Pending' },
]

const ServiceManagerDashboardPage: NextPage = () => {
  return (
    <PortalShell
      title="Service Manager Dashboard"
      subtitle="Coordinate dispatch operations, map coverage, plumber management, and reporting workflows."
      active="Service Manager"
      role="Service Manager"
      stats={[
        { label: 'Map coverage', value: '92%', trend: '+4%' },
        { label: 'Service SLA', value: '96%', trend: '+2%' },
        { label: 'Active jobs', value: '48', trend: '+8%' },
        { label: 'Technicians', value: '26', trend: '+1' },
      ]}
      menuItems={[
        { label: 'Dispatch', href: '/service-manager-dashboard', icon: '🧭' },
        { label: 'Coverage', href: '/service-manager-dashboard', icon: '🗺️' },
        { label: 'Plumbers', href: '/service-manager-dashboard', icon: '🧰' },
        { label: 'Reports', href: '/service-manager-dashboard', icon: '📈' },
      ]}
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
    </PortalShell>
  )
}

export default ServiceManagerDashboardPage
