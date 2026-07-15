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
import AdminDashboardShell from '../components/AdminDashboardShell'

const adminItems = [
  { title: 'Approve KYC requests', status: 'Pending' },
  { title: 'Review disputes', status: 'Action needed' },
  { title: 'Manage subscriptions', status: 'Live' },
]

const AdminDashboardPage: NextPage = () => {
  return (
    <AdminDashboardShell
      title="Admin Dashboard"
      subtitle="Control users, KYC approvals, subscriptions, disputes, analytics, and content management from a central admin workspace."
      active="Admin Overview"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Admin operations</Typography>
              <Stack spacing={1.5}>
                {adminItems.map((item) => (
                  <Box key={item.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#0d1117' }}>
                    <Typography variant="body2" fontWeight={700} color="#f0f6fc">{item.title}</Typography>
                    <Chip label={item.status} size="small" sx={{ mt: 0.75, bgcolor: '#1f6feb', color: '#fff' }} />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc">Platform health</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="#8b949e">System uptime</Typography><Typography variant="h6" fontWeight={700} color="#f0f6fc">99.98%</Typography></Box>
                <Box><Typography variant="body2" color="#8b949e">Support backlog</Typography><Typography variant="h6" fontWeight={700} color="#f0f6fc">18 tickets</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AdminDashboardShell>
  )
}

export default AdminDashboardPage
