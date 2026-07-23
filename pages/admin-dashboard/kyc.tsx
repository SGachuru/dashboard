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

interface KYCRecord {
  id: string
  plumber: string
  type: string
  submitted: string
  status: string
}

const kycRecords: KYCRecord[] = [
  { id: 'KYC-701', plumber: 'Mina Alvarez', type: 'ID + Business Reg', submitted: '20 Jul', status: 'Pending' },
  { id: 'KYC-702', plumber: 'Daniel Brooks', type: 'ID + Certificates', submitted: '19 Jul', status: 'Approved' },
  { id: 'KYC-703', plumber: 'Sara Kim', type: 'Business Reg', submitted: '18 Jul', status: 'Rejected' },
  { id: 'KYC-704', plumber: 'James Wilson', type: 'ID', submitted: '17 Jul', status: 'Pending' },
]

const AdminKYCPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'Pending':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Rejected':
        return { bg: '#ef444418', color: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  return (
    <AdminDashboardShell
      title="KYC Verification"
      subtitle="Review and approve plumber ID, certificates, and business registration."
      active="KYC Queue"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                KYC Queue
              </Typography>
              <Chip label={`${kycRecords.length} records`} size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }} />
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Plumber</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Documents</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Submitted</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {kycRecords.map((record) => {
                    const sc = statusColor(record.status)
                    return (
                      <TableRow key={record.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{record.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{record.plumber}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{record.type}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{record.submitted}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={record.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
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
                  Review summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Pending review</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f59e0b">2</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Approved this week</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">14</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Rejected this week</Typography>
                    <Typography variant="body2" fontWeight={700} color="#ef4444">1</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Actions
                </Typography>
                <Stack spacing={1.5}>
                  <Button variant="contained" sx={{ bgcolor: '#22c55e', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#16a34a' } }}>
                    Approve selected
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', '&:hover': { borderColor: '#ef4444', color: '#ef4444' } }}>
                    Reject selected
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', '&:hover': { borderColor: '#dc2626' } }}>
                    Request resubmission
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

export default AdminKYCPage
