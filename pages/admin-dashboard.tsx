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

const adminItems = [
  { title: 'Approve KYC requests', status: 'Pending' },
  { title: 'Review disputes', status: 'Action needed' },
  { title: 'Manage subscriptions', status: 'Live' },
]

const AdminDashboardPage: NextPage = () => {
  return (
    <PortalShell
      title="Admin Dashboard"
      subtitle="Control users, KYC approvals, subscriptions, disputes, analytics, and content management from a central admin workspace."
      active="Admin"
      role="Administrator"
      stats={[
        { label: 'Users', value: '12.4k', trend: '+14%' },
        { label: 'Subscriptions', value: '3.8k', trend: '+9%' },
        { label: 'Dispute rate', value: '1.2%', trend: '-0.3%' },
        { label: 'Content updates', value: '64', trend: '+5%' },
      ]}
      menuItems={[
        { label: 'Admin Overview', href: '/admin-dashboard', icon: '📊' },
        { label: 'KYC Queue', href: '/admin-dashboard', icon: '🪪' },
        { label: 'Disputes', href: '/admin-dashboard', icon: '⚖️' },
        { label: 'Billing', href: '/admin-dashboard', icon: '💳' },
      ]}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Admin operations</Typography>
              <Stack spacing={1.5}>
                {adminItems.map((item) => (
                  <Box key={item.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#f8fafc' }}>
                    <Typography variant="body2" fontWeight={700}>{item.title}</Typography>
                    <Chip label={item.status} color="primary" size="small" sx={{ mt: 0.75 }} />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Platform health</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="text.secondary">System uptime</Typography><Typography variant="h6" fontWeight={700}>99.98%</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Support backlog</Typography><Typography variant="h6" fontWeight={700}>18 tickets</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default AdminDashboardPage
