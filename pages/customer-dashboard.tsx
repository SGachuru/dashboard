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
import CustomerDashboardShell from '../components/CustomerDashboardShell'

const bookings = [
  { title: 'Leak repair', date: '14 Jul 2026', status: 'Completed' },
  { title: 'Water heater service', date: '10 Jul 2026', status: 'In progress' },
]

const CustomerDashboardPage: NextPage = () => {
  return (
    <CustomerDashboardShell
      title="Customer Dashboard"
      subtitle="Track bookings, live updates, reviews, and service disputes all in one place."
      active="Overview"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Booking history</Typography>
              <Stack spacing={1.5}>
                {bookings.map((booking) => (
                  <Box key={booking.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#f8fafc' }}>
                    <Typography variant="body2" fontWeight={700}>{booking.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{booking.date}</Typography>
                    <Chip label={booking.status} color="primary" size="small" sx={{ mt: 0.75, display: 'block', width: 'fit-content' }} />
                  </Box>
                ))}
              </Stack>
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
    </CustomerDashboardShell>
  )
}

export default CustomerDashboardPage
