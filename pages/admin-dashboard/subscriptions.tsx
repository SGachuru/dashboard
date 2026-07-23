import {
  Box,
  Button,
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
  Typography
} from '@mui/material'
import type { NextPage } from 'next'
import AdminDashboardShell from '../../components/AdminDashboardShell'

interface Subscription {
  id: string
  user: string
  plan: string
  status: string
  nextBilling: string
  amount: string
}

const subscriptions: Subscription[] = [
  { id: 'SUB-601', user: 'A. Adams', plan: 'Basic', status: 'Active', nextBilling: '01 Aug', amount: '$29/mo' },
  { id: 'SUB-602', user: 'Mina Alvarez', plan: 'Pro', status: 'Active', nextBilling: '05 Aug', amount: '$99/mo' },
  { id: 'SUB-603', user: 'Daniel Brooks', plan: 'Basic', status: 'Expired', nextBilling: '—', amount: '$29/mo' },
  { id: 'SUB-604', user: 'Sara Kim', plan: 'Pro', status: 'Active', nextBilling: '12 Aug', amount: '$99/mo' },
]

const AdminSubscriptionsPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'Expired':
        return { bg: '#94a3b818', color: '#94a3b8' }
      case 'Cancelled':
        return { bg: '#ef444418', color: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  return (
    <AdminDashboardShell
      title="Subscriptions"
      subtitle="View active/expired subscriptions, revenue, and reminders."
      active="Billing"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Subscriptions
              </Typography>
              <Chip label={`${subscriptions.length} records`} size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }} />
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>User</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Plan</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Next billing</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Amount</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subscriptions.map((sub) => {
                    const sc = statusColor(sub.status)
                    return (
                      <TableRow key={sub.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{sub.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{sub.user}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{sub.plan}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{sub.nextBilling}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 700, borderBottom: '1px solid #1e293b' }}>{sub.amount}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={sub.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
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
                  Revenue summary
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" color="#94a3b8">MRR</Typography>
                      <Typography variant="h5" fontWeight={800} color="#f8fafc" sx={{ mt: 0.25 }}>$18.4k</Typography>
                    </Box>
                    <Chip label="+8%" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                    <Box sx={{ width: '72%', height: '100%', borderRadius: 4, bgcolor: '#dc2626' }} />
                  </Box>
                  <Typography variant="caption" color="#64748b">72% of quarterly target</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Reminders
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Expiring soon</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f59e0b">7</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Past due</Typography>
                    <Typography variant="body2" fontWeight={700} color="#ef4444">3</Typography>
                  </Box>
                  <Button variant="outlined" size="small" sx={{ borderColor: '#334155', color: '#f8fafc', '&:hover': { borderColor: '#dc2626' } }}>
                    Send reminders
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </AdminDashboardShell>
  )
}

export default AdminSubscriptionsPage
