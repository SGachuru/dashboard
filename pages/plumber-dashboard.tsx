import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from '@mui/material'
import type { NextPage } from 'next'
import PlumberDashboardShell from '../components/PlumberDashboardShell'

interface Job {
  id: string
  title: string
  client: string
  address: string
  date: string
  time: string
  status: string
  amount: string
}

const jobs: Job[] = [
  { id: 'WO-2847', title: 'Emergency leak repair', client: 'A. Adams', address: '124 Main St', date: '23 Jul', time: '09:00 AM', status: 'In Progress', amount: '$240' },
  { id: 'WO-2848', title: 'Water heater installation', client: 'T. Brooks', address: '88 Oak Ave', date: '23 Jul', time: '11:30 AM', status: 'Scheduled', amount: '$1,200' },
  { id: 'WO-2849', title: 'Drain cleaning', client: 'J. Carter', address: '456 Pine Rd', date: '23 Jul', time: '02:00 PM', status: 'New Request', amount: '$180' },
  { id: 'WO-2850', title: 'Pipe replacement', client: 'M. Davis', address: '77 Elm St', date: '24 Jul', time: '10:00 AM', status: 'Scheduled', amount: '$850' },
  { id: 'WO-2851', title: 'Faucet installation', client: 'S. Evans', address: '312 Maple Dr', date: '24 Jul', time: '01:00 PM', status: 'Pending', amount: '$120' },
]

const PlumberDashboardPage: NextPage = () => {
  const theme = useTheme()

  const statusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return { bg: '#22c55e18', color: '#22c55e', border: '#22c55e' }
      case 'In Progress':
        return { bg: '#3b82f618', color: '#3b82f6', border: '#3b82f6' }
      case 'Scheduled':
        return { bg: '#f59e0b18', color: '#f59e0b', border: '#f59e0b' }
      case 'New Request':
        return { bg: '#ef444418', color: '#ef4444', border: '#ef4444' }
      case 'Pending':
        return { bg: '#94a3b818', color: '#94a3b8', border: '#94a3b8' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8', border: '#94a3b8' }
    }
  }

  return (
    <PlumberDashboardShell
      title="Plumber Dashboard"
      subtitle="Manage incoming jobs, availability, subscriptions, earnings, and customer rating trends."
      active="Jobs"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Work Orders
              </Typography>
              <Chip label={`${jobs.length} jobs`} size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }} />
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Job
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Client
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Schedule
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155', textAlign: 'right' }}>
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jobs.map((job) => {
                    const sc = statusColor(job.status)
                    return (
                      <TableRow key={job.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>
                          {job.id}
                        </TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>
                          {job.title}
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                          <Box>
                            <Typography variant="body2" sx={{ color: '#cbd5e1', fontWeight: 500 }}>{job.client}</Typography>
                            <Typography variant="caption" sx={{ color: '#64748b' }}>{job.address}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                          <Box>
                            <Typography variant="body2" sx={{ color: '#cbd5e1' }}>{job.date}</Typography>
                            <Typography variant="caption" sx={{ color: '#64748b' }}>{job.time}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip
                            label={job.status}
                            size="small"
                            sx={{
                              bgcolor: `${sc.color}18`,
                              color: sc.color,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              height: 22,
                              border: `1px solid ${sc.color}40`,
                              '& .MuiChip-label': { px: 0.75 },
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 700, borderBottom: '1px solid #1e293b', textAlign: 'right' }}>
                          {job.amount}
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
            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Performance summary
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" color="#94a3b8">Earnings this week</Typography>
                      <Typography variant="h5" fontWeight={800} color="#f8fafc" sx={{ mt: 0.25 }}>$2,480</Typography>
                    </Box>
                    <Chip label="+12%" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
                  </Box>
                  <Box sx={{ width: '100%', height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                    <Box sx={{ width: '72%', height: '100%', borderRadius: 4, bgcolor: '#238636' }} />
                  </Box>
                  <Typography variant="caption" color="#64748b">72% of weekly target</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">
                    Subscription
                  </Typography>
                  <Chip label="Pro" size="small" sx={{ bgcolor: '#f59e0b18', color: '#f59e0b', fontWeight: 700, fontSize: '0.75rem' }} />
                </Stack>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Plan</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">Pro</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Next billing</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">1 Aug 2026</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Amount</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">$49/mo</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Recent reviews
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" fontWeight={700} color="#f8fafc">A. Adams</Typography>
                      <Typography variant="caption" color="#f59e0b">★★★★★</Typography>
                    </Stack>
                    <Typography variant="caption" color="#64748b">2 hours ago</Typography>
                    <Typography variant="body2" color="#94a3b8" sx={{ mt: 0.5 }}>Great work, very professional!</Typography>
                  </Box>
                  <Box>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" fontWeight={700} color="#f8fafc">T. Brooks</Typography>
                      <Typography variant="caption" color="#f59e0b">★★★★☆</Typography>
                    </Stack>
                    <Typography variant="caption" color="#64748b">Yesterday</Typography>
                    <Typography variant="body2" color="#94a3b8" sx={{ mt: 0.5 }}>On time and clean. Would hire again.</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </PlumberDashboardShell>
  )
}

export default PlumberDashboardPage
