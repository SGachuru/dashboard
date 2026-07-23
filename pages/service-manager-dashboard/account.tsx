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
import ServiceManagerShell from '../../components/ServiceManagerShell'

interface Account {
  id: string
  company: string
  plan: string
  plumbers: number
  status: string
  nextBilling: string
}

const accounts: Account[] = [
  { id: 'ACC-101', company: 'A. Adams Plumbing', plan: 'Enterprise', plumbers: 8, status: 'Active', nextBilling: '01 Aug' },
  { id: 'ACC-102', company: 'M. Davis Co.', plan: 'Business', plumbers: 4, status: 'Active', nextBilling: '05 Aug' },
  { id: 'ACC-103', company: 'Quick Fix Ltd.', plan: 'Starter', plumbers: 2, status: 'Pending', nextBilling: '—' },
]

const AccountPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'Pending':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  return (
    <ServiceManagerShell
      title="Multi-Plumber Accounts"
      subtitle="Register companies, add plumbers under accounts, and manage subscriptions centrally."
      active="Technicians"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Accounts
              </Typography>
              <Button size="small" variant="contained" sx={{ bgcolor: '#1976d2', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#1565c0' } }}>
                + New Account
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Company</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Plan</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Plumbers</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Next billing</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accounts.map((acc) => {
                    const sc = statusColor(acc.status)
                    return (
                      <TableRow key={acc.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{acc.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{acc.company}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{acc.plan}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{acc.plumbers}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={acc.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{acc.nextBilling}</TableCell>
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
                  Account summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Total accounts</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">14</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Active accounts</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">12</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Total plumbers</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">38</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Quick actions
                </Typography>
                <Stack spacing={1.5}>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    + Add plumber
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    Manage subscriptions
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    View invoices
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </ServiceManagerShell>
  )
}

export default AccountPage
