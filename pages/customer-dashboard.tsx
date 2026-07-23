import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link as MuiLink
} from '@mui/material'
import Link from 'next/link'
import type { NextPage } from 'next'
import CustomerDashboardShell from '../components/CustomerDashboardShell'

interface Booking {
  id: string
  title: string
  date: string
  time: string
  status: string
  amount: string
}

const bookings: Booking[] = [
  { id: 'BK-921', title: 'Leak repair', date: '14 Jul 2026', time: '10:00 AM', status: 'Completed', amount: '$240' },
  { id: 'BK-922', title: 'Water heater service', date: '17 Jul 2026', time: '02:00 PM', status: 'In Progress', amount: '$180' },
  { id: 'BK-923', title: 'Drain cleaning', date: '20 Jul 2026', time: '09:30 AM', status: 'Scheduled', amount: '$150' },
  { id: 'BK-924', title: 'Pipe inspection', date: '25 Jul 2026', time: '11:00 AM', status: 'Pending', amount: '$120' },
]

const activities = [
  { title: 'Live tracking updates enabled', time: '2 hours ago', icon: '📍' },
  { title: 'Review submitted for previous job', time: 'Yesterday', icon: '⭐' },
  { title: 'Dispute raised for billing issue', time: '3 days ago', icon: '⚠️' },
  { title: 'New quote available for estimate', time: '1 week ago', icon: '📝' },
]

const CustomerDashboardPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return { bg: '#dcfce7', color: '#166534' }
      case 'In Progress':
        return { bg: '#dbeafe', color: '#1e40af' }
      case 'Scheduled':
        return { bg: '#fef3c7', color: '#92400e' }
      case 'Pending':
        return { bg: '#f1f5f9', color: '#475569' }
      default:
        return { bg: '#f1f5f9', color: '#475569' }
    }
  }

  return (
    <CustomerDashboardShell
      title="Customer Dashboard"
      subtitle="Track bookings, live updates, reviews, and service disputes all in one place."
      active="Overview"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#0f172a">
                Booking History
              </Typography>
              <Button component={Link} href="/request-service" size="small" variant="outlined" sx={{ borderColor: '#e2e8f0', color: '#0891b2', fontWeight: 700, '&:hover': { borderColor: '#0891b2' } }}>
                Book new
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f8fafc' }}>
                    <TableCell sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>
                      Service
                    </TableCell>
                    <TableCell sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>
                      Schedule
                    </TableCell>
                    <TableCell sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0' }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #e2e8f0', textAlign: 'right' }}>
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.map((booking) => {
                    const sc = statusColor(booking.status)
                    return (
                      <TableRow key={booking.id} sx={{ '&:hover': { bgcolor: '#f8fafc' }, transition: 'background 0.15s' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #f1f5f9' }}>
                          {booking.id}
                        </TableCell>
                        <TableCell sx={{ color: '#0f172a', fontWeight: 600, borderBottom: '1px solid #f1f5f9' }}>
                          {booking.title}
                        </TableCell>
                        <TableCell sx={{ color: '#64748b', borderBottom: '1px solid #f1f5f9' }}>
                          <Box>
                            <Typography variant="body2" sx={{ color: '#334155' }}>{booking.date}</Typography>
                            <Typography variant="caption" sx={{ color: '#94a3b8' }}>{booking.time}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #f1f5f9' }}>
                          <Chip
                            label={booking.status}
                            size="small"
                            sx={{
                              bgcolor: sc.bg,
                              color: sc.color,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              height: 22,
                              '& .MuiChip-label': { px: 0.75 },
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ color: '#0f172a', fontWeight: 700, borderBottom: '1px solid #f1f5f9', textAlign: 'right' }}>
                          {booking.amount}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Stack spacing={2.5}>
            <Card sx={{ borderRadius: 3, bgcolor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="#0f172a">
                    Recent Activity
                  </Typography>
                  <Button size="small" variant="text" sx={{ color: '#0891b2', fontWeight: 700, textTransform: 'none' }}>
                    View all
                  </Button>
                </Stack>
                <Stack spacing={2.5}>
                  {activities.map((activity) => (
                    <Box key={activity.title} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                        {activity.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" fontWeight={600} color="#0f172a" sx={{ mb: 0.25 }}>
                          {activity.title}
                        </Typography>
                        <Typography variant="caption" color="#94a3b8">
                          {activity.time}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#0f172a" sx={{ mb: 2 }}>
                  Quick actions
                </Typography>
                <Stack spacing={1.5} direction="column">
                  <MuiLink component={Link} href="/request-service" sx={{ textDecoration: 'none' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0', transition: 'all 0.15s', '&:hover': { borderColor: '#0891b2', bgcolor: '#f0f9ff' } }}>
                      <Box sx={{ fontSize: '1.25rem' }}>📋</Box>
                      <Box>
                        <Typography variant="body2" fontWeight={700} color="#0f172a">Request service</Typography>
                        <Typography variant="caption" color="#64748b">Submit a new job request</Typography>
                      </Box>
                    </Box>
                  </MuiLink>
                  <MuiLink component={Link} href="/find-plumbers" sx={{ textDecoration: 'none' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.5, borderRadius: 2, border: '1px solid #e2e8f0', transition: 'all 0.15s', '&:hover': { borderColor: '#0891b2', bgcolor: '#f0f9ff' } }}>
                      <Box sx={{ fontSize: '1.25rem' }}>🔍</Box>
                      <Box>
                        <Typography variant="body2" fontWeight={700} color="#0f172a">Find plumbers</Typography>
                        <Typography variant="caption" color="#64748b">Browse verified professionals</Typography>
                      </Box>
                    </Box>
                  </MuiLink>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </CustomerDashboardShell>
  )
}

export default CustomerDashboardPage
