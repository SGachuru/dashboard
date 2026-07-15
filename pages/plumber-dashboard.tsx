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

const jobs = [
  { title: 'Emergency leak', client: 'A. Adams', status: 'New request' },
  { title: 'Installation', client: 'T. Brooks', status: 'Scheduled' },
]

const PlumberDashboardPage: NextPage = () => {
  return (
    <PortalShell title="Plumber Dashboard" subtitle="Manage incoming job requests, availability, subscriptions, earnings, and customer rating trends." active="Plumber Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Job requests</Typography>
              <List>
                {jobs.map((job) => (
                  <ListItem key={job.title} sx={{ px: 0 }}>
                    <ListItemText primary={job.title} secondary={job.client} />
                    <Chip label={job.status} color="primary" size="small" />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Performance summary</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="text.secondary">Earnings</Typography><Typography variant="h6" fontWeight={700}>$2,480</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Subscription</Typography><Typography variant="h6" fontWeight={700}>Pro plan</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Ratings</Typography><Typography variant="h6" fontWeight={700}>4.9 / 5</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default PlumberDashboardPage
