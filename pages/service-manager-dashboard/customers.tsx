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

interface Customer {
  id: string
  name: string
  phone: string
  jobs: number
  lastJob: string
  status: string
}

const customers: Customer[] = [
  { id: 'CUS-701', name: 'A. Adams', phone: '+1 555-0101', jobs: 12, lastJob: '22 Jul', status: 'Active' },
  { id: 'CUS-702', name: 'T. Brooks', phone: '+1 555-0102', jobs: 5, lastJob: '19 Jul', status: 'Active' },
  { id: 'CUS-703', name: 'J. Carter', phone: '+1 555-0103', jobs: 8, lastJob: '21 Jul', status: 'Pending' },
  { id: 'CUS-704', name: 'M. Davis', phone: '+1 555-0104', jobs: 3, lastJob: '18 Jul', status: 'Issue' },
]

const CustomersPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'Pending':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Issue':
        return { bg: '#ef444418', color: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  return (
    <ServiceManagerShell
      title="Customer Management"
      subtitle="View customer history, disputes, and feedback."
      active="Technicians"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Customers
              </Typography>
              <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#1976d2', fontWeight: 700, '&:hover': { borderColor: '#1976d2' } }}>
                Export
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Name</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Phone</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Jobs</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Last job</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((customer) => {
                    const sc = statusColor(customer.status)
                    return (
                      <TableRow key={customer.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{customer.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{customer.name}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{customer.phone}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{customer.jobs}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{customer.lastJob}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={customer.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
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
                  Customer summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Total customers</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">1,284</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Active</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">1,180</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Open disputes</Typography>
                    <Typography variant="body2" fontWeight={700} color="#ef4444">3</Typography>
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
                    View customer
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    Send feedback request
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    Open dispute
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

export default CustomersPage
