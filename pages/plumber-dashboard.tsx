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
import PlumberDashboardShell from '../components/PlumberDashboardShell'

const jobs = [
  { title: 'Emergency leak', client: 'A. Adams', status: 'New request' },
  { title: 'Installation', client: 'T. Brooks', status: 'Scheduled' },
]

const PlumberDashboardPage: NextPage = () => {
  return (
    <PlumberDashboardShell
      title="Plumber Dashboard"
      subtitle="Manage incoming job requests, availability, subscriptions, earnings, and customer rating trends."
      active="Jobs"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Job requests</Typography>
              <List>
                {jobs.map((job) => (
                  <ListItem key={job.title} sx={{ px: 0 }}>
                    <ListItemText primary={<Typography color="#f0f6fc">{job.title}</Typography>} secondary={<Typography color="#8b949e">{job.client}</Typography>} />
                    <Chip label={job.status} size="small" sx={{ bgcolor: '#1f6feb', color: '#fff' }} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc">Performance summary</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="#8b949e">Earnings</Typography><Typography variant="h6" fontWeight={700} color="#f0f6fc">$2,480</Typography></Box>
                <Box><Typography variant="body2" color="#8b949e">Subscription</Typography><Typography variant="h6" fontWeight={700} color="#f0f6fc">Pro plan</Typography></Box>
                <Box><Typography variant="body2" color="#8b949e">Ratings</Typography><Typography variant="h6" fontWeight={700} color="#f0f6fc">4.9 / 5</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PlumberDashboardShell>
  )
}

export default PlumberDashboardPage
