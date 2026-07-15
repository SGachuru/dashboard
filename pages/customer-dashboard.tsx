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

const bookings = [
  { title: 'Leak repair', date: '14 Jul 2026', status: 'Completed' },
  { title: 'Water heater service', date: '10 Jul 2026', status: 'In progress' },
]

const CustomerDashboardPage: NextPage = () => {
  return (
    <PortalShell title="Customer Dashboard" subtitle="Track bookings, live updates, reviews, and service disputes all in one place." active="Customer Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Booking history</Typography>
              <List>
                {bookings.map((booking) => (
                  <ListItem key={booking.title} sx={{ px: 0 }}>
                    <ListItemText primary={booking.title} secondary={booking.date} />
                    <Chip label={booking.status} color="primary" size="small" />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Recent activity</Typography>
              <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary', mt: 1 }}>
                <li>Live tracking updates enabled</li>
                <li>Review submitted for previous job</li>
                <li>Dispute raised for billing issue</li>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default CustomerDashboardPage
