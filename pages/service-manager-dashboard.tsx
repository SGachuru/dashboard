import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
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
    <PortalShell title="Service Manager Dashboard" subtitle="Coordinate dispatch operations, map coverage, plumber management, and reporting workflows." active="Service Manager">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Dispatch overview</Typography>
              <List>
                {dispatches.map((dispatch) => (
                  <ListItem key={dispatch.title} sx={{ px: 0 }}>
                    <ListItemText primary={dispatch.title} />
                    <Chip label={dispatch.status} color="primary" size="small" />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Operations snapshot</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="text.secondary">Map coverage</Typography><Typography variant="h6" fontWeight={700}>92%</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Service SLA</Typography><Typography variant="h6" fontWeight={700}>96%</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default ServiceManagerDashboardPage
